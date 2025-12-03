'use client'

import { useEffect } from 'react'
import { ToastProps, ToastVariant } from '@/types/components'

// ============================================
// TOAST COMPONENT
// Based on SPEC-001 Visual Identity
// Notification toast with auto-dismiss
// ============================================

const variantStyles: Record<ToastVariant, string> = {
  success: 'border-l-success-500 bg-success-50',
  error: 'border-l-red-500 bg-red-50',
  warning: 'border-l-amber-500 bg-amber-50',
  info: 'border-l-blue-500 bg-blue-50',
}

const variantIconColors: Record<ToastVariant, string> = {
  success: 'text-success-600',
  error: 'text-red-600',
  warning: 'text-amber-600',
  info: 'text-blue-600',
}

const ToastIcon = ({ variant }: { variant: ToastVariant }) => {
  const iconClass = `w-5 h-5 ${variantIconColors[variant]}`

  switch (variant) {
    case 'success':
      return (
        <svg
          data-testid="toast-icon-success"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )
    case 'error':
      return (
        <svg
          data-testid="toast-icon-error"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )
    case 'warning':
      return (
        <svg
          data-testid="toast-icon-warning"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      )
    case 'info':
    default:
      return (
        <svg
          data-testid="toast-icon-info"
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )
  }
}

export function Toast({
  id,
  title,
  message,
  variant = 'info',
  duration = 5000,
  onClose,
}: ToastProps) {
  // Auto-dismiss after duration
  useEffect(() => {
    if (duration === 0 || !onClose) return

    const timer = setTimeout(() => {
      onClose(id)
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, onClose])

  return (
    <div
      data-testid="toast"
      role="alert"
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      className={`
        flex items-start gap-3 p-4
        border-l-4 rounded-lg shadow-card
        animate-slide-up
        ${variantStyles[variant]}
      `.trim().replace(/\s+/g, ' ')}
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-0.5">
        <ToastIcon variant={variant} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-semibold text-charcoal-800 mb-0.5">{title}</p>
        )}
        <p className="text-sm text-charcoal-600">{message}</p>
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          type="button"
          onClick={() => onClose(id)}
          className="flex-shrink-0 p-1 text-charcoal-400 hover:text-charcoal-600 transition-colors duration-150 rounded hover:bg-white/50"
          aria-label="Zamknij powiadomienie"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  )
}

Toast.displayName = 'Toast'
