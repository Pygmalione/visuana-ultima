'use client'

import Link from 'next/link'
import { Container } from '@/components/layout/container'

// ============================================
// SEONYU CTA - SPEC-008
// Final call-to-action section
// ============================================

export function SeonyuCTA() {
  return (
    <section id="demo" className="py-20 md:py-28 bg-gradient-to-br from-seonyu-dark via-seonyu-950 to-seonyu-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-seonyu-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-seonyu-accent/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Gotowy na{' '}
            <span className="bg-gradient-to-r from-seonyu-400 to-seonyu-accent bg-clip-text text-transparent">
              AI influencer marketing?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-seonyu-200/90 mb-10 max-w-xl mx-auto">
            Umow sie na 15-minutowe demo i zobacz jak Seonyu moze zrewolucjonizowac Twoje kampanie.
          </p>

          {/* CTA Button */}
          <Link
            href="/kontakt"
            className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl bg-seonyu-accent text-seonyu-dark hover:bg-seonyu-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Zamow bezplatne demo - 15 min
            <svg
              className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Alternative Contact */}
          <p className="mt-8 text-seonyu-300">
            lub napisz:{' '}
            <a
              href="mailto:hello@seonyu.pl"
              className="text-seonyu-accent hover:text-seonyu-accent/80 font-medium underline underline-offset-4"
            >
              hello@seonyu.pl
            </a>
          </p>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-seonyu-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seonyu-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Bez zobowiazan</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seonyu-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Personalizowane demo</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seonyu-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Od razu wdrozenie</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

SeonyuCTA.displayName = 'SeonyuCTA'
