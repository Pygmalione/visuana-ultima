import { Metadata } from 'next'
import { getRoleBySlug } from '@/data/roles'
import { RolePageTemplate } from '@/components/templates/RolePageTemplate'
import { REVALIDATION_CONFIG } from '@/lib/performance/revalidation'

// ============================================
// STARTUP FOUNDER PAGE - SPEC-011
// Static route: /dla-founder
// ============================================

/**
 * Static Generation - page is pre-rendered at build time
 * Revalidate yearly (effectively static)
 */
export const revalidate = REVALIDATION_CONFIG.servicePage

/**
 * Page metadata for SEO
 */
export const metadata: Metadata = {
  title: 'Marketing dla Startup Founderow | Visuana',
  description: 'Done-for-you marketing dla founderow: 48h onboarding, founder-friendly pricing, weekly optimization. Ty budujesz produkt, my marketing.',
  keywords: [
    'marketing dla startup',
    'marketing dla founder',
    'startup marketing',
    'founder-friendly pricing',
    'done-for-you marketing',
    'Visuana',
  ],
  openGraph: {
    title: 'Marketing dla Startup Founderow | Visuana',
    description: 'Done-for-you marketing dla founderow: 48h onboarding, founder-friendly pricing, weekly optimization. Ty budujesz produkt, my marketing.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/dla-founder',
    siteName: 'Visuana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing dla Startup Founderow | Visuana',
    description: 'Done-for-you marketing dla founderow: 48h onboarding, founder-friendly pricing, weekly optimization.',
  },
  alternates: {
    canonical: 'https://visuana.pl/dla-founder',
  },
}

/**
 * Generate JSON-LD Schema for SEO
 */
function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing dla Startup Founderow',
    description: 'Done-for-you marketing dla founderow: 48h onboarding, founder-friendly pricing, weekly optimization.',
    provider: {
      '@type': 'Organization',
      name: 'Visuana',
      url: 'https://visuana.pl',
    },
    serviceType: 'Marketing Services for Startups',
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Startup Founder, Entrepreneur, Early-Stage Company',
    },
  }
}

/**
 * Startup Founder Page Component
 */
export default function FounderPage() {
  const role = getRoleBySlug('founder')

  if (!role) {
    throw new Error('Founder role data not found')
  }

  const jsonLd = generateJsonLd()

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <RolePageTemplate role={role} />
    </>
  )
}
