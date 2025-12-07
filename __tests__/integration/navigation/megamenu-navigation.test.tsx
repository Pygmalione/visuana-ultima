import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// ============================================
// MEGAMENU NAVIGATION INTEGRATION TESTS
// SPEC-011: Phase 8 - Task 14.1
// E2E-like tests for MegaMenu -> Industry/Role navigation flow
// ============================================

// Mock Next.js navigation
const mockPush = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
}))

import { MegaMenu, defaultIndustries, defaultRoles } from '@/components/layout/MegaMenu'

describe('MegaMenu Navigation Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  // ============================================
  // INDUSTRY NAVIGATION TESTS
  // ============================================

  describe('Industry Page Navigation', () => {
    it('renders all 5 industry items in MegaMenu', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      // Verify all 5 industries in MegaMenu
      expect(screen.getByText('SaaS / Tech')).toBeInTheDocument()
      expect(screen.getByText('E-commerce')).toBeInTheDocument()
      expect(screen.getByText('Professional Services')).toBeInTheDocument()
      expect(screen.getByText('Healthcare / MedTech')).toBeInTheDocument()
      expect(screen.getByText('Fintech')).toBeInTheDocument()
    })

    it('industry items have correct href paths', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      // Find all menuitems (links use role="menuitem")
      const menuItems = screen.getAllByRole('menuitem')

      // Get industry items by their text content
      const saasItem = menuItems.find(item => item.textContent?.includes('SaaS / Tech'))
      const ecommerceItem = menuItems.find(item => item.textContent?.includes('E-commerce'))
      const servicesItem = menuItems.find(item => item.textContent?.includes('Professional Services'))
      const medtechItem = menuItems.find(item => item.textContent?.includes('Healthcare / MedTech'))
      const fintechItem = menuItems.find(item => item.textContent?.includes('Fintech'))

      expect(saasItem).toHaveAttribute('href', '/dla/saas')
      expect(ecommerceItem).toHaveAttribute('href', '/dla/ecommerce')
      expect(servicesItem).toHaveAttribute('href', '/dla/uslugi-profesjonalne')
      expect(medtechItem).toHaveAttribute('href', '/dla/medtech')
      expect(fintechItem).toHaveAttribute('href', '/dla/fintech')
    })

    it('defaultIndustries has correct structure', () => {
      expect(defaultIndustries).toHaveLength(5)

      // Each industry should have full path in slug
      defaultIndustries.forEach(industry => {
        expect(industry.slug).toMatch(/^\/dla\//)
      })
    })

    it('each industry has description text visible', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      // All industries should have descriptions visible
      expect(screen.getByText('AI marketing dla firm technologicznych')).toBeInTheDocument()
      expect(screen.getByText('ROAS, kampanie produktowe')).toBeInTheDocument()
      expect(screen.getByText('Kancelarie, firmy doradcze')).toBeInTheDocument()
      expect(screen.getByText('Compliance-first marketing')).toBeInTheDocument()
      expect(screen.getByText('Marketing z wbudowana compliance')).toBeInTheDocument()
    })
  })

  // ============================================
  // ROLE NAVIGATION TESTS
  // ============================================

  describe('Role Page Navigation', () => {
    it('renders all 5 role items in MegaMenu', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      // Verify all 5 roles in MegaMenu
      expect(screen.getByText('CEO / Founder')).toBeInTheDocument()
      expect(screen.getByText('CMO / VP Marketing')).toBeInTheDocument()
      expect(screen.getByText('Marketing Director')).toBeInTheDocument()
      expect(screen.getByText('Head of Growth')).toBeInTheDocument()
      expect(screen.getByText('Startup Founder')).toBeInTheDocument()
    })

    it('role items have correct href paths', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      const menuItems = screen.getAllByRole('menuitem')

      // Get role items by their text content
      const ceoItem = menuItems.find(item => item.textContent?.includes('CEO / Founder'))
      const cmoItem = menuItems.find(item => item.textContent?.includes('CMO / VP Marketing'))
      const directorItem = menuItems.find(item => item.textContent?.includes('Marketing Director'))
      const growthItem = menuItems.find(item => item.textContent?.includes('Head of Growth'))
      const founderItem = menuItems.find(item => item.textContent?.includes('Startup Founder'))

      expect(ceoItem).toHaveAttribute('href', '/dla-ceo')
      expect(cmoItem).toHaveAttribute('href', '/dla-cmo')
      expect(directorItem).toHaveAttribute('href', '/dla-marketing-director')
      expect(growthItem).toHaveAttribute('href', '/dla-growth')
      expect(founderItem).toHaveAttribute('href', '/dla-founder')
    })

    it('defaultRoles has correct structure', () => {
      expect(defaultRoles).toHaveLength(5)

      // Each role should have /dla- prefix
      defaultRoles.forEach(role => {
        expect(role.slug).toMatch(/^\/dla-/)
      })
    })

    it('each role has description text visible', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      expect(screen.getByText('Dashboard ROI, decyzje strategiczne')).toBeInTheDocument()
      expect(screen.getByText('Partner, nie kolejna agencja')).toBeInTheDocument()
      expect(screen.getByText('Wykonanie z ograniczonym budzetem')).toBeInTheDocument()
      expect(screen.getByText('Eksperymenty, atrybucja')).toBeInTheDocument()
      expect(screen.getByText('Marketing na autopilot')).toBeInTheDocument()
    })
  })

  // ============================================
  // NAVIGATION INTERACTION TESTS
  // ============================================

  describe('Navigation Interactions', () => {
    it('closes menu when clicking on industry item', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()

      render(
        <MegaMenu
          isOpen={true}
          onClose={onClose}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      const menuItems = screen.getAllByRole('menuitem')
      const saasItem = menuItems.find(item => item.textContent?.includes('SaaS'))

      await user.click(saasItem!)

      expect(onClose).toHaveBeenCalled()
    })

    it('closes menu when clicking on role item', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()

      render(
        <MegaMenu
          isOpen={true}
          onClose={onClose}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      const menuItems = screen.getAllByRole('menuitem')
      const ceoItem = menuItems.find(item => item.textContent?.includes('CEO'))

      await user.click(ceoItem!)

      expect(onClose).toHaveBeenCalled()
    })

    it('total menu items count is correct', async () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      // 5 industries + 5 roles + 2 CTA buttons = 12 menu items
      const menuItems = screen.getAllByRole('menuitem')
      expect(menuItems.length).toBe(12)
    })
  })

  // ============================================
  // CTA BUTTONS TESTS
  // ============================================

  describe('CTA Buttons', () => {
    it('renders consultation CTA button', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      expect(screen.getByText(/Bezplatna konsultacja 15 min/i)).toBeInTheDocument()
    })

    it('renders case studies CTA button', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      expect(screen.getByText(/Zobacz case studies/i)).toBeInTheDocument()
    })

    it('CTA links have correct paths', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      const menuItems = screen.getAllByRole('menuitem')

      const consultationBtn = menuItems.find(item => item.textContent?.includes('konsultacja'))
      const caseStudiesBtn = menuItems.find(item => item.textContent?.includes('case studies'))

      expect(consultationBtn).toHaveAttribute('href', '/kontakt')
      expect(caseStudiesBtn).toHaveAttribute('href', '/case-studies')
    })
  })

  // ============================================
  // ACCESSIBILITY TESTS
  // ============================================

  describe('Accessibility', () => {
    it('has dialog role with aria attributes', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      const dialog = screen.getByRole('dialog')
      expect(dialog).toHaveAttribute('aria-modal', 'true')
      expect(dialog).toHaveAttribute('aria-label', 'Menu nawigacyjne - Dla kogo')
    })

    it('has close button with proper label', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      const closeBtn = screen.getByRole('button', { name: /zamknij menu/i })
      expect(closeBtn).toBeInTheDocument()
    })

    it('supports escape key to close', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()

      render(
        <MegaMenu
          isOpen={true}
          onClose={onClose}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      await user.keyboard('{Escape}')

      expect(onClose).toHaveBeenCalled()
    })

    it('has menu lists with correct roles', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      const menus = screen.getAllByRole('menu')
      expect(menus.length).toBe(2) // Industries menu + Roles menu
    })
  })

  // ============================================
  // DATA CONSISTENCY TESTS
  // ============================================

  describe('Data Consistency', () => {
    it('all industries have required fields', () => {
      defaultIndustries.forEach(industry => {
        expect(industry).toHaveProperty('id')
        expect(industry).toHaveProperty('name')
        expect(industry).toHaveProperty('slug')
        expect(industry).toHaveProperty('description')

        expect(industry.id).toBeTruthy()
        expect(industry.name).toBeTruthy()
        expect(industry.slug).toBeTruthy()
        expect(industry.description).toBeTruthy()
      })
    })

    it('all roles have required fields', () => {
      defaultRoles.forEach(role => {
        expect(role).toHaveProperty('id')
        expect(role).toHaveProperty('name')
        expect(role).toHaveProperty('slug')
        expect(role).toHaveProperty('description')

        expect(role.id).toBeTruthy()
        expect(role.name).toBeTruthy()
        expect(role.slug).toBeTruthy()
        expect(role.description).toBeTruthy()
      })
    })

    it('industry slugs are valid URL paths', () => {
      defaultIndustries.forEach(industry => {
        // Full path format: /dla/slug
        expect(industry.slug).toMatch(/^\/dla\/[a-z0-9-]+$/)
      })
    })

    it('role slugs are valid URL paths', () => {
      defaultRoles.forEach(role => {
        // Full path format: /dla-slug
        expect(role.slug).toMatch(/^\/dla-[a-z0-9-]+$/)
      })
    })

    it('industry ids match expected values', () => {
      const ids = defaultIndustries.map(ind => ind.id)
      expect(ids).toContain('saas')
      expect(ids).toContain('ecommerce')
      expect(ids).toContain('uslugi')
      expect(ids).toContain('medtech')
      expect(ids).toContain('fintech')
    })

    it('role ids match expected values', () => {
      const ids = defaultRoles.map(role => role.id)
      expect(ids).toContain('ceo')
      expect(ids).toContain('cmo')
      expect(ids).toContain('director')
      expect(ids).toContain('growth')
      expect(ids).toContain('founder')
    })
  })

  // ============================================
  // SECTION HEADINGS TESTS
  // ============================================

  describe('Section Headings', () => {
    it('displays industries section heading', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      expect(screen.getByText(/Branze/)).toBeInTheDocument()
    })

    it('displays roles section heading', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      expect(screen.getByText(/Pozycje/)).toBeInTheDocument()
    })

    it('displays quick links section heading', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      expect(screen.getByText(/Quick Links/)).toBeInTheDocument()
    })
  })

  // ============================================
  // VISIBILITY TESTS
  // ============================================

  describe('Visibility', () => {
    it('renders nothing when closed', () => {
      const { container } = render(
        <MegaMenu
          isOpen={false}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      expect(container.firstChild).toBeNull()
    })

    it('renders content when open', () => {
      render(
        <MegaMenu
          isOpen={true}
          onClose={() => {}}
          industries={defaultIndustries}
          roles={defaultRoles}
        />
      )

      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
  })
})
