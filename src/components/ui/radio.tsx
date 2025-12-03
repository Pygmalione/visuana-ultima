'use client'

import { forwardRef, useId } from 'react'
import { RadioProps } from '@/types/components'

// ============================================
// RADIO COMPONENT - Based on SPEC-001 Visual Identity
// ============================================

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
    const radioId = id || generatedId
    const errorId = `${radioId}-error`

    const getBorderClass = () => {
      if (error) return 'border-red-500 focus:ring-red-500/20'
      return 'border-charcoal-300 focus:ring-royal-red-700/20'
    }

    const getCheckedClass = () => {
      if (error) return 'checked:bg-red-500 checked:border-red-500'
      return 'checked:bg-royal-red-700 checked:border-royal-red-700'
    }

    return (
      <div data-testid="radio-wrapper">
        <div className="flex items-start">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            disabled={disabled}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? errorId : undefined}
            aria-required={props.required ? 'true' : undefined}
            className={`
              w-5 h-5 mt-0.5
              text-royal-red-700
              bg-white border-2 rounded-full
              transition-all duration-200 ease-out
              focus:outline-none focus:ring-4
              ${getBorderClass()}
              ${getCheckedClass()}
              ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
              ${className}
            `.trim().replace(/\s+/g, ' ')}
            {...props}
          />
          <label
            htmlFor={radioId}
            className={`ml-2.5 text-base text-charcoal-800 ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
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

Radio.displayName = 'Radio'
