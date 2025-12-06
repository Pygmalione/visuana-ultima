'use client'

/**
 * useAnalytics Hook - SPEC-004 SEO & Analytics
 * React hook for analytics tracking in components
 */

import { useCallback, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '@/lib/analytics/pageview'
import {
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
} from '@/lib/analytics/events'

// ============================================
// DEBOUNCE UTILITY
// ============================================

function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

// ============================================
// HOOK
// ============================================

interface UseAnalyticsOptions {
  /**
   * Enable automatic page view tracking
   * @default true
   */
  trackPageViews?: boolean

  /**
   * Enable automatic scroll depth tracking
   * @default false
   */
  trackScrollDepth?: boolean

  /**
   * Scroll tracking debounce delay in ms
   * @default 500
   */
  scrollDebounce?: number
}

/**
 * Analytics hook for React components
 * Provides tracking functions and automatic page view tracking
 */
export function useAnalytics(options: UseAnalyticsOptions = {}) {
  const {
    trackPageViews = true,
    trackScrollDepth: enableScrollTracking = false,
    scrollDebounce = 500,
  } = options

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasTrackedPageView = useRef(false)

  // Track page views on route change
  useEffect(() => {
    if (!trackPageViews) return

    // Reset tracking state on pathname change
    hasTrackedPageView.current = false
    resetScrollMilestones()

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    trackPageView({
      path: url,
      title: document.title,
    })

    hasTrackedPageView.current = true
  }, [pathname, searchParams, trackPageViews])

  // Set up scroll depth tracking
  useEffect(() => {
    if (!enableScrollTracking || typeof window === 'undefined') return

    const handleScroll = debounce(() => {
      const percentage = getScrollPercentage()
      trackScrollDepth(percentage)
    }, scrollDebounce)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [enableScrollTracking, scrollDebounce])

  // Memoized tracking functions
  const trackCTA = useCallback(
    (ctaName: string, destination: string, location?: string) => {
      trackCTAClick(ctaName, destination, location)
    },
    []
  )

  const trackContactCTA = useCallback(
    (ctaText: string, location: string) => {
      trackContactCTAClick(ctaText, location)
    },
    []
  )

  const trackServiceCTA = useCallback(
    (serviceName: string, ctaText: string, location: string) => {
      trackServiceCTAClick(serviceName, ctaText, location)
    },
    []
  )

  const trackForm = useCallback(
    (formName: string, success: boolean, data?: Record<string, unknown>) => {
      trackFormSubmission(formName, success, data)
    },
    []
  )

  const trackContactForm = useCallback(
    (success: boolean, subject?: string) => {
      trackContactFormSubmit(success, subject)
    },
    []
  )

  const trackNewsletter = useCallback(
    (success: boolean, source?: string) => {
      trackNewsletterSignup(success, source)
    },
    []
  )

  const trackOutbound = useCallback(
    (url: string, linkText?: string) => {
      trackOutboundLink(url, linkText)
    },
    []
  )

  return {
    // CTA tracking
    trackCTA,
    trackContactCTA,
    trackServiceCTA,

    // Form tracking
    trackForm,
    trackContactForm,
    trackNewsletter,

    // Other tracking
    trackOutbound,
    trackScrollDepth,

    // Page tracking
    trackPageView,
  }
}

export default useAnalytics
