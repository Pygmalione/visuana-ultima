/**
 * Analytics Library - SPEC-004 SEO & Analytics
 * Central export for all analytics utilities
 */

// Configuration
export {
  analyticsConfig,
  isProductionEnv,
  isBrowser,
  initGtag,
  updateConsent,
} from './config'

// Page View Tracking
export {
  trackPageView,
  trackCurrentPageView,
} from './pageview'

// Event Tracking
export {
  EVENT_NAMES,
  trackEvent,
  trackCTAClick,
  trackContactCTAClick,
  trackServiceCTAClick,
  trackFormSubmission,
  trackContactFormSubmit,
  trackNewsletterSignup,
  trackScrollDepth,
  trackOutboundLink,
  resetScrollMilestones,
  getScrollPercentage,
} from './events'

// UTM Tracking
export {
  extractUTMParams,
  extractCurrentUTMParams,
  storeUTMParams,
  getStoredUTMParams,
  clearStoredUTMParams,
  getAttributionData,
  captureUTMParams,
  CONVERSION_EVENTS,
  type UTMParams,
  type AttributionData,
} from './utm'
