import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MegaMenu, defaultIndustries, defaultRoles } from '@/components/layout/MegaMenu'

// ============================================
// MEGAMENU TESTS - SPEC-011
// ============================================

describe('MegaMenu', () => {
  const mockOnClose = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  // Test 1: Does not render when closed
  it('does not render when isOpen is false', () => {
    render(
      <MegaMenu
        isOpen={false}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  // Test 2: Renders when open
  it('renders when isOpen is true', () => {
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  // Test 3: Renders all industries
  it('renders all industry items', () => {
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    defaultIndustries.forEach((industry) => {
      expect(screen.getByText(industry.name)).toBeInTheDocument()
      expect(screen.getByText(industry.description)).toBeInTheDocument()
    })
  })

  // Test 4: Renders all roles
  it('renders all role items', () => {
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    defaultRoles.forEach((role) => {
      expect(screen.getByText(role.name)).toBeInTheDocument()
      expect(screen.getByText(role.description)).toBeInTheDocument()
    })
  })

  // Test 5: Industry links have correct hrefs
  it('industry links have correct hrefs', () => {
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    // Get all menu items and filter by href to verify industry links
    const menuItems = screen.getAllByRole('menuitem')
    defaultIndustries.forEach((industry) => {
      const link = menuItems.find(item => item.getAttribute('href') === industry.slug)
      expect(link).toBeTruthy()
      expect(link).toHaveAttribute('href', industry.slug)
    })
  })

  // Test 6: Role links have correct hrefs
  it('role links have correct hrefs', () => {
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    defaultRoles.forEach((role) => {
      const link = screen.getByRole('menuitem', { name: new RegExp(role.name, 'i') })
      expect(link).toHaveAttribute('href', role.slug)
    })
  })

  // Test 7: Close button works
  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    const closeButton = screen.getByLabelText(/zamknij menu/i)
    await user.click(closeButton)

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  // Test 8: Clicking backdrop closes menu
  it('calls onClose when backdrop is clicked', () => {
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    // Find backdrop (the element with bg-black/20)
    const backdrop = document.querySelector('.bg-black\\/20')
    expect(backdrop).toBeInTheDocument()

    // Click outside the menu content
    fireEvent.mouseDown(backdrop!)

    // mockOnClose should be called (from click outside handler)
    expect(mockOnClose).toHaveBeenCalled()
  })

  // Test 9: Escape key closes menu
  it('calls onClose when Escape key is pressed', () => {
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  // Test 10: Menu has proper aria attributes
  it('has proper accessibility attributes', () => {
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-label')
  })

  // Test 11: CTA buttons are rendered
  it('renders CTA buttons', () => {
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    expect(screen.getByRole('menuitem', { name: /bezplatna konsultacja/i })).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: /case studies/i })).toBeInTheDocument()
  })

  // Test 12: Clicking a link closes the menu
  it('closes menu when industry link is clicked', async () => {
    const user = userEvent.setup()
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    const firstIndustryLink = screen.getByRole('menuitem', { name: /saas/i })
    await user.click(firstIndustryLink)

    expect(mockOnClose).toHaveBeenCalled()
  })

  // Test 13: Section headers are present
  it('renders section headers', () => {
    render(
      <MegaMenu
        isOpen={true}
        onClose={mockOnClose}
        industries={defaultIndustries}
        roles={defaultRoles}
      />
    )

    expect(screen.getByText(/branze/i)).toBeInTheDocument()
    expect(screen.getByText(/pozycje/i)).toBeInTheDocument()
    expect(screen.getByText(/quick links/i)).toBeInTheDocument()
  })
})
