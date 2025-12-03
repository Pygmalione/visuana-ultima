import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toast } from '@/components/ui/toast'

// ============================================
// TOAST COMPONENT TESTS
// TDD: Red → Green → Refactor
// ============================================

describe('Toast', () => {
  const defaultProps = {
    id: 'toast-1',
    message: 'Operation completed successfully',
  }

  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<Toast {...defaultProps} />)
      expect(screen.getByText('Operation completed successfully')).toBeInTheDocument()
    })

    it('renders title when provided', () => {
      render(<Toast {...defaultProps} title="Success" />)
      expect(screen.getByText('Success')).toBeInTheDocument()
    })

    it('renders close button when onClose provided', () => {
      render(<Toast {...defaultProps} onClose={vi.fn()} />)
      expect(screen.getByLabelText(/zamknij/i)).toBeInTheDocument()
    })

    it('does not render close button when onClose not provided', () => {
      render(<Toast {...defaultProps} />)
      expect(screen.queryByLabelText(/zamknij/i)).not.toBeInTheDocument()
    })

    it('renders with proper role for accessibility', () => {
      render(<Toast {...defaultProps} />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('renders success variant with green styling', () => {
      render(<Toast {...defaultProps} variant="success" />)
      const toast = screen.getByTestId('toast')
      expect(toast).toHaveClass('border-l-success-500')
    })

    it('renders error variant with red styling', () => {
      render(<Toast {...defaultProps} variant="error" />)
      const toast = screen.getByTestId('toast')
      expect(toast).toHaveClass('border-l-red-500')
    })

    it('renders warning variant with amber styling', () => {
      render(<Toast {...defaultProps} variant="warning" />)
      const toast = screen.getByTestId('toast')
      expect(toast).toHaveClass('border-l-amber-500')
    })

    it('renders info variant with blue styling', () => {
      render(<Toast {...defaultProps} variant="info" />)
      const toast = screen.getByTestId('toast')
      expect(toast).toHaveClass('border-l-blue-500')
    })

    it('renders default variant (info) when no variant provided', () => {
      render(<Toast {...defaultProps} />)
      const toast = screen.getByTestId('toast')
      expect(toast).toHaveClass('border-l-blue-500')
    })

    it('renders correct icon for success variant', () => {
      render(<Toast {...defaultProps} variant="success" />)
      expect(screen.getByTestId('toast-icon-success')).toBeInTheDocument()
    })

    it('renders correct icon for error variant', () => {
      render(<Toast {...defaultProps} variant="error" />)
      expect(screen.getByTestId('toast-icon-error')).toBeInTheDocument()
    })

    it('renders correct icon for warning variant', () => {
      render(<Toast {...defaultProps} variant="warning" />)
      expect(screen.getByTestId('toast-icon-warning')).toBeInTheDocument()
    })

    it('renders correct icon for info variant', () => {
      render(<Toast {...defaultProps} variant="info" />)
      expect(screen.getByTestId('toast-icon-info')).toBeInTheDocument()
    })
  })

  describe('Closing Behavior', () => {
    it('calls onClose with id when close button clicked', async () => {
      const onClose = vi.fn()
      vi.useRealTimers() // Need real timers for userEvent
      const user = userEvent.setup()

      render(<Toast {...defaultProps} onClose={onClose} />)
      await user.click(screen.getByLabelText(/zamknij/i))

      expect(onClose).toHaveBeenCalledWith('toast-1')
    })

    it('auto-dismisses after default duration (5000ms)', () => {
      const onClose = vi.fn()
      render(<Toast {...defaultProps} onClose={onClose} />)

      act(() => {
        vi.advanceTimersByTime(4999)
      })
      expect(onClose).not.toHaveBeenCalled()

      act(() => {
        vi.advanceTimersByTime(1)
      })
      expect(onClose).toHaveBeenCalledWith('toast-1')
    })

    it('auto-dismisses after custom duration', () => {
      const onClose = vi.fn()
      render(<Toast {...defaultProps} onClose={onClose} duration={3000} />)

      act(() => {
        vi.advanceTimersByTime(2999)
      })
      expect(onClose).not.toHaveBeenCalled()

      act(() => {
        vi.advanceTimersByTime(1)
      })
      expect(onClose).toHaveBeenCalledWith('toast-1')
    })

    it('does not auto-dismiss when duration is 0', () => {
      const onClose = vi.fn()
      render(<Toast {...defaultProps} onClose={onClose} duration={0} />)

      act(() => {
        vi.advanceTimersByTime(10000)
      })
      expect(onClose).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('has role="alert" for screen readers', () => {
      render(<Toast {...defaultProps} />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('has aria-live="polite" for non-error toasts', () => {
      render(<Toast {...defaultProps} variant="success" />)
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'polite')
    })

    it('has aria-live="assertive" for error toasts', () => {
      render(<Toast {...defaultProps} variant="error" />)
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'assertive')
    })
  })

  describe('Styling', () => {
    it('has proper toast styling', () => {
      render(<Toast {...defaultProps} />)
      const toast = screen.getByTestId('toast')
      expect(toast).toHaveClass('shadow-card')
      expect(toast).toHaveClass('rounded-lg')
    })

    it('has slide-in animation class', () => {
      render(<Toast {...defaultProps} />)
      const toast = screen.getByTestId('toast')
      expect(toast).toHaveClass('animate-slide-up')
    })
  })
})
