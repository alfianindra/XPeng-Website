'use client'

import { useState } from 'react'
import Image from 'next/image'

import { models } from '@/lib/model'

const ALL_TAB = 'all'
type Tab = typeof ALL_TAB | string

// Build combined image list with model attribution
const allImages = models.flatMap(model =>
  model.gallery.map(url => ({ url, slug: model.slug, name: model.name }))
)

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15,18 9,12 15,6" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9,18 15,12 9,6" />
    </svg>
  )
}

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState<Tab>(ALL_TAB)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const tabs = [
    { id: ALL_TAB, label: 'Semua' },
    ...models.map(m => ({ id: m.slug, label: m.name })),
  ]

  const filtered =
    activeTab === ALL_TAB
      ? allImages
      : allImages.filter(img => img.slug === activeTab)

  const openLightbox = (idx: number) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)
  const navLightbox = (dir: 'prev' | 'next') => {
    if (lightboxIdx === null) return
    const n = filtered.length
    setLightboxIdx(dir === 'next' ? (lightboxIdx + 1) % n : (lightboxIdx - 1 + n) % n)
  }

  return (
    <>
      {/* Model filter tabs */}
      <div
        role="group"
        aria-label="Filter model kendaraan"
        className="flex gap-2 flex-wrap mb-8"
      >
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            aria-pressed={activeTab === tab.id}
            className={`text-[13px] font-semibold px-4 py-2 rounded-sm transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-text-1 text-bg'
                : 'bg-bg-card border border-border-sub text-text-2 hover:border-border hover:text-text-1'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img, i) => (
            <button
              key={img.url + i}
              onClick={() => openLightbox(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-text-1"
              aria-label={`${img.name} foto ${i + 1}`}
            >
              <Image
                src={img.url}
                alt={`${img.name} foto ${i + 1}`}
                fill
                className="object-cover object-center group-hover:scale-[1.06] transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Model label on hover */}
              <span className="absolute bottom-0 inset-x-0 px-2.5 py-2 text-[11px] font-semibold text-white bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-left">
                {img.name}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <p className="text-[14px] text-text-3 py-20 text-center">
          Belum ada foto untuk model ini.
        </p>
      )}

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Galeri foto"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
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
                src={filtered[lightboxIdx].url}
                alt={`${filtered[lightboxIdx].name} foto ${lightboxIdx + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            {/* Model label */}
            <p className="text-center text-[12px] text-white/50 mt-3">
              {filtered[lightboxIdx].name}
            </p>
          </div>

          {/* Prev / Next */}
          {filtered.length > 1 && (
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[12px] text-white/50">
            {lightboxIdx + 1} / {filtered.length}
          </div>
        </div>
      )}
    </>
  )
}
