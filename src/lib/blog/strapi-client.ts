// ============================================
// STRAPI CLIENT - SPEC-003
// Client library for Strapi v5 CMS API
// ============================================

import type {
  Article,
  ArticleWithRelations,
  Author,
  Category,
  PaginatedResponse,
  BlogFilters,
} from '@/types/blog'

// ============================================
// CONFIGURATION
// ============================================

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://strapi.sophitech.pl'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

// ============================================
// STRAPI TYPES (API Response)
// ============================================

interface StrapiCategory {
  id: number
  documentId?: string
  name: string
  slug: string
  description?: string
  color?: string
  createdAt: string
  updatedAt: string
}

interface StrapiAuthor {
  id: number
  documentId?: string
  name: string
  slug: string
  bio?: string
  avatar?: { url: string } | null
  role?: string
  createdAt: string
  updatedAt: string
}

interface StrapiArticle {
  id: number
  documentId?: string
  title: string
  slug: string
  excerpt?: string
  content: string
  coverImage?: { url: string } | null
  publishedDate?: string
  category?: StrapiCategory
  author?: StrapiAuthor
  createdAt: string
  updatedAt: string
}

interface StrapiResponse<T> {
  data: T[]
  meta?: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

// ============================================
// MAPPERS - Strapi -> Our Types
// ============================================

export function mapStrapiCategory(strapi: StrapiCategory): Category {
  return {
    id: String(strapi.id),
    name: strapi.name,
    slug: strapi.slug,
    description: strapi.description,
    color: strapi.color,
    created_at: strapi.createdAt,
    updated_at: strapi.updatedAt,
  }
}

export function mapStrapiAuthor(strapi: StrapiAuthor): Author {
  return {
    id: String(strapi.id),
    name: strapi.name,
    slug: strapi.slug,
    bio: strapi.bio,
    avatar: strapi.avatar?.url,
    role: strapi.role,
    email: undefined,
    social_links: undefined,
    created_at: strapi.createdAt,
    updated_at: strapi.updatedAt,
  }
}

export function mapStrapiArticle(strapi: StrapiArticle): ArticleWithRelations {
  // Calculate reading time (~200 words per minute)
  const wordCount = strapi.content?.split(/\s+/).length || 0
  const readingTime = Math.ceil(wordCount / 200)

  // Default category and author if not populated
  const defaultCategory: Category = {
    id: '0',
    name: 'Uncategorized',
    slug: 'uncategorized',
    created_at: strapi.createdAt,
    updated_at: strapi.updatedAt,
  }

  const defaultAuthor: Author = {
    id: '0',
    name: 'Unknown',
    slug: 'unknown',
    created_at: strapi.createdAt,
    updated_at: strapi.updatedAt,
  }

  return {
    id: String(strapi.id),
    title: strapi.title,
    slug: strapi.slug,
    excerpt: strapi.excerpt,
    content: strapi.content,
    featured_image: strapi.coverImage?.url,
    featured_image_alt: strapi.title,
    category_id: strapi.category ? String(strapi.category.id) : '0',
    author_id: strapi.author ? String(strapi.author.id) : '0',
    status: 'published', // Strapi only returns published via public API
    published_at: strapi.publishedDate || strapi.createdAt,
    reading_time: readingTime,
    meta_title: strapi.title,
    meta_description: strapi.excerpt,
    og_image: strapi.coverImage?.url,
    tags: [],
    created_at: strapi.createdAt,
    updated_at: strapi.updatedAt,
    // Relations
    category: strapi.category ? mapStrapiCategory(strapi.category) : defaultCategory,
    author: strapi.author ? mapStrapiAuthor(strapi.author) : defaultAuthor,
  }
}

// ============================================
// BASE FETCH FUNCTION
// ============================================

async function strapiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> {
  const url = `${STRAPI_URL}/api${endpoint}`

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
    ...options.headers,
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      next: { revalidate: 60 }, // Cache for 60 seconds
    })

    if (!response.ok) {
      console.error(`Strapi fetch error: ${response.status} ${response.statusText}`)
      return null
    }

    return response.json()
  } catch (error) {
    console.error('Strapi fetch error:', error)
    return null
  }
}

// ============================================
// STRAPI CLIENT OBJECT
// ============================================

export const strapiClient = {
  fetch: strapiFetch,
  baseUrl: STRAPI_URL,
}

// ============================================
// CATEGORY API
// ============================================

export async function getCategories(): Promise<Category[]> {
  const response = await strapiFetch<StrapiResponse<StrapiCategory>>('/categories')

  if (!response?.data) {
    return []
  }

  return response.data.map(mapStrapiCategory)
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  const response = await strapiFetch<StrapiResponse<StrapiCategory>>(
    `/categories?filters[slug][$eq]=${encodeURIComponent(slug)}`
  )

  if (!response?.data?.length) {
    return undefined
  }

  return mapStrapiCategory(response.data[0])
}

// ============================================
// AUTHOR API
// ============================================

export async function getAuthors(): Promise<Author[]> {
  const response = await strapiFetch<StrapiResponse<StrapiAuthor>>('/authors')

  if (!response?.data) {
    return []
  }

  return response.data.map(mapStrapiAuthor)
}

export async function getAuthorBySlug(slug: string): Promise<Author | undefined> {
  const response = await strapiFetch<StrapiResponse<StrapiAuthor>>(
    `/authors?filters[slug][$eq]=${encodeURIComponent(slug)}`
  )

  if (!response?.data?.length) {
    return undefined
  }

  return mapStrapiAuthor(response.data[0])
}

// ============================================
// ARTICLE API
// ============================================

interface GetArticlesOptions {
  page?: number
  pageSize?: number
  category?: string
  author?: string
  search?: string
}

export async function getArticles(
  options: GetArticlesOptions = {}
): Promise<PaginatedResponse<ArticleWithRelations>> {
  const { page = 1, pageSize = 25, category, author, search } = options

  // Build query string
  const params = new URLSearchParams()
  params.set('populate[category]', '*')
  params.set('populate[author]', '*')
  params.set('populate[coverImage]', '*')
  params.set('pagination[page]', String(page))
  params.set('pagination[pageSize]', String(pageSize))
  params.set('sort[0]', 'publishedDate:desc')

  // Filters
  if (category) {
    params.set('filters[category][slug][$eq]', category)
  }
  if (author) {
    params.set('filters[author][slug][$eq]', author)
  }
  if (search) {
    params.set('filters[$or][0][title][$containsi]', search)
    params.set('filters[$or][1][excerpt][$containsi]', search)
  }

  const response = await strapiFetch<StrapiResponse<StrapiArticle>>(
    `/articles?${params.toString()}`
  )

  if (!response?.data) {
    return {
      data: [],
      total: 0,
      page: 1,
      per_page: pageSize,
      total_pages: 0,
    }
  }

  const pagination = response.meta?.pagination || {
    page: 1,
    pageSize,
    pageCount: 0,
    total: 0,
  }

  return {
    data: response.data.map(mapStrapiArticle),
    total: pagination.total,
    page: pagination.page,
    per_page: pagination.pageSize,
    total_pages: pagination.pageCount,
  }
}

export async function getArticleBySlug(slug: string): Promise<ArticleWithRelations | undefined> {
  const params = new URLSearchParams()
  params.set('filters[slug][$eq]', slug)
  params.set('populate[category]', '*')
  params.set('populate[author]', '*')
  params.set('populate[coverImage]', '*')

  const response = await strapiFetch<StrapiResponse<StrapiArticle>>(
    `/articles?${params.toString()}`
  )

  if (!response?.data?.length) {
    return undefined
  }

  return mapStrapiArticle(response.data[0])
}

export async function getLatestArticles(count: number = 3): Promise<ArticleWithRelations[]> {
  const result = await getArticles({ pageSize: count })
  return result.data
}

export async function getArticlesByCategory(
  categorySlug: string
): Promise<ArticleWithRelations[]> {
  const result = await getArticles({ category: categorySlug })
  return result.data
}

export async function getArticlesByAuthor(
  authorSlug: string
): Promise<ArticleWithRelations[]> {
  const result = await getArticles({ author: authorSlug })
  return result.data
}

// ============================================
// SITEMAP SUPPORT - SPEC-004
// ============================================

/**
 * Get all blog slugs for sitemap generation
 * Returns minimal data to reduce payload size
 */
export async function getAllBlogSlugs(): Promise<{ slug: string }[]> {
  const params = new URLSearchParams()
  params.set('fields[0]', 'slug')
  params.set('pagination[pageSize]', '1000') // Get all posts

  const response = await strapiFetch<StrapiResponse<{ slug: string }>>(
    `/articles?${params.toString()}`
  )

  if (!response?.data) {
    return []
  }

  return response.data.map(article => ({ slug: article.slug }))
}
