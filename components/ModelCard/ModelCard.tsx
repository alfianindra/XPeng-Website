import Image from 'next/image'
import Link from 'next/link'

import type { CarModel } from '@/lib/model'

export default function ModelCard({ model }: { model: CarModel }) {
  const topSpecs = model.specs.slice(0, 3)

  return (
    <article className="group relative bg-bg-card rounded-md overflow-hidden border border-border-sub hover:border-border transition-colors duration-300 flex flex-col">
      {/* Badge */}
      {model.badge && (
        <div className="absolute top-3 left-3 z-10 text-[11px] font-semibold tracking-[0.1em] uppercase bg-bg-deep/80 backdrop-blur-sm text-text-2 border border-border-sub px-2.5 py-1 rounded-sm">
          {model.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={model.cardImage}
          alt={model.name}
          fill
          className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-[20px] font-extrabold tracking-[-0.02em] text-text-1 mb-1">
          {model.name}
        </h3>
        <p className="text-[14px] text-text-3 mb-3 leading-relaxed">{model.tagline}</p>
        <p className="text-[13px] text-text-3 mb-5">
          Mulai dari{' '}
          <span className="text-text-2 font-semibold">{model.priceFrom}</span>
        </p>

        {/* Key specs strip */}
        <div className="grid grid-cols-3 gap-2 mb-5 pb-5 border-b border-border-sub">
          {topSpecs.map(spec => (
            <div key={spec.label} className="text-center">
              <div className="text-[17px] font-bold text-text-1 leading-none">
                {spec.value}
                <span className="text-[11px] font-normal text-text-3 ml-0.5">{spec.unit}</span>
              </div>
              <div className="text-[11px] text-text-3 mt-1">{spec.label}</div>
            </div>
          ))}
        </div>

        <Link
          href={`/models/${model.slug}`}
          className="mt-auto block text-center text-[14px] font-semibold bg-text-1 text-bg px-5 py-2.5 rounded-sm hover:bg-white/90 transition-colors duration-200"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  )
}
