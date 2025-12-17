'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

/**
 * Hook to detect user's reduced motion preference
 * Returns true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

/**
 * Hook to detect when element enters viewport
 * Uses IntersectionObserver for performance
 */
export function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Once in view, stop observing (animate once)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return [ref, isInView] as const
}

/**
 * Magnetic hover effect for buttons
 * Returns event handlers to attach to element
 */
export function useMagneticHover(strength: number = 4) {
  const reducedMotion = useReducedMotion()

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (reducedMotion) return

      const element = e.currentTarget
      const rect = element.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength

      element.style.transform = `translate(${x}px, ${y}px)`
    },
    [reducedMotion, strength]
  )

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = ''
    },
    []
  )

  return { handleMouseMove, handleMouseLeave }
}

/**
 * Tilt effect for cards
 * Creates 3D perspective rotation on hover
 */
export function useTiltEffect(maxTilt: number = 10) {
  const reducedMotion = useReducedMotion()

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (reducedMotion) return

      const element = e.currentTarget
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -maxTilt
      const rotateY = ((x - centerX) / centerX) * maxTilt

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    },
    [reducedMotion, maxTilt]
  )

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = ''
    },
    []
  )

  return { handleMouseMove, handleMouseLeave }
}

/**
 * Ripple effect creator for click interactions
 */
export function createRipple(
  event: React.MouseEvent<HTMLElement>,
  color: string = 'rgba(255, 255, 255, 0.3)'
) {
  const element = event.currentTarget
  const rect = element.getBoundingClientRect()

  const ripple = document.createElement('span')
  const diameter = Math.max(rect.width, rect.height)
  const radius = diameter / 2

  ripple.style.width = ripple.style.height = `${diameter}px`
  ripple.style.left = `${event.clientX - rect.left - radius}px`
  ripple.style.top = `${event.clientY - rect.top - radius}px`
  ripple.style.background = color
  ripple.style.position = 'absolute'
  ripple.style.borderRadius = '50%'
  ripple.style.transform = 'scale(0)'
  ripple.style.animation = 'ripple-effect 600ms linear'
  ripple.style.pointerEvents = 'none'

  // Add keyframes if not already present
  if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style')
    style.id = 'ripple-styles'
    style.textContent = `
      @keyframes ripple-effect {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
  }

  element.style.position = 'relative'
  element.style.overflow = 'hidden'
  element.appendChild(ripple)

  setTimeout(() => ripple.remove(), 600)
}

/**
 * Animation delay calculator for staggered animations
 */
export function getStaggerDelay(index: number, baseDelay: number = 100): string {
  return `${index * baseDelay}ms`
}

/**
 * CSS class generator for animated elements
 */
export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  shimmer: 'animate-shimmer',
  float: 'animate-float',
  glow: 'animate-glow',
  blob: 'animate-blob',
  gradientX: 'animate-gradient-x',
  pulseSlow: 'animate-pulse-slow',
} as const
