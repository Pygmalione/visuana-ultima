// ============================================
// CONTACT INFO COMPONENT - SPEC-007
// Responsive: Touch-friendly tap targets (min 44px)
// ============================================

interface SocialLink {
  platform: string
  href: string
  icon: React.ReactNode
  label: string
}

const socialLinks: SocialLink[] = [
  {
    platform: 'linkedin',
    href: 'https://linkedin.com/in/karoldebkowski',
    label: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    platform: 'twitter',
    href: 'https://twitter.com/karoldebkowski',
    label: 'Twitter',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export function ContactInfo() {
  return (
    <div className="bg-charcoal-50 rounded-xl p-4 sm:p-6 lg:p-8 h-fit">
      {/* Contact Header */}
      <h2 className="text-lg sm:text-xl font-semibold text-charcoal-800 mb-4 sm:mb-6">
        Informacje kontaktowe
      </h2>

      {/* Email - Touch-friendly link */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-xs sm:text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
          Email
        </h3>
        <a
          href="mailto:karol@visuana.pl"
          className="
            inline-flex items-center
            min-h-[44px]
            text-base sm:text-lg text-electric-blue-600
            hover:text-royal-red-600
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-red-600 focus-visible:ring-offset-2
            rounded
          "
        >
          karol@visuana.pl
        </a>
      </div>

      {/* Response Time */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-xs sm:text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
          Czas odpowiedzi
        </h3>
        <p className="text-charcoal-700">
          Odpowiadamy w ciagu <strong>24 godzin</strong>
        </p>
      </div>

      {/* Social Links - Touch-friendly (min 44px tap targets) */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-xs sm:text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-3">
          Social Media
        </h3>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                w-11 h-11 sm:w-10 sm:h-10
                rounded-lg bg-white
                text-charcoal-600
                hover:text-royal-red-600 hover:bg-royal-red-50
                hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]
                active:bg-royal-red-100
                transition-all duration-200 ease-out
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-red-600 focus-visible:ring-offset-2
              "
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Company Info */}
      <div className="pt-4 sm:pt-6 border-t border-charcoal-200">
        <h3 className="text-xs sm:text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
          Firma
        </h3>
        <p className="text-charcoal-700 text-sm leading-relaxed">
          Visuana Ultima<br />
          Karol Debkowski<br />
          Polska
        </p>
      </div>
    </div>
  )
}
