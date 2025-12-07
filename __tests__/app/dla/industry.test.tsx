/**
 * Industry Pages Tests - SPEC-011
 *
 * TDD tests for industry landing pages
 */

import { render, screen } from '@testing-library/react'
import { industries, getIndustryBySlug, getAllIndustrySlugs, getAllIndustries } from '@/data/industries'
import { IndustryPageTemplate } from '@/components/templates/IndustryPageTemplate'
import { IndustrySlug } from '@/types/industry'

// ============================================
// DATA TESTS
// ============================================

describe('Industries Data', () => {
  const allSlugs: IndustrySlug[] = [
    'saas',
    'ecommerce',
    'uslugi-profesjonalne',
    'medtech',
    'fintech',
    'produkcja',
    'edtech',
    'nieruchomosci',
  ]

  describe('getAllIndustrySlugs', () => {
    it('returns all 8 industry slugs', () => {
      const slugs = getAllIndustrySlugs()
      expect(slugs).toHaveLength(8)
      allSlugs.forEach((slug) => {
        expect(slugs).toContain(slug)
      })
    })
  })

  describe('getIndustryBySlug', () => {
    it('returns correct industry for valid slug', () => {
      const industry = getIndustryBySlug('saas')
      expect(industry).toBeDefined()
      expect(industry?.name).toBe('SaaS / Tech')
    })

    it('returns undefined for invalid slug', () => {
      const industry = getIndustryBySlug('invalid-slug')
      expect(industry).toBeUndefined()
    })
  })

  describe('getAllIndustries', () => {
    it('returns all 8 industries', () => {
      const allIndustries = getAllIndustries()
      expect(allIndustries).toHaveLength(8)
    })
  })

  describe('Industry data structure', () => {
    allSlugs.forEach((slug) => {
      describe(`Industry: ${slug}`, () => {
        const industry = industries[slug]

        it('has required string fields', () => {
          expect(industry.id).toBeTruthy()
          expect(industry.slug).toBe(slug)
          expect(industry.name).toBeTruthy()
          expect(industry.headline).toBeTruthy()
          expect(industry.metaTitle).toBeTruthy()
          expect(industry.metaDescription).toBeTruthy()
        })

        it('has value props (2-3 items)', () => {
          expect(industry.valueProps.length).toBeGreaterThanOrEqual(2)
          expect(industry.valueProps.length).toBeLessThanOrEqual(4)
        })

        it('has pain points (3-4 items)', () => {
          expect(industry.painPoints.length).toBeGreaterThanOrEqual(3)
          expect(industry.painPoints.length).toBeLessThanOrEqual(5)
          industry.painPoints.forEach((pp) => {
            expect(pp.id).toBeTruthy()
            expect(pp.title).toBeTruthy()
            expect(pp.description).toBeTruthy()
            expect(pp.icon).toBeTruthy()
          })
        })

        it('has solutions (3-4 items)', () => {
          expect(industry.solutions.length).toBeGreaterThanOrEqual(2)
          expect(industry.solutions.length).toBeLessThanOrEqual(4)
          industry.solutions.forEach((solution) => {
            expect(solution.id).toBeTruthy()
            expect(solution.title).toBeTruthy()
            expect(solution.description).toBeTruthy()
            expect(solution.benefits.length).toBeGreaterThanOrEqual(2)
            expect(solution.icon).toBeTruthy()
          })
        })

        it('has case study with metrics', () => {
          expect(industry.caseStudy.title).toBeTruthy()
          expect(industry.caseStudy.description).toBeTruthy()
          expect(industry.caseStudy.metrics.length).toBeGreaterThanOrEqual(2)
          industry.caseStudy.metrics.forEach((metric) => {
            expect(metric.value).toBeTruthy()
            expect(metric.label).toBeTruthy()
          })
        })

        it('has FAQs (3-7 items)', () => {
          expect(industry.faqs.length).toBeGreaterThanOrEqual(3)
          expect(industry.faqs.length).toBeLessThanOrEqual(7)
          industry.faqs.forEach((faq) => {
            expect(faq.question).toBeTruthy()
            expect(faq.answer).toBeTruthy()
          })
        })

        it('has related roles', () => {
          expect(industry.relatedRoles.length).toBeGreaterThanOrEqual(2)
          industry.relatedRoles.forEach((role) => {
            expect(role.id).toBeTruthy()
            expect(role.name).toBeTruthy()
            expect(role.slug).toBeTruthy()
          })
        })
      })
    })
  })
})

// ============================================
// COMPONENT TESTS
// ============================================

describe('IndustryPageTemplate', () => {
  const testIndustry = industries.saas

  it('renders hero section with headline', () => {
    render(<IndustryPageTemplate industry={testIndustry} />)

    const hero = screen.getByTestId('industry-hero')
    expect(hero).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(testIndustry.headline)
  })

  it('renders value props', () => {
    render(<IndustryPageTemplate industry={testIndustry} />)

    testIndustry.valueProps.forEach((prop) => {
      expect(screen.getByText(prop)).toBeInTheDocument()
    })
  })

  it('renders pain points section', () => {
    render(<IndustryPageTemplate industry={testIndustry} />)

    const painPointsSection = screen.getByTestId('industry-pain-points')
    expect(painPointsSection).toBeInTheDocument()
    expect(screen.getByText('Czy to brzmi znajomo?')).toBeInTheDocument()

    testIndustry.painPoints.forEach((pp) => {
      expect(screen.getByText(pp.title)).toBeInTheDocument()
    })
  })

  it('renders solutions section', () => {
    render(<IndustryPageTemplate industry={testIndustry} />)

    const solutionsSection = screen.getByTestId('industry-solutions')
    expect(solutionsSection).toBeInTheDocument()

    testIndustry.solutions.forEach((solution) => {
      expect(screen.getByText(solution.title)).toBeInTheDocument()
    })
  })

  it('renders case study section with metrics', () => {
    render(<IndustryPageTemplate industry={testIndustry} />)

    const caseStudySection = screen.getByTestId('industry-case-study')
    expect(caseStudySection).toBeInTheDocument()
    expect(screen.getByText(testIndustry.caseStudy.title)).toBeInTheDocument()

    testIndustry.caseStudy.metrics.forEach((metric) => {
      expect(screen.getByText(metric.value)).toBeInTheDocument()
    })
  })

  it('renders FAQ section', () => {
    render(<IndustryPageTemplate industry={testIndustry} />)

    const faqSection = screen.getByTestId('industry-faq')
    expect(faqSection).toBeInTheDocument()
    expect(screen.getByText('Czesto zadawane pytania')).toBeInTheDocument()

    testIndustry.faqs.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument()
    })
  })

  it('renders CTA section', () => {
    render(<IndustryPageTemplate industry={testIndustry} />)

    const ctaSection = screen.getByTestId('industry-cta')
    expect(ctaSection).toBeInTheDocument()
    expect(screen.getByText(/Gotowy na wzrost/)).toBeInTheDocument()
  })

  it('renders roles navigation', () => {
    render(<IndustryPageTemplate industry={testIndustry} />)

    const rolesSection = screen.getByTestId('industry-roles')
    expect(rolesSection).toBeInTheDocument()
    expect(screen.getByText('Dopasuj do swojej roli')).toBeInTheDocument()

    testIndustry.relatedRoles.forEach((role) => {
      expect(screen.getByText(role.name)).toBeInTheDocument()
    })
  })

  it('has correct link to contact page', () => {
    render(<IndustryPageTemplate industry={testIndustry} />)

    const ctaLinks = screen.getAllByRole('link', { name: /konsultacj/i })
    expect(ctaLinks.length).toBeGreaterThan(0)
    ctaLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/kontakt')
    })
  })
})

// ============================================
// INDUSTRY PAGE TESTS
// ============================================

describe('Industry Page (dynamic route)', () => {
  it('getAllIndustrySlugs returns slugs for static generation', () => {
    const slugs = getAllIndustrySlugs()

    expect(slugs).toContain('saas')
    expect(slugs).toContain('ecommerce')
    expect(slugs).toContain('uslugi-profesjonalne')
    expect(slugs).toContain('medtech')
    expect(slugs).toContain('fintech')
    expect(slugs).toContain('produkcja')
    expect(slugs).toContain('edtech')
    expect(slugs).toContain('nieruchomosci')
  })

  it('each industry has valid metadata fields', () => {
    getAllIndustrySlugs().forEach((slug) => {
      const industry = getIndustryBySlug(slug)
      expect(industry).toBeDefined()
      expect(industry?.metaTitle).toContain('Visuana')
      expect(industry?.metaDescription.length).toBeGreaterThan(50)
    })
  })

  it('each industry can be used in template without errors', () => {
    getAllIndustrySlugs().forEach((slug) => {
      const industry = getIndustryBySlug(slug)
      if (industry) {
        expect(() => {
          render(<IndustryPageTemplate industry={industry} />)
        }).not.toThrow()
      }
    })
  })
})
