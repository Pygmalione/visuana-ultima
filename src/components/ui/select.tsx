'use client'

import { forwardRef, useId } from 'react'
import { SelectProps } from '@/types/components'

// ============================================
// SELECT COMPONENT - Based on SPEC-001 Visual Identity
// Enhanced with SPEC-007 micro-interactions
// ============================================

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      options,
      placeholder,
      fullWidth = false,
      disabled = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const selectId = id || generatedId
    const errorId = `${selectId}-error`

    const getBorderClass = () => {
      if (error) return 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
      return 'border-slate-200 focus:border-red-600 focus:ring-red-600/20'
    }

    // Glow effect class for focus state (SPEC-007)
    const glowClass = error
      ? 'focus:shadow-[0_0_30px_rgba(239,68,68,0.3)]'
      : 'focus:shadow-[0_0_30px_rgba(220,38,38,0.3)]'

    return (
      <div
        data-testid="select-wrapper"
        className={`${fullWidth ? 'w-full' : 'inline-block'}`}
      >
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-semibold text-charcoal-800 mb-1.5"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          disabled={disabled}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          aria-required={props.required ? 'true' : undefined}
          className={`
            w-full px-4 py-3
            min-h-[44px]
            text-base text-charcoal-800
            bg-white border-2 rounded-md
            transition-all duration-200 ease-out
            focus:outline-none focus:ring-4
            ${getBorderClass()}
            ${glowClass}
            ${disabled ? 'bg-charcoal-100 opacity-60 cursor-not-allowed' : ''}
            ${className}
          `.trim().replace(/\s+/g, ' ')}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = 'Select'
