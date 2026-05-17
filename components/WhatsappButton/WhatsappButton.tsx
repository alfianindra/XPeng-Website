'use client'

import { useState, useEffect } from 'react'

import { usePathname } from 'next/navigation'

import dealer from '@/lib/dealer'
import { Whatsapp as WhatsappIcon } from '@/icons'

export default function WhatsAppButton() {
  const pathname = usePathname()
  // ctaVisible: true when the mobile sticky CTA bar is showing (hero scrolled out of view)
  const [ctaVisible, setCtaVisible] = useState(false)

  useEffect(() => {
    // Reset on every route change so stale state doesn't carry over
    setCtaVisible(false)

    // #overview only exists on model detail pages — no-op on other pages
    const hero = document.getElementById('overview')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setCtaVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [pathname])

  const phone = dealer.whatsapp
  const text  = encodeURIComponent(
    'Halo, saya tertarik dengan XPENG. Boleh saya minta informasi lebih lanjut?'
  )

  // Hide on /contact — that page has its own WhatsApp button in the dealer card
  if (pathname === '/contact') return null

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
