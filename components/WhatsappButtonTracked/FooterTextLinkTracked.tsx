'use client'
import { useCallback, useRef } from 'react';

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
  rel = "noopener noreferrer",
}: Props) {
  const isClickingRef = useRef(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.stopPropagation(); // Mencegah event klik merambat ke elemen pembungkus (mencegah double trigger)

      // Prevent multiple rapid clicks within the cooldown period
      if (isClickingRef.current) return;
      isClickingRef.current = true;

      // Reset the debounce lock after 5s (adjust as needed)
      setTimeout(() => {
        isClickingRef.current = false;
      }, 5000);

      // @ts-ignore
      if (typeof window.gtag_report_conversion === 'function') {
        // @ts-ignore
        window.gtag_report_conversion(href, { whatsapp: true });
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