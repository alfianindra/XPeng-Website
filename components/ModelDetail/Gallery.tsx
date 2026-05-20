'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

function ChevronLeft() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15,18 9,12 15,6" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9,18 15,12 9,6" />
    </svg>
  )
}

export default function Gallery({ images, modelName }: { images: string[]; modelName: string }) {
  const [cur, setCur] = useState(0)
  const curRef    = useRef(0)
  const trackRef  = useRef<HTMLDivElement>(null)
  const widthRef  = useRef(0)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const isSwiping   = useRef(false)

  const [lightbox, setLightbox] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const goTo = useCallback((idx: number) => {
    const next = Math.max(0, Math.min(idx, images.length - 1))
    curRef.current = next
    setCur(next)
    if (trackRef.current && widthRef.current) {
      trackRef.current.style.transform = `translateX(-${next * widthRef.current}px)`
    }
  }, [images.length])

  // Measure on mount and resize — disable transition during resize
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      widthRef.current = trackRef.current.parentElement!.clientWidth
      trackRef.current.style.transition = 'none'
      trackRef.current.style.transform  = `translateX(-${curRef.current * widthRef.current}px)`
      requestAnimationFrame(() => {
        if (trackRef.current) trackRef.current.style.transition = ''
      })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx)
    setLightbox(true)
  }

  const navLightbox = (dir: 'prev' | 'next') => {
    const n = images.length
    const next = dir === 'next' ? (lightboxIdx + 1) % n : (lightboxIdx - 1 + n) % n
    setLightboxIdx(next)
  }

  if (!images.length) return null

  return (
    <>
      {/* Carousel — negative margin breaks out of px-6 on mobile for edge-to-edge feel */}
      <div className="-mx-6 lg:mx-0">
        <div className="relative overflow-hidden rounded-none lg:rounded-md bg-bg-card">

          {/* Track */}
          <div
            ref={trackRef}
            className="flex transition-[transform] duration-[520ms] ease-out"
            style={{ width: `${images.length * 100}%` }}
            onTouchStart={e => {
              touchStartX.current = e.touches[0].clientX
              touchStartY.current = e.touches[0].clientY
              isSwiping.current = false
            }}
            onTouchMove={e => {
              const dx = Math.abs(e.touches[0].clientX - touchStartX.current)
              const dy = Math.abs(e.touches[0].clientY - touchStartY.current)
              if (dx > dy && dx > 8) isSwiping.current = true
            }}
            onTouchEnd={e => {
              if (!isSwiping.current) return
              const dx = e.changedTouches[0].clientX - touchStartX.current
              if (dx < -50) goTo(curRef.current + 1)
              else if (dx > 50) goTo(curRef.current - 1)
            }}
          >
            {images.map((url, i) => (
              <div
                key={url + i}
                className="relative aspect-[4/3] md:aspect-[16/9] cursor-zoom-in"
                style={{ width: `${100 / images.length}%` }}
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={url}
                  alt={`${modelName} foto ${i + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>
            ))}
          </div>

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => goTo(cur - 1)}
                disabled={cur === 0}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 disabled:opacity-30 disabled:cursor-default"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => goTo(cur + 1)}
                disabled={cur === images.length - 1}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 disabled:opacity-30 disabled:cursor-default"
                aria-label="Foto berikutnya"
              >
                <ChevronRight />
              </button>
            </>
          )}

          {/* Counter + zoom hint */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            <span className="text-[11px] text-white/60 hidden sm:block">Klik untuk perbesar</span>
            <span className="text-[12px] text-white bg-black/50 px-2.5 py-1 rounded-full">
              {cur + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-1.5 mt-3 px-6 lg:px-0">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Foto ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === cur
                    ? 'w-5 h-1.5 bg-text-1'
                    : 'w-1.5 h-1.5 bg-border hover:bg-text-3'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Galeri foto"
          onClick={() => setLightbox(false)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
            aria-label="Tutup"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-6xl max-h-[90vh] mx-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={images[lightboxIdx]}
                alt={`${modelName} foto ${lightboxIdx + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Lightbox nav */}
          {images.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); navLightbox('prev') }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={e => { e.stopPropagation(); navLightbox('next') }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
                aria-label="Foto berikutnya"
              >
                <ChevronRight />
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[12px] text-white/60">
            {lightboxIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
