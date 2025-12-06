/**
 * Event Tracking - SPEC-004 SEO & Analytics
 * GA4 event tracking utilities
 */

import { analyticsConfig, isBrowser } from './config'

// ============================================
// EVENT NAMES
// ============================================

export const EVENT_NAMES = {
  // CTA Events
  CTA_CLICK: 'cta_click',
  CONTACT_CTA_CLICK: 'contact_cta_click',
  SERVICE_CTA_CLICK: 'service_cta_click',

  // Form Events
  FORM_SUBMIT: 'form_submit',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  NEWSLETTER_SIGNUP: 'newsletter_signup',

  // Engagement Events
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',

  // Navigation Events
  OUTBOUND_LINK: 'outbound_link',
  INTERNAL_LINK: 'internal_link',
} as const

// ============================================
// GENERIC EVENT TRACKING
// ============================================

/**
 * Track a custom event in GA4
 */
export function trackEvent(
  eventName: string,
  parameters?: Record<string, unknown>
): void {
  if (!isBrowser()) {
    if (analyticsConfig.debugMode) {
      console.log('[Analytics Debug] Event (SSR):', eventName, parameters)
    }
    return
  }

  if (!window.gtag) {
    if (analyticsConfig.debugMode) {
      console.log('[Analytics Debug] gtag not available:', eventName, parameters)
    }
    return
  }

  window.gtag('event', eventName, parameters)

  if (analyticsConfig.debugMode) {
    console.log('[Analytics Debug] Event tracked:', eventName, parameters)
  }
}

// ============================================
// CTA TRACKING
// ============================================

/**
 * Track CTA button click
 */
export function trackCTAClick(
  ctaName: string,
  destination: string,
  location?: string
): void {
  trackEvent(EVENT_NAMES.CTA_CLICK, {
    cta_name: ctaName,
    cta_destination: destination,
    cta_location: location || 'unknown',
    page_path: isBrowser() ? window.location.pathname : undefined,
  })
}

/**
 * Track contact CTA click
 */
export function trackContactCTAClick(
  ctaText: string,
  location: string
): void {
  trackEvent(EVENT_NAMES.CONTACT_CTA_CLICK, {
    cta_text: ctaText,
    cta_location: location,
    page_path: isBrowser() ? window.location.pathname : undefined,
  })
}

/**
 * Track service CTA click
 */
export function trackServiceCTAClick(
  serviceName: string,
  ctaText: string,
  location: string
): void {
  trackEvent(EVENT_NAMES.SERVICE_CTA_CLICK, {
    service_name: serviceName,
    cta_text: ctaText,
    cta_location: location,
    page_path: isBrowser() ? window.location.pathname : undefined,
  })
}

// ============================================
// FORM TRACKING
// ============================================

/**
 * Track form submission
 */
export function trackFormSubmission(
  formName: string,
  success: boolean,
  additionalData?: Record<string, unknown>
): void {
  trackEvent(EVENT_NAMES.FORM_SUBMIT, {
    form_name: formName,
    form_success: success,
    page_path: isBrowser() ? window.location.pathname : undefined,
    ...additionalData,
  })
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(
  success: boolean,
  subject?: string
): void {
  trackEvent(EVENT_NAMES.CONTACT_FORM_SUBMIT, {
    form_success: success,
    form_subject: subject,
    page_path: isBrowser() ? window.location.pathname : undefined,
  })
}

/**
 * Track newsletter signup
 */
export function trackNewsletterSignup(
  success: boolean,
  source?: string
): void {
  trackEvent(EVENT_NAMES.NEWSLETTER_SIGNUP, {
    signup_success: success,
    signup_source: source || 'unknown',
    page_path: isBrowser() ? window.location.pathname : undefined,
  })
}

// ============================================
// SCROLL TRACKING
// ============================================

// Track which milestones have been reached on current page
const scrollMilestones = new Set<number>()

/**
 * Track scroll depth milestone
 * Only tracks each milestone once per page
 */
export function trackScrollDepth(percentage: number): void {
  // Normalize to standard milestones
  const milestone = Math.floor(percentage / 25) * 25

  if (milestone <= 0 || milestone > 100) return
  if (scrollMilestones.has(milestone)) return

  scrollMilestones.add(milestone)

  trackEvent(EVENT_NAMES.SCROLL_DEPTH, {
    scroll_percentage: milestone,
    page_path: isBrowser() ? window.location.pathname : undefined,
  })
}

/**
 * Reset scroll milestones (call on route change)
 */
export function resetScrollMilestones(): void {
  scrollMilestones.clear()
}

/**
 * Calculate current scroll percentage
 */
export function getScrollPercentage(): number {
  if (!isBrowser()) return 0

  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight

  if (docHeight <= 0) return 100

  return Math.round((scrollTop / docHeight) * 100)
}

// ============================================
// OUTBOUND LINK TRACKING
// ============================================

/**
 * Track outbound link click
 */
export function trackOutboundLink(url: string, linkText?: string): void {
  trackEvent(EVENT_NAMES.OUTBOUND_LINK, {
    link_url: url,
    link_text: linkText,
    page_path: isBrowser() ? window.location.pathname : undefined,
  })
}
