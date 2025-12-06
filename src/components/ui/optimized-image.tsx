/**
 * OptimizedImage Component - SPEC-004 SEO & Analytics (Task Group 7)
 * Wrapper around Next.js Image with optimized defaults
 */

import Image from 'next/image'
import { type ComponentProps } from 'react'

// ============================================
// TYPES
// ============================================

interface OptimizedImageProps extends Omit<ComponentProps<typeof Image>, 'placeholder'> {
  /** Enable blur placeholder for better UX */
  enableBlur?: boolean
  /** Custom blur data URL (base64) */
  blurDataURL?: string
  /** Whether this is above the fold (priority loading) */
  aboveFold?: boolean
}

// ============================================
// DEFAULT BLUR PLACEHOLDER
// Minimal base64 placeholder for blur effect
// ============================================

const DEFAULT_BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=='

// ============================================
// COMPONENT
// ============================================

/**
 * OptimizedImage - Next.js Image with optimized defaults
 *
 * Features:
 * - Automatic WebP/AVIF serving
 * - Lazy loading by default (eager for aboveFold)
 * - Optional blur placeholder
 * - Responsive sizing
 *
 * @example
 * // Below-fold image (lazy loaded)
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   alt="Hero image"
 *   width={800}
 *   height={600}
 *   enableBlur
 * />
 *
 * // Above-fold image (priority loaded)
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   alt="Hero image"
 *   width={800}
 *   height={600}
 *   aboveFold
 * />
 */
export function OptimizedImage({
  enableBlur = false,
  blurDataURL = DEFAULT_BLUR_DATA_URL,
  aboveFold = false,
  quality = 85,
  loading,
  priority,
  ...props
}: OptimizedImageProps) {
  // Determine loading strategy
  const shouldPriority = aboveFold || priority
  const loadingStrategy = shouldPriority ? undefined : (loading || 'lazy')

  return (
    <Image
      {...props}
      quality={quality}
      loading={shouldPriority ? undefined : loadingStrategy}
      priority={shouldPriority}
      placeholder={enableBlur ? 'blur' : 'empty'}
      blurDataURL={enableBlur ? blurDataURL : undefined}
    />
  )
}

OptimizedImage.displayName = 'OptimizedImage'

// ============================================
// HERO IMAGE VARIANT
// Pre-configured for LCP optimization
// ============================================

interface HeroImageProps extends Omit<OptimizedImageProps, 'aboveFold' | 'priority'> {
  /** Optional overlay for text readability */
  overlay?: boolean
}

/**
 * HeroImage - Optimized for Largest Contentful Paint
 * Always loaded with priority, optimized for LCP
 */
export function HeroImage({
  overlay = false,
  className = '',
  ...props
}: HeroImageProps) {
  return (
    <div className="relative w-full h-full">
      <OptimizedImage
        {...props}
        aboveFold
        className={`object-cover ${className}`}
        sizes="100vw"
      />
      {overlay && (
        <div className="absolute inset-0 bg-charcoal-900/50" />
      )}
    </div>
  )
}

HeroImage.displayName = 'HeroImage'

// ============================================
// EXPORTS
// ============================================

export default OptimizedImage
