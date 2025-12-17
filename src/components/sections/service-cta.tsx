'use client'

import Link from 'next/link'
import { ServiceCTAProps } from '@/types/service'
import { Container } from '@/components/layout/container'
import { useReducedMotion, useInView } from '@/lib/animations'

// ============================================
// SERVICE CTA COMPONENT
// Based on SPEC-006 Service Pages
// Enhanced with scroll-triggered animations
// ============================================

interface EnhancedServiceCTAProps extends ServiceCTAProps {
  /** Disable entrance animations */
  disableAnimations?: boolean
}

const variantStyles = {
  'royal-red': {
    bg: 'bg-royal-red-700',
    title: 'text-white',
    description: 'text-royal-red-100',
    button: 'bg-white text-royal-red-700 hover:bg-charcoal-100',
  },
  'charcoal': {
    bg: 'bg-charcoal-900',
    title: 'text-white',
    description: 'text-charcoal-300',
    button: 'bg-royal-red-700 text-white hover:bg-royal-red-800',
  },
  'gradient': {
    bg: 'bg-gradient-to-r from-royal-red-700 to-royal-red-900',
    title: 'text-white',
    description: 'text-royal-red-100',
    button: 'bg-white text-royal-red-700 hover:bg-charcoal-100',
  },
}

export function ServiceCTA({
  heading,
  description,
  buttonLabel,
  buttonHref,
  variant = 'royal-red',
  disableAnimations = false,
}: EnhancedServiceCTAProps) {
  const styles = variantStyles[variant]
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView

  return (
    <section
      ref={ref}
      data-testid="service-cta"
      className={`py-16 md:py-24 ${styles.bg} overflow-hidden`}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading with text reveal */}
          <h2
            className={`
              text-3xl md:text-4xl font-bold mb-4 ${styles.title}
              ${shouldAnimate ? 'animate-text-reveal' : ''}
            `}
            style={{
              animationDelay: shouldAnimate ? '0ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            {heading}
          </h2>

          {/* Description with delayed reveal */}
          {description && (
            <p
              className={`
                text-lg md:text-xl mb-8 ${styles.description}
                ${shouldAnimate ? 'animate-text-reveal' : ''}
              `}
              style={{
                animationDelay: shouldAnimate ? '150ms' : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              {description}
            </p>
          )}

          {/* CTA Button with scale-in animation */}
          <Link
            href={buttonHref}
            className={`
              inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md
              shadow-button hover:shadow-button-hover transition-all duration-200 hover:-translate-y-0.5
              ${styles.button}
              ${shouldAnimate ? 'animate-scale-in' : ''}
            `}
            style={{
              animationDelay: shouldAnimate ? '300ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            {buttonLabel}
          </Link>
        </div>
      </Container>
    </section>
  )
}

ServiceCTA.displayName = 'ServiceCTA'
