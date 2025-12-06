/**
 * Page View Tracking - SPEC-004 SEO & Analytics
 * Track page views in Google Analytics 4
 */

import { analyticsConfig, isBrowser } from './config'

interface PageViewParams {
  path: string
  title?: string
  location?: string
}

/**
 * Track a page view event in GA4
 * Called on route changes
 */
export function trackPageView({ path, title, location }: PageViewParams): void {
  if (!isBrowser() || !window.gtag) {
    if (analyticsConfig.debugMode) {
      console.log('[Analytics Debug] Page view:', { path, title, location })
    }
    return
  }

  if (!analyticsConfig.shouldLoad) {
    if (analyticsConfig.debugMode) {
      console.log('[Analytics Debug] Skipping page view (not in production):', path)
    }
    return
  }

  window.gtag('config', analyticsConfig.measurementId, {
    page_path: path,
    page_title: title || document.title,
    page_location: location || window.location.href,
  })

  if (analyticsConfig.debugMode) {
    console.log('[Analytics Debug] Page view tracked:', { path, title })
  }
}

/**
 * Track page view using current window location
 * Convenience function for simple use cases
 */
export function trackCurrentPageView(): void {
  if (!isBrowser()) return

  trackPageView({
    path: window.location.pathname,
    title: document.title,
    location: window.location.href,
  })
}
