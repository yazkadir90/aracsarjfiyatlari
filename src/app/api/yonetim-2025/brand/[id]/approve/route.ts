import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (!id) return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
    
    const brand = await prisma.stationBrand.update({
      where: { id },
      data: { approved: true },
      include: { options: true }
    });
    
    return NextResponse.json({ brand });
  } catch (e) {
    console.error("Approve error:", e);
    return NextResponse.json({ error: "Onaylama hatası", detail: String(e) }, { status: 500 });
  }
} 