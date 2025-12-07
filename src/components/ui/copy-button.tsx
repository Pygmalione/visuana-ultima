'use client'

import { useState, useEffect } from 'react'
import type { CopyButtonProps } from '@/types/components'

/**
 * CopyButton Component
 *
 * Small icon button for copying text to clipboard with visual feedback.
 *
 * @example
 * ```tsx
 * <CopyButton text="code to copy" />
 * <CopyButton text="npm install package" onCopy={() => console.log('Copied!')} />
 * ```
 */
export function CopyButton({
  text,
  onCopy,
  className = '',
  label = 'Kopiuj do schowka'
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  // Cleanup timeout on unmount
  useEffect(() => {
    if (!copied) return

    const timeoutId = setTimeout(() => {
      setCopied(false)
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      onCopy?.()
    } catch (error) {
      // Silently fail - clipboard API might not be available
      console.error('Failed to copy text:', error)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`
        inline-flex items-center justify-center
        w-8 h-8
        rounded
        transition-all duration-200
        ${copied
          ? 'text-green-500'
          : 'text-charcoal-400 hover:text-charcoal-600 hover:bg-charcoal-100'
        }
        focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      aria-label={copied ? 'Skopiowano' : label}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  )
}

/**
 * Copy Icon (two overlapping rectangles)
 */
function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

/**
 * Check Icon (checkmark)
 */
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
