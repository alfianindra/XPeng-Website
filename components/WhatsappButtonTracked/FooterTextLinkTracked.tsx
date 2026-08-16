'use client'

interface Props {
  href: string
  className?: string
  children?: React.ReactNode
  target?: string
  rel?: string
}

export default function FooterTextLinkTracked({ 
  href, 
  className, 
  children, 
  target = "_blank", 
  rel = "noopener noreferrer" 
}: Props) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation(); // Mencegah event klik merambat ke elemen pembungkus (mencegah double trigger)
        
        // @ts-ignore
        if (typeof window.gtag_report_conversion === 'function') {
          // @ts-ignore
          window.gtag_report_conversion(href);
        } else {
          window.location.href = href;
        }
      }}
      target={target}
      rel={rel}
      className={className}
    >
      {children}
    </a>
  )
}