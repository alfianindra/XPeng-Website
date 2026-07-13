import type { Metadata } from 'next'

import FleetForm from '@/components/FleetForm/FleetForm'
import dealer from '@/lib/dealer'

export const metadata: Metadata = {
  title: 'Order Fleet — XPENG Sunter Jakarta',
  description:
    'Pengadaan armada XPENG untuk perusahaan Anda. Isi formulir order fleet dan dapatkan surat penawaran untuk G6 Pro, X9 Pro, atau X9 Pro+.',
  alternates: {
    canonical: 'https://xpengsunter.com/fleet',
  },
  openGraph: {
    title: 'Order Fleet — XPENG Sunter Jakarta',
    description: 'Pengadaan armada XPENG untuk perusahaan Anda. Dapatkan surat penawaran untuk G6 Pro, X9 Pro, atau X9 Pro+.',
    url: 'https://xpengsunter.com/fleet',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Order Fleet — XPENG Sunter Jakarta',
    description: 'Pengadaan armada XPENG untuk perusahaan Anda.',
  },
}

export default function FleetPage() {
  return (
    <main className="pt-nav min-h-screen bg-bg">
      <div className="max-w-lg mx-auto px-6 py-14 lg:py-20">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-3 mb-4 text-center">
          Order Fleet
        </p>
        <h1 className="font-display text-[clamp(32px,5vw,48px)] font-black leading-[1.05] tracking-[-0.03em] text-text-1 mb-4 text-center">
          Pengadaan Armada Perusahaan
        </h1>
        <p className="text-[15px] text-text-2 leading-relaxed mb-10 text-center">
          Untuk kebutuhan pengadaan unit dalam jumlah besar, isi formulir di bawah dan
          tim kami akan mengirimkan surat penawaran langsung melalui WhatsApp.
        </p>

        <FleetForm />

        <p className="mt-8 pt-8 border-t border-border-sub text-[13px] text-text-3 text-center leading-relaxed">
          Atau hubungi kami langsung untuk konsultasi armada di{' '}
          <a
            href={`https://wa.me/${dealer.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-2 hover:text-text-1 transition-colors duration-200"
          >
            +{dealer.whatsapp}
          </a>
        </p>
      </div>
    </main>
  )
}
