import Link from 'next/link'
import { CTABoxProps } from '@/types/components'
import { Container } from '@/components/layout/container'

// ============================================
// CTA BOX COMPONENT
// Based on SPEC-001 Visual Identity
// Call-to-action section with text and button
// ============================================

const bgColors = {
  'royal-red': 'bg-slate-900',
  'charcoal': 'bg-slate-800',
  'white': 'bg-white border border-slate-200',
  'muted': 'bg-slate-50',
}

const textColors = {
  'royal-red': { title: 'text-white', description: 'text-slate-300' },
  'charcoal': { title: 'text-white', description: 'text-slate-300' },
  'white': { title: 'text-slate-900', description: 'text-slate-600' },
  'muted': { title: 'text-slate-900', description: 'text-slate-600' },
}

const buttonStyles = {
  'royal-red': 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
  'charcoal': 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
  'white': 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
  'muted': 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
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
        py-12 md:py-16 rounded-xl
        ${bgColors[bgColor]}
        ${alignmentClasses[alignment]}
      `.trim().replace(/\s+/g, ' ')}
    >
      <Container>
        <div className={`max-w-2xl ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}>
          <h2 className={`font-display text-2xl md:text-3xl font-light tracking-tight mb-4 ${colors.title}`}>
            {title}
          </h2>

          {description && (
            <p className={`text-lg font-light leading-relaxed mb-6 ${colors.description}`}>
              {description}
            </p>
          )}

          <Link
            href={buttonHref}
            className={`
              inline-flex items-center justify-center
              px-8 py-4 text-base font-medium rounded-xl
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
