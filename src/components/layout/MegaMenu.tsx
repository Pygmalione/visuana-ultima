'use client'

import { useEffect, useRef, useCallback, ReactElement } from 'react'
import Link from 'next/link'
import { MegaMenuProps, MegaMenuIndustry, MegaMenuRole } from '@/types/components'

// ============================================
// MEGAMENU COMPONENT - SPEC-011
// Industry & Role Navigation
// ============================================

// SVG Icons (inline to avoid lucide dependency)
const icons = {
  rocket: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  cart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
  briefcase: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  heart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  landmark: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  ),
  crown: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  target: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  trending: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  close: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
}

const industryIcons: Record<string, ReactElement> = {
  saas: icons.rocket,
  ecommerce: icons.cart,
  uslugi: icons.briefcase,
  medtech: icons.heart,
  fintech: icons.landmark,
  produkcja: icons.briefcase,
  edtech: icons.lightbulb,
  nieruchomosci: icons.landmark,
}

const roleIcons: Record<string, ReactElement> = {
  ceo: icons.crown,
  cmo: icons.target,
  director: icons.users,
  growth: icons.trending,
  'content-manager': icons.target,
  founder: icons.lightbulb,
}

// Default data - synchronized with industries.ts and roles.ts
export const defaultIndustries: MegaMenuIndustry[] = [
  { id: 'saas', name: 'SaaS / Tech', slug: '/dla/saas', description: 'AI marketing dla firm technologicznych' },
  { id: 'ecommerce', name: 'E-commerce', slug: '/dla/ecommerce', description: 'ROAS, kampanie produktowe' },
  { id: 'uslugi', name: 'Professional Services', slug: '/dla/uslugi-profesjonalne', description: 'Kancelarie, firmy doradcze' },
  { id: 'medtech', name: 'Healthcare / MedTech', slug: '/dla/medtech', description: 'Compliance-first marketing' },
  { id: 'fintech', name: 'Fintech', slug: '/dla/fintech', description: 'Marketing z wbudowana compliance' },
  { id: 'produkcja', name: 'Produkcja / B2B', slug: '/dla/produkcja', description: 'Technical content, long-cycle' },
  { id: 'edtech', name: 'EdTech', slug: '/dla/edtech', description: 'Trial conversion, enrollment' },
  { id: 'nieruchomosci', name: 'Nieruchomosci', slug: '/dla/nieruchomosci', description: 'Local SEO, virtual tours' },
]

export const defaultRoles: MegaMenuRole[] = [
  { id: 'ceo', name: 'CEO / Founder', slug: '/dla-ceo', description: 'Dashboard ROI, decyzje strategiczne' },
  { id: 'cmo', name: 'CMO / VP Marketing', slug: '/dla-cmo', description: 'Partner, nie kolejna agencja' },
  { id: 'director', name: 'Marketing Director', slug: '/dla-marketing-director', description: 'Wykonanie z ograniczonym budzetem' },
  { id: 'growth', name: 'Head of Growth', slug: '/dla-growth', description: 'Eksperymenty, atrybucja' },
  { id: 'content-manager', name: 'Content Manager', slug: '/dla-content-manager', description: 'Strategia i produkcja contentu' },
  { id: 'founder', name: 'Startup Founder', slug: '/dla-founder', description: 'Marketing na autopilot' },
]

export function MegaMenu({
  isOpen,
  onClose,
  industries = defaultIndustries,
  roles = defaultRoles,
}: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
        return
      }

      // Focus trap
      if (e.key === 'Tab') {
        const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    // Focus first link on open
    firstLinkRef.current?.focus()

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleClose])

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, handleClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40 animate-fade-in"
        aria-hidden="true"
      />

      {/* MegaMenu Panel */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacyjne - Dla kogo"
        className="absolute top-full left-0 right-0 z-50 bg-white border-b border-charcoal-200 shadow-xl animate-slide-down"
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-charcoal-500 hover:text-charcoal-700 rounded-md hover:bg-charcoal-100 transition-colors"
            aria-label="Zamknij menu"
          >
            {icons.close}
          </button>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Industries Column */}
            <div>
              <h3 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-lg">📊</span> Branze
              </h3>
              <ul className="space-y-1" role="menu">
                {industries.map((industry, index) => (
                  <li key={industry.id} role="none">
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={industry.slug}
                      onClick={handleClose}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-charcoal-50 transition-colors group"
                      role="menuitem"
                    >
                      <span className="text-charcoal-400 group-hover:text-royal-red-600 transition-colors mt-0.5">
                        {industryIcons[industry.id] || icons.briefcase}
                      </span>
                      <div>
                        <span className="block font-medium text-charcoal-800 group-hover:text-royal-red-700 transition-colors">
                          {industry.name}
                        </span>
                        <span className="block text-sm text-charcoal-500">
                          {industry.description}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roles Column */}
            <div>
              <h3 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-lg">👤</span> Pozycje
              </h3>
              <ul className="space-y-1" role="menu">
                {roles.map((role) => (
                  <li key={role.id} role="none">
                    <Link
                      href={role.slug}
                      onClick={handleClose}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-charcoal-50 transition-colors group"
                      role="menuitem"
                    >
                      <span className="text-charcoal-400 group-hover:text-royal-red-600 transition-colors mt-0.5">
                        {roleIcons[role.id] || icons.users}
                      </span>
                      <div>
                        <span className="block font-medium text-charcoal-800 group-hover:text-royal-red-700 transition-colors">
                          {role.name}
                        </span>
                        <span className="block text-sm text-charcoal-500">
                          {role.description}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Column */}
            <div className="bg-charcoal-50 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-lg">🎯</span> Quick Links
              </h3>
              <div className="space-y-4">
                <p className="text-charcoal-600 text-sm">
                  Nie wiesz, od czego zaczac? Umow sie na bezplatna konsultacje.
                </p>
                <Link
                  href="/kontakt"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold rounded-md bg-royal-red-700 text-white hover:bg-royal-red-800 transition-all duration-200 shadow-sm hover:shadow-md"
                  role="menuitem"
                >
                  Bezplatna konsultacja 15 min
                </Link>
                <Link
                  href="/case-studies"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium rounded-md border border-charcoal-300 text-charcoal-700 hover:bg-white hover:border-charcoal-400 transition-all duration-200"
                  role="menuitem"
                >
                  Zobacz case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

MegaMenu.displayName = 'MegaMenu'
