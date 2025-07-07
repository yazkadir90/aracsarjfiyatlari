// @ts-nocheck
/* eslint-disable */
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function DELETE(req, context) {
  try {
    const id = Number(context.params.id);
    if (!id) return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
    // Önce ilişkili StationOption kayıtlarını sil
    await prisma.stationOption.deleteMany({ where: { brandId: id } });
    // Sonra markayı sil
    await prisma.stationBrand.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("DELETE error:", e);
    return NextResponse.json({ error: "Silme hatası", detail: String(e) }, { status: 500 });
  }
}

export async function PUT(req, context) {
  try {
    const id = Number(context.params.id);
    if (!id) return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
    const body = await req.json();
    const { name, sourceUrl, options } = body;
    // Önce eski StationOption kayıtlarını sil
    await prisma.stationOption.deleteMany({ where: { brandId: id } });
    // Marka güncelle
    const updatedBrand = await prisma.stationBrand.update({
      where: { id },
      data: {
        name,
        sourceUrl,
        options: {
          create: options?.map(opt => ({
            socketType: opt.socketType,
            power: opt.power,
            priceAmount: parseFloat(opt.priceAmount),
            priceUnit: "TL/kWh"
          })) || []
        }
      },
      include: { options: true }
    });
    return NextResponse.json({ brand: updatedBrand });
  } catch (e) {
    console.error("PUT error:", e);
    return NextResponse.json({ error: "Güncelleme hatası", detail: String(e) }, { status: 500 });
  }
} 