import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { articles } from '@/lib/articles'
import FadeIn from '@/components/FadeIn/FadeIn'

export const metadata: Metadata = {
  title: 'Artikel — XPENG Sunter Jakarta',
  description:
    'Artikel seputar mobil listrik XPENG, panduan test drive, dan tips berkendara EV di Indonesia.',
  alternates: {
    canonical: 'https://xpengsunter.com/articles',
  },
  openGraph: {
    title: 'Artikel — XPENG Sunter Jakarta',
    description: 'Artikel seputar mobil listrik XPENG dan tips berkendara EV di Indonesia.',
    url: 'https://xpengsunter.com/articles',
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function ArticlesPage() {
  return (
    <main className="pt-nav min-h-screen bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-14 lg:py-20">

        {/* Header */}
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-3 mb-4">
            Artikel
          </p>
          <h1 className="font-display text-[clamp(32px,5vw,52px)] font-black leading-[1.05] tracking-[-0.03em] text-text-1 mb-4">
            Insight & Panduan
          </h1>
          <p className="text-[15px] text-text-2 leading-relaxed max-w-[520px] mb-12">
            Artikel seputar teknologi XPENG, tips berkendara listrik di Indonesia, dan panduan test drive.
          </p>
        </FadeIn>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 60}>
              <article className="group relative bg-bg-card border border-border-sub rounded-md overflow-hidden hover:border-border transition-colors duration-300 flex flex-col h-full">

                {/* Cover image */}
                {article.coverImage && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap mb-3">
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

                  <h2 className="font-display text-[17px] font-bold tracking-[-0.02em] text-text-1 mb-2 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-[13px] text-text-3 leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-[11px] text-text-3 border-t border-border-sub pt-3 mt-auto">
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                    <span>{article.readingTime} menit baca</span>
                  </div>
                </div>

                {/* Stretched link over entire card */}
                <Link
                  href={`/articles/${article.slug}`}
                  className="absolute inset-0"
                  aria-label={article.title}
                />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  )
}
