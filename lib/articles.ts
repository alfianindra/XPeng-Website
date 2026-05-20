export type Article = {
  slug:        string
  title:       string
  excerpt:     string      // 1-2 sentences, shown on list page
  date:        string      // YYYY-MM-DD ISO date
  readingTime: number      // estimated minutes
  coverImage?: string      // optional Cloudinary URL (16:9 recommended)
  body:        string      // paragraphs separated by \n\n
  tags?:       string[]
}

export const articles: Article[] = [
  {
    slug:        'kenapa-xpeng-g6-pro-cocok-untuk-jakarta',
    title:       'Kenapa XPENG G6 Pro Cocok untuk Kehidupan di Jakarta?',
    excerpt:     'Macet, parkir sempit, biaya BBM yang terus naik — G6 Pro dirancang untuk menjawab semua tantangan berkendara di ibu kota.',
    date:        '2026-05-15',
    readingTime: 4,
    coverImage:  'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778991671/g6_pro_iicqng.png',
    tags:        ['G6 Pro', 'Jakarta', 'Mobil Listrik'],
    body: `Jakarta adalah salah satu kota dengan kemacetan terparah di dunia. Rata-rata pengendara menghabiskan lebih dari 60 jam per tahun terjebak di kemacetan. Dalam kondisi ini, mobil listrik bukan sekadar pilihan ramah lingkungan — ia adalah pilihan finansial yang cerdas.

XPENG G6 Pro hadir dengan baterai 87,5 kWh yang memberikan jangkauan hingga 570 km (CLTC). Dalam kondisi stop-and-go khas Jakarta, konsumsi energi baterai jauh lebih efisien dibandingkan mesin bensin yang terus membakar BBM bahkan saat diam di lampu merah.

Teknologi regenerative braking pada G6 Pro secara otomatis mengisi ulang baterai setiap kali Anda menginjak rem. Di jalanan Jakarta yang penuh dengan pengereman mendadak, fitur ini justru menguntungkan — semakin sering berhenti, semakin banyak energi yang dikembalikan ke baterai.

Dari sisi biaya operasional, mengisi daya G6 Pro dari 0 ke 100% di rumah menggunakan tarif listrik rumah tangga PLN hanya membutuhkan sekitar Rp 130.000–150.000. Bandingkan dengan mengisi penuh tangki bensin mobil SUV konvensional yang bisa mencapai Rp 700.000–900.000. Penghematan hingga 80% setiap pengisian.

Untuk Anda yang tinggal di Jakarta Utara, Sunter, atau sekitarnya — dealer resmi XPENG kami berlokasi tepat di Jl. Danau Sunter Barat. Hubungi kami untuk jadwalkan test drive G6 Pro dan rasakan langsung perbedaannya.`,
  },
  {
    slug:        'xpeng-x9-pro-mpv-listrik-terbaik-keluarga-indonesia',
    title:       'XPENG X9 Pro: MPV Listrik Terbaik untuk Keluarga Indonesia?',
    excerpt:     'Tujuh kursi, kabin mewah, dan teknologi XNGP — X9 Pro menawarkan pengalaman berkendara keluarga yang belum pernah ada sebelumnya.',
    date:        '2026-05-10',
    readingTime: 5,
    coverImage:  'https://res.cloudinary.com/xpeng-sunter/image/upload/f_auto,q_auto/v1778991671/g6_pro_iicqng.png',
    tags:        ['X9 Pro', 'MPV', 'Keluarga'],
    body: `Pasar MPV premium di Indonesia selama ini didominasi oleh nama-nama besar yang sudah dikenal puluhan tahun. XPENG X9 Pro hadir dengan proposisi yang berbeda: kemewahan setara kelas bisnis, kapasitas tujuh penumpang, dan nol emisi.

Kabin X9 Pro dirancang dengan filosofi "living room on wheels". Baris kedua dilengkapi dengan kursi captain yang dapat disesuaikan secara elektrik, meja lipat terintegrasi, dan layar hiburan pribadi. Penumpang baris kedua mendapat pengalaman yang lebih nyaman dibandingkan kursi bisnis di sebagian besar maskapai domestik.

Sistem XNGP (XPENG Navigation Guided Pilot) pada X9 Pro membawa teknologi mengemudi otonom ke level baru. Di jalan tol, sistem ini mampu menangani perpindahan jalur, overtaking, dan merespons kendaraan di depan secara otomatis. Di dalam kota, fitur parking assist memudahkan masuk ke tempat parkir sempit yang menjadi tantangan bagi kendaraan besar.

Dengan panjang 5.293 mm dan wheelbase 3.160 mm, X9 Pro mungkin terlihat besar di atas kertas. Namun teknologi kemudi belakang aktif (rear-wheel steering) membuat radius putarnya setara dengan sedan berukuran medium — membuatnya jauh lebih mudah dikelola di gang sempit atau area parkir bertingkat.

Baterai 101,5 kWh memberikan jangkauan hingga 610 km (CLTC), cukup untuk perjalanan Jakarta–Bandung pulang-pergi tanpa perlu mengisi daya. Dukungan pengisian cepat DC hingga 200 kW berarti mengisi dari 20% ke 80% hanya membutuhkan sekitar 25 menit.`,
  },
  {
    slug:        'panduan-test-drive-xpeng-sunter',
    title:       'Panduan Lengkap Test Drive di XPENG Sunter Jakarta',
    excerpt:     'Apa yang perlu Anda siapkan, apa yang bisa Anda coba, dan bagaimana cara mendapatkan yang terbaik dari sesi test drive Anda.',
    date:        '2026-05-05',
    readingTime: 3,
    tags:        ['Test Drive', 'Panduan'],
    body: `Test drive adalah langkah penting sebelum memutuskan pembelian kendaraan seharga ratusan juta rupiah. Di XPENG Sunter Jakarta, kami menyediakan pengalaman test drive yang terstruktur dan informatif — bukan sekadar putaran keliling blok.

Sebelum datang, jadwalkan test drive Anda melalui website atau WhatsApp. Ini memastikan unit yang Anda inginkan tersedia dan tim sales kami siap mendampingi tanpa Anda harus menunggu.

Saat test drive, ada beberapa hal yang sebaiknya Anda coba secara khusus. Pertama, uji fitur regenerative braking: angkat kaki dari pedal gas secara bertahap dan rasakan bagaimana sistem mengurangi kecepatan sambil mengisi baterai. Kedua, aktifkan mode satu pedal (One Pedal Mode) dan coba kendalikan kendaraan hanya dengan pedal gas — ini akan menjadi kebiasaan baru yang menyenangkan. Ketiga, coba fitur parking assist untuk merasakan betapa mudahnya parkir paralel tanpa banyak usaha.

Jangan ragu untuk meminta tim kami mendemonstrasikan layar kontrol 14,96 inci, sistem suara premium, dan fitur XNGP jika unit demonstrasi memungkinkan.

Untuk menjadwalkan test drive Anda, isi formulir di halaman ini atau hubungi kami langsung via WhatsApp. Tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi.`,
  },
]
