'use client'

import { forwardRef } from 'react'
import { CardProps } from '@/types/components'

// ============================================
// CARD COMPONENT - Based on SPEC-001 Visual Identity
// ============================================

const variantStyles = {
  default: `
    bg-white border border-charcoal-200
    shadow-card
  `,
  featured: `
    bg-gradient-to-br from-royal-red-700 to-royal-red-800
    text-white border-none
    shadow-lg
  `,
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      hoverable = false,
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
          rounded-lg p-6 md:p-8
          transition-all duration-250 ease-out
          ${variantStyles[variant]}
          ${hoverable ? 'hover:shadow-card-hover hover:-translate-y-0.5 hover:border-royal-red-700/30 cursor-pointer' : ''}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// ============================================
// CARD SUB-COMPONENTS
// ============================================

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`mb-4 ${className}`}
    {...props}
  >
    {children}
  </div>
))

CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = '', children, ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-xl font-semibold text-charcoal-800 ${className}`}
    {...props}
  >
    {children}
  </h3>
))

CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = '', children, ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-charcoal-500 mt-1 ${className}`}
    {...props}
  >
    {children}
  </p>
))

CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`${className}`}
    {...props}
  >
    {children}
  </div>
))

CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => (
  <div
    ref={ref}
    className={`mt-6 pt-4 border-t border-charcoal-200 ${className}`}
    {...props}
  >
    {children}
  </div>
))

CardFooter.displayName = 'CardFooter'
