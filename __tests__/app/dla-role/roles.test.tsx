/**
 * Role Pages Tests - SPEC-011
 *
 * TDD tests for role-specific landing pages
 * URL pattern: /dla-[role]
 */

import { render, screen } from '@testing-library/react'
import { roles, getRoleBySlug, getAllRoleSlugs, getAllRoles } from '@/data/roles'
import { RolePageTemplate } from '@/components/templates/RolePageTemplate'
import { RoleSlug } from '@/types/role'

// ============================================
// DATA TESTS
// ============================================

describe('Roles Data', () => {
  const allSlugs: RoleSlug[] = [
    'ceo',
    'cmo',
    'marketing-director',
    'growth',
    'content-manager',
    'founder',
  ]

  describe('getAllRoleSlugs', () => {
    it('returns all 6 role slugs', () => {
      const slugs = getAllRoleSlugs()
      expect(slugs).toHaveLength(6)
      allSlugs.forEach((slug) => {
        expect(slugs).toContain(slug)
      })
    })
  })

  describe('getRoleBySlug', () => {
    it('returns correct role for valid slug', () => {
      const role = getRoleBySlug('ceo')
      expect(role).toBeDefined()
      expect(role?.name).toBe('CEO / Founder')
    })

    it('returns correct role for cmo slug', () => {
      const role = getRoleBySlug('cmo')
      expect(role).toBeDefined()
      expect(role?.name).toBe('CMO / VP Marketing')
    })

    it('returns undefined for invalid slug', () => {
      const role = getRoleBySlug('invalid-slug')
      expect(role).toBeUndefined()
    })
  })

  describe('getAllRoles', () => {
    it('returns all 6 roles', () => {
      const allRoles = getAllRoles()
      expect(allRoles).toHaveLength(6)
    })
  })

  describe('Role data structure', () => {
    allSlugs.forEach((slug) => {
      describe(`Role: ${slug}`, () => {
        const role = roles[slug]

        it('has required string fields', () => {
          expect(role.id).toBeTruthy()
          expect(role.slug).toBe(slug)
          expect(role.name).toBeTruthy()
          expect(role.headline).toBeTruthy()
          expect(role.subheadline).toBeTruthy()
          expect(role.metaTitle).toBeTruthy()
          expect(role.metaDescription).toBeTruthy()
        })

        it('has challenges (3-5 items)', () => {
          expect(role.challenges.length).toBeGreaterThanOrEqual(3)
          expect(role.challenges.length).toBeLessThanOrEqual(5)
          role.challenges.forEach((challenge) => {
            expect(challenge.id).toBeTruthy()
            expect(challenge.title).toBeTruthy()
            expect(challenge.description).toBeTruthy()
            expect(challenge.icon).toBeTruthy()
          })
        })

        it('has solutions (2-4 items)', () => {
          expect(role.solutions.length).toBeGreaterThanOrEqual(2)
          expect(role.solutions.length).toBeLessThanOrEqual(4)
          role.solutions.forEach((solution) => {
            expect(solution.id).toBeTruthy()
            expect(solution.title).toBeTruthy()
            expect(solution.description).toBeTruthy()
            expect(solution.benefits.length).toBeGreaterThanOrEqual(2)
            expect(solution.icon).toBeTruthy()
          })
        })

        it('has testimonial with required fields', () => {
          expect(role.testimonial.quote).toBeTruthy()
          expect(role.testimonial.author).toBeTruthy()
          expect(role.testimonial.title).toBeTruthy()
          expect(role.testimonial.company).toBeTruthy()
        })

        it('has industries for navigation', () => {
          expect(role.industries.length).toBeGreaterThanOrEqual(5)
          role.industries.forEach((industry) => {
            expect(industry.id).toBeTruthy()
            expect(industry.name).toBeTruthy()
            expect(industry.slug).toBeTruthy()
            expect(industry.description).toBeTruthy()
          })
        })

        it('has CTA text and description', () => {
          expect(role.ctaText).toBeTruthy()
          expect(role.ctaDescription).toBeTruthy()
        })
      })
    })
  })

  describe('Role-specific content validation', () => {
    it('CEO role has correct headline', () => {
      const role = roles.ceo
      expect(role.headline).toContain('ROI')
    })

    it('CMO role has correct headline', () => {
      const role = roles.cmo
      expect(role.headline).toContain('Partner')
    })

    it('Marketing Director role has correct headline', () => {
      const role = roles['marketing-director']
      expect(role.headline).toContain('budzet')
    })

    it('Head of Growth role has correct headline', () => {
      const role = roles.growth
      expect(role.headline).toContain('Growth Engineering')
    })

    it('Content Manager role has correct headline', () => {
      const role = roles['content-manager']
      expect(role.headline).toContain('10x')
    })

    it('Startup Founder role has correct headline', () => {
      const role = roles.founder
      expect(role.headline).toContain('autopilot')
    })
  })
})

// ============================================
// COMPONENT TESTS
// ============================================

describe('RolePageTemplate', () => {
  const testRole = roles.ceo

  it('renders hero section with headline', () => {
    render(<RolePageTemplate role={testRole} />)

    const hero = screen.getByTestId('role-hero')
    expect(hero).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(testRole.headline)
  })

  it('renders role name badge', () => {
    render(<RolePageTemplate role={testRole} />)

    // Role badge contains "Dla CEO / Founder"
    const badges = screen.getAllByText(/CEO/)
    expect(badges.length).toBeGreaterThan(0)
  })

  it('renders challenges section', () => {
    render(<RolePageTemplate role={testRole} />)

    const challengesSection = screen.getByTestId('role-challenges')
    expect(challengesSection).toBeInTheDocument()
    expect(screen.getByText('Znamy Twoje wyzwania')).toBeInTheDocument()

    testRole.challenges.forEach((challenge) => {
      expect(screen.getByText(challenge.title)).toBeInTheDocument()
    })
  })

  it('renders solutions section', () => {
    render(<RolePageTemplate role={testRole} />)

    const solutionsSection = screen.getByTestId('role-solutions')
    expect(solutionsSection).toBeInTheDocument()
    expect(screen.getByText('Jak Ci pomagamy')).toBeInTheDocument()

    testRole.solutions.forEach((solution) => {
      expect(screen.getByText(solution.title)).toBeInTheDocument()
    })
  })

  it('renders industries navigation section', () => {
    render(<RolePageTemplate role={testRole} />)

    const industriesSection = screen.getByTestId('role-industries')
    expect(industriesSection).toBeInTheDocument()
    expect(screen.getByText('Wybierz swoja branze')).toBeInTheDocument()
  })

  it('renders testimonial section', () => {
    render(<RolePageTemplate role={testRole} />)

    const testimonialSection = screen.getByTestId('role-testimonial')
    expect(testimonialSection).toBeInTheDocument()
    expect(screen.getByText(testRole.testimonial.quote)).toBeInTheDocument()
    expect(screen.getByText(testRole.testimonial.author)).toBeInTheDocument()
  })

  it('renders CTA section with role-specific text', () => {
    render(<RolePageTemplate role={testRole} />)

    const ctaSection = screen.getByTestId('role-cta')
    expect(ctaSection).toBeInTheDocument()
    // CTA text appears multiple times (hero and CTA section)
    const ctaTexts = screen.getAllByText(testRole.ctaText)
    expect(ctaTexts.length).toBeGreaterThan(0)
  })

  it('has correct link to contact page', () => {
    render(<RolePageTemplate role={testRole} />)

    const ctaLinks = screen.getAllByRole('link', { name: new RegExp(testRole.ctaText, 'i') })
    expect(ctaLinks.length).toBeGreaterThan(0)
    ctaLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/kontakt')
    })
  })
})

// ============================================
// ROLE PAGE TESTS
// ============================================

describe('Role Page (static routes)', () => {
  it('getAllRoleSlugs returns slugs for static generation', () => {
    const slugs = getAllRoleSlugs()

    expect(slugs).toContain('ceo')
    expect(slugs).toContain('cmo')
    expect(slugs).toContain('marketing-director')
    expect(slugs).toContain('growth')
    expect(slugs).toContain('content-manager')
    expect(slugs).toContain('founder')
  })

  it('each role has valid metadata fields', () => {
    getAllRoleSlugs().forEach((slug) => {
      const role = getRoleBySlug(slug)
      expect(role).toBeDefined()
      expect(role?.metaTitle).toContain('Visuana')
      expect(role?.metaDescription.length).toBeGreaterThan(50)
    })
  })

  it('each role can be used in template without errors', () => {
    getAllRoleSlugs().forEach((slug) => {
      const role = getRoleBySlug(slug)
      if (role) {
        expect(() => {
          render(<RolePageTemplate role={role} />)
        }).not.toThrow()
      }
    })
  })
})

// ============================================
// URL PATTERN TESTS
// ============================================

describe('Role URL pattern', () => {
  it('uses /dla-[role] pattern (not /dla/[role])', () => {
    const slugs = getAllRoleSlugs()

    // URL pattern should be /dla-ceo, /dla-cmo, etc.
    slugs.forEach((slug) => {
      const expectedUrl = `/dla-${slug}`
      expect(expectedUrl).toMatch(/^\/dla-[a-z-]+$/)
    })
  })

  it('all role slugs are valid for URL', () => {
    const slugs = getAllRoleSlugs()

    slugs.forEach((slug) => {
      // Slug should only contain lowercase letters and hyphens
      expect(slug).toMatch(/^[a-z-]+$/)
    })
  })
})
