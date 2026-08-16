'use client'

import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function TrackedFormWrapper({ children, className }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    const form = e.target as HTMLFormElement

    if (form && form.tagName === 'FORM' && form.checkValidity()) {
      // @ts-ignore
      if (typeof window.gtag_report_conversion === 'function') {
        // @ts-ignore
        window.gtag_report_conversion();
      }
    }
  }

  return (
    <div className={className} onSubmit={handleSubmit}>
      {children}
    </div>
  )
}