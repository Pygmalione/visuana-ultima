'use client'

import { useRef, useEffect, useState } from 'react'

// ============================================
// SEONYU FEATURES - BENTO GRID
// Light Theme | Blue/Navy | 21st.dev Style
// Elegant Thin Typography
// ============================================

const features = [
  {
    id: 'discovery',
    title: 'AI Discovery',
    description: 'Inteligentne wyszukiwanie influencerów dopasowanych do Twojej marki. Nasz AI analizuje engagement, autentyczność i dopasowanie do grupy docelowej.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    tags: ['Smart filtering', 'Fake detection', 'Engagement analysis'],
    span: 'col-span-1 md:col-span-2',
    accent: 'bg-blue-600',
  },
  {
    id: 'outreach',
    title: 'Automated Outreach',
    description: 'Personalizowane wiadomości AI. Automatyczne sekwencje follow-up i zintegrowany CRM.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    tags: ['AI personalization', 'Auto follow-ups'],
    span: 'col-span-1',
    accent: 'bg-cyan-600',
  },
  {
    id: 'analytics',
    title: 'Performance Analytics',
    description: 'ROI tracking per influencer. Real-time dashboardy z metrykami.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tags: ['ROI tracking', 'Attribution', 'Real-time data'],
    span: 'col-span-1',
    accent: 'bg-slate-800',
  },
  {
    id: 'crm',
    title: 'Influencer CRM',
    description: 'Zarządzaj relacjami z influencerami w jednym miejscu. Historia kontaktów, umowy, płatności.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    tags: ['Contact history', 'Contracts', 'Payments'],
    span: 'col-span-1 md:col-span-2',
    accent: 'bg-blue-700',
  },
]

const stats = [
  { value: '10k+', label: 'Influencerów w bazie' },
  { value: '95%', label: 'Trafność AI matching' },
  { value: '3x', label: 'Wyższy response rate' },
  { value: '24/7', label: 'Monitoring kampanii' },
]

export function SeonyuFeatures() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="funkcje"
      aria-labelledby="features-title"
      className="relative py-28 md:py-36 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-light tracking-wider uppercase text-blue-700 bg-blue-50/80 backdrop-blur-sm border border-blue-100 mb-8">
            Funkcje
          </span>
          <h2
            id="features-title"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight"
          >
            Wszystko czego potrzebujesz
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto font-light">
            Kompleksowa platforma do influencer marketingu napędzana AI
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`
                group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60
                hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 hover:bg-white
                transition-all duration-500 ease-out
                ${feature.span}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.accent} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-light text-slate-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 rounded-full text-xs text-slate-500 bg-slate-100/80 backdrop-blur-sm font-light hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Subtle hover indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          className={`
            grid grid-cols-2 md:grid-cols-4 gap-4
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
          style={{ transitionDelay: '400ms' }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300"
            >
              <p className="font-display text-4xl md:text-5xl font-light text-slate-900 mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

SeonyuFeatures.displayName = 'SeonyuFeatures'
