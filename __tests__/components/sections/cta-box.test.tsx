import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTABox } from '@/components/sections/cta-box'

// ============================================
// CTA BOX COMPONENT TESTS
// TDD: Red → Green → Refactor
// ============================================

describe('CTABox', () => {
  const defaultProps = {
    title: 'Ready to get started?',
    buttonLabel: 'Contact Us',
    buttonHref: '/contact',
  }

  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<CTABox {...defaultProps} />)
      expect(screen.getByText('Ready to get started?')).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument()
    })

    it('renders description when provided', () => {
      render(<CTABox {...defaultProps} description="Get in touch with our team." />)
      expect(screen.getByText('Get in touch with our team.')).toBeInTheDocument()
    })

    it('renders button with correct href', () => {
      render(<CTABox {...defaultProps} />)
      const button = screen.getByRole('link', { name: /contact us/i })
      expect(button).toHaveAttribute('href', '/contact')
    })
  })

  describe('Background Colors', () => {
    it('applies royal-red background by default', () => {
      render(<CTABox {...defaultProps} />)
      const box = screen.getByTestId('cta-box')
      expect(box).toHaveClass('bg-royal-red-700')
    })

    it('applies charcoal background', () => {
      render(<CTABox {...defaultProps} bgColor="charcoal" />)
      const box = screen.getByTestId('cta-box')
      expect(box).toHaveClass('bg-charcoal-900')
    })

    it('applies white background', () => {
      render(<CTABox {...defaultProps} bgColor="white" />)
      const box = screen.getByTestId('cta-box')
      expect(box).toHaveClass('bg-white')
    })

    it('applies muted background', () => {
      render(<CTABox {...defaultProps} bgColor="muted" />)
      const box = screen.getByTestId('cta-box')
      expect(box).toHaveClass('bg-charcoal-50')
    })
  })

  describe('Alignment', () => {
    it('centers content by default', () => {
      render(<CTABox {...defaultProps} />)
      const box = screen.getByTestId('cta-box')
      expect(box).toHaveClass('text-center')
    })

    it('aligns content left', () => {
      render(<CTABox {...defaultProps} alignment="left" />)
      const box = screen.getByTestId('cta-box')
      expect(box).toHaveClass('text-left')
    })

    it('aligns content right', () => {
      render(<CTABox {...defaultProps} alignment="right" />)
      const box = screen.getByTestId('cta-box')
      expect(box).toHaveClass('text-right')
    })
  })

  describe('Text Colors', () => {
    it('uses white text on dark backgrounds (royal-red)', () => {
      render(<CTABox {...defaultProps} bgColor="royal-red" />)
      const title = screen.getByRole('heading')
      expect(title).toHaveClass('text-white')
    })

    it('uses white text on charcoal background', () => {
      render(<CTABox {...defaultProps} bgColor="charcoal" />)
      const title = screen.getByRole('heading')
      expect(title).toHaveClass('text-white')
    })

    it('uses dark text on light backgrounds (white)', () => {
      render(<CTABox {...defaultProps} bgColor="white" />)
      const title = screen.getByRole('heading')
      expect(title).toHaveClass('text-charcoal-800')
    })

    it('uses dark text on muted background', () => {
      render(<CTABox {...defaultProps} bgColor="muted" />)
      const title = screen.getByRole('heading')
      expect(title).toHaveClass('text-charcoal-800')
    })
  })

  describe('Accessibility', () => {
    it('has proper heading level', () => {
      render(<CTABox {...defaultProps} />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
    })

    it('button is accessible', () => {
      render(<CTABox {...defaultProps} />)
      const button = screen.getByRole('link')
      expect(button).toHaveAccessibleName(/contact us/i)
    })
  })
})
