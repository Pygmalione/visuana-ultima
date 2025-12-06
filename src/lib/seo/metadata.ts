/**
 * SEO Metadata System - SPEC-004 SEO & Analytics
 * Utilities for generating page metadata
 */

import type { Metadata } from 'next'

// ============================================
// CONFIGURATION
// ============================================

const SITE_NAME = 'Visuana'
const BASE_URL = 'https://visuana.pl'
const DEFAULT_OG_IMAGE = '/images/og-default.jpg'

// ============================================
// TYPES
// ============================================

export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: 'website' | 'article'
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image'
    title?: string
    description?: string
    image?: string
  }
  canonical?: string
  noIndex?: boolean
}

// ============================================
// SITE DEFAULTS
// ============================================

const siteDefaults: SEOMetadata = {
  title: 'AI-Powered Marketing Agency',
  description: 'Butikowa agencja doradztwa specjalizujaca sie w Digital Marketing, Content Marketing, Influencer Marketing oraz AI-powered analytics.',
  keywords: [
    'marketing',
    'AI',
    'content marketing',
    'influencer marketing',
    'digital marketing',
    'analytics',
    'agencja marketingowa',
  ],
  openGraph: {
    type: 'website',
    image: DEFAULT_OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
  },
}

/**
 * Get site-wide default metadata
 */
export function getSiteDefaults(): SEOMetadata & { openGraph: { siteName: string } } {
  return {
    ...siteDefaults,
    openGraph: {
      ...siteDefaults.openGraph,
      siteName: SITE_NAME,
    },
  }
}

// ============================================
// METADATA GENERATOR
// ============================================

/**
 * Generate Next.js Metadata object from SEO input
 * Merges with site defaults for missing fields
 */
export function generateMetadata(input: Partial<SEOMetadata>): Metadata {
  const defaults = getSiteDefaults()

  // Build full title with site name suffix
  const pageTitle = input.title || defaults.title
  const fullTitle = pageTitle.includes(SITE_NAME)
    ? pageTitle
    : `${pageTitle} | ${SITE_NAME}`

  const description = input.description || defaults.description
  const keywords = input.keywords || defaults.keywords

  // Build Open Graph metadata
  const ogTitle = input.openGraph?.title || pageTitle
  const ogFullTitle = ogTitle.includes(SITE_NAME) ? ogTitle : `${ogTitle} | ${SITE_NAME}`
  const ogDescription = input.openGraph?.description || description
  const ogImage = input.openGraph?.image || defaults.openGraph?.image || DEFAULT_OG_IMAGE
  const ogType = input.openGraph?.type || defaults.openGraph?.type || 'website'

  // Build Twitter metadata
  const twitterCard = input.twitter?.card || defaults.twitter?.card || 'summary_large_image'
  const twitterTitle = input.twitter?.title || pageTitle
  const twitterFullTitle = twitterTitle.includes(SITE_NAME)
    ? twitterTitle
    : `${twitterTitle} | ${SITE_NAME}`
  const twitterDescription = input.twitter?.description || description
  const twitterImage = input.twitter?.image || ogImage

  // Build metadata object
  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      title: ogFullTitle,
      description: ogDescription,
      type: ogType,
      siteName: SITE_NAME,
      locale: 'pl_PL',
      images: [ogImage],
    },
    twitter: {
      card: twitterCard,
      title: twitterFullTitle,
      description: twitterDescription,
      images: [twitterImage],
    },
  }

  // Add canonical URL if provided
  if (input.canonical) {
    metadata.alternates = {
      canonical: input.canonical,
    }
  }

  // Handle noIndex flag
  if (input.noIndex) {
    metadata.robots = {
      index: false,
      follow: true,
    }
  }

  return metadata
}

// ============================================
// PAGE-SPECIFIC METADATA PRESETS
// ============================================

export const pageMetadata = {
  homepage: generateMetadata({
    title: 'Visuana',
    description: 'Butikowa agencja doradztwa specjalizujaca sie w Digital Marketing, Content Marketing, Influencer Marketing oraz AI-powered analytics.',
    canonical: BASE_URL,
    keywords: [
      'agencja marketingowa',
      'marketing dla MSP',
      'AI w marketingu',
      'content marketing',
      'influencer marketing',
    ],
  }),

  blog: generateMetadata({
    title: 'Blog',
    description: 'Artykuly o marketingu, AI, content strategy i trendach w digital marketingu.',
    canonical: `${BASE_URL}/blog`,
    openGraph: { type: 'website' },
  }),

  kontakt: generateMetadata({
    title: 'Kontakt',
    description: 'Skontaktuj sie z nami, aby omowic wspolprace marketingowa dla Twojej firmy.',
    canonical: `${BASE_URL}/kontakt`,
  }),

  contentMarketing: generateMetadata({
    title: 'Content Marketing',
    description: 'Profesjonalne uslugi content marketingu - strategia, tworzenie tresci, dystrybucja i analityka.',
    canonical: `${BASE_URL}/uslugi/content-marketing`,
    keywords: ['content marketing', 'strategia tresci', 'copywriting', 'content strategy'],
  }),

  influencerMarketing: generateMetadata({
    title: 'Influencer Marketing',
    description: 'Wspolpraca z influencerami - identyfikacja, negocjacje, kampanie i analiza wynikow.',
    canonical: `${BASE_URL}/uslugi/influencer-marketing`,
    keywords: ['influencer marketing', 'wspolpraca z influencerami', 'kampanie influencer'],
  }),

  aiAgents: generateMetadata({
    title: 'AI Agents',
    description: 'Wykorzystanie agentow AI w marketingu - automatyzacja, analityka, personalizacja.',
    canonical: `${BASE_URL}/uslugi/ai-agents`,
    keywords: ['AI marketing', 'agenci AI', 'automatyzacja marketingu', 'sztuczna inteligencja'],
  }),

  marketResearchAzja: generateMetadata({
    title: 'Market Research Azja',
    description: 'Badania rynku azjatyckiego - Korea, Japonia, Chiny. Wejscie na rynki azjatyckie.',
    canonical: `${BASE_URL}/uslugi/market-research-azja`,
    keywords: ['rynek azjatycki', 'Korea biznes', 'badania rynku', 'ekspansja azjatycka'],
  }),
}

// ============================================
// DYNAMIC METADATA GENERATORS
// ============================================

/**
 * Generate metadata for a blog post
 */
export function generateBlogPostMetadata(post: {
  title: string
  excerpt?: string
  slug: string
  featured_image?: string
  author?: { name: string }
  published_at?: string
}): Metadata {
  return generateMetadata({
    title: post.title,
    description: post.excerpt || `Przeczytaj artykul: ${post.title}`,
    canonical: `${BASE_URL}/blog/${post.slug}`,
    openGraph: {
      type: 'article',
      image: post.featured_image || DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: 'summary_large_image',
      image: post.featured_image || DEFAULT_OG_IMAGE,
    },
  })
}

/**
 * Generate metadata for a service page
 */
export function generateServiceMetadata(service: {
  title: string
  description: string
  slug: string
  keywords?: string[]
}): Metadata {
  return generateMetadata({
    title: service.title,
    description: service.description,
    canonical: `${BASE_URL}/uslugi/${service.slug}`,
    keywords: service.keywords,
  })
}
