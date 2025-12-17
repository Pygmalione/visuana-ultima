'use client'

import { CategoryFilterProps } from '@/types/components'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// CATEGORY FILTER COMPONENT
// Enhanced with staggered button animations
// ============================================

interface EnhancedCategoryFilterProps extends CategoryFilterProps {
  /** Disable entrance animations */
  disableAnimations?: boolean
}

/**
 * CategoryFilter Component
 *
 * Pill-style category filter for content filtering.
 * Supports "All" option and custom labels.
 * Enhanced with staggered entrance animations.
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
  allLabel = 'All',
  disableAnimations = false,
}: EnhancedCategoryFilterProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView
  const isActive = (category: string) => {
    // If no activeCategory is set and category is empty string (All), mark as active
    if (!activeCategory && category === '') return true
    return activeCategory === category
  }

  return (
    <div
      ref={ref}
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
            focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2
            hover:scale-105 active:scale-95
            ${shouldAnimate ? 'animate-scale-in' : ''}
            ${
              isActive('')
                ? 'bg-royal-red-700 text-white shadow-button hover:shadow-button-hover'
                : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
            }
          `}
          style={{
            animationDelay: shouldAnimate ? '0ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          {allLabel}
        </button>
      )}

      {categories.map((category, index) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          aria-pressed={isActive(category)}
          className={`
            px-4 py-2 rounded-full
            text-sm font-medium
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2
            hover:scale-105 active:scale-95
            ${shouldAnimate ? 'animate-scale-in' : ''}
            ${
              isActive(category)
                ? 'bg-royal-red-700 text-white shadow-button hover:shadow-button-hover'
                : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
            }
          `}
          style={{
            animationDelay: shouldAnimate ? getStaggerDelay(showAll ? index + 1 : index, 60) : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

CategoryFilter.displayName = 'CategoryFilter'
