'use client'

import { forwardRef } from 'react'
import { ButtonProps, ButtonVariant, ButtonSize } from '@/types/components'

// ============================================
// BUTTON STYLES - Based on SPEC-001 Visual Identity
// Enhanced with SPEC-007 micro-interactions
// ============================================

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-royal-red-600 text-white
    hover:bg-royal-red-700
    active:bg-royal-red-800
    shadow-button hover:shadow-button-hover
    hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]
  `,
  secondary: `
    bg-transparent text-royal-red-600
    border-2 border-royal-red-600
    hover:bg-royal-red-600 hover:text-white
    hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]
  `,
  ghost: `
    bg-transparent text-charcoal-800
    hover:bg-charcoal-100
  `,
  outline: `
    bg-transparent text-charcoal-700
    border-2 border-charcoal-300
    hover:border-charcoal-400 hover:bg-charcoal-50
  `,
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[52px]',
}

// ============================================
// BUTTON COMPONENT
// ============================================

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      className = '',
      children,
      onClick,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        e.preventDefault()
        return
      }
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading}
        onClick={handleClick}
        className={`
          inline-flex items-center justify-center
          font-semibold rounded-md
          transition-all duration-200 ease-out
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-royal-red-600 focus-visible:ring-offset-2
          focus-visible:shadow-[0_0_30px_rgba(220,38,38,0.3)]
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-0.5 active:translate-y-0'}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {loading && (
          <span
            data-testid="loading-spinner"
            className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
