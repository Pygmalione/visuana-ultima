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
    it('applies slate-900 background by default (royal-red variant)', () => {
      render(<CTABox {...defaultProps} />)
      const box = screen.getByTestId('cta-box')
      // Updated to slate-900 for McKinsey-style professional light theme
      expect(box).toHaveClass('bg-slate-900')
    })

    it('applies slate-800 background for charcoal variant', () => {
      render(<CTABox {...defaultProps} bgColor="charcoal" />)
      const box = screen.getByTestId('cta-box')
      // Updated to slate-800 for McKinsey-style professional light theme
      expect(box).toHaveClass('bg-slate-800')
    })

    it('applies white background', () => {
      render(<CTABox {...defaultProps} bgColor="white" />)
      const box = screen.getByTestId('cta-box')
      expect(box).toHaveClass('bg-white')
    })

    it('applies slate-50 background for muted variant', () => {
      render(<CTABox {...defaultProps} bgColor="muted" />)
      const box = screen.getByTestId('cta-box')
      // Updated to slate-50 for McKinsey-style professional light theme
      expect(box).toHaveClass('bg-slate-50')
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
      // Updated to slate-900 for McKinsey-style professional light theme
      expect(title).toHaveClass('text-slate-900')
    })

    it('uses dark text on muted background', () => {
      render(<CTABox {...defaultProps} bgColor="muted" />)
      const title = screen.getByRole('heading')
      // Updated to slate-900 for McKinsey-style professional light theme
      expect(title).toHaveClass('text-slate-900')
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
