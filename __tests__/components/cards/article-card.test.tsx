import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ArticleCard } from '@/components/cards/article-card'

// ============================================
// ARTICLE CARD COMPONENT TESTS
// TDD: Red → Green → Refactor
// ============================================

describe('ArticleCard', () => {
  const defaultProps = {
    title: 'Test Article Title',
    slug: 'test-article',
  }

  describe('Rendering', () => {
    it('renders with required props only', () => {
      render(<ArticleCard {...defaultProps} />)
      expect(screen.getByText('Test Article Title')).toBeInTheDocument()
    })

    it('renders title as link to article', () => {
      render(<ArticleCard {...defaultProps} />)
      const link = screen.getByRole('link', { name: /test article title/i })
      expect(link).toHaveAttribute('href', '/blog/test-article')
    })

    it('renders image when provided', () => {
      render(<ArticleCard {...defaultProps} image="/test-image.jpg" />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('src', '/test-image.jpg')
      expect(img).toHaveAttribute('alt', 'Test Article Title')
    })

    it('renders category badge when provided', () => {
      render(<ArticleCard {...defaultProps} category="Marketing" />)
      expect(screen.getByText('Marketing')).toBeInTheDocument()
    })

    it('renders excerpt when provided', () => {
      render(<ArticleCard {...defaultProps} excerpt="This is a test excerpt." />)
      expect(screen.getByText('This is a test excerpt.')).toBeInTheDocument()
    })

    it('renders date when provided', () => {
      render(<ArticleCard {...defaultProps} date="2025-12-03" />)
      expect(screen.getByText('2025-12-03')).toBeInTheDocument()
    })

    it('renders author name when provided', () => {
      render(<ArticleCard {...defaultProps} author={{ name: 'Jan Kowalski' }} />)
      expect(screen.getByText('Jan Kowalski')).toBeInTheDocument()
    })

    it('renders author avatar when provided', () => {
      render(
        <ArticleCard
          {...defaultProps}
          author={{ name: 'Jan Kowalski', avatar: '/avatar.jpg' }}
        />
      )
      const avatar = screen.getByRole('img', { name: /jan kowalski/i })
      expect(avatar).toHaveAttribute('src', '/avatar.jpg')
    })

    it('renders fallback avatar when no avatar provided', () => {
      render(<ArticleCard {...defaultProps} author={{ name: 'Jan Kowalski' }} />)
      // Should show initials or default avatar
      const fallback = screen.getByTestId('author-avatar-fallback')
      expect(fallback).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('applies hoverable styles by default', () => {
      render(<ArticleCard {...defaultProps} />)
      const card = screen.getByTestId('article-card')
      expect(card).toHaveClass('hover:-translate-y-1')
    })

    it('applies proper aspect ratio to image container', () => {
      render(<ArticleCard {...defaultProps} image="/test.jpg" />)
      const imageContainer = screen.getByTestId('article-image-container')
      expect(imageContainer).toHaveClass('aspect-video')
    })

    it('truncates long titles properly', () => {
      const longTitle = 'A'.repeat(200)
      render(<ArticleCard {...defaultProps} title={longTitle} />)
      const title = screen.getByRole('heading')
      expect(title).toHaveClass('line-clamp-2')
    })

    it('truncates long excerpts properly', () => {
      const longExcerpt = 'B'.repeat(500)
      render(<ArticleCard {...defaultProps} excerpt={longExcerpt} />)
      const excerpt = screen.getByTestId('article-excerpt')
      expect(excerpt).toHaveClass('line-clamp-3')
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      render(<ArticleCard {...defaultProps} />)
      const heading = screen.getByRole('heading', { level: 3 })
      expect(heading).toHaveTextContent('Test Article Title')
    })

    it('has accessible link with descriptive text', () => {
      render(<ArticleCard {...defaultProps} />)
      const link = screen.getByRole('link')
      expect(link).toHaveAccessibleName(/test article title/i)
    })

    it('marks decorative images appropriately', () => {
      render(<ArticleCard {...defaultProps} image="/test.jpg" />)
      // Image should have alt text (title), not be decorative
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })

    it('has time element for date with proper datetime attribute', () => {
      render(<ArticleCard {...defaultProps} date="2025-12-03" />)
      const time = screen.getByRole('time')
      expect(time).toHaveAttribute('datetime', '2025-12-03')
    })
  })

  describe('Variants', () => {
    it('renders compact variant without image', () => {
      render(<ArticleCard {...defaultProps} variant="compact" />)
      const card = screen.getByTestId('article-card')
      expect(card).not.toContainElement(screen.queryByRole('img'))
    })

    it('renders featured variant with larger styling', () => {
      render(<ArticleCard {...defaultProps} variant="featured" image="/test.jpg" />)
      const card = screen.getByTestId('article-card')
      expect(card).toHaveClass('md:col-span-2')
    })
  })
})
