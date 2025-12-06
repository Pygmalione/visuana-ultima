/**
 * SEO Metadata Tests - SPEC-004 SEO & Analytics
 * Tests for metadata generation utilities
 */

import { describe, it, expect } from 'vitest'
import type { Metadata } from 'next'
import {
  generateMetadata,
  getSiteDefaults,
  type SEOMetadata,
} from '@/lib/seo/metadata'

describe('SEO Metadata System', () => {
  describe('getSiteDefaults', () => {
    it('should return site-wide default metadata', () => {
      const defaults = getSiteDefaults()

      expect(defaults.title).toBeDefined()
      expect(defaults.description).toBeDefined()
      expect(defaults.openGraph).toBeDefined()
      expect(defaults.twitter).toBeDefined()
    })

    it('should have Visuana branding in defaults', () => {
      const defaults = getSiteDefaults()

      // Site name should be Visuana
      expect(defaults.openGraph.siteName).toBe('Visuana')
      // Default title is the tagline, site name is added in generateMetadata
      expect(defaults.title).toBeDefined()
    })
  })

  describe('generateMetadata', () => {
    it('should generate metadata with page-specific title', () => {
      const input: Partial<SEOMetadata> = {
        title: 'Content Marketing',
        description: 'Profesjonalny content marketing dla Twojej firmy',
      }

      const result = generateMetadata(input)

      expect(result.title).toBe('Content Marketing | Visuana')
      expect(result.description).toBe('Profesjonalny content marketing dla Twojej firmy')
    })

    it('should generate Open Graph meta tags', () => {
      const input: Partial<SEOMetadata> = {
        title: 'Blog',
        description: 'Artykuly o marketingu',
        openGraph: {
          type: 'website',
          image: '/images/og-blog.jpg',
        },
      }

      const result = generateMetadata(input)

      expect(result.openGraph).toBeDefined()
      // Check openGraph properties exist without strict typing
      const og = result.openGraph as Record<string, unknown>
      expect(og.title).toBe('Blog | Visuana')
      expect(og.description).toBe('Artykuly o marketingu')
      expect(og.type).toBe('website')
      expect(og.images).toContain('/images/og-blog.jpg')
    })

    it('should generate Twitter Card meta tags', () => {
      const input: Partial<SEOMetadata> = {
        title: 'Uslugi',
        description: 'Nasze uslugi marketingowe',
        twitter: {
          card: 'summary_large_image',
          image: '/images/twitter-services.jpg',
        },
      }

      const result = generateMetadata(input)

      expect(result.twitter).toBeDefined()
      // Check twitter properties exist without strict typing
      const twitter = result.twitter as Record<string, unknown>
      expect(twitter.card).toBe('summary_large_image')
      expect(twitter.title).toBe('Uslugi | Visuana')
      expect(twitter.images).toContain('/images/twitter-services.jpg')
    })

    it('should generate canonical URL when provided', () => {
      const input: Partial<SEOMetadata> = {
        title: 'Kontakt',
        canonical: 'https://visuana.pl/kontakt',
      }

      const result = generateMetadata(input)

      expect(result.alternates?.canonical).toBe('https://visuana.pl/kontakt')
    })

    it('should handle noIndex flag correctly', () => {
      const input: Partial<SEOMetadata> = {
        title: 'Draft Page',
        noIndex: true,
      }

      const result = generateMetadata(input)

      expect(result.robots).toBeDefined()
      // Check robots properties exist without strict typing
      const robots = result.robots as Record<string, unknown>
      expect(robots.index).toBe(false)
      expect(robots.follow).toBe(true)
    })

    it('should merge with site defaults for missing fields', () => {
      const input: Partial<SEOMetadata> = {
        title: 'Custom Page',
      }

      const result = generateMetadata(input)

      // Should have default description from site defaults
      expect(result.description).toBeDefined()
      const og = result.openGraph as Record<string, unknown>
      expect(og.siteName).toBe('Visuana')
    })

    it('should include keywords when provided', () => {
      const input: Partial<SEOMetadata> = {
        title: 'AI Marketing',
        keywords: ['AI', 'marketing', 'automatyzacja'],
      }

      const result = generateMetadata(input)

      expect(result.keywords).toContain('AI')
      expect(result.keywords).toContain('marketing')
    })
  })
})
