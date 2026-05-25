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
  metadataBase: new URL('https://xpengsunter.com'),
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  title: {
    default: 'XPENG Indonesia — Dealer Resmi Sunter Jakarta',
    template: '%s | XPENG Sunter Jakarta',
  },
  description:
    'Dealer resmi XPENG di Sunter, Jakarta Utara. Test drive XPENG G6 Pro, X9 Pro, dan X9 Pro+. ' +
    'Hubungi kami untuk harga terbaik dan ketersediaan unit.',
  keywords: [
    'XPENG Indonesia', 'dealer XPENG Jakarta', 'XPENG G6 Pro', 'XPENG X9 Pro',
    'mobil listrik Indonesia', 'EV dealer Jakarta', 'XPENG Sunter', 'test drive XPENG',
  ],
  openGraph: {
    title: 'XPENG Indonesia — Dealer Resmi Sunter Jakarta',
    description: 'Dealer resmi XPENG di Sunter, Jakarta Utara. SUV dan MPV listrik terbaik untuk Indonesia.',
    locale: 'id_ID',
    type: 'website',
    url: 'https://xpengsunter.com',
    siteName: 'XPENG Sunter Jakarta',
    images: [
      {
        url: 'https://res.cloudinary.com/cavemine/image/upload/v1778991671/g6_pro_iicqng.png',
        width: 1200,
        height: 630,
        alt: 'XPENG G6 Pro — Dealer Resmi Jakarta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XPENG Indonesia — Dealer Resmi Sunter Jakarta',
    description: 'Dealer resmi XPENG di Sunter, Jakarta Utara. Test drive G6 Pro, X9 Pro, X9 Pro+.',
    images: ['https://res.cloudinary.com/cavemine/image/upload/v1778991671/g6_pro_iicqng.png'],
  },
  alternates: {
    canonical: 'https://xpengsunter.com',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'XPENG Sunter Jakarta',
  description: 'Dealer resmi XPENG di Indonesia. SUV dan MPV listrik terbaik.',
  url: 'https://xpengsunter.com',
  telephone: '+6289668216082',
  email: 'xpengsunter.office@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Blok A3 No.42, Jl. Danau Sunter Barat, RW.10',
    addressLocality: 'Sunter Agung, Tanjung Priok',
    addressRegion: 'Jakarta Utara',
    postalCode: '14350',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.152629,
    longitude: 106.865711,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '09:00',
    closes: '17:00',
  },
  sameAs: [
    'https://www.instagram.com/xpengmotors.sunter',
    'https://youtube.com/@xpeng_id',
  ],
  hasMap: 'https://maps.app.goo.gl/WswAfP5QMFAU75sk6',
  priceRange: 'Rp679.000.000 – Rp1.209.000.000',
  currenciesAccepted: 'IDR',
  paymentAccepted: 'Cash, Bank Transfer, Leasing',
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${interTight.variable}`}
    >
    <head>
      {/* Cloudinary CDN — preconnect eliminates DNS+TCP+TLS handshake before first image */}
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </head>
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