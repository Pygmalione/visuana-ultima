'use client'

import { ProblemSectionProps } from '@/types/service'
import { Container } from '@/components/layout/container'

// ============================================
// PROBLEM SECTION COMPONENT
// Based on SPEC-006 Service Pages
// Displays pain points to resonate with target audience
// ============================================

export function ProblemSection({
  heading,
  painPoints,
  hookText,
}: ProblemSectionProps) {
  return (
    <section
      data-testid="problem-section"
      className="py-16 md:py-24 bg-charcoal-50"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-12">
            {heading}
          </h2>

          {/* Pain Points */}
          <ul className="space-y-6 mb-12">
            {painPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-left p-4 bg-white rounded-lg shadow-card"
              >
                {/* X Icon indicating problem */}
                <span
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-royal-red-100 text-royal-red-700"
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

          {/* Hook Text - transition to solution */}
          <p className="text-xl md:text-2xl font-semibold text-royal-red-700 italic">
            {hookText}
          </p>
        </div>
      </Container>
    </section>
  )
}

ProblemSection.displayName = 'ProblemSection'
