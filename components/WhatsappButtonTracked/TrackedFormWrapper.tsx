'use client'

import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function TrackedFormWrapper({ children, className }: Props) {
  
  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    // e.target adalah elemen asli yang memicu submit (yaitu elemen <form>)
    const form = e.target as HTMLFormElement

    // Kita cek apakah itu benar-benar form dan apakah inputnya sudah diisi dengan valid
    if (form && form.tagName === 'FORM' && form.checkValidity()) {
      console.log('✅ Form valid! Mengirim event konversi ke Google Ads...'); 
      
      // @ts-ignore
      if (typeof window.gtag_report_conversion === 'function') {
        // @ts-ignore
        window.gtag_report_conversion();
        console.log('✅ gtag_report_conversion berhasil dipanggil!');
      } else {
        console.warn('⚠️ Fungsi gtag_report_conversion belum ada di object window (Pastikan script Google Ads ditaruh di <head>).');
      }
    }
  }

  return (
    <div className={className} onSubmit={handleSubmit}>
      {children}
    </div>
  )
}