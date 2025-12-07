'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

// ============================================
// SEONYU NAVBAR - LIGHT THEME
// Minimal | Blue/Navy | 21st.dev Style
// ============================================

const navItems = [
  { label: 'Funkcje', href: '#funkcje' },
  { label: 'Jak działa', href: '#jak-dziala' },
  { label: 'O nas', href: '#social-proof' },
]

export function SeonyuNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu()
        return
      }

      if (e.key === 'Tab') {
        const focusableElements = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        )

        if (!focusableElements || focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    const firstLink = mobileMenuRef.current?.querySelector<HTMLAnchorElement>('a[href]')
    firstLink?.focus()

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen, closeMobileMenu])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'bg-transparent'}
      `}
    >
      <div className="max-w-5xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Seonyu nawigacja">
          {/* Logo */}
          <Link href="/seonyu" className="group">
            <span className="text-xl font-display font-semibold tracking-tight text-slate-900">
              SEONYU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#demo"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-200"
            >
              Zamów Demo
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="seonyu-mobile-menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="seonyu-mobile-menu"
            className="md:hidden rounded-xl mb-4 bg-white border border-slate-200 shadow-xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobilne Seonyu"
          >
            <ul className="py-2" role="menu">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    onClick={closeMobileMenu}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-3 pb-3">
              <Link
                href="#demo"
                onClick={closeMobileMenu}
                className="block w-full text-center px-4 py-3 text-base font-medium rounded-lg bg-slate-900 text-white"
                role="menuitem"
              >
                Zamów Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

SeonyuNavbar.displayName = 'SeonyuNavbar'
