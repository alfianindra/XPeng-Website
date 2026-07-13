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
    slug:        'xpeng-resmikan-dealer-3s-sunter',
    title:       'Perluas Jaringan Layanan, XPENG Resmikan Dealer 3S di Sunter',
    excerpt:     'XPENG Indonesia meresmikan XPENG Experience and Service Center di Sunter, Jakarta Utara — fasilitas terpadu 3S seluas 1.620 meter persegi hasil kemitraan dengan PT Kharisma Santika Semesta.',
    date:        '2026-07-10',
    readingTime: 3,
    coverImage:  '/xpeng_sunter_dealer.jpeg',
    tags:        ['Dealer', 'Sunter', 'Layanan'],
    body: `XPENG Indonesia kembali memperluas jaringan layanan resminya dengan meresmikan XPENG Experience and Service Center di kawasan Sunter, Jakarta Utara — dealer yang menjadi rumah bagi showroom yang sedang Anda kunjungi ini.

"Peresmian XPENG Experience and Service Center Sunter merupakan bagian dari langkah strategis kami dalam memperkuat kehadiran XPENG di Indonesia. Kami terus membangun fondasi yang kuat melalui pengembangan jaringan yang mampu mendukung kebutuhan pelanggan sekaligus mendukung pertumbuhan angka kepemilikan XPENG secara berkelanjutan," ujar CEO Erajaya Active Lifestyle, Djohan Sutanto, saat peresmian pada 9 Juli 2026.

Fasilitas baru ini berdiri di atas lahan seluas 1.620 meter persegi dan mengusung konsep layanan terpadu 3S — Sales, Service, dan Spare Part — dalam satu lokasi. Konsep ini dirancang agar pelanggan tidak perlu berpindah tempat untuk kebutuhan pembelian unit maupun perawatan kendaraan sepanjang masa kepemilikan.

Peresmian ini turut menjadi penegasan kemitraan dengan PT Kharisma Santika Semesta selaku mitra dealer. "Kami bangga dapat menjadi bagian dari perjalanan XPENG di Indonesia dan kami optimistis kehadiran fasilitas ini akan semakin memperkuat kepercayaan masyarakat terhadap brand ini sebagai merek kendaraan listrik premium di Indonesia," ujar Commissioner PT Kharisma Santika Semesta, Jongkie D. Sugiarto.

Kunjungi langsung XPENG Experience and Service Center di Jl. Danau Sunter Barat, Jakarta Utara — baik untuk konsultasi pembelian unit maupun kebutuhan servis kendaraan Anda.`,
  },
  {
    slug:        'layanan-purna-jual-xpeng-experience-service-center-sunter',
    title:       'XPENG Experience and Service Center Sunter: Layanan Purna Jual yang Lebih Lengkap',
    excerpt:     'Empat service bay, servis berkala hingga diagnosis menyeluruh — begini fasilitas purna jual yang kini tersedia satu lokasi di XPENG Experience and Service Center Sunter.',
    date:        '2026-07-10',
    readingTime: 3,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778995603/g6_3_uu7v3u.png',
    tags:        ['Servis', 'Sunter', 'After Sales'],
    body: `Selain sebagai tempat pembelian unit baru, XPENG Experience and Service Center Sunter turut menghadirkan fasilitas purna jual yang lengkap bagi pelanggan XPENG di Jakarta Utara dan sekitarnya.

Area servis di fasilitas ini mencakup berbagai kebutuhan perawatan dan perbaikan kendaraan listrik — mulai dari servis berkala, general repair, spooring, perawatan sistem AC, pemeriksaan kaki-kaki kendaraan, hingga diagnosis menyeluruh menggunakan peralatan khusus kendaraan listrik.

Untuk mendukung efisiensi proses, area servis dilengkapi empat service bay yang memungkinkan penanganan beberapa kendaraan secara bersamaan tanpa antrean panjang.

Kehadiran layanan purna jual yang lengkap dalam satu lokasi ini sejalan dengan komitmen XPENG untuk tidak hanya menghadirkan kendaraan listrik berteknologi tinggi, tetapi juga memastikan pengalaman kepemilikan yang nyaman sepanjang masa pakai kendaraan.

Bagi Anda pemilik XPENG G6 Pro, X9 Pro, atau X9 Pro+ yang membutuhkan servis berkala atau perbaikan, jadwalkan kunjungan Anda ke XPENG Experience and Service Center Sunter melalui WhatsApp atau kunjungi langsung showroom kami.`,
  },
  {
    slug:        'xpeng-dealer-keenam-indonesia-sunter',
    title:       'XPENG Resmikan Dealer Ke-6 di Indonesia, Sanggup Layani 5 Mobil per Hari',
    excerpt:     'Dealer baru di Sunter ini menjadi titik layanan keenam XPENG di Indonesia, dengan kapasitas area servis hingga lima unit kendaraan per hari.',
    date:        '2026-07-09',
    readingTime: 4,
    coverImage:  '/xpeng_exp.jpeg',
    tags:        ['Dealer', 'Ekspansi', 'Jakarta Utara'],
    body: `XPENG Indonesia resmi menambah satu lagi titik layanan dengan meresmikan XPENG Experience dan Service Center di Jalan Danau Sunter Barat Blok A3 No. 42, Sunter Agung, Tanjung Priok, Jakarta Utara — dealer keenam XPENG di Indonesia.

"Melalui peresmian XPENG Experience dan Service Center di Sunter pada hari ini, XPENG secara resmi menghadirkan dealer kami yang ke-6 di Indonesia, yang dilengkapi dengan fasilitas 3S, yaitu Sales, Service, dan Spareparts," ujar Vice President of Commercial XPENG Indonesia, Steven Sulung, saat peresmian, Kamis (9/7/2026).

Menurut Steven, langkah ini merupakan respons atas pertumbuhan positif pasar kendaraan listrik di Indonesia. Ia menilai, meningkatnya minat masyarakat terhadap mobilitas cerdas dan berkelanjutan perlu diimbangi dengan ketersediaan dealer dan bengkel resmi yang mudah dijangkau pelanggan.

Dari sisi kapasitas, area servis XPENG Sunter dilengkapi empat hingga lima service bay yang mampu melayani sekitar empat hingga lima unit kendaraan setiap harinya — kapasitas yang diharapkan dapat mengimbangi pertumbuhan jumlah pemilik XPENG di wilayah Jakarta Utara dan sekitarnya.

Peresmian ini juga menjadi penegasan kemitraan jangka panjang antara XPENG Indonesia dan PT Kharisma Santika Semesta selaku mitra dealer. "Kami berharap kehadiran XPENG Experience dan Service Center di Sunter ini dapat memberikan nilai tambah bagi pelanggan di sekitar wilayah Jakarta Utara dan sekaligus menjadi fondasi bagi kolaborasi yang erat antara XPENG Indonesia dan PT Kharisma Santika Semesta di masa yang akan datang," tutup Steven.`,
  },
  {
    slug:        'ringkasan-xpeng-x9-facelift-dan-g6-awd',
    title:       '5 Hal yang Perlu Diketahui dari XPENG X9 Facelift dan G6 AWD',
    excerpt:     'Dari desain grille aktif hingga varian AWD baru untuk G6 — ini rangkuman singkat semua yang berubah dari dua peluncuran terbaru XPENG di Indonesia.',
    date:        '2026-06-30',
    readingTime: 3,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778940853/x9_pro_zkbfhd.png',
    tags:        ['X9 Pro', 'G6 Pro', 'Ringkasan'],
    body: `XPENG baru saja mengumumkan dua pembaruan sekaligus untuk lineup-nya di Indonesia: X9 facelift dan G6 AWD Performance. Bagi yang tidak sempat mengikuti detailnya, berikut lima poin penting yang perlu diketahui.

Pertama, desain depan X9 berubah total lewat Active Grille Shutter yang menggantikan grille honeycomb terbuka — selain tampil lebih bersih, komponen ini juga membuka-tutup otomatis untuk efisiensi pendinginan. Kedua, di balik dasbor, chip ADAS NVIDIA Drive Orin-X sudah digantikan chip AI Turing buatan XPENG sendiri, diklaim jauh lebih bertenaga untuk memproses sistem bantuan berkendara.

Ketiga, kabin X9 makin nyaman dengan sistem audio 27 speaker dan kursi baris ketiga yang kini bisa dilipat sebagian sekaligus berpemanas. Keempat — dan mungkin yang paling dinanti pecinta performa — G6 kini punya varian AWD dengan dua motor listrik yang mampu berakselerasi 0–100 km/jam hanya dalam 4,13 detik, jauh lebih cepat dari G6 Pro biasa.

Kelima, soal harga: X9 facelift dibanderol mulai Rp1,14 miliar untuk varian termurah, sementara G6 AWD Performance dipatok Rp769 juta. Ingin tahu detail lengkapnya atau mencoba langsung? Kunjungi showroom XPENG Sunter Jakarta dan jadwalkan test drive Anda.`,
  },
  {
    slug:        'video-xpeng-x9-facelift-makin-mewah-dan-canggih',
    title:       'Video: XPENG X9 Facelift — Makin Mewah dan Canggih',
    excerpt:     'XPENG resmi meluncurkan X9 facelift dengan serangkaian pembaruan di berbagai sektor — bukan sekadar penyegaran tampilan, tapi juga kabin yang lebih nyaman dan fitur keselamatan terbaru.',
    date:        '2026-06-30',
    readingTime: 2,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778995757/x9_1_lg3njl.png',
    tags:        ['X9 Pro', 'Video', 'Facelift'],
    body: `XPENG resmi meluncurkan X9 facelift dengan serangkaian pembaruan di berbagai sektor. Bukan sekadar penyegaran tampilan, MPV listrik premium ini kini tampil lebih modern, menawarkan kabin yang semakin nyaman, serta dibekali teknologi dan fitur keselamatan terbaru.

Perubahan paling terlihat ada pada wajah depan dengan grille aktif baru, sementara di dalam kabin hadir peningkatan pada sistem audio, kenyamanan jok, dan kelengkapan fitur ADAS generasi terbaru.

Video singkatnya sudah beredar di berbagai kanal media otomotif — tapi tentu saja, cara terbaik untuk merasakan pembaruannya adalah dengan mencobanya langsung. Kunjungi showroom XPENG Sunter Jakarta dan jadwalkan test drive X9 facelift Anda hari ini.`,
  },
  {
    slug:        'deretan-pembaruan-xpeng-x9-facelift',
    title:       'Makin Canggih, Ini Deretan Pembaruan di XPENG X9 Facelift',
    excerpt:     'Xpeng Indonesia resmi memperkenalkan X9 facelift dengan membawa sejumlah pembaruan di berbagai sektor — dari desain, kabin, hingga teknologi ADAS. Apa saja ubahannya?',
    date:        '2026-06-30',
    readingTime: 4,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778995759/x9_2_o1pibk.jpg',
    tags:        ['X9 Pro', 'Facelift', 'Fitur'],
    body: `Xpeng Indonesia resmi memperkenalkan X9 facelift dengan membawa sejumlah pembaruan di berbagai sektor. Alih-alih sekadar penyegaran kosmetik, hampir setiap bagian kendaraan ini mendapat sentuhan baru.

Di sektor eksterior, grille depan kini menggunakan sistem Active Grille Shutter yang bisa membuka-tutup otomatis, dipadu desain pelek aero baru. Koefisien hambatan udaranya tercatat 0,236 Cd — angka yang cukup rendah untuk kelas MPV.

Masuk ke kabin, sistem audio XOpera kini mengusung 27 speaker, naik dari 23 speaker pada generasi sebelumnya. Jok baris kedua tetap mengandalkan konsep zero-gravity dengan balutan Nappa leather, sementara baris ketiga kini bisa dilipat sebagian sekaligus dilengkapi fitur pemanas.

Yang paling signifikan ada di sektor teknologi: chip ADAS beralih dari NVIDIA Drive Orin-X ke chip AI Turing rancangan XPENG sendiri, dengan klaim daya komputasi jauh lebih tinggi. Fitur keselamatan turut bertambah lewat Flat Tire Stability Control dan jumlah airbag yang naik dari 6 menjadi 9 unit.

Dengan segudang pembaruan ini, X9 facelift siap dicoba langsung di showroom XPENG Sunter Jakarta. Jadwalkan test drive Anda dan rasakan sendiri semua perubahannya.`,
  },
  {
    slug:        'chip-turing-ai-xpeng-x9-facelift',
    title:       'XPENG X9 Facelift Kini Pakai Chip Turing AI Buatan Sendiri, Ini Bedanya',
    excerpt:     'XPENG meninggalkan chipset NVIDIA Drive Orin-X dan beralih ke chip AI Turing rancangan internal — diklaim jauh lebih bertenaga, dibarengi fitur keselamatan baru Flat Tire Stability Control.',
    date:        '2026-06-29',
    readingTime: 4,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778995758/x9_3_ath4ui.jpg',
    tags:        ['X9 Pro', 'Teknologi', 'ADAS'],
    body: `Salah satu pembaruan paling signifikan pada XPENG X9 facelift bukan ada di bagian yang terlihat mata, melainkan di balik sistem elektroniknya. Chipset ADAS NVIDIA Drive Orin-X yang digunakan model sebelumnya kini digantikan chip AI Turing rancangan XPENG sendiri.

Pergeseran ke chip internal ini turut diikuti penyederhanaan sensor — dari tiga radar mmWave dan 12 sensor ultrasonik pada model lama, menjadi satu radar mmWave dan tiga radar ultrasonik pada model baru, dengan XPENG kini lebih mengandalkan persepsi berbasis kamera. Jumlah kamera sendiri tetap 12 unit.

Kabin pengemudi turut mendapat sentuhan baru lewat setir berbahan ultra-fibre dengan dua tombol fisik tambahan — satu untuk mengaktifkan sistem bantuan berkendara XPILOT Assist, satu lagi untuk memilih mode berkendara secara instan tanpa harus membuka layar infotainment. Ditambah lagi, fitur Road Noise Cancellation memanfaatkan mikrofon dan gelombang suara untuk meredam kebisingan ban dan suara luar kabin, sementara Windshield Head-Up Display memproyeksikan informasi penting langsung ke kaca depan.

Fitur keselamatan baru yang cukup menarik adalah Flat Tire Stability Control — sistem yang otomatis mengatur suspensi, kemudi, akselerasi, hingga pengereman ketika ban mengalami kebocoran mendadak, sekaligus menyalakan lampu hazard sebagai peringatan bagi pengendara lain.

Penasaran seberapa besar bedanya rasanya di jalan? Kunjungi showroom XPENG Sunter Jakarta untuk melihat langsung X9 facelift dan jadwalkan test drive Anda.`,
  },
  {
    slug:        'xpeng-x9-facelift-resmi-meluncur-di-indonesia',
    title:       'XPENG X9 Facelift Resmi Meluncur di Indonesia, Ini Deretan Pembaruannya',
    excerpt:     'Mengusung filosofi desain "DREAM" of Mobility, X9 facelift hadir dengan grille aktif, chip AI Turing buatan sendiri, baterai 110 kWh berjangkauan 615 km, dan sistem audio 27 speaker — mulai Rp1,14 miliar.',
    date:        '2026-06-28',
    readingTime: 6,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778991771/x9_pro_lxc9xe.png',
    tags:        ['X9 Pro', 'Facelift', 'Teknologi'],
    body: `XPENG resmi menghadirkan penyegaran untuk MPV listrik andalannya di Indonesia. Bertepatan dengan satu tahun kehadiran XPENG di Tanah Air, X9 facelift diperkenalkan dalam acara XPENG V1SION Night di Istora Senayan, Jakarta — berdampingan dengan peluncuran varian performa tinggi G6 AWD Performance. "Dengan didukung oleh teknologi AI yang terbaru, desain yang lebih modern, fitur yang lebih maju, dan pengalaman berkendara yang lebih nyaman," ujar CEO Erajaya Active Lifestyle, Djohan Sutanto, saat peluncuran.

Pembaruan paling mencolok ada di wajah depan. X9 facelift kini mengusung filosofi desain "DREAM" of Mobility dengan Active Grille Shutter yang menggantikan pola honeycomb terbuka pada model sebelumnya — membuka dan menutup otomatis mengikuti kebutuhan pendinginan motor dan AC. Koefisien hambatan udara tercatat 0,236 Cd, dipadu desain pelek aero baru dengan center cap yang menjaga logo "X" tetap tegak saat roda berputar.

Di kabin, kenyamanan ditingkatkan lewat jok Cloud Sense 3.0 Grand Sofa berbalut Nappa leather dan sistem pendingin independen Gentle Breeze A/C. Sistem audio XOpera kini memakai 27 speaker — bertambah 4 unit dari 23 speaker pada model sebelumnya — dengan material aluminium aerospace untuk kualitas suara yang lebih tahan lama. Kokpit tampil dengan konfigurasi dual screen dan setir baru berbahan ultra-fibre, dilengkapi dua tombol fisik untuk mengaktifkan XPILOT Assist dan memilih mode berkendara tanpa harus membuka layar. Kursi baris ketiga kini bisa dilipat 40/60 dan sudah dilengkapi fitur pemanas di semua varian.

Perubahan terbesar justru ada di balik layar: chip ADAS NVIDIA Drive Orin-X digantikan chip AI Turing rancangan XPENG sendiri, dengan klaim kemampuan komputasi hingga 750 TOPS — hampir tiga kali lipat dari generasi sebelumnya. Fitur baru Flat Tire Stability Control turut hadir untuk menjaga stabilitas kendaraan saat ban bocor mendadak, melengkapi Road Noise Cancellation, Windshield Head-Up Display, dan kamera transparent chassis 360°. Jumlah airbag bertambah dari 6 menjadi 9 unit.

Dari sisi performa, X9 facelift dibangun di atas platform 800V Silicon Carbide dengan baterai 110 kWh yang mampu menempuh jarak hingga 615 km (WLTP) pada varian Long Range. Teknologi pengisian daya 5C memungkinkan pengisian dari 10 ke 80 persen hanya dalam waktu sekitar 12 menit.

XPENG X9 facelift dipasarkan dalam tiga varian: Standard Range Pro (Rp1.140.000.000), Long Range Pro (Rp1.219.000.000), dan Long Range Pro+ (Rp1.259.000.000), semua harga on the road Jakarta. Kunjungi showroom XPENG Sunter Jakarta untuk melihat langsung unit terbaru dan jadwalkan test drive Anda.`,
  },
  {
    slug:        'xpeng-g6-awd-performance-resmi-meluncur',
    title:       'XPENG G6 AWD Performance Meluncur, Akselerasi 0–100 km/jam Cuma 4,13 Detik',
    excerpt:     'Varian performa tertinggi G6 kini hadir dengan penggerak all-wheel-drive dua motor bertenaga gabungan 358 kW dan torsi 660 Nm, dibanderol Rp769 juta — satu-satunya warna eksklusif Dark Night Black on Dark Grey.',
    date:        '2026-06-28',
    readingTime: 5,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778940489/g6-black_xfaaa7.png',
    tags:        ['G6 Pro', 'AWD', 'Performa'],
    body: `Bersamaan dengan peluncuran X9 facelift di XPENG V1SION Night, Istora Senayan Jakarta, XPENG turut memperluas jajaran SUV coupe listriknya lewat G6 AWD Performance — varian penggerak semua roda pertama untuk G6 di Indonesia, melengkapi G6 Pro yang selama ini hanya mengandalkan penggerak roda belakang (RWD).

Jika G6 Pro mengandalkan satu motor listrik belakang bertenaga 218 kW dan torsi 440 Nm, G6 AWD Performance menambahkan motor kedua di roda depan bertenaga 140 kW. Kombinasi keduanya menghasilkan tenaga gabungan 358 kW dan torsi total 660 Nm. Hasilnya terasa signifikan di atas kertas: akselerasi 0–100 km/jam hanya membutuhkan 4,13 detik, jauh lebih cepat dibanding G6 Pro yang butuh 6,7 detik. Kecepatan maksimum keduanya tetap sama, dibatasi hingga 202 km/jam.

Sama seperti G6 Pro, G6 AWD Performance dibangun di atas arsitektur 800V Silicon Carbide dengan kapasitas baterai 80,8 kWh dan dukungan DC fast charging hingga 451 kW. Fitur Vehicle-to-Load (V2L) turut tersedia untuk menyuplai daya ke perangkat elektronik luar ruangan — praktis untuk kebutuhan di luar rumah maupun keadaan darurat.

Kemewahan kabin tetap menjadi andalan lewat balutan Nappa leather, panoramic sunroof anti-panas dengan pelindung radiasi UV, serta sepasang wireless charger berdaya 50W. Hiburan didukung sistem audio X-Opera 2.0 dengan 18 speaker dalam konfigurasi 7.1.4 channel, dilengkapi asisten suara "Hey XPENG" yang terintegrasi dengan XPILOT Assist, self-parking, dan pemantauan visibilitas 360° panoramic view.

XPENG G6 AWD Performance dibanderol Rp769.000.000 OTR Jakarta, dan untuk saat ini hanya tersedia dalam satu pilihan warna eksklusif — Dark Night Black on Dark Grey. Varian ini sudah bisa dilihat di halaman G6 Pro lewat pilihan trim "AWD". Kunjungi showroom XPENG Sunter Jakarta atau jadwalkan test drive untuk merasakan langsung lonjakan performanya.`,
  },
  {
    slug:        'xpeng-x9-facelift-rilis-malaysia-warna-dan-harga',
    title:       'XPENG X9 Facelift Sudah Rilis di Malaysia, Ini Pilihan Warna dan Harganya',
    excerpt:     'Mendahului Indonesia, X9 facelift 2026 lebih dulu meluncur di Malaysia dengan lima pilihan warna baru dan tiga varian penggerak — dari Standard Range hingga AWD Performance.',
    date:        '2026-06-10',
    readingTime: 5,
    coverImage:  'https://res.cloudinary.com/cavemine/image/upload/v1778995761/x9_4_xhiowq.jpg',
    tags:        ['X9 Pro', 'Facelift', 'Malaysia'],
    body: `Sebelum resmi hadir di Indonesia akhir Juni lalu, XPENG X9 facelift 2026 lebih dulu meluncur di Malaysia pada awal bulan yang sama. Peluncuran regional ini memberi gambaran lebih lengkap soal pilihan warna dan varian yang tersedia untuk generasi terbaru MPV listrik premium ini.

Dari sisi warna, X9 facelift memperluas pilihan dari tiga warna pada model sebelumnya (Nebula White, Crescent Silver, Dark Night Black) menjadi lima pilihan baru: Arctic White, Midnight Black, Matte Gray, Lambent Cyan, dan Polar Violet — dengan Polar Violet khusus tersedia untuk varian tertinggi.

Soal varian penggerak, X9 facelift di Malaysia tersedia dalam tiga pilihan. Standard Range menggunakan baterai lithium iron phosphate 94,8 kWh dengan jarak tempuh 535 km (WLTP) dan motor tunggal 235 kW. Long Range menggendong baterai nickel cobalt manganese 110 kWh dengan jarak tempuh lebih jauh, 615 km (WLTP), masih dengan motor tunggal bertenaga sama. Varian AWD Performance memakai baterai yang sama namun menambahkan motor kedua, menghasilkan tenaga gabungan 370 kW dan torsi 640 Nm — cukup untuk akselerasi 0–100 km/jam dalam 5,9 detik.

Ketiganya dibangun di atas platform 800V Silicon Carbide dengan pengisian daya cepat DC hingga 542 kW pada varian Long Range dan AWD Performance — cukup untuk mengisi dari 10 ke 80 persen hanya dalam sekitar 12 menit.

Di Malaysia, harga X9 facelift dimulai dari 281.073 Ringgit atau setara sekitar Rp1,26 miliar untuk varian Standard Range, hingga 335.573 Ringgit (sekitar Rp1,51 miliar) untuk varian AWD Performance — berbeda dengan struktur harga di Indonesia yang dimulai dari Rp1,14 miliar. Untuk info harga dan ketersediaan unit resmi di Indonesia, hubungi showroom XPENG Sunter Jakarta.`,
  },
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
