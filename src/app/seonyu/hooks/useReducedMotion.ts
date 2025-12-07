'use client'

import { useEffect, useState } from 'react'

/**
 * Hook do wykrywania preferencji reduced motion i urządzeń mobilnych
 * Używany do optymalizacji animacji i parallax effects
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check media queries
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileQuery = window.matchMedia('(max-width: 768px)')

    setPrefersReducedMotion(motionQuery.matches)
    setIsMobile(mobileQuery.matches)

    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    const handleMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    motionQuery.addEventListener('change', handleMotionChange)
    mobileQuery.addEventListener('change', handleMobileChange)

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange)
      mobileQuery.removeEventListener('change', handleMobileChange)
    }
  }, [])

  return {
    prefersReducedMotion,
    isMobile,
    shouldReduceMotion: prefersReducedMotion || isMobile
  }
}

/**
 * Hook do throttled parallax effect
 * Używa requestAnimationFrame dla płynnej animacji
 */
export function useThrottledParallax(
  containerRef: React.RefObject<HTMLElement | null>,
  intensity: number = 30
) {
  const { shouldReduceMotion } = useReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    if (!container || shouldReduceMotion) return

    let rafId: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return // Already scheduled

      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        const xPercent = (clientX / innerWidth - 0.5) * 2
        const yPercent = (clientY / innerHeight - 0.5) * 2

        container.style.setProperty('--mouse-x', `${xPercent * intensity}px`)
        container.style.setProperty('--mouse-y', `${yPercent * intensity}px`)

        rafId = null
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [containerRef, intensity, shouldReduceMotion])
}
