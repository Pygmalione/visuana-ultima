import { describe, it, expect } from 'vitest'
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact'

// ============================================
// CONTACT FORM VALIDATION TESTS
// Phase 1: Task 1.1
// ============================================

describe('contactFormSchema', () => {
  // Test 1: Required fields validation
  it('validates required fields correctly', () => {
    const validData: ContactFormData = {
      name: 'Jan Kowalski',
      email: 'jan@firma.pl',
      message: 'Chcę dowiedzieć się więcej o waszych usługach.',
      companySize: 'msp',
      service: 'content',
      gdprConsent: true,
    }

    const result = contactFormSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('rejects when required fields are missing', () => {
    const invalidData = {
      name: '',
      email: '',
      message: '',
      gdprConsent: false,
    }

    const result = contactFormSchema.safeParse(invalidData)
    expect(result.success).toBe(false)

    if (!result.success) {
      const fieldNames = result.error.issues.map((i) => i.path[0])
      expect(fieldNames).toContain('name')
      expect(fieldNames).toContain('email')
      expect(fieldNames).toContain('message')
      expect(fieldNames).toContain('companySize')
      expect(fieldNames).toContain('service')
    }
  })

  // Test 2: Email format validation
  it('validates email format correctly', () => {
    const invalidEmails = [
      'invalid',
      'invalid@',
      '@invalid.com',
      'invalid@.com',
      'invalid.com',
    ]

    invalidEmails.forEach((email) => {
      const data = {
        name: 'Jan Kowalski',
        email,
        message: 'Test message',
        companySize: 'msp',
        service: 'content',
        gdprConsent: true,
      }

      const result = contactFormSchema.safeParse(data)
      expect(result.success).toBe(false)
    })
  })

  it('accepts valid email formats', () => {
    const validEmails = [
      'jan@firma.pl',
      'jan.kowalski@firma.com',
      'jan+test@firma.co.uk',
      'jan123@firma123.pl',
    ]

    validEmails.forEach((email) => {
      const data = {
        name: 'Jan Kowalski',
        email,
        message: 'Test message',
        companySize: 'msp',
        service: 'content',
        gdprConsent: true,
      }

      const result = contactFormSchema.safeParse(data)
      expect(result.success).toBe(true)
    })
  })

  // Test 3: Optional fields
  it('allows optional fields to be omitted', () => {
    const dataWithoutOptional = {
      name: 'Jan Kowalski',
      email: 'jan@firma.pl',
      message: 'Test message',
      companySize: 'msp',
      service: 'content',
      gdprConsent: true,
      // company and newsletterConsent are omitted
    }

    const result = contactFormSchema.safeParse(dataWithoutOptional)
    expect(result.success).toBe(true)
  })

  it('accepts optional fields when provided', () => {
    const dataWithOptional = {
      name: 'Jan Kowalski',
      email: 'jan@firma.pl',
      company: 'Firma XYZ',
      message: 'Test message',
      companySize: 'msp',
      service: 'content',
      gdprConsent: true,
      newsletterConsent: true,
    }

    const result = contactFormSchema.safeParse(dataWithOptional)
    expect(result.success).toBe(true)

    if (result.success) {
      expect(result.data.company).toBe('Firma XYZ')
      expect(result.data.newsletterConsent).toBe(true)
    }
  })

  // Test 4: GDPR consent required
  it('requires GDPR consent to be true', () => {
    const dataWithoutConsent = {
      name: 'Jan Kowalski',
      email: 'jan@firma.pl',
      message: 'Test message',
      companySize: 'msp',
      service: 'content',
      gdprConsent: false,
    }

    const result = contactFormSchema.safeParse(dataWithoutConsent)
    expect(result.success).toBe(false)

    if (!result.success) {
      const gdprError = result.error.issues.find((i) => i.path[0] === 'gdprConsent')
      expect(gdprError).toBeDefined()
    }
  })

  it('passes when GDPR consent is true', () => {
    const dataWithConsent = {
      name: 'Jan Kowalski',
      email: 'jan@firma.pl',
      message: 'Test message',
      companySize: 'msp',
      service: 'content',
      gdprConsent: true,
    }

    const result = contactFormSchema.safeParse(dataWithConsent)
    expect(result.success).toBe(true)
  })
})
