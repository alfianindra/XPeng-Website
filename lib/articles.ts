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
    slug:        'xpeng-x9-meluncur-versi-erev-jarak-tempuh-740-km',
    title:       'XPENG X9 Meluncur Versi EREV, Jarak Tempuh Bisa Sampai 740 KM',
    excerpt:     'Varian EREV X9 menggabungkan motor listrik dengan range extender bensin, memberikan jarak tempuh hingga 740 km — menjawab kekhawatiran tentang daya jelajah MPV listrik premium.',
    date:        '2025-08-12',
    readingTime: 4,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778991671/g6_pro_iicqng.png',
    tags:        ['X9 Pro', 'EREV', 'Teknologi'],
    body: `XPENG tengah mempersiapkan varian terbaru X9 yang kini hadir dengan opsi EREV (Extended Range Electric Vehicle). Teknologi ini menambahkan mesin bensin sebagai generator pengisi baterai, sehingga kendaraan tetap mengandalkan motor listrik sebagai penggerak utama — namun dengan ketenangan jelajah yang jauh lebih panjang.

Versi EREV mengusung sistem Kunpeng Super Range Extender dengan mesin bensin 1.5-liter turbo bertenaga 110 kW yang berfungsi murni sebagai generator. Jarak tempuh murni listrik diperkirakan mencapai 450 km. Sebagai perbandingan, X9 BEV yang sudah beredar menawarkan jarak tempuh hingga 740 km (CLTC) pada varian Ultra-Long Range.

Secara dimensi, X9 EREV memiliki panjang 5.316 mm — sedikit lebih panjang dari versi BEV yang berukuran 5.293 mm — dengan jarak sumbu roda tetap 3.160 mm. Bobot kosongnya 2.750 kg. Baterai lithium iron phosphate buatan CALB-Tech digunakan untuk menyimpan energi dari generator.

X9 yang sudah hadir di Indonesia tersedia dalam tiga varian: Standard (Rp990 juta), Long Range Pro (Rp1,059 miliar), dan Long Range Pro Plus (Rp1,099 miliar), semua harga on the road Jakarta. Produksi dilakukan secara lokal melalui sistem CKD oleh Erajaya selaku mitra distribusi resmi XPENG di Indonesia.

Kehadiran varian EREV ke depannya akan memperluas pilihan bagi konsumen yang ingin menikmati kenyamanan MPV listrik premium tanpa kekhawatiran soal daya jelajah. Kunjungi showroom XPENG Sunter Jakarta untuk melihat langsung X9 yang sudah tersedia dan jadwalkan test drive Anda.`,
  },
  {
    slug:        'xpeng-x9-facelift-debut-global-hong-kong',
    title:       'XPENG X9 2025 Debut Global di Hong Kong: 496 Pembaruan Teknis',
    excerpt:     'Di ajang Xpeng Global Brand Night di Hong Kong, X9 MY 2025 resmi diperkenalkan dengan 496 pembaruan teknis, AI ADAS tanpa biaya langganan, dan pengisian ultra-cepat yang menambah 405 km hanya dalam 10 menit.',
    date:        '2025-04-17',
    readingTime: 5,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778991671/g6_pro_iicqng.png',
    tags:        ['X9 Pro', 'Teknologi', 'ADAS'],
    body: `Dalam perhelatan Xpeng Global Brand Night di Kai Tak Cruise Terminal, Hong Kong, XPENG memperkenalkan versi terbaru MPV premium mereka: X9 MY 2025. Kendaraan listrik tujuh penumpang ini membawa 496 pembaruan teknis dibanding generasi sebelumnya, dengan 35 persen komponen baru.

Salah satu perubahan paling signifikan adalah penghapusan LiDAR dan penggantiannya dengan sistem penglihatan murni berbasis AI. X9 2025 kini dibekali teknologi Turing AI ADAS secara standar — tanpa biaya langganan tambahan — yang memungkinkan kendaraan berpindah dari satu tempat parkir ke tempat lain secara otomatis melalui fitur Navigation Guided Pilot (NGP).

Sistem pengisian daya mengalami lompatan besar. Dengan arsitektur 800V berbasis silikon karbida dan baterai 5C Superfast Charging AI, X9 2025 bisa menambah jarak tempuh 405 km hanya dalam 10 menit pengisian. Pengisian dari 10% ke 80% hanya membutuhkan 12 menit — setara dengan waktu minum kopi di rest area.

Interior tetap menjadi keunggulan utama. Tersedia layar belakang 21,4 inci, kulkas 10,8 liter dengan fungsi penghangat, sistem audio 7.1.6 XOpera 2.180W dengan 23 speaker, dan kursi zero-gravity dengan suspensi udara adaptif yang dapat disesuaikan hingga 90 mm. Radius putar hanya 5,4 meter berkat sistem kemudi roda belakang aktif — lebih lincah dari banyak SUV kompak.

Tersedia empat varian: Long Range (650 km CLTC), Extended Long Range (740 km), AWD Performance (702 km), dan Starship Edition (702 km). X9 yang tersedia di showroom XPENG Sunter Jakarta sudah mengusung teknologi generasi terkini ini. Hubungi kami untuk informasi ketersediaan dan jadwalkan test drive Anda hari ini.`,
  },
  {
    slug:        'mengenal-xpeng-x9-mpv-listrik-premium-indonesia',
    title:       'Mengenal XPENG X9: MPV Listrik Premium dengan Kabin Sekelas Business Class',
    excerpt:     'Dengan kapasitas bagasi 2.554 liter, layar belakang 21,4 inci, dan teknologi XNGP ADAS lengkap, X9 meredefinisi standar MPV premium di Indonesia — dan kini bisa Anda uji langsung di Sunter.',
    date:        '2025-03-05',
    readingTime: 5,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778991671/g6_pro_iicqng.png',
    tags:        ['X9 Pro', 'MPV', 'Panduan'],
    body: `XPENG X9 hadir di Indonesia sebagai MPV listrik premium yang diproduksi lokal melalui sistem CKD oleh Erajaya. Dengan panjang 5.293 mm dan jarak sumbu roda 3.160 mm, X9 menawarkan ruang kabin yang sangat lapang — kapasitas bagasinya mencapai 2.554 liter saat semua jok baris belakang dilipat, cukup untuk 29 koper berukuran 20 inci.

Desain eksteriornya terinspirasi dari pesawat luar angkasa dengan koefisien hambatan angin hanya 0,227 Cd. Lampu depan LED dengan desain X-Robot yang khas, handle pintu elektrik tersembunyi, dan tiga pilihan warna eksklusif — Silver Frost, Midnight Black, dan Arctic White — memperkuat kesan futuristis.

Interior X9 dibalut kulit Nappa premium dengan sentuhan dekorasi kayu asli. Jok baris kedua menggunakan konfigurasi captain seat dengan fitur Zero Gravity Reclining dan sistem pijatan enam titik. Layar belakang 21,4 inci dipadu sistem audio XOpera 23-speaker menghadirkan pengalaman hiburan setara bioskop pribadi. Di depan, layar sentuh 17,3 inci dan panel instrumen 10,25 inci ditenagai chipset Qualcomm Snapdragon SA8295P.

Sistem keselamatan XNGP Full-scenario ADAS mencakup lebih dari sepuluh fitur aktif: AEB, FCW, BSD, LDW, LKA, RCTA, DMS, hingga AI Valet Driver dan Highway/City NGP. Struktur bodinya menggunakan aluminium die-casting terintegrasi dengan kekakuan torsional 46.000 Nm/deg — satu-satunya MPV di dunia yang menggunakan konstruksi ini di bagian depan dan belakang sekaligus.

Tersedia dalam dua konfigurasi penggerak: motor tunggal 235 kW (315 hp) dengan baterai 84,5 kWh (jarak tempuh 610 km) atau 101,5 kWh (702 km), serta versi AWD dual-motor dengan tenaga gabungan 496 hp dan akselerasi 0–100 km/jam dalam 5,7 detik. Pengisian cepat DC hingga 330 kW memungkinkan penambahan jarak 330 km hanya dalam 10 menit.

X9 tersedia di showroom XPENG Sunter Jakarta dalam tiga varian harga mulai Rp990 juta. Kunjungi kami atau hubungi via WhatsApp untuk jadwalkan test drive dan rasakan sendiri pengalaman berkendara kelas dunia ini.`,
  },
  {
    slug:        'kenapa-xpeng-g6-pro-cocok-untuk-jakarta',
    title:       'Kenapa XPENG G6 Pro Cocok untuk Kehidupan di Jakarta?',
    excerpt:     'Macet, parkir sempit, biaya BBM yang terus naik — G6 Pro dirancang untuk menjawab semua tantangan berkendara di ibu kota.',
    date:        '2026-05-15',
    readingTime: 4,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778991671/g6_pro_iicqng.png',
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
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778991671/g6_pro_iicqng.png',
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
