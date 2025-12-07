/**
 * RSS Feed Route Handler - SPEC-003
 * Generates RSS 2.0 feed for blog articles
 * Route: /feed.xml
 */

import { getArticles, getCategories, articles as mockArticles, categories as mockCategories } from '@/lib/blog'
import type { ArticleWithRelations, Category } from '@/types/blog'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://visuana.pl'

/**
 * Escapes special XML characters to prevent injection
 */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Strips HTML tags from content for clean excerpt
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

/**
 * Generates RSS 2.0 feed XML
 */
function generateRssFeed(
  blogArticles: ArticleWithRelations[],
  blogCategories: Category[]
): string {
  const categoryList = blogCategories.map((c) => c.name).join(', ')
  const now = new Date()

  const items = blogArticles
    .filter((article) => article.status === 'published' && article.published_at)
    .sort((a, b) => new Date(b.published_at!).getTime() - new Date(a.published_at!).getTime())
    .map((article) => {
      const excerpt = article.excerpt || stripHtml(article.content).substring(0, 200) + '...'

      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${BASE_URL}/blog/${article.slug}</link>
      <description>${escapeXml(excerpt)}</description>
      <pubDate>${new Date(article.published_at!).toUTCString()}</pubDate>
      <guid isPermaLink="true">${BASE_URL}/blog/${article.slug}</guid>
      <category>${escapeXml(article.category?.name || 'Uncategorized')}</category>
      <author>${escapeXml(article.author?.name || 'Visuana')}</author>
    </item>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Visuana Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Marketing AI-Powered insights. Strategie content marketingu, influencer marketingu i narzedzi AI od praktykow z 12-letnim doswiadczeniem.</description>
    <language>pl-PL</language>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <category>${categoryList}</category>
    <copyright>Copyright ${now.getFullYear()} Visuana. All rights reserved.</copyright>
    <managingEditor>kontakt@visuana.pl (Visuana)</managingEditor>
    <webMaster>kontakt@visuana.pl (Visuana)</webMaster>
    <ttl>60</ttl>
    <image>
      <url>${BASE_URL}/og-image.png</url>
      <title>Visuana Blog</title>
      <link>${BASE_URL}/blog</link>
    </image>${items}
  </channel>
</rss>`
}

/**
 * GET /feed.xml
 * Returns RSS 2.0 feed with blog articles
 */
export async function GET() {
  try {
    // Try to fetch from Strapi first
    const [articlesResult, categoriesResult] = await Promise.all([
      getArticles({ pageSize: 50 }),
      getCategories(),
    ])

    let articles: ArticleWithRelations[] = articlesResult.data
    let categories: Category[] = categoriesResult

    // Fallback to mock data if Strapi returns empty
    if (articles.length === 0) {
      articles = mockArticles
      categories = mockCategories
    }

    const feed = generateRssFeed(articles, categories)

    return new Response(feed, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('RSS feed generation error:', error)

    // Fallback to mock data on error
    const feed = generateRssFeed(mockArticles, mockCategories)

    return new Response(feed, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=1800, s-maxage=1800',
      },
    })
  }
}

// Export for testing
export { generateRssFeed, escapeXml, stripHtml }
