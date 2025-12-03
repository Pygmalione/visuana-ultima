'use client'

import { CategoryFilterProps } from '@/types/components'

/**
 * CategoryFilter Component
 *
 * Pill-style category filter for content filtering.
 * Supports "All" option and custom labels.
 *
 * @example
 * ```tsx
 * <CategoryFilter
 *   categories={['Digital Marketing', 'Content', 'AI']}
 *   activeCategory="Digital Marketing"
 *   onCategoryChange={(cat) => setCategory(cat)}
 *   showAll
 * />
 * ```
 */
export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  showAll = false,
  allLabel = 'All'
}: CategoryFilterProps) {
  const isActive = (category: string) => {
    // If no activeCategory is set and category is empty string (All), mark as active
    if (!activeCategory && category === '') return true
    return activeCategory === category
  }

  return (
    <div
      data-testid="category-filter"
      role="group"
      aria-label="Category filter"
      className="flex flex-wrap gap-2"
    >
      {showAll && (
        <button
          type="button"
          onClick={() => onCategoryChange('')}
          aria-pressed={isActive('')}
          className={`
            px-4 py-2 rounded-full
            text-sm font-medium
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-royal-red-700 focus:ring-offset-2
            ${
              isActive('')
                ? 'bg-royal-red-700 text-white shadow-button hover:shadow-button-hover'
                : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
            }
          `}
        >
          {allLabel}
        </button>
      )}

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          aria-pressed={isActive(category)}
          className={`
            px-4 py-2 rounded-full
            text-sm font-medium
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-royal-red-700 focus:ring-offset-2
            ${
              isActive(category)
                ? 'bg-royal-red-700 text-white shadow-button hover:shadow-button-hover'
                : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
