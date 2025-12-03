import { AuthorBioProps } from '@/types/components'

// ============================================
// AUTHOR BIO COMPONENT
// Based on SPEC-001 Visual Identity + frontend-design skill
// Distinctive author card with asymmetric layout
// ============================================

const SocialIcon = ({ platform }: { platform: string }) => {
  const iconClass = 'w-5 h-5'

  switch (platform) {
    case 'linkedin':
      return (
        <svg data-testid="social-icon-linkedin" className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case 'twitter':
      return (
        <svg data-testid="social-icon-twitter" className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg data-testid="social-icon-instagram" className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      )
    case 'website':
      return (
        <svg data-testid="social-icon-website" className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    default:
      return null
  }
}

export function AuthorBio({
  name,
  avatar,
  bio,
  role,
  socialLinks = [],
}: AuthorBioProps) {
  // Get author initials for fallback avatar
  const getInitials = (authorName: string) => {
    return authorName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div
      data-testid="author-bio"
      className="relative bg-white rounded-lg p-6 md:p-8 shadow-card border border-charcoal-100 overflow-hidden"
    >
      {/* Decorative Accent - diagonal gradient stripe */}
      <div
        data-testid="author-bio-accent"
        className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-royal-red-700 to-royal-red-500"
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row gap-6 pl-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-charcoal-100 shadow-lg"
            />
          ) : (
            <div
              data-testid="author-bio-avatar-fallback"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-royal-red-600 to-royal-red-800 text-white text-2xl md:text-3xl font-bold flex items-center justify-center ring-4 ring-charcoal-100 shadow-lg"
            >
              {getInitials(name)}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name & Role */}
          <div className="mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-charcoal-800">
              {name}
            </h3>
            {role && (
              <p className="text-sm font-medium text-royal-red-700 mt-0.5">
                {role}
              </p>
            )}
          </div>

          {/* Bio */}
          {bio && (
            <p className="text-charcoal-600 leading-relaxed mb-4">
              {bio}
            </p>
          )}

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-charcoal-400 hover:text-royal-red-700 hover:bg-royal-red-50 rounded-full transition-all duration-200 hover:scale-110"
                  aria-label={`${name} na ${link.platform}`}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Subtle background pattern (decorative) */}
      <div
        className="absolute -bottom-10 -right-10 w-40 h-40 bg-royal-red-50 rounded-full opacity-50 blur-3xl"
        aria-hidden="true"
      />
    </div>
  )
}

AuthorBio.displayName = 'AuthorBio'
