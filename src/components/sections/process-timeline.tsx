'use client'

import { ProcessTimelineProps } from '@/types/service'
import { Container } from '@/components/layout/container'

// ============================================
// PROCESS TIMELINE COMPONENT
// Based on SPEC-006 Service Pages
// 4-step visual timeline: Konsultacja -> Strategia -> Realizacja -> Optymalizacja
// ============================================

export function ProcessTimeline({
  heading,
  steps,
}: ProcessTimelineProps) {
  return (
    <section
      data-testid="process-timeline"
      className="py-16 md:py-24 bg-charcoal-900"
    >
      <Container>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {heading}
        </h2>

        {/* Timeline - Vertical on mobile, Horizontal on desktop */}
        <div className="relative">
          {/* Desktop: Horizontal layout */}
          <div className="hidden lg:block">
            {/* Connecting line */}
            <div
              className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-charcoal-700"
              aria-hidden="true"
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full bg-royal-red-700 text-white text-2xl font-bold mb-6 shadow-button">
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-charcoal-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical layout */}
          <div className="lg:hidden">
            <div className="relative pl-8">
              {/* Connecting line */}
              <div
                className="absolute top-0 bottom-0 left-4 w-0.5 bg-charcoal-700"
                aria-hidden="true"
              />

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Step Number */}
                    <div className="relative z-10 flex-shrink-0 -ml-8 w-12 h-12 flex items-center justify-center rounded-full bg-royal-red-700 text-white text-xl font-bold shadow-button">
                      {step.number}
                    </div>

                    <div>
                      {/* Step Title */}
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-charcoal-400">
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
