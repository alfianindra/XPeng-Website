import type { Metadata } from 'next'

import { models } from '@/lib/model'
import HeroCarousel from '@/components/HeroCarousel/HeroCarousel'
import ModelCard from '@/components/ModelCard/ModelCard'
import LeadForm from '@/components/LeadForm/LeadForm'
import FadeIn from '@/components/FadeIn/FadeIn'

export const metadata: Metadata = {
  title: 'XPENG Indonesia — Dealer Resmi',
  description:
    'Dealer resmi XPENG di Indonesia. Test drive G6 Pro, X9 Pro, dan X9 Pro+. ' +
    'Hubungi kami untuk informasi harga dan ketersediaan.',
}

const TRUST_ITEMS = [
  {
    title: 'Dealer Resmi',
    desc:  'Authorized dealer XPENG Indonesia yang resmi dan terpercaya.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9,12 11,14 15,10" />
      </svg>
    ),
  },
  {
    title: 'Layanan Lokal',
    desc:  'Tim servis berpengalaman dan suku cadang asli selalu tersedia.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Pengiriman Indonesia',
    desc:  'Pengiriman ke seluruh wilayah Indonesia dengan aman dan terjadwal.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <main>
      {/* ── Hero Carousel ──────────────────────────────── */}
      <HeroCarousel />

      {/* ── Model Cards ───────────────────────────────── */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-text-3 mb-2">
              Lineup
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.03em] text-text-1">
              Pilih Kendaraan Anda
            </h2>
            <p className="text-[15px] text-text-3 mt-3 max-w-xl mx-auto">
              Tiga model XPENG terbaik — dari SUV performa tinggi hingga MPV premium untuk keluarga modern.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {models.map((model, i) => (
              <FadeIn key={model.slug} delay={i * 80}>
                <ModelCard model={model} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────── */}
      <section className="py-16 px-6 bg-bg-deep border-y border-border-sub">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {TRUST_ITEMS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-12 h-12 rounded-md bg-bg-card border border-border-sub flex items-center justify-center text-text-2 mb-4">
                {item.icon}
              </div>
              <h3 className="font-display text-[17px] font-bold text-text-1 mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] text-text-3 leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Lead Form ─────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-text-3 mb-2">
              Booking
            </p>
            <h2 className="font-display text-[clamp(26px,3.5vw,38px)] font-extrabold tracking-[-0.03em] text-text-1 mb-3">
              Jadwalkan Test Drive
            </h2>
            <p className="text-[15px] text-text-3 leading-relaxed">
              Tim kami akan menghubungi Anda untuk konfirmasi jadwal dan lokasi.
            </p>
          </FadeIn>
          <FadeIn>
            <LeadForm />
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
