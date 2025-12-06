// ============================================
// STRAPI CLIENT TESTS - SPEC-003
// TDD: Write tests first, then implement
// ============================================

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import {
  strapiClient,
  getArticles,
  getArticleBySlug,
  getCategories,
  getCategoryBySlug,
  getAuthors,
  getAuthorBySlug,
  mapStrapiArticle,
  mapStrapiCategory,
  mapStrapiAuthor,
} from '@/lib/blog/strapi-client'
import type { Article, Category, Author } from '@/types/blog'

// ============================================
// MOCK DATA - Strapi v5 API response format
// ============================================

const mockStrapiCategory = {
  id: 1,
  documentId: 'cat-1',
  name: 'Content marketing',
  slug: 'content-marketing',
  description: 'Strategie treści, copywriting, storytelling',
  color: '#B91C1C',
  createdAt: '2025-01-01T00:00:00.000Z',
  updatedAt: '2025-01-01T00:00:00.000Z',
}

const mockStrapiAuthor = {
  id: 1,
  documentId: 'auth-1',
  name: 'Karol Dębkowski',
  slug: 'karol-debkowski',
  bio: '12 lat w marketingu. Połowę w Azji.',
  avatar: null,
  role: 'Founder & CEO',
  createdAt: '2025-01-01T00:00:00.000Z',
  updatedAt: '2025-01-01T00:00:00.000Z',
}

const mockStrapiArticle = {
  id: 1,
  documentId: 'art-1',
  title: 'Test Article',
  slug: 'test-article',
  excerpt: 'Test excerpt',
  content: '# Test Content',
  publishedDate: '2025-01-10T10:00:00.000Z',
  createdAt: '2025-01-08T00:00:00.000Z',
  updatedAt: '2025-01-10T10:00:00.000Z',
  coverImage: null,
  category: mockStrapiCategory,
  author: mockStrapiAuthor,
}

// ============================================
// MAPPING TESTS
// ============================================

describe('Strapi Mappers', () => {
  describe('mapStrapiCategory', () => {
    it('maps Strapi category to our Category type', () => {
      const result = mapStrapiCategory(mockStrapiCategory)

      expect(result).toEqual({
        id: '1',
        name: 'Content marketing',
        slug: 'content-marketing',
        description: 'Strategie treści, copywriting, storytelling',
        color: '#B91C1C',
        created_at: '2025-01-01T00:00:00.000Z',
        updated_at: '2025-01-01T00:00:00.000Z',
      })
    })

    it('handles missing optional fields', () => {
      const minimal = { id: 2, name: 'Test', slug: 'test', createdAt: '2025-01-01T00:00:00.000Z', updatedAt: '2025-01-01T00:00:00.000Z' }
      const result = mapStrapiCategory(minimal)

      expect(result.description).toBeUndefined()
      expect(result.color).toBeUndefined()
    })
  })

  describe('mapStrapiAuthor', () => {
    it('maps Strapi author to our Author type', () => {
      const result = mapStrapiAuthor(mockStrapiAuthor)

      expect(result).toEqual({
        id: '1',
        name: 'Karol Dębkowski',
        slug: 'karol-debkowski',
        bio: '12 lat w marketingu. Połowę w Azji.',
        avatar: undefined,
        role: 'Founder & CEO',
        email: undefined,
        social_links: undefined,
        created_at: '2025-01-01T00:00:00.000Z',
        updated_at: '2025-01-01T00:00:00.000Z',
      })
    })
  })

  describe('mapStrapiArticle', () => {
    it('maps Strapi article with relations to our ArticleWithRelations type', () => {
      const result = mapStrapiArticle(mockStrapiArticle)

      expect(result.id).toBe('1')
      expect(result.title).toBe('Test Article')
      expect(result.slug).toBe('test-article')
      expect(result.excerpt).toBe('Test excerpt')
      expect(result.content).toBe('# Test Content')
      expect(result.status).toBe('published')
      expect(result.category.name).toBe('Content marketing')
      expect(result.author.name).toBe('Karol Dębkowski')
    })

    it('calculates reading time from content length', () => {
      const longContent = { ...mockStrapiArticle, content: 'word '.repeat(1000) } // 1000 words
      const result = mapStrapiArticle(longContent)

      // ~200 words per minute, so 1000 words = ~5 min
      expect(result.reading_time).toBeGreaterThanOrEqual(4)
      expect(result.reading_time).toBeLessThanOrEqual(6)
    })
  })
})

// ============================================
// API CLIENT TESTS
// ============================================

describe('Strapi Client', () => {
  const originalFetch = global.fetch

  beforeEach(() => {
    vi.resetAllMocks()
  })

  afterEach(() => {
    global.fetch = originalFetch
  })

  describe('getCategories', () => {
    it('fetches and maps all categories', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          data: [mockStrapiCategory],
          meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } },
        }),
      })

      const result = await getCategories()

      expect(result).toHaveLength(1)
      expect(result[0].name).toBe('Content marketing')
    })

    it('returns empty array on error', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      })

      const result = await getCategories()

      expect(result).toEqual([])
    })
  })

  describe('getCategoryBySlug', () => {
    it('fetches category by slug', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          data: [mockStrapiCategory],
        }),
      })

      const result = await getCategoryBySlug('content-marketing')

      expect(result?.slug).toBe('content-marketing')
    })

    it('returns undefined when not found', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ data: [] }),
      })

      const result = await getCategoryBySlug('non-existent')

      expect(result).toBeUndefined()
    })
  })

  describe('getArticles', () => {
    it('fetches articles with relations populated', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          data: [mockStrapiArticle],
          meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } },
        }),
      })

      const result = await getArticles()

      expect(result.data).toHaveLength(1)
      expect(result.data[0].title).toBe('Test Article')
      expect(result.data[0].category).toBeDefined()
      expect(result.data[0].author).toBeDefined()
    })

    it('supports pagination', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          data: [mockStrapiArticle],
          meta: { pagination: { page: 2, pageSize: 10, pageCount: 5, total: 50 } },
        }),
      })

      const result = await getArticles({ page: 2, pageSize: 10 })

      expect(result.page).toBe(2)
      expect(result.per_page).toBe(10)
      expect(result.total).toBe(50)
    })

    it('supports category filter', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          data: [mockStrapiArticle],
          meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 1 } },
        }),
      })

      await getArticles({ category: 'content-marketing' })

      // URL will be encoded, so check for the encoded version
      const callUrl = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0][0] as string
      expect(decodeURIComponent(callUrl)).toContain('filters[category][slug][$eq]=content-marketing')
    })
  })

  describe('getArticleBySlug', () => {
    it('fetches single article by slug with relations', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          data: [mockStrapiArticle],
        }),
      })

      const result = await getArticleBySlug('test-article')

      expect(result?.slug).toBe('test-article')
      expect(result?.category).toBeDefined()
      expect(result?.author).toBeDefined()
    })

    it('returns undefined when not found', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ data: [] }),
      })

      const result = await getArticleBySlug('non-existent')

      expect(result).toBeUndefined()
    })
  })

  describe('getAuthors', () => {
    it('fetches all authors', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({
          data: [mockStrapiAuthor],
        }),
      })

      const result = await getAuthors()

      expect(result).toHaveLength(1)
      expect(result[0].name).toBe('Karol Dębkowski')
    })
  })
})
