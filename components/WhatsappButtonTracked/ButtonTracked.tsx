'use client'

interface Props {
  href?: string 
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
  
  // Jika ada href, render sebagai tag <a> dengan tracking link
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

  // Jika tidak ada href, render sebagai tag <button> (Tracking diserahkan ke onSubmit form agar tidak double)
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={ariaDisabled}
      className={className}
    >
      {children}
    </button>
  )
}