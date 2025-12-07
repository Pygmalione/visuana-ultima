/**
 * Dynamic Sitemap Generator - SPEC-004 SEO & Analytics
 * Generates sitemap.xml for all public pages
 * Updated: SPEC-003 - Added blog articles and categories
 */

import { MetadataRoute } from 'next'
import type { ArticleWithRelations, Category } from '@/types/blog'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://visuana.pl'

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
 * Fetches all blog articles with their dates for sitemap
 * Returns articles with slug and updated_at for accurate lastModified
 */
async function getBlogArticles(): Promise<ArticleWithRelations[]> {
  try {
    const { getArticles, articles: mockArticles } = await import('@/lib/blog')
    const result = await getArticles({ pageSize: 100 })

    // Use Strapi data if available, fallback to mock
    if (result.data.length > 0) {
      return result.data
    }
    return mockArticles
  } catch {
    // Fallback to mock data on error
    try {
      const { articles: mockArticles } = await import('@/lib/blog')
      return mockArticles
    } catch {
      return []
    }
  }
}

/**
 * Fetches all blog categories for sitemap
 */
async function getBlogCategories(): Promise<Category[]> {
  try {
    const { getCategories, categories: mockCategories } = await import('@/lib/blog')
    const categories = await getCategories()

    // Use Strapi data if available, fallback to mock
    if (categories.length > 0) {
      return categories
    }
    return mockCategories
  } catch {
    // Fallback to mock data on error
    try {
      const { categories: mockCategories } = await import('@/lib/blog')
      return mockCategories
    } catch {
      return []
    }
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

  // Fetch blog data
  const [articles, categories] = await Promise.all([
    getBlogArticles(),
    getBlogCategories(),
  ])

  // Blog article entries with actual lastModified dates
  const blogEntries: MetadataRoute.Sitemap = articles
    .filter(article => article.status === 'published')
    .map(article => ({
      url: `${BASE_URL}/blog/${article.slug}`,
      lastModified: article.updated_at ? new Date(article.updated_at) : currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

  // Blog category filter pages (using query params as defined in blog page)
  const categoryEntries: MetadataRoute.Sitemap = categories.map(category => ({
    url: `${BASE_URL}/blog?kategoria=${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...staticEntries, ...blogEntries, ...categoryEntries]
}
