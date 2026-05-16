'use client'

import { useEffect, useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number // ms
  as?: 'div' | 'section' | 'article' | 'li'
}

export default function FadeIn({ children, className = '', delay = 0, as: Tag = 'div' }: FadeInProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Only animate if the element starts below the fold
    const rect = el.getBoundingClientRect()
    if (rect.top <= window.innerHeight) return // Already visible — no animation

    el.classList.add('will-animate')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setTimeout(() => {
          el.classList.remove('will-animate')
          el.classList.add('visible')
        }, delay)
        observer.disconnect()
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    // @ts-expect-error — Tag is narrowed to valid HTML elements
    <Tag ref={ref} className={`fade-in ${className}`}>
      {children}
    </Tag>
  )
}
