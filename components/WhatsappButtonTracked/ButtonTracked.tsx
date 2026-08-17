'use client'

interface Props {
  href?: string // Opsional, kalau ada jadi link (<a>), kalau tidak ada jadi button (<button>)
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  className?: string
  children?: React.ReactNode
  'aria-disabled'?: boolean
}

export default function ButtonTracked({ 
  href, 
  type = "submit",
  disabled,
  className, 
  children,
  'aria-disabled': ariaDisabled
}: Props) {
  const handleClick = (e: React.MouseEvent) => {
    // Jika bukan link, cegah default behavior form jika perlu ditangani manual
    // @ts-ignore
    if (typeof window.gtag_report_conversion === 'function') {
      // @ts-ignore
      window.gtag_report_conversion(href);
    }
  }

  // Jika ada href, render sebagai tag <a>
  if (href) {
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

  // Jika tidak ada href, render sebagai tag <button>
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={ariaDisabled}
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  )
}