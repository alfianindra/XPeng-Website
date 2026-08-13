'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// ── Video sources ───────────────────────────────────────────────────────────
const MOBILE_VIDEO = '/video_hero.mp4'
const DESKTOP_VIDEOS = [
  'https://res.cloudinary.com/cavemine/video/upload/v1779713096/g6_pro_m_tlds3w.webm',
  'https://res.cloudinary.com/cavemine/video/upload/v1779713108/x9_pro_m_furbbi.webm',
]

export default function VideoHero() {
  const videoRef  = useRef<HTMLVideoElement>(null)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  // Mobile always plays the local hero video; desktop picks randomly between
  // the two Cloudinary variants. Client-side only — avoids hydration mismatch.
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const src = isMobile
      ? MOBILE_VIDEO
      : DESKTOP_VIDEOS[Math.floor(Math.random() * DESKTOP_VIDEOS.length)]
    const id = setTimeout(() => setVideoSrc(src), 0)
    return () => clearTimeout(id)
  }, [])

  // Programmatic play() as a fallback for browsers that ignore the autoPlay attr
  useEffect(() => {
    if (!videoSrc || !videoRef.current) return
    videoRef.current.play().catch(() => { /* autoplay blocked — silently ignore */ })
  }, [videoSrc])

  return (
    <div
      className="relative h-svh overflow-hidden bg-black"
      aria-label="Hero section"
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

      {/* ── Our Lineup — static, always visible ────────────────────────── */}
      <div className="absolute bottom-14 sm:bottom-20 inset-x-0 flex flex-col items-center gap-4 pointer-events-none select-none">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <p className="font-display text-[clamp(14px,2vw,22px)] font-normal tracking-[-0.02em] text-white text-center">
          Our Lineup
        </p>
      </div>
    </div>
  )
}
