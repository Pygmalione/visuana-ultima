/**
 * Dynamic Sitemap Generator - SPEC-004 SEO & Analytics
 * Generates sitemap.xml for all public pages
 */

import { MetadataRoute } from 'next'

const BASE_URL = 'https://visuana.pl'

// Static pages configuration
const staticPages = [
  {
    path: '',
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  {
    path: '/blog',
    changeFrequency: 'daily' as const,
    priority: 0.8,
  },
  {
    path: '/kontakt',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/uslugi/content-marketing',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    path: '/uslugi/influencer-marketing',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    path: '/uslugi/ai-agents',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    path: '/uslugi/market-research-azja',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
]

/**
 * Fetches all blog slugs for dynamic sitemap entries
 * Gracefully handles errors by returning empty array
 */
async function getAllBlogSlugs(): Promise<{ slug: string }[]> {
  try {
    // Dynamic import to avoid circular dependencies
    const { getAllBlogSlugs: fetchSlugs } = await import('@/lib/blog/api')
    return await fetchSlugs()
  } catch {
    // If blog module not available, return empty array
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date()

  // Static pages
  const staticEntries: MetadataRoute.Sitemap = staticPages.map(page => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Dynamic blog posts
  const blogSlugs = await getAllBlogSlugs()
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map(({ slug }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
