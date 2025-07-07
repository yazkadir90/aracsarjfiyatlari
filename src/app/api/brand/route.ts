import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, options, sourceUrl } = body;
    if (!name || !options?.length || !sourceUrl) {
      return NextResponse.json({ error: "Eksik bilgi" }, { status: 400 });
    }
    // Marka kaydı
    const brand = await prisma.stationBrand.create({
      data: {
        name,
        sourceUrl,
        approved: false,
        options: {
          create: options.map((opt: any) => ({
            socketType: opt.socketType,
            power: opt.power,
            priceAmount: opt.priceAmount,
            priceUnit: opt.priceUnit
          }))
        }
      },
      include: { options: true }
    });
    return NextResponse.json({ success: true, brand });
  } catch (e) {
    return NextResponse.json({ error: "Kayıt sırasında hata oluştu", detail: String(e) }, { status: 500 });
  }
}

export async function GET() {
  try {
    const brands = await prisma.stationBrand.findMany({
      where: { approved: true },
      include: { options: true },
      orderBy: { name: "asc" }
    });
    return NextResponse.json({ brands });
  } catch (e) {
    return NextResponse.json({ error: "Listeleme hatası", detail: String(e) }, { status: 500 });
  }
} 