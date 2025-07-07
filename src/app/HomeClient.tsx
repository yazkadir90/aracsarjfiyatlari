"use client";
import { useState, useEffect } from "react";
import React from "react";
import { FiExternalLink, FiInfo, FiZap, FiPower, FiTag, FiX } from "react-icons/fi";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Car ve Brand tiplerini tanımla
interface Car {
  brand: string;
  model: string;
  isActive: boolean;
  consumption: number;
  capacity: number;
  wltpRange?: number;
}
interface BrandOption {
  socketType: string;
  power: string;
  priceAmount: string | number;
}
interface Brand {
  name: string;
  options: BrandOption[];
  sourceUrl?: string;
}

export default function HomeClient() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    options: [
      { socketType: "", power: "", priceAmount: "" }
    ],
    sourceUrl: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [brands, setBrands] = useState<Brand[]>([]);
  const [filter, setFilter] = useState({
    brand: '',
    socketType: '',
    power: '',
    priceMin: '',
    priceMax: ''
  });
  const [cars, setCars] = useState<Car[]>([]);
  const [loadingCars, setLoadingCars] = useState(true);
  const [errorCars, setErrorCars] = useState("");

  useEffect(() => {
    async function fetchCars() {
      setLoadingCars(true);
      try {
        const res = await fetch("/api/yonetim-2025/cars");
        if (!res.ok) throw new Error("Araçlar getirilemedi");
        const data = await res.json();
        // Aktif araçları alfabetik sıraya göre sırala
        const sortedCars = data
          .filter((c: Car) => c.isActive)
          .sort((a: Car, b: Car) => {
            if (a.brand === b.brand) {
              return a.model.localeCompare(b.model);
            }
            return a.brand.localeCompare(b.brand);
          });
        setCars(sortedCars);
      } catch (e) {
        setErrorCars("Araçlar yüklenemedi");
      } finally {
        setLoadingCars(false);
      }
    }
    fetchCars();
  }, []);

  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  useEffect(() => {
    if (cars.length > 0 && !selectedCar) {
      // Tesla Model Y Standard Range&apos;i varsayılan seçili yap
      const defaultCar = cars.find(c => c.brand === "Tesla" && c.model === "Model Y Standard Range&apos;i");
      setSelectedCar(defaultCar || cars[0]);
    }
  }, [cars]);

  // --- Hesaplama state ---
  const [chargeRange, setChargeRange] = useState<[number, number]>([20, 80]);
  const [unitPrice, setUnitPrice] = useState(12);
  const [customUnitPrice, setCustomUnitPrice] = useState('');

  // Birim fiyat seçenekleri
  const priceOptions = [9, 10, 11, 12, 13];

  // Hesaplama
  const consumption = selectedCar?.consumption || 16;
  const chargedKwh = selectedCar ? ((chargeRange[1] - chargeRange[0]) / 100) * selectedCar.capacity : 0;
  const totalCost = chargedKwh * unitPrice;
  let estimatedRange = 0;
  let rangeMethod = "";
  if (selectedCar && selectedCar.wltpRange) {
    estimatedRange = (chargedKwh / selectedCar.capacity) * selectedCar.wltpRange;
    rangeMethod = "WLTP menziliyle hesaplandı";
  } else {
    estimatedRange = consumption > 0 ? (chargedKwh / consumption) * 100 : 0;
    rangeMethod = "Ortalama tüketimle hesaplandı";
  }
  const costPerKm = estimatedRange > 0 ? totalCost / estimatedRange : 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleOptionChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const newOptions = [...prev.options];
      newOptions[i] = { ...newOptions[i], [name]: value };
      return { ...prev, options: newOptions };
    });
  };
  const addOption = () => {
    setForm((prev) => ({ ...prev, options: [...prev.options, { socketType: "", power: "", priceAmount: "" }] }));
  };
  const removeOption = (i: number) => {
    setForm((prev) => ({ ...prev, options: prev.options.filter((_, idx) => idx !== i) }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/brand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          options: form.options.map(opt => ({
            socketType: opt.socketType,
            power: opt.power,
            priceAmount: parseFloat(opt.priceAmount as string),
            priceUnit: "TL/kWh"
          })),
          sourceUrl: form.sourceUrl
        })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Kayıt başarıyla gönderildi, admin onayı sonrası yayına alınacak.");
        setForm({ name: "", options: [{ socketType: "", power: "", priceAmount: "" }], sourceUrl: "" });
        setShowModal(false);
      } else {
        setMessage(data.error || "Hata oluştu");
      }
    } catch {
      setMessage("Sunucu hatası");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("/api/brand");
        const data = await res.json();
        if (res.ok) {
          setBrands(data.brands);
        } else {
          setMessage(data.error || "Hata oluştu");
        }
      } catch (e) {
        setMessage("Sunucu hatası");
      }
    };
    fetchBrands();
  }, []);

  // Filtre seçeneklerini dinamik oluştur
  const allBrands = Array.from(new Set(brands.map(b => b.name)));
  const allSocketTypes = Array.from(new Set(brands.flatMap(b => b.options.map((o: BrandOption) => o.socketType))));

  // Filtrelenmiş ve sıralanmış veriler
  const filteredBrands = brands
    .map(brand => ({
      ...brand,
      options: brand.options.filter((opt: BrandOption) => {
        const power = Number(opt.power);
        const price = Number(opt.priceAmount);
        return (
          (!filter.brand || brand.name === filter.brand) &&
          (!filter.socketType || opt.socketType === filter.socketType) &&
          (!filter.power || opt.power.toLowerCase().includes(filter.power.toLowerCase())) &&
          (!filter.priceMin || price >= Number(filter.priceMin)) &&
          (!filter.priceMax || price <= Number(filter.priceMax))
        );
      })
    }))
    .filter(b => b.options.length > 0)
    .sort((a, b) => a.name.localeCompare(b.name)); // Alfabetik sıralama

  return (
    <>
      <div className="max-w-5xl mx-auto py-8 px-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
        {/* Hero Bölümü ve Hesaplama Aracı */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Sol: Başlık ve açıklama */}
          <div className="flex flex-col justify-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-lg">
            <FiZap className="text-white" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Elektrikli Araç Şarj Fiyatları
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
              Türkiye'deki elektrikli araç şarj istasyonlarının güncel fiyatlarını karşılaştırın. Marka, soket tipi, güç ve fiyat bilgileriyle en uygun seçeneği bulun.
          </p>
          </div>
          {/* Sağ: Şarj Maliyeti Hesaplama */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-5 flex flex-col gap-4 max-w-md mx-auto w-full">
            <h2 className="text-lg font-bold mb-1 text-gray-900 dark:text-white text-center">Araç Şarj Maliyeti Hesaplama</h2>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl bg-[#f6f8fa] dark:bg-[#23272f] border border-gray-200 dark:border-gray-700 shadow-sm px-4 py-3 flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Araç Seçimi</label>
                {loadingCars ? (
                  <div className="text-center py-4">Yükleniyor...</div>
                ) : errorCars ? (
                  <div className="text-center text-red-500 py-4">{errorCars}</div>
                ) : (
                  <select
                    className="border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition"
                    value={selectedCar ? selectedCar.brand + '|' + selectedCar.model : ''}
                    onChange={e => {
                      const [brand, model] = e.target.value.split('|');
                      setSelectedCar(cars.find(c => c.brand === brand && c.model === model) || cars[0]);
                    }}
                  >
                    {cars.map(car => (
                      <option key={car.brand + car.model + car.capacity + car.wltpRange} value={car.brand + '|' + car.model}>
                        {car.brand} {car.model} ({car.capacity} kWh)
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className="rounded-xl bg-[#f6f8fa] dark:bg-[#23272f] border border-gray-200 dark:border-gray-700 shadow-sm px-4 py-3 flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Şarj Aralığı (%)</label>
                <div className="flex flex-col items-center gap-2 bg-gray-50 dark:bg-gray-900 rounded-lg px-3 py-4">
                  <div className="flex w-full items-center justify-between mb-2">
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-500 mb-1">Başlangıç</span>
                      <span className="font-bold text-blue-600 text-lg">{chargeRange[0]}%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-500 mb-1">Bitiş</span>
                      <span className="font-bold text-green-600 text-lg">{chargeRange[1]}%</span>
                    </div>
                  </div>
                  <Slider
                    range
                    min={0}
                    max={100}
                    allowCross={false}
                    value={chargeRange}
                    onChange={(value) => {
                      if (Array.isArray(value) && value.length === 2) setChargeRange([value[0], value[1]]);
                    }}
                    trackStyle={[{ backgroundColor: '#2563eb', height: 8 }, { backgroundColor: '#22c55e', height: 8 }]}
                    handleStyle={[
                      { borderColor: '#2563eb', backgroundColor: '#2563eb', width: 22, height: 22, marginTop: -7 },
                      { borderColor: '#22c55e', backgroundColor: '#22c55e', width: 22, height: 22, marginTop: -7 }
                    ]}
                    railStyle={{ backgroundColor: '#e5e7eb', height: 8 }}
                    dotStyle={{ display: 'none' }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1 text-center">
                  Örneğin %20&apos;den %80&apos;e şarj etmek için barı sürükleyin.
                </div>
              </div>
              <div className="rounded-xl bg-[#f6f8fa] dark:bg-[#23272f] border border-gray-200 dark:border-gray-700 shadow-sm px-4 py-3 flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Birim Fiyat (TL/kWh)</label>
                <div className="flex gap-2 flex-wrap justify-center">
                  {priceOptions.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      className={`px-3 py-2 rounded-lg border font-semibold transition-all ${unitPrice === opt && customUnitPrice === '' ? 'bg-blue-600 text-white border-blue-700' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700'}`}
                      onClick={() => { setUnitPrice(opt); setCustomUnitPrice(''); }}
                    >
                      {opt} TL
                    </button>
                  ))}
                  <div className="flex items-center gap-2 ml-2">
                    <span className="text-gray-500 text-sm">Başka bir değer gir</span>
                    <input
                      type="text"
                      inputMode="decimal"
                      pattern="[0-9]*[.,]?[0-9]*"
                      value={customUnitPrice}
                      onChange={e => {
                        const val = e.target.value;
                        setCustomUnitPrice(val);
                        const num = Number(val.replace(',', '.'));
                        if (val !== '' && !isNaN(num)) {
                          setUnitPrice(num);
                        }
                      }}
                      className="w-20 border rounded-lg px-2 py-1"
                      placeholder=""
                    />
                    <span className="text-gray-500 text-sm">TL</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 p-4 rounded-xl bg-[#f6f8fa] dark:bg-[#23272f] border border-gray-200 dark:border-gray-700 text-center flex flex-col gap-1 shadow-sm">
              <div className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Araç şarj maliyeti: <span className="text-green-600 dark:text-green-400 font-bold text-xl md:text-2xl">{totalCost.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL</span>
              </div>
              <div className="flex justify-center mb-1">
                <div className="px-3 py-1 rounded-lg bg-[#e9eef5] dark:bg-[#2a2e38] text-sm text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-medium inline-block">
                  {chargedKwh.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} kWh şarj edilecek
                </div>
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-0.5">
                <span className="font-medium text-blue-700 dark:text-blue-200">{chargedKwh.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} kWh</span> ile gidilebilecek tahmini menzil: <span className="font-medium text-blue-700 dark:text-blue-200">{estimatedRange.toLocaleString('tr-TR', { maximumFractionDigits: 0 })} km</span>
              </div>
              <div className="text-xs text-gray-400 mb-1" style={{lineHeight:'1.2'}}>
                {rangeMethod}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">1 km başına maliyet: <span className="font-medium text-blue-700 dark:text-blue-200">{costPerKm.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL/km</span></div>
              <div className="text-xs text-gray-400 mt-2 italic font-normal">
                Hesaplamalar fabrika verisi (WLTP) veya ortalama tüketim değerleri baz alınarak yapılmıştır. Gerçek menzil ve maliyet; sürüş tarzı, hava koşulları ve yol durumuna göre değişiklik gösterebilir.
              </div>
            </div>
          </div>
        </div>

        {/* Açıklama Kartı */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <FiInfo className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Nasıl Kullanılır?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Filtreleri kullanarak istediğiniz marka, soket tipi, güç ve fiyat aralığına göre şarj istasyonlarını kolayca listeleyebilirsiniz. Yeni istasyon eklemek için sayfanın altındaki butonu kullanın. Tüm eklemeler admin onayından sonra yayına alınır.
              </p>
            </div>
          </div>
        </div>
        {/* Filtreleme ve sıralama seçenekleri için alan */}
        <div className="mb-6">
          <div className="w-full relative">
            <button className="absolute right-2 top-2 z-10 flex items-center gap-1 text-blue-600 text-xs font-semibold px-2 py-1 rounded hover:bg-blue-50 transition" onClick={() => setFilter({brand:'',socketType:'',power:'',priceMin:'',priceMax:''})} type="button">
              <FiX size={14} /> Temizle
            </button>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-4 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-0.5">Marka</label>
                  <select className="h-10 border border-gray-200 dark:border-gray-700 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition bg-gray-50 dark:bg-gray-900 dark:text-gray-100 w-full" value={filter.brand} onChange={e => setFilter(f => ({...f, brand: e.target.value}))}>
                    <option value="">Tümü</option>
                    {allBrands.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-0.5">Soket Tipi</label>
                  <select className="h-10 border border-gray-200 dark:border-gray-700 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition bg-gray-50 dark:bg-gray-900 dark:text-gray-100 w-full" value={filter.socketType} onChange={e => setFilter(f => ({...f, socketType: e.target.value}))}>
                    <option value="">Tümü</option>
                    {allSocketTypes.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-0.5">Güç</label>
                  <input 
                    type="text" 
                    className="h-10 border border-gray-200 dark:border-gray-700 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition bg-gray-50 dark:bg-gray-900 dark:text-gray-100 w-full" 
                    placeholder="22 kW, 50-150 kW" 
                    value={filter.power} 
                    onChange={e => setFilter(f => ({...f, power: e.target.value}))} 
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-0.5">Fiyat (TL/kWh)</label>
                  <div className="flex items-center bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 px-2 py-1 gap-2 h-10 w-full">
                    <input type="number" className="flex-1 text-sm focus:outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-500 dark:text-gray-100" placeholder="Min" value={filter.priceMin} onChange={e => setFilter(f => ({...f, priceMin: e.target.value}))} />
                    <span className="text-gray-300 dark:text-gray-500 text-base">-</span>
                    <input type="number" className="flex-1 text-sm focus:outline-none bg-transparent placeholder-gray-400 dark:placeholder-gray-500 dark:text-gray-100" placeholder="Max" value={filter.priceMax} onChange={e => setFilter(f => ({...f, priceMax: e.target.value}))} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modern ve Standartlara Uygun Tablo */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <thead className="bg-[#f6fafd] dark:bg-blue-900/10 border-b border-gray-200 dark:border-gray-700 rounded-t-xl">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide align-middle">
                  <span className="flex items-center gap-1"><FiTag className="text-blue-500" size={16}/> Marka</span>
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide align-middle">
                  <span className="flex items-center gap-1"><FiPower className="text-blue-400" size={16}/> Soket Tipi</span>
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide align-middle">
                  <span className="flex items-center gap-1"><FiZap className="text-yellow-500" size={16}/> Güç</span>
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide align-middle">
                  <span className="flex items-center gap-1"><FiTag className="text-green-600" size={16}/> Fiyat</span>
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide align-middle">
                  <span className="flex items-center justify-center gap-1"><FiExternalLink className="text-blue-500" size={15}/> Kaynak</span>
                </th>
              </tr>
            </thead>
            <tbody className="rounded-b-xl overflow-hidden">
              {filteredBrands.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-12 text-gray-500 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                    Kayıt bulunamadı.
                  </td>
                </tr>
              ) : (
                filteredBrands.flatMap((brand, brandIdx) =>
                  brand.options.map((opt: BrandOption, idx: number) => (
                    <tr
                      key={brand.name + '-' + idx + '-' + opt.socketType + '-' + opt.power}
                      className={
                        (idx === 0 && brandIdx !== 0 ? 'border-t-2 border-gray-300 dark:border-gray-600' : 'border-t border-gray-100 dark:border-gray-700') +
                        ' transition-colors duration-200 hover:bg-blue-50/40 dark:hover:bg-blue-900/20'
                      }
                    >
                      {idx === 0 && (
                        <td
                          className="px-4 py-3 align-middle whitespace-nowrap font-bold text-gray-900 dark:text-white text-sm border-r border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                          rowSpan={brand.options.length}
                        >
                          {brand.name}
                        </td>
                      )}
                      <td className="px-4 py-3 align-middle whitespace-nowrap text-gray-700 dark:text-gray-200 text-sm">
                        <span className="flex items-center gap-2"><FiPower className="text-blue-400" size={15}/>{opt.socketType}</span>
                      </td>
                      <td className="px-4 py-3 align-middle whitespace-nowrap text-gray-700 dark:text-gray-200 text-sm">
                        <span className="flex items-center gap-2"><FiZap className="text-yellow-500" size={15}/>{opt.power}</span>
                      </td>
                      <td className="px-4 py-3 align-middle whitespace-nowrap text-green-700 dark:text-green-400 text-sm">
                        <span className="flex items-center gap-2"><FiTag className="text-green-600" size={15}/>{opt.priceAmount} TL/kWh</span>
                      </td>
                      {idx === 0 && (
                        <td
                          className="px-4 py-3 align-middle whitespace-nowrap text-center border-l border-gray-100 dark:border-gray-700"
                          rowSpan={brand.options.length}
                        >
                          <a
                            href={brand.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-300 underline hover:underline focus:underline px-0 py-0 justify-center"
                          >
                            <FiExternalLink size={13}/> Kaynak
                          </a>
                        </td>
                      )}
                    </tr>
                  ))
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Ziyaretçi ekleme formu için buton/alan */}
        <div className="mt-12 flex justify-center">
          <div className="text-center">
            <button 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto" 
              onClick={() => setShowModal(true)}
            >
              <FiZap className="text-white" size={20} />
              Yeni İstasyon Ekle
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Bilgilerinizi paylaşın, toplulukla birlikte büyütelim
            </p>
          </div>
        </div>

        {/* Bilgilendirici Bölüm */}
        <div className="mt-16 space-y-8">
          {/* Yeni Kullanıcılar İçin Rehber */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiInfo className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Yeni Elektrikli Araç Kullanıcıları İçin Rehber
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Elektrikli araç dünyasına hoş geldiniz! İşte bilmeniz gereken temel bilgiler
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Şarj Türleri */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FiPower className="text-blue-500" size={20} />
                  Şarj Türleri
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Type 2 (AC Şarj)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Ev ve işyerlerinde yaygın kullanılan, 3-22 kW güç aralığında şarj sağlar. Uzun süreli şarj için idealdir.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">CCS (DC Hızlı Şarj)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      50-350 kW güç aralığında hızlı şarj sağlar. Yolculuk sırasında kısa sürede şarj için kullanılır.
                    </p>
                  </div>
                                     <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                     <h4 className="font-medium text-gray-900 dark:text-white mb-1">CHAdeMO</h4>
                     <p className="text-sm text-gray-600 dark:text-gray-300">
                       Japon standardı, 50-150 kW güç aralığında hızlı şarj. Bazı elektrikli araçlarda kullanılır.
                     </p>
                   </div>
                </div>
              </div>

              {/* Fiyatlandırma */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FiTag className="text-green-500" size={20} />
                  Fiyatlandırma
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">TL/kWh</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Kilowatt saat başına ödenen fiyat. Ev elektriğinizden daha pahalı olabilir, ancak hızlı şarj avantajı sunar.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Üyelik Sistemleri</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Bazı şarj ağları üyelik gerektirir. Aylık/yıllık ücretler daha uygun fiyatlar sunabilir.
                    </p>
                  </div>
                                     <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                     <h4 className="font-medium text-gray-900 dark:text-white mb-1">Fiyat Değişkenliği</h4>
                     <p className="text-sm text-gray-600 dark:text-gray-300">
                       Şarj istasyonlarının fiyatları zaman içinde değişebilir. Güncel fiyatları kontrol etmek önemlidir.
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* İpuçları */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              🚗 Elektrikli Araç Kullanım İpuçları
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-300 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Yolculuk Öncesi Planlama</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Rotanızı ve şarj noktalarını önceden belirleyin. Farklı ağları karşılaştırın.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 dark:text-green-300 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Uygulama ve Kartlar</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Şarj ağlarının mobil uygulamalarını ve kartlarını kullanarak kolayca ödeme yapın.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 dark:text-purple-300 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fiyatları Karşılaştırın</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Fiyatlar ve şarj hızları değişebilir. En uygun seçeneği seçmek için karşılaştırma yapın.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <FiInfo className="text-blue-500" size={16} />
              <span className="font-medium">Bilgilendirme</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bu sitedeki fiyat ve bilgiler yalnızca bilgilendirme amaçlıdır. Fiyatlar değişebilir, güncel bilgiler için ilgili şarj ağı sağlayıcılarının resmi kaynaklarını kontrol edin. Site, sağlayıcılarla bağlantılı değildir ve sorumluluk kabul etmez.
            </p>
                         <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
               <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2025 Elektrikli Araç Şarj Fiyatları — Topluluk katkısıyla güncellenir
               </p>
             </div>
          </div>
        </footer>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" onClick={() => setShowModal(false)}>
              <FiX size={24} />
            </button>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiZap className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Yeni İstasyon Ekle</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Bilgileri eksiksiz doldurun, toplulukla paylaşın
              </p>
            </div>
                          <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Marka Adı</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 dark:bg-gray-700 dark:text-white" 
                    placeholder="Örn: Tesla, ZES, Eşarj"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Şarj Seçenekleri</label>
                  {form.options.map((opt: BrandOption, i: number) => (
                    <div key={i} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-3 border border-gray-200 dark:border-gray-600">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Soket Tipi</label>
                          <input 
                            name="socketType" 
                            value={opt.socketType} 
                            onChange={e => handleOptionChange(i, e)} 
                            required 
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-600 dark:text-white" 
                            placeholder="Type 2, CCS, CHAdeMO"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Güç</label>
                          <input 
                            name="power" 
                            value={opt.power} 
                            onChange={e => handleOptionChange(i, e)} 
                            required 
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-white dark:bg-gray-600 dark:text-white" 
                            placeholder="22 kW, 50-150 kW, 22 kW'a kadar"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Fiyat (TL/kWh)</label>
                          <input 
                            name="priceAmount" 
                            type="number" 
                            min="0" 
                            step="0.01" 
                            value={opt.priceAmount} 
                            onChange={e => handleOptionChange(i, e)} 
                            required 
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white dark:bg-gray-600 dark:text-white" 
                            placeholder="2.50, 3.75"
                          />
                        </div>
                      </div>
                      {form.options.length > 1 && (
                        <button 
                          type="button" 
                          onClick={() => removeOption(i)} 
                          className="mt-3 text-red-500 hover:text-red-700 text-sm font-medium transition-colors flex items-center gap-1"
                        >
                          <FiX size={14} /> Bu seçeneği sil
                        </button>
                      )}
                    </div>
                  ))}
                  <button 
                    type="button" 
                    onClick={addOption} 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <FiZap size={16} /> + Yeni Seçenek Ekle
                  </button>
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Kaynak Link</label>
                  <input 
                    name="sourceUrl" 
                    value={form.sourceUrl} 
                    onChange={handleChange} 
                    required 
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50 dark:bg-gray-700 dark:text-white" 
                    placeholder="https://example.com/fiyatlar"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Gönderiliyor...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FiZap size={18} />
                      Kaydı Gönder
                    </span>
                  )}
                </button>
                {message && (
                  <div className={`mt-4 p-3 rounded-lg text-sm text-center ${
                    message.includes('başarıyla') 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                      : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {message}
                  </div>
                )}
              </form>
          </div>
        </div>
      )}
    </>
  );
} 