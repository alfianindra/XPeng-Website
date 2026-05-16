import { NextResponse } from 'next/server'

// Phase 5 stub — logs the lead and returns 200.
// Replace it with Resend email logic in Phase 5.
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Basic validation
    const { name, phone, model, date } = body
    if (!name || !phone || !model || !date) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO (Phase 5): send dealer notification + customer auto-reply via Resend
    console.log('[lead]', { name, phone, model, date, source: body.source ?? 'unknown' })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
