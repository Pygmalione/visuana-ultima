'use client'

import { forwardRef } from 'react'
import { SectionProps } from '@/types/components'
import { Container } from './container'

// ============================================
// SECTION COMPONENT - Page Section Wrapper
// ============================================

const bgColorStyles = {
  white: 'bg-white',
  muted: 'bg-charcoal-50',
  dark: 'bg-charcoal-900 text-white',
  'royal-red': 'bg-royal-red-700 text-white',
}

const paddingStyles = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      bgColor = 'white',
      padding = 'lg',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={`
          ${bgColorStyles[bgColor]}
          ${paddingStyles[padding]}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        {...props}
      >
        <Container>
          {children}
        </Container>
      </section>
    )
  }
)

Section.displayName = 'Section'
