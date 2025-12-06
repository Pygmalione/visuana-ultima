/**
 * JSON-LD Schema Generators - SPEC-004 SEO & Analytics
 * Generates structured data for rich search results
 */

// ============================================
// CONFIGURATION
// ============================================

const SITE_NAME = 'Visuana'
const BASE_URL = 'https://visuana.pl'
const LOGO_URL = `${BASE_URL}/images/visuana-logo.png`
const DEFAULT_IMAGE = `${BASE_URL}/images/og-default.jpg`

// ============================================
// TYPES
// ============================================

export interface ArticleSchemaInput {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  author: string
  image?: string
}

export interface ServiceSchemaInput {
  name: string
  description: string
  slug: string
  serviceType?: string
}

export interface FAQItem {
  question: string
  answer: string
}

// ============================================
// SCHEMA TYPES (JSON-LD) - Using Record for compatibility
// ============================================

export type JsonLdSchema = Record<string, unknown>

// ============================================
// SCHEMA GENERATORS
// ============================================

/**
 * Generate Organization schema for Visuana
 * Used on homepage for company information
 */
export function organizationSchema(): JsonLdSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: LOGO_URL,
    description: 'Butikowa agencja doradztwa specjalizujaca sie w Digital Marketing, Content Marketing, Influencer Marketing oraz AI-powered analytics.',
    sameAs: [
      'https://linkedin.com/company/visuana',
      'https://twitter.com/visuana',
      'https://instagram.com/visuana',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'kontakt@visuana.pl',
      availableLanguage: ['Polish', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PL',
    },
  }
}

/**
 * Generate Article schema for blog posts
 * Used on individual blog post pages
 */
export function articleSchema(article: ArticleSchemaInput): JsonLdSchema {
  const imageUrl = article.image
    ? (article.image.startsWith('http') ? article.image : `${BASE_URL}${article.image}`)
    : DEFAULT_IMAGE

  const articleUrl = `${BASE_URL}/blog/${article.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: imageUrl,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    url: articleUrl,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  }
}

/**
 * Generate Service schema for service pages
 * Used on individual service pages
 */
export function serviceSchema(service: ServiceSchemaInput): JsonLdSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${BASE_URL}/uslugi/${service.slug}`,
    serviceType: service.serviceType || 'Marketing Services',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    areaServed: ['Poland', 'Europe'],
  }
}

/**
 * Generate FAQPage schema for FAQ sections
 * Used on pages with FAQ content
 */
export function faqSchema(faqs: FAQItem[]): JsonLdSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
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
 * Generate ContactPage schema
 * Used on contact page for rich snippets
 */
export function contactPageSchema(): JsonLdSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontakt - Visuana Ultima',
    description: 'Strona kontaktowa Visuana Ultima. Formularz kontaktowy i informacje o firmie.',
    url: `${BASE_URL}/kontakt`,
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      email: 'karol@visuana.pl',
      url: BASE_URL,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'karol@visuana.pl',
        availableLanguage: ['Polish', 'English'],
      },
    },
  }
}

// ============================================
// SERVICE SCHEMA PRESETS
// ============================================

export const serviceSchemas = {
  contentMarketing: serviceSchema({
    name: 'Content Marketing',
    description: 'Profesjonalne uslugi content marketingu - strategia, tworzenie tresci, dystrybucja i analityka.',
    slug: 'content-marketing',
    serviceType: 'Content Marketing Services',
  }),

  influencerMarketing: serviceSchema({
    name: 'Influencer Marketing',
    description: 'Wspolpraca z influencerami - identyfikacja, negocjacje, kampanie i analiza wynikow.',
    slug: 'influencer-marketing',
    serviceType: 'Influencer Marketing Services',
  }),

  aiAgents: serviceSchema({
    name: 'AI Agents',
    description: 'Wykorzystanie agentow AI w marketingu - automatyzacja, analityka, personalizacja.',
    slug: 'ai-agents',
    serviceType: 'AI Marketing Services',
  }),

  marketResearchAzja: serviceSchema({
    name: 'Market Research Azja',
    description: 'Badania rynku azjatyckiego - Korea, Japonia, Chiny. Wejscie na rynki azjatyckie.',
    slug: 'market-research-azja',
    serviceType: 'Market Research Services',
  }),
}
