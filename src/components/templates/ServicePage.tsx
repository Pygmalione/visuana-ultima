'use client'

import { ServicePageData } from '@/types/service'
import { ServiceHero } from '@/components/sections/service-hero'
import { ProblemSection } from '@/components/sections/problem-section'
import { SolutionSection } from '@/components/sections/solution-section'
import { ProcessTimeline } from '@/components/sections/process-timeline'
import { FAQAccordion } from '@/components/sections/faq-accordion'
import { ServiceCTA } from '@/components/sections/service-cta'
import { CaseStudyCard } from '@/components/cards/case-study-card'
import { Container } from '@/components/layout/container'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// SERVICE PAGE TEMPLATE COMPONENT
// Based on SPEC-006 Service Pages
// Composite template combining all service page sections
// Enhanced with scroll-triggered animations
// ============================================

interface ServicePageTemplateProps {
  data: Omit<ServicePageData, 'title' | 'metaDescription' | 'keywords' | 'schema'>
}

// Case Studies Section with scroll-triggered animations
function CaseStudiesSection({ caseStudies }: { caseStudies: ServicePageData['caseStudies'] }) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.15 })
  const shouldAnimate = !prefersReducedMotion && isInView

  if (!caseStudies || caseStudies.length === 0) return null

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <Container>
        <h2
          className={`text-3xl md:text-4xl font-bold text-charcoal-800 text-center mb-12 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
          style={{
            animationDelay: shouldAnimate ? '0ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          Wyniki, ktore mowia same za siebie
        </h2>

        <div className={`grid gap-8 ${caseStudies.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-2 max-w-4xl mx-auto'}`}>
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className={shouldAnimate ? 'animate-scale-in' : ''}
              style={{
                animationDelay: shouldAnimate ? getStaggerDelay(index, 150) : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              <CaseStudyCard {...caseStudy} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const { hero, problem, solution, process, caseStudies, faq, cta } = data

  return (
    <main>
      {/* Hero Section */}
      <ServiceHero {...hero} />

      {/* Problem Section */}
      <ProblemSection {...problem} />

      {/* Solution Section */}
      <SolutionSection {...solution} />

      {/* Process Timeline */}
      <ProcessTimeline {...process} />

      {/* Case Studies Section */}
      <CaseStudiesSection caseStudies={caseStudies} />

      {/* FAQ Section */}
      <FAQAccordion {...faq} />

      {/* CTA Section */}
      <ServiceCTA {...cta} />
    </main>
  )
}

ServicePageTemplate.displayName = 'ServicePageTemplate'
