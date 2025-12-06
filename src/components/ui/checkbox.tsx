'use client'

import { forwardRef, useId } from 'react'
import { CheckboxProps } from '@/types/components'

// ============================================
// CHECKBOX COMPONENT - Based on SPEC-001 Visual Identity
// Enhanced with SPEC-007 micro-interactions
// ============================================

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      disabled = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const checkboxId = id || generatedId
    const errorId = `${checkboxId}-error`

    const getBorderClass = () => {
      if (error) return 'border-red-500 focus:ring-red-500/20'
      return 'border-charcoal-300 focus:ring-royal-red-600/20'
    }

    const getCheckedClass = () => {
      if (error) return 'checked:bg-red-500 checked:border-red-500'
      return 'checked:bg-royal-red-600 checked:border-royal-red-600'
    }

    // Glow effect class for focus state (SPEC-007)
    const glowClass = error
      ? 'focus:shadow-[0_0_20px_rgba(239,68,68,0.3)]'
      : 'focus:shadow-[0_0_20px_rgba(220,38,38,0.3)]'

    return (
      <div data-testid="checkbox-wrapper">
        <div className="flex items-start">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? errorId : undefined}
            aria-required={props.required ? 'true' : undefined}
            className={`
              w-6 h-6 mt-0.5
              min-w-[24px]
              text-royal-red-600
              bg-white border-2 rounded
              transition-all duration-200 ease-out
              focus:outline-none focus:ring-4
              ${getBorderClass()}
              ${getCheckedClass()}
              ${glowClass}
              ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
              ${className}
            `.trim().replace(/\s+/g, ' ')}
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className={`
              ml-3 text-base text-charcoal-800 leading-relaxed
              ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
            `.trim().replace(/\s+/g, ' ')}
          >
            {label}
          </label>
        </div>
        {error && (
          <p
            id={errorId}
            className="mt-1.5 text-sm text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
