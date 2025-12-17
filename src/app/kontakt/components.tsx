'use client'

import { useReducedMotion, useInView } from '@/lib/animations'

// ============================================
// CONTACT PAGE ANIMATED COMPONENTS
// Client-side wrappers with scroll-triggered animations
// ============================================

// ============================================
// ANIMATED CONTACT HERO
// ============================================

interface ContactHeroContentProps {
  children?: React.ReactNode
}

export function ContactHeroContent({ children }: ContactHeroContentProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
      <h1
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-800 mb-4 sm:mb-6 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Porozmawiajmy o Twoim projekcie
      </h1>
      <p
        className={`text-lg sm:text-xl text-charcoal-600 leading-relaxed ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '100ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Bezplatna konsultacja 15 minut. Zero zobowiazan. Konkrety.
      </p>
      {children}
    </div>
  )
}

// ============================================
// ANIMATED FORM CARD WRAPPER
// ============================================

interface AnimatedFormCardProps {
  children: React.ReactNode
}

export function AnimatedFormCard({ children }: AnimatedFormCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-card p-6 sm:p-8 ${shouldAnimate ? 'animate-scale-in' : ''}`}
      style={{
        animationDelay: shouldAnimate ? '0ms' : undefined,
        opacity: shouldAnimate ? 0 : 1,
        animationFillMode: 'forwards',
      }}
    >
      <h2
        className={`text-xl sm:text-2xl font-semibold text-charcoal-800 mb-6 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '150ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Zostaw wiadomosc
      </h2>
      {children}
    </div>
  )
}

// ============================================
// ANIMATED BOTTOM CTA
// ============================================

export function AnimatedBottomCTA() {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="text-center">
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Wolisz rozmowe telefoniczna?
      </h2>
      <p
        className={`text-lg text-royal-red-100 mb-6 max-w-2xl mx-auto ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '100ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Napisz na{' '}
        <a
          href="mailto:karol@visuana.pl"
          className="underline hover:text-white transition-colors duration-200"
        >
          karol@visuana.pl
        </a>
        {' '}a umowimy sie na krotka rozmowe.
      </p>
    </div>
  )
}
