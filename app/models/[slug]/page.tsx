import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { models } from '@/lib/model'
import TabNav from '@/components/ModelDetail/TabNav'
import SpecGrid from '@/components/ModelDetail/SpecGrid'
import Gallery from '@/components/ModelDetail/Gallery'
import CompareTable from '@/components/ModelDetail/CompareTable'
import ColorPicker from '@/components/ModelDetail/ColorPicker'
import { DesktopCtaSidebar, MobileCtaBar } from '@/components/ModelDetail/StickyCtaBar'
import FadeIn from '@/components/FadeIn/FadeIn'

export function generateStaticParams() {
  return models.map(m => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const model = models.find(m => m.slug === slug)
  if (!model) return {}
  return {
    title: model.name,
    description: `${model.tagline} — ${model.description}`,
    openGraph: {
      title: `${model.name} | XPENG Indonesia`,
      description: model.description,
      images: [{ url: model.heroImage }],
    },
  }
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const model = models.find(m => m.slug === slug)
  if (!model) notFound()

  return (
    <>
      {/* ── Split Hero ────────────────────────────────────────────────── */}
      <div id="overview" className="pt-nav">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-[70vh]">
          {/* Left — image (60%) */}
          <div className="relative min-h-[50vw] lg:min-h-0">
            <Image
              src={model.heroImage}
              alt={model.name}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Bottom gradient for content bleed on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent lg:hidden" />
          </div>

          {/* Right — stats panel (40%) */}
          <div className="flex flex-col justify-center px-6 py-10 lg:px-10 lg:py-16 bg-bg-card border-t border-border-sub lg:border-t-0 lg:border-l">
            {model.badge && (
              <span className="inline-block self-start text-[11px] font-semibold tracking-[0.12em] uppercase text-text-3 border border-border-sub mb-4 px-2.5 py-1 rounded-sm">
                {model.badge}
              </span>
            )}
            <h1 className="font-display text-[clamp(28px,4vw,52px)] font-black tracking-[-0.04em] text-text-1 leading-none mb-3">
              {model.name}
            </h1>
            <p className="text-[15px] text-text-2 leading-relaxed mb-6">{model.tagline}</p>
            <p className="text-[13px] text-text-3 mb-6">
              Mulai dari{' '}
              <span className="font-display text-[22px] font-bold text-text-1 ml-1">
                {model.priceFrom}
              </span>
            </p>

            {/* Top 3 specs inline */}
            <div className="grid grid-cols-3 mb-8 pb-8 border-b border-border-sub divide-x divide-border">
              {model.specs.slice(0, 3).map(spec => (
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
            <div className="mb-8">
              <ColorPicker colors={model.colors} />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="flex-1 text-center text-[14px] font-semibold bg-text-1 text-bg py-3 rounded-sm hover:bg-[#e9ecef] transition-colors duration-200"
              >
                Jadwalkan Test Drive
              </Link>
              <a
                href={`https://wa.me/6289668216082?text=${encodeURIComponent(
                  `Halo, saya tertarik dengan ${model.name}. Boleh saya minta informasi?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-[14px] font-semibold border border-border text-text-1 py-3 rounded-sm hover:border-text-1 transition-colors duration-200"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sticky Tab Bar ────────────────────────────────────────────── */}
      <TabNav />

      {/* ── Main content + Desktop sidebar ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* ── LEFT: Scrollable sections ──────────────────────────── */}
          <div className="space-y-20">

            {/* Overview */}
            <section id="overview-content" className="scroll-mt-32">
              <FadeIn>
                <h2 className="font-display text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-0.03em] text-text-1 mb-4">
                  Tentang {model.name}
                </h2>
                <p className="text-[16px] text-text-2 leading-relaxed mb-6">{model.description}</p>
                <p className="text-[15px] text-text-3 leading-relaxed">
                  Dengan teknologi XPENG terdepan, {model.name} menghadirkan pengalaman berkendara yang belum pernah ada sebelumnya di kelasnya. Daya, kecerdasan, dan kemewahan dalam satu paket yang sempurna untuk pasar Indonesia.
                </p>
              </FadeIn>
            </section>

            {/* Gallery */}
            <section id="gallery" className="scroll-mt-32">
              <FadeIn>
                <h2 className="font-display text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-0.03em] text-text-1 mb-6">
                  Galeri
                </h2>
              </FadeIn>
              <FadeIn>
                <Gallery images={model.gallery} modelName={model.name} />
              </FadeIn>
            </section>

            {/* Specs */}
            <section id="specs" className="scroll-mt-32">
              <FadeIn>
                <h2 className="font-display text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-0.03em] text-text-1 mb-6">
                  Spesifikasi
                </h2>
              </FadeIn>
              <FadeIn>
                <SpecGrid specs={model.specs} />
              </FadeIn>
            </section>

            {/* Compare */}
            <section id="compare" className="scroll-mt-32">
              <FadeIn>
                <h2 className="font-display text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-0.03em] text-text-1 mb-2">
                  Perbandingan Model
                </h2>
                <p className="text-[14px] text-text-3 mb-6">
                  Model yang sedang ditampilkan disorot.
                </p>
              </FadeIn>
              <FadeIn>
                <CompareTable models={models} currentSlug={model.slug} />
              </FadeIn>
            </section>
          </div>

          {/* ── RIGHT: Desktop sticky sidebar ──────────────────────── */}
          <DesktopCtaSidebar model={model} />
        </div>
      </div>

      {/* ── Mobile CTA bar (fixed bottom, appears after hero) ─────────── */}
      <MobileCtaBar model={model} />
    </>
  )
}
