import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const site = await prisma.siteSetting.findFirst();
    return NextResponse.json({ site });
  } catch (error) {
    console.error('Site settings fetch error:', error);
    return NextResponse.json(
      { error: 'Site ayarları getirilemedi' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { gtmCode } = body;

    const site = await prisma.siteSetting.upsert({
      where: { id: 1 },
      update: { gtmCode: gtmCode || '' },
      create: { id: 1, gtmCode: gtmCode || '' },
    });

    return NextResponse.json({ site });
  } catch (error) {
    console.error('Site settings update error:', error);
    return NextResponse.json(
      { error: 'Site ayarları güncellenemedi' },
      { status: 500 }
    );
  }
} 