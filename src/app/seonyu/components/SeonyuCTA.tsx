'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

// ============================================
// SEONYU CTA - BOLD REDESIGN
// Immersive Final CTA with Glow Effects
// ============================================

export function SeonyuCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      section.style.setProperty('--mouse-x', `${x}%`)
      section.style.setProperty('--mouse-y', `${y}%`)
    }

    section.addEventListener('mousemove', handleMouseMove)
    return () => section.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1a0a2e 0%, #0f0720 50%, #0a0118 100%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse-following gradient */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[150px] transition-all duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
            left: 'var(--mouse-x, 50%)',
            top: 'var(--mouse-y, 50%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Secondary orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] animate-blob"
          style={{
            background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)',
            bottom: '-10%',
            right: '10%',
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 158, 11, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-float"
            style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(249, 115, 22, 0.1) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-sm font-medium text-amber-200 tracking-wide">
              Darmowe demo
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span
              className="block bg-clip-text text-transparent pb-2"
              style={{
                backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #fef3c7 50%, #fcd34d 100%)',
              }}
            >
              Gotowy na
            </span>
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #f59e0b 0%, #f97316 30%, #7c3aed 70%, #a855f7 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradient-x 4s ease infinite',
              }}
            >
              AI Influencer Marketing?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-purple-200/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Umów się na <span className="text-amber-400 font-medium">15-minutowe demo</span> i zobacz jak Seonyu może zrewolucjonizować Twoje kampanie.
          </p>

          {/* CTA Button */}
          <div className="mb-10">
            <Link
              href="/kontakt"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              {/* Button background with glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />

              {/* Border beam animation */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'shimmer 2s linear infinite',
                }}
              />

              {/* Button content */}
              <span className="relative flex items-center gap-3 text-black font-bold">
                Zamów bezpłatne demo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Alternative Contact */}
          <p className="text-purple-300/70 mb-12">
            lub napisz:{' '}
            <a
              href="mailto:hello@seonyu.pl"
              className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 transition-colors"
            >
              hello@seonyu.pl
            </a>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { text: 'Bez zobowiązań', icon: '✓' },
              { text: 'Personalizowane demo', icon: '✓' },
              { text: 'Od razu wdrożenie', icon: '✓' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-xs text-black font-bold">
                  {item.icon}
                </span>
                <span className="text-sm text-purple-200/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0a0118 0%, transparent 100%)',
        }}
      />
    </section>
  )
}

SeonyuCTA.displayName = 'SeonyuCTA'
