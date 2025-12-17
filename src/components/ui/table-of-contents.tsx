'use client'

import { TableOfContentsProps } from '@/types/components'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// TABLE OF CONTENTS COMPONENT
// Enhanced with entrance animations
// ============================================

interface EnhancedTableOfContentsProps extends TableOfContentsProps {
  /** Disable entrance animations */
  disableAnimations?: boolean
}

/**
 * TableOfContents Component
 *
 * Auto-generated navigation for blog articles based on H2/H3 headings.
 * Features smooth scroll navigation, active section highlighting, and optional sticky positioning.
 * Enhanced with staggered entrance animations.
 *
 * @example
 * ```tsx
 * const headings = [
 *   { id: 'intro', text: 'Introduction', level: 2 },
 *   { id: 'setup', text: 'Setup', level: 3 }
 * ]
 *
 * <TableOfContents
 *   headings={headings}
 *   activeId="intro"
 *   sticky
 * />
 * ```
 */
export function TableOfContents({
  headings,
  activeId,
  onHeadingClick,
  sticky = false,
  disableAnimations = false,
}: EnhancedTableOfContentsProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView
  // Return null if no headings
  if (!headings || headings.length === 0) {
    return null
  }

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Call callback if provided
    if (onHeadingClick) {
      onHeadingClick(id)
    }

    // Smooth scroll to target
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      ref={ref}
      aria-label="Table of contents"
      className={`
        rounded-lg border border-charcoal-200 bg-white p-4
        ${sticky ? 'sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto' : ''}
        ${shouldAnimate ? 'animate-scale-in' : ''}
      `.trim().replace(/\s+/g, ' ')}
      style={{
        animationDelay: shouldAnimate ? '0ms' : undefined,
        opacity: shouldAnimate ? 0 : 1,
        animationFillMode: 'forwards',
      }}
    >
      <h2
        className={`
          mb-4 text-sm font-semibold uppercase tracking-wide text-charcoal-600
          ${shouldAnimate ? 'animate-text-reveal' : ''}
        `}
        style={{
          animationDelay: shouldAnimate ? '100ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        On This Page
      </h2>

      <ul className="space-y-2">
        {headings.map((heading, index) => {
          const isActiveHeading = activeId === heading.id
          const isH3 = heading.level === 3

          return (
            <li
              key={heading.id}
              className={`
                relative
                ${isH3 ? 'pl-4' : ''}
                ${shouldAnimate ? 'animate-text-reveal' : ''}
              `.trim().replace(/\s+/g, ' ')}
              style={{
                animationDelay: shouldAnimate ? getStaggerDelay(index + 2, 50) : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              <a
                href={`#${heading.id}`}
                onClick={handleClick(heading.id)}
                aria-current={isActiveHeading ? 'location' : undefined}
                className={`
                  block border-l-2 py-1 pl-3 text-sm transition-all duration-200
                  hover:border-royal-red-700 hover:text-royal-red-700 hover:translate-x-1
                  ${isActiveHeading
                    ? 'border-royal-red-700 font-semibold text-royal-red-700'
                    : 'border-transparent text-charcoal-600'
                  }
                `.trim().replace(/\s+/g, ' ')}
              >
                {heading.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

TableOfContents.displayName = 'TableOfContents'
