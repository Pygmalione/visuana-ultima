/**
 * Analytics Configuration - SPEC-004 SEO & Analytics
 * Configuration for Google Analytics 4
 */

// ============================================
// ENVIRONMENT HELPERS
// ============================================

/**
 * Check if running in production environment
 */
export function isProductionEnv(): boolean {
  return process.env.NODE_ENV === 'production'
}

/**
 * Check if running in browser
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined'
}

// ============================================
// CONFIGURATION
// ============================================

/**
 * GA4 Measurement ID from environment variable
 * Must be set in .env.local: NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
 */
const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || ''

/**
 * Analytics configuration object
 */
export const analyticsConfig = {
  /**
   * GA4 Measurement ID
   */
  measurementId: GA4_MEASUREMENT_ID,

  /**
   * Enable debug mode for development
   */
  debugMode: process.env.NODE_ENV === 'development',

  /**
   * Consent mode settings (GDPR compliance)
   * These are default values, should be updated based on user consent
   */
  consentMode: {
    analytics_storage: 'denied' as 'granted' | 'denied',
    ad_storage: 'denied' as 'granted' | 'denied',
    functionality_storage: 'granted' as 'granted' | 'denied',
    personalization_storage: 'denied' as 'granted' | 'denied',
    security_storage: 'granted' as 'granted' | 'denied',
  },

  /**
   * Should analytics load (only in production with valid ID)
   */
  get shouldLoad(): boolean {
    return isProductionEnv() && Boolean(this.measurementId)
  },
}

// ============================================
// GTAG TYPE DECLARATIONS
// ============================================

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'consent' | 'set',
      targetId: string,
      params?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}

/**
 * Initialize gtag if not already present
 */
export function initGtag(): void {
  if (!isBrowser()) return

  window.dataLayer = window.dataLayer || []

  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
  }
}

/**
 * Update consent settings
 */
export function updateConsent(consent: Partial<typeof analyticsConfig.consentMode>): void {
  if (!isBrowser() || !window.gtag) return

  window.gtag('consent', 'update', consent)
}
