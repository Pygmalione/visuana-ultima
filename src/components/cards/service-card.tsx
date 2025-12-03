import Link from 'next/link'
import { ServiceCardProps } from '@/types/components'

// ============================================
// SERVICE CARD COMPONENT
// Based on SPEC-001 Visual Identity
// Service offering card with icon, title, description
// ============================================

export function ServiceCard({
  icon,
  title,
  description,
  link,
  linkLabel = 'Więcej →',
  variant = 'default',
}: ServiceCardProps) {
  const isHorizontal = variant === 'horizontal'
  const isFeatured = variant === 'featured'

  return (
    <div
      data-testid="service-card"
      className={`
        group
        flex
        bg-white rounded-lg overflow-hidden
        border
        shadow-card hover:shadow-card-hover
        transition-all duration-300 ease-out
        hover:-translate-y-1
        ${isHorizontal ? 'flex-col md:flex-row md:items-center p-4 md:p-6 gap-4 md:gap-6' : 'flex-col p-6'}
        ${isFeatured ? 'border-royal-red-700 border-2' : 'border-charcoal-100'}
      `.trim().replace(/\s+/g, ' ')}
    >
      {/* Icon Container */}
      <div
        data-testid="service-icon-container"
        aria-hidden="true"
        className={`
          flex items-center justify-center
          rounded-lg
          bg-royal-red-50 text-royal-red-700
          transition-colors duration-200 group-hover:bg-royal-red-100
          ${isHorizontal ? 'w-12 h-12 md:w-16 md:h-16 flex-shrink-0' : 'w-14 h-14 mb-4'}
        `}
      >
        <span className={isHorizontal ? 'text-2xl md:text-3xl' : 'text-3xl'}>
          {icon}
        </span>
      </div>

      {/* Content */}
      <div className={isHorizontal ? 'flex-1' : ''}>
        {/* Title */}
        <h3 className={`
          font-bold text-charcoal-800
          ${isHorizontal ? 'text-lg md:text-xl mb-1' : 'text-xl mb-2'}
        `}>
          {title}
        </h3>

        {/* Description */}
        <p className={`
          text-charcoal-600
          ${isHorizontal ? 'text-sm md:text-base mb-0' : 'text-base mb-4'}
        `}>
          {description}
        </p>

        {/* Link */}
        {link && !isHorizontal && (
          <Link
            href={link}
            className="group inline-flex items-center gap-1 text-sm font-semibold text-royal-red-700 hover:text-royal-red-800 transition-colors duration-150"
          >
            {linkLabel}
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        )}
      </div>

      {/* Horizontal variant link */}
      {link && isHorizontal && (
        <Link
          href={link}
          className="group flex-shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-royal-red-700 hover:text-royal-red-800 transition-colors duration-150 md:ml-auto"
        >
          {linkLabel}
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      )}
    </div>
  )
}

ServiceCard.displayName = 'ServiceCard'
