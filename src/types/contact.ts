// ============================================
// CONTACT FORM TYPES - SPEC-007
// ============================================

/**
 * Company size categories for lead qualification
 */
export type CompanySize = 'jdg' | 'msp' | 'enterprise' | 'other'

/**
 * Service type categories
 */
export type ServiceType = 'content' | 'influencer' | 'asia' | 'ai' | 'other'

/**
 * Contact form data interface
 */
export interface ContactFormData {
  // Basic info
  name: string
  email: string
  company?: string

  // Lead qualification
  companySize: CompanySize
  service: ServiceType

  // Message
  message: string

  // Consent
  gdprConsent: boolean
  newsletterConsent?: boolean

  // Anti-bot (honeypot)
  website?: string
}

/**
 * Contact form response from server action
 */
export interface ContactFormResponse {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

/**
 * Company size options for Select component
 */
export const COMPANY_SIZE_OPTIONS: { value: CompanySize; label: string }[] = [
  { value: 'jdg', label: 'JDG / Freelancer' },
  { value: 'msp', label: 'MSP (2-50 pracownikow)' },
  { value: 'enterprise', label: 'Enterprise (50+ pracownikow)' },
  { value: 'other', label: 'Inny' },
]

/**
 * Service type options for Select component
 */
export const SERVICE_OPTIONS: { value: ServiceType; label: string }[] = [
  { value: 'content', label: 'Content Marketing' },
  { value: 'influencer', label: 'Influencer Marketing' },
  { value: 'asia', label: 'Market Research Azja' },
  { value: 'ai', label: 'AI & Automatyzacja' },
  { value: 'other', label: 'Nie wiem jeszcze / Konsultacja' },
]
