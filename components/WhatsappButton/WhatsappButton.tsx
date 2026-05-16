'use client'

import { useState, useEffect } from 'react'

import dealer from '@/lib/dealer'
import { Whatsapp as WhatsappIcon } from '@/app/icons'

export default function WhatsAppButton() {
  // ctaVisible: true when the mobile sticky CTA bar is showing (hero scrolled out of view)
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    // #overview only exists on model detail pages — no-op on other pages
    const hero = document.getElementById('overview')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setCtaVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const phone = dealer.whatsapp
  const text  = encodeURIComponent(
    'Halo, saya tertarik dengan XPENG. Boleh saya minta informasi lebih lanjut?'
  )

  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 md:right-6 z-50 w-14 h-14 rounded-full bg-text-1 text-bg flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-[1.08] hover:bg-[#e9ecef] transition-all duration-300 ease-out cursor-pointer"
      style={{ bottom: ctaVisible ? '88px' : '24px' }}
      aria-label="Chat via WhatsApp"
    >
      <WhatsappIcon />
    </a>
  )
}
