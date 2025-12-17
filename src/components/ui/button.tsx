'use client'

import { forwardRef, useCallback, useState } from 'react'
import { ButtonProps, ButtonVariant, ButtonSize } from '@/types/components'
import { useMagneticHover, createRipple, useReducedMotion } from '@/lib/animations'

// ============================================
// BUTTON STYLES - Based on SPEC-001 Visual Identity
// Enhanced with 60fps microinteractions
// ============================================

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-slate-900 text-white
    hover:bg-slate-800
    active:bg-slate-700
    shadow-lg shadow-slate-900/10
    hover:shadow-xl hover:shadow-slate-900/20
  `,
  secondary: `
    bg-transparent text-slate-700
    border-2 border-slate-300
    hover:bg-slate-50 hover:border-slate-400
  `,
  ghost: `
    bg-transparent text-slate-700
    hover:bg-slate-100
  `,
  outline: `
    bg-transparent text-slate-600
    border border-slate-200
    hover:border-slate-300 hover:bg-slate-50
  `,
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[52px]',
}

// ============================================
// ENHANCED BUTTON PROPS
// ============================================

interface EnhancedButtonProps extends ButtonProps {
  /** Enable shimmer effect on hover (primary variant) */
  shimmer?: boolean
  /** Enable magnetic hover effect */
  magnetic?: boolean
  /** Enable ripple effect on click */
  ripple?: boolean
  /** Enable glow effect on hover */
  glow?: boolean
}

// ============================================
// BUTTON COMPONENT
// ============================================

export const Button = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      shimmer = false,
      magnetic = false,
      ripple = true,
      glow = false,
      className = '',
      children,
      onClick,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading
    const prefersReducedMotion = useReducedMotion()
    const { handleMouseMove, handleMouseLeave } = useMagneticHover(magnetic ? 4 : 0)
    const [isHovered, setIsHovered] = useState(false)

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isDisabled) {
          e.preventDefault()
          return
        }

        // Ripple effect on click
        if (ripple && !prefersReducedMotion) {
          const rippleColor = variant === 'primary' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.1)'
          createRipple(e, rippleColor)
        }

        onClick?.(e)
      },
      [isDisabled, onClick, ripple, prefersReducedMotion, variant]
    )

    const handleMouseEnter = useCallback(() => setIsHovered(true), [])
    const handleMouseLeaveLocal = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsHovered(false)
        handleMouseLeave(e)
      },
      [handleMouseLeave]
    )

    // Determine if we should show shimmer (only primary + enabled)
    const showShimmer = shimmer && variant === 'primary' && !isDisabled && !prefersReducedMotion
    const showGlow = glow && !isDisabled && !prefersReducedMotion

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseMove={magnetic ? handleMouseMove : undefined}
        onMouseLeave={handleMouseLeaveLocal}
        className={`
          group relative inline-flex items-center justify-center
          font-medium rounded-xl overflow-hidden
          transition-all duration-200 ease-out
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-slate-400 focus-visible:ring-offset-2
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-0.5 active:translate-y-0'}
          ${magnetic && !prefersReducedMotion ? 'transition-transform duration-150 ease-out' : ''}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        style={{
          willChange: magnetic || shimmer || glow ? 'transform' : undefined,
        }}
        {...props}
      >
        {/* Glow effect background */}
        {showGlow && (
          <span
            className={`
              absolute -inset-1 rounded-xl blur-md
              bg-gradient-to-r from-slate-400/50 to-slate-600/50
              transition-opacity duration-300
              ${isHovered ? 'opacity-75' : 'opacity-0'}
            `}
            aria-hidden="true"
          />
        )}

        {/* Shimmer effect overlay */}
        {showShimmer && (
          <span
            className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none"
            aria-hidden="true"
          >
            <span
              className={`
                absolute inset-0 -translate-x-full
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                transition-transform duration-700 ease-out
                ${isHovered ? 'translate-x-full' : ''}
              `}
            />
          </span>
        )}

        {/* Button content */}
        <span className="relative z-10 inline-flex items-center justify-center">
          {loading && (
            <span
              data-testid="loading-spinner"
              className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden="true"
            />
          )}
          {children}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'
