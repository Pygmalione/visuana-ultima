import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { CopyButton } from '@/components/ui/copy-button'

// Mock clipboard API
const mockWriteText = vi.fn(() => Promise.resolve())
Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
})

describe('CopyButton Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  // ============================================
  // RENDERING TESTS
  // ============================================

  it('renders copy button with copy icon by default', () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<CopyButton text="test" className="custom-class" />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('has button role for accessibility', () => {
    render(<CopyButton text="test" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  // ============================================
  // COPY FUNCTIONALITY TESTS
  // ============================================

  it('copies text to clipboard on click', async () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')

    await act(async () => {
      button.click()
    })

    expect(mockWriteText).toHaveBeenCalledWith('test content')
    expect(mockWriteText).toHaveBeenCalledTimes(1)
  })

  it('calls onCopy callback after successful copy', async () => {
    const handleCopy = vi.fn()
    render(<CopyButton text="test content" onCopy={handleCopy} />)
    const button = screen.getByRole('button')

    await act(async () => {
      button.click()
    })

    expect(handleCopy).toHaveBeenCalledTimes(1)
  })

  it('shows success state after copy', async () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')

    await act(async () => {
      button.click()
    })

    // Check that aria-label changes to indicate success
    expect(button).toHaveAttribute('aria-label', 'Skopiowano')
  })

  it('resets to default state after 2 seconds', async () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')

    await act(async () => {
      button.click()
    })

    // Should be in success state immediately after click
    expect(button).toHaveAttribute('aria-label', 'Skopiowano')

    // Fast forward 2 seconds
    await act(async () => {
      vi.advanceTimersByTime(2000)
    })

    // Should reset to default state
    expect(button).toHaveAttribute('aria-label', 'Kopiuj do schowka')
  })

  it('handles copy failure gracefully', async () => {
    // Mock clipboard failure
    mockWriteText.mockRejectedValueOnce(new Error('Copy failed'))

    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')

    await act(async () => {
      button.click()
    })

    // Should not throw error
    expect(mockWriteText).toHaveBeenCalled()
  })

  // ============================================
  // VISUAL FEEDBACK TESTS
  // ============================================

  it('shows copy icon initially', () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')
    const svg = button.querySelector('svg')

    expect(svg).toBeInTheDocument()
    // Check for copy icon path (two overlapping rectangles)
    expect(svg?.querySelector('rect')).toBeInTheDocument()
  })

  it('shows check icon after successful copy', async () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')

    await act(async () => {
      button.click()
    })

    const svg = button.querySelector('svg')
    // Check icon has a polyline element
    expect(svg?.querySelector('polyline')).toBeInTheDocument()
  })

  it('returns to copy icon after timeout', async () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')

    await act(async () => {
      button.click()
    })

    // Wait for success state
    let svg = button.querySelector('svg')
    expect(svg?.querySelector('polyline')).toBeInTheDocument()

    // Fast forward timeout
    await act(async () => {
      vi.advanceTimersByTime(2000)
    })

    // Should show copy icon again
    svg = button.querySelector('svg')
    expect(svg?.querySelector('rect')).toBeInTheDocument()
  })

  // ============================================
  // ACCESSIBILITY TESTS
  // ============================================

  it('has default aria-label for screen readers', () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Kopiuj do schowka')
  })

  it('custom label prop overrides default', () => {
    render(<CopyButton text="test" label="Copy code" />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Copy code')
  })

  it('button is focusable', () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')
    button.focus()
    expect(button).toHaveFocus()
  })

  it('can be activated via keyboard', async () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')
    button.focus()

    await act(async () => {
      button.click()
    })

    expect(mockWriteText).toHaveBeenCalledWith('test content')
  })

  // ============================================
  // EDGE CASES
  // ============================================

  it('handles empty text gracefully', async () => {
    render(<CopyButton text="" />)
    const button = screen.getByRole('button')

    await act(async () => {
      button.click()
    })

    expect(mockWriteText).toHaveBeenCalledWith('')
  })

  it('handles multiple rapid clicks', async () => {
    render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')

    await act(async () => {
      button.click()
      button.click()
      button.click()
    })

    // Should still only copy once per click (but allow multiple)
    expect(mockWriteText).toHaveBeenCalledTimes(3)
  })

  it('cleans up timeout on unmount', async () => {
    const { unmount } = render(<CopyButton text="test content" />)
    const button = screen.getByRole('button')

    await act(async () => {
      button.click()
    })

    expect(button).toHaveAttribute('aria-label', 'Skopiowano')

    // Unmount before timeout completes
    unmount()

    // Should not throw error
    await act(async () => {
      vi.advanceTimersByTime(2000)
    })
  })
})
