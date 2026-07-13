'use client'

import { useState } from 'react'

import { models } from '@/lib/model'
import dealer from '@/lib/dealer'

export default function FleetForm() {
  const [company, setCompany] = useState('')
  const [modelSlug, setModelSlug] = useState('')
  const [quantity, setQuantity] = useState('')

  const inputCls =
    'w-full bg-bg-input border border-border-sub rounded-sm px-4 py-3 text-[14px] text-text-1 placeholder:text-text-3 focus:outline-none focus:border-border transition-colors duration-200'

  const canSubmit = company.trim() !== '' && modelSlug !== '' && quantity.trim() !== ''

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return

    const modelName = models.find(m => m.slug === modelSlug)?.name ?? modelSlug
    const text = `Halo, saya dari perusahaan ${company} ingin mengambil fleet untuk unit ${modelName} dengan jumlah unit ${quantity}. Bisakah saya mendapatkan surat penawarannya?`
    window.open(`https://wa.me/${dealer.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-3"
      noValidate
      aria-label="Formulir order fleet"
    >
      {/* Nama perusahaan */}
      <div>
        <label htmlFor="fleet-company" className="sr-only">
          Nama Perusahaan
        </label>
        <input
          id="fleet-company"
          name="company"
          type="text"
          placeholder="Nama Perusahaan"
          required
          aria-required="true"
          value={company}
          onChange={e => setCompany(e.target.value)}
          className={inputCls}
          autoComplete="organization"
        />
      </div>

      {/* Unit yang mau dipesan */}
      <div>
        <label htmlFor="fleet-model" className="sr-only">
          Unit yang Ingin Dipesan
        </label>
        <select
          id="fleet-model"
          name="model"
          required
          aria-required="true"
          value={modelSlug}
          onChange={e => setModelSlug(e.target.value)}
          className={`${inputCls} ${!modelSlug ? 'text-text-3' : 'text-text-1'}`}
        >
          <option value="" disabled>
            Unit yang Ingin Dipesan
          </option>
          {models.map(m => (
            <option key={m.slug} value={m.slug}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      {/* Jumlah unit */}
      <div>
        <label htmlFor="fleet-quantity" className="sr-only">
          Jumlah Unit
        </label>
        <input
          id="fleet-quantity"
          name="quantity"
          type="number"
          min={1}
          placeholder="Jumlah Unit"
          required
          aria-required="true"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          className={inputCls}
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full text-[15px] font-semibold bg-text-1 text-bg py-3.5 rounded-sm hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-disabled={!canSubmit}
      >
        Pesan Sekarang
      </button>
    </form>
  )
}
