/**
 * Industry Types - SPEC-011 Industry Pages
 *
 * Type definitions for industry-specific landing pages
 */

// ============================================
// PAIN POINT TYPE
// ============================================

export interface IndustryPainPoint {
  id: string
  title: string
  description: string
  icon: string
}

// ============================================
// SOLUTION TYPE
// ============================================

export interface IndustrySolution {
  id: string
  title: string
  description: string
  benefits: string[]
  icon: string
}

// ============================================
// FAQ TYPE
// ============================================

export interface IndustryFAQ {
  question: string
  answer: string
}

// ============================================
// CASE STUDY TYPE
// ============================================

export interface IndustryCaseStudy {
  title: string
  description: string
  metrics: {
    value: string
    label: string
  }[]
  link?: string
}

// ============================================
// ROLE NAVIGATION TYPE
// ============================================

export interface IndustryRole {
  id: string
  name: string
  slug: string
  description: string
}

// ============================================
// MAIN INDUSTRY TYPE
// ============================================

export interface Industry {
  id: string
  slug: string
  name: string
  headline: string
  valueProps: string[]
  metaTitle: string
  metaDescription: string
  painPoints: IndustryPainPoint[]
  solutions: IndustrySolution[]
  caseStudy: IndustryCaseStudy
  faqs: IndustryFAQ[]
  relatedRoles: IndustryRole[]
}

// ============================================
// INDUSTRY SLUG TYPE
// ============================================

export type IndustrySlug =
  | 'saas'
  | 'ecommerce'
  | 'uslugi-profesjonalne'
  | 'medtech'
  | 'fintech'
  | 'produkcja'
  | 'edtech'
  | 'nieruchomosci'

// ============================================
// INDUSTRY MAP TYPE
// ============================================

export type IndustryMap = Record<IndustrySlug, Industry>
