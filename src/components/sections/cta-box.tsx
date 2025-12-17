'use client'

import Link from 'next/link'
import { CTABoxProps } from '@/types/components'
import { Container } from '@/components/layout/container'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// CTA BOX COMPONENT
// Enhanced with 60fps microinteractions
// ============================================

const bgColors = {
  'royal-red': 'bg-slate-900',
  'charcoal': 'bg-slate-800',
  'white': 'bg-white border border-slate-200',
  'muted': 'bg-slate-50',
}

const textColors = {
  'royal-red': { title: 'text-white', description: 'text-slate-300' },
  'charcoal': { title: 'text-white', description: 'text-slate-300' },
  'white': { title: 'text-slate-900', description: 'text-slate-600' },
  'muted': { title: 'text-slate-900', description: 'text-slate-600' },
}

const buttonStyles = {
  'royal-red': 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
  'charcoal': 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
  'white': 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
  'muted': 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
}

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

interface EnhancedCTABoxProps extends CTABoxProps {
  /** Disable entrance animations */
  disableAnimations?: boolean
}

export function CTABox({
  title,
  description,
  buttonLabel,
  buttonHref,
  bgColor = 'royal-red',
  alignment = 'center',
  disableAnimations = false,
}: EnhancedCTABoxProps) {
  const colors = textColors[bgColor]
  const buttonClass = buttonStyles[bgColor]
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })

  // Determine if we should animate
  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView
  const isDarkVariant = bgColor === 'royal-red' || bgColor === 'charcoal'

  return (
    <section
      ref={ref}
      data-testid="cta-box"
      className={`
        relative py-12 md:py-16 rounded-xl overflow-hidden
        ${bgColors[bgColor]}
        ${alignmentClasses[alignment]}
      `.trim().replace(/\s+/g, ' ')}
    >
      {/* Animated gradient background for dark variants */}
      {isDarkVariant && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Primary gradient orb */}
          <div
            className={`
              absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]
              ${shouldAnimate ? 'animate-float' : ''}
            `}
            style={{
              background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
              top: '-20%',
              right: '-10%',
              willChange: shouldAnimate ? 'transform' : undefined,
            }}
          />
          {/* Secondary accent orb */}
          <div
            className={`
              absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]
              ${shouldAnimate ? 'animate-glow-pulse' : ''}
            `}
            style={{
              background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
              bottom: '-15%',
              left: '-5%',
              willChange: shouldAnimate ? 'transform, opacity' : undefined,
            }}
          />
        </div>
      )}

      <Container className="relative z-10">
        <div className={`max-w-2xl ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}>
          {/* Title with scroll-triggered animation */}
          <h2
            className={`
              font-display text-2xl md:text-3xl font-light tracking-tight mb-4
              ${colors.title}
              ${shouldAnimate ? 'animate-text-reveal' : ''}
            `}
            style={{
              animationDelay: shouldAnimate ? getStaggerDelay(0, 100) : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            {title}
          </h2>

          {/* Description with staggered animation */}
          {description && (
            <p
              className={`
                text-lg font-light leading-relaxed mb-6
                ${colors.description}
                ${shouldAnimate ? 'animate-text-reveal' : ''}
              `}
              style={{
                animationDelay: shouldAnimate ? getStaggerDelay(1, 100) : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              {description}
            </p>
          )}

          {/* CTA Button with scale-in animation */}
          <div
            className={shouldAnimate ? 'animate-scale-in' : ''}
            style={{
              animationDelay: shouldAnimate ? getStaggerDelay(2, 100) : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            <Link
              href={buttonHref}
              className={`
                group inline-flex items-center justify-center
                px-8 py-4 text-base font-medium rounded-xl
                transition-all duration-200
                ${buttonClass}
              `.trim().replace(/\s+/g, ' ')}
            >
              {buttonLabel}
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

CTABox.displayName = 'CTABox'
