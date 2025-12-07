import { Metadata } from 'next'
import { getRoleBySlug } from '@/data/roles'
import { RolePageTemplate } from '@/components/templates/RolePageTemplate'
import { REVALIDATION_CONFIG } from '@/lib/performance/revalidation'

// ============================================
// CMO / VP MARKETING PAGE - SPEC-011
// Static route: /dla-cmo
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
  title: 'Marketing dla CMO i VP Marketingu | Visuana',
  description: 'Partner marketingowy dla CMO: revenue attribution, team augmentation, martech integration. Rozumiemy presje C-suite.',
  keywords: [
    'marketing dla CMO',
    'marketing dla VP Marketing',
    'revenue attribution',
    'team augmentation',
    'martech integration',
    'Visuana',
  ],
  openGraph: {
    title: 'Marketing dla CMO i VP Marketingu | Visuana',
    description: 'Partner marketingowy dla CMO: revenue attribution, team augmentation, martech integration. Rozumiemy presje C-suite.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/dla-cmo',
    siteName: 'Visuana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing dla CMO i VP Marketingu | Visuana',
    description: 'Partner marketingowy dla CMO: revenue attribution, team augmentation, martech integration.',
  },
  alternates: {
    canonical: 'https://visuana.pl/dla-cmo',
  },
}

/**
 * Generate JSON-LD Schema for SEO
 */
function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing dla CMO i VP Marketingu',
    description: 'Partner marketingowy dla CMO: revenue attribution, team augmentation, martech integration.',
    provider: {
      '@type': 'Organization',
      name: 'Visuana',
      url: 'https://visuana.pl',
    },
    serviceType: 'Marketing Services for CMOs',
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'CMO, VP Marketing, Chief Marketing Officer',
    },
  }
}

/**
 * CMO Page Component
 */
export default function CMOPage() {
  const role = getRoleBySlug('cmo')

  if (!role) {
    throw new Error('CMO role data not found')
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
