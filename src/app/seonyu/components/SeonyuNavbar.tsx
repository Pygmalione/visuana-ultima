'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

// ============================================
// SEONYU NAVBAR - BOLD REDESIGN
// Glassmorphism Navigation on Dark Theme
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
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
      `}
      style={{
        background: isScrolled
          ? 'linear-gradient(135deg, rgba(10, 1, 24, 0.95) 0%, rgba(26, 10, 46, 0.95) 100%)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(124, 58, 237, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Seonyu nawigacja">
          {/* Logo */}
          <Link href="/seonyu" className="group relative">
            <span className="text-2xl font-display font-bold tracking-tight">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
                }}
              >
                SEONYU
              </span>
            </span>
            <span
              className="absolute -bottom-1 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              style={{
                background: 'linear-gradient(90deg, #7c3aed 0%, #f59e0b 100%)',
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-purple-200/80 hover:text-white transition-colors duration-300 group"
                  >
                    {item.label}
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #a78bfa, transparent)',
                      }}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#demo"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              {/* Button glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />

              <span className="relative flex items-center gap-2 text-black font-bold">
                Zamów Demo
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="seonyu-mobile-menu"
          >
            <svg
              className="w-5 h-5 text-white"
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
            className="md:hidden rounded-2xl mb-4 animate-slide-down overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 1, 24, 0.98) 0%, rgba(26, 10, 46, 0.98) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              backdropFilter: 'blur(20px)',
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobilne Seonyu"
          >
            <ul className="py-4" role="menu">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-base font-medium text-purple-200/80 hover:text-white hover:bg-white/5 transition-colors"
                    onClick={closeMobileMenu}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <Link
                href="#demo"
                onClick={closeMobileMenu}
                className="block w-full text-center px-6 py-3 text-base font-bold rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black transition-all duration-200"
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
