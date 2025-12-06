import { ReactNode } from 'react'

// ============================================
// SERVICE PAGE TYPES - SPEC-006
// ============================================

// Service Hero
export interface ServiceHeroProps {
  title: string
  subtitle: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel?: string
  ctaSecondaryHref?: string
  backgroundGradient?: 'royal-red' | 'charcoal' | 'dark'
}

// Problem Section
export interface ProblemSectionProps {
  heading: string
  painPoints: string[]
  hookText: string
}

// Solution Section
export type FeatureIcon = 'search' | 'edit' | 'chart' | 'share' | 'users' | 'globe' | 'bot' | 'check' | 'shield' | 'zap' | 'target' | 'handshake'

export interface Feature {
  icon: FeatureIcon
  title: string
  description: string
}

export interface SolutionSectionProps {
  heading: string
  features: Feature[]
}

// Process Timeline
export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface ProcessTimelineProps {
  heading: string
  steps: ProcessStep[]
}

// FAQ Accordion
export interface FAQItem {
  question: string
  answer: string
}

export interface FAQAccordionProps {
  heading: string
  items: FAQItem[]
}

// Case Study Card
export interface CaseStudyCardProps {
  clientName: string
  industry: string
  metric: string
  metricLabel: string
  description: string
  link: string
  logo?: string
}

// Service CTA
export interface ServiceCTAProps {
  heading: string
  description?: string
  buttonLabel: string
  buttonHref: string
  variant?: 'royal-red' | 'charcoal' | 'gradient'
}

// Service Page Data (composite)
export interface ServicePageData {
  // SEO
  title: string
  metaDescription: string
  keywords: string[]

  // Hero
  hero: ServiceHeroProps

  // Problem
  problem: ProblemSectionProps

  // Solution
  solution: SolutionSectionProps

  // Process
  process: ProcessTimelineProps

  // Case Studies
  caseStudies: CaseStudyCardProps[]

  // FAQ
  faq: FAQAccordionProps

  // CTA
  cta: ServiceCTAProps

  // JSON-LD Schema
  schema: ServiceSchema
}

// JSON-LD Service Schema
export interface ServiceSchema {
  '@context': 'https://schema.org'
  '@type': 'Service'
  name: string
  description: string
  provider: {
    '@type': 'Organization'
    name: string
    url: string
  }
  areaServed?: string
  serviceType?: string
}

// FAQ Schema for Google
export interface FAQPageSchema {
  '@context': 'https://schema.org'
  '@type': 'FAQPage'
  mainEntity: {
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }[]
}
