import { TestimonialProps } from '@/types/components'

// ============================================
// TESTIMONIAL CARD COMPONENT
// Based on SPEC-001 Visual Identity
// Customer testimonial with quote, author, rating
// ============================================

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating,
}: TestimonialProps) {
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
      data-testid="testimonial-card"
      className="bg-white rounded-lg p-6 md:p-8 shadow-card border border-charcoal-100"
      role="figure"
    >
      {/* Rating Stars */}
      {rating && (
        <div
          data-testid="rating-stars"
          className="flex gap-1 mb-4"
          role="img"
          aria-label={`${rating} z 5 gwiazdek`}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            star <= rating ? (
              <svg
                key={star}
                data-testid="rating-star-filled"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ) : (
              <svg
                key={star}
                data-testid="rating-star-empty"
                className="w-5 h-5 text-charcoal-200"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )
          ))}
        </div>
      )}

      {/* Quote */}
      <div className="relative">
        {/* Decorative Quote Mark */}
        <span
          data-testid="testimonial-quote-decor"
          className="absolute -top-2 -left-1 text-5xl leading-none font-serif text-royal-red-200"
          aria-hidden="true"
        >
          "
        </span>

        <blockquote
          data-testid="testimonial-quote"
          className="text-lg text-charcoal-700 leading-relaxed pl-6"
        >
          {quote}
        </blockquote>
      </div>

      {/* Attribution */}
      <figcaption
        data-testid="testimonial-attribution"
        className="mt-6 flex items-center gap-4"
      >
        {/* Avatar */}
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <span
            data-testid="testimonial-avatar-fallback"
            className="w-12 h-12 rounded-full bg-royal-red-100 text-royal-red-700 font-semibold flex items-center justify-center"
          >
            {getInitials(author)}
          </span>
        )}

        {/* Author Info */}
        <div>
          <p className="font-semibold text-charcoal-800">{author}</p>
          {(role || company) && (
            <p
              data-testid="testimonial-role-company"
              className="text-sm text-charcoal-500"
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
