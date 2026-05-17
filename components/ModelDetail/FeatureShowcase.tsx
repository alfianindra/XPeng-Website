import Image from 'next/image'
import FadeIn from '@/components/FadeIn/FadeIn'
import type { CarFeature, FeatureIcon } from '@/lib/model'

// ── Thin-line SVG icons ───────────────────────────────────────────────────────
function Icon({ name }: { name: FeatureIcon }) {
  const props = {
    width: 120, height: 120,
    viewBox: '0 0 120 120',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'text-text-1',
  }

  switch (name) {
    case 'autopilot':
      return (
        <svg {...props}>
          <circle cx="60" cy="60" r="38" />
          <circle cx="60" cy="60" r="8" />
          <line x1="60" y1="22" x2="60" y2="44" />
          <line x1="60" y1="76" x2="60" y2="98" />
          <line x1="22" y1="60" x2="44" y2="60" />
          <line x1="76" y1="60" x2="98" y2="60" />
          <line x1="33" y1="33" x2="49" y2="49" />
          <line x1="71" y1="71" x2="87" y2="87" />
          <line x1="87" y1="33" x2="71" y2="49" />
          <line x1="33" y1="87" x2="49" y2="71" />
        </svg>
      )
    case 'charging':
      return (
        <svg {...props}>
          <path d="M65 10 L30 65 h28 L58 110 L92 55 H64 Z" />
          <path d="M20 90 Q60 75 100 90" strokeDasharray="4 4" strokeWidth={0.8} />
        </svg>
      )
    case 'seats':
      return (
        <svg {...props}>
          <path d="M30 30 Q30 20 40 20 H80 Q90 20 90 30 V65 Q90 75 80 75 H40 Q30 75 30 65 Z" />
          <path d="M30 75 V95 Q30 100 35 100 H45 Q50 100 50 95 V75" />
          <path d="M70 75 V95 Q70 100 75 100 H85 Q90 100 90 95 V75" />
          <path d="M20 40 H30" />
          <path d="M20 55 H30" />
          <path d="M20 65 H30" />
        </svg>
      )
    case 'sunroof':
      return (
        <svg {...props}>
          <rect x="15" y="35" width="90" height="55" rx="8" />
          <path d="M15 55 H105" />
          <path d="M55 35 H65" strokeWidth={2} />
          <path d="M35 35 Q60 12 85 35" />
          <path d="M42 20 L38 10 M60 16 L60 6 M78 20 L82 10" strokeWidth={0.8} />
        </svg>
      )
    case 'audio':
      return (
        <svg {...props}>
          <polygon points="50,30 25,48 25,72 50,90 50,30" />
          <path d="M58 42 Q75 60 58 78" />
          <path d="M66 32 Q92 60 66 88" />
          <path d="M74 24 Q108 60 74 96" strokeWidth={0.8} />
          <circle cx="37" cy="60" r="4" fill="currentColor" strokeWidth={0} />
        </svg>
      )
    case 'display':
      return (
        <svg {...props}>
          <rect x="15" y="20" width="90" height="58" rx="6" />
          <line x1="15" y1="64" x2="105" y2="64" />
          <line x1="60" y1="78" x2="60" y2="95" />
          <line x1="40" y1="95" x2="80" y2="95" />
          <rect x="28" y="30" width="64" height="26" rx="3" strokeWidth={0.8} />
          <circle cx="60" cy="70" r="2.5" fill="currentColor" strokeWidth={0} />
        </svg>
      )
    case 'safety':
      return (
        <svg {...props}>
          <path d="M60 15 L20 30 V58 C20 82 38 100 60 108 C82 100 100 82 100 58 V30 Z" />
          <polyline points="42,60 54,72 78,46" strokeWidth={2} />
        </svg>
      )
    case 'v2l':
      return (
        <svg {...props}>
          <rect x="25" y="45" width="70" height="42" rx="6" />
          <path d="M40 45 V30 Q40 22 48 22 H72 Q80 22 80 30 V45" />
          <path d="M52 60 L60 52 L60 62 L68 54" strokeWidth={2} />
          <line x1="38" y1="98" x2="38" y2="108" />
          <line x1="82" y1="98" x2="82" y2="108" />
        </svg>
      )
    case 'tow':
      return (
        <svg {...props}>
          <rect x="10" y="40" width="60" height="35" rx="5" />
          <circle cx="25" cy="88" r="10" />
          <circle cx="55" cy="88" r="10" />
          <path d="M70 57 H100 Q108 57 108 65 V75 H70" />
          <circle cx="95" cy="88" r="8" />
          <line x1="70" y1="57" x2="70" y2="78" />
        </svg>
      )
    default:
      return null
  }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function FeatureShowcase({ features }: { features: CarFeature[] }) {
  if (!features.length) return null

  return (
    <section id="features" className="scroll-mt-32 border-t border-border-sub">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-text-3 mb-3">
            Keunggulan
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-extrabold tracking-[-0.04em] text-text-1 leading-none">
            Built Different
          </h2>
        </FadeIn>
      </div>

      {/* Alternating rows */}
      {features.map((feature, i) => {
        const reversed = i % 2 === 1
        return (
          <FadeIn key={feature.name}>
            <div className={`border-t border-border-sub ${reversed ? 'bg-bg-deep' : 'bg-bg'}`}>
              <div
                className={`max-w-7xl mx-auto px-6 py-10 md:py-2 flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  reversed ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <div className="w-full md:flex-1 flex items-center justify-center">
                  {feature.image ? (
                    <div className="relative w-full max-w-sm aspect-[4/3] md:max-w-none md:w-[420px] md:h-[420px] rounded-xl overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 384px, 420px"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 md:w-44 md:h-44 opacity-90">
                      <Icon name={feature.icon} />
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 max-w-xl">
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-text-3 mb-3">
                    {feature.tag}
                  </p>
                  <h3 className="font-display text-[clamp(22px,3vw,36px)] font-extrabold tracking-[-0.03em] text-text-1 leading-tight mb-4">
                    {feature.name}
                  </h3>
                  <p className="text-[15px] text-text-2 leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  {feature.stat && (
                    <div className="flex items-baseline gap-2 pt-6 border-t border-border-sub">
                      <span className="font-display text-[clamp(28px,4vw,42px)] font-black tracking-[-0.04em] text-text-1 leading-none">
                        {feature.stat}
                      </span>
                      {feature.statLabel && (
                        <span className="text-[13px] text-text-3">{feature.statLabel}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        )
      })}
    </section>
  )
}
