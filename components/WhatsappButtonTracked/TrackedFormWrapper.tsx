'use client'

import React, { useCallback, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function TrackedFormWrapper({ children, className }: Props) {
  const isSubmittingRef = useRef(false)

  const handleSubmit = useCallback((e: React.FormEvent<HTMLDivElement>) => {
    const form = e.target as HTMLFormElement

    if (form && form.tagName === 'FORM' && form.checkValidity()) {
      // Prevent multiple rapid submits within the cooldown period
      if (isSubmittingRef.current) return
      isSubmittingRef.current = true

      // Reset the debounce lock after 5000ms (adjust as needed)
      setTimeout(() => {
        isSubmittingRef.current = false
      }, 5000)

      // @ts-ignore
      if (typeof window.gtag_report_conversion === 'function') {
        // @ts-ignore
        window.gtag_report_conversion(undefined, { form_fill: true })
      }
    }
  }, [])

  return (
    <div className={className} onSubmit={handleSubmit}>
      {children}
    </div>
  )
}