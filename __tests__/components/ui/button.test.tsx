import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
  // ============================================
  // RENDERING TESTS
  // ============================================

  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('renders with default variant (primary)', () => {
    render(<Button>Primary</Button>)
    const button = screen.getByRole('button')
    // Updated to slate-900 for McKinsey-style professional light theme
    expect(button).toHaveClass('bg-slate-900')
  })

  // ============================================
  // VARIANT TESTS
  // ============================================

  it('renders primary variant correctly', () => {
    render(<Button variant="primary">Primary</Button>)
    const button = screen.getByRole('button')
    // Updated to slate-900 for McKinsey-style professional light theme
    expect(button).toHaveClass('bg-slate-900')
    expect(button).toHaveClass('text-white')
  })

  it('renders secondary variant correctly', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button')
    // Updated to slate-300 for McKinsey-style professional light theme
    expect(button).toHaveClass('border-slate-300')
    expect(button).toHaveClass('text-slate-700')
  })

  it('renders ghost variant correctly', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-transparent')
    expect(button).toHaveClass('text-slate-700')
  })

  it('renders outline variant correctly', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border-slate-200')
  })

  // ============================================
  // SIZE TESTS
  // ============================================

  it('renders small size correctly', () => {
    render(<Button size="sm">Small</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('px-4')
    expect(button).toHaveClass('py-2')
    expect(button).toHaveClass('text-sm')
  })

  it('renders medium size correctly (default)', () => {
    render(<Button size="md">Medium</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('px-6')
    expect(button).toHaveClass('py-3')
    expect(button).toHaveClass('text-base')
  })

  it('renders large size correctly', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('px-8')
    expect(button).toHaveClass('py-4')
    expect(button).toHaveClass('text-lg')
  })

  // ============================================
  // STATE TESTS
  // ============================================

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('opacity-50')
    expect(button).toHaveClass('cursor-not-allowed')
  })

  it('shows loading spinner when loading', () => {
    render(<Button loading>Loading</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-busy', 'true')
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('disables button when loading', () => {
    render(<Button loading>Loading</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  // ============================================
  // EVENT TESTS
  // ============================================

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>Disabled</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('does not call onClick when loading', () => {
    const handleClick = vi.fn()
    render(<Button loading onClick={handleClick}>Loading</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  // ============================================
  // ACCESSIBILITY TESTS
  // ============================================

  it('has correct button role', () => {
    render(<Button>Accessible</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    render(<Button data-testid="custom-button" aria-label="Custom action">Props</Button>)
    const button = screen.getByTestId('custom-button')
    expect(button).toHaveAttribute('aria-label', 'Custom action')
  })

  it('supports type attribute', () => {
    render(<Button type="submit">Submit</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
  })
})
