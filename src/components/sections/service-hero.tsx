'use client'

import Link from 'next/link'
import { ServiceHeroProps } from '@/types/service'
import { Container } from '@/components/layout/container'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// SERVICE HERO COMPONENT
// Based on SPEC-006 Service Pages
// Enhanced with 60fps entrance animations
// ============================================

interface EnhancedServiceHeroProps extends ServiceHeroProps {
  /** Disable entrance animations */
  disableAnimations?: boolean
}

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
  disableAnimations = false,
}: EnhancedServiceHeroProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView

  return (
    <section
      ref={ref}
      data-testid="service-hero"
      className={`
        relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden
        ${gradientStyles[backgroundGradient]}
      `.trim().replace(/\s+/g, ' ')}
    >
      {/* Animated floating orbs */}
      <div
        className={`
          absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full
          blur-[80px] opacity-30 pointer-events-none
          ${shouldAnimate ? 'animate-float' : ''}
        `}
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.5) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className={`
          absolute bottom-[20%] left-[10%] w-[250px] h-[250px] rounded-full
          blur-[60px] opacity-20 pointer-events-none
          ${shouldAnimate ? 'animate-float-delayed' : ''}
        `}
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className={`
          absolute top-[40%] right-[5%] w-[200px] h-[200px] rounded-full
          blur-[50px] opacity-15 pointer-events-none
          ${shouldAnimate ? 'animate-glow-pulse' : ''}
        `}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Title with text reveal animation */}
          <h1
            className={`
              text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6
              ${shouldAnimate ? 'animate-text-reveal' : ''}
            `}
            style={{
              animationDelay: shouldAnimate ? '0ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            {title}
          </h1>

          {/* Subtitle with delayed reveal */}
          <p
            className={`
              text-lg md:text-xl text-charcoal-300 mb-8 max-w-2xl leading-relaxed
              ${shouldAnimate ? 'animate-text-reveal' : ''}
            `}
            style={{
              animationDelay: shouldAnimate ? '150ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            {subtitle}
          </p>

          {/* CTAs with staggered scale-in animation */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaPrimaryHref}
              className={`
                inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md
                bg-royal-red-700 text-white hover:bg-royal-red-800
                shadow-button hover:shadow-button-hover
                transition-all duration-200 hover:-translate-y-0.5
                ${shouldAnimate ? 'animate-scale-in' : ''}
              `}
              style={{
                animationDelay: shouldAnimate ? '300ms' : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              {ctaPrimaryLabel}
            </Link>

            {ctaSecondaryLabel && ctaSecondaryHref && (
              <Link
                href={ctaSecondaryHref}
                className={`
                  inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md
                  border-2 border-white/80 text-white
                  hover:bg-white hover:text-charcoal-900
                  transition-all duration-200
                  ${shouldAnimate ? 'animate-scale-in' : ''}
                `}
                style={{
                  animationDelay: shouldAnimate ? '400ms' : undefined,
                  opacity: shouldAnimate ? 0 : 1,
                  animationFillMode: 'forwards',
                }}
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
