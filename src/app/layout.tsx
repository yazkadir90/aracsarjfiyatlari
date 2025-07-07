import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elektrikli Araç Şarj Fiyatları [GÜNCEL] - Maliyet Hesaplama",
  description: "Türkiye'deki elektrikli araç şarj istasyonlarının güncel fiyatlarını, marka, soket tipi, güç ve fiyat aralığına göre karşılaştırın. Tesla, Eşarj, ZES ve diğer şarj ağlarının fiyatları tek ekranda!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-gray-100 min-h-screen w-full">
        {children}
      </body>
    </html>
  );
}
