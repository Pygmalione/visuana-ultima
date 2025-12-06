/**
 * UTM Parameter Tests - SPEC-004 SEO & Analytics
 * Tests for UTM tracking utilities
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Mock sessionStorage
const mockSessionStorage = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

describe('UTM Parameter Handling', () => {
  beforeEach(() => {
    vi.stubGlobal('sessionStorage', mockSessionStorage)
    mockSessionStorage.clear()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  describe('extractUTMParams', () => {
    it('should export extractUTMParams function', async () => {
      const { extractUTMParams } = await import('@/lib/analytics/utm')

      expect(typeof extractUTMParams).toBe('function')
    })

    it('should extract UTM parameters from URL', async () => {
      const { extractUTMParams } = await import('@/lib/analytics/utm')

      const url = 'https://visuana.pl?utm_source=google&utm_medium=cpc&utm_campaign=brand'
      const params = extractUTMParams(url)

      expect(params.utm_source).toBe('google')
      expect(params.utm_medium).toBe('cpc')
      expect(params.utm_campaign).toBe('brand')
    })

    it('should handle missing UTM parameters', async () => {
      const { extractUTMParams } = await import('@/lib/analytics/utm')

      const url = 'https://visuana.pl/kontakt'
      const params = extractUTMParams(url)

      expect(params.utm_source).toBeUndefined()
      expect(params.utm_medium).toBeUndefined()
    })

    it('should extract all UTM parameter types', async () => {
      const { extractUTMParams } = await import('@/lib/analytics/utm')

      const url = 'https://visuana.pl?utm_source=facebook&utm_medium=social&utm_campaign=spring&utm_term=marketing&utm_content=banner'
      const params = extractUTMParams(url)

      expect(params.utm_source).toBe('facebook')
      expect(params.utm_medium).toBe('social')
      expect(params.utm_campaign).toBe('spring')
      expect(params.utm_term).toBe('marketing')
      expect(params.utm_content).toBe('banner')
    })
  })

  describe('storeUTMParams', () => {
    it('should export storeUTMParams function', async () => {
      const { storeUTMParams } = await import('@/lib/analytics/utm')

      expect(typeof storeUTMParams).toBe('function')
    })

    it('should store UTM params in sessionStorage', async () => {
      const { storeUTMParams, getStoredUTMParams } = await import('@/lib/analytics/utm')

      const params = {
        utm_source: 'newsletter',
        utm_medium: 'email',
        utm_campaign: 'weekly',
      }

      storeUTMParams(params)

      const stored = getStoredUTMParams()
      expect(stored?.utm_source).toBe('newsletter')
      expect(stored?.utm_medium).toBe('email')
    })
  })

  describe('getStoredUTMParams', () => {
    it('should export getStoredUTMParams function', async () => {
      const { getStoredUTMParams } = await import('@/lib/analytics/utm')

      expect(typeof getStoredUTMParams).toBe('function')
    })

    it('should return null when no UTM params stored', async () => {
      const { getStoredUTMParams } = await import('@/lib/analytics/utm')

      const stored = getStoredUTMParams()
      expect(stored).toBeNull()
    })
  })

  describe('getAttributionData', () => {
    it('should export getAttributionData function', async () => {
      const { getAttributionData } = await import('@/lib/analytics/utm')

      expect(typeof getAttributionData).toBe('function')
    })

    it('should include UTM params in attribution data', async () => {
      const { storeUTMParams, getAttributionData } = await import('@/lib/analytics/utm')

      storeUTMParams({
        utm_source: 'google',
        utm_campaign: 'test',
      })

      const attribution = getAttributionData()
      expect(attribution.utm_source).toBe('google')
      expect(attribution.utm_campaign).toBe('test')
    })
  })
})
