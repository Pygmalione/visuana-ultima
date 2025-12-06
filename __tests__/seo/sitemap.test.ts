/**
 * Sitemap Tests - SPEC-004 SEO & Analytics
 * Tests for dynamic sitemap.xml generation
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the sitemap function
const mockGetAllBlogSlugs = vi.fn()

vi.mock('@/lib/blog/api', () => ({
  getAllBlogSlugs: () => mockGetAllBlogSlugs()
}))

// Import after mock setup
import sitemap from '@/app/sitemap'

describe('Sitemap Generation', () => {
  const BASE_URL = 'https://visuana.pl'

  beforeEach(() => {
    vi.clearAllMocks()
    mockGetAllBlogSlugs.mockResolvedValue([
      { slug: 'example-post-1' },
      { slug: 'example-post-2' }
    ])
  })

  it('should include all static pages with correct structure', async () => {
    const result = await sitemap()

    // Check structure - each entry should have url, lastModified, changeFrequency, priority
    expect(Array.isArray(result)).toBe(true)
    result.forEach(entry => {
      expect(entry).toHaveProperty('url')
      expect(entry).toHaveProperty('lastModified')
      expect(entry).toHaveProperty('changeFrequency')
      expect(entry).toHaveProperty('priority')
    })
  })

  it('should include homepage with priority 1.0', async () => {
    const result = await sitemap()

    const homepage = result.find(entry => entry.url === BASE_URL)
    expect(homepage).toBeDefined()
    expect(homepage?.priority).toBe(1.0)
    expect(homepage?.changeFrequency).toBe('weekly')
  })

  it('should include service pages with priority 0.8', async () => {
    const result = await sitemap()

    const serviceUrls = [
      `${BASE_URL}/uslugi/content-marketing`,
      `${BASE_URL}/uslugi/influencer-marketing`,
      `${BASE_URL}/uslugi/ai-agents`,
      `${BASE_URL}/uslugi/market-research-azja`
    ]

    serviceUrls.forEach(url => {
      const servicePage = result.find(entry => entry.url === url)
      expect(servicePage).toBeDefined()
      expect(servicePage?.priority).toBe(0.8)
    })
  })

  it('should include dynamic blog post URLs', async () => {
    const result = await sitemap()

    const blogPost1 = result.find(entry => entry.url === `${BASE_URL}/blog/example-post-1`)
    const blogPost2 = result.find(entry => entry.url === `${BASE_URL}/blog/example-post-2`)

    expect(blogPost1).toBeDefined()
    expect(blogPost2).toBeDefined()
    expect(blogPost1?.priority).toBe(0.6)
    expect(blogPost2?.priority).toBe(0.6)
  })

  it('should have valid lastModified dates in ISO format', async () => {
    const result = await sitemap()

    result.forEach(entry => {
      // lastModified should be a valid Date or ISO string
      const date = entry.lastModified instanceof Date
        ? entry.lastModified
        : new Date(entry.lastModified as string)
      expect(date.getTime()).not.toBeNaN()
    })
  })

  it('should have valid changeFrequency values', async () => {
    const result = await sitemap()
    const validFrequencies = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']

    result.forEach(entry => {
      expect(validFrequencies).toContain(entry.changeFrequency)
    })
  })
})
