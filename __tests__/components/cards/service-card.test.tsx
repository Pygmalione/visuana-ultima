import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceCard } from '@/components/cards/service-card'

// ============================================
// SERVICE CARD COMPONENT TESTS
// TDD: Red → Green → Refactor
// ============================================

describe('ServiceCard', () => {
  const defaultProps = {
    icon: <span data-testid="test-icon">📊</span>,
    title: 'AI Analytics',
    description: 'Dashboardy, które rozumiesz. Metryki, które mają znaczenie.',
  }

  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<ServiceCard {...defaultProps} />)
      expect(screen.getByText('AI Analytics')).toBeInTheDocument()
      expect(screen.getByText(/Dashboardy, które rozumiesz/)).toBeInTheDocument()
    })

    it('renders icon element', () => {
      render(<ServiceCard {...defaultProps} />)
      expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    })

    it('renders link when provided', () => {
      render(
        <ServiceCard
          {...defaultProps}
          link="/uslugi/ai-analytics"
          linkLabel="Dowiedz się więcej"
        />
      )
      const link = screen.getByRole('link', { name: /dowiedz się więcej/i })
      expect(link).toHaveAttribute('href', '/uslugi/ai-analytics')
    })

    it('renders default link label when link provided without label', () => {
      render(<ServiceCard {...defaultProps} link="/uslugi/ai-analytics" />)
      expect(screen.getByText(/Więcej/)).toBeInTheDocument()
    })

    it('does not render link section when no link provided', () => {
      render(<ServiceCard {...defaultProps} />)
      expect(screen.queryByRole('link')).not.toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('applies hover animation to card', () => {
      render(<ServiceCard {...defaultProps} />)
      const card = screen.getByTestId('service-card')
      expect(card).toHaveClass('hover:-translate-y-1')
    })

    it('applies icon background styling', () => {
      render(<ServiceCard {...defaultProps} />)
      const iconContainer = screen.getByTestId('service-icon-container')
      expect(iconContainer).toHaveClass('bg-royal-red-50')
    })

    it('applies hover effect to link arrow', () => {
      render(
        <ServiceCard {...defaultProps} link="/test" linkLabel="Learn more" />
      )
      const link = screen.getByRole('link')
      expect(link).toHaveClass('group')
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      render(<ServiceCard {...defaultProps} />)
      const heading = screen.getByRole('heading', { level: 3 })
      expect(heading).toHaveTextContent('AI Analytics')
    })

    it('icon container has aria-hidden for decorative icon', () => {
      render(<ServiceCard {...defaultProps} />)
      const iconContainer = screen.getByTestId('service-icon-container')
      expect(iconContainer).toHaveAttribute('aria-hidden', 'true')
    })

    it('link has descriptive accessible name', () => {
      render(
        <ServiceCard
          {...defaultProps}
          link="/test"
          linkLabel="Dowiedz się więcej o AI Analytics"
        />
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAccessibleName(/dowiedz się więcej o ai analytics/i)
    })
  })

  describe('Variants', () => {
    it('renders horizontal variant with different layout', () => {
      render(<ServiceCard {...defaultProps} variant="horizontal" />)
      const card = screen.getByTestId('service-card')
      expect(card).toHaveClass('md:flex-row')
    })

    it('renders featured variant with accent border', () => {
      render(<ServiceCard {...defaultProps} variant="featured" />)
      const card = screen.getByTestId('service-card')
      expect(card).toHaveClass('border-royal-red-700')
    })

    it('applies default variant styling', () => {
      render(<ServiceCard {...defaultProps} />)
      const card = screen.getByTestId('service-card')
      expect(card).toHaveClass('flex-col')
    })
  })
})
