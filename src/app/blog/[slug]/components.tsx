'use client'

import Link from 'next/link'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'
import type { ArticleWithRelations } from '@/types/blog'

// ============================================
// BLOG ARTICLE PAGE ANIMATED COMPONENTS
// Subtle animations for content-focused page
// ============================================

// ============================================
// ANIMATED ARTICLE HEADER
// ============================================

interface ArticleHeaderProps {
  article: ArticleWithRelations
  publishedDate: string | null
}

export function AnimatedArticleHeader({ article, publishedDate }: ArticleHeaderProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav
        className={`flex items-center gap-2 text-sm text-charcoal-500 mb-6 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <Link href="/blog" className="hover:text-royal-red-700 transition-colors">
          Blog
        </Link>
        <span>/</span>
        {article.category && (
          <>
            <Link
              href={`/blog?kategoria=${article.category.slug}`}
              className="hover:text-royal-red-700 transition-colors"
            >
              {article.category.name}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-charcoal-400 truncate">{article.title}</span>
      </nav>

      {/* Category Badge */}
      {article.category && (
        <Link
          href={`/blog?kategoria=${article.category.slug}`}
          className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-royal-red-700 bg-royal-red-50 rounded-full mb-4 hover:bg-royal-red-100 transition-colors ${shouldAnimate ? 'animate-scale-in' : ''}`}
          style={{
            animationDelay: shouldAnimate ? '50ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          {article.category.name}
        </Link>
      )}

      {/* Title */}
      <h1
        className={`text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-800 leading-tight mb-6 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '100ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        {article.title}
      </h1>

      {/* Excerpt */}
      {article.excerpt && (
        <p
          className={`text-xl text-charcoal-600 leading-relaxed mb-8 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
          style={{
            animationDelay: shouldAnimate ? '150ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          {article.excerpt}
        </p>
      )}

      {/* Meta */}
      <div
        className={`flex flex-wrap items-center gap-4 text-sm text-charcoal-500 pb-8 border-b border-charcoal-200 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '200ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        {/* Author */}
        {article.author && (
          <div className="flex items-center gap-2">
            {article.author.avatar ? (
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <span className="w-10 h-10 rounded-full bg-royal-red-100 text-royal-red-700 font-bold flex items-center justify-center">
                {article.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            )}
            <div>
              <p className="font-medium text-charcoal-800">{article.author.name}</p>
              {article.author.role && (
                <p className="text-xs text-charcoal-500">{article.author.role}</p>
              )}
            </div>
          </div>
        )}

        {/* Separator */}
        {article.author && publishedDate && <span className="text-charcoal-300">-</span>}

        {/* Date */}
        {publishedDate && (
          <time dateTime={article.published_at}>
            {publishedDate}
          </time>
        )}

        {/* Reading time */}
        {article.reading_time && (
          <>
            <span className="text-charcoal-300">-</span>
            <span>{article.reading_time} min czytania</span>
          </>
        )}
      </div>
    </div>
  )
}

// ============================================
// ANIMATED FEATURED IMAGE
// ============================================

interface AnimatedFeaturedImageProps {
  src: string
  alt: string
}

export function AnimatedFeaturedImage({ src, alt }: AnimatedFeaturedImageProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto rounded-lg shadow-lg ${shouldAnimate ? 'animate-scale-in' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      />
    </div>
  )
}

// ============================================
// ANIMATED RELATED ARTICLES
// ============================================

interface AnimatedRelatedArticlesProps {
  articles: ArticleWithRelations[]
}

export function AnimatedRelatedArticles({ articles }: AnimatedRelatedArticlesProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const shouldAnimate = !prefersReducedMotion && isInView

  if (articles.length === 0) return null

  return (
    <div ref={ref} className="mt-16 pt-12 border-t border-charcoal-200">
      <h2
        className={`text-2xl font-bold text-charcoal-800 mb-6 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Podobne artykuly
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className={`group block bg-charcoal-50 rounded-lg p-4 hover:bg-charcoal-100 transition-colors ${shouldAnimate ? 'animate-scale-in' : ''}`}
            style={{
              animationDelay: shouldAnimate ? getStaggerDelay(index, 100) : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            <span className="text-xs font-semibold text-royal-red-700 uppercase tracking-wider">
              {article.category?.name}
            </span>
            <h3 className="font-bold text-charcoal-800 mt-1 group-hover:text-royal-red-700 transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-charcoal-600 mt-2 line-clamp-2">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ============================================
// ANIMATED NEWSLETTER CTA
// ============================================

export function AnimatedArticleCTA() {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="text-center max-w-2xl mx-auto">
      <h2
        className={`text-2xl font-bold text-charcoal-800 mb-4 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Chcesz wiecej takich tresci?
      </h2>
      <p
        className={`text-charcoal-600 mb-6 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '100ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Dolacz do newslettera. Raz w tygodniu - same konkrety, zero spamu.
      </p>
      <form
        className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${shouldAnimate ? 'animate-scale-in' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '200ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <input
          type="email"
          placeholder="twoj@email.pl"
          className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-royal-red-700 text-white font-semibold rounded-lg hover:bg-royal-red-800 transition-colors"
        >
          Zapisz sie
        </button>
      </form>
    </div>
  )
}
