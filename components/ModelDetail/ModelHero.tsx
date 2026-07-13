'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import type { CarModel } from '@/lib/model'
import dealer from '@/lib/dealer'

export default function ModelHero({ model }: { model: CarModel }) {
  const [activeVariantId, setActiveVariantId] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState(model.detailImage ?? model.heroImage)
  const [selected, setSelected] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)

  const activeVariant = model.variants?.find(v => v.id === activeVariantId) ?? null
  const badge     = activeVariant?.badge ?? model.badge
  const priceFrom = activeVariant?.priceFrom ?? model.priceFrom
  const specs     = activeVariant?.specs ?? model.specs
  const colors    = activeVariant?.colors ?? model.colors
  const ctaLabel  = activeVariant ? `${model.name} ${activeVariant.label}` : model.name

  const handleColor = (i: number) => {
    setSelected(i)
    const img = colors[i].image
    setImgLoaded(false)
    setActiveImage(img || model.heroImage)
  }

  const handleVariant = (id: string | null) => {
    setActiveVariantId(id)
    setSelected(0)
    const nextColors = model.variants?.find(v => v.id === id)?.colors ?? model.colors
    setImgLoaded(false)
    setActiveImage(nextColors[0]?.image || model.heroImage)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-[70vh]">

      {/* Left — image */}
      <div className="relative aspect-video lg:aspect-auto lg:self-stretch overflow-hidden bg-bg-card lg:border-r lg:border-border">
        {/* Shimmer skeleton shown while image loads */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-bg-card animate-pulse z-10" />
        )}
        <Image
          src={activeImage}
          alt={model.name}
          fill
          className={`object-contain object-center scale-90 transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          onLoad={() => setImgLoaded(true)}
        />
        {/* Inset separator — mobile only, sits above the image */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-border z-10 lg:hidden" />
      </div>

      {/* Right — stats panel */}
      <div className="flex flex-col justify-center px-6 py-10 lg:px-10 lg:py-16 bg-bg-card">
        {badge && (
          <span className="inline-block self-start text-[11px] font-semibold tracking-[0.12em] uppercase text-text-3 border border-border-sub mb-4 px-2.5 py-1 rounded-sm">
            {badge}
          </span>
        )}
        <h1 className="font-display text-[clamp(28px,4vw,52px)] font-black tracking-[-0.04em] text-text-1 leading-none mb-3">
          {model.name}
        </h1>
        <p className="text-[15px] text-text-2 leading-relaxed mb-6">{model.tagline}</p>

        {/* Trim toggle — only rendered when the model has variants (e.g. Standard vs AWD) */}
        {model.variants && model.variants.length > 0 && (
          <div className="mb-6">
            <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-text-3 mb-3">
              Varian
            </p>
            <div className="inline-flex bg-bg-deep border border-border-sub rounded-full p-1">
              <button
                onClick={() => handleVariant(null)}
                aria-pressed={activeVariantId === null}
                className={`text-[13px] font-bold px-5 py-2 rounded-full transition-colors duration-200 ${
                  activeVariantId === null ? 'bg-text-1 text-bg' : 'text-text-3'
                }`}
              >
                Standard
              </button>
              {model.variants.map(v => (
                <button
                  key={v.id}
                  onClick={() => handleVariant(v.id)}
                  aria-pressed={activeVariantId === v.id}
                  className={`text-[13px] font-bold px-5 py-2 rounded-full transition-colors duration-200 ${
                    activeVariantId === v.id ? 'bg-text-1 text-bg' : 'text-text-3'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="text-[13px] text-text-3 mb-6">
          Mulai dari{' '}
          <span className="font-display text-[22px] font-bold text-text-1 ml-1">
            {priceFrom}
          </span>
        </p>

        {/* Top 3 specs */}
        <div className="grid grid-cols-3 mb-8 pb-8 border-b border-border-sub divide-x divide-border">
          {specs.slice(0, 3).map(spec => (
            <div key={spec.label} className="text-center px-3">
              <div className="font-display text-[22px] font-bold text-text-1 leading-none">
                {spec.value}
                <span className="text-[12px] font-normal text-text-3 ml-0.5">{spec.unit}</span>
              </div>
              <div className="text-[11px] text-text-3 mt-1">{spec.label}</div>
            </div>
          ))}
        </div>

        {/* Color picker */}
        {colors.length > 0 && (
          <div className="mb-8">
            <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-text-3 mb-3">
              Warna —{' '}
              <span className="text-text-2 normal-case font-normal tracking-normal">
                {colors[selected].name}
              </span>
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {colors.map((color, i) => (
                <button
                  key={color.name}
                  onClick={() => handleColor(i)}
                  title={color.name}
                  className={`w-11 h-11 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                    i === selected
                      ? 'border-text-1 scale-110'
                      : 'border-border-sub hover:border-border'
                  }`}
                  aria-pressed={i === selected}
                  aria-label={color.name}
                >
                  <span
                    className="w-7 h-7 rounded-full block"
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="flex-1 text-center text-[14px] font-semibold bg-text-1 text-bg py-3 rounded-sm hover:bg-white/90 transition-colors duration-200"
          >
            Jadwalkan Test Drive
          </Link>
          <a
            href={`https://wa.me/${dealer.whatsapp}?text=${encodeURIComponent(
              `Halo, saya tertarik dengan ${ctaLabel}. Boleh saya minta informasi?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-[14px] font-semibold border border-border text-text-1 py-3 rounded-sm hover:border-text-1 transition-colors duration-200"
          >
            Chat WhatsApp
          </a>
        </div>

        {/* Brochure download — tertiary, only shown when a PDF is available */}
        {model.brochureUrl && (
          <a
            href={model.brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 text-[13px] text-text-3 hover:text-text-1 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Unduh Brosur PDF
          </a>
        )}
      </div>
    </div>
  )
}
