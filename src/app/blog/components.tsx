'use client'

import { ArticleCard } from '@/components/cards'
import { Grid } from '@/components/layout'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'
import type { ArticleWithRelations, Category } from '@/types/blog'

// ============================================
// BLOG PAGE ANIMATED COMPONENTS
// Client-side wrappers with scroll-triggered animations
// ============================================

// ============================================
// ANIMATED BLOG HERO
// ============================================

interface BlogHeroContentProps {
  title: string
  description: string
  children?: React.ReactNode
}

export function BlogHeroContent({ title, description, children }: BlogHeroContentProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="text-center max-w-3xl mx-auto">
      <h1
        className={`text-4xl md:text-5xl font-bold text-charcoal-800 mb-4 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        {title}
      </h1>
      <p
        className={`text-lg text-charcoal-600 mb-8 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '100ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        {description}
      </p>

      {/* Category Filter wrapper with staggered animation */}
      <div
        className={shouldAnimate ? 'animate-scale-in' : ''}
        style={{
          animationDelay: shouldAnimate ? '200ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        {children}
      </div>
    </div>
  )
}

// ============================================
// ANIMATED CATEGORY FILTER (Link-based for SSR)
// ============================================

interface BlogCategoryFilterProps {
  categories: Category[]
  activeCategory?: string
}

export function BlogCategoryFilter({ categories, activeCategory }: BlogCategoryFilterProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="flex flex-wrap gap-2 justify-center">
      <a
        href="/blog"
        className={`
          px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
          hover:scale-105 active:scale-95
          ${shouldAnimate ? 'animate-scale-in' : ''}
          ${!activeCategory
            ? 'bg-royal-red-700 text-white shadow-button hover:shadow-button-hover'
            : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
          }
        `}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Wszystkie
      </a>
      {categories.map((category, index) => (
        <a
          key={category.id}
          href={`/blog?kategoria=${category.slug}`}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            hover:scale-105 active:scale-95
            ${shouldAnimate ? 'animate-scale-in' : ''}
            ${activeCategory === category.slug
              ? 'bg-royal-red-700 text-white shadow-button hover:shadow-button-hover'
              : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
            }
          `}
          style={{
            animationDelay: shouldAnimate ? getStaggerDelay(index + 1, 60) : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          {category.name}
        </a>
      ))}
    </div>
  )
}

// ============================================
// ANIMATED ARTICLES GRID
// ============================================

interface AnimatedArticlesGridProps {
  articles: ArticleWithRelations[]
}

export function AnimatedArticlesGrid({ articles }: AnimatedArticlesGridProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const shouldAnimate = !prefersReducedMotion && isInView

  if (articles.length === 0) {
    return (
      <div
        ref={ref}
        className={`text-center py-16 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <p className="text-charcoal-500 text-lg">
          Brak artykułów w tej kategorii. Wróć wkrótce!
        </p>
      </div>
    )
  }

  // First article featured, rest default
  const [featured, ...rest] = articles

  return (
    <div ref={ref} className="space-y-8">
      {/* Featured Article */}
      {featured && (
        <div
          className={shouldAnimate ? 'animate-scale-in' : ''}
          style={{
            animationDelay: shouldAnimate ? '0ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          <ArticleCard
            title={featured.title}
            excerpt={featured.excerpt}
            category={featured.category?.name}
            date={featured.published_at ? new Date(featured.published_at).toLocaleDateString('pl-PL') : undefined}
            slug={featured.slug}
            image={featured.featured_image}
            author={featured.author ? { name: featured.author.name, avatar: featured.author.avatar } : undefined}
            variant="featured"
            index={0}
            disableAnimations={true} // We handle animation at wrapper level
          />
        </div>
      )}

      {/* Rest of articles with staggered animations */}
      {rest.length > 0 && (
        <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="lg">
          {rest.map((article, index) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category?.name}
              date={article.published_at ? new Date(article.published_at).toLocaleDateString('pl-PL') : undefined}
              slug={article.slug}
              image={article.featured_image}
              author={article.author ? { name: article.author.name, avatar: article.author.avatar } : undefined}
              index={index + 1} // +1 because featured is index 0
            />
          ))}
        </Grid>
      )}
    </div>
  )
}

// ============================================
// ANIMATED NEWSLETTER CTA
// ============================================

export function AnimatedNewsletterCTA() {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="text-center">
      <h2
        className={`text-2xl md:text-3xl font-bold text-white mb-4 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Nie przegap kolejnych artykułów
      </h2>
      <p
        className={`text-royal-red-100 mb-6 max-w-xl mx-auto ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '100ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Dołącz do newslettera. Zero spamu, same konkrety - raz w tygodniu.
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
          className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white transition-all duration-200"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-royal-red-700 font-semibold rounded-lg hover:bg-royal-red-50 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Zapisz się
        </button>
      </form>
    </div>
  )
}

// ============================================
// ANIMATED RESULTS INFO
// ============================================

interface AnimatedResultsInfoProps {
  total: number
  source: 'strapi' | 'mock'
}

export function AnimatedResultsInfo({ total, source }: AnimatedResultsInfoProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.5 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div
      ref={ref}
      className={`text-center mt-12 text-charcoal-500 text-sm ${shouldAnimate ? 'animate-text-reveal' : ''}`}
      style={{
        animationDelay: shouldAnimate ? '0ms' : undefined,
        opacity: shouldAnimate ? 0 : 1,
        animationFillMode: 'forwards',
      }}
    >
      {total} {total === 1 ? 'artykuł' : total < 5 ? 'artykuły' : 'artykułów'}
      {source === 'mock' && (
        <span className="ml-2 text-xs text-charcoal-400">
          (dane testowe)
        </span>
      )}
    </div>
  )
}
