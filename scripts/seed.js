import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Seed verileri ekleniyor...');

  // Anasayfadaki tüm araçlar (carList)
  const cars = [
    { brand: "BMW", model: "i3 120 Ah", capacity: 42.2, consumption: 15.2, wltpRange: 310 },
    { brand: "BMW", model: "iX3", capacity: 80, consumption: 18.5, wltpRange: 460 },
    { brand: "Citroen", model: "e-C4", capacity: 50, consumption: 16.0, wltpRange: 357 },
    { brand: "Citroen", model: "e-C4", capacity: 54, consumption: 15.5, wltpRange: 406 },
    { brand: "Fiat", model: "500e 42 kWh", capacity: 42, consumption: 14.8, wltpRange: 320 },
    { brand: "Hyundai", model: "Ioniq 5", capacity: 58, consumption: 16.5, wltpRange: 384 },
    { brand: "Hyundai", model: "Ioniq 5 Long Range", capacity: 72.6, consumption: 17.0, wltpRange: 481 },
    { brand: "Hyundai", model: "Kona Electric 64 kWh", capacity: 64, consumption: 15.4, wltpRange: 484 },
    { brand: "Kia", model: "EV3 Long Range", capacity: 81.4, consumption: 15.5, wltpRange: 600 },
    { brand: "Kia", model: "EV3 Standart Range", capacity: 58.3, consumption: 15.0, wltpRange: 410 },
    { brand: "Kia", model: "EV6 Long Range", capacity: 77.4, consumption: 17.2, wltpRange: 528 },
    { brand: "Kia", model: "EV6 Standard Range", capacity: 58, consumption: 16.5, wltpRange: 394 },
    { brand: "Kia", model: "Niro EV", capacity: 64.8, consumption: 15.9, wltpRange: 460 },
    { brand: "Mercedes", model: "EQA 250", capacity: 66.5, consumption: 17.9, wltpRange: 426 },
    { brand: "Mercedes", model: "EQB 350", capacity: 66.5, consumption: 18.5, wltpRange: 419 },
    { brand: "MG", model: "MG4 Standard", capacity: 51, consumption: 16.0, wltpRange: 350 },
    { brand: "MG", model: "ZS EV", capacity: 44.5, consumption: 17.2, wltpRange: 320 },
    { brand: "Mini", model: "Cooper SE", capacity: 32.6, consumption: 17.5, wltpRange: 234 },
    { brand: "Nissan", model: "Leaf 40 kWh", capacity: 40, consumption: 17.0, wltpRange: 270 },
    { brand: "Nissan", model: "Leaf 62 kWh", capacity: 62, consumption: 18.0, wltpRange: 385 },
    { brand: "Opel", model: "Corsa-e", capacity: 50, consumption: 16.0, wltpRange: 337 },
    { brand: "Opel", model: "Frontera Electric", capacity: 54, consumption: 15.5, wltpRange: 400 },
    { brand: "Opel", model: "Mokka-e", capacity: 50, consumption: 16.5, wltpRange: 324 },
    { brand: "Peugeot", model: "e-208", capacity: 50, consumption: 15.5, wltpRange: 362 },
    { brand: "Peugeot", model: "e-2008", capacity: 50, consumption: 16.2, wltpRange: 345 },
    { brand: "Porsche", model: "Taycan 4S", capacity: 79.2, consumption: 21.0, wltpRange: 463 },
    { brand: "Porsche", model: "Taycan Turbo S", capacity: 93.4, consumption: 23.0, wltpRange: 390 },
    { brand: "Renault", model: "Megane E-Tech EV40", capacity: 40, consumption: 15.5, wltpRange: 300 },
    { brand: "Renault", model: "Megane E-Tech EV60", capacity: 60, consumption: 16.1, wltpRange: 450 },
    { brand: "Renault", model: "Zoe R110", capacity: 52, consumption: 17.0, wltpRange: 395 },
    { brand: "Skoda", model: "Enyaq iV 60", capacity: 62, consumption: 16.0, wltpRange: 400 },
    { brand: "Skoda", model: "Enyaq iV 80", capacity: 82, consumption: 16.5, wltpRange: 537 },
    { brand: "Tesla", model: "Model 3 Long Range", capacity: 82, consumption: 15.0, wltpRange: 629 },
    { brand: "Tesla", model: "Model 3 Performance", capacity: 82, consumption: 16.0, wltpRange: 567 },
    { brand: "Tesla", model: "Model 3 Standard Range", capacity: 60, consumption: 14.5, wltpRange: 513 },
    { brand: "Tesla", model: "Model S", capacity: 100, consumption: 18.0, wltpRange: 634 },
    { brand: "Tesla", model: "Model X", capacity: 100, consumption: 20.0, wltpRange: 576 },
    { brand: "Tesla", model: "Model Y Long Range", capacity: 82, consumption: 16.0, wltpRange: 533 },
    { brand: "Tesla", model: "Model Y Performance", capacity: 82, consumption: 16.5, wltpRange: 514 },
    { brand: "Tesla", model: "Model Y Standard Range", capacity: 62.5, consumption: 15.5, wltpRange: 455 },
    { brand: "Togg", model: "T10F V1 RWD Standart Menzil", capacity: 52.4, consumption: 15.0, wltpRange: 350 },
    { brand: "Togg", model: "T10F V2 AWD Uzun Menzil", capacity: 88.5, consumption: 18.5, wltpRange: 570 },
    { brand: "Togg", model: "T10F V2 RWD Uzun Menzil", capacity: 88.5, consumption: 17.0, wltpRange: 600 },
    { brand: "Togg", model: "T10X V1 RWD Standart Menzil", capacity: 52.4, consumption: 16.3, wltpRange: 314 },
    { brand: "Togg", model: "T10X V2 AWD Uzun Menzil", capacity: 88.5, consumption: 20.0, wltpRange: 500 },
    { brand: "Togg", model: "T10X V2 RWD Standart Menzil", capacity: 52.4, consumption: 16.3, wltpRange: 314 },
    { brand: "Togg", model: "T10X V2 RWD Uzun Menzil", capacity: 88.5, consumption: 19.1, wltpRange: 523 }
  ];

  for (const car of cars) {
    await prisma.car.upsert({
      where: { brand_model: { brand: car.brand, model: car.model } },
      update: car,
      create: car
    });
  }

  console.log('Araçlar başarıyla eklendi!');

  // Örnek şarj istasyonu verileri
  const stationBrands = [
    {
      name: "Tesla Supercharger",
      sourceUrl: "https://www.tesla.com/tr/supercharger",
      approved: true,
      options: [
        { socketType: "Tesla", power: "150-250 kW", priceAmount: 3.50 },
        { socketType: "Tesla", power: "72 kW", priceAmount: 2.80 }
      ]
    },
    {
      name: "Eşarj",
      sourceUrl: "https://www.esarj.com.tr",
      approved: true,
      options: [
        { socketType: "Type 2", power: "22 kW", priceAmount: 2.50 },
        { socketType: "CCS", power: "50-150 kW", priceAmount: 3.20 },
        { socketType: "CHAdeMO", power: "50 kW", priceAmount: 3.20 }
      ]
    },
    {
      name: "ZES",
      sourceUrl: "https://www.zes.com.tr",
      approved: true,
      options: [
        { socketType: "Type 2", power: "22 kW", priceAmount: 2.30 },
        { socketType: "CCS", power: "60-120 kW", priceAmount: 3.00 },
        { socketType: "CHAdeMO", power: "50 kW", priceAmount: 3.00 }
      ]
    },
    {
      name: "Shell Recharge",
      sourceUrl: "https://www.shell.com.tr/tr_turkey/motorists/shell-station-locator.html",
      approved: true,
      options: [
        { socketType: "Type 2", power: "22 kW", priceAmount: 2.80 },
        { socketType: "CCS", power: "50-175 kW", priceAmount: 3.50 }
      ]
    },
    {
      name: "BP Pulse",
      sourceUrl: "https://www.bppulse.co.uk",
      approved: true,
      options: [
        { socketType: "Type 2", power: "22 kW", priceAmount: 2.60 },
        { socketType: "CCS", power: "50-150 kW", priceAmount: 3.30 }
      ]
    },
    {
      name: "Togg Şarj",
      sourceUrl: "https://www.togg.com.tr",
      approved: true,
      options: [
        { socketType: "Type 2", power: "22 kW", priceAmount: 2.20 },
        { socketType: "CCS", power: "60-180 kW", priceAmount: 2.90 }
      ]
    },
    {
      name: "Voltium",
      sourceUrl: "https://www.voltium.com.tr",
      approved: true,
      options: [
        { socketType: "Type 2", power: "22 kW", priceAmount: 2.40 },
        { socketType: "CCS", power: "50-120 kW", priceAmount: 3.10 }
      ]
    },
    {
      name: "Elektrikli Araç Şarj",
      sourceUrl: "https://www.elektrikliaracsarj.com",
      approved: true,
      options: [
        { socketType: "Type 2", power: "22 kW", priceAmount: 2.70 },
        { socketType: "CCS", power: "50-100 kW", priceAmount: 3.40 }
      ]
    }
  ];

  for (const brandData of stationBrands) {
    // Önce mevcut markayı kontrol et
    const existingBrand = await prisma.stationBrand.findFirst({
      where: { name: brandData.name }
    });

    if (existingBrand) {
      // Mevcut markayı güncelle
      await prisma.stationOption.deleteMany({
        where: { brandId: existingBrand.id }
      });
      
      await prisma.stationBrand.update({
        where: { id: existingBrand.id },
        data: {
          sourceUrl: brandData.sourceUrl,
          approved: brandData.approved,
          options: {
            create: brandData.options.map(opt => ({
              socketType: opt.socketType,
              power: opt.power,
              priceAmount: opt.priceAmount,
              priceUnit: "TL/kWh"
            }))
          }
        }
      });
    } else {
      // Yeni marka oluştur
      await prisma.stationBrand.create({
        data: {
          name: brandData.name,
          sourceUrl: brandData.sourceUrl,
          approved: brandData.approved,
          options: {
            create: brandData.options.map(opt => ({
              socketType: opt.socketType,
              power: opt.power,
              priceAmount: opt.priceAmount,
              priceUnit: "TL/kWh"
            }))
          }
        }
      });
    }
  }

  console.log('Şarj istasyonları başarıyla eklendi!');

  // SEO ayarları
  await prisma.seoSetting.upsert({
    where: { id: 1 },
    update: {
      title: "Elektrikli Araç Şarj Fiyatları - Türkiye'deki Şarj İstasyonları",
      description: "Türkiye'deki elektrikli araç şarj istasyonlarının güncel fiyatlarını karşılaştırın. Tesla, Eşarj, ZES ve diğer şarj ağlarının fiyatları."
    },
    create: {
      id: 1,
      title: "Elektrikli Araç Şarj Fiyatları - Türkiye'deki Şarj İstasyonları",
      description: "Türkiye'deki elektrikli araç şarj istasyonlarının güncel fiyatlarını karşılaştırın. Tesla, Eşarj, ZES ve diğer şarj ağlarının fiyatları."
    }
  });

  console.log('SEO ayarları başarıyla eklendi!');

  // Site ayarları
  await prisma.siteSetting.upsert({
    where: { id: 1 },
    update: {
      gtmCode: "GTM-XXXXXXX"
    },
    create: {
      id: 1,
      gtmCode: "GTM-XXXXXXX"
    }
  });

  console.log('Site ayarları başarıyla eklendi!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 