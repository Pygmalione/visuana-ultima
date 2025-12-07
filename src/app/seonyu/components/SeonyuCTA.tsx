'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ============================================
// SEONYU CTA - LIGHT THEME
// Minimal | Blue Gradient | 21st.dev Style
// ============================================

export function SeonyuCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="demo"
      aria-labelledby="cta-title"
      className="relative py-28 md:py-36 bg-slate-50 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            top: '-20%',
            left: '10%',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            bottom: '-10%',
            right: '10%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div
          className={`
            text-center transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-light tracking-wider uppercase text-blue-700 bg-blue-50/80 backdrop-blur-sm border border-blue-100 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Darmowe demo
          </span>

          {/* Title */}
          <h2
            id="cta-title"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight"
          >
            Gotowy na{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              AI Marketing?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Umów się na <span className="text-blue-600 font-normal">15-minutowe demo</span> i zobacz jak Seonyu może zrewolucjonizować Twoje kampanie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-light rounded-xl bg-slate-900 text-white hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Zamów bezpłatne demo
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <a
              href="mailto:hello@seonyu.pl"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-light rounded-xl text-slate-600 bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
            >
              hello@seonyu.pl
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className={`
              flex flex-wrap items-center justify-center gap-6
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
            style={{ transitionDelay: '200ms' }}
          >
            {[
              { text: 'Bez zobowiązań', icon: '✓' },
              { text: 'Setup w 24h', icon: '✓' },
              { text: 'Wsparcie 24/7', icon: '✓' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-slate-500"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-100/80 backdrop-blur-sm flex items-center justify-center text-emerald-600 text-xs font-light">
                  {item.icon}
                </span>
                <span className="text-sm font-light">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

SeonyuCTA.displayName = 'SeonyuCTA'
