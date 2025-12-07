import Link from 'next/link'
import { ArticleCardProps } from '@/types/components'

// ============================================
// ARTICLE CARD COMPONENT
// Based on SPEC-001 Visual Identity
// Blog post card with image, metadata, author
// ============================================

export function ArticleCard({
  image,
  category,
  title,
  excerpt,
  date,
  author,
  slug,
  variant = 'default',
}: ArticleCardProps) {
  const isCompact = variant === 'compact'
  const isFeatured = variant === 'featured'

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
      data-testid="article-card"
      className={`
        group
        bg-white rounded-xl overflow-hidden
        border border-slate-200
        shadow-subtle hover:shadow-card-hover
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-slate-300
        ${isFeatured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}
      `.trim().replace(/\s+/g, ' ')}
    >
      {/* Image */}
      {image && !isCompact && (
        <Link href={`/blog/${slug}`} className="block" tabIndex={-1}>
          <div
            data-testid="article-image-container"
            className={`
              relative overflow-hidden
              ${isFeatured ? 'aspect-square md:aspect-auto md:h-full' : 'aspect-video'}
            `}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay for featured */}
            {isFeatured && (
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </div>
        </Link>
      )}

      {/* Content */}
      <div className={`p-5 ${isFeatured ? 'flex flex-col justify-center' : ''}`}>
        {/* Category Badge */}
        {category && (
          <span className="inline-block px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 rounded-full mb-3">
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className={`font-display font-light text-slate-900 line-clamp-2 mb-2 tracking-tight ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          <Link
            href={`/blog/${slug}`}
            className="hover:text-slate-700 transition-colors duration-200"
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
          {date && author && <span className="text-charcoal-300">•</span>}

          {/* Author */}
          {author && (
            <div className="flex items-center gap-2">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <span
                  data-testid="author-avatar-fallback"
                  className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-xs font-medium flex items-center justify-center"
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
