import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Radio } from '@/components/ui/radio'

// ============================================
// TEXTAREA TESTS
// ============================================

describe('Textarea Component', () => {
  it('renders textarea with label', () => {
    render(<Textarea label="Komentarz" placeholder="Wpisz komentarz" />)

    expect(screen.getByLabelText('Komentarz')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Wpisz komentarz')).toBeInTheDocument()
  })

  it('shows error message when error prop is provided', () => {
    render(<Textarea label="Komentarz" error="To pole jest wymagane" />)

    const textarea = screen.getByLabelText('Komentarz')
    expect(screen.getByText('To pole jest wymagane')).toBeInTheDocument()
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
  })

  it('applies disabled state correctly', () => {
    render(<Textarea label="Komentarz" disabled />)

    const textarea = screen.getByLabelText('Komentarz')
    expect(textarea).toBeDisabled()
  })
})

// ============================================
// SELECT TESTS
// ============================================

describe('Select Component', () => {
  const options = [
    { value: 'pl', label: 'Polska' },
    { value: 'en', label: 'English' },
    { value: 'de', label: 'Deutsch' },
  ]

  it('renders select with options', () => {
    render(<Select label="Język" options={options} />)

    expect(screen.getByLabelText('Język')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Polska' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'English' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Deutsch' })).toBeInTheDocument()
  })

  it('renders placeholder when provided', () => {
    render(<Select label="Język" options={options} placeholder="Wybierz język" />)

    expect(screen.getByRole('option', { name: 'Wybierz język' })).toBeInTheDocument()
  })

  it('shows error state', () => {
    render(<Select label="Język" options={options} error="Wybierz język" />)

    const select = screen.getByLabelText('Język')
    expect(screen.getByText('Wybierz język')).toBeInTheDocument()
    expect(select).toHaveAttribute('aria-invalid', 'true')
  })
})

// ============================================
// CHECKBOX TESTS
// ============================================

describe('Checkbox Component', () => {
  it('renders checkbox with label', () => {
    render(<Checkbox label="Akceptuję regulamin" />)

    expect(screen.getByLabelText('Akceptuję regulamin')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('handles checked state', () => {
    render(<Checkbox label="Akceptuję regulamin" checked />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('applies disabled state', () => {
    render(<Checkbox label="Akceptuję regulamin" disabled />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
  })
})

// ============================================
// RADIO TESTS
// ============================================

describe('Radio Component', () => {
  it('renders radio with label', () => {
    render(<Radio label="Opcja A" value="a" name="choice" />)

    expect(screen.getByLabelText('Opcja A')).toBeInTheDocument()
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('handles checked state', () => {
    render(<Radio label="Opcja A" value="a" name="choice" checked />)

    const radio = screen.getByRole('radio')
    expect(radio).toBeChecked()
  })

  it('applies disabled state', () => {
    render(<Radio label="Opcja A" value="a" name="choice" disabled />)

    const radio = screen.getByRole('radio')
    expect(radio).toBeDisabled()
  })
})
