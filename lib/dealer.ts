type DealerData = {
  name:      string
  whatsapp:  string
  address:   string
  hours: {
    weekday: string
    saturday: string
    closed: string
  }
  email:     string
}

const dealer: DealerData = {
  name:      'XPENG Jakarta',
  whatsapp:  '62812345678',
  address:   'Jl. Sudirman No. 1, Jakarta Pusat',
  hours: {
    weekday: 'Senin – Jumat, 09.00 – 18.00 WIB',
    saturday: 'Sabtu, 09.00 – 15.00 WIB',
    closed:  'Minggu & Hari Libur: Tutup',
  },
  email:     'info@xpeng-jakarta.com',
}

export default dealer