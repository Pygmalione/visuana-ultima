'use client'

import { useEffect, useRef, useState } from 'react'

// ============================================
// SEONYU SOCIAL PROOF - LIGHT THEME
// Elegant Cards | Blue/Navy | 21st.dev Style
// ============================================

const clientLogos = [
  { name: 'ModivoAI', initials: 'M' },
  { name: 'TechFlow', initials: 'TF' },
  { name: 'Brandly', initials: 'B' },
  { name: 'Ecom Plus', initials: 'E+' },
  { name: 'D2C Lab', initials: 'D2C' },
  { name: 'StartupX', initials: 'SX' },
]

const testimonials = [
  {
    quote: 'Seonyu całkowicie zmieniło sposób w jaki prowadzimy influencer marketing. AI matching zaoszczędził nam dziesiątki godzin, a wyniki przeszły nasze oczekiwania.',
    author: 'Anna Kowalska',
    role: 'Marketing Director',
    company: 'E-commerce Brand',
    rating: 5,
    accent: 'bg-blue-600',
  },
  {
    quote: 'Automatyzacja outreachu to przełom. Zamiast wysyłać setki maili, AI robi to za nas - i to z lepszymi wynikami.',
    author: 'Michał Nowak',
    role: 'Head of Growth',
    company: 'Tech Startup',
    rating: 5,
    accent: 'bg-cyan-600',
  },
]

export function SeonyuSocialProof() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
      id="social-proof"
      aria-labelledby="social-proof-title"
      className="relative py-28 md:py-36 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-light tracking-wider uppercase text-slate-600 bg-slate-100/80 backdrop-blur-sm border border-slate-200 mb-8">
            Zaufali nam
          </span>
          <h2
            id="social-proof-title"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight"
          >
            Opinie klientów
          </h2>
          <p className="text-lg text-slate-500 max-w-lg mx-auto font-light">
            Dołącz do grona zadowolonych klientów
          </p>
        </div>

        {/* Client Logos */}
        <div
          className={`
            flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-20
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center bg-white/60 backdrop-blur-sm border border-slate-200/60 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/10 hover:bg-white transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-slate-400 font-display font-light text-sm md:text-base group-hover:text-blue-600">
                {client.initials}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/60
                hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 hover:bg-white
                transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-slate-200">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="relative z-10">
                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <footer className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-light text-sm ${testimonial.accent}`}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-light text-slate-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-400 font-light">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div
          className={`
            mt-16 flex flex-wrap justify-center gap-8 md:gap-16
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
          style={{ transitionDelay: '500ms' }}
        >
          {[
            { value: '250%', label: 'Średni ROI' },
            { value: '50%', label: 'Mniej czasu' },
            { value: '98%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-light text-slate-900 mb-1 tracking-tight">
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

SeonyuSocialProof.displayName = 'SeonyuSocialProof'
