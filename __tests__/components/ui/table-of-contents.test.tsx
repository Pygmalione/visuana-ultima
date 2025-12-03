import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { TableOfContents } from '@/components/ui/table-of-contents'
import { TOCHeading } from '@/types/components'

describe('TableOfContents Component', () => {
  // ============================================
  // TEST DATA
  // ============================================

  const mockHeadings: TOCHeading[] = [
    { id: 'introduction', text: 'Introduction', level: 2 },
    { id: 'getting-started', text: 'Getting Started', level: 2 },
    { id: 'installation', text: 'Installation', level: 3 },
    { id: 'configuration', text: 'Configuration', level: 3 },
    { id: 'advanced-features', text: 'Advanced Features', level: 2 },
    { id: 'best-practices', text: 'Best Practices', level: 3 },
  ]

  // ============================================
  // RENDERING TESTS
  // ============================================

  it('renders with headings', () => {
    render(<TableOfContents headings={mockHeadings} />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('Introduction')).toBeInTheDocument()
    expect(screen.getByText('Getting Started')).toBeInTheDocument()
  })

  it('renders nothing when empty headings array', () => {
    const { container } = render(<TableOfContents headings={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders H2 and H3 headings', () => {
    render(<TableOfContents headings={mockHeadings} />)

    // All headings should be rendered
    expect(screen.getByText('Introduction')).toBeInTheDocument()
    expect(screen.getByText('Installation')).toBeInTheDocument()
    expect(screen.getByText('Configuration')).toBeInTheDocument()
  })

  it('H3 items are indented relative to H2', () => {
    render(<TableOfContents headings={mockHeadings} />)

    const installation = screen.getByText('Installation').closest('li')
    const introduction = screen.getByText('Introduction').closest('li')

    // H3 should have pl-4 class for indentation
    expect(installation).toHaveClass('pl-4')
    // H2 should not have pl-4
    expect(introduction).not.toHaveClass('pl-4')
  })

  // ============================================
  // ACTIVE STATE TESTS
  // ============================================

  it('highlights active heading', () => {
    render(<TableOfContents headings={mockHeadings} activeId="getting-started" />)

    const activeLink = screen.getByText('Getting Started').closest('a')
    expect(activeLink).toHaveClass('text-royal-red-700')
    expect(activeLink).toHaveClass('font-semibold')
  })

  it('updates highlight when activeId changes', () => {
    const { rerender } = render(<TableOfContents headings={mockHeadings} activeId="introduction" />)

    let activeLink = screen.getByText('Introduction').closest('a')
    expect(activeLink).toHaveClass('text-royal-red-700')

    rerender(<TableOfContents headings={mockHeadings} activeId="installation" />)

    activeLink = screen.getByText('Installation').closest('a')
    expect(activeLink).toHaveClass('text-royal-red-700')
  })

  // ============================================
  // INTERACTION TESTS
  // ============================================

  it('calls onHeadingClick when heading clicked', () => {
    const handleClick = vi.fn()
    render(<TableOfContents headings={mockHeadings} onHeadingClick={handleClick} />)

    fireEvent.click(screen.getByText('Introduction'))
    expect(handleClick).toHaveBeenCalledWith('introduction')
  })

  it('clicking heading scrolls to anchor (href="#id")', () => {
    render(<TableOfContents headings={mockHeadings} />)

    const link = screen.getByText('Introduction').closest('a')
    expect(link).toHaveAttribute('href', '#introduction')
  })

  // ============================================
  // STYLING TESTS
  // ============================================

  it('applies sticky positioning when sticky prop true', () => {
    render(<TableOfContents headings={mockHeadings} sticky />)

    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('sticky')
    expect(nav).toHaveClass('top-24')
  })

  it('does not apply sticky positioning by default', () => {
    render(<TableOfContents headings={mockHeadings} />)

    const nav = screen.getByRole('navigation')
    expect(nav).not.toHaveClass('sticky')
  })

  it('has proper spacing between items', () => {
    render(<TableOfContents headings={mockHeadings} />)

    const list = screen.getByRole('list')
    expect(list).toHaveClass('space-y-2')
  })

  // ============================================
  // ACCESSIBILITY TESTS
  // ============================================

  it('has proper nav role', () => {
    render(<TableOfContents headings={mockHeadings} />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('nav has accessible label', () => {
    render(<TableOfContents headings={mockHeadings} />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAttribute('aria-label', 'Table of contents')
  })

  it('links have accessible names', () => {
    render(<TableOfContents headings={mockHeadings} />)

    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAccessibleName()
    })
  })

  it('applies aria-current on active item', () => {
    render(<TableOfContents headings={mockHeadings} activeId="introduction" />)

    const activeLink = screen.getByText('Introduction').closest('a')
    expect(activeLink).toHaveAttribute('aria-current', 'location')
  })

  it('does not apply aria-current on inactive items', () => {
    render(<TableOfContents headings={mockHeadings} activeId="introduction" />)

    const inactiveLink = screen.getByText('Getting Started').closest('a')
    expect(inactiveLink).not.toHaveAttribute('aria-current')
  })

  // ============================================
  // EDGE CASES
  // ============================================

  it('handles only H2 headings', () => {
    const h2Only: TOCHeading[] = [
      { id: 'first', text: 'First Section', level: 2 },
      { id: 'second', text: 'Second Section', level: 2 },
    ]

    render(<TableOfContents headings={h2Only} />)
    expect(screen.getByText('First Section')).toBeInTheDocument()
    expect(screen.getByText('Second Section')).toBeInTheDocument()
  })

  it('handles only H3 headings', () => {
    const h3Only: TOCHeading[] = [
      { id: 'first', text: 'First Subsection', level: 3 },
      { id: 'second', text: 'Second Subsection', level: 3 },
    ]

    render(<TableOfContents headings={h3Only} />)
    expect(screen.getByText('First Subsection')).toBeInTheDocument()
    expect(screen.getByText('Second Subsection')).toBeInTheDocument()
  })

  it('handles special characters in heading text', () => {
    const specialHeadings: TOCHeading[] = [
      { id: 'special', text: 'Special & Characters: Test', level: 2 },
    ]

    render(<TableOfContents headings={specialHeadings} />)
    expect(screen.getByText('Special & Characters: Test')).toBeInTheDocument()
  })
})
