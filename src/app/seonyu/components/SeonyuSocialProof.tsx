'use client'

import { useEffect, useRef } from 'react'

// ============================================
// SEONYU SOCIAL PROOF - BOLD REDESIGN
// Animated Testimonials + Stats on Dark Theme
// ============================================

const clientLogos = [
  { name: 'ModivoAI', initials: 'M' },
  { name: 'TechFlow', initials: 'TF' },
  { name: 'Brandly', initials: 'B' },
  { name: 'Ecom Plus', initials: 'E+' },
  { name: 'D2C Lab', initials: 'D2C' },
  { name: 'StartupX', initials: 'SX' },
]

const stats = [
  { value: '250%', label: 'Średni ROI', gradient: 'from-emerald-400 to-teal-500' },
  { value: '50%', label: 'Mniej czasu na outreach', gradient: 'from-cyan-400 to-blue-500' },
  { value: '10k+', label: 'Influencerów w bazie', gradient: 'from-violet-400 to-purple-500' },
  { value: '98%', label: 'Satisfaction rate', gradient: 'from-amber-400 to-orange-500' },
]

const testimonials = [
  {
    quote: 'Seonyu całkowicie zmieniło sposób w jaki prowadzimy influencer marketing. AI matching zaoszczędził nam dziesiątki godzin, a wyniki przeszły nasze oczekiwania.',
    author: 'Anna Kowalska',
    role: 'Marketing Director',
    company: 'E-commerce Brand',
    rating: 5,
  },
  {
    quote: 'Automatyzacja outreachu to gamechanger. Zamiast wysyłać setki maili, AI robi to za nas - i to z lepszymi wynikami.',
    author: 'Michał Nowak',
    role: 'Head of Growth',
    company: 'Tech Startup',
    rating: 5,
  },
]

export function SeonyuSocialProof() {
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
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-item')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="social-proof"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0118 0%, #0f0720 50%, #1a0a2e 100%)',
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Gradient orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[150px]"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
            top: '30%',
            right: '-10%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Client Logos */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-purple-400/70 uppercase tracking-widest mb-8">
            Zaufali nam
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="animate-item opacity-0 translate-y-4 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <span className="text-purple-300/70 font-display font-bold text-lg">
                  {client.initials}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-item opacity-0 translate-y-4 text-center p-6 md:p-8 rounded-2xl transition-all duration-500 hover:scale-105 group"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`text-4xl md:text-5xl font-display font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-purple-200/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-item opacity-0 translate-y-4 relative p-8 rounded-3xl transition-all duration-500 group"
              style={{
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                backdropFilter: 'blur(20px)',
                transitionDelay: `${400 + index * 150}ms`,
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-purple-500/20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="relative z-10">
                <p className="text-lg text-purple-100/90 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <footer className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                    }}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-purple-300/70">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </footer>
              </blockquote>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 100%, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .animate-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}

SeonyuSocialProof.displayName = 'SeonyuSocialProof'
