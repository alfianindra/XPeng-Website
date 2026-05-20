'use client'

import { useState } from 'react'

import { models } from '@/lib/model'
import Gallery from '@/components/ModelDetail/Gallery'

const ALL_TAB = 'all'
type Tab = typeof ALL_TAB | string

// Build combined image list with model attribution
const allImages = models.flatMap(model =>
  model.gallery.map(url => ({ url, slug: model.slug, name: model.name }))
)

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState<Tab>(ALL_TAB)

  const filtered =
    activeTab === ALL_TAB
      ? allImages.map(img => img.url)
      : allImages.filter(img => img.slug === activeTab).map(img => img.url)

  const tabs = [
    { id: ALL_TAB, label: 'Semua' },
    ...models.map(m => ({ id: m.slug, label: m.name })),
  ]

  const modelName =
    activeTab === ALL_TAB
      ? 'XPENG'
      : models.find(m => m.slug === activeTab)?.name ?? 'XPENG'

  return (
    <>
      {/* Model filter tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
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

      {/* Gallery carousel */}
      {filtered.length > 0 ? (
        <Gallery images={filtered} modelName={modelName} />
      ) : (
        <p className="text-[14px] text-text-3 py-20 text-center">
          Belum ada foto untuk model ini.
        </p>
      )}
    </>
  )
}
