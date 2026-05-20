'use client'

import { useState, useEffect } from 'react'

const TABS = [
  { id: 'overview',  label: 'Overview',      short: 'Overview' },
  { id: 'features',  label: 'Fitur',          short: 'Fitur' },
  { id: 'gallery',   label: 'Galeri',         short: 'Galeri' },
  { id: 'specs',     label: 'Spesifikasi',    short: 'Specs' },
  { id: 'compare',   label: 'Perbandingan',   short: 'Compare' },
]

export default function TabNav() {
  const [active, setActive] = useState('overview')

  // Scroll-spy: observe each section, update active when it enters a band in the middle of the viewport
  useEffect(() => {
    const sections = TABS.map(t => document.getElementById(t.id)).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      entries => {
        // Find the first intersecting entry that is most visible
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    // Offset for the sticky nav (64px) + this tab bar (48px)
    const offset = 64 + 48
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    setActive(id)
  }

  return (
    <nav
      className="sticky top-nav z-40 bg-bg/95 backdrop-blur-md border-b border-border-sub"
      aria-label="Navigasi bagian halaman"
    >
      <div className="max-w-7xl mx-auto px-2 md:px-6 flex gap-0 overflow-x-auto scrollbar-none">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.id)}
            aria-current={active === tab.id ? 'true' : undefined}
            className={`flex-shrink-0 whitespace-nowrap text-[12px] md:text-[13px] font-medium px-3 md:px-4 py-3.5 border-b-2 transition-colors duration-200 ${
              active === tab.id
                ? 'border-text-1 text-text-1'
                : 'border-transparent text-text-3 hover:text-text-2'
            }`}
          >
            <span className="md:hidden">{tab.short}</span>
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
