import { Metadata } from 'next'
import { getRoleBySlug } from '@/data/roles'
import { RolePageTemplate } from '@/components/templates/RolePageTemplate'


// ============================================
// MARKETING DIRECTOR PAGE - SPEC-011
// Static route: /dla-marketing-director
// ============================================

/**
 * Static Generation - page is pre-rendered at build time
 * Revalidate yearly (effectively static)
 */
export const revalidate = 31536000 // 1 year

/**
 * Page metadata for SEO
 */
export const metadata: Metadata = {
  title: 'Marketing dla Marketing Directorow | Visuana',
  description: 'Execution-focused partnership dla Marketing Directorow. Priority channel optimization, automated reporting, best practices transfer.',
  keywords: [
    'marketing dla Marketing Director',
    'marketing director wsparcie',
    'channel optimization',
    'automated reporting',
    'marketing execution',
    'Visuana',
  ],
  openGraph: {
    title: 'Marketing dla Marketing Directorow | Visuana',
    description: 'Execution-focused partnership dla Marketing Directorow. Priority channel optimization, automated reporting, best practices transfer.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/dla-marketing-director',
    siteName: 'Visuana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing dla Marketing Directorow | Visuana',
    description: 'Execution-focused partnership dla Marketing Directorow.',
  },
  alternates: {
    canonical: 'https://visuana.pl/dla-marketing-director',
  },
}

/**
 * Generate JSON-LD Schema for SEO
 */
function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing dla Marketing Directorow',
    description: 'Execution-focused partnership dla Marketing Directorow. Priority channel optimization, automated reporting.',
    provider: {
      '@type': 'Organization',
      name: 'Visuana',
      url: 'https://visuana.pl',
    },
    serviceType: 'Marketing Services for Marketing Directors',
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Marketing Director, Marketing Manager',
    },
  }
}

/**
 * Marketing Director Page Component
 */
export default function MarketingDirectorPage() {
  const role = getRoleBySlug('marketing-director')

  if (!role) {
    throw new Error('Marketing Director role data not found')
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
