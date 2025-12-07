'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

// ============================================
// SEONYU HERO - BOLD REDESIGN
// Cyberpunk-Luxury Aesthetic
// ============================================

const features = [
  { icon: '🎯', label: '10,000+ Influencerów', desc: 'Zweryfikowana baza' },
  { icon: '🤖', label: 'AI Matching', desc: '95% trafność' },
  { icon: '📊', label: 'ROI Tracking', desc: 'Real-time analytics' },
]

export function SeonyuHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse parallax effect
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPercent = (clientX / innerWidth - 0.5) * 2
      const yPercent = (clientY / innerHeight - 0.5) * 2

      container.style.setProperty('--mouse-x', `${xPercent * 30}px`)
      container.style.setProperty('--mouse-y', `${yPercent * 30}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0118 0%, #1a0a2e 25%, #0f0720 50%, #150a25 75%, #0a0118 100%)',
      }}
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[100px] animate-blob"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, #a855f7 50%, transparent 70%)',
            top: '10%',
            left: '20%',
            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Secondary orb - cyan accent */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[80px] animate-blob"
          style={{
            background: 'radial-gradient(circle, #22d3ee 0%, #06b6d4 50%, transparent 70%)',
            bottom: '10%',
            right: '15%',
            animationDelay: '-2s',
            transform: 'translate(calc(var(--mouse-x, 0) * -0.5), calc(var(--mouse-y, 0) * -0.5))',
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Tertiary orb - gold accent */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[60px] animate-blob"
          style={{
            background: 'radial-gradient(circle, #fbbf24 0%, #f59e0b 50%, transparent 70%)',
            top: '60%',
            left: '10%',
            animationDelay: '-4s',
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-10 animate-float"
          style={{
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="text-sm font-medium text-purple-200 tracking-wide">
            Powered by Advanced AI
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
          <span
            className="block bg-clip-text text-transparent pb-2"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #e2d1f9 50%, #a78bfa 100%)',
            }}
          >
            Influencer Marketing
          </span>
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #c084fc 0%, #a855f7 30%, #22d3ee 70%, #34d399 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-x 4s ease infinite',
            }}
          >
            Na Sterydach AI
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-purple-200/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Znajdź <span className="text-cyan-400 font-medium">idealnych influencerów</span>,
          zautomatyzuj <span className="text-purple-400 font-medium">outreach</span> i śledź
          <span className="text-emerald-400 font-medium"> wyniki w czasie rzeczywistym</span>.
          Wszystko z mocą sztucznej inteligencji.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          {/* Primary CTA - Glow Effect */}
          <Link
            href="#demo"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-100 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />

            {/* Button content */}
            <span className="relative flex items-center gap-2 text-black font-bold">
              Umów Bezpłatne Demo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#jak-dziala"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border border-purple-500/50 text-white hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Zobacz Jak Działa
            </span>
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-2xl">{feature.icon}</span>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">{feature.label}</p>
                <p className="text-purple-300/70 text-xs">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0a0118 0%, transparent 100%)',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

SeonyuHero.displayName = 'SeonyuHero'
