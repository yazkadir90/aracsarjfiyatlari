import Link from "next/link";
import { FiZap } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-lg">
        <FiZap className="text-white" size={40} />
      </div>
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Sayfa Bulunamadı</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Aradığınız sayfa mevcut değil veya kaldırılmış olabilir.</p>
      <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition-all">Anasayfaya Dön</Link>
    </div>
  );
} 