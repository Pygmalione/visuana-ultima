'use client'

import { forwardRef, useId } from 'react'
import { InputProps } from '@/types/components'

// ============================================
// INPUT COMPONENT - Based on SPEC-001 Visual Identity
// ============================================

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      success,
      fullWidth = false,
      disabled = false,
      className = '',
      id,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = id || generatedId
    const errorId = `${inputId}-error`

    const getBorderClass = () => {
      if (error) return 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
      if (success) return 'border-success-500 focus:border-success-500 focus:ring-success-500/20'
      return 'border-charcoal-200 focus:border-royal-red-700 focus:ring-royal-red-700/20'
    }

    return (
      <div
        data-testid="input-wrapper"
        className={`${fullWidth ? 'w-full' : 'inline-block'}`}
      >
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold text-charcoal-800 mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          aria-required={props.required ? 'true' : undefined}
          data-testid={type === 'password' ? 'password-input' : undefined}
          className={`
            w-full px-4 py-3
            text-base text-charcoal-800 placeholder-charcoal-400
            bg-white border-2 rounded-md
            transition-all duration-200 ease-out
            focus:outline-none focus:ring-4
            ${getBorderClass()}
            ${disabled ? 'bg-charcoal-100 opacity-60 cursor-not-allowed' : ''}
            ${className}
          `.trim().replace(/\s+/g, ' ')}
          {...props}
        />
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

Input.displayName = 'Input'
