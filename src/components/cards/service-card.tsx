'use client'

import Link from 'next/link'
import { useState, useCallback } from 'react'
import { ServiceCardProps } from '@/types/components'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// SERVICE CARD COMPONENT
// Based on SPEC-001 Visual Identity
// Enhanced with 60fps microinteractions
// ============================================

interface EnhancedServiceCardProps extends ServiceCardProps {
  /** Index for staggered animations */
  index?: number
  /** Enable glow border effect on hover */
  glow?: boolean
  /** Disable entrance animations */
  disableAnimations?: boolean
}

export function ServiceCard({
  icon,
  title,
  description,
  link,
  linkLabel = 'Więcej →',
  variant = 'default',
  index = 0,
  glow = false,
  disableAnimations = false,
}: EnhancedServiceCardProps) {
  const isHorizontal = variant === 'horizontal'
  const isFeatured = variant === 'featured'
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const [isHovered, setIsHovered] = useState(false)

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView
  const showGlow = glow && !prefersReducedMotion

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [])

  return (
    <div className="relative group">
      {/* Glow effect container */}
      {showGlow && (
        <div
          className={`
            absolute -inset-0.5 rounded-lg blur-sm
            bg-gradient-to-r from-slate-300/50 via-slate-400/50 to-slate-300/50
            transition-opacity duration-300
            ${isHovered ? 'opacity-75' : 'opacity-0'}
          `}
          aria-hidden="true"
        />
      )}

      {/* Main card */}
      <div
        ref={ref}
        data-testid="service-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          relative
          flex
          bg-white rounded-lg overflow-hidden
          border
          shadow-card hover:shadow-card-hover
          transition-all duration-300 ease-out
          hover:-translate-y-1
          ${isHorizontal ? 'flex-col md:flex-row md:items-center p-4 md:p-6 gap-4 md:gap-6' : 'flex-col p-6'}
          ${isFeatured ? 'border-slate-700 border-2' : 'border-slate-200 hover:border-slate-300'}
          ${shouldAnimate ? 'animate-scale-in' : ''}
        `.trim().replace(/\s+/g, ' ')}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(index, 100) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        {/* Icon Container with bounce animation */}
        <div
          data-testid="service-icon-container"
          aria-hidden="true"
          className={`
            flex items-center justify-center
            rounded-lg
            bg-slate-100 text-slate-700
            transition-all duration-300
            group-hover:bg-slate-200 group-hover:scale-110
            ${isHorizontal ? 'w-12 h-12 md:w-16 md:h-16 flex-shrink-0' : 'w-14 h-14 mb-4'}
          `}
          style={{
            willChange: 'transform',
          }}
        >
          <span
            className={`
              ${isHorizontal ? 'text-2xl md:text-3xl' : 'text-3xl'}
              transition-transform duration-300 group-hover:scale-110
            `}
          >
            {icon}
          </span>
        </div>

        {/* Content */}
        <div className={isHorizontal ? 'flex-1' : ''}>
          {/* Title */}
          <h3 className={`
            font-display font-light text-slate-900 tracking-tight
            transition-colors duration-200
            ${isHorizontal ? 'text-lg md:text-xl mb-1' : 'text-xl mb-2'}
          `}>
            {title}
          </h3>

          {/* Description */}
          <p className={`
            text-slate-600 font-light leading-relaxed
            ${isHorizontal ? 'text-sm md:text-base mb-0' : 'text-base mb-4'}
          `}>
            {description}
          </p>

          {/* Link */}
          {link && !isHorizontal && (
            <Link
              href={link}
              className="group/link inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-150"
            >
              {linkLabel}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
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
            className="group/link flex-shrink-0 inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-150 md:ml-auto"
          >
            {linkLabel}
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
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
    </div>
  )
}

ServiceCard.displayName = 'ServiceCard'
