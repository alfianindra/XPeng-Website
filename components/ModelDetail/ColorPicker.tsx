'use client'

import { useState } from 'react'

import type { CarColor } from '@/lib/model'

export default function ColorPicker({ colors }: { colors: CarColor[] }) {
  const [selected, setSelected] = useState(0)

  if (!colors.length) return null

  return (
    <div>
      <p className="text-[12px] font-semibold tracking-[0.08em] uppercase text-text-3 mb-3">
        Warna — <span className="text-text-2 normal-case font-normal tracking-normal">{colors[selected].name}</span>
      </p>
      <div className="flex gap-2.5 flex-wrap">
        {colors.map((color, i) => (
          <button
            key={color.name}
            onClick={() => setSelected(i)}
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
  )
}
