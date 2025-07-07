import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

// Tüm araçları getir
export async function GET() {
  try {
    const cars = await prisma.car.findMany({
      orderBy: [
        { brand: 'asc' },
        { model: 'asc' }
      ]
    });
    
    return NextResponse.json(cars);
  } catch (error) {
    console.error('Araçlar getirilirken hata:', error);
    return NextResponse.json(
      { error: 'Araçlar getirilemedi' },
      { status: 500 }
    );
  }
}

// Yeni araç ekle
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { brand, model, capacity, consumption, wltpRange, sortOrder } = body;

    // Gerekli alanları kontrol et
    if (!brand || !model || !capacity || !consumption || !wltpRange) {
      return NextResponse.json(
        { error: 'Tüm alanlar gereklidir' },
        { status: 400 }
      );
    }

    const car = await prisma.car.create({
      data: {
        brand,
        model,
        capacity: parseFloat(capacity),
        consumption: parseFloat(consumption),
        wltpRange: parseInt(wltpRange),
        sortOrder: sortOrder || 0
      }
    });

    return NextResponse.json(car, { status: 201 });
  } catch (error: any) {
    console.error('Araç eklenirken hata:', error);
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Bu marka-model kombinasyonu zaten mevcut' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Araç eklenemedi' },
      { status: 500 }
    );
  }
}

// Araç güncelle
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, brand, model, capacity, consumption, wltpRange, isActive, sortOrder } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Araç ID\'si gereklidir' },
        { status: 400 }
      );
    }

    const car = await prisma.car.update({
      where: { id: parseInt(id) },
      data: {
        brand,
        model,
        capacity: parseFloat(capacity),
        consumption: parseFloat(consumption),
        wltpRange: parseInt(wltpRange),
        isActive: Boolean(isActive),
        sortOrder: sortOrder || 0
      }
    });

    return NextResponse.json(car);
  } catch (error: any) {
    console.error('Araç güncellenirken hata:', error);
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Bu marka-model kombinasyonu zaten mevcut' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Araç güncellenemedi' },
      { status: 500 }
    );
  }
}

// Araç sil
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Araç ID\'si gereklidir' },
        { status: 400 }
      );
    }

    await prisma.car.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ message: 'Araç başarıyla silindi' });
  } catch (error) {
    console.error('Araç silinirken hata:', error);
    return NextResponse.json(
      { error: 'Araç silinemedi' },
      { status: 500 }
    );
  }
} 