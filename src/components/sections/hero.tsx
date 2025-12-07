'use client'

import Link from 'next/link'
import { HeroProps } from '@/types/components'
import { Container } from '@/components/layout/container'

// ============================================
// HERO COMPONENT - Full Width Banner
// Based on SPEC-001 Visual Identity
// ============================================

export function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref = '#',
  secondaryCtaLabel,
  secondaryCtaHref = '#',
  backgroundImage,
  overlay = true,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {/* Overlay */}
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-charcoal-900/70" />
      )}

      {/* Gradient Background (when no image) */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-royal-red-900/20" />
      )}

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-charcoal-300 mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaLabel && (
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md bg-royal-red-700 text-white hover:bg-royal-red-800 shadow-button hover:shadow-button-hover transition-all duration-200 hover:-translate-y-0.5"
              >
                {ctaLabel}
              </Link>
            )}
            {secondaryCtaLabel && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md border-2 border-white text-white hover:bg-white hover:text-charcoal-900 transition-all duration-200"
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

Hero.displayName = 'Hero'

// ============================================
// HERO VARIANT - Split Layout (Image + Text)
// ============================================

interface HeroSplitProps extends HeroProps {
  image?: string
  imageAlt?: string
  reverse?: boolean
}

export function HeroSplit({
  title,
  subtitle,
  ctaLabel,
  ctaHref = '#',
  secondaryCtaLabel,
  secondaryCtaHref = '#',
  image,
  imageAlt = '',
  reverse = false,
}: HeroSplitProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className={`
          grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center
          ${reverse ? 'lg:flex-row-reverse' : ''}
        `}>
          {/* Text Content */}
          <div className={reverse ? 'lg:order-2' : ''}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-800 leading-tight mb-6">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg text-charcoal-600 mb-8">
                {subtitle}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {ctaLabel && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md bg-royal-red-700 text-white hover:bg-royal-red-800 transition-all duration-200"
                >
                  {ctaLabel}
                </Link>
              )}
              {secondaryCtaLabel && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md border-2 border-charcoal-300 text-charcoal-700 hover:border-charcoal-400 hover:bg-charcoal-50 transition-all duration-200"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className={`
              relative aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden
              ${reverse ? 'lg:order-1' : ''}
            `}>
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

HeroSplit.displayName = 'HeroSplit'

// ============================================
// HERO VARIANT - Light Theme (McKinsey Style)
// Elegant, Professional, Thin Typography
// ============================================

interface HeroLightProps extends HeroProps {
  badge?: string
}

export function HeroLight({
  title,
  subtitle,
  ctaLabel,
  ctaHref = '#',
  secondaryCtaLabel,
  secondaryCtaHref = '#',
  badge,
}: HeroLightProps) {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #1e40af 0%, transparent 70%)',
            top: '-15%',
            right: '-10%',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #b91c1c 0%, transparent 70%)',
            bottom: '10%',
            left: '-5%',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center py-16">
          {/* Badge */}
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200 mb-10">
              {badge}
            </span>
          )}

          {/* Title - Elegant Thin Typography */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-[1.1] mb-8 tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {ctaLabel && (
              <Link
                href={ctaHref}
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-900/10"
              >
                {ctaLabel}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
            {secondaryCtaLabel && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #f8fafc 0%, transparent 100%)' }}
        aria-hidden="true"
      />
    </section>
  )
}

HeroLight.displayName = 'HeroLight'
