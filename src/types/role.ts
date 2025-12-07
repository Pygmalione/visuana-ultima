/**
 * Role Types - SPEC-011 Role Pages
 *
 * Type definitions for role-specific landing pages
 * URL pattern: /dla-[role] (e.g., /dla-ceo, /dla-cmo)
 */

// ============================================
// CHALLENGE TYPE
// ============================================

export interface RoleChallenge {
  id: string
  title: string
  description: string
  icon: string
}

// ============================================
// SOLUTION TYPE
// ============================================

export interface RoleSolution {
  id: string
  title: string
  description: string
  benefits: string[]
  icon: string
}

// ============================================
// TESTIMONIAL TYPE
// ============================================

export interface RoleTestimonial {
  quote: string
  author: string
  title: string
  company: string
}

// ============================================
// INDUSTRY LINK TYPE (for navigation)
// ============================================

export interface RoleIndustryLink {
  id: string
  name: string
  slug: string
  description: string
}

// ============================================
// MAIN ROLE TYPE
// ============================================

export interface Role {
  id: string
  slug: string
  name: string
  headline: string
  subheadline: string
  metaTitle: string
  metaDescription: string
  challenges: RoleChallenge[]
  solutions: RoleSolution[]
  testimonial: RoleTestimonial
  industries: RoleIndustryLink[]
  ctaText: string
  ctaDescription: string
}

// ============================================
// ROLE SLUG TYPE
// ============================================

export type RoleSlug =
  | 'ceo'
  | 'cmo'
  | 'marketing-director'
  | 'growth'
  | 'content-manager'
  | 'founder'

// ============================================
// ROLE MAP TYPE
// ============================================

export type RoleMap = Record<RoleSlug, Role>
