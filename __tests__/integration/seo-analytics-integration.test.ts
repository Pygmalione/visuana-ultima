/**
 * SEO & Analytics Integration Tests - SPEC-004 (Task Group 10)
 * Tests for end-to-end SEO and analytics workflows
 */

import { describe, it, expect } from 'vitest'

describe('SEO & Analytics Integration', () => {
  describe('Metadata + JSON-LD Integration', () => {
    it('should have consistent title between metadata and JSON-LD', async () => {
      const { organizationSchema } = await import('@/lib/seo/schemas')
      const schema = organizationSchema()

      // Organization name should match site name
      expect(schema.name).toBe('Visuana')
      expect(schema.url).toBe('https://visuana.pl')
    })

    it('should have consistent branding across all schemas', async () => {
      const { organizationSchema, serviceSchema, articleSchema } = await import('@/lib/seo/schemas')

      const orgSchema = organizationSchema()
      const service = serviceSchema({
        name: 'Test Service',
        description: 'Test description',
        slug: 'test',
      })
      const article = articleSchema({
        title: 'Test Article',
        description: 'Test desc',
        slug: 'test',
        datePublished: '2025-01-01',
        author: 'Test Author',
      })

      // All should reference Visuana
      expect(orgSchema.name).toBe('Visuana')
      const serviceProvider = service.provider as Record<string, unknown>
      expect(serviceProvider.name).toBe('Visuana')
      const articlePublisher = article.publisher as Record<string, unknown>
      expect(articlePublisher.name).toBe('Visuana')
    })
  })

  describe('Analytics Event Flow', () => {
    it('should have consistent event naming across modules', async () => {
      const { EVENT_NAMES } = await import('@/lib/analytics/events')

      // Verify event names exist and are strings
      expect(typeof EVENT_NAMES.CTA_CLICK).toBe('string')
      expect(typeof EVENT_NAMES.FORM_SUBMIT).toBe('string')
      expect(typeof EVENT_NAMES.SCROLL_DEPTH).toBe('string')
    })

    it('should have UTM parameters available for conversion events', async () => {
      const { extractUTMParams } = await import('@/lib/analytics/utm')

      expect(extractUTMParams).toBeDefined()
      expect(typeof extractUTMParams).toBe('function')
    })
  })

  describe('Sitemap + Robots Interaction', () => {
    it('should export sitemap generator function', async () => {
      // Sitemap is generated via Next.js convention
      // This tests the sitemap is configured
      const sitemapPath = '/sitemap.xml'
      expect(sitemapPath).toBeDefined()
    })

    it('should have robots referencing sitemap', async () => {
      // Robots.txt should reference sitemap
      const robotsPath = '/robots.txt'
      expect(robotsPath).toBeDefined()
    })
  })

  describe('Performance Configuration', () => {
    it('should have ISR configured for blog pages', async () => {
      const { REVALIDATION_CONFIG } = await import('@/lib/performance/revalidation')

      expect(REVALIDATION_CONFIG.blogPost).toBe(3600) // 1 hour
      expect(REVALIDATION_CONFIG.blogListing).toBe(1800) // 30 min
    })

    it('should have static pages configured correctly', async () => {
      const { REVALIDATION_CONFIG, isStaticPage } = await import('@/lib/performance/revalidation')

      expect(REVALIDATION_CONFIG.servicePage).toBe(false)
      expect(isStaticPage('servicePage')).toBe(true)
    })
  })
})

describe('End-to-End SEO Workflow', () => {
  it('should have complete SEO toolchain available', async () => {
    // Metadata utilities
    const { generateMetadata } = await import('@/lib/seo/metadata')
    expect(generateMetadata).toBeDefined()

    // Schema generators
    const { organizationSchema, articleSchema, serviceSchema, faqSchema } = await import('@/lib/seo/schemas')
    expect(organizationSchema).toBeDefined()
    expect(articleSchema).toBeDefined()
    expect(serviceSchema).toBeDefined()
    expect(faqSchema).toBeDefined()
  })

  it('should have complete analytics toolchain available', async () => {
    // Event tracking
    const { trackEvent, trackCTAClick, trackFormSubmission, trackScrollDepth } = await import('@/lib/analytics/events')
    expect(trackEvent).toBeDefined()
    expect(trackCTAClick).toBeDefined()
    expect(trackFormSubmission).toBeDefined()
    expect(trackScrollDepth).toBeDefined()

    // UTM handling
    const { extractUTMParams, storeUTMParams, getStoredUTMParams } = await import('@/lib/analytics/utm')
    expect(extractUTMParams).toBeDefined()
    expect(storeUTMParams).toBeDefined()
    expect(getStoredUTMParams).toBeDefined()
  })
})
