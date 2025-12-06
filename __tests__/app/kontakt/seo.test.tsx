import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// ============================================
// CONTACT PAGE SEO TESTS
// Phase 5: Task 5.1
// ============================================

// Mock server action
vi.mock('../../../app/kontakt/actions', () => ({
  submitContactForm: vi.fn().mockResolvedValue({ success: true, message: 'OK' }),
}))

// Import page and metadata
import ContactPage, { metadata } from '../../../app/kontakt/page'

describe('ContactPage SEO', () => {
  // Test 1: Page title is correct
  it('has correct page title', () => {
    expect(metadata.title).toBe('Kontakt | Visuana Ultima - Marketing AI-Powered')
  })

  // Test 2: JSON-LD schema is present in page
  it('renders JSON-LD ContactPage schema', () => {
    render(<ContactPage />)

    // Find the JSON-LD script
    const jsonLdScript = document.querySelector('script[type="application/ld+json"]')
    expect(jsonLdScript).toBeInTheDocument()

    // Parse and verify the content
    const jsonLd = JSON.parse(jsonLdScript?.textContent || '{}')
    expect(jsonLd['@type']).toBe('ContactPage')
    expect(jsonLd.mainEntity['@type']).toBe('Organization')
    expect(jsonLd.mainEntity.email).toBe('karol@visuana.pl')
  })

  // Test 3: Meta description is set
  it('has correct meta description', () => {
    expect(metadata.description).toContain('Visuana Ultima')
    expect(metadata.description).toContain('Bezplatna konsultacja')
  })

  // Test 4: Open Graph tags are set
  it('has Open Graph metadata', () => {
    expect(metadata.openGraph?.title).toContain('Kontakt')
    expect(metadata.openGraph?.type).toBe('website')
  })
})
