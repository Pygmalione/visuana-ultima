/**
 * Event Tracking Tests - SPEC-004 SEO & Analytics
 * Tests for GA4 event tracking utilities
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('Event Tracking System', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  describe('trackEvent', () => {
    it('should export trackEvent function', async () => {
      const { trackEvent } = await import('@/lib/analytics/events')

      expect(typeof trackEvent).toBe('function')
    })

    it('should accept event name and parameters', async () => {
      const { trackEvent } = await import('@/lib/analytics/events')

      expect(() =>
        trackEvent('test_event', { category: 'test', label: 'test_label' })
      ).not.toThrow()
    })
  })

  describe('trackCTAClick', () => {
    it('should export trackCTAClick function', async () => {
      const { trackCTAClick } = await import('@/lib/analytics/events')

      expect(typeof trackCTAClick).toBe('function')
    })

    it('should accept CTA name and destination', async () => {
      const { trackCTAClick } = await import('@/lib/analytics/events')

      expect(() =>
        trackCTAClick('contact_button', '/kontakt', 'header')
      ).not.toThrow()
    })
  })

  describe('trackFormSubmission', () => {
    it('should export trackFormSubmission function', async () => {
      const { trackFormSubmission } = await import('@/lib/analytics/events')

      expect(typeof trackFormSubmission).toBe('function')
    })

    it('should accept form name and success status', async () => {
      const { trackFormSubmission } = await import('@/lib/analytics/events')

      expect(() =>
        trackFormSubmission('contact_form', true)
      ).not.toThrow()

      expect(() =>
        trackFormSubmission('newsletter_signup', false)
      ).not.toThrow()
    })
  })

  describe('trackScrollDepth', () => {
    it('should export trackScrollDepth function', async () => {
      const { trackScrollDepth } = await import('@/lib/analytics/events')

      expect(typeof trackScrollDepth).toBe('function')
    })

    it('should accept percentage value', async () => {
      const { trackScrollDepth } = await import('@/lib/analytics/events')

      expect(() => trackScrollDepth(25)).not.toThrow()
      expect(() => trackScrollDepth(50)).not.toThrow()
      expect(() => trackScrollDepth(75)).not.toThrow()
      expect(() => trackScrollDepth(100)).not.toThrow()
    })
  })

  describe('Event Names', () => {
    it('should export standard event names', async () => {
      const { EVENT_NAMES } = await import('@/lib/analytics/events')

      expect(EVENT_NAMES).toBeDefined()
      expect(EVENT_NAMES.CTA_CLICK).toBeDefined()
      expect(EVENT_NAMES.FORM_SUBMIT).toBeDefined()
      expect(EVENT_NAMES.SCROLL_DEPTH).toBeDefined()
    })
  })
})
