'use client'

import { forwardRef, useState, useCallback } from 'react'
import { CardProps } from '@/types/components'
import { useTiltEffect, useReducedMotion } from '@/lib/animations'

// ============================================
// CARD COMPONENT - Based on SPEC-001 Visual Identity
// Enhanced with 60fps microinteractions
// ============================================

const variantStyles = {
  default: `
    bg-white border border-slate-200
    shadow-subtle
  `,
  featured: `
    bg-gradient-to-br from-slate-900 to-slate-800
    text-white border-none
    shadow-lg
  `,
}

interface EnhancedCardProps extends CardProps {
  /** Enable 3D tilt effect on hover */
  tilt?: boolean
  /** Enable glow border effect on hover */
  glow?: boolean
  /** Enable spotlight effect following cursor */
  spotlight?: boolean
}

export const Card = forwardRef<HTMLDivElement, EnhancedCardProps>(
  (
    {
      variant = 'default',
      hoverable = false,
      tilt = false,
      glow = false,
      spotlight = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion()
    const { handleMouseMove: handleTiltMove, handleMouseLeave: handleTiltLeave } = useTiltEffect(8)
    const [isHovered, setIsHovered] = useState(false)
    const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 })

    // Disable effects if user prefers reduced motion
    const enableTilt = tilt && !prefersReducedMotion
    const enableGlow = glow && !prefersReducedMotion
    const enableSpotlight = spotlight && !prefersReducedMotion

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (enableTilt) {
          handleTiltMove(e)
        }
        if (enableSpotlight) {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          setSpotlightPos({ x, y })
        }
      },
      [enableTilt, enableSpotlight, handleTiltMove]
    )

    const handleMouseEnter = useCallback(() => setIsHovered(true), [])

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHovered(false)
        if (enableTilt) {
          handleTiltLeave(e)
        }
      },
      [enableTilt, handleTiltLeave]
    )

    return (
      <div className="relative group">
        {/* Glow effect container */}
        {enableGlow && (
          <div
            className={`
              absolute -inset-0.5 rounded-xl blur-sm
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
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`
            relative rounded-xl p-6 md:p-8 overflow-hidden
            transition-all duration-300 ease-out
            ${variantStyles[variant]}
            ${hoverable ? 'hover:shadow-card-hover hover:-translate-y-1 hover:border-slate-300 cursor-pointer' : ''}
            ${enableTilt ? 'transform-gpu' : ''}
            ${className}
          `.trim().replace(/\s+/g, ' ')}
          style={{
            willChange: enableTilt || enableSpotlight ? 'transform' : undefined,
          }}
          {...props}
        >
          {/* Spotlight effect overlay */}
          {enableSpotlight && (
            <div
              className={`
                absolute inset-0 pointer-events-none
                transition-opacity duration-300
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}
              style={{
                background: `radial-gradient(circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
              }}
              aria-hidden="true"
            />
          )}

          {/* Card content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'

// ============================================
// CARD SUB-COMPONENTS
// ============================================

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`mb-4 ${className}`}
    {...props}
  >
    {children}
  </div>
))

CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = '', children, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-xl font-display font-light text-slate-900 tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
))

CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = '', children, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-slate-600 font-light leading-relaxed mt-1 ${className}`}
    {...props}
  >
    {children}
  </p>
))

CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`${className}`}
    {...props}
  >
    {children}
  </div>
))

CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`mt-6 pt-4 border-t border-charcoal-200 ${className}`}
    {...props}
  >
    {children}
  </div>
))

CardFooter.displayName = 'CardFooter'
