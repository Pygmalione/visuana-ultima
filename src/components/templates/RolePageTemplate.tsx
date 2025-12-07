'use client'

import { ReactElement } from 'react'
import Link from 'next/link'
import { Role } from '@/types/role'
import { Section } from '@/components/layout/section'
import { Container } from '@/components/layout/container'
import { Grid } from '@/components/layout/grid'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'

// ============================================
// ROLE PAGE TEMPLATE - SPEC-011
// Reusable template for all role landing pages
// URL pattern: /dla-[role]
// ============================================

// ============================================
// SHARED NAV & FOOTER CONFIG
// ============================================

const navItems = [
  { label: 'Usługi', href: '/uslugi' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'O nas', href: '/o-nas' },
]

const footerColumns = [
  {
    title: 'Usługi',
    links: [
      { label: 'Content marketing', href: '/uslugi/content-marketing' },
      { label: 'Influencer marketing', href: '/uslugi/influencer-marketing' },
      { label: 'AI analytics', href: '/uslugi/ai-analytics' },
      { label: 'Strategia digital', href: '/uslugi/strategia-digital' },
    ],
  },
  {
    title: 'Zasoby',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Podcast', href: '/podcast' },
      { label: 'Raporty', href: '/raporty' },
    ],
  },
  {
    title: 'Firma',
    links: [
      { label: 'O nas', href: '/o-nas' },
      { label: 'Kariera', href: '/kariera' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    ],
  },
]

const socialLinks = [
  { platform: 'linkedin' as const, href: 'https://linkedin.com/company/visuana' },
  { platform: 'twitter' as const, href: 'https://twitter.com/visuana' },
  { platform: 'instagram' as const, href: 'https://instagram.com/visuana' },
]

interface RolePageTemplateProps {
  role: Role
}

// ============================================
// ICON MAPPING
// ============================================

const iconMap: Record<string, ReactElement> = {
  'eye-off': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  ),
  unlink: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  'message-circle': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'layout-dashboard': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  target: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  'trending-up': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  scale: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  presentation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  layers: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  handshake: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
  ),
  'bar-chart': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  'user-plus': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  ),
  wallet: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  hourglass: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'git-branch': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7v10m0-10a2 2 0 110-4 2 2 0 010 4zm10 10a2 2 0 110 4 2 2 0 010-4zm0 0V9a2 2 0 00-2-2h-3m-4 4l4-4m0 0l4 4m-4-4v8" />
    </svg>
  ),
  'file-text': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  'play-circle': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'refresh-cw': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  zap: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  shuffle: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h5l4 7-4 7H4m16-14h-5l-1.5 2.625M20 18h-5l-1.5-2.625M20 11h-5" />
    </svg>
  ),
  database: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  flask: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  'git-merge': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h-.5a3.5 3.5 0 01-3.5-3.5v-9a3.5 3.5 0 00-3.5-3.5H9M7 8v12m0-12a2 2 0 110-4 2 2 0 010 4zm10 12a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  ),
  'check-circle': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  'share-2': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
  cpu: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  calendar: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  compass: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  tag: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  'check-square': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  rocket: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
}

function getIcon(iconName: string): ReactElement {
  return iconMap[iconName] || iconMap['check-circle']
}

// ============================================
// HERO SECTION
// ============================================

function HeroSection({ role }: { role: Role }) {
  return (
    <section
      data-testid="role-hero"
      className="py-16 md:py-24 bg-gradient-to-b from-charcoal-900 to-charcoal-800"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Role Badge */}
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-royal-red-400 bg-royal-red-900/30 rounded-full">
            Dla {role.name}
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {role.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-charcoal-300 mb-10 max-w-2xl mx-auto">
            {role.subheadline}
          </p>

          {/* CTA */}
          <Link href="/kontakt">
            <Button size="lg" className="text-lg">
              {role.ctaText}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

// ============================================
// CHALLENGES SECTION
// ============================================

function ChallengesSection({ role }: { role: Role }) {
  return (
    <Section bgColor="white" padding="xl" data-testid="role-challenges">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-4">
          Znamy Twoje wyzwania
        </h2>
        <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
          Te problemy sa typowe dla {role.name}. Rozumiemy je i mamy na nie rozwiazania.
        </p>
      </div>

      <Grid cols={{ sm: 1, md: 2 }} gap="lg">
        {role.challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="flex gap-4 p-6 bg-charcoal-50 rounded-xl border border-charcoal-100"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-royal-red-50 text-royal-red-700">
              {getIcon(challenge.icon)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-charcoal-800 mb-2">
                {challenge.title}
              </h3>
              <p className="text-charcoal-600">
                {challenge.description}
              </p>
            </div>
          </div>
        ))}
      </Grid>
    </Section>
  )
}

// ============================================
// SOLUTIONS SECTION
// ============================================

function SolutionsSection({ role }: { role: Role }) {
  return (
    <Section bgColor="muted" padding="xl" data-testid="role-solutions">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-4">
          Jak Ci pomagamy
        </h2>
        <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
          Rozwiazania dopasowane do Twojej roli i wyzwan.
        </p>
      </div>

      <Grid cols={{ sm: 1, md: 3 }} gap="lg">
        {role.solutions.map((solution) => (
          <div
            key={solution.id}
            className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-royal-red-50 text-royal-red-700 mb-4">
              {getIcon(solution.icon)}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-charcoal-800 mb-2">
              {solution.title}
            </h3>

            {/* Description */}
            <p className="text-charcoal-600 mb-4">
              {solution.description}
            </p>

            {/* Benefits */}
            <ul className="space-y-2">
              {solution.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-charcoal-700">
                  <svg className="w-4 h-4 text-royal-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Grid>
    </Section>
  )
}

// ============================================
// INDUSTRIES NAVIGATION SECTION
// ============================================

function IndustriesNavigationSection({ role }: { role: Role }) {
  return (
    <Section bgColor="white" padding="xl" data-testid="role-industries">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-4">
          Wybierz swoja branze
        </h2>
        <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
          Zobacz jak pomagamy {role.name} w roznych branzach.
        </p>
      </div>

      <Grid cols={{ sm: 1, md: 2, lg: 4 }} gap="md">
        {role.industries.map((industry) => (
          <Link
            key={industry.id}
            href={`/dla/${industry.slug}`}
            className="group p-5 bg-charcoal-50 rounded-xl border border-charcoal-100 hover:border-royal-red-600 hover:shadow-md transition-all duration-200"
          >
            <h3 className="font-bold text-charcoal-800 group-hover:text-royal-red-700 mb-2">
              {industry.name}
            </h3>
            <p className="text-sm text-charcoal-600">
              {industry.description}
            </p>
            <div className="mt-3 flex items-center text-sm text-royal-red-600 font-medium">
              <span>Zobacz wiecej</span>
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </Grid>
    </Section>
  )
}

// ============================================
// TESTIMONIAL SECTION
// ============================================

function TestimonialSection({ role }: { role: Role }) {
  return (
    <Section bgColor="muted" padding="xl" data-testid="role-testimonial">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card text-center">
          {/* Quote Icon */}
          <svg className="w-12 h-12 mx-auto mb-6 text-royal-red-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl text-charcoal-800 font-medium mb-8 leading-relaxed">
            {role.testimonial.quote}
          </blockquote>

          {/* Attribution */}
          <div>
            <p className="font-bold text-charcoal-800">
              {role.testimonial.author}
            </p>
            <p className="text-charcoal-600">
              {role.testimonial.title}, {role.testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

// ============================================
// CTA SECTION
// ============================================

function CTASection({ role }: { role: Role }) {
  return (
    <Section bgColor="royal-red" padding="lg" data-testid="role-cta">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Gotowy na nowy poziom marketingu?
        </h2>
        <p className="text-lg text-royal-red-100 mb-8">
          {role.ctaDescription}
        </p>
        <Link href="/kontakt">
          <Button
            variant="secondary"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-royal-red-700"
          >
            {role.ctaText}
          </Button>
        </Link>
      </div>
    </Section>
  )
}

// ============================================
// MAIN TEMPLATE COMPONENT
// ============================================

export function RolePageTemplate({ role }: RolePageTemplateProps) {
  return (
    <>
      <Navbar navItems={navItems} ctaLabel="Umów konsultację" ctaHref="/kontakt" />
      <main id="main-content">
        <HeroSection role={role} />
        <ChallengesSection role={role} />
        <SolutionsSection role={role} />
        <IndustriesNavigationSection role={role} />
        <TestimonialSection role={role} />
        <CTASection role={role} />
      </main>
      <Footer
        columns={footerColumns}
        socialLinks={socialLinks}
      />
    </>
  )
}

export default RolePageTemplate
