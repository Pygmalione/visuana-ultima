import { Metadata } from 'next'
import { getRoleBySlug } from '@/data/roles'
import { RolePageTemplate } from '@/components/templates/RolePageTemplate'


// ============================================
// CEO / FOUNDER PAGE - SPEC-011
// Static route: /dla-ceo
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
  title: 'Marketing dla CEO i Founderow | Visuana',
  description: 'Marketing z perspektywa CEO: revenue attribution, executive dashboards, board-ready metrics. Zero vanity metrics, tylko ROI.',
  keywords: [
    'marketing dla CEO',
    'marketing dla founderow',
    'revenue attribution',
    'marketing ROI',
    'CEO dashboard',
    'Visuana',
  ],
  openGraph: {
    title: 'Marketing dla CEO i Founderow | Visuana',
    description: 'Marketing z perspektywa CEO: revenue attribution, executive dashboards, board-ready metrics. Zero vanity metrics, tylko ROI.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/dla-ceo',
    siteName: 'Visuana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing dla CEO i Founderow | Visuana',
    description: 'Marketing z perspektywa CEO: revenue attribution, executive dashboards, board-ready metrics.',
  },
  alternates: {
    canonical: 'https://visuana.pl/dla-ceo',
  },
}

/**
 * Generate JSON-LD Schema for SEO
 */
function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing dla CEO i Founderow',
    description: 'Marketing z perspektywa CEO: revenue attribution, executive dashboards, board-ready metrics.',
    provider: {
      '@type': 'Organization',
      name: 'Visuana',
      url: 'https://visuana.pl',
    },
    serviceType: 'Marketing Services for CEOs',
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'CEO, Founder, Executive',
    },
  }
}

/**
 * CEO Page Component
 */
export default function CEOPage() {
  const role = getRoleBySlug('ceo')

  if (!role) {
    throw new Error('CEO role data not found')
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
