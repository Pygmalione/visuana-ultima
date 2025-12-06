import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ServiceHero } from '@/components/sections/service-hero'
import { ProblemSection } from '@/components/sections/problem-section'
import { SolutionSection } from '@/components/sections/solution-section'
import { ProcessTimeline } from '@/components/sections/process-timeline'
import { FAQAccordion } from '@/components/sections/faq-accordion'
import { CaseStudyCard } from '@/components/cards/case-study-card'

// ============================================
// SERVICE PAGE COMPONENTS TESTS
// TDD: Red -> Green -> Refactor
// SPEC-006: Service Pages
// ============================================

describe('ServiceHero', () => {
  const defaultProps = {
    title: 'Content Marketing, ktory przynosi wyniki',
    subtitle: 'Strategia tresci oparta na danych.',
    ctaPrimaryLabel: 'Bezplatna konsultacja',
    ctaPrimaryHref: '/kontakt',
    ctaSecondaryLabel: 'Zobacz case study',
    ctaSecondaryHref: '#case-study',
  }

  it('renders title and subtitle', () => {
    render(<ServiceHero {...defaultProps} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(defaultProps.title)
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument()
  })

  it('renders primary and secondary CTAs', () => {
    render(<ServiceHero {...defaultProps} />)
    expect(screen.getByRole('link', { name: /bezplatna konsultacja/i })).toHaveAttribute('href', '/kontakt')
    expect(screen.getByRole('link', { name: /zobacz case study/i })).toHaveAttribute('href', '#case-study')
  })
})

describe('ProblemSection', () => {
  const defaultProps = {
    heading: 'Czy to brzmi znajomo?',
    painPoints: [
      'Twoj blog nie generuje leadow?',
      'Konkurencja wyprzedza Cie w Google?',
      'Nie wiesz, jakie tresci tworzyc?',
    ],
    hookText: 'Jest na to rozwiazanie...',
  }

  it('renders heading and pain points', () => {
    render(<ProblemSection {...defaultProps} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(defaultProps.heading)
    defaultProps.painPoints.forEach(point => {
      expect(screen.getByText(point)).toBeInTheDocument()
    })
  })

  it('renders hook text', () => {
    render(<ProblemSection {...defaultProps} />)
    expect(screen.getByText(defaultProps.hookText)).toBeInTheDocument()
  })
})

describe('SolutionSection', () => {
  const defaultProps = {
    heading: 'Jak dzialamy',
    features: [
      { icon: 'search' as const, title: 'AI-powered keyword research', description: 'Badamy slowa kluczowe' },
      { icon: 'edit' as const, title: 'SEO-optimized content', description: 'Tworzymy tresci SEO' },
      { icon: 'chart' as const, title: 'Performance analytics', description: 'Mierzymy wyniki' },
      { icon: 'share' as const, title: 'Content distribution', description: 'Dystrybuujemy tresci' },
    ],
  }

  it('renders heading and feature cards with icons', () => {
    render(<SolutionSection {...defaultProps} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(defaultProps.heading)
    defaultProps.features.forEach(feature => {
      expect(screen.getByText(feature.title)).toBeInTheDocument()
      expect(screen.getByText(feature.description)).toBeInTheDocument()
    })
  })
})

describe('ProcessTimeline', () => {
  const defaultProps = {
    heading: 'Jak wyglada wspolpraca',
    steps: [
      { number: 1, title: 'Konsultacja', description: 'Poznajemy Twoj biznes' },
      { number: 2, title: 'Strategia', description: 'Tworzymy plan dzialania' },
      { number: 3, title: 'Realizacja', description: 'Wdrazamy strategia' },
      { number: 4, title: 'Optymalizacja', description: 'Mierzymy i ulepszamy' },
    ],
  }

  it('renders heading and 4 process steps', () => {
    render(<ProcessTimeline {...defaultProps} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(defaultProps.heading)
    // Use getAllByText since there are duplicate elements for mobile/desktop layouts
    defaultProps.steps.forEach(step => {
      expect(screen.getAllByText(step.title).length).toBeGreaterThan(0)
      expect(screen.getAllByText(step.description).length).toBeGreaterThan(0)
      expect(screen.getAllByText(step.number.toString()).length).toBeGreaterThan(0)
    })
  })
})

describe('FAQAccordion', () => {
  const defaultProps = {
    heading: 'Czesto zadawane pytania',
    items: [
      { question: 'Ile kosztuje content marketing?', answer: 'Ceny zaczynaja sie od 3000 PLN.' },
      { question: 'Jak dlugo trwa realizacja?', answer: 'Pierwsze wyniki po 3 miesiacach.' },
    ],
  }

  it('renders heading and FAQ items', () => {
    render(<FAQAccordion {...defaultProps} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(defaultProps.heading)
    defaultProps.items.forEach(item => {
      expect(screen.getByText(item.question)).toBeInTheDocument()
    })
  })

  it('expands and collapses items on click', async () => {
    const user = userEvent.setup()
    render(<FAQAccordion {...defaultProps} />)

    const firstQuestion = screen.getByText(defaultProps.items[0].question)

    // Initially answer should not be visible (aria-expanded="false")
    const button = firstQuestion.closest('button')
    expect(button).toHaveAttribute('aria-expanded', 'false')

    // Click to expand
    await user.click(firstQuestion)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(defaultProps.items[0].answer)).toBeVisible()

    // Click to collapse
    await user.click(firstQuestion)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('supports keyboard navigation (Enter/Space)', async () => {
    const user = userEvent.setup()
    render(<FAQAccordion {...defaultProps} />)

    const firstButton = screen.getByText(defaultProps.items[0].question).closest('button')!
    firstButton.focus()

    // Press Enter to expand
    await user.keyboard('{Enter}')
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')

    // Press Space to collapse
    await user.keyboard(' ')
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })
})

describe('CaseStudyCard', () => {
  const defaultProps = {
    clientName: "L'Oreal Poland",
    industry: 'Beauty & Cosmetics',
    metric: '+180%',
    metricLabel: 'organic traffic',
    description: 'Wzrost ruchu organicznego dzieki strategii content marketingowej.',
    link: '/case-study/loreal',
  }

  it('renders client info and metrics', () => {
    render(<CaseStudyCard {...defaultProps} />)
    expect(screen.getByText(defaultProps.clientName)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.industry)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.metric)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.metricLabel)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument()
  })

  it('renders link to full case study', () => {
    render(<CaseStudyCard {...defaultProps} />)
    const link = screen.getByRole('link', { name: /zobacz case study/i })
    expect(link).toHaveAttribute('href', '/case-study/loreal')
  })
})
