'use client'

import { ProcessTimelineProps } from '@/types/service'
import { Container } from '@/components/layout/container'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// PROCESS TIMELINE COMPONENT
// Based on SPEC-006 Service Pages
// Enhanced with 60fps scroll-triggered animations
// ============================================

interface EnhancedProcessTimelineProps extends ProcessTimelineProps {
  /** Disable entrance animations */
  disableAnimations?: boolean
}

export function ProcessTimeline({
  heading,
  steps,
  disableAnimations = false,
}: EnhancedProcessTimelineProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.15 })

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView

  return (
    <section
      ref={ref}
      data-testid="process-timeline"
      className="py-16 md:py-24 bg-slate-900 overflow-hidden"
    >
      <Container>
        {/* Heading with text reveal */}
        <h2
          className={`
            text-3xl md:text-4xl font-display font-light text-white text-center mb-16 tracking-tight
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

        {/* Timeline - Vertical on mobile, Horizontal on desktop */}
        <div className="relative">
          {/* Desktop: Horizontal layout */}
          <div className="hidden lg:block">
            {/* Animated connecting line */}
            <div
              className={`
                absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-700
                origin-left
                ${shouldAnimate ? 'animate-[scaleX_1s_ease-out_0.3s_forwards]' : ''}
              `}
              style={{
                transform: shouldAnimate ? 'scaleX(0)' : 'scaleX(1)',
              }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`
                    relative flex flex-col items-center text-center
                    ${shouldAnimate ? 'animate-scale-in' : ''}
                  `}
                  style={{
                    animationDelay: shouldAnimate ? getStaggerDelay(index + 1, 150) : undefined,
                    opacity: shouldAnimate ? 0 : 1,
                    animationFillMode: 'forwards',
                  }}
                >
                  {/* Step Number with pop and glow effect */}
                  <div
                    className={`
                      relative z-10 w-16 h-16 flex items-center justify-center
                      rounded-full bg-slate-800 text-white text-2xl font-display font-light
                      mb-6 shadow-lg border border-slate-700
                      transition-all duration-300
                      hover:scale-110 hover:border-slate-500 hover:shadow-xl
                      group
                    `}
                    style={{
                      willChange: 'transform',
                    }}
                  >
                    {/* Glow ring on hover */}
                    <div
                      className="absolute inset-0 rounded-full bg-slate-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                    <span className="relative z-10">{step.number}</span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-display font-light text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical layout */}
          <div className="lg:hidden">
            <div className="relative pl-8">
              {/* Animated connecting line */}
              <div
                className={`
                  absolute top-0 bottom-0 left-4 w-0.5 bg-slate-700
                  origin-top
                  ${shouldAnimate ? 'animate-[scaleY_1.2s_ease-out_0.3s_forwards]' : ''}
                `}
                style={{
                  transform: shouldAnimate ? 'scaleY(0)' : 'scaleY(1)',
                }}
                aria-hidden="true"
              />

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`
                      relative flex items-start gap-6
                      ${shouldAnimate ? 'animate-text-reveal' : ''}
                    `}
                    style={{
                      animationDelay: shouldAnimate ? getStaggerDelay(index + 1, 200) : undefined,
                      opacity: shouldAnimate ? 0 : 1,
                      animationFillMode: 'forwards',
                    }}
                  >
                    {/* Step Number */}
                    <div
                      className={`
                        relative z-10 flex-shrink-0 -ml-8 w-12 h-12
                        flex items-center justify-center
                        rounded-full bg-slate-800 text-white text-xl font-display font-light
                        shadow-lg border border-slate-700
                        transition-all duration-300
                        hover:scale-110 hover:border-slate-500
                      `}
                    >
                      {step.number}
                    </div>

                    <div>
                      {/* Step Title */}
                      <h3 className="text-xl font-display font-light text-white mb-2 tracking-tight">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-slate-400 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

ProcessTimeline.displayName = 'ProcessTimeline'
