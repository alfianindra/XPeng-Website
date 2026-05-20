import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { articles } from '@/lib/articles'
import dealer from '@/lib/dealer'
import FadeIn from '@/components/FadeIn/FadeIn'

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `https://xpengsunter.com/articles/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | XPENG Sunter Jakarta`,
      description: article.excerpt,
      url: `https://xpengsunter.com/articles/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      ...(article.coverImage
        ? { images: [{ url: article.coverImage, width: 1200, height: 630, alt: article.title }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | XPENG Sunter Jakarta`,
      description: article.excerpt,
      ...(article.coverImage ? { images: [article.coverImage] } : {}),
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (!article) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'XPENG Sunter Jakarta',
      url: 'https://xpengsunter.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'XPENG Sunter Jakarta',
      url: 'https://xpengsunter.com',
    },
    ...(article.coverImage ? { image: article.coverImage } : {}),
    url: `https://xpengsunter.com/articles/${article.slug}`,
  }

  const paragraphs = article.body.split('\n\n').filter(Boolean)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="pt-nav min-h-screen bg-bg">
        <div className="max-w-[760px] mx-auto px-6 lg:px-10 py-14 lg:py-20">

          {/* Back link */}
          <FadeIn>
            <Link
              href="/articles"
              className="inline-flex items-center gap-1.5 text-[13px] text-text-3 hover:text-text-1 transition-colors duration-200 mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15,18 9,12 15,6" />
              </svg>
              Semua Artikel
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn>
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex gap-1.5 flex-wrap mb-4">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold tracking-[0.08em] uppercase text-text-3 bg-bg-deep px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-display text-[clamp(26px,4vw,40px)] font-black leading-[1.1] tracking-[-0.03em] text-text-1 mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-3 text-[12px] text-text-3 mb-8 pb-8 border-b border-border-sub">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span>·</span>
              <span>{article.readingTime} menit baca</span>
            </div>
          </FadeIn>

          {/* Cover image */}
          {article.coverImage && (
            <FadeIn>
              <div className="relative aspect-[16/9] rounded-md overflow-hidden mb-10">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 760px) 100vw, 760px"
                />
              </div>
            </FadeIn>
          )}

          {/* Article body */}
          <FadeIn>
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-[16px] text-text-2 leading-[1.75]">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Bottom CTA */}
          <FadeIn>
            <div className="mt-14 pt-10 border-t border-border-sub">
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-text-3 mb-3">
                Tertarik?
              </p>
              <h2 className="font-display text-[clamp(22px,3vw,30px)] font-black tracking-[-0.03em] text-text-1 mb-6">
                Jadwalkan Test Drive Anda
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 text-center text-[14px] font-semibold bg-text-1 text-bg py-3 rounded-sm hover:opacity-90 transition-opacity duration-200"
                >
                  Jadwalkan Test Drive
                </Link>
                <a
                  href={`https://wa.me/${dealer.whatsapp}?text=${encodeURIComponent('Halo, saya baru membaca artikel di website XPENG Sunter dan tertarik untuk tahu lebih lanjut.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-[14px] font-semibold border border-border text-text-1 py-3 rounded-sm hover:border-text-1 transition-colors duration-200"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </main>
    </>
  )
}
