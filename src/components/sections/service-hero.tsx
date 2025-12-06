'use client'

import Link from 'next/link'
import { ServiceHeroProps } from '@/types/service'
import { Container } from '@/components/layout/container'

// ============================================
// SERVICE HERO COMPONENT
// Based on SPEC-006 Service Pages
// Extends existing Hero pattern with service-specific styling
// ============================================

const gradientStyles = {
  'royal-red': 'bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-royal-red-900/30',
  'charcoal': 'bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-800',
  'dark': 'bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-royal-red-950/20',
}

export function ServiceHero({
  title,
  subtitle,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  backgroundGradient = 'royal-red',
}: ServiceHeroProps) {
  return (
    <section
      data-testid="service-hero"
      className={`
        relative min-h-[70vh] md:min-h-[80vh] flex items-center
        ${gradientStyles[backgroundGradient]}
      `.trim().replace(/\s+/g, ' ')}
    >
      {/* Decorative glow effect */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-charcoal-300 mb-8 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaPrimaryHref}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md bg-royal-red-700 text-white hover:bg-royal-red-800 shadow-button hover:shadow-button-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              {ctaPrimaryLabel}
            </Link>

            {ctaSecondaryLabel && ctaSecondaryHref && (
              <Link
                href={ctaSecondaryHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md border-2 border-white/80 text-white hover:bg-white hover:text-charcoal-900 transition-all duration-200"
              >
                {ctaSecondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

ServiceHero.displayName = 'ServiceHero'
