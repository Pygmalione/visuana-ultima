import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getIndustryBySlug, getAllIndustrySlugs } from '@/data/industries'
import { IndustryPageTemplate } from '@/components/templates/IndustryPageTemplate'
import { REVALIDATION_CONFIG } from '@/lib/performance/revalidation'
import { IndustrySlug } from '@/types/industry'

// ============================================
// INDUSTRY PAGE - SPEC-011
// Dynamic route for all industry landing pages
// Route: /dla/[industry]
// ============================================

/**
 * Static Generation - pages are pre-rendered at build time
 * Revalidate yearly (effectively static)
 */
export const revalidate = REVALIDATION_CONFIG.servicePage

/**
 * Generate static params for all industries
 * Pre-renders all 8 industry pages at build time
 */
export async function generateStaticParams(): Promise<{ industry: IndustrySlug }[]> {
  return getAllIndustrySlugs().map((slug) => ({
    industry: slug,
  }))
}

/**
 * Generate metadata for each industry page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>
}): Promise<Metadata> {
  const { industry: slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    return {
      title: 'Nie znaleziono | Visuana',
    }
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: [
      `marketing ${industry.name.toLowerCase()}`,
      `agencja marketingowa ${industry.name.toLowerCase()}`,
      'marketing B2B',
      'Visuana',
    ],
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      type: 'website',
      locale: 'pl_PL',
      url: `https://visuana.pl/dla/${industry.slug}`,
      siteName: 'Visuana',
    },
    twitter: {
      card: 'summary_large_image',
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
    alternates: {
      canonical: `https://visuana.pl/dla/${industry.slug}`,
    },
  }
}

/**
 * Generate JSON-LD Schema for SEO
 */
function generateJsonLd(industry: ReturnType<typeof getIndustryBySlug>) {
  if (!industry) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Marketing dla ${industry.name}`,
    description: industry.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Visuana',
      url: 'https://visuana.pl',
    },
    serviceType: 'Marketing Services',
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    audience: {
      '@type': 'Audience',
      audienceType: `${industry.name} Companies`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Uslugi marketingowe dla ${industry.name}`,
      itemListElement: industry.solutions.map((solution, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: solution.title,
          description: solution.description,
        },
        position: index + 1,
      })),
    },
  }
}

/**
 * Generate FAQ Schema for Google Rich Results
 */
function generateFAQSchema(industry: ReturnType<typeof getIndustryBySlug>) {
  if (!industry) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Industry Page Component
 */
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>
}) {
  const { industry: slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    notFound()
  }

  const serviceSchema = generateJsonLd(industry)
  const faqSchema = generateFAQSchema(industry)

  return (
    <>
      {/* Service Schema */}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}

      {/* FAQ Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <IndustryPageTemplate industry={industry} />
    </>
  )
}
