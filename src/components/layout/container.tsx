'use client'

import { forwardRef } from 'react'
import { ContainerProps } from '@/types/components'

// ============================================
// CONTAINER COMPONENT - Based on SPEC-001
// Max-width: 1200px (default)
// ============================================

const maxWidthStyles = {
  sm: 'max-w-screen-sm',    // 640px
  md: 'max-w-screen-md',    // 768px
  lg: 'max-w-screen-lg',    // 1024px
  xl: 'max-w-container',    // 1200px (custom)
  full: 'max-w-full',       // 100%
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      maxWidth = 'xl',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          w-full mx-auto
          px-4 sm:px-6 lg:px-8
          ${maxWidthStyles[maxWidth]}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
