'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { ChevronLeft, ChevronRight } from '@/app/icons'
import { models } from '@/lib/model'

const INTERVAL = 5000

export default function HeroCarousel() {
  const [cur, setCur] = useState(0)
  const [paused, setPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const widthRef = useRef(0)
  const curRef = useRef(0)

  const setSlide = useCallback((idx: number) => {
    const n = models.length
    const next = ((idx % n) + n) % n
    curRef.current = next
    setCur(next)
    if (trackRef.current && widthRef.current) {
      trackRef.current.style.transform = `translateX(-${next * widthRef.current}px)`
    }
  }, [])

  // Measure container width and apply transform — also re-applies on resize
  useEffect(() => {
    const measure = () => {
      const w = containerRef.current?.clientWidth ?? window.innerWidth
      widthRef.current = w
      if (trackRef.current) {
        // Snap instantly on resize (no animation)
        const prev = trackRef.current.style.transition
        trackRef.current.style.transition = 'none'
        trackRef.current.style.transform = `translateX(-${curRef.current * w}px)`
        // Restore transition after paint
        requestAnimationFrame(() => {
          if (trackRef.current) trackRef.current.style.transition = prev
        })
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setSlide(curRef.current + 1), INTERVAL)
    return () => clearTimeout(id)
  }, [cur, paused, setSlide])

  return (
    <section
      ref={containerRef}
      className="relative h-svh min-h-[520px] overflow-hidden bg-bg-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero carousel"
    >
      {/* Slide track */}
      <div
        ref={trackRef}
        className="flex h-full transition-[transform] duration-[620ms] ease-out"
        style={{ width: `${models.length * 100}%` }}
      >
        {models.map((model, i) => (
          <div
            key={model.slug}
            className="relative h-full flex-shrink-0"
            style={{ width: `${100 / models.length}%` }}
            aria-hidden={i !== cur}
          >
            {/* Background image */}
            <Image
              src={model.heroImage}
              alt={model.name}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
            />
            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d20]/60 via-[#1a1d20]/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1d20]/40 via-[#1a1d20]/10 to-transparent" />

            {/* Slide content */}
            <div className="absolute inset-0 flex flex-col justify-end px-6 pb-24 md:px-16 md:pb-32 max-w-5xl">
              {model.badge && (
                <span className="inline-block self-start text-[11px] font-semibold tracking-[0.12em] uppercase text-text-1 border border-border-sub mb-4 px-2.5 py-1 rounded-sm">
                  {model.badge}
                </span>
              )}
              <h2 className="font-display text-[clamp(36px,6vw,80px)] font-black tracking-[-0.04em] text-text-1 leading-none mb-3">
                {model.name}
              </h2>
              <p className="text-[15px] md:text-[18px] text-text-1 mb-4 max-w-md leading-relaxed">
                {model.tagline}
              </p>
              <p className="text-[13px] text-text-1 mb-7">
                Mulai dari{' '}
                <span className="text-text-1 font-semibold">{model.priceFrom}</span>
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href={`/models/${model.slug}`}
                  className="text-[14px] font-semibold bg-text-1 text-bg px-7 py-3 rounded-sm hover:bg-[#e9ecef] transition-colors duration-200"
                >
                  Lihat Detail
                </Link>
                <Link
                  href="/contact"
                  className="text-[14px] font-semibold border border-border text-text-1 px-7 py-3 rounded-sm hover:border-text-1 transition-colors duration-200"
                >
                  Test Drive
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => setSlide(curRef.current - 1)}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-bg/60 backdrop-blur-sm border border-border-sub text-text-2 hover:text-text-1 hover:bg-bg-card transition-all duration-200"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft />
      </button>

      {/* Next arrow */}
      <button
        onClick={() => setSlide(curRef.current + 1)}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-bg/60 backdrop-blur-sm border border-border-sub text-text-2 hover:text-text-1 hover:bg-bg-card transition-all duration-200"
        aria-label="Slide berikutnya"
      >
        <ChevronRight />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5" role="tablist" aria-label="Slides">
        {models.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === cur}
            onClick={() => setSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === cur ? 'w-6 h-1.5 bg-text-1' : 'w-1.5 h-1.5 bg-text-3 hover:bg-text-2'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
