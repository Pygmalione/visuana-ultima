import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MarketResearchAsiaPage from '@/app/uslugi/market-research-azja/page'

// ============================================
// MARKET RESEARCH ASIA PAGE TESTS
// SPEC-006: Service Pages - Phase 4
// ============================================

describe('Market Research Asia Page', () => {
  it('renders correct H1 heading', () => {
    render(<MarketResearchAsiaPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Twoj partner do ekspansji na rynki azjatyckie/i
    )
  })

  it('includes all required sections', () => {
    render(<MarketResearchAsiaPage />)

    // Hero section
    expect(screen.getByTestId('service-hero')).toBeInTheDocument()

    // Problem section
    expect(screen.getByTestId('problem-section')).toBeInTheDocument()

    // Solution section
    expect(screen.getByTestId('solution-section')).toBeInTheDocument()

    // Process timeline
    expect(screen.getByTestId('process-timeline')).toBeInTheDocument()

    // FAQ section
    expect(screen.getByTestId('faq-accordion')).toBeInTheDocument()

    // CTA section
    expect(screen.getByTestId('service-cta')).toBeInTheDocument()
  })

  it('includes JSON-LD Service schema', () => {
    render(<MarketResearchAsiaPage />)

    const scriptTags = document.querySelectorAll('script[type="application/ld+json"]')
    expect(scriptTags.length).toBeGreaterThan(0)

    const schemas = Array.from(scriptTags).map(tag => JSON.parse(tag.textContent || '{}'))
    const serviceSchema = schemas.find(s => s['@type'] === 'Service')

    expect(serviceSchema).toBeDefined()
    expect(serviceSchema?.name).toContain('Market Research')
  })
})
