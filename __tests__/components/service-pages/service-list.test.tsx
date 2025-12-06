import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import ServiceListPage from '@/app/uslugi/page'

// ============================================
// SERVICE LIST PAGE TESTS
// SPEC-006: Service Pages - Phase 6
// TDD: Red -> Green -> Refactor
// ============================================

describe('Service List Page', () => {
  it('renders correct H1 heading', () => {
    render(<ServiceListPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Nasze uslugi/i
    )
  })

  it('renders all 4 service cards', () => {
    render(<ServiceListPage />)

    // Check for all 4 service titles
    expect(screen.getByText(/Content Marketing/i)).toBeInTheDocument()
    expect(screen.getByText(/Influencer Marketing/i)).toBeInTheDocument()
    expect(screen.getByText(/Market Research Azja/i)).toBeInTheDocument()
    expect(screen.getByText(/AI Agents/i)).toBeInTheDocument()
  })

  it('renders service cards with correct links to individual pages', () => {
    render(<ServiceListPage />)

    // Check links to service pages
    const contentMarketingLink = screen.getByRole('link', { name: /content marketing/i })
    expect(contentMarketingLink).toHaveAttribute('href', '/uslugi/content-marketing')

    const influencerLink = screen.getByRole('link', { name: /influencer marketing/i })
    expect(influencerLink).toHaveAttribute('href', '/uslugi/influencer-marketing')

    const asiaLink = screen.getByRole('link', { name: /market research azja/i })
    expect(asiaLink).toHaveAttribute('href', '/uslugi/market-research-azja')

    const aiLink = screen.getByRole('link', { name: /ai agents/i })
    expect(aiLink).toHaveAttribute('href', '/uslugi/ai-agents')
  })

  it('includes JSON-LD Organization schema with services', () => {
    render(<ServiceListPage />)

    // Find script tag with JSON-LD schema
    const scriptTags = document.querySelectorAll('script[type="application/ld+json"]')
    expect(scriptTags.length).toBeGreaterThan(0)

    // Parse and verify schema content
    const schemas = Array.from(scriptTags).map(tag => JSON.parse(tag.textContent || '{}'))
    const orgSchema = schemas.find(s => s['@type'] === 'Organization')

    expect(orgSchema).toBeDefined()
    expect(orgSchema?.name).toBe('Visuana')
    expect(orgSchema?.hasOfferCatalog).toBeDefined()
    expect(orgSchema?.hasOfferCatalog?.itemListElement?.length).toBe(4)
  })

  it('renders subheader text', () => {
    render(<ServiceListPage />)
    expect(screen.getByText(/Kompleksowe wsparcie marketingowe dla Twojego biznesu/i)).toBeInTheDocument()
  })

  it('renders CTA section at the bottom', () => {
    render(<ServiceListPage />)
    expect(screen.getByTestId('service-list-cta')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /bezplatna konsultacja/i })).toHaveAttribute('href', '/kontakt')
  })
})
