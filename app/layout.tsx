import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

import {
  Navbar,
  Footer,
  WhatsappButton
} from '@/components'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  weight: ['500', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'XPENG Indonesia — Dealer Resmi',
    template: '%s | XPENG Indonesia',
  },
  description:
    'Dealer resmi XPENG di Indonesia. Test drive G6, X9, dan X9 Pro. ' +
    'Hubungi kami untuk informasi harga dan ketersediaan.',
  openGraph: {
    title: 'XPENG Indonesia — Dealer Resmi',
    description:
      'Dealer resmi XPENG di Indonesia. SUV dan MPV listrik terbaik.',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${interTight.variable}`}
    >
    <body>
      <Navbar />
      {children}
      <Footer />
      <WhatsappButton />
      <Analytics />
      <SpeedInsights />
    </body>
    </html>
  )
}