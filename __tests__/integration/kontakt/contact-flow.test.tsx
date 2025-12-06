import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// ============================================
// CONTACT PAGE INTEGRATION TESTS
// Phase 7: Task 7.3
// E2E-like integration tests for contact form flow
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

// Import components and actions using relative paths for app directory
import { ContactForm } from '@/components/forms/ContactForm'
import { submitContactForm } from '../../../app/kontakt/actions'

describe('Contact Form Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSend.mockResolvedValue({ id: 'test-email-id' })
  })

  // Integration Test 1: E2E Complete form submission flow
  it('completes full form submission flow from input to success', async () => {
    const user = userEvent.setup()

    render(<ContactForm submitAction={submitContactForm} />)

    // Step 1: Fill in all required fields
    await user.type(screen.getByLabelText(/imie i nazwisko\*/i), 'Jan Kowalski')
    await user.type(screen.getByLabelText(/^email\*/i), 'jan@testowa-firma.pl')
    await user.type(screen.getByLabelText(/^firma$/i), 'Testowa Firma Sp. z o.o.')
    await user.selectOptions(screen.getByLabelText(/wielkosc firmy\*/i), 'msp')
    await user.selectOptions(screen.getByLabelText(/czym jestes zainteresowany/i), 'content')
    await user.type(
      screen.getByRole('textbox', { name: /^wiadomosc\*/i }),
      'Potrzebujemy pomocy w strategii content marketingowej dla naszego e-commerce.'
    )
    await user.click(screen.getByLabelText(/zgoda rodo\*/i))

    // Step 2: Submit the form
    const submitButton = screen.getByRole('button', { name: /wyslij wiadomosc/i })
    await user.click(submitButton)

    // Step 3: Verify success state is shown
    await waitFor(() => {
      expect(screen.getByTestId('success-message')).toBeInTheDocument()
      expect(screen.getByText(/dziekujemy za wiadomosc/i)).toBeInTheDocument()
    })

    // Step 4: Verify emails were sent (admin + user confirmation)
    expect(mockSend).toHaveBeenCalledTimes(2)
  })

  // Integration Test 2: Form to server action validation integration
  it('integrates form validation with server action validation', async () => {
    const user = userEvent.setup()

    render(<ContactForm submitAction={submitContactForm} />)

    // Fill with invalid data that passes client validation but fails server
    await user.type(screen.getByLabelText(/imie i nazwisko\*/i), 'X') // Too short
    await user.type(screen.getByLabelText(/^email\*/i), 'jan@firma.pl')
    await user.selectOptions(screen.getByLabelText(/wielkosc firmy\*/i), 'msp')
    await user.selectOptions(screen.getByLabelText(/czym jestes zainteresowany/i), 'content')
    await user.type(screen.getByRole('textbox', { name: /^wiadomosc\*/i }), 'Testowa wiadomosc')
    await user.click(screen.getByLabelText(/zgoda rodo\*/i))

    // Submit
    const submitButton = screen.getByRole('button', { name: /wyslij wiadomosc/i })
    await user.click(submitButton)

    // Verify client-side validation error is shown (not server error)
    await waitFor(() => {
      expect(screen.getByText(/imie i nazwisko musi miec co najmniej 2 znaki/i)).toBeInTheDocument()
    })

    // Email should not be sent due to validation failure
    expect(mockSend).not.toHaveBeenCalled()
  })

  // Integration Test 3: Server action to email service integration (mocked)
  it('correctly passes form data to email service', async () => {
    const user = userEvent.setup()

    render(<ContactForm submitAction={submitContactForm} />)

    // Fill form with specific data
    const testName = 'Anna Testowa'
    const testEmail = 'anna@test.pl'
    const testCompany = 'Test Company'
    const testMessage = 'To jest testowa wiadomosc dla integracji.'

    await user.type(screen.getByLabelText(/imie i nazwisko\*/i), testName)
    await user.type(screen.getByLabelText(/^email\*/i), testEmail)
    await user.type(screen.getByLabelText(/^firma$/i), testCompany)
    // Use valid companySize values: 'jdg' | 'msp' | 'enterprise' | 'other'
    await user.selectOptions(screen.getByLabelText(/wielkosc firmy\*/i), 'jdg')
    await user.selectOptions(screen.getByLabelText(/czym jestes zainteresowany/i), 'influencer')
    await user.type(screen.getByRole('textbox', { name: /^wiadomosc\*/i }), testMessage)
    await user.click(screen.getByLabelText(/zgoda rodo\*/i))

    // Submit
    await user.click(screen.getByRole('button', { name: /wyslij wiadomosc/i }))

    // Wait for submission to complete
    await waitFor(() => {
      expect(screen.getByTestId('success-message')).toBeInTheDocument()
    })

    // Verify email service was called with correct data
    expect(mockSend).toHaveBeenCalledTimes(2)

    // First call should be admin notification
    const adminCall = mockSend.mock.calls[0][0]
    expect(adminCall.to).toContain('karol@visuana.pl')

    // Second call should be user confirmation
    const userCall = mockSend.mock.calls[1][0]
    expect(userCall.to).toContain(testEmail)
  })

  // Integration Test 4: Optional newsletter consent is saved correctly
  it('handles newsletter consent in form submission', async () => {
    const user = userEvent.setup()

    render(<ContactForm submitAction={submitContactForm} />)

    // Fill required fields
    await user.type(screen.getByLabelText(/imie i nazwisko\*/i), 'Piotr Newsletter')
    await user.type(screen.getByLabelText(/^email\*/i), 'piotr@newsletter.pl')
    await user.selectOptions(screen.getByLabelText(/wielkosc firmy\*/i), 'jdg')
    await user.selectOptions(screen.getByLabelText(/czym jestes zainteresowany/i), 'ai')
    await user.type(screen.getByRole('textbox', { name: /^wiadomosc\*/i }), 'Chce zapisac sie na newsletter.')
    await user.click(screen.getByLabelText(/zgoda rodo\*/i))

    // Also check newsletter consent
    await user.click(screen.getByLabelText(/^newsletter/i))

    // Submit
    await user.click(screen.getByRole('button', { name: /wyslij wiadomosc/i }))

    // Wait for success
    await waitFor(() => {
      expect(screen.getByTestId('success-message')).toBeInTheDocument()
    })

    // Verify submission was successful with newsletter consent
    expect(mockSend).toHaveBeenCalledTimes(2)
  })

  // Integration Test 5: Honeypot prevents bot submissions
  it('silently rejects honeypot submissions without calling email service', async () => {
    // Directly test the server action with honeypot filled
    const honeypotData = {
      name: 'Bot User',
      email: 'bot@spam.com',
      message: 'This is spam message from a bot.',
      companySize: 'msp' as const,
      service: 'content' as const,
      gdprConsent: true,
      website: 'http://spam-link.com', // Honeypot field filled = bot
    }

    const result = await submitContactForm(honeypotData)

    // Should return success silently (don't alert bots)
    expect(result.success).toBe(true)

    // But email service should NOT be called
    expect(mockSend).not.toHaveBeenCalled()
  })
})
