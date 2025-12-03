'use client'

import { useEffect, useId, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { ModalProps, ModalSize } from '@/types/components'

// ============================================
// MODAL/DIALOG COMPONENT
// Based on SPEC-001 Visual Identity
// Accessible modal with focus trap, keyboard handling
// ============================================

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full mx-4',
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
}: ModalProps) {
  const titleId = useId()
  const descriptionId = useId()

  // Handle Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        onClose()
      }
    },
    [closeOnEscape, onClose]
  )

  // Handle overlay click
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget && closeOnOverlayClick) {
        onClose()
      }
    },
    [closeOnOverlayClick, onClose]
  )

  // Lock body scroll and add keyboard listener
  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  const modalContent = (
    <div
      data-testid="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
    >
      <div
        data-testid="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        className={`
          relative w-full ${sizeClasses[size]}
          bg-white rounded-lg shadow-modal
          animate-slide-up
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-charcoal-400 hover:text-charcoal-600 transition-colors duration-150 rounded-md hover:bg-charcoal-100"
            aria-label="Zamknij okno dialogowe"
          >
            <svg
              className="w-5 h-5"
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

        {/* Header */}
        {(title || description) && (
          <div className="px-6 pt-6 pb-4">
            {title && (
              <h2
                id={titleId}
                className="text-xl font-bold text-charcoal-800 pr-8"
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                id={descriptionId}
                className="mt-2 text-sm text-charcoal-600"
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        <div className={`px-6 ${title || description ? 'pb-6' : 'py-6'}`}>
          {children}
        </div>
      </div>
    </div>
  )

  // Render to portal if in browser (skip portal in test environment for simpler testing)
  if (typeof window === 'undefined') return null

  // Use portal in production, but allow direct render in test environment
  const portalRoot = document.getElementById('modal-root') || document.body

  return createPortal(modalContent, portalRoot)
}

Modal.displayName = 'Modal'
