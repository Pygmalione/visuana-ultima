import type { Metadata } from 'next'
import { Suspense } from 'react'
import './globals.css'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { JsonLd } from '@/components/seo/JsonLd'
import { organizationSchema } from '@/lib/seo/schemas'
import { fontVariables, syne, outfit, jetbrainsMono } from '@/lib/fonts/config'

// ============================================
// METADATA - SPEC-004 SEO + SPEC-003 RSS
// ============================================

export const metadata: Metadata = {
  title: 'Visuana | AI-Powered Marketing Agency',
  description: 'Butikowa agencja doradztwa specjalizujaca sie w Digital Marketing, Content Marketing, Influencer Marketing oraz AI-powered analytics.',
  keywords: ['marketing', 'AI', 'content marketing', 'influencer marketing', 'digital marketing', 'analytics'],
  authors: [{ name: 'Karol Debkowski', url: 'https://visuana.pl' }],
  metadataBase: new URL('https://visuana.pl'),
  openGraph: {
    title: 'Visuana | AI-Powered Marketing Agency',
    description: 'Butikowa agencja doradztwa specjalizujaca sie w Digital Marketing, Content Marketing, Influencer Marketing oraz AI-powered analytics.',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Visuana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visuana | AI-Powered Marketing Agency',
    description: 'Butikowa agencja doradztwa specjalizujaca sie w AI-powered marketing.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
}

// ============================================
// ROOT LAYOUT
// ============================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pl"
      className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Organization Schema for SEO */}
        <JsonLd schema={organizationSchema()} />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className="min-h-screen bg-white text-charcoal-800 antialiased font-sans">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Przejdz do glownej tresci
        </a>

        {children}

        {/* Google Analytics - loads only in production */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
