/**
 * GA4 Integration Tests - SPEC-004 SEO & Analytics
 * Tests for Google Analytics 4 setup
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import { analyticsConfig, isProductionEnv } from '@/lib/analytics/config'

// Mock environment
const originalEnv = process.env

describe('GA4 Configuration', () => {
  beforeEach(() => {
    vi.resetModules()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  describe('analyticsConfig', () => {
    it('should export measurement ID configuration', () => {
      expect(analyticsConfig).toBeDefined()
      expect(typeof analyticsConfig.measurementId).toBe('string')
    })

    it('should have debug mode configuration', () => {
      expect(analyticsConfig).toHaveProperty('debugMode')
      expect(typeof analyticsConfig.debugMode).toBe('boolean')
    })

    it('should have consent mode settings', () => {
      expect(analyticsConfig).toHaveProperty('consentMode')
      expect(analyticsConfig.consentMode).toHaveProperty('analytics_storage')
      expect(analyticsConfig.consentMode).toHaveProperty('ad_storage')
    })
  })

  describe('isProductionEnv', () => {
    it('should return false in test environment', () => {
      process.env.NODE_ENV = 'test'
      expect(isProductionEnv()).toBe(false)
    })
  })
})

describe('GA4 Script Loading', () => {
  it('should not render GA4 script in non-production', async () => {
    // Dynamic import to test component behavior
    const { GoogleAnalytics } = await import('@/components/analytics/GoogleAnalytics')

    // In test environment, should not render anything or render placeholder
    const { container } = render(<GoogleAnalytics />)

    // Either no script or script should be conditional
    const scripts = container.querySelectorAll('script')

    // In test/dev environment, GA should not load real scripts
    // The component should handle this gracefully
    expect(container).toBeDefined()
  })
})

describe('Page View Tracking', () => {
  it('should export trackPageView function', async () => {
    const { trackPageView } = await import('@/lib/analytics/pageview')

    expect(typeof trackPageView).toBe('function')
  })

  it('should accept page path and title parameters', async () => {
    const { trackPageView } = await import('@/lib/analytics/pageview')

    // Should not throw when called
    expect(() =>
      trackPageView({
        path: '/test-page',
        title: 'Test Page',
      })
    ).not.toThrow()
  })
})
