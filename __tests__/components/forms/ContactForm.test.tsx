import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '@/components/forms/ContactForm'

// ============================================
// CONTACT FORM COMPONENT TESTS
// Phase 2: Task 2.1
// ============================================

// Mock server action
const mockSubmitAction = vi.fn()

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockSubmitAction.mockResolvedValue({ success: true, message: 'Wiadomosc wyslana!' })
  })

  // Test 1: Form renders all required fields
  it('renders all required fields', () => {
    render(<ContactForm submitAction={mockSubmitAction} />)

    // Check for required field labels (using exact match where needed)
    expect(screen.getByLabelText(/imie i nazwisko\*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^email\*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^firma$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/wielkosc firmy\*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/czym jestes zainteresowany/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^wiadomosc\*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/zgoda rodo\*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^newsletter/i)).toBeInTheDocument()

    // Check for submit button
    expect(screen.getByRole('button', { name: /wyslij wiadomosc/i })).toBeInTheDocument()
  })

  // Test 2: Form submission triggers validation
  it('shows validation errors on empty submit', async () => {
    const user = userEvent.setup()
    render(<ContactForm submitAction={mockSubmitAction} />)

    const submitButton = screen.getByRole('button', { name: /wyslij wiadomosc/i })
    await user.click(submitButton)

    await waitFor(() => {
      // Check for error messages
      expect(screen.getByText(/imie i nazwisko musi miec co najmniej 2 znaki/i)).toBeInTheDocument()
    })

    // Submit action should not be called
    expect(mockSubmitAction).not.toHaveBeenCalled()
  })

  // Test 3: Error states display correctly
  it('displays field-level error messages', async () => {
    const user = userEvent.setup()
    render(<ContactForm submitAction={mockSubmitAction} />)

    // Fill in just the name with too short value
    const nameInput = screen.getByLabelText(/imie i nazwisko\*/i)
    await user.type(nameInput, 'A')

    // Fill invalid email
    const emailInput = screen.getByLabelText(/^email\*/i)
    await user.type(emailInput, 'invalid-email')

    // Submit
    const submitButton = screen.getByRole('button', { name: /wyslij wiadomosc/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/imie i nazwisko musi miec co najmniej 2 znaki/i)).toBeInTheDocument()
      expect(screen.getByText(/nieprawidlowy format/i)).toBeInTheDocument()
    })
  })

  // Test 4: Success state renders
  it('shows success message after successful submission', async () => {
    const user = userEvent.setup()
    mockSubmitAction.mockResolvedValue({ success: true, message: 'Dziekujemy za wiadomosc!' })

    render(<ContactForm submitAction={mockSubmitAction} />)

    // Fill all required fields using role selectors for textareas
    await user.type(screen.getByLabelText(/imie i nazwisko\*/i), 'Jan Kowalski')
    await user.type(screen.getByLabelText(/^email\*/i), 'jan@firma.pl')
    await user.selectOptions(screen.getByLabelText(/wielkosc firmy\*/i), 'msp')
    await user.selectOptions(screen.getByLabelText(/czym jestes zainteresowany/i), 'content')
    await user.type(screen.getByRole('textbox', { name: /^wiadomosc\*/i }), 'Chce dowiedziec sie wiecej o waszych uslugach.')
    await user.click(screen.getByLabelText(/zgoda rodo\*/i))

    // Submit
    const submitButton = screen.getByRole('button', { name: /wyslij wiadomosc/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/dziekujemy za wiadomosc/i)).toBeInTheDocument()
    })
  })

  // Test 5: Loading state during submission
  it('shows loading state during submission', async () => {
    const user = userEvent.setup()

    // Make submit action slow
    mockSubmitAction.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({ success: true, message: 'OK' }), 1000))
    )

    render(<ContactForm submitAction={mockSubmitAction} />)

    // Fill all required fields
    await user.type(screen.getByLabelText(/imie i nazwisko\*/i), 'Jan Kowalski')
    await user.type(screen.getByLabelText(/^email\*/i), 'jan@firma.pl')
    await user.selectOptions(screen.getByLabelText(/wielkosc firmy\*/i), 'msp')
    await user.selectOptions(screen.getByLabelText(/czym jestes zainteresowany/i), 'content')
    await user.type(screen.getByRole('textbox', { name: /^wiadomosc\*/i }), 'Chce dowiedziec sie wiecej o waszych uslugach.')
    await user.click(screen.getByLabelText(/zgoda rodo\*/i))

    // Submit
    const submitButton = screen.getByRole('button', { name: /wyslij wiadomosc/i })
    await user.click(submitButton)

    // Check loading state
    await waitFor(() => {
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
      expect(submitButton).toBeDisabled()
    })
  })
})
