import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'

// Import all service pages for integration testing
import ServiceListPage from '@/app/uslugi/page'
import ContentMarketingPage from '@/app/uslugi/content-marketing/page'
import InfluencerMarketingPage from '@/app/uslugi/influencer-marketing/page'
import MarketResearchAsiaPage from '@/app/uslugi/market-research-azja/page'
import AIAgentsPage from '@/app/uslugi/ai-agents/page'

// ============================================
// SERVICE PAGES INTEGRATION TESTS
// SPEC-006: Service Pages - Phase 7
// Strategic E2E and integration tests
// ============================================

describe('Service Pages Integration', () => {
  describe('E2E: Service List to Individual Service Navigation', () => {
    it('service list links match individual page URLs', () => {
      // Render service list page
      render(<ServiceListPage />)

      // Verify all 4 service links exist with correct href
      const contentLink = screen.getByRole('link', { name: /content marketing/i })
      const influencerLink = screen.getByRole('link', { name: /influencer marketing/i })
      const asiaLink = screen.getByRole('link', { name: /market research azja/i })
      const aiLink = screen.getByRole('link', { name: /ai agents/i })

      expect(contentLink).toHaveAttribute('href', '/uslugi/content-marketing')
      expect(influencerLink).toHaveAttribute('href', '/uslugi/influencer-marketing')
      expect(asiaLink).toHaveAttribute('href', '/uslugi/market-research-azja')
      expect(aiLink).toHaveAttribute('href', '/uslugi/ai-agents')
    })

    it('each individual service page has CTA section with contact link', () => {
      // Content Marketing
      const { unmount: unmount1 } = render(<ContentMarketingPage />)
      let ctaSection = screen.getByTestId('service-cta')
      expect(ctaSection).toBeInTheDocument()
      let ctaLink = within(ctaSection).getByRole('link')
      expect(ctaLink).toHaveAttribute('href', '/kontakt')
      unmount1()

      // Influencer Marketing
      const { unmount: unmount2 } = render(<InfluencerMarketingPage />)
      ctaSection = screen.getByTestId('service-cta')
      ctaLink = within(ctaSection).getByRole('link')
      expect(ctaLink).toHaveAttribute('href', '/kontakt')
      unmount2()

      // Market Research Asia
      const { unmount: unmount3 } = render(<MarketResearchAsiaPage />)
      ctaSection = screen.getByTestId('service-cta')
      ctaLink = within(ctaSection).getByRole('link')
      expect(ctaLink).toHaveAttribute('href', '/kontakt')
      unmount3()

      // AI Agents
      const { unmount: unmount4 } = render(<AIAgentsPage />)
      ctaSection = screen.getByTestId('service-cta')
      ctaLink = within(ctaSection).getByRole('link')
      expect(ctaLink).toHaveAttribute('href', '/kontakt')
      unmount4()
    })
  })

  describe('SEO: JSON-LD Schema Validation', () => {
    it('all individual service pages have valid Service schema', () => {
      const pages = [
        { component: ContentMarketingPage, name: 'Content Marketing' },
        { component: InfluencerMarketingPage, name: 'Influencer Marketing' },
        { component: MarketResearchAsiaPage, name: 'Market Research Asia' },
        { component: AIAgentsPage, name: 'AI Agents' },
      ]

      pages.forEach(({ component: Page, name }) => {
        const { unmount } = render(<Page />)

        const scriptTags = document.querySelectorAll('script[type="application/ld+json"]')
        const schemas = Array.from(scriptTags).map(tag => JSON.parse(tag.textContent || '{}'))
        const serviceSchema = schemas.find(s => s['@type'] === 'Service')

        expect(serviceSchema).toBeDefined()
        expect(serviceSchema?.['@context']).toBe('https://schema.org')
        expect(serviceSchema?.provider?.['@type']).toBe('Organization')
        expect(serviceSchema?.provider?.name).toBe('Visuana')

        unmount()
      })
    })

    it('all individual service pages have valid FAQ schema', () => {
      const pages = [
        ContentMarketingPage,
        InfluencerMarketingPage,
        MarketResearchAsiaPage,
        AIAgentsPage,
      ]

      pages.forEach((Page) => {
        const { unmount } = render(<Page />)

        const scriptTags = document.querySelectorAll('script[type="application/ld+json"]')
        const schemas = Array.from(scriptTags).map(tag => JSON.parse(tag.textContent || '{}'))
        const faqSchema = schemas.find(s => s['@type'] === 'FAQPage')

        expect(faqSchema).toBeDefined()
        expect(faqSchema?.['@context']).toBe('https://schema.org')
        expect(faqSchema?.mainEntity?.length).toBeGreaterThan(0)
        expect(faqSchema?.mainEntity?.[0]?.['@type']).toBe('Question')

        unmount()
      })
    })

    it('service list page has valid Organization schema with 4 services', () => {
      render(<ServiceListPage />)

      const scriptTags = document.querySelectorAll('script[type="application/ld+json"]')
      const schemas = Array.from(scriptTags).map(tag => JSON.parse(tag.textContent || '{}'))
      const orgSchema = schemas.find(s => s['@type'] === 'Organization')

      expect(orgSchema).toBeDefined()
      expect(orgSchema?.['@context']).toBe('https://schema.org')
      expect(orgSchema?.name).toBe('Visuana')
      expect(orgSchema?.hasOfferCatalog?.itemListElement).toHaveLength(4)

      // Verify each service in catalog
      const serviceNames = orgSchema?.hasOfferCatalog?.itemListElement.map(
        (item: { itemOffered?: { name?: string } }) => item.itemOffered?.name
      )
      expect(serviceNames).toContain('Content Marketing')
      expect(serviceNames).toContain('Influencer Marketing')
      expect(serviceNames).toContain('Market Research Azja')
      expect(serviceNames).toContain('AI Agents & Automatyzacja')
    })
  })

  describe('Accessibility: Heading Hierarchy', () => {
    it('all service pages have correct heading hierarchy (H1 -> H2)', () => {
      const pages = [
        { component: ServiceListPage, h1Pattern: /nasze uslugi/i },
        { component: ContentMarketingPage, h1Pattern: /content marketing/i },
        { component: InfluencerMarketingPage, h1Pattern: /influencer marketing/i },
        { component: MarketResearchAsiaPage, h1Pattern: /ekspansji|partner/i },
        { component: AIAgentsPage, h1Pattern: /AI w marketingu/i },
      ]

      pages.forEach(({ component: Page, h1Pattern }) => {
        const { unmount, container } = render(<Page />)

        // Check H1 exists
        const h1 = screen.getByRole('heading', { level: 1 })
        expect(h1).toBeInTheDocument()
        expect(h1.textContent).toMatch(h1Pattern)

        // Check H2s exist (for sections)
        const h2s = container.querySelectorAll('h2')
        expect(h2s.length).toBeGreaterThan(0)

        unmount()
      })
    })
  })

  describe('Responsive: Grid Layout', () => {
    it('service list page has responsive grid classes', () => {
      render(<ServiceListPage />)

      const cards = screen.getAllByTestId('service-list-card')
      expect(cards.length).toBe(4)

      // Check grid container exists (parent of cards)
      const gridContainer = cards[0].parentElement?.parentElement
      expect(gridContainer).toHaveClass('md:grid-cols-2')
    })
  })
})
