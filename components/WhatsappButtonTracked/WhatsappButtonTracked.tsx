'use client'

import { useCallback, useRef } from 'react';

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function WhatsappButtonTracked({ href, className, children }: Props) {
  const isClickingRef = useRef(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      // Prevent multiple rapid clicks within the cooldown period
      if (isClickingRef.current) return;
      isClickingRef.current = true;

      // Reset the debounce lock after 500ms (adjust as needed)
      setTimeout(() => {
        isClickingRef.current = false;
      }, 5000);

      console.log('WA')
      // Execute tracking or fallback navigation
      // @ts-ignore
      if (typeof window.gtag_report_conversion === 'function') {
        // @ts-ignore
        window.gtag_report_conversion(href, {whatsapp: true});
      } else {
        window.location.href = href;
      }
    },
    [href]
  );

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}