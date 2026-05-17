import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Verify Cloudflare Turnstile token server-side
async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true // skip in dev if key not configured

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    })
    const data = await res.json()
    return data.success === true
  } catch {
    return true // network error — don't block the lead
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, model, date, email, turnstileToken, source } = body

    // 1. Turnstile verification
    if (turnstileToken) {
      const valid = await verifyTurnstile(turnstileToken)
      if (!valid) {
        return NextResponse.json(
          { error: 'Verifikasi gagal. Silakan coba lagi.' },
          { status: 400 }
        )
      }
    }

    // 2. Validate required fields
    if (!name || !phone || !model || !date) {
      return NextResponse.json({ error: 'Semua kolom wajib diisi.' }, { status: 400 })
    }

    // 4. Send dealer notification
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM!,
        to: process.env.DEALER_EMAIL!,
        subject: `[Test Drive] ${name} — ${model}`,
        text: [
          'Permintaan Test Drive Baru',
          '',
          `Nama      : ${name}`,
          `Telepon   : ${phone}`,
          `Model     : ${model}`,
          `Tanggal   : ${date}`,
          email ? `Email     : ${email}` : null,
          `Sumber    : ${source ?? 'website'}`,
          '',
          '---',
          'Dikirim dari website XPENG Sunter',
        ]
          .filter((line): line is string => line !== null)
          .join('\n'),
      })
    } catch (err) {
      // Never 500 a lead — logged above, return success to user
      console.error('[lead] Resend dealer notification failed:', err)
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    // 5. Customer auto-reply — only if email provided, non-blocking
    if (email) {
      resend.emails
        .send({
          from: process.env.RESEND_FROM!,
          to: email,
          subject: 'Terima kasih — XPENG Indonesia',
          text: [
            `Halo ${name},`,
            '',
            'Terima kasih telah menghubungi kami!',
            '',
            `Kami telah menerima permintaan test drive ${model} Anda untuk tanggal ${date}.`,
            'Tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi.',
            '',
            'Untuk pertanyaan mendesak, hubungi kami via WhatsApp:',
            'https://wa.me/6281317266888',
            '',
            'Salam,',
            'Tim XPENG Sunter Jakarta',
            'Blok A3 No.42, Jl. Danau Sunter Barat, Jakarta 14350',
          ].join('\n'),
        })
        .catch(err => console.error('[lead] Auto-reply failed:', err))
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
