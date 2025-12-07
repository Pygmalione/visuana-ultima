import { Metadata } from 'next'
import { Suspense } from 'react'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { JsonLd } from '@/components/seo/JsonLd'

// ============================================
// SEONYU LAYOUT - SPEC-008
// Separate layout for Seonyu landing pages
// ============================================

export const metadata: Metadata = {
  title: {
    default: 'Seonyu - AI Influencer Marketing Platform | Visuana',
    template: '%s | Seonyu by Visuana',
  },
  description: 'Automatyzuj influencer marketing z AI. Discovery, outreach, analytics - wszystko w jednym narzedziu. Znajdz idealnych influencerow dla Twojej marki.',
  keywords: [
    'AI influencer marketing',
    'automatyzacja influencer',
    'platforma influencer',
    'influencer discovery',
    'influencer outreach',
    'influencer analytics',
    'Seonyu',
    'Visuana',
  ],
  authors: [{ name: 'Visuana', url: 'https://visuana.pl' }],
  metadataBase: new URL('https://visuana.pl'),
  openGraph: {
    title: 'Seonyu - AI Influencer Marketing Platform',
    description: 'Automatyzuj influencer marketing z AI. Discovery, outreach, analytics - wszystko w jednym narzedziu.',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Seonyu by Visuana',
    images: [
      {
        url: '/og/seonyu-og.png',
        width: 1200,
        height: 630,
        alt: 'Seonyu - AI Influencer Marketing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seonyu - AI Influencer Marketing Platform',
    description: 'Automatyzuj influencer marketing z AI.',
    images: ['/og/seonyu-og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// JSON-LD Schema for Seonyu
function seonyuSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Seonyu',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-Powered Influencer Marketing Platform. Znajdz idealnych influencerow, automatyzuj outreach i sledz wyniki.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'PLN',
      description: 'Bezplatne demo',
    },
    creator: {
      '@type': 'Organization',
      name: 'Visuana',
      url: 'https://visuana.pl',
    },
    featureList: [
      'AI Influencer Discovery',
      'Automated Outreach',
      'Performance Analytics',
      'ROI Tracking',
      'CRM Integration',
    ],
  }
}

export default function SeonyuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Seonyu-specific Schema */}
      <JsonLd schema={seonyuSchema()} />

      {/* Main Content */}
      <div className="min-h-screen">
        {children}
      </div>

      {/* Analytics */}
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
    </>
  )
}
