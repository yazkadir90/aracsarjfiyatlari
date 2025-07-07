import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const brands = await prisma.stationBrand.findMany({
      include: {
        options: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ brands });
  } catch (error) {
    console.error('Brands fetch error:', error);
    return NextResponse.json(
      { error: 'Markalar getirilemedi' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, options, sourceUrl, approved = false } = body;

    if (!name || !options || !Array.isArray(options)) {
      return NextResponse.json(
        { error: 'Geçersiz veri formatı' },
        { status: 400 }
      );
    }

    const brand = await prisma.stationBrand.create({
      data: {
        name,
        sourceUrl: sourceUrl || '',
        approved: approved,
        options: {
          create: options.map((opt: { socketType: string; power: string; priceAmount: number; priceUnit?: string }) => ({
            socketType: opt.socketType,
            power: opt.power,
            priceAmount: opt.priceAmount,
            priceUnit: opt.priceUnit || 'TL/kWh',
          })),
        },
      },
      include: {
        options: true,
      },
    });

    return NextResponse.json({ brand });
  } catch (error) {
    console.error('Brand creation error:', error);
    return NextResponse.json(
      { error: 'Marka oluşturulamadı' },
      { status: 500 }
    );
  }
} 