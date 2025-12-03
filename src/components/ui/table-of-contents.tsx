'use client'

import { TableOfContentsProps } from '@/types/components'

/**
 * TableOfContents Component
 *
 * Auto-generated navigation for blog articles based on H2/H3 headings.
 * Features smooth scroll navigation, active section highlighting, and optional sticky positioning.
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
}: TableOfContentsProps) {
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
      aria-label="Table of contents"
      className={`
        rounded-lg border border-charcoal-200 bg-white p-4
        ${sticky ? 'sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto' : ''}
      `.trim().replace(/\s+/g, ' ')}
    >
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-charcoal-600">
        On This Page
      </h2>

      <ul className="space-y-2">
        {headings.map((heading) => {
          const isActive = activeId === heading.id
          const isH3 = heading.level === 3

          return (
            <li
              key={heading.id}
              className={`
                relative
                ${isH3 ? 'pl-4' : ''}
              `.trim().replace(/\s+/g, ' ')}
            >
              <a
                href={`#${heading.id}`}
                onClick={handleClick(heading.id)}
                aria-current={isActive ? 'location' : undefined}
                className={`
                  block border-l-2 py-1 pl-3 text-sm transition-colors duration-200
                  hover:border-royal-red-700 hover:text-royal-red-700
                  ${isActive
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
