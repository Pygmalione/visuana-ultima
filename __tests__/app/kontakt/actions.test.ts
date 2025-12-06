import { describe, it, expect, vi, beforeEach } from 'vitest'

// ============================================
// SERVER ACTION TESTS
// Phase 3: Task 3.1
// ============================================

// Create mock send function that we can spy on
const mockSend = vi.fn().mockResolvedValue({ id: 'test-email-id' })

// Mock Resend as a class
vi.mock('resend', () => ({
  Resend: class MockResend {
    emails = {
      send: mockSend,
    }
  },
}))

// Mock email templates
vi.mock('@/lib/email/contact-notification', () => ({
  ContactNotificationEmail: vi.fn().mockReturnValue(null),
}))

vi.mock('@/lib/email/contact-confirmation', () => ({
  ContactConfirmationEmail: vi.fn().mockReturnValue(null),
}))

// Import action directly (not using alias for app dir)
import { submitContactForm } from '../../../app/kontakt/actions'

describe('submitContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSend.mockResolvedValue({ id: 'test-email-id' })
  })

  // Test 1: Successful form submission
  it('returns success for valid form data', async () => {
    const validData = {
      name: 'Jan Kowalski',
      email: 'jan@firma.pl',
      message: 'Chce dowiedziec sie wiecej o waszych uslugach.',
      companySize: 'msp' as const,
      service: 'content' as const,
      gdprConsent: true,
    }

    const result = await submitContactForm(validData)

    expect(result.success).toBe(true)
    expect(result.message).toContain('Dziekujemy')
  })

  // Test 2: Validation rejection on server
  it('rejects invalid form data', async () => {
    const invalidData = {
      name: '',
      email: 'invalid-email',
      message: 'short',
      companySize: 'msp' as const,
      service: 'content' as const,
      gdprConsent: false,
    }

    const result = await submitContactForm(invalidData)

    expect(result.success).toBe(false)
    expect(result.errors).toBeDefined()
  })

  // Test 3: Honeypot detection
  it('detects honeypot submissions', async () => {
    const honeypotData = {
      name: 'Jan Kowalski',
      email: 'jan@firma.pl',
      message: 'Chce dowiedziec sie wiecej o waszych uslugach.',
      companySize: 'msp' as const,
      service: 'content' as const,
      gdprConsent: true,
      website: 'http://spam.com', // Honeypot filled = bot
    }

    const result = await submitContactForm(honeypotData)

    // Should return success silently (don't alert bots)
    expect(result.success).toBe(true)
    expect(result.message).toContain('Dziekujemy')
  })

  // Test 4: Email service is called on success
  it('sends emails on successful submission', async () => {
    const validData = {
      name: 'Jan Kowalski',
      email: 'jan@firma.pl',
      message: 'Chce dowiedziec sie wiecej o waszych uslugach.',
      companySize: 'msp' as const,
      service: 'content' as const,
      gdprConsent: true,
    }

    const result = await submitContactForm(validData)

    expect(result.success).toBe(true)
    // Email mock should be called twice (admin + user)
    expect(mockSend).toHaveBeenCalledTimes(2)
  })

  // Test 5: Handles optional fields correctly
  it('handles optional fields correctly', async () => {
    const dataWithOptional = {
      name: 'Jan Kowalski',
      email: 'jan@firma.pl',
      company: 'Firma XYZ',
      message: 'Chce dowiedziec sie wiecej o waszych uslugach.',
      companySize: 'msp' as const,
      service: 'content' as const,
      gdprConsent: true,
      newsletterConsent: true,
    }

    const result = await submitContactForm(dataWithOptional)

    expect(result.success).toBe(true)
  })
})
