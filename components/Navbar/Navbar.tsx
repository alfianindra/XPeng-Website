'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/lib/constants'

// VideoHero is a single 100vh section — navbar goes opaque once it's scrolled past.
const HERO_VH_MULTIPLIER = 1

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  // Start transparent on the home page; other pages always opaque
  const [transparent, setTransparent] = useState(pathname === '/')

  const close = () => setOpen(false)

  useEffect(() => {
    if (pathname !== '/') {
      const id = setTimeout(() => setTransparent(false), 0)
      return () => clearTimeout(id)
    }

    const update = () => {
      setTransparent(window.scrollY < window.innerHeight * HERO_VH_MULTIPLIER)
    }

    const id = setTimeout(update, 0)
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      clearTimeout(id)
      window.removeEventListener('scroll', update)
    }
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 h-nav grid grid-cols-[1fr_auto_1fr] items-center px-8 transition-[background-color,border-color] duration-300 ${
          transparent
            ? 'bg-transparent border-b border-transparent'
            : 'bg-[rgba(255,255,255,0.96)] backdrop-blur-md border-b border-border-sub'
        }`}
        role="navigation"
        aria-label="Navigasi utama"
      >
        {/* Col 1 — Logo */}
        <Link href="/" aria-label="XPENG Indonesia" className="col-1 inline-flex items-center">
          <Image
            src="/logo.png"
            alt="XPENG"
            width={955}
            height={165}
            className="h-6 md:h-7 w-auto object-contain transition-[filter] duration-300"
            style={{
              filter: transparent ? 'brightness(0) invert(1)' : 'brightness(0)',
              width: 'auto',
            }}
            priority
          />
        </Link>

        {/* Col 2 — Desktop nav links */}
        <div className="col-2 hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`text-[13px] px-3.5 py-1.5 rounded-sm transition-colors duration-200 ${
                  transparent
                    ? isActive
                      ? 'text-white bg-white/15'
                      : 'text-white/80 hover:text-white'
                    : isActive
                      ? 'text-text-1 bg-bg-card'
                      : 'text-text-3 hover:text-text-1'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Col 3 — CTA + burger */}
        <div className="col-3 flex justify-end items-center gap-2">
          <Link
            href="/contact"
            className={`hidden md:inline-block text-[13px] font-semibold px-5 py-2 rounded-sm transition-colors duration-200 whitespace-nowrap ${
              transparent
                ? 'border border-white/60 text-white hover:bg-white/15'
                : 'bg-text-1 text-bg hover:bg-white/90'
            }`}
          >
            Test Drive
          </Link>
          <button
            className={`md:hidden flex flex-col gap-1.25 w-10 h-10 items-center justify-center rounded-sm${open ? ' nav-burger-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
          >
            <span className={`block w-5.5 h-0.5 rounded-[1px] transition-[transform,opacity,background-color] duration-250 ${transparent ? 'bg-white' : 'bg-text-1'}`} />
            <span className={`block w-5.5 h-0.5 rounded-[1px] transition-[transform,opacity,background-color] duration-250 ${transparent ? 'bg-white' : 'bg-text-1'}`} />
            <span className={`block w-5.5 h-0.5 rounded-[1px] transition-[transform,opacity,background-color] duration-250 ${transparent ? 'bg-white' : 'bg-text-1'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down drawer — top-nav positions it directly below the nav bar */}
      <div
        className={`fixed top-nav left-0 right-0 bg-[rgba(255,255,255,0.98)] backdrop-blur-md px-6 pb-6 pt-4 border-b border-border-sub z-99 transition-[transform,opacity] duration-200 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        role="dialog"
        aria-label="Menu navigasi"
        aria-hidden={!open}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href || pathname.startsWith(href + '/') ? 'page' : undefined}
            className="block text-[16px] text-text-2 py-3.5 border-b border-border-sub hover:text-text-1 transition-colors duration-200"
            onClick={close}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="block mt-3 text-center py-3.5 rounded-md bg-text-1 text-bg font-semibold text-[15px] hover:bg-white/90 transition-colors duration-200"
          onClick={close}
        >
          Jadwalkan Test Drive
        </Link>
      </div>
    </>
  )
}