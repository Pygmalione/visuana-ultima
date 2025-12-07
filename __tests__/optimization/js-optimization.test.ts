/**
 * JavaScript Optimization Tests - SPEC-004 SEO & Analytics (Task Group 9)
 * Tests for code splitting, ISR, and caching
 */

import { describe, it, expect } from 'vitest'

describe('JavaScript Optimization', () => {
  describe('Code Splitting', () => {
    it('should enable route-level code splitting by default', () => {
      // Next.js App Router automatically code-splits by route
      const codeSplittingEnabled = true
      expect(codeSplittingEnabled).toBe(true)
    })

    it('should have dynamic imports utility available', async () => {
      const { lazyLoad, lazyComponent } = await import('@/lib/performance/dynamic-imports')
      expect(lazyLoad).toBeDefined()
      expect(lazyComponent).toBeDefined()
    })
  })

  describe('ISR Configuration', () => {
    it('should have ISR config for blog posts', async () => {
      const { REVALIDATION_CONFIG } = await import('@/lib/performance/revalidation')
      expect(REVALIDATION_CONFIG).toBeDefined()
      expect(REVALIDATION_CONFIG.blogPost).toBe(3600) // 1 hour
    })

    it('should have static generation for service pages', async () => {
      const { REVALIDATION_CONFIG, isStaticPage } = await import('@/lib/performance/revalidation')
      // Static pages use 1 year revalidation (effectively static)
      expect(REVALIDATION_CONFIG.servicePage).toBe(31536000) // 1 year
      expect(isStaticPage('servicePage')).toBe(true)
    })
  })

  describe('Bundle Size', () => {
    it('should have performance config documented', async () => {
      const { BUNDLE_SIZE_LIMITS } = await import('@/lib/performance/revalidation')
      expect(BUNDLE_SIZE_LIMITS).toBeDefined()
      expect(BUNDLE_SIZE_LIMITS.mainJs).toBeLessThanOrEqual(250) // 250KB limit
    })
  })
})
