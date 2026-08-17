'use client'

import { useCallback, useRef } from 'react';

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
  const isSubmittingRef = useRef(false);

  // Jika ada href, render sebagai tag <a> dengan tracking link
  if (href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          
          if (isSubmittingRef.current) return;
          isSubmittingRef.current = true;

          setTimeout(() => {
            isSubmittingRef.current = false;
          }, 5000);

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

  // Jika tidak ada href, render sebagai tag <button> dengan debouncer dan form_fill tracking
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (type === 'submit') {
      if (isSubmittingRef.current) return;
      isSubmittingRef.current = true;

      setTimeout(() => {
        isSubmittingRef.current = false;
      }, 5000);

      // @ts-ignore
      if (typeof window.gtag_report_conversion === 'function') {
        // @ts-ignore
        window.gtag_report_conversion(undefined, { form_fill: true });
      }
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={ariaDisabled}
      className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}