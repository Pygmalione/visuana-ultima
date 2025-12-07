'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/container'

// ============================================
// SEONYU HERO - SPEC-008
// AI-Powered Influencer Marketing hero section
// ============================================

const stats = [
  { value: '10,000+', label: 'influencerow' },
  { value: 'AI', label: 'matching' },
  { value: 'ROI', label: 'tracking' },
]

export function SeonyuHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-seonyu-dark via-seonyu-950 to-seonyu-900" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-seonyu-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-seonyu-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-seonyu-500/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seonyu-primary/20 border border-seonyu-primary/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-seonyu-accent animate-pulse" />
            <span className="text-sm font-medium text-seonyu-200">Powered by AI</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-seonyu-100 to-seonyu-200 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="bg-gradient-to-r from-seonyu-300 via-seonyu-400 to-seonyu-accent bg-clip-text text-transparent">
              Influencer Marketing
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-seonyu-200/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Znajdz idealnych influencerow, automatyzuj outreach i sledz wyniki - wszystko z AI.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#demo"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-seonyu-accent text-seonyu-dark hover:bg-seonyu-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Zamow Demo
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#jak-dziala"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-seonyu-400/50 text-white hover:bg-seonyu-400/10 hover:border-seonyu-400 transition-all duration-300"
            >
              Zobacz jak dziala
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-seonyu-200">
                <svg className="w-5 h-5 text-seonyu-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-white">{stat.value}</span>
                <span className="text-seonyu-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

SeonyuHero.displayName = 'SeonyuHero'
