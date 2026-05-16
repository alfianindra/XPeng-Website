import Link from 'next/link'

import { FOOTER_MODEL_LINKS, FOOTER_INFO_LINKS } from '@/lib/constants'
import dealer from '@/lib/dealer'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bg-deep border-t border-border-sub pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-6 lg:gap-10 mb-10">

          {/* Brand column */}
          <div>
            <div className="font-display text-[20px] font-extrabold text-text-1 mb-3 tracking-[-0.02em]">
              XPENG
            </div>
            <p className="text-[14px] text-text-3 leading-relaxed mb-4">
              Dealer resmi XPENG di Indonesia.<br />
              Kendaraan listrik terdepan untuk masa depan yang berkelanjutan.
            </p>
            <div className="flex flex-col gap-1.5 text-[14px] text-text-2">
              <span>{dealer.address}</span>
              <a
                href={`https://wa.me/${dealer.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-1 transition-colors duration-200"
              >
                WhatsApp: +{dealer.whatsapp}
              </a>
            </div>
          </div>

          {/* Model links */}
          <div>
            <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-text-3 mb-3.5">
              Model
            </div>
            <div className="flex flex-col gap-2">
              {FOOTER_MODEL_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[14px] text-text-2 hover:text-text-1 transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Info links */}
          <div>
            <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-text-3 mb-3.5">
              Informasi
            </div>
            <div className="flex flex-col gap-2">
              {FOOTER_INFO_LINKS.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[14px] text-text-2 hover:text-text-1 transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-text-3 mb-3.5">
              Jam Operasional
            </div>
            <div className="flex flex-col gap-1 text-[14px] text-text-2">
              <span>Senin – Jumat</span>
              <span>09.00 – 18.00 WIB</span>
              <span>Sabtu</span>
              <span>09.00 – 15.00 WIB</span>
              <span className="text-text-3 mt-1">Minggu & Hari Libur: Tutup</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border-sub pt-5 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[12px] text-text-3">
            © {year} {dealer.name}. Dealer Resmi XPENG Indonesia.
          </span>
          <span className="text-[12px] text-text-3">
            XPENG® adalah merek terdaftar dari Guangzhou Xiaopeng Motors Technology Co., Ltd.
          </span>
        </div>

      </div>
    </footer>
  )
}