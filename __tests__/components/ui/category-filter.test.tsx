import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CategoryFilter } from '@/components/ui/category-filter'

describe('CategoryFilter', () => {
  const mockCategories = ['Digital Marketing', 'Content Marketing', 'AI Analytics']

  it('renders all categories as buttons', () => {
    const handleChange = vi.fn()
    render(
      <CategoryFilter
        categories={mockCategories}
        onCategoryChange={handleChange}
      />
    )

    mockCategories.forEach(category => {
      expect(screen.getByRole('button', { name: category })).toBeInTheDocument()
    })
  })

  it('shows "All" option when showAll is true', () => {
    const handleChange = vi.fn()
    render(
      <CategoryFilter
        categories={mockCategories}
        onCategoryChange={handleChange}
        showAll
      />
    )

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
  })

  it('uses custom allLabel when provided', () => {
    const handleChange = vi.fn()
    render(
      <CategoryFilter
        categories={mockCategories}
        onCategoryChange={handleChange}
        showAll
        allLabel="Wszystkie"
      />
    )

    expect(screen.getByRole('button', { name: 'Wszystkie' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'All' })).not.toBeInTheDocument()
  })

  it('highlights active category with royal-red styling', () => {
    const handleChange = vi.fn()
    render(
      <CategoryFilter
        categories={mockCategories}
        activeCategory="Digital Marketing"
        onCategoryChange={handleChange}
      />
    )

    const activeButton = screen.getByRole('button', { name: 'Digital Marketing' })
    expect(activeButton).toHaveClass('bg-royal-red-700', 'text-white')
  })

  it('inactive categories have charcoal styling', () => {
    const handleChange = vi.fn()
    render(
      <CategoryFilter
        categories={mockCategories}
        activeCategory="Digital Marketing"
        onCategoryChange={handleChange}
      />
    )

    const inactiveButton = screen.getByRole('button', { name: 'Content Marketing' })
    expect(inactiveButton).toHaveClass('bg-charcoal-100', 'text-charcoal-700')
  })

  it('calls onCategoryChange when category is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(
      <CategoryFilter
        categories={mockCategories}
        onCategoryChange={handleChange}
      />
    )

    const button = screen.getByRole('button', { name: 'AI Analytics' })
    await user.click(button)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('AI Analytics')
  })

  it('calls onCategoryChange with empty string when "All" is clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(
      <CategoryFilter
        categories={mockCategories}
        onCategoryChange={handleChange}
        showAll
      />
    )

    const allButton = screen.getByRole('button', { name: 'All' })
    await user.click(allButton)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('')
  })

  it('has proper accessibility attributes', () => {
    const handleChange = vi.fn()
    render(
      <CategoryFilter
        categories={mockCategories}
        activeCategory="Digital Marketing"
        onCategoryChange={handleChange}
      />
    )

    const wrapper = screen.getByTestId('category-filter')
    expect(wrapper).toHaveAttribute('role', 'group')
    expect(wrapper).toHaveAttribute('aria-label', 'Category filter')

    const activeButton = screen.getByRole('button', { name: 'Digital Marketing' })
    expect(activeButton).toHaveAttribute('aria-pressed', 'true')

    const inactiveButton = screen.getByRole('button', { name: 'Content Marketing' })
    expect(inactiveButton).toHaveAttribute('aria-pressed', 'false')
  })

  it('renders with proper spacing between chips', () => {
    const handleChange = vi.fn()
    const { container } = render(
      <CategoryFilter
        categories={mockCategories}
        onCategoryChange={handleChange}
      />
    )

    const wrapper = container.querySelector('[data-testid="category-filter"]')
    expect(wrapper).toHaveClass('gap-2')
  })

  it('has hover states on inactive buttons', () => {
    const handleChange = vi.fn()
    render(
      <CategoryFilter
        categories={mockCategories}
        activeCategory="Digital Marketing"
        onCategoryChange={handleChange}
      />
    )

    const inactiveButton = screen.getByRole('button', { name: 'Content Marketing' })
    expect(inactiveButton).toHaveClass('hover:bg-charcoal-200')
  })

  it('has smooth transitions on state changes', () => {
    const handleChange = vi.fn()
    render(
      <CategoryFilter
        categories={mockCategories}
        onCategoryChange={handleChange}
      />
    )

    const button = screen.getByRole('button', { name: 'Digital Marketing' })
    expect(button).toHaveClass('transition-all', 'duration-200')
  })

  it('renders empty state gracefully', () => {
    const handleChange = vi.fn()
    render(
      <CategoryFilter
        categories={[]}
        onCategoryChange={handleChange}
      />
    )

    const wrapper = screen.getByTestId('category-filter')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper.children).toHaveLength(0)
  })
})
