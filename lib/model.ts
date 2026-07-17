export type SpecCategory = 'performance' | 'battery' | 'dimensions' | 'safety'

export type FeatureIcon = 'autopilot' | 'charging' | 'seats' | 'sunroof' | 'audio' | 'safety' | 'display' | 'v2l' | 'tow' | 'vents' | 'door'

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

// A performance/trim variant of a model, toggled on the model detail page hero
// (e.g. Standard vs AWD). Only drives the hero panel — badge, price, top specs,
// color — not the full spec grid, compare table, or gallery further down the page.
export type CarVariant = {
  id:        string        // e.g. 'awd'
  label:     string        // short toggle label, e.g. 'AWD'
  badge:     string
  priceFrom: string
  specs:     CarSpec[]      // first 3 are shown as the hero's top spec tiles
  colors:    CarColor[]
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
  variants?:       CarVariant[]  // optional trim toggle shown in the hero (Standard vs ...)
  brochureUrl?:    string        // Cloudinary PDF — optional, shown as download link
}

// ── Carousel subset ────────────────────────────────────────────────────────────
// Only the fields the HeroCarousel needs. Importing this instead of `models`
// keeps the home page client bundle from shipping specs, features, gallery URLs,
// and color data that are only needed on model detail pages.
export type CarouselModel = Pick<
  CarModel,
  'slug' | 'name' | 'tagline' | 'priceFrom' | 'badge' | 'heroImage' | 'heroImageMobile'
>

export const models: CarModel[] = [
  {
    slug:        'g6-pro',
    name:        'XPENG G6 Pro',
    tagline:     'Kecepatan. Kecerdasan. Keindahan.',
    description: 'SUV listrik performa tinggi dengan teknologi XNGP terdepan.',
    badge:       'Terlaris',
    priceFrom:   'Rp 679.000.000',
    heroImage:
      'https://res.cloudinary.com/cavemine/image/upload/v1778991671/g6_pro_iicqng.png',
    heroImageMobile:
      'https://res.cloudinary.com/cavemine/image/upload/v1778991295/g6_pro_small_ji7kkp.png',
    cardImage:
      'https://res.cloudinary.com/cavemine/image/upload/v1778940842/g6_pro_d2nmtm.png',
    detailImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778940501/g6-white_efq8qu.png',
    brochureUrl:  'https://res.cloudinary.com/cavemine/image/upload/v1779086586/DOC-20260515-WA0001._compressed_zwyalw.pdf',
    specs: [
      { label: 'WLTP Range',    value: '525',  unit: 'km',  category: 'battery' },
      { label: '0–100 km/h',    value: '6,7',  unit: 'det', category: 'performance' },
      { label: 'Tenaga',        value: '292',  unit: 'hp',  category: 'performance' },
      { label: 'Torsi',         value: '440',  unit: 'Nm',  category: 'performance' },
      { label: 'Baterai',       value: '80,8', unit: 'kWh', category: 'battery' },
      { label: 'DC Charging',   value: '451',  unit: 'kW',  category: 'battery' },
    ],
    features: [
      {
        tag: 'Otonomi', icon: 'autopilot',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778997580/autonomus_driving_lkerre.png',
        name: 'XNGP Autonomous Driving',
        description: 'Sistem ADAS generasi terbaru dengan NVIDIA DRIVE Orin-X, 3 radar, dan 12 kamera ultrasonik. Perpindahan jalur otomatis, parkir mandiri via aplikasi, dan cruise adaptif yang memahami kondisi jalan Indonesia.',
        stat: '12', statLabel: 'kamera + sensor radar',
      },
      {
        tag: 'Pengisian', icon: 'charging',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778997583/fast_charging_emff6d.png',
        name: '800V Ultra-Fast Charging',
        description: 'Arsitektur silicon carbide 800V memangkas waktu pengisian drastis. Dari 10% ke 80% dalam kurang dari 20 menit. Cukup 5 menit untuk menambah jarak tempuh 120 km di XPENG Supercharger.',
        stat: '20 menit', statLabel: '10% → 80%',
      },
      {
        tag: 'Interior', icon: 'sunroof',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778997577/panaromic_sunroof_fzivay.jpg',
        name: 'Panoramic Sunroof 2.12 m²',
        description: 'Atap kaca terluas di kelasnya — mencakup 63.4% permukaan atap. Teknologi double-silver low-E memblokir 99.9% sinar UV tanpa mengorbankan cahaya alami. Satu sentuhan untuk membuka atau menutup.',
        stat: '2.12 m²', statLabel: '63.4% area atap',
      },
      {
        tag: 'Audio', icon: 'audio',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778997576/opera_speaker_kirzl5.png',
        name: 'XOPERA Premium Audio',
        description: 'Sistem surround 7.1.4 dengan 18 speaker dan output 960 Watt — dirancang khusus untuk akustik kabin G6. Setiap frekuensi dioptimalkan untuk menghadirkan kualitas konser dalam perjalanan harian Anda.',
        stat: '960W', statLabel: '18 speaker · 7.1.4 surround',
      },
      {
        tag: 'Platform', icon: 'safety',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778998857/air_suspension_qiuszy.jpg',
        name: 'Latest Generation EV Platform SEPA 2.0',
        description: 'G6 dibangun di atas platform EV terbaru XPENG yang ringan dan kuat, SEPA 2.0. Bobot yang lebih rendah mendukung jangkauan lebih jauh, sementara kekakuan puntir mencapai 41.600 Nm/deg. Lebih dari 300 komponen diintegrasikan dalam satu struktur untuk ketahanan benturan lebih kuat, manajemen bobot lebih baik, dan perlindungan yang ditingkatkan.',
        stat: '41.600', statLabel: 'Nm/deg kekakuan puntir',
      },
    ],
    gallery: [
      'https://res.cloudinary.com/cavemine/image/upload/v1778995589/g6_1_cwpwua.png',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995615/g6_2_gxy8rt.jpg',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995603/g6_3_uu7v3u.png',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995593/g6_4_lb7hah.jpg',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995762/g6_5_n7frfx.jpg',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995755/g6_6_zwmcot.png',
    ],
    colors: [
      { name: 'Arctic White',   hex: '#f2f2f2', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778940501/g6-white_efq8qu.png'  },
      { name: 'Graphite Gray',  hex: '#4f5154', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778940491/g6-gray_vyc0wr.png'   },
      { name: 'Midnight Black', hex: '#1a1a1a', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778940489/g6-black_xfaaa7.png'  },
      { name: 'Silver Frost',   hex: '#b8bcc0', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778940495/g6-silver_exrgv9.png' },
      { name: 'Stellar Purple', hex: '#5c2d8e', image: 'https://res.cloudinary.com/cavemine/image/upload/v1779107644/purple_zqmvo3.png'    },
    ],
    variants: [
      {
        id: 'awd', label: 'AWD',
        badge: 'AWD Performance',
        priceFrom: 'Rp 769.000.000',
        // Only the 3 differentiators the dealer gave us — shown as the hero's top
        // spec tiles. Tenaga/Torsi/Baterai/DC Charging aren't confirmed for AWD
        // yet, so this variant doesn't carry a full spec array (would misstate
        // unconfirmed numbers) — SpecGrid/CompareTable further down the page
        // still show the Standard G6 Pro's full spec set.
        specs: [
          { label: 'Jarak Tempuh', value: '510',  unit: 'km',  category: 'battery' },
          { label: '0–100 km/h',   value: '4,13', unit: 'det', category: 'performance' },
          { label: 'Chip',         value: 'Canggih', unit: '', category: 'performance' },
        ],
        // No official AWD photography yet — reusing the closest existing shot
        // (Midnight Black) as a stand-in. Swap this image URL once real photos
        // of the Dark Night Black on Dark Grey colorway are available.
        colors: [
          { name: 'Dark Night Black on Dark Grey', hex: '#1a1a1a', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778940489/g6-black_xfaaa7.png' },
        ],
      },
    ],
  },
  {
    slug:        'xpeng-x9-pro-facelift',
    name:        'All New XPENG X9 Pro',
    tagline:     'MPV Listrik Premium. Redefinisi Kemewahan.',
    description: 'MPV listrik 6-seater untuk keluarga modern yang menuntut yang terbaik.',
    badge:       'Baru',
    priceFrom:   'Rp 1.219.000.000',
    heroImage:
      'https://res.cloudinary.com/cavemine/image/upload/v1778991771/x9_pro_lxc9xe.png',
    heroImageMobile:
      'https://res.cloudinary.com/cavemine/image/upload/v1778991301/x9_pro_small_w5gavn.png',
    cardImage:   'https://res.cloudinary.com/cavemine/image/upload/v1778940853/x9_pro_zkbfhd.png',
    detailImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778941655/x9pro-white_ax57yx.png',
    brochureUrl:  'https://res.cloudinary.com/cavemine/image/upload/v1778990060/X9_nms0de.pdf',
    specs: [
      { label: 'WLTP Range',  value: '615',   unit: 'km',    category: 'battery' },
      { label: '0–100 km/h',  value: '7,7',   unit: 'det',   category: 'performance' },
      { label: 'Tenaga',      value: '315',   unit: 'hp',    category: 'performance' },
      { label: 'Torsi',       value: '450',   unit: 'Nm',    category: 'performance' },
      { label: 'Baterai',     value: '110,5', unit: 'kWh',   category: 'battery' },
      { label: 'Kapasitas',   value: '7',     unit: 'kursi', category: 'dimensions' },
    ],
    features: [
      {
        tag: 'Otonomi', icon: 'autopilot',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778999152/autonomus_driving_i3ryiq.jpg',
        name: 'XNGP Autonomous Driving',
        description: 'Teknologi navigasi cerdas kini ditenagai chip generasi terbaru yang mempercepat pemrosesan 3 radar dan 12 kamera — menghadirkan perpindahan jalur otomatis, parkir mandiri, dan cruise adaptif yang lebih responsif bahkan di jalan tol Indonesia.',
        stat: 'NVIDIA', statLabel: 'chip generasi terbaru',
      },
      {
        tag: 'Pengisian', icon: 'charging',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778998791/fast_charging_nc5hbs.jpg',
        name: '800V Ultra-Fast Charging',
        description: 'Arsitektur silicon carbide 800V memangkas waktu pengisian drastis. Isi daya 10% ke 80% dalam kurang dari 20 menit. Teknologi X-HP Thermal Management menjaga baterai di zona efisiensi optimal.',
        stat: '20 menit', statLabel: '10% → 80%',
      },
      {
        tag: 'Kenyamanan', icon: 'seats',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778998789/premium_seat_kpxdux.jpg',
        name: 'Zero-Gravity Massage Seats',
        description: 'Kursi reclining dengan 6 mode pijat kini menjangkau seluruh area duduk — dari sandaran hingga bantalan kursi — dirancang bersama pakar ergonomi dan tersedia hingga baris ketiga. Sistem A/C wrap-around pertama di dunia untuk MPV memastikan setiap penumpang mendapat kesejukan optimal.',
        stat: '6 mode', statLabel: 'pijat menyeluruh · sandaran & bantalan',
      },
      {
        tag: 'Hiburan', icon: 'display',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778998779/21-inch_ujttw0.jpg',
        name: '21.4" Rear Entertainment',
        description: 'Layar hiburan belakang 21.4 inci dengan sudut kemiringan elektrik 0–75°. Transformasikan kabin menjadi bioskop pribadi. Dipadukan dengan sistem XOPERA 27 speaker dan output 2.180 Watt Dolby Atmos.',
        stat: '2.180W', statLabel: '27 speaker · Dolby Atmos',
      },
      {
        tag: 'Keamanan', icon: 'safety',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778998781/alumunium_body_s7cqvv.jpg',
        name: 'Die-Cast Aluminium Safety Cage',
        description: 'Pertama di dunia: MPV dengan die-cast aluminium depan dan belakang terintegrasi menggunakan mesin 12.000 ton. Kekakuan puntir 46.000 N·m/deg dan kandungan baja ultra-high-strength 2.000 MPa.',
        stat: '46.000', statLabel: 'N·m/deg kekakuan puntir',
      },
      {
        tag: 'Eksterior', icon: 'vents',
        image: 'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/e85f09e3a2344a30a72302fd96c9968e.jpg',
        name: 'Front Grille Active Air Vents',
        description: 'Desain grille depan baru dengan air vents aktif yang mengoptimalkan aliran udara untuk pendinginan baterai dan efisiensi aerodinamika — tampilan yang lebih tegas dan modern untuk All New X9.',
        stat: 'Baru', statLabel: 'desain grille & air vents',
      },
      {
        tag: 'Interior', icon: 'seats',
        image: 'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/b15a5ac51f844ab380d161383046c65d.jpg',
        name: 'Interior Baru Rose Brown',
        description: 'Pilihan warna interior terbaru — Rose Brown — menghadirkan nuansa kabin yang lebih hangat dan elegan, dipadukan dengan jahitan detail premium di seluruh permukaan kabin.',
        stat: 'Rose Brown', statLabel: 'pilihan warna interior baru',
      },
      {
        tag: 'Kenyamanan', icon: 'seats',
        image: 'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/ca86f8fa64024d2eaed12301bbf3b320.jpg',
        name: 'Heated & Ventilated Seats — Semua Baris',
        description: 'Kini kursi berpemanas dan berpendingin tersedia di ketiga baris — baris pertama, kedua, dan ketiga — memastikan kenyamanan optimal bagi seluruh penumpang di segala kondisi cuaca Indonesia.',
        stat: '3 baris', statLabel: 'heated & ventilated seats',
      },
      {
        tag: 'Eksterior', icon: 'door',
        image: 'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/633f7f17d12348a389149bee35449088.jpg',
        name: 'Vacuum Soft-Closing Front Doors',
        description: 'Pintu depan kini dilengkapi teknologi vacuum soft-closing yang menutup secara otomatis dengan halus dan senyap — sentuhan kemewahan khas kendaraan premium kelas atas.',
        stat: 'Auto', statLabel: 'vacuum soft-closing',
      },
    ],
    gallery: [
      'https://res.cloudinary.com/cavemine/image/upload/v1778995757/x9_1_lg3njl.png',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995759/x9_2_o1pibk.jpg',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995758/x9_3_ath4ui.jpg',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995761/x9_4_xhiowq.jpg',
      '/Gallery/x9-pro-exterior-front-staging.jpg',
      '/Gallery/x9-pro-exterior-front-turf.jpg',
      '/Gallery/x9-pro-exterior-gray-side.jpg',
      '/Gallery/x9-pro-exterior-front-path.jpg',
      '/Gallery/x9-pro-exterior-rear-street.jpg',
      '/Gallery/x9-pro-exterior-driveway.jpg',
      '/Gallery/x9-pro-rear-seats-1.jpg',
      '/Gallery/x9-pro-rear-seats-2.jpg',
      '/Gallery/x9-pro-front-captain-seat.jpg',
      '/Gallery/x9-pro-cargo-trunk.jpg',
      '/Gallery/x9-pro-interior-wide.jpg',
    ],
    colors: [
      { name: 'Nebula White',    hex: '#f2f2f2', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778941655/x9pro-white_ax57yx.png'  },
      { name: 'Dark Night Black',hex: '#1a1a1a', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778941594/x9pro-black_ag4kna.png'  },
      { name: 'Crescent Silver', hex: '#b8bcc0', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778941642/x9pro-silver_bi7bsd.png' },
    ],
  },
  {
    slug:        'xpeng-x9-pro-plus-facelift',
    name:        'All New XPENG X9 Pro+',
    tagline:     'Puncak dari Segalanya.',
    description: 'Edisi Pro dari X9 dengan fitur dan finishing premium eksklusif.',
    badge:       'Premium',
    priceFrom:   'Rp 1.259.000.000',
    heroImage:
      'https://res.cloudinary.com/cavemine/image/upload/v1778991945/x9_pro_plus_wt8r3s.png',
    heroImageMobile:
      'https://res.cloudinary.com/cavemine/image/upload/v1778991297/x9_pro_plus_small_ftxwwz.png',
    cardImage:
      'https://res.cloudinary.com/cavemine/image/upload/v1778940846/x9_pro_plus_jwysmh.png',
    detailImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778941655/x9pro-white_ax57yx.png',
    brochureUrl:  'https://res.cloudinary.com/cavemine/image/upload/v1778990060/X9_nms0de.pdf',
    specs: [
      { label: 'WLTP Range',  value: '615',   unit: 'km',    category: 'battery' },
      { label: '0–100 km/h',  value: '7,7',   unit: 'det',   category: 'performance' },
      { label: 'Tenaga',      value: '315',   unit: 'hp',    category: 'performance' },
      { label: 'Torsi',       value: '640',   unit: 'Nm',    category: 'performance' },
      { label: 'Baterai',     value: '110,5', unit: 'kWh',   category: 'battery' },
      { label: 'Kapasitas',   value: '7',     unit: 'kursi', category: 'dimensions' },
    ],
    features: [
      {
        tag: 'Otonomi', icon: 'autopilot',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778999152/autonomus_driving_i3ryiq.jpg',
        name: 'XNGP Autonomous Driving',
        description: 'Teknologi navigasi cerdas kini ditenagai chip generasi terbaru yang mempercepat pemrosesan 3 radar dan 12 kamera — menghadirkan perpindahan jalur otomatis, parkir mandiri, dan cruise adaptif yang lebih responsif bahkan di jalan tol Indonesia.',
        stat: 'NVIDIA', statLabel: 'chip generasi terbaru',
      },
      {
        tag: 'Pengisian', icon: 'charging',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778998791/fast_charging_nc5hbs.jpg',
        name: '800V Ultra-Fast Charging',
        description: 'Arsitektur silicon carbide 800V memangkas waktu pengisian drastis. Isi daya 10% ke 80% dalam kurang dari 20 menit. Teknologi X-HP Thermal Management menjaga baterai di zona efisiensi optimal.',
        stat: '20 menit', statLabel: '10% → 80%',
      },
      {
        tag: 'Kenyamanan', icon: 'seats',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778998789/premium_seat_kpxdux.jpg',
        name: 'Zero-Gravity Massage Seats',
        description: 'Kursi reclining dengan 6 mode pijat kini menjangkau seluruh area duduk — dari sandaran hingga bantalan kursi — tersedia hingga baris ketiga, ditambah finishing eksklusif dan bahan premium edisi Pro+. Setiap penumpang menikmati pengalaman first-class dalam setiap perjalanan.',
        stat: '6 mode', statLabel: 'pijat menyeluruh · finishing eksklusif',
      },
      {
        tag: 'Hiburan', icon: 'display',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778998779/21-inch_ujttw0.jpg',
        name: '21.4" Rear Entertainment',
        description: 'Layar hiburan belakang 21.4 inci dengan sudut kemiringan elektrik 0–75°. Transformasikan kabin menjadi bioskop pribadi. Dipadukan dengan sistem XOPERA 27 speaker dan output 2.180 Watt Dolby Atmos.',
        stat: '2.180W', statLabel: '27 speaker · Dolby Atmos',
      },
      {
        tag: 'Eksklusif', icon: 'safety',
        image: 'https://res.cloudinary.com/cavemine/image/upload/v1778998781/alumunium_body_s7cqvv.jpg',
        name: 'Finishing & Material Premium',
        description: 'Edisi Pro+ menghadirkan material finishing eksklusif di seluruh kabin — kulit Nappa grade premium, wood trim asli, dan detail aluminium brushed yang membedakannya dari X9 Pro standar.',
        stat: 'Pro+', statLabel: 'exclusive edition',
      },
      {
        tag: 'Eksterior', icon: 'vents',
        image: 'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/e85f09e3a2344a30a72302fd96c9968e.jpg',
        name: 'Front Grille Active Air Vents',
        description: 'Desain grille depan baru dengan air vents aktif yang mengoptimalkan aliran udara untuk pendinginan baterai dan efisiensi aerodinamika — tampilan yang lebih tegas dan modern untuk All New X9.',
        stat: 'Baru', statLabel: 'desain grille & air vents',
      },
      {
        tag: 'Interior', icon: 'seats',
        image: 'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/b15a5ac51f844ab380d161383046c65d.jpg',
        name: 'Interior Baru Rose Brown',
        description: 'Pilihan warna interior terbaru — Rose Brown — menghadirkan nuansa kabin yang lebih hangat dan elegan, dipadukan dengan jahitan detail premium di seluruh permukaan kabin.',
        stat: 'Rose Brown', statLabel: 'pilihan warna interior baru',
      },
      {
        tag: 'Kenyamanan', icon: 'seats',
        image: 'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/ca86f8fa64024d2eaed12301bbf3b320.jpg',
        name: 'Heated & Ventilated Seats — Semua Baris',
        description: 'Kini kursi berpemanas dan berpendingin tersedia di ketiga baris — baris pertama, kedua, dan ketiga — memastikan kenyamanan optimal bagi seluruh penumpang di segala kondisi cuaca Indonesia.',
        stat: '3 baris', statLabel: 'heated & ventilated seats',
      },
      {
        tag: 'Eksterior', icon: 'door',
        image: 'https://s-cdn.xpeng.com/commoncms/prod/2026-03-19/633f7f17d12348a389149bee35449088.jpg',
        name: 'Vacuum Soft-Closing Front Doors',
        description: 'Pintu depan kini dilengkapi teknologi vacuum soft-closing yang menutup secara otomatis dengan halus dan senyap — sentuhan kemewahan khas kendaraan premium kelas atas.',
        stat: 'Auto', statLabel: 'vacuum soft-closing',
      },
    ],
    gallery: [
      'https://res.cloudinary.com/cavemine/image/upload/v1778995757/x9_1_lg3njl.png',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995759/x9_2_o1pibk.jpg',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995758/x9_3_ath4ui.jpg',
      'https://res.cloudinary.com/cavemine/image/upload/v1778995761/x9_4_xhiowq.jpg',
      '/Gallery/x9-pro-exterior-front-staging.jpg',
      '/Gallery/x9-pro-exterior-front-turf.jpg',
      '/Gallery/x9-pro-exterior-gray-side.jpg',
      '/Gallery/x9-pro-exterior-front-path.jpg',
      '/Gallery/x9-pro-exterior-rear-street.jpg',
      '/Gallery/x9-pro-exterior-driveway.jpg',
      '/Gallery/x9-pro-rear-seats-1.jpg',
      '/Gallery/x9-pro-rear-seats-2.jpg',
      '/Gallery/x9-pro-front-captain-seat.jpg',
      '/Gallery/x9-pro-cargo-trunk.jpg',
      '/Gallery/x9-pro-interior-wide.jpg',
    ],
    colors: [
      { name: 'Nebula White',    hex: '#f2f2f2', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778941655/x9pro-white_ax57yx.png'  },
      { name: 'Dark Night Black',hex: '#1a1a1a', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778941594/x9pro-black_ag4kna.png'  },
      { name: 'Crescent Silver', hex: '#b8bcc0', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778941642/x9pro-silver_bi7bsd.png' },
      { name: 'Matte Gray',      hex: '#6b6f72', image: 'https://res.cloudinary.com/cavemine/image/upload/v1778941595/x9pro-gray_zgecv7.png'   },
    ],
  },
]

// Derived from models — keeps home page client bundle lean.
export const carouselModels: CarouselModel[] = models.map(
  ({ slug, name, tagline, priceFrom, badge, heroImage, heroImageMobile }) => ({
    slug, name, tagline, priceFrom, badge, heroImage, heroImageMobile,
  })
)
