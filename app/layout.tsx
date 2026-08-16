import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import Script from 'next/script'
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
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GT-5MR6QC7H"
        strategy="afterInteractive"
      />
     <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GT-5MR6QC7H');

          // Debounce window (ms). Blocks a second real conversion event if the
          // button/link is double-clicked or double-tapped within this window.
          var CONVERSION_DEBOUNCE_MS = 1000;
          window.__lastConversionAt = window.__lastConversionAt || 0;

          function gtag_report_conversion(url) {
            var now = Date.now();

            // Debounced: a conversion already fired very recently (e.g. a
            // double-click). Skip sending another event, but still let the
            // navigation happen so the user isn't stuck.
            if (now - window.__lastConversionAt < CONVERSION_DEBOUNCE_MS) {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
              return false;
            }
            window.__lastConversionAt = now;

            var sent = false;
            var callback = function () {
              if (!sent && typeof(url) != 'undefined') {
                sent = true;
                window.location = url;
              }
            };
            
            gtag('event', 'conversion', {
                'send_to': 'AW-18185183614/HKOVCNXaguIcEP7Cr99D',
                'event_callback': callback
            });

            // Fallback pengaman agar browser tetap redirect jika callback Google terlambat
            setTimeout(callback, 1000);
            
            return false;
          }
        `}
      </Script>
      {/* Cloudinary CDN */}
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
      {/* Google AdSense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8532024392635402"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </body>
    </html>
  )
}