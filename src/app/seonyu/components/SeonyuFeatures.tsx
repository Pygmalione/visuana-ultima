'use client'

import { useRef, useEffect } from 'react'

// ============================================
// SEONYU FEATURES - BOLD REDESIGN
// Glassmorphism Cards on Dark Theme
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
    description: 'Inteligentne wyszukiwanie influencerów z filtrowaniem po niszy, engagement i lokalizacji. Wykrywanie fake followers.',
    features: ['Smart filtering', 'Fake detection', 'Engagement analysis'],
    gradient: 'from-purple-500 to-violet-600',
    glow: 'rgba(139, 92, 246, 0.3)',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Automated Outreach',
    description: 'Personalizowane wiadomości AI, automatyczne sekwencje follow-up i zintegrowany CRM dla influencerów.',
    features: ['AI personalization', 'Auto follow-ups', 'Influencer CRM'],
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(34, 211, 238, 0.3)',
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
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(52, 211, 153, 0.3)',
  },
]

export function SeonyuFeatures() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const cards = sectionRef.current?.querySelectorAll('.feature-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="funkcje"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0118 0%, #0f0720 50%, #1a0a2e 100%)',
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Gradient orb left */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
            top: '20%',
            left: '-10%',
          }}
        />

        {/* Gradient orb right */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
            bottom: '10%',
            right: '-5%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(168, 85, 247, 0.1) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-300 tracking-wide">
              Funkcje Platformy
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #e2d1f9 50%, #a78bfa 100%)',
              }}
            >
              Wszystko czego potrzebujesz
            </span>
          </h2>

          <p className="text-lg md:text-xl text-purple-200/70 max-w-2xl mx-auto">
            Kompleksowa platforma do influencer marketingu napędzana sztuczną inteligencją
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] opacity-0 translate-y-8"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Card glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${feature.glow} 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                style={{
                  boxShadow: `0 0 30px ${feature.glow}`,
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-display font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="relative text-purple-200/70 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Feature Pills */}
              <div className="relative flex flex-wrap gap-2">
                {feature.features.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300"
                    style={{
                      background: 'rgba(124, 58, 237, 0.15)',
                      border: '1px solid rgba(168, 85, 247, 0.2)',
                      color: 'rgb(196, 181, 253)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 opacity-20 rounded-tr-3xl overflow-hidden`}
              >
                <div
                  className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full blur-xl`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10k+', label: 'Influencerów', icon: '👥' },
            { value: '95%', label: 'Trafność AI', icon: '🎯' },
            { value: '3x', label: 'Wzrost ROI', icon: '📈' },
            { value: '24/7', label: 'Automatyzacja', icon: '⚡' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-purple-300/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .feature-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}

SeonyuFeatures.displayName = 'SeonyuFeatures'
