import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '@/components/ui/input'

describe('Input Component', () => {
  // ============================================
  // RENDERING TESTS
  // ============================================

  it('renders input element', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Input label="Email" id="email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders without label', () => {
    render(<Input placeholder="No label" />)
    expect(screen.queryByRole('label')).not.toBeInTheDocument()
  })

  // ============================================
  // INPUT TYPES TESTS
  // ============================================

  it('renders text input by default', () => {
    render(<Input />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders email input', () => {
    render(<Input type="email" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders password input', () => {
    render(<Input type="password" />)
    const input = screen.getByTestId('password-input')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('renders tel input', () => {
    render(<Input type="tel" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'tel')
  })

  // ============================================
  // STATE TESTS
  // ============================================

  it('handles disabled state', () => {
    render(<Input disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    expect(input).toHaveClass('cursor-not-allowed')
  })

  it('shows error state', () => {
    render(<Input error="This field is required" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-red-500')
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('shows success state', () => {
    render(<Input success />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-success-500')
  })

  it('renders full width', () => {
    render(<Input fullWidth />)
    const wrapper = screen.getByTestId('input-wrapper')
    expect(wrapper).toHaveClass('w-full')
  })

  // ============================================
  // EVENT TESTS
  // ============================================

  it('calls onChange handler', () => {
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('calls onFocus handler', () => {
    const handleFocus = vi.fn()
    render(<Input onFocus={handleFocus} />)
    fireEvent.focus(screen.getByRole('textbox'))
    expect(handleFocus).toHaveBeenCalled()
  })

  it('calls onBlur handler', () => {
    const handleBlur = vi.fn()
    render(<Input onBlur={handleBlur} />)
    fireEvent.blur(screen.getByRole('textbox'))
    expect(handleBlur).toHaveBeenCalled()
  })

  // ============================================
  // ACCESSIBILITY TESTS
  // ============================================

  it('associates label with input via htmlFor', () => {
    render(<Input label="Username" id="username" />)
    const label = screen.getByText('Username')
    const input = screen.getByLabelText('Username')
    expect(label).toHaveAttribute('for', 'username')
    expect(input).toHaveAttribute('id', 'username')
  })

  it('shows aria-invalid when error exists', () => {
    render(<Input error="Error message" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('links error message with aria-describedby', () => {
    render(<Input id="test" error="Error message" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-describedby', 'test-error')
    expect(screen.getByText('Error message')).toHaveAttribute('id', 'test-error')
  })

  it('accepts custom className', () => {
    render(<Input className="custom-class" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    render(<Input data-testid="custom-input" maxLength={50} />)
    const input = screen.getByTestId('custom-input')
    expect(input).toHaveAttribute('maxLength', '50')
  })
})
