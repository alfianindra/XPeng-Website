import type { Metadata } from 'next'

import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Galeri — XPENG Sunter Jakarta',
  description:
    'Foto eksterior dan interior XPENG G6 Pro, X9 Pro, dan X9 Pro+ di dealer resmi Sunter Jakarta.',
  alternates: {
    canonical: 'https://xpengsunter.com/gallery',
  },
  openGraph: {
    title: 'Galeri | XPENG Sunter Jakarta',
    description: 'Foto kendaraan XPENG G6 Pro, X9 Pro, dan X9 Pro+ dari dealer resmi Jakarta Utara.',
    url: 'https://xpengsunter.com/gallery',
  },
}

export default function GalleryPage() {
  return (
    <main className="pt-nav min-h-screen bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-14 lg:py-20">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-3 mb-4">
            Galeri
          </p>
          <h1 className="font-display text-[clamp(32px,5vw,52px)] font-black leading-[1.05] tracking-[-0.03em] text-text-1 mb-4">
            Foto Kendaraan
          </h1>
          <p className="text-[15px] text-text-2 leading-relaxed max-w-[480px]">
            Lihat detail eksterior dan interior setiap model XPENG yang tersedia di dealer kami.
          </p>
        </div>

        {/* Interactive tab filter + gallery carousel */}
        <GalleryClient />

      </div>
    </main>
  )
}
