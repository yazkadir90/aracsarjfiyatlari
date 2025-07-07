const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function updatePowerValues() {
  console.log('Güç değerleri güncelleniyor...');

  try {
    // Tüm şarj seçeneklerini getir
    const options = await prisma.stationOption.findMany();
    
    console.log(`Toplam ${options.length} şarj seçeneği bulundu.`);

    // Her seçeneği güncelle
    for (const option of options) {
      const currentPower = option.power;
      
      // Eğer zaten "kW" içeriyorsa atla
      if (currentPower && currentPower.toLowerCase().includes('kw')) {
        console.log(`Skipping: ${currentPower} (already has kW)`);
        continue;
      }
      
      // Sayısal değer ise "kW" ekle
      if (currentPower && !isNaN(Number(currentPower))) {
        const newPower = `${currentPower} kW`;
        console.log(`Updating: ${currentPower} → ${newPower}`);
        
        await prisma.stationOption.update({
          where: { id: option.id },
          data: { power: newPower }
        });
      } else {
        console.log(`Skipping: ${currentPower} (not a number)`);
      }
    }

    console.log('Güç değerleri başarıyla güncellendi!');
  } catch (error) {
    console.error('Hata:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updatePowerValues(); 