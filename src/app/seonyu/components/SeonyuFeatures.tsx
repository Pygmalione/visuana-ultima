'use client'

import { Container } from '@/components/layout/container'

// ============================================
// SEONYU FEATURES - SPEC-008
// Three main AI capabilities
// ============================================

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 10l2 2m0-2l-2 2" />
      </svg>
    ),
    title: 'AI Discovery',
    description: 'Inteligentne wyszukiwanie influencerow z filtrowaniem po niszy, engagement i lokalizacji. Wykrywanie fake followerow.',
    features: ['Smart filtering', 'Fake detection', 'Engagement analysis'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Automated Outreach',
    description: 'Personalizowane wiadomosci AI, automatyczne sekwencje follow-up i zintegrowany CRM dla influencerow.',
    features: ['AI personalization', 'Auto follow-ups', 'Influencer CRM'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Performance Analytics',
    description: 'ROI tracking per influencer, attribution modeling i real-time dashboardy z kluczowymi metrykami.',
    features: ['ROI tracking', 'Attribution', 'Real-time data'],
  },
]

export function SeonyuFeatures() {
  return (
    <section id="funkcje" className="py-20 md:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-seonyu-100 text-seonyu-700 text-sm font-medium mb-4">
            Funkcje
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-seonyu-dark mb-4">
            Wszystko czego potrzebujesz
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Kompleksowa platforma do influencer marketingu z AI
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-seonyu-100 hover:border-seonyu-200 shadow-seonyu-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-seonyu-100 to-seonyu-50 flex items-center justify-center text-seonyu-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-seonyu-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2">
                {feature.features.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-seonyu-50 text-seonyu-700 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-seonyu-primary/5 to-seonyu-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

SeonyuFeatures.displayName = 'SeonyuFeatures'
