export type SpecCategory = 'performance' | 'battery' | 'dimensions' | 'safety'

export type FeatureIcon = 'autopilot' | 'charging' | 'seats' | 'sunroof' | 'audio' | 'safety' | 'display' | 'v2l' | 'tow'

export type CarFeature = {
  tag:        string        // e.g. "Otonomi", "Pengisian"
  name:       string
  description:string
  stat?:      string        // e.g. "20", "2.180W"
  statLabel?: string        // e.g. "menit 10→80%", "output · 23 speaker"
  icon:       FeatureIcon
  image?:     string        // optional real photo — shown instead of SVG icon
}

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
  features:        CarFeature[]
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
      { label: 'WLTP Range',    value: '525',  unit: 'km',  category: 'battery' },
      { label: '0–100 km/h',    value: '6,7',  unit: 'det', category: 'performance' },
      { label: 'Tenaga',        value: '286',  unit: 'hp',  category: 'performance' },
      { label: 'Torsi',         value: '440',  unit: 'Nm',  category: 'performance' },
      { label: 'Baterai',       value: '80,8', unit: 'kWh', category: 'battery' },
      { label: 'DC Charging',   value: '451',  unit: 'kW',  category: 'battery' },
    ],
    features: [
      {
        tag: 'Otonomi', icon: 'autopilot',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778997580/autonomus_driving_lkerre.png',
        name: 'XNGP Autonomous Driving',
        description: 'Sistem ADAS generasi terbaru dengan NVIDIA DRIVE Orin-X, 3 radar, dan 12 kamera ultrasonik. Perpindahan jalur otomatis, parkir mandiri via aplikasi, dan cruise adaptif yang memahami kondisi jalan Indonesia.',
        stat: '12', statLabel: 'kamera + sensor radar',
      },
      {
        tag: 'Pengisian', icon: 'charging',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778997583/fast_charging_emff6d.png',
        name: '800V Ultra-Fast Charging',
        description: 'Arsitektur silicon carbide 800V memangkas waktu pengisian drastis. Dari 10% ke 80% dalam kurang dari 20 menit. Cukup 5 menit untuk menambah jarak tempuh 120 km di XPENG Supercharger.',
        stat: '20 menit', statLabel: '10% → 80%',
      },
      {
        tag: 'Interior', icon: 'sunroof',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778997577/panaromic_sunroof_fzivay.jpg',
        name: 'Panoramic Sunroof 2.12 m²',
        description: 'Atap kaca terluas di kelasnya — mencakup 63.4% permukaan atap. Teknologi double-silver low-E memblokir 99.9% sinar UV tanpa mengorbankan cahaya alami. Satu sentuhan untuk membuka atau menutup.',
        stat: '2.12 m²', statLabel: '63.4% area atap',
      },
      {
        tag: 'Audio', icon: 'audio',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778997576/opera_speaker_kirzl5.png',
        name: 'XOPERA Premium Audio',
        description: 'Sistem surround 7.1.4 dengan 18 speaker dan output 960 Watt — dirancang khusus untuk akustik kabin G6. Setiap frekuensi dioptimalkan untuk menghadirkan kualitas konser dalam perjalanan harian Anda.',
        stat: '960W', statLabel: '18 speaker · 7.1.4 surround',
      },
      {
        tag: 'Platform', icon: 'safety',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778998857/air_suspension_qiuszy.jpg',
        name: 'Latest Generation EV Platform SEPA 2.0',
        description: 'G6 dibangun di atas platform EV terbaru XPENG yang ringan dan kuat, SEPA 2.0. Bobot yang lebih rendah mendukung jangkauan lebih jauh, sementara kekakuan puntir mencapai 41.600 Nm/deg. Lebih dari 300 komponen diintegrasikan dalam satu struktur untuk ketahanan benturan lebih kuat, manajemen bobot lebih baik, dan perlindungan yang ditingkatkan.',
        stat: '41.600', statLabel: 'Nm/deg kekakuan puntir',
      },
    ],
    gallery: [
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995589/g6_1_cwpwua.png',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995615/g6_2_gxy8rt.jpg',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995603/g6_3_uu7v3u.png',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995593/g6_4_lb7hah.jpg',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995762/g6_5_n7frfx.jpg',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995755/g6_6_zwmcot.png',
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
      { label: 'NEDC Range',  value: '690',  unit: 'km',    category: 'battery' },
      { label: '0–100 km/h',  value: '7,7',  unit: 'det',   category: 'performance' },
      { label: 'Tenaga',      value: '320',  unit: 'hp',    category: 'performance' },
      { label: 'Torsi',       value: '450',  unit: 'Nm',    category: 'performance' },
      { label: 'Baterai',     value: '84,5', unit: 'kWh',   category: 'battery' },
      { label: 'Kapasitas',   value: '7',    unit: 'kursi', category: 'dimensions' },
    ],
    features: [
      {
        tag: 'Otonomi', icon: 'autopilot',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778999152/autonomus_driving_i3ryiq.jpg',
        name: 'XNGP Autonomous Driving',
        description: 'Teknologi navigasi cerdas dengan NVIDIA DRIVE Orin-X, 3 radar, dan 12 kamera — menghadirkan perpindahan jalur otomatis, parkir mandiri, dan cruise adaptif bahkan di jalan tol Indonesia.',
        stat: 'NVIDIA', statLabel: 'DRIVE Orin-X chipset',
      },
      {
        tag: 'Pengisian', icon: 'charging',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778998791/fast_charging_nc5hbs.jpg',
        name: '800V Ultra-Fast Charging',
        description: 'Arsitektur silicon carbide 800V memangkas waktu pengisian drastis. Isi daya 10% ke 80% dalam kurang dari 20 menit. Teknologi X-HP Thermal Management menjaga baterai di zona efisiensi optimal.',
        stat: '20 menit', statLabel: '10% → 80%',
      },
      {
        tag: 'Kenyamanan', icon: 'seats',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778998789/premium_seat_kpxdux.jpg',
        name: 'Zero-Gravity Massage Seats',
        description: 'Kursi reclining dengan 6 mode pijat dirancang bersama pakar ergonomi — tersedia hingga baris ketiga. Sistem A/C wrap-around pertama di dunia untuk MPV memastikan setiap penumpang mendapat kesejukan optimal.',
        stat: '6 mode', statLabel: 'pijat · semua baris',
      },
      {
        tag: 'Hiburan', icon: 'display',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778998779/21-inch_ujttw0.jpg',
        name: '21.4" Rear Entertainment',
        description: 'Layar hiburan belakang 21.4 inci dengan sudut kemiringan elektrik 0–75°. Transformasikan kabin menjadi bioskop pribadi. Dipadukan dengan sistem XOPERA 23 speaker dan output 2.180 Watt Dolby Atmos.',
        stat: '2.180W', statLabel: '23 speaker · Dolby Atmos',
      },
      {
        tag: 'Keamanan', icon: 'safety',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778998781/alumunium_body_s7cqvv.jpg',
        name: 'Die-Cast Aluminium Safety Cage',
        description: 'Pertama di dunia: MPV dengan die-cast aluminium depan dan belakang terintegrasi menggunakan mesin 12.000 ton. Kekakuan puntir 46.000 N·m/deg dan kandungan baja ultra-high-strength 2.000 MPa.',
        stat: '46.000', statLabel: 'N·m/deg kekakuan puntir',
      },
    ],
    gallery: [
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995757/x9_1_lg3njl.png',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995759/x9_2_o1pibk.jpg',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995758/x9_3_ath4ui.jpg',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995761/x9_4_xhiowq.jpg',
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
      { label: 'NEDC Range',  value: '702',   unit: 'km',    category: 'battery' },
      { label: '0–100 km/h',  value: '5,7',   unit: 'det',   category: 'performance' },
      { label: 'Tenaga',      value: '496',   unit: 'hp',    category: 'performance' },
      { label: 'Torsi',       value: '640',   unit: 'Nm',    category: 'performance' },
      { label: 'Baterai',     value: '101,5', unit: 'kWh',   category: 'battery' },
      { label: 'Kapasitas',   value: '7',     unit: 'kursi', category: 'dimensions' },
    ],
    features: [
      {
        tag: 'Otonomi', icon: 'autopilot',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778999152/autonomus_driving_i3ryiq.jpg',
        name: 'XNGP Autonomous Driving',
        description: 'Teknologi navigasi cerdas dengan NVIDIA DRIVE Orin-X, 3 radar, dan 12 kamera — menghadirkan perpindahan jalur otomatis, parkir mandiri, dan cruise adaptif bahkan di jalan tol Indonesia.',
        stat: 'NVIDIA', statLabel: 'DRIVE Orin-X chipset',
      },
      {
        tag: 'Pengisian', icon: 'charging',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778998791/fast_charging_nc5hbs.jpg',
        name: '800V Ultra-Fast Charging',
        description: 'Arsitektur silicon carbide 800V memangkas waktu pengisian drastis. Isi daya 10% ke 80% dalam kurang dari 20 menit. Teknologi X-HP Thermal Management menjaga baterai di zona efisiensi optimal.',
        stat: '20 menit', statLabel: '10% → 80%',
      },
      {
        tag: 'Kenyamanan', icon: 'seats',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778998789/premium_seat_kpxdux.jpg',
        name: 'Zero-Gravity Massage Seats',
        description: 'Kursi reclining dengan 6 mode pijat tersedia hingga baris ketiga — ditambah finishing eksklusif dan bahan premium edisi Pro+. Setiap penumpang menikmati pengalaman first-class dalam setiap perjalanan.',
        stat: '6 mode', statLabel: 'pijat · finishing eksklusif',
      },
      {
        tag: 'Hiburan', icon: 'display',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778998779/21-inch_ujttw0.jpg',
        name: '21.4" Rear Entertainment',
        description: 'Layar hiburan belakang 21.4 inci dengan sudut kemiringan elektrik 0–75°. Transformasikan kabin menjadi bioskop pribadi. Dipadukan dengan sistem XOPERA 23 speaker dan output 2.180 Watt Dolby Atmos.',
        stat: '2.180W', statLabel: '23 speaker · Dolby Atmos',
      },
      {
        tag: 'Eksklusif', icon: 'safety',
        image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778998781/alumunium_body_s7cqvv.jpg',
        name: 'Finishing & Material Premium',
        description: 'Edisi Pro+ menghadirkan material finishing eksklusif di seluruh kabin — kulit Nappa grade premium, wood trim asli, dan detail aluminium brushed yang membedakannya dari X9 Pro standar.',
        stat: 'Pro+', statLabel: 'exclusive edition',
      },
    ],
    gallery: [
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995757/x9_1_lg3njl.png',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995759/x9_2_o1pibk.jpg',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995758/x9_3_ath4ui.jpg',
      'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778995761/x9_4_xhiowq.jpg',
    ],
    colors: [
      { name: 'Nebula White',    hex: '#f2f2f2', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941655/x9pro-white_ax57yx.png'  },
      { name: 'Dark Night Black',hex: '#1a1a1a', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941594/x9pro-black_ag4kna.png'  },
      { name: 'Crescent Silver', hex: '#b8bcc0', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941642/x9pro-silver_bi7bsd.png' },
      { name: 'Matte Gray',      hex: '#6b6f72', image: 'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778941595/x9pro-gray_zgecv7.png'   },
    ],
  },
]