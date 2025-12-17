'use client'

import Link from 'next/link'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'
import { Container } from '@/components/layout/container'

// ============================================
// USLUGI PAGE ANIMATED COMPONENTS
// Client-side wrappers with scroll-triggered animations
// ============================================

// ============================================
// ANIMATED HERO SECTION
// ============================================

interface AnimatedHeroProps {
  title: string
  subtitle: string
}

export function AnimatedHero({ title, subtitle }: AnimatedHeroProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.3 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-charcoal-900 to-charcoal-800"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
            style={{
              animationDelay: shouldAnimate ? '0ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            {title}
          </h1>
          <p
            className={`text-lg md:text-xl text-charcoal-300 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
            style={{
              animationDelay: shouldAnimate ? '150ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  )
}

// ============================================
// ANIMATED SERVICE CARD
// ============================================

interface ServiceCardProps {
  id: string
  title: string
  description: string
  metric: string
  metricLabel: string
  href: string
  icon: React.ReactNode
  index: number
}

export function AnimatedServiceCard({
  title,
  description,
  metric,
  metricLabel,
  href,
  icon,
  index,
}: ServiceCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div
      ref={ref}
      className={shouldAnimate ? 'animate-scale-in' : ''}
      style={{
        animationDelay: shouldAnimate ? getStaggerDelay(index, 100) : undefined,
        opacity: shouldAnimate ? 0 : 1,
        animationFillMode: 'forwards',
      }}
    >
      <Link
        href={href}
        aria-label={title}
        className="group block"
      >
        <article
          data-testid="service-list-card"
          className="h-full p-6 md:p-8 bg-white rounded-xl border border-charcoal-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
        >
        {/* Icon */}
        <div
          aria-hidden="true"
          className="w-14 h-14 mb-6 flex items-center justify-center rounded-lg bg-royal-red-50 text-royal-red-700 transition-colors duration-200 group-hover:bg-royal-red-100"
        >
          {icon}
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-charcoal-800 mb-3 group-hover:text-royal-red-700 transition-colors duration-200">
          {title}
        </h2>

        {/* Description */}
        <p className="text-charcoal-600 mb-6">
          {description}
        </p>

        {/* Metric */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl md:text-4xl font-bold text-royal-red-700">
            {metric}
          </span>
          <span className="text-charcoal-500 text-sm">
            {metricLabel}
          </span>
        </div>

        {/* Link indicator */}
        <div className="flex items-center gap-2 text-royal-red-700 font-semibold">
          <span>Dowiedz sie wiecej</span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
        </article>
      </Link>
    </div>
  )
}

// ============================================
// ANIMATED SERVICES GRID
// ============================================

interface Service {
  id: string
  title: string
  description: string
  metric: string
  metricLabel: string
  href: string
  icon: React.ReactNode
}

interface AnimatedServicesGridProps {
  services: Service[]
}

export function AnimatedServicesGrid({ services }: AnimatedServicesGridProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedServiceCard
              key={service.id}
              {...service}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

// ============================================
// ANIMATED CTA SECTION
// ============================================

export function AnimatedUslugiCTA() {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <section
      ref={ref}
      data-testid="service-list-cta"
      className="py-16 md:py-24 bg-royal-red-700"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-white mb-4 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
            style={{
              animationDelay: shouldAnimate ? '0ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            Nie wiesz, ktora usluge wybrac?
          </h2>
          <p
            className={`text-lg md:text-xl text-royal-red-100 mb-8 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
            style={{
              animationDelay: shouldAnimate ? '100ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            Umow sie na bezplatna konsultacje. Pomozemy dobrac rozwiazania do Twoich potrzeb i budzetow.
          </p>
          <Link
            href="/kontakt"
            className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-royal-red-700 rounded-md shadow-button hover:shadow-button-hover hover:bg-charcoal-100 transition-all duration-200 hover:-translate-y-0.5 ${shouldAnimate ? 'animate-scale-in' : ''}`}
            style={{
              animationDelay: shouldAnimate ? '200ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            Bezplatna konsultacja
          </Link>
        </div>
      </Container>
    </section>
  )
}
