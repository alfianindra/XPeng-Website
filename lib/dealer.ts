type DealerData = {
  name: string
  whatsapp: string
  address: string
  workday: {
    day: string
    hours: string
  }
  email: string
  social: {
    instagram: string
    youtube: string
    tiktok: string
    facebook: string
  }
}

const dealer: DealerData = {
  name: 'XPENG Sunter Jakarta',
  whatsapp: '6289668216082',
  address: 'Blok A3 No.42, Jl. Danau Sunter Barat, RW.10, Sunter Agung, Tanjung Priok, North Jakarta City, Jakarta 14350',
  workday: {
    day: 'Senin - Minggu',
    hours: '09.00 – 17.00 WIB'
  },
  email: 'xpengsunter.office@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/xpengsunter_harry?igsh=OTZxZWl5NWoyY3Ay',
    youtube: 'https://youtube.com/@xpeng_id?si=3GnJOSGckHgmYxyZ',
    tiktok: 'https://www.tiktok.com/@xpengmotors.official?_r=1&_t=ZS-96Lb78Fsc45',
    facebook: 'https://www.facebook.com/share/1CjWksYw63/',
  },
} as const

export default dealer
