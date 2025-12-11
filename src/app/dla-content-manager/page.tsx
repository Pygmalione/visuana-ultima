import { Metadata } from 'next'
import { getRoleBySlug } from '@/data/roles'
import { RolePageTemplate } from '@/components/templates/RolePageTemplate'


// ============================================
// CONTENT MANAGER PAGE - SPEC-011
// Static route: /dla-content-manager
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
  title: 'Marketing dla Content Managerow | Visuana',
  description: 'AI content workflow dla Content Managerow: 10x output, SEO integration, distribution automation. Jakosc bez kompromisow.',
  keywords: [
    'marketing dla Content Manager',
    'AI content workflow',
    'content automation',
    'SEO integration',
    'content scaling',
    'Visuana',
  ],
  openGraph: {
    title: 'Marketing dla Content Managerow | Visuana',
    description: 'AI content workflow dla Content Managerow: 10x output, SEO integration, distribution automation. Jakosc bez kompromisow.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/dla-content-manager',
    siteName: 'Visuana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing dla Content Managerow | Visuana',
    description: 'AI content workflow dla Content Managerow: 10x output, SEO integration, distribution automation.',
  },
  alternates: {
    canonical: 'https://visuana.pl/dla-content-manager',
  },
}

/**
 * Generate JSON-LD Schema for SEO
 */
function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Marketing dla Content Managerow',
    description: 'AI content workflow dla Content Managerow: 10x output, SEO integration, distribution automation.',
    provider: {
      '@type': 'Organization',
      name: 'Visuana',
      url: 'https://visuana.pl',
    },
    serviceType: 'Content Marketing Services',
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Content Manager, Content Lead, Content Strategist',
    },
  }
}

/**
 * Content Manager Page Component
 */
export default function ContentManagerPage() {
  const role = getRoleBySlug('content-manager')

  if (!role) {
    throw new Error('Content Manager role data not found')
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
