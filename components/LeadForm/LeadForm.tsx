'use client'

import { useState, useRef, useEffect } from 'react'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'

import { models } from '@/lib/model'

type State = 'idle' | 'loading' | 'success' | 'error'

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''

export default function LeadForm({
  defaultModel = '',
  showEmail = false,
  source = 'home',
}: {
  defaultModel?: string
  showEmail?: boolean
  source?: string
}) {
  const [state, setState] = useState<State>('idle')
  const [form, setForm] = useState({
    name: '',
    phone: '',
    model: defaultModel,
    date: '',
    email: '',
  })
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const turnstileRef = useRef<TurnstileInstance>(undefined)
  // Lazy-load Turnstile: only mount when form enters viewport.
  // Cloudflare challenges.cloudflare.com is a heavy third-party script — loading it
  // eagerly inflates TBT on mobile. rootMargin 200px gives it time to initialize
  // before the user reaches the submit button.
  const [turnstileVisible, setTurnstileVisible] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!SITE_KEY || !formRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTurnstileVisible(true); obs.disconnect() } },
      { rootMargin: '200px' }
    )
    obs.observe(formRef.current)
    return () => obs.disconnect()
  }, [])

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source,
          ...(turnstileToken ? { turnstileToken } : {}),
        }),
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
        turnstileRef.current?.reset()
        setTurnstileToken(null)
      }
    } catch {
      setState('error')
      turnstileRef.current?.reset()
      setTurnstileToken(null)
    }
  }

  if (state === 'success') {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-bg-card border border-border flex items-center justify-center mx-auto mb-4">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-1"
            aria-hidden="true"
          >
            <polyline points="20,6 9,17 4,12" />
          </svg>
        </div>
        <h3 className="font-display text-[22px] font-bold text-text-1 mb-2">Terima Kasih!</h3>
        <p className="text-[15px] text-text-2 leading-relaxed">
          Tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi jadwal.
        </p>
      </div>
    )
  }

  const inputCls =
    'w-full bg-bg-input border border-border-sub rounded-sm px-4 py-3 text-[14px] text-text-1 placeholder:text-text-3 focus:outline-none focus:border-border transition-colors duration-200'

  return (
    <form ref={formRef} onSubmit={submit} className="space-y-3" noValidate>
      <input
        name="name"
        type="text"
        placeholder="Nama Lengkap"
        required
        value={form.name}
        onChange={handle}
        className={inputCls}
        autoComplete="name"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Nomor WhatsApp (e.g. 08xx)"
        required
        value={form.phone}
        onChange={handle}
        className={inputCls}
        autoComplete="tel"
      />
      <select
        name="model"
        required
        value={form.model}
        onChange={handle}
        className={`${inputCls} ${!form.model ? 'text-text-3' : 'text-text-1'}`}
      >
        <option value="" disabled>
          Model yang Diminati
        </option>
        {models.map(m => (
          <option key={m.slug} value={m.slug}>
            {m.name}
          </option>
        ))}
      </select>
      <input
        name="date"
        type="date"
        required
        value={form.date}
        onChange={handle}
        className={`${inputCls} [color-scheme:light]`}
        min={new Date().toISOString().split('T')[0]}
      />

      {showEmail && (
        <div className="relative">
          <input
            name="email"
            type="email"
            placeholder="Email (opsional)"
            value={form.email}
            onChange={handle}
            className={inputCls}
            autoComplete="email"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] text-text-3 pointer-events-none">
            Opsional
          </span>
        </div>
      )}

      {/* Turnstile — lazy-loaded when form enters viewport to avoid eager TBT on mobile */}
      {SITE_KEY && turnstileVisible && (
        <Turnstile
          ref={turnstileRef}
          siteKey={SITE_KEY}
          onSuccess={token => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken(null)}
          options={{ theme: 'light', size: 'flexible' }}
        />
      )}

      {state === 'error' && (
        <p className="text-[13px] text-red-500">
          Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading' || (!!SITE_KEY && !turnstileToken)}
        className="w-full text-[15px] font-semibold bg-text-1 text-bg py-3.5 rounded-sm hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === 'loading' ? 'Mengirim...' : 'Jadwalkan Test Drive'}
      </button>
    </form>
  )
}
