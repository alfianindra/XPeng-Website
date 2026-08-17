'use client'

import { Whatsapp as WhatsappIcon } from '@/icons'

interface Props {
  href: string
  className?: string
  children?: React.ReactNode
}

export default function WhatsappButtonTracked({ href, className, children }: Props) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        // @ts-ignore
        if (typeof window.gtag_report_conversion === 'function') {
          // @ts-ignore
          window.gtag_report_conversion(href);
        } else {
          window.location.href = href;
        }
      }}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}