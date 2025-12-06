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

// ============================================
// SERVICE PAGE TEMPLATE COMPONENT
// Based on SPEC-006 Service Pages
// Composite template combining all service page sections
// ============================================

interface ServicePageTemplateProps {
  data: Omit<ServicePageData, 'title' | 'metaDescription' | 'keywords' | 'schema'>
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
      {caseStudies && caseStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 text-center mb-12">
              Wyniki, ktore mowia same za siebie
            </h2>

            <div className={`grid gap-8 ${caseStudies.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-2 max-w-4xl mx-auto'}`}>
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyCard key={index} {...caseStudy} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ Section */}
      <FAQAccordion {...faq} />

      {/* CTA Section */}
      <ServiceCTA {...cta} />
    </main>
  )
}

ServicePageTemplate.displayName = 'ServicePageTemplate'
