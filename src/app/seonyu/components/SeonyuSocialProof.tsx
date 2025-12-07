'use client'

import { Container } from '@/components/layout/container'

// ============================================
// SEONYU SOCIAL PROOF - SPEC-008
// Client logos, testimonial, and stats
// ============================================

const clientLogos = [
  { name: 'Brand One', placeholder: 'BRAND' },
  { name: 'Brand Two', placeholder: 'STARTUP' },
  { name: 'Brand Three', placeholder: 'ECOM' },
  { name: 'Brand Four', placeholder: 'D2C' },
  { name: 'Brand Five', placeholder: 'TECH' },
]

const stats = [
  { value: '250%', label: 'sredni ROI' },
  { value: '50%', label: 'mniej czasu na outreach' },
  { value: '10k+', label: 'influencerow w bazie' },
  { value: '98%', label: 'satisfaction rate' },
]

const testimonial = {
  quote: 'Seonyu calkowicie zmienilo sposob w jaki prowadzimy influencer marketing. AI matching zaoszczedzil nam dziesiątki godzin, a wyniki przeszly nasze oczekiwania.',
  author: 'Anna Kowalska',
  role: 'Marketing Director',
  company: 'E-commerce Brand',
  avatar: null,
}

export function SeonyuSocialProof() {
  return (
    <section id="social-proof" className="py-20 md:py-28 bg-white">
      <Container>
        {/* Client Logos */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-charcoal-500 uppercase tracking-wider mb-8">
            Zaufali nam
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="w-24 h-12 rounded-lg bg-charcoal-100 flex items-center justify-center text-charcoal-400 font-bold text-sm hover:bg-seonyu-50 hover:text-seonyu-600 transition-colors duration-200"
              >
                {client.placeholder}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-seonyu-50 to-white border border-seonyu-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-seonyu-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-charcoal-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-seonyu-dark to-seonyu-950 text-white">
            {/* Quote Icon */}
            <div className="absolute top-6 left-8 text-seonyu-primary/30">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <blockquote className="relative z-10">
              <p className="text-lg md:text-xl leading-relaxed text-seonyu-100 mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <footer className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-seonyu-primary to-seonyu-accent flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-seonyu-300">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </footer>
            </blockquote>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-seonyu-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-1/4 w-24 h-24 bg-seonyu-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  )
}

SeonyuSocialProof.displayName = 'SeonyuSocialProof'
