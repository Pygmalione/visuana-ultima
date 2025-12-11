import { Metadata } from 'next'
import { getRoleBySlug } from '@/data/roles'
import { RolePageTemplate } from '@/components/templates/RolePageTemplate'


// ============================================
// HEAD OF GROWTH PAGE - SPEC-011
// Static route: /dla-growth
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
  title: 'Marketing dla Head of Growth | Visuana',
  description: 'Growth Engineering: experiment factory, multi-touch attribution, growth model building. Systemy, nie hacki.',
  keywords: [
    'marketing dla Head of Growth',
    'growth engineering',
    'experiment velocity',
    'multi-touch attribution',
    'growth model',
    'Visuana',
  ],
  openGraph: {
    title: 'Marketing dla Head of Growth | Visuana',
    description: 'Growth Engineering: experiment factory, multi-touch attribution, growth model building. Systemy, nie hacki.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/dla-growth',
    siteName: 'Visuana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing dla Head of Growth | Visuana',
    description: 'Growth Engineering: experiment factory, multi-touch attribution, growth model building.',
  },
  alternates: {
    canonical: 'https://visuana.pl/dla-growth',
  },
}

/**
 * Generate JSON-LD Schema for SEO
 */
function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing dla Head of Growth',
    description: 'Growth Engineering: experiment factory, multi-touch attribution, growth model building.',
    provider: {
      '@type': 'Organization',
      name: 'Visuana',
      url: 'https://visuana.pl',
    },
    serviceType: 'Growth Marketing Services',
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Head of Growth, Growth Lead, Growth Manager',
    },
  }
}

/**
 * Head of Growth Page Component
 */
export default function GrowthPage() {
  const role = getRoleBySlug('growth')

  if (!role) {
    throw new Error('Growth role data not found')
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
