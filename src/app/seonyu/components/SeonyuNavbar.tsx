'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { Container } from '@/components/layout/container'

// ============================================
// SEONYU NAVBAR - SPEC-008
// Purple-themed navigation for Seonyu landing
// ============================================

const navItems = [
  { label: 'Funkcje', href: '#funkcje' },
  { label: 'Jak dziala', href: '#jak-dziala' },
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle Escape key and focus trap
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
        sticky top-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-seonyu-100'
          : 'bg-transparent'
        }
      `}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Seonyu nawigacja">
          {/* Logo */}
          <Link href="/seonyu" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-seonyu-dark group-hover:text-seonyu-primary transition-colors">
              SEONYU
              <span className="block h-0.5 w-full bg-gradient-to-r from-seonyu-primary to-seonyu-accent mt-0.5" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base font-medium text-seonyu-dark/80 hover:text-seonyu-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-seonyu-primary text-white hover:bg-seonyu-800 shadow-seonyu-button hover:shadow-seonyu-button-hover transition-all duration-200 hover:-translate-y-0.5"
              >
                Zamow Demo
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-seonyu-dark hover:text-seonyu-primary transition-colors"
            aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otworz menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="seonyu-mobile-menu"
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="seonyu-mobile-menu"
            className="md:hidden bg-white border-t border-seonyu-100 animate-slide-down"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobilne Seonyu"
          >
            <ul className="py-4 space-y-1" role="menu">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-seonyu-dark hover:bg-seonyu-50 hover:text-seonyu-primary transition-colors"
                    onClick={closeMobileMenu}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4 space-y-2">
              <Link
                href="#demo"
                onClick={closeMobileMenu}
                className="block w-full text-center px-6 py-3 text-base font-semibold rounded-lg bg-seonyu-primary text-white hover:bg-seonyu-800 transition-all duration-200"
                role="menuitem"
              >
                Zamow Demo
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

SeonyuNavbar.displayName = 'SeonyuNavbar'
