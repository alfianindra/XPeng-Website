import type { CarModel } from '@/lib/model'

const ROWS: { label: string; unit: string; key: string }[] = [
  { label: 'Harga Mulai',  unit: '',     key: 'price' },
  { label: 'Range',        unit: 'km',   key: 'Range' },
  { label: '0–100 km/h',  unit: 'det',  key: '0–100 km/h' },
  { label: 'Top Speed',    unit: 'km/h', key: 'Top Speed' },
  { label: 'Baterai',      unit: 'kWh',  key: 'Baterai' },
  { label: 'Tenaga',       unit: 'hp',   key: 'Tenaga' },
  { label: 'Kapasitas',    unit: 'kursi',key: 'Kapasitas' },
]

function getSpecValue(model: CarModel, key: string): string {
  if (key === 'price') return model.priceFrom
  const spec = model.specs.find(s => s.label === key)
  if (!spec) return '—'
  return spec.unit ? `${spec.value} ${spec.unit}` : spec.value
}

export default function CompareTable({
  models,
  currentSlug,
}: {
  models: CarModel[]
  currentSlug: string
}) {
  return (
    <div className="w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border-sub">
            <th className="text-left py-2.5 pr-2 text-[10px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase text-text-3 w-[90px] sm:w-[140px]">
              Spec
            </th>
            {models.map(m => (
              <th
                key={m.slug}
                className={`py-2.5 px-1 sm:px-3 text-center text-[11px] sm:text-[13px] font-semibold ${
                  m.slug === currentSlug ? 'text-text-1' : 'text-text-3'
                }`}
              >
                <div
                  className={`rounded-sm px-1.5 sm:px-3 py-1 leading-tight ${
                    m.slug === currentSlug ? 'bg-bg-card' : ''
                  }`}
                >
                  {m.name}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, ri) => {
            const values = models.map(m => getSpecValue(m, row.key))
            if (values.every(v => v === '—')) return null

            return (
              <tr
                key={row.key}
                className={`border-b border-border-sub ${ri % 2 === 0 ? '' : 'bg-bg-card/30'}`}
              >
                <td className="py-3 pr-2 text-[11px] sm:text-[13px] text-text-3 font-medium">
                  {row.label}
                </td>
                {models.map(m => (
                  <td
                    key={m.slug}
                    className={`py-3 px-1 sm:px-3 text-center text-[11px] sm:text-[14px] ${
                      m.slug === currentSlug ? 'text-text-1 font-semibold' : 'text-text-2'
                    }`}
                  >
                    {getSpecValue(m, row.key)}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
