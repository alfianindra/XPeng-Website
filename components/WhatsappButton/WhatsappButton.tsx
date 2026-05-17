'use client'

import { useState, useEffect } from 'react'

import dealer from '@/lib/dealer'
import { Whatsapp as WhatsappIcon } from '@/icons'

export default function WhatsAppButton() {
  // ctaVisible: true when the mobile sticky CTA bar is showing (hero scrolled out of view)
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    // #overview only exists on model detail pages — no-op on other pages
    const hero = document.getElementById('overview')
    if (!hero) return

    // Small delay so the CTA bar finishes sliding in before the button moves
    let timer: ReturnType<typeof setTimeout>
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer)
        if (!entry.isIntersecting) {
          // CTA bar is about to appear — wait for it to start sliding in
          timer = setTimeout(() => setCtaVisible(true), 50)
        } else {
          setCtaVisible(false)
        }
      },
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => { observer.disconnect(); clearTimeout(timer) }
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
      className={`lg:hidden fixed right-4 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:scale-[1.08] hover:bg-[#20bc5a] transition-[bottom,transform] duration-300 ease-out cursor-pointer ${
        ctaVisible ? 'bottom-[88px]' : 'bottom-6'
      }`}
      aria-label="Chat via WhatsApp"
    >
      <WhatsappIcon />
    </a>
  )
}
