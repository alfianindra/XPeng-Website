'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15,18 9,12 15,6" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9,18 15,12 9,6" />
    </svg>
  )
}

export default function Gallery({ images, modelName }: { images: string[]; modelName: string }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const amount = trackRef.current.clientWidth * 0.75
    trackRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  const openLightbox = (url: string, idx: number) => {
    setLightbox(url)
    setLightboxIdx(idx)
  }

  const closeLightbox = () => setLightbox(null)

  const navLightbox = (dir: 'prev' | 'next') => {
    const n = images.length
    const next = dir === 'next' ? (lightboxIdx + 1) % n : (lightboxIdx - 1 + n) % n
    setLightboxIdx(next)
    setLightbox(images[next])
  }

  if (!images.length) return null

  return (
    <>
      {/* Filmstrip */}
      <div className="relative">
        {/* Scroll track */}
        <div
          ref={trackRef}
          className="flex gap-3 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-2"
        >
          {images.map((url, i) => (
            <button
              key={url + i}
              onClick={() => openLightbox(url, i)}
              className="relative flex-shrink-0 w-[280px] sm:w-[340px] aspect-[4/3] rounded-md overflow-hidden snap-start group"
              aria-label={`Lihat foto ${i + 1}`}
            >
              <Image
                src={url}
                alt={`${modelName} foto ${i + 1}`}
                fill
                className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                sizes="340px"
              />
            </button>
          ))}
        </div>

        {/* Arrows (only on md+) */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-bg-card border border-border-sub text-text-2 hover:text-text-1 transition-colors duration-200 shadow-sm"
              aria-label="Geser kiri"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-bg-card border border-border-sub text-text-2 hover:text-text-1 transition-colors duration-200 shadow-sm"
              aria-label="Geser kanan"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Lightbox dialog */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Galeri foto"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-bg-card/80 text-text-2 hover:text-text-1 transition-colors duration-200"
            aria-label="Tutup"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={lightbox}
                alt={`${modelName} foto ${lightboxIdx + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={e => { e.stopPropagation(); navLightbox('prev') }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-bg-card/80 text-text-2 hover:text-text-1 transition-colors duration-200"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={e => { e.stopPropagation(); navLightbox('next') }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-bg-card/80 text-text-2 hover:text-text-1 transition-colors duration-200"
                aria-label="Foto berikutnya"
              >
                <ChevronRight />
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[12px] text-text-3">
            {lightboxIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
