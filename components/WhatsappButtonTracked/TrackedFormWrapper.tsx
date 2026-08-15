'use client'

import React, { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function TrackedFormWrapper({ children, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    if (!form.checkValidity()) {
      return
    }

    // @ts-ignore
    if (typeof window.gtag_report_conversion === 'function') {
      // @ts-ignore
      window.gtag_report_conversion()
    }
  }

  return (
    <div 
      ref={containerRef} 
      className={className} 
      // @ts-ignore
      onSubmitCapture={handleSubmit}
    >
      {children}
    </div>
  )
}