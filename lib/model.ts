export type SpecCategory = 'performance' | 'battery' | 'dimensions' | 'safety'

export interface CarSpec {
  label: string
  value: string
  unit:  string
  category: SpecCategory
}

export interface CarColor {
  name:  string
  hex:   string
  image: string
}

export interface CarModel {
  slug:        string
  name:        string
  tagline:     string
  description: string
  badge:       string
  priceFrom:   string
  heroImage:   string
  cardImage:   string
  specs:       CarSpec[]
  gallery:     string[]
  colors:      CarColor[]
}

export const models: CarModel[] = [
  {
    slug:        'g6',
    name:        'XPENG G6',
    tagline:     'Kecepatan. Kecerdasan. Keindahan.',
    description: 'SUV listrik performa tinggi dengan teknologi XNGP terdepan.',
    badge:       'Terlaris',
    priceFrom:   'Rp 899.000.000',
    heroImage:
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/6c37b69e7e11425cafde3b5797efe18f.jpg',
    cardImage:
      'https://s-cdn.xpeng.com/commoncms/prod/2025-07-03/cc362365922d4ff182d1d1cb81696298.jpg',
    specs: [
      { label: 'Range',      value: '755',  unit: 'km',   category: 'battery' },
      { label: '0–100 km/h', value: '3.9',  unit: 'det',  category: 'performance' },
      { label: 'Top Speed',  value: '200',  unit: 'km/h', category: 'performance' },
      { label: 'Baterai',    value: '87.5', unit: 'kWh',  category: 'battery' },
      { label: 'Tenaga',     value: '435',  unit: 'hp',   category: 'performance' },
      { label: 'Torsi',      value: '660',  unit: 'Nm',   category: 'performance' },
    ],
    gallery: [
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/6c37b69e7e11425cafde3b5797efe18f.jpg',
      'https://s-cdn.xpeng.com/commoncms/prod/2025-07-03/cc362365922d4ff182d1d1cb81696298.jpg',
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/2c0de1e035944f1895841b78e978d033.jpg',
    ],
    colors: [
      { name: 'Starry Black',    hex: '#1a1a2e', image: '' },
      { name: 'Moonstone White', hex: '#f0f0f0', image: '' },
      { name: 'Misty Grey',      hex: '#8d8d8d', image: '' },
    ],
  },
  {
    slug:        'x9',
    name:        'XPENG X9',
    tagline:     'MPV Listrik Premium. Redefinisi Kemewahan.',
    description: 'MPV listrik 6-seater untuk keluarga modern yang menuntut yang terbaik.',
    badge:       'Baru',
    priceFrom:   'Rp 1.899.000.000',
    heroImage:
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/a519b283b156449baafbf149cbef85be.jpg',
    cardImage:
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/2c0de1e035944f1895841b78e978d033.jpg',
    specs: [
      { label: 'Range',      value: '702',   unit: 'km',    category: 'battery' },
      { label: '0–100 km/h', value: '5.7',   unit: 'det',   category: 'performance' },
      { label: 'Top Speed',  value: '200',   unit: 'km/h',  category: 'performance' },
      { label: 'Baterai',    value: '101.5', unit: 'kWh',   category: 'battery' },
      { label: 'Tenaga',     value: '370',   unit: 'hp',    category: 'performance' },
      { label: 'Kapasitas',  value: '6',     unit: 'kursi', category: 'dimensions' },
    ],
    gallery: [
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/a519b283b156449baafbf149cbef85be.jpg',
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/2c0de1e035944f1895841b78e978d033.jpg',
    ],
    colors: [
      { name: 'Celestial Silver', hex: '#c0c0c0', image: '' },
      { name: 'Midnight Black',   hex: '#1a1a1a', image: '' },
    ],
  },
  {
    slug:        'x9-pro',
    name:        'XPENG X9 Pro',
    tagline:     'Puncak dari Segalanya.',
    description: 'Edisi Pro dari X9 dengan fitur dan finishing premium eksklusif.',
    badge:       'Premium',
    priceFrom:   'Rp 2.199.000.000',
    heroImage:
      'https://s-cdn.xpeng.com/commoncms/prod/2025-07-03/f81d0706ac47412d9eb680964a40b834.jpg',
    cardImage:
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/a519b283b156449baafbf149cbef85be.jpg',
    specs: [
      { label: 'Range',        value: '702',   unit: 'km',    category: 'battery' },
      { label: '0–100 km/h',   value: '5.7',   unit: 'det',   category: 'performance' },
      { label: 'Top Speed',    value: '200',   unit: 'km/h',  category: 'performance' },
      { label: 'Baterai',      value: '101.5', unit: 'kWh',   category: 'battery' },
      { label: 'Kapasitas',    value: '6',     unit: 'kursi', category: 'dimensions' },
      { label: 'Massage Seats',value: '✓',     unit: '',      category: 'safety' },
    ],
    gallery: [
      'https://s-cdn.xpeng.com/commoncms/prod/2025-07-03/f81d0706ac47412d9eb680964a40b834.jpg',
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/a519b283b156449baafbf149cbef85be.jpg',
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#0a0a0a', image: '' },
      { name: 'Pearl White',    hex: '#f5f5f5', image: '' },
    ],
  },
]