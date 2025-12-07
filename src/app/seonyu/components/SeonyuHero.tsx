'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useReducedMotion } from '../hooks/useReducedMotion'

// ============================================
// SEONYU HERO - LIGHT THEME
// Blue/Navy + White + Black | 21st.dev Style
// ============================================

const features = [
  { icon: '🎯', label: '10,000+ Influencerów', desc: 'Zweryfikowana baza' },
  { icon: '🤖', label: 'AI Matching', desc: '95% trafność' },
  { icon: '📊', label: 'ROI Tracking', desc: 'Real-time analytics' },
]

export function SeonyuHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { shouldReduceMotion } = useReducedMotion()

  // Subtle mouse parallax effect
  useEffect(() => {
    const container = containerRef.current
    if (!container || shouldReduceMotion) return

    let rafId: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return

      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        const xPercent = (clientX / innerWidth - 0.5) * 2
        const yPercent = (clientY / innerHeight - 0.5) * 2

        container.style.setProperty('--mouse-x', `${xPercent * 15}px`)
        container.style.setProperty('--mouse-y', `${yPercent * 15}px`)

        rafId = null
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [shouldReduceMotion])

  return (
    <section
      ref={containerRef}
      aria-label="Seonyu Hero - AI Influencer Marketing Platform"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Soft gradient orb - top right */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-40 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, #1d4ed8 50%, transparent 70%)',
            top: '-10%',
            right: '-5%',
            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
            transition: 'transform 0.5s ease-out',
          }}
        />

        {/* Soft gradient orb - bottom left */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, #0891b2 50%, transparent 70%)',
            bottom: '0%',
            left: '-10%',
            transform: 'translate(calc(var(--mouse-x, 0) * -0.5), calc(var(--mouse-y, 0) * -0.5))',
            transition: 'transform 0.5s ease-out',
          }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-12 bg-slate-100 border border-slate-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-700 tracking-wide">
            Powered by Advanced AI
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight">
          <span className="block text-slate-900 pb-2">
            Influencer Marketing
          </span>
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #06b6d4 100%)',
            }}
          >
            Na Sterydach AI
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-600 mb-14 max-w-2xl mx-auto leading-relaxed">
          Znajdź <span className="text-blue-600 font-semibold">idealnych influencerów</span>,
          zautomatyzuj <span className="text-slate-800 font-semibold">outreach</span> i śledź
          <span className="text-cyan-600 font-semibold"> wyniki w czasie rzeczywistym</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-20">
          {/* Primary CTA */}
          <Link
            href="#demo"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            <span className="flex items-center gap-2">
              Umów Bezpłatne Demo
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#jak-dziala"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Zobacz Jak Działa
            </span>
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <span className="text-2xl">{feature.icon}</span>
              <div className="text-left">
                <p className="text-slate-900 font-semibold text-sm">{feature.label}</p>
                <p className="text-slate-500 text-xs">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #f8fafc 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}

SeonyuHero.displayName = 'SeonyuHero'
