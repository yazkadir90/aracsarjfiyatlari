import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const setting = await prisma.seoSetting.findFirst();
    return NextResponse.json({ seo: setting });
  } catch (error) {
    console.error('SEO GET error:', error);
    return NextResponse.json({ error: 'SEO ayarları getirilemedi' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, description } = await req.json();
    
    if (!title || !description) {
      return NextResponse.json({ error: 'Başlık ve açıklama alanları zorunludur' }, { status: 400 });
    }
    
    let setting = await prisma.seoSetting.findFirst();
    
    if (setting) {
      // Mevcut kaydı güncelle
      setting = await prisma.seoSetting.update({ 
        where: { id: setting.id }, 
        data: { title, description } 
      });
    } else {
      // Yeni kayıt oluştur
      setting = await prisma.seoSetting.create({ 
        data: { title, description } 
      });
    }
    
    return NextResponse.json({ 
      success: true, 
      seo: setting,
      message: 'SEO ayarları başarıyla kaydedildi'
    });
  } catch (error) {
    console.error('SEO POST error:', error);
    return NextResponse.json({ 
      error: 'SEO ayarları kaydedilemedi', 
      detail: String(error) 
    }, { status: 500 });
  }
} 