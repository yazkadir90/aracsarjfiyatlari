'use client';

import { useState, useEffect } from 'react';

interface Car {
  id: number;
  brand: string;
  model: string;
  capacity: number;
  consumption: number;
  wltpRange: number;
  isActive: boolean;
  sortOrder: number;
}

export default function CarsAdminPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    capacity: '',
    consumption: '',
    wltpRange: '',
    sortOrder: '0'
  });

  // Araçları getir
  const fetchCars = async () => {
    try {
      console.log('Araçlar getiriliyor...');
      const response = await fetch('/api/yonetim-2025/cars');
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Gelen veri:', data);
      // Araçları alfabetik sıraya göre sırala
      const sortedCars = data.sort((a: Car, b: Car) => {
        if (a.brand === b.brand) {
          return a.model.localeCompare(b.model);
        }
        return a.brand.localeCompare(b.brand);
      });
      setCars(sortedCars);
    } catch (error) {
      console.error('Araçlar getirilemedi:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  // Form temizle
  const resetForm = () => {
    setFormData({
      brand: '',
      model: '',
      capacity: '',
      consumption: '',
      wltpRange: '',
      sortOrder: '0'
    });
    setEditingCar(null);
    setShowForm(false);
  };

  // Araç ekle/güncelle
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingCar ? '/api/yonetim-2025/cars' : '/api/yonetim-2025/cars';
      const method = editingCar ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingCar ? { ...formData, id: editingCar.id } : formData)
      });

      if (response.ok) {
        resetForm();
        fetchCars();
      } else {
        const error = await response.json();
        alert(error.error || 'Bir hata oluştu');
      }
    } catch (error) {
      console.error('İşlem başarısız:', error);
      alert('Bir hata oluştu');
    }
  };

  // Araç düzenle
  const handleEdit = (car: Car) => {
    setEditingCar(car);
    setFormData({
      brand: car.brand,
      model: car.model,
      capacity: car.capacity.toString(),
      consumption: car.consumption.toString(),
      wltpRange: car.wltpRange.toString(),
      sortOrder: car.sortOrder.toString()
    });
    setShowForm(true);
  };

  // Araç sil
  const handleDelete = async (id: number) => {
    if (!confirm('Bu aracı silmek istediğinizden emin misiniz?')) return;
    
    try {
      const response = await fetch(`/api/yonetim-2025/cars?id=${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchCars();
      } else {
        alert('Silme işlemi başarısız');
      }
    } catch (error) {
      console.error('Silme hatası:', error);
      alert('Bir hata oluştu');
    }
  };

  // Aktiflik durumu değiştir
  const toggleActive = async (car: Car) => {
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
        fetchCars();
      }
    } catch (error) {
      console.error('Durum değiştirme hatası:', error);
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Yükleniyor...</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Araç Yönetimi</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Yeni Araç Ekle
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="mb-8 p-6 bg-white rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">
            {editingCar ? 'Araç Düzenle' : 'Yeni Araç Ekle'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Marka *
                </label>
                <input
                  type="text"
                  value={formData.brand}
                  onChange={(e) => setFormData({...formData, brand: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Model *
                </label>
                <input
                  type="text"
                  value={formData.model}
                  onChange={(e) => setFormData({...formData, model: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Batarya Kapasitesi (kWh) *
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.capacity}
                  onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tüketim (kWh/100km) *
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.consumption}
                  onChange={(e) => setFormData({...formData, consumption: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  WLTP Menzil (km) *
                </label>
                <input
                  type="number"
                  value={formData.wltpRange}
                  onChange={(e) => setFormData({...formData, wltpRange: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sıralama
                </label>
                <input
                  type="number"
                  value={formData.sortOrder}
                  onChange={(e) => setFormData({...formData, sortOrder: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex gap-2 pt-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                {editingCar ? 'Güncelle' : 'Ekle'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                İptal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Araç Listesi */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cars.map((car) => (
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
                      onClick={() => toggleActive(car)}
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
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(car)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={() => handleDelete(car.id)}
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
      </div>
    </div>
  );
} 