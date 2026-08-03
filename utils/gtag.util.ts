declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// Fires a Google Ads conversion event, then calls onComplete — either once gtag
// confirms the hit, or after a timeout, whichever comes first. If gtag never
// loaded (ad blockers commonly strip it), onComplete still runs immediately so
// navigation never gets stuck waiting on tracking that will never respond.
export function fireConversion(sendTo: string, onComplete: () => void): void {
  if (typeof window.gtag !== 'function') {
    onComplete()
    return
  }

  window.gtag('event', 'conversion', {
    send_to: sendTo,
    event_callback: onComplete,
    event_timeout: 2000,
  })
}
