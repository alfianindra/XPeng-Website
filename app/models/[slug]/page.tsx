import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { models } from '@/lib/model'
import ModelHero from '@/components/ModelDetail/ModelHero'
import TabNav from '@/components/ModelDetail/TabNav'
import SpecGrid from '@/components/ModelDetail/SpecGrid'
import Gallery from '@/components/ModelDetail/Gallery'
import CompareTable from '@/components/ModelDetail/CompareTable'
import { DesktopCtaSidebar, MobileCtaBar } from '@/components/ModelDetail/StickyCtaBar'
import FeatureShowcase from '@/components/ModelDetail/FeatureShowcase'
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
    alternates: {
      canonical: `https://xpengsunter.com/models/${model.slug}`,
    },
    openGraph: {
      title: `${model.name} | XPENG Sunter Jakarta`,
      description: model.description,
      url: `https://xpengsunter.com/models/${model.slug}`,
      images: [{ url: model.heroImage, width: 1200, height: 630, alt: model.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${model.name} | XPENG Sunter Jakarta`,
      description: model.description,
      images: [model.heroImage],
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

  const carSchema = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name: model.name,
    description: model.description,
    brand: { '@type': 'Brand', name: 'XPENG' },
    image: model.heroImage,
    url: `https://xpengsunter.com/models/${model.slug}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      price: model.priceFrom.replace(/\D/g, ''),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'AutoDealer',
        name: 'XPENG Sunter Jakarta',
        url: 'https://xpengsunter.com',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carSchema) }}
      />
      {/* ── Split Hero ────────────────────────────────────────────────── */}
      <div id="overview" className="pt-nav">
        <ModelHero model={model} />
      </div>

      {/* ── Sticky Tab Bar ────────────────────────────────────────────── */}
      <TabNav />

      {/* ── Feature Showcase (full-width, outside sidebar grid) ──────── */}
      <FeatureShowcase features={model.features} />

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
