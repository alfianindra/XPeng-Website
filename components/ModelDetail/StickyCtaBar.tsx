'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import type { CarModel } from '@/lib/model'
import LeadForm from '@/components/LeadForm/LeadForm'

// ── Desktop sidebar card ────────────────────────────────────────────────────
export function DesktopCtaSidebar({ model }: { model: CarModel }) {
  return (
    <div className="hidden lg:block">
      <div className="sticky top-[128px] bg-bg-card border border-border-sub rounded-md p-5 space-y-5">
        <div>
          <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-text-3 mb-1">Mulai dari</p>
          <p className="font-display text-[20px] font-bold text-text-1">{model.priceFrom}</p>
        </div>
        <div className="border-t border-border-sub pt-5">
          <p className="text-[13px] font-semibold text-text-2 mb-3">Jadwalkan Test Drive</p>
          <LeadForm defaultModel={model.slug} />
        </div>
        <a
          href={`https://wa.me/6289668216082?text=${encodeURIComponent(
            `Halo, saya tertarik dengan ${model.name}. Boleh saya minta informasi?`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-[13px] text-text-3 hover:text-text-2 transition-colors duration-200"
        >
          atau chat via WhatsApp →
        </a>
      </div>
    </div>
  )
}

// ── Mobile fixed bottom bar ─────────────────────────────────────────────────
export function MobileCtaBar({ model }: { model: CarModel }) {
  const [visible, setVisible] = useState(false)
  const heroRef = useRef<Element | null>(null)

  useEffect(() => {
    // Watch the hero section — bar appears when hero leaves viewport
    heroRef.current = document.getElementById('overview')
    if (!heroRef.current) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 bg-bg/95 backdrop-blur-md border-t border-border-sub px-4 py-3 flex items-center gap-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex-1 min-w-0">
        <p className="text-[11px] text-text-3 truncate">{model.name}</p>
        <p className="text-[14px] font-semibold text-text-1 truncate">{model.priceFrom}</p>
      </div>
      <Link
        href="/contact"
        className="flex-shrink-0 text-[14px] font-semibold bg-text-1 text-bg px-6 py-2.5 rounded-sm hover:bg-[#e9ecef] transition-colors duration-200 whitespace-nowrap"
      >
        Test Drive
      </Link>
    </div>
  )
}
