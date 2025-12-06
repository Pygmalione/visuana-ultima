import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// ============================================
// CONTACT PAGE TESTS
// Phase 4: Task 4.1
// Updated for SPEC-007 responsive layout
// ============================================

// Mock server action
vi.mock('../../../app/kontakt/actions', () => ({
  submitContactForm: vi.fn().mockResolvedValue({ success: true, message: 'OK' }),
}))

// Import page component
import ContactPage from '../../../app/kontakt/page'

describe('ContactPage', () => {
  // Test 1: Page renders hero section
  it('renders hero section with correct heading', () => {
    render(<ContactPage />)

    expect(screen.getByRole('heading', { level: 1, name: /zacznijmy wspolprace/i })).toBeInTheDocument()
    expect(screen.getByText(/bezplatna konsultacja/i)).toBeInTheDocument()
  })

  // Test 2: Two-column layout renders
  it('renders two-column layout with form and contact info', () => {
    render(<ContactPage />)

    // Check form is present
    expect(screen.getByRole('form', { name: /formularz kontaktowy/i })).toBeInTheDocument()

    // Check contact info is present - use getAllByRole since ContactInfo renders twice for mobile/desktop
    const emailLinks = screen.getAllByRole('link', { name: /karol@visuana.pl/i })
    expect(emailLinks.length).toBeGreaterThanOrEqual(1)
  })

  // Test 3: FAQ section renders
  it('renders FAQ section with questions', () => {
    render(<ContactPage />)

    expect(screen.getByText(/jak szybko odpowiadacie/i)).toBeInTheDocument()
    expect(screen.getByText(/ile kosztuje konsultacja/i)).toBeInTheDocument()
    expect(screen.getByText(/z jakimi firmami pracujecie/i)).toBeInTheDocument()
  })

  // Test 4: Social links are present (multiple due to responsive layout)
  it('renders social links', () => {
    render(<ContactPage />)

    // Use getAllByRole since social links appear twice for mobile/desktop layout
    const linkedInLinks = screen.getAllByRole('link', { name: /linkedin/i })
    expect(linkedInLinks.length).toBeGreaterThanOrEqual(1)
  })
})
