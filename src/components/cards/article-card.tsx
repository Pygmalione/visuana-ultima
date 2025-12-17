'use client'

import Link from 'next/link'
import { ArticleCardProps } from '@/types/components'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// ARTICLE CARD COMPONENT
// Based on SPEC-001 Visual Identity
// Enhanced with 60fps microinteractions
// ============================================

interface EnhancedArticleCardProps extends ArticleCardProps {
  /** Index for staggered animations */
  index?: number
  /** Disable entrance animations */
  disableAnimations?: boolean
}

export function ArticleCard({
  image,
  category,
  title,
  excerpt,
  date,
  author,
  slug,
  variant = 'default',
  index = 0,
  disableAnimations = false,
}: EnhancedArticleCardProps) {
  const isCompact = variant === 'compact'
  const isFeatured = variant === 'featured'
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.15 })

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
    <article
      ref={ref}
      data-testid="article-card"
      className={`
        group
        bg-white rounded-xl overflow-hidden
        border border-slate-200
        shadow-subtle hover:shadow-card-hover
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-slate-300
        ${isFeatured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}
        ${shouldAnimate ? 'animate-scale-in' : ''}
      `.trim().replace(/\s+/g, ' ')}
      style={{
        animationDelay: shouldAnimate ? getStaggerDelay(index, 80) : undefined,
        opacity: shouldAnimate ? 0 : 1,
        animationFillMode: 'forwards',
      }}
    >
      {/* Image with enhanced hover effects */}
      {image && !isCompact && (
        <Link href={`/blog/${slug}`} className="block" tabIndex={-1}>
          <div
            data-testid="article-image-container"
            className={`
              relative overflow-hidden
              ${isFeatured ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-video'}
            `}
          >
            {/* Image with smooth zoom on hover */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                willChange: 'transform',
              }}
            />

            {/* Shimmer overlay effect on hover */}
            <div
              className={`
                absolute inset-0 pointer-events-none
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                -translate-x-full group-hover:translate-x-full
                transition-transform duration-1000 ease-out
              `}
              aria-hidden="true"
              style={{
                willChange: 'transform',
              }}
            />

            {/* Gradient overlay for featured */}
            {isFeatured && (
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </div>
        </Link>
      )}

      {/* Content with staggered reveal */}
      <div className={`p-5 ${isFeatured ? 'flex flex-col justify-center' : ''}`}>
        {/* Category Badge with subtle entrance */}
        {category && (
          <span
            className={`
              inline-block px-3 py-1.5 text-xs font-medium uppercase tracking-wider
              text-slate-600 bg-slate-100 border border-slate-200 rounded-full mb-3
              transition-all duration-200
              group-hover:bg-slate-200 group-hover:border-slate-300
            `}
          >
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className={`font-display font-light text-slate-900 line-clamp-2 mb-2 tracking-tight ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          <Link
            href={`/blog/${slug}`}
            className="hover:text-slate-700 transition-colors duration-200 bg-gradient-to-r from-slate-900 to-slate-900 bg-[length:0%_1px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_1px] transition-[background-size] duration-300"
          >
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p
            data-testid="article-excerpt"
            className={`text-slate-600 font-light leading-relaxed line-clamp-3 mb-4 ${isFeatured ? 'text-base' : 'text-sm'}`}
          >
            {excerpt}
          </p>
        )}

        {/* Meta: Date & Author */}
        <div className="flex items-center gap-3 text-sm text-slate-500 font-light">
          {/* Date */}
          {date && (
            <time dateTime={date} className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {date}
            </time>
          )}

          {/* Separator */}
          {date && author && <span className="text-slate-300">•</span>}

          {/* Author with avatar hover effect */}
          {author && (
            <div className="flex items-center gap-2 group/author">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-6 h-6 rounded-full object-cover ring-2 ring-transparent group-hover/author:ring-slate-200 transition-all duration-200"
                />
              ) : (
                <span
                  data-testid="author-avatar-fallback"
                  className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-xs font-medium flex items-center justify-center ring-2 ring-transparent group-hover/author:ring-slate-300 transition-all duration-200"
                >
                  {getInitials(author.name)}
                </span>
              )}
              <span className="font-normal text-slate-700">{author.name}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

ArticleCard.displayName = 'ArticleCard'
