import Link from 'next/link'
import { CTABoxProps } from '@/types/components'
import { Container } from '@/components/layout/container'

// ============================================
// CTA BOX COMPONENT
// Based on SPEC-001 Visual Identity
// Call-to-action section with text and button
// ============================================

const bgColors = {
  'royal-red': 'bg-royal-red-700',
  'charcoal': 'bg-charcoal-900',
  'white': 'bg-white border border-charcoal-200',
  'muted': 'bg-charcoal-50',
}

const textColors = {
  'royal-red': { title: 'text-white', description: 'text-royal-red-100' },
  'charcoal': { title: 'text-white', description: 'text-charcoal-300' },
  'white': { title: 'text-charcoal-800', description: 'text-charcoal-600' },
  'muted': { title: 'text-charcoal-800', description: 'text-charcoal-600' },
}

const buttonStyles = {
  'royal-red': 'bg-white text-royal-red-700 hover:bg-charcoal-100',
  'charcoal': 'bg-royal-red-700 text-white hover:bg-royal-red-800',
  'white': 'bg-royal-red-700 text-white hover:bg-royal-red-800',
  'muted': 'bg-royal-red-700 text-white hover:bg-royal-red-800',
}

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export function CTABox({
  title,
  description,
  buttonLabel,
  buttonHref,
  bgColor = 'royal-red',
  alignment = 'center',
}: CTABoxProps) {
  const colors = textColors[bgColor]
  const buttonClass = buttonStyles[bgColor]

  return (
    <section
      data-testid="cta-box"
      className={`
        py-12 md:py-16 rounded-lg
        ${bgColors[bgColor]}
        ${alignmentClasses[alignment]}
      `.trim().replace(/\s+/g, ' ')}
    >
      <Container>
        <div className={`max-w-2xl ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${colors.title}`}>
            {title}
          </h2>

          {description && (
            <p className={`text-lg mb-6 ${colors.description}`}>
              {description}
            </p>
          )}

          <Link
            href={buttonHref}
            className={`
              inline-flex items-center justify-center
              px-6 py-3 text-base font-semibold rounded-md
              transition-all duration-200
              ${buttonClass}
            `.trim().replace(/\s+/g, ' ')}
          >
            {buttonLabel}
          </Link>
        </div>
      </Container>
    </section>
  )
}

CTABox.displayName = 'CTABox'
