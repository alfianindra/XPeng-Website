'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-100 h-nav grid grid-cols-[1fr_auto_1fr] items-center px-8 bg-[rgba(33,37,41,0.96)] backdrop-blur-md border-b border-border-sub"
        role="navigation"
        aria-label="Navigasi utama"
      >
        {/* Col 1 — Logo */}
        <Link
          href="/"
          className="col-1 font-display text-[18px] font-extrabold tracking-[-0.02em] text-text-1"
          aria-label="XPENG Indonesia"
        >
          XPENG
        </Link>

        {/* Col 2 — Desktop nav links */}
        <div className="col-2 hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[13px] px-3.5 py-1.5 rounded-sm transition-colors duration-200 ${
                pathname === href
                  ? 'text-text-1 bg-bg-card'
                  : 'text-text-3 hover:text-text-1'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Col 3 — CTA + burger */}
        <div className="col-3 flex justify-end items-center gap-2">
          <Link
            href="/contact"
            className="hidden md:inline-block text-[13px] font-semibold bg-text-1 text-bg px-5 py-2 rounded-sm hover:bg-[#e9ecef] transition-colors duration-200 whitespace-nowrap"
          >
            Test Drive
          </Link>
          <button
            className={`md:hidden flex flex-col gap-1.25 w-10 h-10 items-center justify-center rounded-sm${open ? ' nav-burger-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
          >
            <span className="block w-5.5 h-0.5 bg-text-1 rounded-[1px] transition-[transform,opacity] duration-250" />
            <span className="block w-5.5 h-0.5 bg-text-1 rounded-[1px] transition-[transform,opacity] duration-250" />
            <span className="block w-5.5 h-0.5 bg-text-1 rounded-[1px] transition-[transform,opacity] duration-250" />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down drawer — top-nav positions it directly below the nav bar */}
      <div
        className={`fixed top-nav left-0 right-0 bg-[rgba(33,37,41,0.98)] backdrop-blur-md px-6 pb-6 pt-4 border-b border-border-sub z-99 transition-[transform,opacity] duration-200 ${
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
            className="block text-[16px] text-text-2 py-3.5 border-b border-border-sub hover:text-text-1 transition-colors duration-200"
            onClick={close}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="block mt-3 text-center py-3.5 rounded-md bg-text-1 text-bg font-semibold text-[15px] hover:bg-[#e9ecef] transition-colors duration-200"
          onClick={close}
        >
          Jadwalkan Test Drive
        </Link>
      </div>
    </>
  )
}