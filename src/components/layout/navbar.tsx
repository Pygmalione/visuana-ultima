'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { NavbarProps } from '@/types/components'
import { Container } from './container'
import { MegaMenu, defaultIndustries, defaultRoles } from './MegaMenu'

// ============================================
// NAVBAR COMPONENT - Sticky Header
// Based on SPEC-001 Visual Identity
// Implements WCAG 2.1 AA keyboard navigation
// ============================================

export function Navbar({
  logo,
  navItems,
  ctaLabel = 'Kontakt',
  ctaHref = '/kontakt',
  onCtaClick,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)
  const lastFocusableRef = useRef<HTMLAnchorElement>(null)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    // Return focus to menu button when closing
    menuButtonRef.current?.focus()
  }, [])

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close on Escape
      if (e.key === 'Escape') {
        closeMobileMenu()
        return
      }

      // Focus trap - keep Tab within mobile menu
      if (e.key === 'Tab') {
        const focusableElements = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )

        if (!focusableElements || focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        // Shift+Tab from first element → go to last
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
        // Tab from last element → go to first
        else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    // Focus first item when menu opens
    const firstLink = mobileMenuRef.current?.querySelector<HTMLAnchorElement>('a[href]')
    firstLink?.focus()

    document.addEventListener('keydown', handleKeyDown)

    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen, closeMobileMenu])

  // Close menu on click outside
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !menuButtonRef.current?.contains(e.target as Node)
      ) {
        closeMobileMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen, closeMobileMenu])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-charcoal-200">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Główna nawigacja">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {logo || (
              <span className="text-xl font-bold text-charcoal-800">
                VISUANA
                <span className="block h-0.5 w-full bg-royal-red-700 mt-0.5" />
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {/* MegaMenu Trigger */}
              <li>
                <button
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className={`
                    text-base font-medium
                    transition-colors duration-150
                    hover:text-royal-red-700
                    flex items-center gap-1
                    ${isMegaMenuOpen ? 'text-royal-red-700' : 'text-charcoal-700'}
                  `}
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                >
                  Dla kogo
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      text-base font-medium
                      transition-colors duration-150
                      hover:text-royal-red-700
                      ${item.active ? 'text-royal-red-700 font-semibold' : 'text-charcoal-700'}
                    `}
                    aria-current={item.active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={ctaHref}
              onClick={onCtaClick}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md bg-royal-red-700 text-white hover:bg-royal-red-800 transition-all duration-200"
            >
              {ctaLabel}
            </Link>
          </div>

          {/* MegaMenu */}
          <MegaMenu
            isOpen={isMegaMenuOpen}
            onClose={() => setIsMegaMenuOpen(false)}
            industries={defaultIndustries}
            roles={defaultRoles}
          />

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-charcoal-700 hover:text-charcoal-900"
            aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation with Focus Trap */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden border-t border-charcoal-200 animate-slide-down"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobilne"
          >
            <ul className="py-4 space-y-2" role="menu">
              {navItems.map((item, index) => (
                <li key={item.href} role="none">
                  <Link
                    ref={index === 0 ? firstFocusableRef : undefined}
                    href={item.href}
                    className={`
                      block px-4 py-2 text-base
                      transition-colors duration-150
                      hover:bg-charcoal-50 hover:text-royal-red-700
                      focus:bg-charcoal-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700
                      ${item.active ? 'text-royal-red-700 font-semibold' : 'text-charcoal-700'}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                    aria-current={item.active ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <Link
                ref={lastFocusableRef}
                href={ctaHref}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onCtaClick?.()
                }}
                className="block w-full text-center px-6 py-3 text-base font-semibold rounded-md bg-royal-red-700 text-white hover:bg-royal-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition-all duration-200"
                role="menuitem"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

Navbar.displayName = 'Navbar'
