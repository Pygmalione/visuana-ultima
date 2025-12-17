'use client'

import { TestimonialProps } from '@/types/components'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// TESTIMONIAL CARD COMPONENT
// Based on SPEC-001 Visual Identity
// Enhanced with 60fps microinteractions
// ============================================

interface EnhancedTestimonialProps extends TestimonialProps {
  /** Index for staggered animations */
  index?: number
  /** Disable entrance animations */
  disableAnimations?: boolean
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating,
  index = 0,
  disableAnimations = false,
}: EnhancedTestimonialProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView

  // Get author initials for fallback avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <figure
      ref={ref}
      data-testid="testimonial-card"
      className={`
        bg-white rounded-xl p-6 md:p-8
        shadow-subtle hover:shadow-card-hover
        border border-slate-200 hover:border-slate-300
        transition-all duration-300 ease-out
        hover:-translate-y-1
        ${shouldAnimate ? 'animate-scale-in' : ''}
      `.trim().replace(/\s+/g, ' ')}
      style={{
        animationDelay: shouldAnimate ? getStaggerDelay(index, 120) : undefined,
        opacity: shouldAnimate ? 0 : 1,
        animationFillMode: 'forwards',
      }}
      role="figure"
    >
      {/* Rating Stars with staggered entrance */}
      {rating && (
        <div
          data-testid="rating-stars"
          className="flex gap-1 mb-4"
          role="img"
          aria-label={`${rating} z 5 gwiazdek`}
        >
          {[1, 2, 3, 4, 5].map((star, starIndex) => (
            <span
              key={star}
              className={`
                inline-block
                ${shouldAnimate ? 'animate-scale-in' : ''}
              `}
              style={{
                animationDelay: shouldAnimate ? `${(index * 120) + (starIndex * 50)}ms` : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              {star <= rating ? (
                <svg
                  data-testid="rating-star-filled"
                  className="w-5 h-5 text-amber-400 drop-shadow-sm transition-transform duration-200 hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ) : (
                <svg
                  data-testid="rating-star-empty"
                  className="w-5 h-5 text-slate-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )}
            </span>
          ))}
        </div>
      )}

      {/* Quote with text reveal */}
      <div className="relative">
        {/* Decorative Quote Mark with fade in */}
        <span
          data-testid="testimonial-quote-decor"
          className={`
            absolute -top-2 -left-1 text-5xl leading-none font-serif text-slate-200
            ${shouldAnimate ? 'animate-text-reveal' : ''}
          `}
          style={{
            animationDelay: shouldAnimate ? `${(index * 120) + 100}ms` : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
          aria-hidden="true"
        >
          "
        </span>

        <blockquote
          data-testid="testimonial-quote"
          className={`
            text-lg text-slate-700 font-light leading-relaxed pl-6
            ${shouldAnimate ? 'animate-text-reveal' : ''}
          `}
          style={{
            animationDelay: shouldAnimate ? `${(index * 120) + 200}ms` : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          {quote}
        </blockquote>
      </div>

      {/* Attribution with slide up */}
      <figcaption
        data-testid="testimonial-attribution"
        className={`
          mt-6 flex items-center gap-4
          ${shouldAnimate ? 'animate-text-reveal' : ''}
        `}
        style={{
          animationDelay: shouldAnimate ? `${(index * 120) + 350}ms` : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        {/* Avatar with ring effect on hover */}
        <div className="group/avatar">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover/avatar:ring-slate-200 transition-all duration-200"
            />
          ) : (
            <span
              data-testid="testimonial-avatar-fallback"
              className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 font-medium flex items-center justify-center ring-2 ring-transparent group-hover/avatar:ring-slate-200 transition-all duration-200"
            >
              {getInitials(author)}
            </span>
          )}
        </div>

        {/* Author Info */}
        <div>
          <p className="font-display font-light text-slate-900 tracking-tight">{author}</p>
          {(role || company) && (
            <p
              data-testid="testimonial-role-company"
              className="text-sm text-slate-500 font-light"
            >
              {role}
              {role && company && ' • '}
              {company}
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  )
}

TestimonialCard.displayName = 'TestimonialCard'
