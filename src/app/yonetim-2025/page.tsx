"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import React from "react";

interface Brand {
  id: number;
  name: string;
  sourceUrl: string;
  approved: boolean;
  createdAt: string;
  options: Array<{
    socketType: string;
    power: string;
    priceAmount: number;
  }>;
}

export default function AdminPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [seo, setSeo] = useState({ title: "", description: "" });
  const [seoMsg, setSeoMsg] = useState("");
  const [seoLoading, setSeoLoading] = useState(false);
  const [editModal, setEditModal] = useState<{ open: boolean; brand: Brand | null }>({ open: false, brand: null });
  const [editForm, setEditForm] = useState<{ name: string; sourceUrl: string; options: Array<{ socketType: string; power: string; priceAmount: number }> }>({ name: "", sourceUrl: "", options: [{ socketType: "", power: "", priceAmount: 0 }] });
  const [gtm, setGtm] = useState({ gtmCode: "" });
  const [gtmMsg, setGtmMsg] = useState("");
  const [gtmLoading, setGtmLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'cars' | 'settings'>('pending');
  
  // Yeni istasyon ekleme state'i
  const [showAddModal, setShowAddModal] = useState(false);
  const [addForm, setAddForm] = useState({
    name: "",
    options: [
      { socketType: "", power: "", priceAmount: 0 }
    ],
    sourceUrl: ""
  });
  const [addLoading, setAddLoading] = useState(false);
  const [addMessage, setAddMessage] = useState("");

  // Cars state
  const [cars, setCars] = useState<any[]>([]);
  const [carsLoading, setCarsLoading] = useState(false);
  const [showCarForm, setShowCarForm] = useState(false);
  const [editingCar, setEditingCar] = useState<any>(null);
  const [carForm, setCarForm] = useState({
    brand: '',
    model: '',
    capacity: '',
    consumption: '',
    wltpRange: '',
    sortOrder: '0'
  });

  const filteredCars = cars
    .filter((car) => car.isActive && !/test/i.test(car.brand) && !/test/i.test(car.model))
    .sort((a, b) => {
      if (a.brand === b.brand) {
        return a.model.localeCompare(b.model);
      }
      return a.brand.localeCompare(b.brand);
    });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/yonetim-2025/brand");
        const data = await res.json();
        if (res.ok) {
          setBrands(data.brands);
        } else {
          setError(data.error || "Hata oluştu");
        }
      } catch (e) {
        setError("Sunucu hatası");
      } finally {
        setLoading(false);
      }

    // SEO ayarlarını da çek
    const fetchSeo = async () => {
      const res = await fetch("/api/yonetim-2025/seo");
      const data = await res.json();
      if (data.seo) setSeo({ title: data.seo.title, description: data.seo.description });
    };
    fetchSeo();

    // GTM kodunu da çek
    const fetchGtm = async () => {
      const res = await fetch("/api/yonetim-2025/site-setting");
      const data = await res.json();
      if (data.site && data.site.gtmCode) {
        setGtm({ gtmCode: data.site.gtmCode });
      } else {
        setGtm({ gtmCode: "" });
      }
    };
    fetchGtm();

    // Cars verilerini çek
    const fetchCars = async () => {
      setCarsLoading(true);
      try {
        const res = await fetch("/api/yonetim-2025/cars");
        if (res.ok) {
          const data = await res.json();
          setCars(data);
        } else {
          console.error("Cars fetch failed:", res.status);
          setCars([]);
        }
      } catch (error) {
        console.error("Cars fetch error:", error);
        setCars([]);
      } finally {
        setCarsLoading(false);
      }
    };
    fetchCars();
  };

  const handleApprove = async (id: number) => {
    try {
      const res = await fetch(`/api/yonetim-2025/brand/${id}/approve`, { method: "POST" });
      
      if (!res.ok) {
        const errorData = await res.json();
        alert(`Onaylama hatası: ${errorData.error || 'Bilinmeyen hata'}`);
        return;
      }
      
      // Başarılı onaylama - listeyi yenile
      alert("✅ İstasyon başarıyla onaylandı!");
      fetchData();
    } catch (error) {
      console.error("Approve error:", error);
      alert("Onaylama sırasında hata oluştu");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Bu kaydı silmek istediğinizden emin misiniz?")) {
      return;
    }
    
    try {
      const res = await fetch(`/api/yonetim-2025/brand/${id}`, { method: "DELETE" });
      
      if (!res.ok) {
        const errorData = await res.json();
        alert(`Silme hatası: ${errorData.error || 'Bilinmeyen hata'}`);
        return;
      }
      
      // Başarılı silme - listeyi yenile
      fetchData();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Silme sırasında hata oluştu");
    }
  };

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSeo(prev => ({ ...prev, [name]: value }));
  };

  const handleSeoSave = async () => {
    setSeoLoading(true);
    setSeoMsg("");
    try {
      const res = await fetch("/api/yonetim-2025/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(seo)
      });
      const data = await res.json();
      if (res.ok) {
        setSeoMsg("✅ SEO ayarları başarıyla kaydedildi");
      } else {
        setSeoMsg(`❌ Hata: ${data.error || "Bilinmeyen hata"}${data.detail ? " - " + data.detail : ""}`);
      }
    } catch (error) {
      console.error("SEO save error:", error);
      setSeoMsg("❌ Sunucu hatası oluştu");
    } finally {
      setSeoLoading(false);
    }
  };

  const handleEdit = (brand: Brand) => setEditModal({ open: true, brand });
  const handleEditClose = () => setEditModal({ open: false, brand: null });

  useEffect(() => {
    if (editModal.open && editModal.brand) {
      setEditForm({
        name: editModal.brand.name,
        sourceUrl: editModal.brand.sourceUrl,
        options: editModal.brand.options && editModal.brand.options.length
          ? editModal.brand.options.map((opt: any) => ({
              socketType: opt.socketType,
              power: opt.power,
              priceAmount: opt.priceAmount
            }))
          : [{ socketType: "", power: "", priceAmount: 0 }],
      });
    }
  }, [editModal]);

  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement>, idx?: number, type?: string) => {
    const { name, value } = e.target;
    if (type === "options") {
      const options = [...editForm.options];
      options[idx!] = { ...options[idx!], [name]: value };
      setEditForm({ ...editForm, options });
    } else {
      setEditForm({ ...editForm, [name]: value });
    }
  };

  const addEditField = (type: string) => {
    if (type === "options") setEditForm({ ...editForm, options: [...editForm.options, { socketType: "", power: "", priceAmount: 0 }] });
  };
  const removeEditField = (type: string, idx: number) => {
    if (type === "options") setEditForm({ ...editForm, options: editForm.options.filter((_: any, i: number) => i !== idx) });
  };

  const handleEditSave = async () => {
    if (!editModal.brand) return;
    
    try {
      const filteredOptions = editForm.options.filter((opt: any) => 
        opt.socketType && opt.power && opt.priceAmount
      );
      
      if (filteredOptions.length === 0) {
        alert("En az bir seçenek eklemelisiniz!");
        return;
      }

      const res = await fetch(`/api/yonetim-2025/brand/${editModal.brand.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editForm.name,
          sourceUrl: editForm.sourceUrl,
          options: filteredOptions,
        })
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Güncelleme hatası: ${errorData.error || 'Bilinmeyen hata'}`);
        return;
      }

      // Modal'ı kapat ve listeyi yenile
      setEditModal({ open: false, brand: null });
      fetchData();
    } catch (error) {
      console.error("Edit save error:", error);
      alert("Güncelleme sırasında hata oluştu");
    }
  };

  const handleGtmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGtm(prev => ({ ...prev, [name]: value }));
  };

  const handleGtmSave = async () => {
    setGtmLoading(true);
    setGtmMsg("");
    try {
      const res = await fetch("/api/yonetim-2025/site-setting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gtm)
      });
      const data = await res.json();
      if (res.ok) {
        setGtmMsg("✅ GTM ayarları başarıyla kaydedildi");
      } else {
        setGtmMsg(`❌ Hata: ${data.error || "Bilinmeyen hata"}`);
      }
    } catch (error) {
      console.error("GTM save error:", error);
      setGtmMsg("❌ Sunucu hatası oluştu");
    } finally {
      setGtmLoading(false);
    }
  };

  // Cars işlemleri
  const resetCarForm = () => {
    setCarForm({
      brand: '',
      model: '',
      capacity: '',
      consumption: '',
      wltpRange: '',
      sortOrder: '0'
    });
    setEditingCar(null);
    setShowCarForm(false);
  };

  const handleCarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = '/api/yonetim-2025/cars';
      const method = editingCar ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingCar ? { ...carForm, id: editingCar.id } : carForm)
      });

      if (response.ok) {
        resetCarForm();
        // Cars listesini yenile
        const res = await fetch("/api/yonetim-2025/cars");
        const data = await res.json();
        if (res.ok) {
          setCars(data);
        }
      } else {
        const error = await response.json();
        alert(error.error || 'Bir hata oluştu');
      }
    } catch (error) {
      console.error('İşlem başarısız:', error);
      alert('Bir hata oluştu');
    }
  };

  const handleCarEdit = (car: any) => {
    setEditingCar(car);
    setCarForm({
      brand: car.brand,
      model: car.model,
      capacity: car.capacity.toString(),
      consumption: car.consumption.toString(),
      wltpRange: car.wltpRange.toString(),
      sortOrder: car.sortOrder.toString()
    });
    setShowCarForm(true);
  };

  const handleCarDelete = async (id: number) => {
    if (!confirm('Bu aracı silmek istediğinizden emin misiniz?')) return;
    
    try {
      const response = await fetch(`/api/yonetim-2025/cars?id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Cars listesini yenile
        const res = await fetch("/api/yonetim-2025/cars");
        const data = await res.json();
        if (res.ok) {
          setCars(data);
        }
      } else {
        alert('Silme işlemi başarısız');
      }
    } catch (error) {
      console.error('Silme hatası:', error);
      alert('Bir hata oluştu');
    }
  };

  const toggleCarActive = async (car: any) => {
    try {
      const response = await fetch('/api/yonetim-2025/cars', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...car,
          isActive: !car.isActive
        })
      });

      if (response.ok) {
        // Cars listesini yenile
        const res = await fetch("/api/yonetim-2025/cars");
        const data = await res.json();
        if (res.ok) {
          setCars(data);
        }
      }
    } catch (error) {
      console.error('Durum değiştirme hatası:', error);
    }
  };

  // Yeni istasyon ekleme fonksiyonları
  const handleAddFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOptionChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddForm((prev: any) => {
      const newOptions = [...prev.options];
      newOptions[i] = { ...newOptions[i], [name]: value };
      return { ...prev, options: newOptions };
    });
  };

  const addOption = () => {
    setAddForm((prev) => ({ ...prev, options: [...prev.options, { socketType: "", power: "", priceAmount: 0 }] }));
  };

  const removeOption = (i: number) => {
    setAddForm((prev) => ({ ...prev, options: prev.options.filter((_, idx) => idx !== i) }));
  };

  const resetAddForm = () => {
    setAddForm({ name: "", options: [{ socketType: "", power: "", priceAmount: 0 }], sourceUrl: "" });
    setShowAddModal(false);
    setAddMessage("");
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddLoading(true);
    setAddMessage("");
    try {
      const res = await fetch("/api/yonetim-2025/brand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: addForm.name,
          options: addForm.options.map(opt => ({
            socketType: opt.socketType,
            power: opt.power,
            priceAmount: parseFloat(opt.priceAmount),
            priceUnit: "TL/kWh",
            approved: true
          })),
          sourceUrl: addForm.sourceUrl
        })
      });
      const data = await res.json();
      if (res.ok) {
        setAddMessage("✅ İstasyon başarıyla eklendi ve onaylandı!");
        resetAddForm();
        fetchData(); // Listeyi yenile
      } else {
        setAddMessage(`❌ Hata: ${data.error || "Bilinmeyen hata"}`);
      }
    } catch (e) {
      setAddMessage("❌ Sunucu hatası");
    } finally {
      setAddLoading(false);
    }
  };

  const pendingBrands = brands.filter(brand => !brand.approved);
  const approvedBrands = brands.filter(brand => brand.approved);

  return (
    <>
      <Head>
        <title>Yönetim Paneli - Elektrikli Araç Şarj Fiyatları</title>
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Yönetim Paneli</h1>
            <p className="text-gray-600">Elektrikli araç şarj istasyonları yönetimi</p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <nav className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm border">
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'pending'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Onay Bekleyen ({pendingBrands.length})
                {pendingBrands.length > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {pendingBrands.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'approved'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Onaylanmış ({approvedBrands.length})
              </button>
              <button
                onClick={() => setActiveTab('cars')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'cars'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Araç Yönetimi
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'settings'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Site Ayarları
              </button>
            </nav>
          </div>

          {/* Content */}
          {activeTab === 'pending' && (
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Onay Bekleyen Kayıtlar</h2>
                  <p className="text-sm text-gray-600 mt-1">Kullanıcılar tarafından eklenen şarj istasyonları</p>
                </div>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Yeni İstasyon Ekle
                </button>
              </div>
              
              {loading ? (
                <div className="p-8 text-center">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    Yükleniyor...
                  </div>
                </div>
              ) : error ? (
                <div className="p-8 text-center text-red-600">{error}</div>
              ) : pendingBrands.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-lg font-medium mb-2">Onay bekleyen kayıt bulunmuyor</p>
                  <p className="text-sm text-gray-400">Tüm kayıtlar onaylanmış durumda</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Marka
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Şarj Seçenekleri
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Kaynak
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tarih
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          İşlemler
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pendingBrands.map((brand) => (
                        <tr key={brand.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{brand.name}</div>
                            <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full inline-block mt-1">
                              Onay Bekliyor
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              {brand.options.map((opt, idx) => (
                                <div key={idx} className="text-sm text-gray-900">
                                  <span className="font-medium">{opt.socketType}</span> • 
                                  <span className="text-gray-600 ml-1">{opt.power}</span> • 
                                  <span className="text-green-600 font-medium ml-1">{opt.priceAmount} TL/kWh</span>
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a 
                              href={brand.sourceUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                              Kaynağı Gör →
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(brand.createdAt).toLocaleDateString('tr-TR')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleApprove(brand.id)}
                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                              >
                                Onayla
                              </button>
                              <button
                                onClick={() => handleEdit(brand)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                              >
                                Düzenle
                              </button>
                              <button
                                onClick={() => handleDelete(brand.id)}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                              >
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'approved' && (
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Onaylanmış Kayıtlar</h2>
                  <p className="text-sm text-gray-600 mt-1">Yayında olan şarj istasyonları</p>
                </div>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Yeni İstasyon Ekle
                </button>
              </div>
              
              {approvedBrands.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg font-medium mb-2">Henüz onaylanmış kayıt bulunmuyor</p>
                  <p className="text-sm text-gray-400">Onay bekleyen kayıtları onayladıktan sonra burada görünecek</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Marka
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Şarj Seçenekleri
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Kaynak
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Onay Tarihi
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          İşlemler
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {approvedBrands.map((brand) => (
                        <tr key={brand.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{brand.name}</div>
                            <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block mt-1">
                              Yayında
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              {brand.options.map((opt, idx) => (
                                <div key={idx} className="text-sm text-gray-900">
                                  <span className="font-medium">{opt.socketType}</span> • 
                                  <span className="text-gray-600 ml-1">{opt.power}</span> • 
                                  <span className="text-green-600 font-medium ml-1">{opt.priceAmount} TL/kWh</span>
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <a 
                              href={brand.sourceUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                              Kaynağı Gör →
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(brand.createdAt).toLocaleDateString('tr-TR')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleEdit(brand)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                              >
                                Düzenle
                              </button>
                              <button
                                onClick={() => handleDelete(brand.id)}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
                              >
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'cars' && (
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Araç Yönetimi</h2>
                    <p className="text-sm text-gray-600 mt-1">Elektrikli araç bilgilerini yönetin</p>
                  </div>
                  <button
                    onClick={() => setShowCarForm(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Yeni Araç Ekle
                  </button>
                </div>
              </div>
              
              {carsLoading ? (
                <div className="p-8 text-center">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    Yükleniyor...
                  </div>
                </div>
              ) : filteredCars.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p className="text-lg font-medium mb-2">Henüz araç eklenmemiş</p>
                  <p className="text-sm text-gray-400">Yeni araç eklemek için yukarıdaki butonu kullanın</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Marka
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Model
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Kapasite (kWh)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tüketim (kWh/100km)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          WLTP Menzil (km)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Durum
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          İşlemler
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredCars.map((car) => (
                        <tr key={car.id} className={car.isActive ? '' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {car.brand}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {car.model}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {car.capacity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {car.consumption}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {car.wltpRange}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => toggleCarActive(car)}
                              className={`px-2 py-1 text-xs rounded-full ${
                                car.isActive 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {car.isActive ? 'Aktif' : 'Pasif'}
                            </button>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex gap-2 justify-center">
                              <button
                                onClick={() => handleCarEdit(car)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Düzenle
                              </button>
                              <button
                                onClick={() => handleCarDelete(car.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              {/* SEO Ayarları */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">SEO Ayarları</h2>
                  <p className="text-sm text-gray-600 mt-1">Arama motorları için sayfa başlığı ve açıklaması</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sayfa Başlığı *
                    </label>
                    <input 
                      name="title" 
                      value={seo.title} 
                      onChange={handleSeoChange} 
                      placeholder="Örn: Elektrikli Araç Şarj Fiyatları - 2025 Güncel Liste" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <p className="text-xs text-gray-500 mt-1">Google arama sonuçlarında görünecek başlık</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sayfa Açıklaması *
                    </label>
                    <textarea 
                      name="description" 
                      value={seo.description} 
                      onChange={handleSeoChange} 
                      placeholder="Örn: Türkiye'deki elektrikli araç şarj istasyonları, marka, soket tipi, güç ve fiyat karşılaştırması. Kullanıcılar yeni istasyon ekleyebilir, admin onayı gereklidir." 
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-1">Google arama sonuçlarında görünecek açıklama (150-160 karakter önerilir)</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
            <button 
              onClick={handleSeoSave} 
              disabled={seoLoading}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm"
            >
              {seoLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Kaydediliyor...
                </>
              ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Kaydet
                        </>
              )}
            </button>
                    
            {seoMsg && (
                      <div className={`text-sm px-4 py-2 rounded-lg border ${
                seoMsg.includes('✅') 
                          ? 'text-green-700 bg-green-50 border-green-200' 
                          : 'text-red-700 bg-red-50 border-red-200'
              }`}>
                {seoMsg}
              </div>
            )}
          </div>
        </div>
              </div>

              {/* GTM Ayarları */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Google Tag Manager</h2>
                  <p className="text-sm text-gray-600 mt-1">Analitik ve takip kodları için GTM ayarları</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GTM Container ID
                    </label>
                    <input 
                      name="gtmCode" 
                      value={gtm.gtmCode} 
                      onChange={handleGtmChange} 
                      placeholder="Örn: GTM-XXXXXXX" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    <p className="text-xs text-gray-500 mt-1">Google Tag Manager container ID'sini buraya girin</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
            <button 
              onClick={handleGtmSave} 
              disabled={gtmLoading}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm"
            >
              {gtmLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Kaydediliyor...
                </>
              ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Kaydet
                        </>
              )}
            </button>
                    
            {gtmMsg && (
                      <div className={`text-sm px-4 py-2 rounded-lg border ${
                gtmMsg.includes('✅') 
                          ? 'text-green-700 bg-green-50 border-green-200' 
                          : 'text-red-700 bg-red-50 border-red-200'
              }`}>
                {gtmMsg}
              </div>
            )}
          </div>
        </div>
              </div>
            </div>
          )}

          {/* Yeni İstasyon Ekleme Modal */}
          {showAddModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Yeni İstasyon Ekle</h2>
                </div>
                
                <form onSubmit={handleAddSubmit} className="p-6 space-y-6">
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Marka Adı *</label>
                    <input 
                      name="name" 
                      value={addForm.name} 
                      onChange={handleAddFormChange} 
                      required 
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50" 
                      placeholder="Örn: Tesla, ZES, Eşarj"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Kaynak Linki</label>
                    <input 
                      name="sourceUrl" 
                      value={addForm.sourceUrl} 
                      onChange={handleAddFormChange} 
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50" 
                      placeholder="https://..."
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Şarj Seçenekleri *</label>
                    {addForm.options.map((opt: any, i: number) => (
                      <div key={i} className="bg-gray-50 rounded-xl p-4 mb-3 border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Soket Tipi</label>
                            <input 
                              name="socketType" 
                              value={opt.socketType} 
                              onChange={e => handleAddOptionChange(i, e)} 
                              required 
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white" 
                              placeholder="Type 2, CCS, CHAdeMO"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Güç</label>
                            <input 
                              name="power" 
                              value={opt.power} 
                              onChange={e => handleAddOptionChange(i, e)} 
                              required 
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all bg-white" 
                              placeholder="22 kW, 50-150 kW, 22 kW'a kadar"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Fiyat (TL/kWh)</label>
                            <input 
                              name="priceAmount" 
                              type="number" 
                              min="0" 
                              step="0.01" 
                              value={opt.priceAmount} 
                              onChange={e => handleAddOptionChange(i, e)} 
                              required 
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white" 
                              placeholder="2.50, 3.75"
                            />
                          </div>
                        </div>
                        {addForm.options.length > 1 && (
                          <button 
                            type="button" 
                            onClick={() => removeOption(i)} 
                            className="mt-3 text-red-500 hover:text-red-700 text-sm font-medium transition-colors flex items-center gap-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Bu seçeneği sil
                          </button>
                        )}
                      </div>
                    ))}
                    <button 
                      type="button" 
                      onClick={addOption} 
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      + Yeni Seçenek Ekle
                    </button>
                  </div>
                  
                  {addMessage && (
                    <div className={`p-3 rounded-lg text-sm ${addMessage.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {addMessage}
                    </div>
                  )}
                  
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      disabled={addLoading}
                      className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      {addLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Ekleniyor...
                        </>
                      ) : (
                        'İstasyon Ekle'
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={resetAddForm}
                      className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      İptal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Car Form Modal */}
          {showCarForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {editingCar ? 'Araç Düzenle' : 'Yeni Araç Ekle'}
                  </h2>
                </div>
                
                <form onSubmit={handleCarSubmit} className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Marka *
                      </label>
                      <input
                        type="text"
                        value={carForm.brand}
                        onChange={(e) => setCarForm({...carForm, brand: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Model *
                      </label>
                      <input
                        type="text"
                        value={carForm.model}
                        onChange={(e) => setCarForm({...carForm, model: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Batarya Kapasitesi (kWh) *
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={carForm.capacity}
                        onChange={(e) => setCarForm({...carForm, capacity: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tüketim (kWh/100km) *
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={carForm.consumption}
                        onChange={(e) => setCarForm({...carForm, consumption: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WLTP Menzil (km) *
                      </label>
                      <input
                        type="number"
                        value={carForm.wltpRange}
                        onChange={(e) => setCarForm({...carForm, wltpRange: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sıralama
                      </label>
                      <input
                        type="number"
                        value={carForm.sortOrder}
                        onChange={(e) => setCarForm({...carForm, sortOrder: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      {editingCar ? 'Güncelle' : 'Ekle'}
                    </button>
                    <button
                      type="button"
                      onClick={resetCarForm}
                      className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      İptal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Edit Modal */}
        {editModal.open && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Marka Düzenle</h2>
                </div>
                
                <div className="p-6 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marka Adı *
                    </label>
                    <input 
                      name="name" 
                      value={editForm.name} 
                      onChange={handleEditFormChange} 
                      placeholder="Marka Adı" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kaynak Linki
                    </label>
                    <input 
                      name="sourceUrl" 
                      value={editForm.sourceUrl} 
                      onChange={handleEditFormChange} 
                      placeholder="https://..." 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Şarj Seçenekleri *
                    </label>
                    <div className="space-y-3">
                  {editForm.options.map((opt: any, i: number) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4 border">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Soket Tipi</label>
                          <input 
                            name="socketType"
                            value={opt.socketType} 
                            onChange={e => handleEditFormChange(e, i, "options")} 
                            placeholder="Type 2, CCS" 
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Güç</label>
                          <input 
                            name="power"
                            type="text" 
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
                            placeholder="22 kW, 50-150 kW, 22 kW'a kadar" 
                            value={opt.power} 
                            onChange={e => handleEditFormChange(e, i, "options")} 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Fiyat (TL/kWh)</label>
                          <input 
                            name="priceAmount"
                            value={opt.priceAmount} 
                            onChange={e => handleEditFormChange(e, i, "options")} 
                            placeholder="2.50" 
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            type="number"
                            step="0.01"
                          />
                        </div>
                      </div>
                      {editForm.options.length > 1 && (
                        <button 
                          onClick={() => removeEditField("options", i)} 
                              className="text-red-600 hover:text-red-800 text-sm font-medium mt-2"
                        >
                          Bu seçeneği sil
                        </button>
                      )}
                    </div>
                  ))}
                  <button 
                    onClick={() => addEditField("options")} 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    + Yeni Seçenek Ekle
                  </button>
                </div>
                </div>
              </div>
                
                <div className="px-6 py-4 border-t border-gray-200 flex gap-3">
                  <button 
                    onClick={handleEditSave} 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Kaydet
                  </button>
                  <button 
                    onClick={handleEditClose} 
                    className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    İptal
                  </button>
                </div>
            </div>
          </div>
        )}
          </div>
      </div>
    </>
  );
} 