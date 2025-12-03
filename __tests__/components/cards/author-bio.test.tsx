import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AuthorBio } from '@/components/cards/author-bio'

// ============================================
// AUTHOR BIO COMPONENT TESTS
// TDD: Red → Green → Refactor
// ============================================

describe('AuthorBio', () => {
  const defaultProps = {
    name: 'Anna Kowalska',
  }

  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<AuthorBio {...defaultProps} />)
      expect(screen.getByText('Anna Kowalska')).toBeInTheDocument()
    })

    it('renders avatar when provided', () => {
      render(<AuthorBio {...defaultProps} avatar="/avatar.jpg" />)
      const avatar = screen.getByRole('img', { name: /anna kowalska/i })
      expect(avatar).toHaveAttribute('src', '/avatar.jpg')
    })

    it('renders fallback avatar with initials when no avatar', () => {
      render(<AuthorBio {...defaultProps} />)
      const fallback = screen.getByTestId('author-bio-avatar-fallback')
      expect(fallback).toHaveTextContent('AK')
    })

    it('renders bio when provided', () => {
      render(<AuthorBio {...defaultProps} bio="Marketing expert with 10+ years experience." />)
      expect(screen.getByText(/Marketing expert/)).toBeInTheDocument()
    })

    it('renders role when provided', () => {
      render(<AuthorBio {...defaultProps} role="Content Director" />)
      expect(screen.getByText('Content Director')).toBeInTheDocument()
    })

    it('renders social links when provided', () => {
      render(
        <AuthorBio
          {...defaultProps}
          socialLinks={[
            { platform: 'linkedin', href: 'https://linkedin.com/in/anna' },
            { platform: 'twitter', href: 'https://twitter.com/anna' },
          ]}
        />
      )
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(2)
    })

    it('renders correct social icon for linkedin', () => {
      render(
        <AuthorBio
          {...defaultProps}
          socialLinks={[{ platform: 'linkedin', href: 'https://linkedin.com' }]}
        />
      )
      expect(screen.getByTestId('social-icon-linkedin')).toBeInTheDocument()
    })

    it('renders correct social icon for twitter', () => {
      render(
        <AuthorBio
          {...defaultProps}
          socialLinks={[{ platform: 'twitter', href: 'https://twitter.com' }]}
        />
      )
      expect(screen.getByTestId('social-icon-twitter')).toBeInTheDocument()
    })

    it('renders correct social icon for instagram', () => {
      render(
        <AuthorBio
          {...defaultProps}
          socialLinks={[{ platform: 'instagram', href: 'https://instagram.com' }]}
        />
      )
      expect(screen.getByTestId('social-icon-instagram')).toBeInTheDocument()
    })

    it('renders correct social icon for website', () => {
      render(
        <AuthorBio
          {...defaultProps}
          socialLinks={[{ platform: 'website', href: 'https://example.com' }]}
        />
      )
      expect(screen.getByTestId('social-icon-website')).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('applies card styling', () => {
      render(<AuthorBio {...defaultProps} />)
      const card = screen.getByTestId('author-bio')
      expect(card).toHaveClass('bg-white')
    })

    it('avatar has circular styling', () => {
      render(<AuthorBio {...defaultProps} avatar="/test.jpg" />)
      const avatar = screen.getByRole('img', { name: /anna kowalska/i })
      expect(avatar).toHaveClass('rounded-full')
    })

    it('has decorative accent element', () => {
      render(<AuthorBio {...defaultProps} />)
      const accent = screen.getByTestId('author-bio-accent')
      expect(accent).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('social links have accessible names', () => {
      render(
        <AuthorBio
          {...defaultProps}
          socialLinks={[{ platform: 'linkedin', href: 'https://linkedin.com' }]}
        />
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAccessibleName(/linkedin/i)
    })

    it('opens social links in new tab', () => {
      render(
        <AuthorBio
          {...defaultProps}
          socialLinks={[{ platform: 'linkedin', href: 'https://linkedin.com' }]}
        />
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
