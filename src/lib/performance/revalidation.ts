/**
 * Revalidation & Caching Configuration - SPEC-004 SEO & Analytics (Task Group 9)
 *
 * Central configuration for ISR, SSG, and caching strategies
 */

// ============================================
// REVALIDATION TIMES (seconds)
// ============================================

export const REVALIDATION_CONFIG = {
  /**
   * Blog posts - revalidate every hour
   * Content changes occasionally, balance freshness with performance
   */
  blogPost: 3600, // 1 hour

  /**
   * Blog listing - revalidate every 30 minutes
   * New posts appear, but not constantly
   */
  blogListing: 1800, // 30 minutes

  /**
   * Service pages - static generation
   * Content rarely changes, revalidate yearly (effectively static)
   */
  servicePage: 31536000, // 1 year (effectively static)

  /**
   * Homepage - revalidate every 12 hours
   * Stats and featured content may update
   */
  homepage: 43200, // 12 hours

  /**
   * Contact page - static
   * Contact info rarely changes, revalidate yearly
   */
  contactPage: 31536000, // 1 year (effectively static)

  /**
   * Categories - revalidate daily
   * New categories are rare
   */
  categories: 86400, // 24 hours
}

// ============================================
// CACHE TAGS FOR ON-DEMAND REVALIDATION
// ============================================

export const CACHE_TAGS = {
  /**
   * Tag for all blog-related content
   * Use: revalidateTag('blog')
   */
  blog: 'blog',

  /**
   * Tag for individual articles
   * Use: revalidateTag(`article-${slug}`)
   */
  article: (slug: string) => `article-${slug}`,

  /**
   * Tag for service pages
   * Use: revalidateTag('services')
   */
  services: 'services',

  /**
   * Tag for homepage content
   * Use: revalidateTag('homepage')
   */
  homepage: 'homepage',
}

// ============================================
// BUNDLE SIZE LIMITS (KB)
// ============================================

export const BUNDLE_SIZE_LIMITS = {
  /**
   * Main JavaScript bundle limit
   * Aim to keep below 250KB for good FCP
   */
  mainJs: 250,

  /**
   * First Load JS per page
   * Next.js target for fast initial load
   */
  firstLoadJs: 150,

  /**
   * CSS bundle limit
   * Tailwind should be well under this with purging
   */
  css: 50,

  /**
   * Total transfer size limit
   * All resources for initial page load
   */
  totalTransfer: 500,
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get revalidation time for a page type
 */
export function getRevalidationTime(
  pageType: keyof typeof REVALIDATION_CONFIG
): number {
  return REVALIDATION_CONFIG[pageType]
}

/**
 * Check if page should be statically generated (yearly revalidation = effectively static)
 */
export function isStaticPage(
  pageType: keyof typeof REVALIDATION_CONFIG
): boolean {
  return REVALIDATION_CONFIG[pageType] >= 31536000 // 1 year or more = static
}

// ============================================
// FETCH OPTIONS WITH CACHING
// ============================================

/**
 * Default fetch options for data fetching
 * Includes caching headers for Next.js
 */
export const fetchOptions = {
  /**
   * Static data - cache indefinitely
   */
  static: {
    cache: 'force-cache' as const,
  },

  /**
   * ISR data - revalidate periodically
   */
  isr: (seconds: number) => ({
    next: { revalidate: seconds },
  }),

  /**
   * Dynamic data - no caching
   */
  dynamic: {
    cache: 'no-store' as const,
  },
}

export default REVALIDATION_CONFIG
