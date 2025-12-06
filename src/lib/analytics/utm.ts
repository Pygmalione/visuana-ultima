/**
 * UTM Parameter Handling - SPEC-004 SEO & Analytics
 * Track and persist UTM parameters for attribution
 */

import { isBrowser } from './config'

// ============================================
// TYPES
// ============================================

export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

// ============================================
// CONSTANTS
// ============================================

const UTM_STORAGE_KEY = 'visuana_utm_params'

const UTM_PARAM_NAMES = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

// ============================================
// EXTRACTION
// ============================================

/**
 * Extract UTM parameters from a URL string
 */
export function extractUTMParams(url: string): UTMParams {
  try {
    const urlObj = new URL(url)
    const params: UTMParams = {}

    UTM_PARAM_NAMES.forEach(param => {
      const value = urlObj.searchParams.get(param)
      if (value) {
        params[param] = value
      }
    })

    return params
  } catch {
    return {}
  }
}

/**
 * Extract UTM parameters from current page URL
 */
export function extractCurrentUTMParams(): UTMParams {
  if (!isBrowser()) return {}

  return extractUTMParams(window.location.href)
}

// ============================================
// STORAGE
// ============================================

/**
 * Store UTM parameters in sessionStorage
 * Only stores if there are actual UTM params
 */
export function storeUTMParams(params: UTMParams): void {
  if (!isBrowser()) return

  // Only store if we have at least one UTM param
  const hasParams = Object.keys(params).some(key =>
    UTM_PARAM_NAMES.includes(key as typeof UTM_PARAM_NAMES[number])
  )

  if (!hasParams) return

  try {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params))
  } catch {
    // sessionStorage may be unavailable (private browsing, etc.)
  }
}

/**
 * Get stored UTM parameters from sessionStorage
 */
export function getStoredUTMParams(): UTMParams | null {
  if (!isBrowser()) return null

  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY)
    if (!stored) return null

    return JSON.parse(stored) as UTMParams
  } catch {
    return null
  }
}

/**
 * Clear stored UTM parameters
 */
export function clearStoredUTMParams(): void {
  if (!isBrowser()) return

  try {
    sessionStorage.removeItem(UTM_STORAGE_KEY)
  } catch {
    // Ignore errors
  }
}

// ============================================
// ATTRIBUTION
// ============================================

export interface AttributionData extends UTMParams {
  first_page?: string
  landing_page?: string
  referrer?: string
}

/**
 * Get full attribution data for conversion tracking
 * Includes UTM params and other attribution info
 */
export function getAttributionData(): AttributionData {
  const utmParams = getStoredUTMParams() || {}

  const attribution: AttributionData = {
    ...utmParams,
  }

  if (isBrowser()) {
    attribution.landing_page = window.location.pathname
    attribution.referrer = document.referrer || undefined
  }

  return attribution
}

// ============================================
// AUTO-CAPTURE
// ============================================

/**
 * Auto-capture UTM params from current URL and store
 * Call this on app initialization
 */
export function captureUTMParams(): UTMParams {
  const params = extractCurrentUTMParams()

  if (Object.keys(params).length > 0) {
    storeUTMParams(params)
  }

  return params
}

// ============================================
// CONVERSION GOALS DOCUMENTATION
// ============================================

/**
 * GA4 Conversion Goals Configuration
 *
 * The following events should be marked as conversions in GA4:
 *
 * 1. contact_form_submit
 *    - Triggered when contact form is successfully submitted
 *    - Key metric for lead generation
 *
 * 2. newsletter_signup
 *    - Triggered when newsletter signup is successful
 *    - Key metric for audience building
 *
 * To set up in GA4:
 * 1. Go to Admin > Events
 * 2. Find the event name
 * 3. Toggle "Mark as conversion"
 *
 * Attribution data is automatically included in conversion events
 * via the getAttributionData() function.
 */
export const CONVERSION_EVENTS = {
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
} as const
