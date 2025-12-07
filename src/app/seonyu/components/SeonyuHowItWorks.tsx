'use client'

import { useEffect, useRef, useState } from 'react'

// ============================================
// SEONYU HOW IT WORKS - LIGHT THEME
// Elegant Timeline | Blue/Navy | 21st.dev Style
// ============================================

const steps = [
  {
    number: '01',
    title: 'Połącz markę',
    description: 'Dodaj brief kampanii i określ budżet. AI zrozumie Twoje potrzeby i cele.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    accent: 'bg-blue-600',
  },
  {
    number: '02',
    title: 'AI znajdzie match',
    description: 'Algorytm przeszukuje bazę 10,000+ influencerów i dobiera najlepszych kandydatów.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    accent: 'bg-cyan-600',
  },
  {
    number: '03',
    title: 'Automatyzuj kampanię',
    description: 'Outreach, tracking, raporty - wszystko dzieje się automatycznie. Ty kontrolujesz wyniki.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: 'bg-slate-800',
  },
]

export function SeonyuHowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

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
      id="jak-dziala"
      aria-labelledby="how-it-works-title"
      className="relative py-28 md:py-36 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-cyan-700 bg-cyan-50 border border-cyan-100 mb-8">
            Jak to działa
          </span>
          <h2
            id="how-it-works-title"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight"
          >
            3 proste kroki
          </h2>
          <p className="text-lg text-slate-500 max-w-lg mx-auto font-light">
            Od briefu do wyników w kilka minut
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline connector - Desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-slate-200">
            <div
              className="absolute top-0 h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000 ease-out"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`
                  relative text-center transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Circle */}
                <div className="relative mx-auto mb-8">
                  <div
                    className={`
                      relative w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-white
                      transition-all duration-500
                      ${step.accent}
                      ${activeStep === index ? 'scale-110 shadow-lg' : 'scale-100'}
                    `}
                  >
                    {step.icon}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-medium text-slate-900 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-2 mt-16">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeStep === index ? 'w-8 bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'}
              `}
              aria-label={`Przejdź do kroku ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

SeonyuHowItWorks.displayName = 'SeonyuHowItWorks'
