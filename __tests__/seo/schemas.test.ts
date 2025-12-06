/**
 * JSON-LD Schema Tests - SPEC-004 SEO & Analytics
 * Tests for structured data generation
 */

import { describe, it, expect } from 'vitest'
import {
  organizationSchema,
  articleSchema,
  serviceSchema,
  faqSchema,
  type ArticleSchemaInput,
  type ServiceSchemaInput,
  type FAQItem,
} from '@/lib/seo/schemas'

describe('JSON-LD Structured Data', () => {
  describe('organizationSchema', () => {
    it('should generate valid Organization schema', () => {
      const schema = organizationSchema()

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Organization')
      expect(schema.name).toBe('Visuana')
      expect(schema.url).toBe('https://visuana.pl')
    })

    it('should include logo URL', () => {
      const schema = organizationSchema()

      expect(schema.logo).toBeDefined()
      expect(typeof schema.logo).toBe('string')
    })

    it('should include contact point', () => {
      const schema = organizationSchema()

      expect(schema.contactPoint).toBeDefined()
      expect(schema.contactPoint['@type']).toBe('ContactPoint')
      expect(schema.contactPoint.contactType).toBe('customer service')
    })

    it('should include social links in sameAs', () => {
      const schema = organizationSchema()

      expect(schema.sameAs).toBeDefined()
      expect(Array.isArray(schema.sameAs)).toBe(true)
    })
  })

  describe('articleSchema', () => {
    const mockArticle: ArticleSchemaInput = {
      title: 'Jak wykorzystac AI w marketingu',
      description: 'Przewodnik po zastosowaniach AI',
      slug: 'ai-w-marketingu',
      datePublished: '2025-01-15',
      dateModified: '2025-01-20',
      author: 'Karol Debkowski',
      image: '/images/ai-marketing.jpg',
    }

    it('should generate valid Article schema', () => {
      const schema = articleSchema(mockArticle)

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Article')
      expect(schema.headline).toBe(mockArticle.title)
    })

    it('should include author information', () => {
      const schema = articleSchema(mockArticle)

      expect(schema.author).toBeDefined()
      expect(schema.author['@type']).toBe('Person')
      expect(schema.author.name).toBe(mockArticle.author)
    })

    it('should include publisher information', () => {
      const schema = articleSchema(mockArticle)

      expect(schema.publisher).toBeDefined()
      expect(schema.publisher['@type']).toBe('Organization')
      expect(schema.publisher.name).toBe('Visuana')
    })

    it('should include dates in ISO format', () => {
      const schema = articleSchema(mockArticle)

      expect(schema.datePublished).toBe(mockArticle.datePublished)
      expect(schema.dateModified).toBe(mockArticle.dateModified)
    })

    it('should include image URL', () => {
      const schema = articleSchema(mockArticle)

      expect(schema.image).toBeDefined()
      expect(schema.image).toContain(mockArticle.image)
    })
  })

  describe('serviceSchema', () => {
    const mockService: ServiceSchemaInput = {
      name: 'Content Marketing',
      description: 'Profesjonalne uslugi content marketingu',
      slug: 'content-marketing',
    }

    it('should generate valid Service schema', () => {
      const schema = serviceSchema(mockService)

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Service')
      expect(schema.name).toBe(mockService.name)
      expect(schema.description).toBe(mockService.description)
    })

    it('should include provider (Visuana)', () => {
      const schema = serviceSchema(mockService)

      expect(schema.provider).toBeDefined()
      expect(schema.provider['@type']).toBe('Organization')
      expect(schema.provider.name).toBe('Visuana')
    })

    it('should include areaServed', () => {
      const schema = serviceSchema(mockService)

      expect(schema.areaServed).toBeDefined()
      expect(Array.isArray(schema.areaServed)).toBe(true)
      expect(schema.areaServed).toContain('Poland')
    })

    it('should include serviceType', () => {
      const schema = serviceSchema(mockService)

      expect(schema.serviceType).toBe('Marketing Services')
    })
  })

  describe('faqSchema', () => {
    const mockFAQs: FAQItem[] = [
      {
        question: 'Czym jest content marketing?',
        answer: 'Content marketing to strategia...',
      },
      {
        question: 'Ile kosztuja uslugi?',
        answer: 'Ceny sa ustalane indywidualnie...',
      },
    ]

    it('should generate valid FAQPage schema', () => {
      const schema = faqSchema(mockFAQs)

      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('FAQPage')
    })

    it('should include all FAQ items as mainEntity', () => {
      const schema = faqSchema(mockFAQs)

      expect(schema.mainEntity).toBeDefined()
      expect(Array.isArray(schema.mainEntity)).toBe(true)
      expect(schema.mainEntity.length).toBe(2)
    })

    it('should format FAQ items correctly', () => {
      const schema = faqSchema(mockFAQs)

      const firstItem = schema.mainEntity[0]
      expect(firstItem['@type']).toBe('Question')
      expect(firstItem.name).toBe(mockFAQs[0].question)
      expect(firstItem.acceptedAnswer['@type']).toBe('Answer')
      expect(firstItem.acceptedAnswer.text).toBe(mockFAQs[0].answer)
    })

    it('should return empty mainEntity for empty FAQ list', () => {
      const schema = faqSchema([])

      expect(schema.mainEntity).toEqual([])
    })
  })
})
