'use client'

import { useState } from 'react'

import type { CarSpec, SpecCategory } from '@/lib/model'

const CATEGORIES: { id: SpecCategory | 'all'; label: string }[] = [
  { id: 'all',         label: 'Semua' },
  { id: 'performance', label: 'Performa' },
  { id: 'battery',     label: 'Baterai' },
  { id: 'dimensions',  label: 'Dimensi' },
  { id: 'safety',      label: 'Keamanan' },
]

export default function SpecGrid({ specs }: { specs: CarSpec[] }) {
  const [active, setActive] = useState<SpecCategory | 'all'>('all')

  const filtered = active === 'all' ? specs : specs.filter(s => s.category === active)

  // Only show category buttons that have at least one matching spec
  const available = CATEGORIES.filter(
    c => c.id === 'all' || specs.some(s => s.category === c.id)
  )

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {available.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`text-[13px] font-medium px-4 py-1.5 rounded-sm border transition-colors duration-200 ${
              active === cat.id
                ? 'bg-bg-card border-border text-text-1'
                : 'border-border-sub text-text-3 hover:text-text-2 hover:border-border'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Spec cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filtered.map(spec => (
          <div
            key={spec.label}
            className="bg-bg-card border border-border-sub rounded-md p-4 flex flex-col"
          >
            <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-text-3 mb-2">
              {spec.label}
            </span>
            <div className="mt-auto">
              <span className="font-display text-[28px] font-bold text-text-1 leading-none">
                {spec.value}
              </span>
              {spec.unit && (
                <span className="text-[13px] text-text-3 ml-1.5">{spec.unit}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
