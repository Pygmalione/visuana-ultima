'use client'

import { ProblemSectionProps } from '@/types/service'
import { Container } from '@/components/layout/container'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// PROBLEM SECTION COMPONENT
// Based on SPEC-006 Service Pages
// Enhanced with scroll-triggered animations
// ============================================

interface EnhancedProblemSectionProps extends ProblemSectionProps {
  /** Disable entrance animations */
  disableAnimations?: boolean
}

export function ProblemSection({
  heading,
  painPoints,
  hookText,
  disableAnimations = false,
}: EnhancedProblemSectionProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.15 })

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView

  return (
    <section
      ref={ref}
      data-testid="problem-section"
      className="py-16 md:py-24 bg-charcoal-50"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading with text reveal */}
          <h2
            className={`
              text-3xl md:text-4xl font-bold text-charcoal-800 mb-12
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

          {/* Pain Points with staggered entrance */}
          <ul className="space-y-6 mb-12">
            {painPoints.map((point, index) => (
              <li
                key={index}
                className={`
                  flex items-start gap-4 text-left p-4 bg-white rounded-lg shadow-card
                  transition-all duration-300 hover:shadow-card-hover hover:-translate-x-1
                  ${shouldAnimate ? 'animate-text-reveal' : ''}
                `}
                style={{
                  animationDelay: shouldAnimate ? getStaggerDelay(index + 1, 120) : undefined,
                  opacity: shouldAnimate ? 0 : 1,
                  animationFillMode: 'forwards',
                }}
              >
                {/* X Icon with shake animation on hover */}
                <span
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-royal-red-100 text-royal-red-700 transition-transform duration-200 hover:scale-110"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </span>
                <span className="text-lg text-charcoal-700 leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Hook Text with delayed reveal */}
          <p
            className={`
              text-xl md:text-2xl font-semibold text-royal-red-700 italic
              ${shouldAnimate ? 'animate-scale-in' : ''}
            `}
            style={{
              animationDelay: shouldAnimate ? getStaggerDelay(painPoints.length + 1, 120) : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            {hookText}
          </p>
        </div>
      </Container>
    </section>
  )
}

ProblemSection.displayName = 'ProblemSection'
