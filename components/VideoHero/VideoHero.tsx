'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// ── Video sources ───────────────────────────────────────────────────────────
const MOBILE_VIDEOS = [
  'https://res.cloudinary.com/cavemine/video/upload/v1779712696/g6_pro_s_p2rvtg.webm',
  'https://res.cloudinary.com/cavemine/video/upload/v1779712686/x9_pro_s_sfp9ot.webm',
]
const DESKTOP_VIDEOS = [
  'https://res.cloudinary.com/cavemine/video/upload/v1779713096/g6_pro_m_tlds3w.webm',
  'https://res.cloudinary.com/cavemine/video/upload/v1779713108/x9_pro_m_furbbi.webm',
]

// ── Scroll wrapper height (how much you need to scroll through the hero) ────
const SCROLL_MULTIPLIER = 3   // 300vh

export default function VideoHero() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const videoRef  = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  // Pick a random video on mount (client-side only — avoids hydration mismatch)
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const idx = Math.floor(Math.random() * 2)
    const src = isMobile ? MOBILE_VIDEOS[idx] : DESKTOP_VIDEOS[idx]
    const id = setTimeout(() => setVideoSrc(src), 0)
    return () => clearTimeout(id)
  }, [])

  // Programmatic play() as a fallback for browsers that ignore the autoPlay attr
  useEffect(() => {
    if (!videoSrc || !videoRef.current) return
    videoRef.current.play().catch(() => { /* autoplay blocked — silently ignore */ })
  }, [videoSrc])

  // Drive scroll progress [0 → 1] from the wrapper's position in the page
  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return
      const rect    = wrapperRef.current.getBoundingClientRect()
      const total   = wrapperRef.current.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      setProgress(Math.max(0, Math.min(1, scrolled / total)))
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  // ── Phase opacities ────────────────────────────────────────────────────────
  // Phase 1  "Welcome To"  — visible from 0, fades out ~25-40%
  const welcomeOpacity =
    progress < 0.25 ? 1
    : progress > 0.42 ? 0
    : (0.42 - progress) / 0.17

  // Phase 2  XPENG logo  — fades in 30-45%, holds, fades out 60-75%
  const logoOpacity =
    progress < 0.30 ? 0
    : progress > 0.75 ? 0
    : progress < 0.45 ? (progress - 0.30) / 0.15
    : progress < 0.62 ? 1
    : (0.75 - progress) / 0.13

  // Phase 3  "Our Lineup ↓"  — fades in 68-82%, stays to end
  const lineupOpacity =
    progress < 0.68 ? 0
    : progress > 0.90 ? 1
    : (progress - 0.68) / 0.22

  // Small upward drift for "Our Lineup" text as it enters
  const lineupY = progress < 0.68 ? 24 : Math.max(0, 24 - ((progress - 0.68) / 0.22) * 24)

  return (
    /*
     * The outer wrapper is SCROLL_MULTIPLIER × 100vh tall so the user
     * scrolls through it at normal speed while the inner sticky panel
     * stays pinned in the viewport.
     */
    <div
      ref={wrapperRef}
      style={{ height: `${SCROLL_MULTIPLIER * 100}vh` }}
      aria-label="Hero section"
    >
      <div
        className="sticky top-0 h-svh overflow-hidden bg-black"
        aria-hidden="true"
      >
        {/* ── Background video ─────────────────────────────────────────── */}
        {videoSrc && (
          <video
            ref={videoRef}
            key={videoSrc}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        )}

        {/* Dark scrim */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Top gradient — keeps navbar text readable over the video */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

        {/* ── Phase 1: Welcome To ──────────────────────────────────────── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: welcomeOpacity }}
        >
          <p className="font-display text-[clamp(36px,7vw,88px)] font-black tracking-[-0.04em] text-white text-center px-6">
            Welcome To
          </p>
        </div>

        {/* ── Phase 2: XPENG logo ──────────────────────────────────────── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: logoOpacity }}
        >
          <Image
            src="/logo.png"
            alt="XPENG"
            width={955}
            height={165}
            className="h-16 sm:h-20 md:h-28 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
            priority
          />
        </div>

        {/* ── Phase 3: Our Lineup ──────────────────────────────────────── */}
        <div
          className="absolute bottom-14 sm:bottom-20 inset-x-0 flex flex-col items-center gap-4 pointer-events-none select-none"
          style={{
            opacity: lineupOpacity,
            transform: `translateY(${lineupY}px)`,
          }}
        >
          <p className="font-display text-[clamp(28px,5vw,60px)] font-black tracking-[-0.03em] text-white text-center">
            Our Lineup
          </p>
          {/* Bouncing chevron */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  )
}
