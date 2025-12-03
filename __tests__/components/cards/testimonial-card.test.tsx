import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TestimonialCard } from '@/components/cards/testimonial-card'

// ============================================
// TESTIMONIAL CARD COMPONENT TESTS
// TDD: Red → Green → Refactor
// ============================================

describe('TestimonialCard', () => {
  const defaultProps = {
    quote: 'Współpraca z Visuana to był przełom. ROI wzrósł o 150%.',
    author: 'Anna Kowalska',
  }

  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<TestimonialCard {...defaultProps} />)
      expect(screen.getByText(/Współpraca z Visuana/)).toBeInTheDocument()
      expect(screen.getByText('Anna Kowalska')).toBeInTheDocument()
    })

    it('renders quote with quotation marks', () => {
      render(<TestimonialCard {...defaultProps} />)
      const quote = screen.getByTestId('testimonial-quote')
      // Should have visual quote marks or <blockquote>
      expect(quote.tagName.toLowerCase()).toBe('blockquote')
    })

    it('renders role when provided', () => {
      render(<TestimonialCard {...defaultProps} role="Marketing Director" />)
      expect(screen.getByText('Marketing Director')).toBeInTheDocument()
    })

    it('renders company when provided', () => {
      render(<TestimonialCard {...defaultProps} company="TechCorp" />)
      expect(screen.getByText('TechCorp')).toBeInTheDocument()
    })

    it('renders role and company together with separator', () => {
      render(
        <TestimonialCard
          {...defaultProps}
          role="CEO"
          company="StartupX"
        />
      )
      const roleCompany = screen.getByTestId('testimonial-role-company')
      expect(roleCompany).toHaveTextContent('CEO')
      expect(roleCompany).toHaveTextContent('StartupX')
    })

    it('renders avatar when provided', () => {
      render(<TestimonialCard {...defaultProps} avatar="/avatar.jpg" />)
      const avatar = screen.getByRole('img', { name: /anna kowalska/i })
      expect(avatar).toHaveAttribute('src', '/avatar.jpg')
    })

    it('renders fallback avatar with initials when no avatar provided', () => {
      render(<TestimonialCard {...defaultProps} />)
      const fallback = screen.getByTestId('testimonial-avatar-fallback')
      expect(fallback).toHaveTextContent('AK')
    })

    it('renders star rating when provided', () => {
      render(<TestimonialCard {...defaultProps} rating={5} />)
      const stars = screen.getAllByTestId('rating-star-filled')
      expect(stars).toHaveLength(5)
    })

    it('renders partial star rating correctly', () => {
      render(<TestimonialCard {...defaultProps} rating={3} />)
      const filledStars = screen.getAllByTestId('rating-star-filled')
      const emptyStars = screen.getAllByTestId('rating-star-empty')
      expect(filledStars).toHaveLength(3)
      expect(emptyStars).toHaveLength(2)
    })

    it('does not render rating section when no rating provided', () => {
      render(<TestimonialCard {...defaultProps} />)
      expect(screen.queryByTestId('rating-stars')).not.toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('applies card styling', () => {
      render(<TestimonialCard {...defaultProps} />)
      const card = screen.getByTestId('testimonial-card')
      expect(card).toHaveClass('bg-white')
      expect(card).toHaveClass('rounded-lg')
    })

    it('applies quote styling with decorative quote mark', () => {
      render(<TestimonialCard {...defaultProps} />)
      const quoteDecor = screen.getByTestId('testimonial-quote-decor')
      expect(quoteDecor).toHaveClass('text-royal-red-200')
    })

    it('applies avatar circle styling', () => {
      render(<TestimonialCard {...defaultProps} avatar="/test.jpg" />)
      const avatar = screen.getByRole('img', { name: /anna kowalska/i })
      expect(avatar).toHaveClass('rounded-full')
    })
  })

  describe('Accessibility', () => {
    it('uses blockquote for semantic quote', () => {
      render(<TestimonialCard {...defaultProps} />)
      const quote = screen.getByRole('blockquote')
      expect(quote).toBeInTheDocument()
    })

    it('has figure element for testimonial', () => {
      render(<TestimonialCard {...defaultProps} />)
      const figure = screen.getByRole('figure')
      expect(figure).toBeInTheDocument()
    })

    it('has figcaption for author attribution', () => {
      render(<TestimonialCard {...defaultProps} />)
      const figcaption = screen.getByTestId('testimonial-attribution')
      expect(figcaption.tagName.toLowerCase()).toBe('figcaption')
    })

    it('rating has proper aria-label', () => {
      render(<TestimonialCard {...defaultProps} rating={4} />)
      const ratingContainer = screen.getByRole('img', { name: /4 z 5 gwiazdek/i })
      expect(ratingContainer).toBeInTheDocument()
    })
  })
})
