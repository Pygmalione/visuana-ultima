import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from '@/components/ui/modal'

// ============================================
// MODAL COMPONENT TESTS
// TDD: Red → Green → Refactor
// ============================================

describe('Modal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    children: <p>Modal content</p>,
  }

  beforeEach(() => {
    vi.clearAllMocks()
    // Reset body overflow
    document.body.style.overflow = ''
  })

  describe('Rendering', () => {
    it('renders when isOpen is true', () => {
      render(<Modal {...defaultProps} />)
      expect(screen.getByTestId('modal-overlay')).toBeInTheDocument()
      expect(screen.getByText('Modal content')).toBeInTheDocument()
    })

    it('does not render when isOpen is false', () => {
      render(<Modal {...defaultProps} isOpen={false} />)
      expect(screen.queryByTestId('modal-overlay')).not.toBeInTheDocument()
    })

    it('renders title when provided', () => {
      render(<Modal {...defaultProps} title="Test Title" />)
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('renders description when provided', () => {
      render(<Modal {...defaultProps} description="Test description" />)
      expect(screen.getByText('Test description')).toBeInTheDocument()
    })

    it('renders close button by default', () => {
      render(<Modal {...defaultProps} />)
      expect(screen.getByLabelText(/zamknij/i)).toBeInTheDocument()
    })

    it('does not render close button when showCloseButton is false', () => {
      render(<Modal {...defaultProps} showCloseButton={false} />)
      expect(screen.queryByLabelText(/zamknij/i)).not.toBeInTheDocument()
    })
  })

  describe('Closing Behavior', () => {
    it('calls onClose when close button is clicked', async () => {
      const user = userEvent.setup()
      render(<Modal {...defaultProps} />)

      await user.click(screen.getByLabelText(/zamknij/i))
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
    })

    it('calls onClose when overlay is clicked by default', async () => {
      const user = userEvent.setup()
      render(<Modal {...defaultProps} />)

      await user.click(screen.getByTestId('modal-overlay'))
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
    })

    it('does not call onClose when overlay clicked and closeOnOverlayClick is false', async () => {
      const user = userEvent.setup()
      render(<Modal {...defaultProps} closeOnOverlayClick={false} />)

      await user.click(screen.getByTestId('modal-overlay'))
      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })

    it('does not call onClose when modal content is clicked', async () => {
      const user = userEvent.setup()
      render(<Modal {...defaultProps} />)

      await user.click(screen.getByTestId('modal-content'))
      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })

    it('calls onClose when Escape key is pressed by default', () => {
      render(<Modal {...defaultProps} />)

      fireEvent.keyDown(document, { key: 'Escape' })
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
    })

    it('does not call onClose when Escape pressed and closeOnEscape is false', () => {
      render(<Modal {...defaultProps} closeOnEscape={false} />)

      fireEvent.keyDown(document, { key: 'Escape' })
      expect(defaultProps.onClose).not.toHaveBeenCalled()
    })
  })

  describe('Sizes', () => {
    it('applies sm size class', () => {
      render(<Modal {...defaultProps} size="sm" />)
      const content = screen.getByTestId('modal-content')
      expect(content).toHaveClass('max-w-sm')
    })

    it('applies md size class (default)', () => {
      render(<Modal {...defaultProps} />)
      const content = screen.getByTestId('modal-content')
      expect(content).toHaveClass('max-w-md')
    })

    it('applies lg size class', () => {
      render(<Modal {...defaultProps} size="lg" />)
      const content = screen.getByTestId('modal-content')
      expect(content).toHaveClass('max-w-lg')
    })

    it('applies xl size class', () => {
      render(<Modal {...defaultProps} size="xl" />)
      const content = screen.getByTestId('modal-content')
      expect(content).toHaveClass('max-w-xl')
    })

    it('applies full size class', () => {
      render(<Modal {...defaultProps} size="full" />)
      const content = screen.getByTestId('modal-content')
      expect(content).toHaveClass('max-w-full')
    })
  })

  describe('Accessibility', () => {
    it('has role="dialog"', () => {
      render(<Modal {...defaultProps} />)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('has aria-modal="true"', () => {
      render(<Modal {...defaultProps} />)
      expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true')
    })

    it('has aria-labelledby when title provided', () => {
      render(<Modal {...defaultProps} title="Test Title" />)
      const dialog = screen.getByRole('dialog')
      const titleId = dialog.getAttribute('aria-labelledby')
      expect(titleId).toBeTruthy()
      expect(screen.getByText('Test Title')).toHaveAttribute('id', titleId)
    })

    it('has aria-describedby when description provided', () => {
      render(<Modal {...defaultProps} description="Test description" />)
      const dialog = screen.getByRole('dialog')
      const descId = dialog.getAttribute('aria-describedby')
      expect(descId).toBeTruthy()
      expect(screen.getByText('Test description')).toHaveAttribute('id', descId)
    })

    it('locks body scroll when open', () => {
      render(<Modal {...defaultProps} />)
      expect(document.body.style.overflow).toBe('hidden')
    })

    it('restores body scroll when closed', () => {
      const { rerender } = render(<Modal {...defaultProps} />)
      rerender(<Modal {...defaultProps} isOpen={false} />)
      expect(document.body.style.overflow).toBe('')
    })
  })
})
