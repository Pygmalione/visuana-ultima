'use client'

import { forwardRef } from 'react'
import { ButtonProps, ButtonVariant, ButtonSize } from '@/types/components'

// ============================================
// BUTTON STYLES - Based on SPEC-001 Visual Identity
// Enhanced with SPEC-007 micro-interactions
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
          font-medium rounded-xl
          transition-all duration-200 ease-out
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-slate-400 focus-visible:ring-offset-2
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
