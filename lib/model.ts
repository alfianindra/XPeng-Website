export type SpecCategory = 'performance' | 'battery' | 'dimensions' | 'safety'

export type CarSpec = {
  label: string
  value: string
  unit:  string
  category: SpecCategory
}

export type CarColor = {
  name:  string
  hex:   string
  image: string
}

export type CarModel = {
  slug:            string
  name:            string
  tagline:         string
  description:     string
  badge:           string
  priceFrom:       string
  heroImage:       string        // landscape — shown on md+ (desktop)
  heroImageMobile: string        // portrait/square — shown below md (phone)
  cardImage:       string
  detailImage:     string
  specs:           CarSpec[]
  gallery:         string[]
  colors:          CarColor[]
  brochureUrl?:    string        // Cloudinary PDF — optional, shown as download link
}

export const models: CarModel[] = [
  {
    slug:        'g6-pro',
    name:        'XPENG G6 Pro',
    tagline:     'Kecepatan. Kecerdasan. Keindahan.',
    description: 'SUV listrik performa tinggi dengan teknologi XNGP terdepan.',
    badge:       'Terlaris',
    priceFrom:   'Rp 679.000.000',
    heroImage:
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778991671/g6_pro_iicqng.png',
    heroImageMobile:
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778991295/g6_pro_small_ji7kkp.png',
    cardImage:
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778940842/g6_pro_d2nmtm.png',
    detailImage:  'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778940501/g6-white_efq8qu.png',
    brochureUrl:  'https://res.cloudinary.com/xpeng-sunter/image/upload/v1778990055/G6_u9xj7j.pdf',
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
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/2c0de1e035944f1895841b78e978d033.jpg',
      'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/2c0de1e035944f1895841b78e978d033.jpg',
    ],
    colors: [
      { name: 'Arctic White',  hex: '#f2f2f2', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778940501/g6-white_efq8qu.png'  },
      { name: 'Graphite Gray', hex: '#4f5154', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778940491/g6-gray_vyc0wr.png'   },
      { name: 'Midnight Black',hex: '#1a1a1a', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778940489/g6-black_xfaaa7.png'  },
      { name: 'Silver Frost',  hex: '#b8bcc0', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778940495/g6-silver_exrgv9.png' },
    ],
  },
  {
    slug:        'x9-pro',
    name:        'XPENG X9 Pro',
    tagline:     'MPV Listrik Premium. Redefinisi Kemewahan.',
    description: 'MPV listrik 6-seater untuk keluarga modern yang menuntut yang terbaik.',
    badge:       'Baru',
    priceFrom:   'Rp 1.169.000.000',
    heroImage:
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778991771/x9_pro_lxc9xe.png',
    heroImageMobile:
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778991301/x9_pro_small_w5gavn.png',
    cardImage:   'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778940853/x9_pro_zkbfhd.png',
    detailImage:  'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941655/x9pro-white_ax57yx.png',
    brochureUrl:  'https://res.cloudinary.com/xpeng-sunter/image/upload/v1778990060/X9_nms0de.pdf',
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
      { name: 'Nebula White',    hex: '#f2f2f2', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941655/x9pro-white_ax57yx.png'  },
      { name: 'Dark Night Black',hex: '#1a1a1a', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941594/x9pro-black_ag4kna.png'  },
      { name: 'Crescent Silver', hex: '#b8bcc0', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941642/x9pro-silver_bi7bsd.png' },
    ],
  },
  {
    slug:        'x9-pro-plus',
    name:        'XPENG X9 Pro+',
    tagline:     'Puncak dari Segalanya.',
    description: 'Edisi Pro dari X9 dengan fitur dan finishing premium eksklusif.',
    badge:       'Premium',
    priceFrom:   'Rp 1.209.000.000',
    heroImage:
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778991945/x9_pro_plus_wt8r3s.png',
    heroImageMobile:
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778991297/x9_pro_plus_small_ftxwwz.png',
    cardImage:
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778940846/x9_pro_plus_jwysmh.png',
    detailImage:  'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941655/x9pro-white_ax57yx.png',
    brochureUrl:  'https://res.cloudinary.com/xpeng-sunter/image/upload/v1778990060/X9_nms0de.pdf',
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
      { name: 'Nebula White',    hex: '#f2f2f2', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941655/x9pro-white_ax57yx.png'  },
      { name: 'Dark Night Black',hex: '#1a1a1a', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941594/x9pro-black_ag4kna.png'  },
      { name: 'Crescent Silver', hex: '#b8bcc0', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941642/x9pro-silver_bi7bsd.png' },
      { name: 'Matte Gray',      hex: '#6b6f72', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941595/x9pro-gray_zgecv7.png'   },
    ],
  },
]