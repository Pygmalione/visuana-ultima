'use client'

/**
 * Google Analytics Component - SPEC-004 SEO & Analytics
 * Injects GA4 script and initializes tracking
 */

import Script from 'next/script'
import { analyticsConfig, initGtag } from '@/lib/analytics/config'

/**
 * Google Analytics 4 Script Component
 * Only loads in production with valid measurement ID
 *
 * Usage in layout.tsx:
 * <GoogleAnalytics />
 */
export function GoogleAnalytics() {
  // Don't render anything if not in production or no measurement ID
  if (!analyticsConfig.shouldLoad) {
    return null
  }

  const measurementId = analyticsConfig.measurementId

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Default consent mode (GDPR compliance)
            gtag('consent', 'default', {
              'analytics_storage': '${analyticsConfig.consentMode.analytics_storage}',
              'ad_storage': '${analyticsConfig.consentMode.ad_storage}',
              'functionality_storage': '${analyticsConfig.consentMode.functionality_storage}',
              'personalization_storage': '${analyticsConfig.consentMode.personalization_storage}',
              'security_storage': '${analyticsConfig.consentMode.security_storage}'
            });

            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              ${analyticsConfig.debugMode ? "debug_mode: true," : ''}
            });
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
