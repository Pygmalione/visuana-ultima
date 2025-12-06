/**
 * Dynamic Import Utilities - SPEC-004 SEO & Analytics (Task Group 9)
 *
 * Provides utilities for lazy loading components and modules
 * to improve initial bundle size and LCP
 */

import dynamic from 'next/dynamic'
import { type ComponentType, type ReactNode } from 'react'

// ============================================
// TYPES
// ============================================

interface DynamicComponentOptions {
  /** Loading placeholder */
  loading?: () => ReactNode
  /** Server-side render this component */
  ssr?: boolean
}

// ============================================
// LAZY LOAD UTILITIES
// ============================================

/**
 * Lazy load a component with customizable options
 *
 * @example
 * const HeavyChart = lazyComponent(() => import('@/components/charts/HeavyChart'))
 */
export function lazyComponent<P extends object>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  options: DynamicComponentOptions = {}
) {
  return dynamic(importFn, {
    loading: options.loading || (() => null),
    ssr: options.ssr ?? true,
  })
}

/**
 * Lazy load a module/function
 *
 * @example
 * const analytics = await lazyLoad(() => import('@/lib/analytics/heavy-analytics'))
 */
export async function lazyLoad<T>(
  importFn: () => Promise<T>
): Promise<T> {
  return importFn()
}

// ============================================
// PRE-CONFIGURED LAZY COMPONENTS
// ============================================

/**
 * Lazy loaded Modal component
 * Modals are rarely needed immediately
 */
export const LazyModal = dynamic(
  () => import('@/components/ui/modal').then(mod => mod.Modal),
  { ssr: false, loading: () => null }
)

/**
 * Lazy loaded Toast component
 * Toasts are triggered by user actions
 */
export const LazyToast = dynamic(
  () => import('@/components/ui/toast').then(mod => mod.Toast),
  { ssr: false, loading: () => null }
)

// ============================================
// ANALYTICS LAZY LOADING
// ============================================

/**
 * Load analytics only when needed
 * Prevents blocking initial render
 */
export async function loadAnalytics() {
  if (typeof window === 'undefined') return null

  const analytics = await lazyLoad(() => import('@/lib/analytics/events'))
  return analytics
}

/**
 * Load scroll tracking only when user starts scrolling
 */
export async function loadScrollTracking() {
  if (typeof window === 'undefined') return null

  const { trackScrollDepth } = await lazyLoad(() => import('@/lib/analytics/events'))
  return trackScrollDepth
}

// ============================================
// INTERSECTION OBSERVER LAZY LOADING
// ============================================

/**
 * Load module when element is visible
 *
 * @example
 * useEffect(() => {
 *   loadOnVisible(containerRef.current, async () => {
 *     const Chart = await import('@/components/Chart')
 *     setChartComponent(Chart)
 *   })
 * }, [])
 */
export function loadOnVisible(
  element: Element | null,
  loadFn: () => Promise<void>,
  options: IntersectionObserverInit = {}
) {
  if (!element || typeof window === 'undefined') return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadFn()
          observer.disconnect()
        }
      })
    },
    {
      rootMargin: '100px', // Load slightly before visible
      threshold: 0.1,
      ...options,
    }
  )

  observer.observe(element)

  return () => observer.disconnect()
}

export default {
  lazyComponent,
  lazyLoad,
  loadAnalytics,
  loadScrollTracking,
  loadOnVisible,
}
