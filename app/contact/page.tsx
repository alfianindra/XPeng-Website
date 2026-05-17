import type { Metadata } from 'next'

import LeadForm from '@/components/LeadForm/LeadForm'
import dealer from '@/lib/dealer'

export const metadata: Metadata = {
  title: 'Test Drive — XPENG Sunter Jakarta',
  description:
    'Jadwalkan test drive XPENG G6 Pro, X9 Pro, atau X9 Pro+ di dealer resmi kami di Sunter, Jakarta Utara.',
}

const SOCIAL_LINKS = [
  { label: 'Instagram', href: dealer.social.instagram, abbr: 'IG' },
  { label: 'YouTube',   href: dealer.social.youtube,   abbr: 'YT' },
  { label: 'TikTok',   href: dealer.social.tiktok,    abbr: 'TK' },
  { label: 'Facebook', href: dealer.social.facebook,   abbr: 'FB' },
]

export default function ContactPage() {
  return (
    <main className="pt-nav min-h-screen bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

          {/* ── LEFT: Eyebrow + headline + form ── */}
          <div className="w-full lg:flex-1 min-w-0">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-3 mb-4">
              Jadwalkan Test Drive
            </p>
            <h1 className="font-display text-[40px] md:text-[52px] font-black leading-[1.05] tracking-[-0.03em] text-text-1 mb-4">
              Wujudkan Perjalanan<br className="hidden sm:block" /> Impian Anda
            </h1>
            <p className="text-[15px] text-text-2 leading-relaxed mb-10 max-w-[440px]">
              Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 24 jam
              untuk konfirmasi jadwal test drive.
            </p>

            <LeadForm showEmail source="contact" />
          </div>

          {/* ── RIGHT: Dealer info card (sticky on desktop) ── */}
          <div className="w-full lg:w-[380px] lg:flex-shrink-0 lg:sticky lg:top-[calc(var(--spacing-nav)+24px)]">
            <div className="bg-bg-card border border-border-sub rounded-xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">

              {/* Dealer name */}
              <h2 className="font-display text-[16px] font-bold text-text-1 mb-5 pb-5 border-b border-border-sub">
                {dealer.name}
              </h2>

              {/* Address */}
              <div className="flex gap-3 mb-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-bg-deep flex items-center justify-center flex-shrink-0 text-[14px]">
                  📍
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-text-3 uppercase tracking-[0.08em] mb-1">Lokasi</p>
                  <a
                    href="https://maps.app.goo.gl/WswAfP5QMFAU75sk6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-text-2 leading-relaxed hover:text-text-1 transition-colors duration-200"
                  >
                    {dealer.address}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3 mb-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-bg-deep flex items-center justify-center flex-shrink-0 text-[14px]">
                  🕘
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-text-3 uppercase tracking-[0.08em] mb-1">Jam Operasional</p>
                  <p className="text-[13px] text-text-2 leading-relaxed">
                    {dealer.workday.day}<br />{dealer.workday.hours}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 mb-5 items-start">
                <div className="w-8 h-8 rounded-lg bg-bg-deep flex items-center justify-center flex-shrink-0 text-[14px]">
                  ✉️
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-text-3 uppercase tracking-[0.08em] mb-1">Email</p>
                  <a
                    href={`mailto:${dealer.email}`}
                    className="text-[13px] text-text-2 hover:text-text-1 transition-colors duration-200"
                  >
                    {dealer.email}
                  </a>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3904498049896!2d106.86571087499609!3d-6.152629793832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1e94a44fe30b%3A0x4f3e6f89a0d1c3a0!2sJl.+Danau+Sunter+Barat%2C+Sunter+Agung%2C+Tanjung+Priok%2C+North+Jakarta+City%2C+Jakarta+14350!5e0!3m2!1sen!2sid!4v1747000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="XPENG Sunter Jakarta — Google Maps"
                />
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${dealer.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white text-[14px] font-semibold rounded-lg py-3 mb-5 hover:bg-[#20bc5a] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat via WhatsApp
              </a>

              {/* Social icons */}
              <div className="flex items-center justify-center gap-2">
                {SOCIAL_LINKS.map(({ label, href, abbr }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-border-sub text-[11px] font-semibold text-text-3 hover:text-text-1 hover:bg-bg-deep transition-colors duration-200"
                  >
                    {abbr}
                  </a>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
