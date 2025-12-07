'use client'

import { useEffect, useRef, useState } from 'react'

// ============================================
// SEONYU HOW IT WORKS - BOLD REDESIGN
// Animated Timeline on Dark Theme
// ============================================

const steps = [
  {
    number: '01',
    title: 'Połącz markę',
    description: 'Dodaj brief kampanii i określ budżet. AI zrozumie Twoje potrzeby i cele.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-600',
    color: '#8b5cf6',
  },
  {
    number: '02',
    title: 'AI znajdzie match',
    description: 'Algorytm przeszukuje bazę 10,000+ influencerów i dobiera najlepszych kandydatów.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-blue-600',
    color: '#22d3ee',
  },
  {
    number: '03',
    title: 'Automatyzuj kampanię',
    description: 'Outreach, tracking, raporty - wszystko dzieje się automatycznie. Ty kontrolujesz wyniki.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-orange-600',
    color: '#f59e0b',
  },
]

export function SeonyuHowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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

    const elements = sectionRef.current?.querySelectorAll('.step-card')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="jak-dziala"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1a0a2e 0%, #0f0720 50%, #0a0118 100%)',
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal beam */}
        <div
          className="absolute left-0 right-0 h-px opacity-30"
          style={{
            top: '50%',
            background: 'linear-gradient(90deg, transparent 0%, rgba(124, 58, 237, 0.5) 20%, rgba(34, 211, 238, 0.5) 50%, rgba(245, 158, 11, 0.5) 80%, transparent 100%)',
          }}
        />

        {/* Gradient orbs */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-[150px]"
          style={{
            background: `radial-gradient(circle, ${steps[activeStep].color} 0%, transparent 70%)`,
            top: '10%',
            left: '30%',
            transition: 'background 1s ease',
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
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-purple-300 tracking-wide">
              Jak to działa
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #e2d1f9 50%, #a78bfa 100%)',
              }}
            >
              3 proste kroki
            </span>
          </h2>

          <p className="text-lg md:text-xl text-purple-200/70 max-w-2xl mx-auto">
            Od briefu do wyników w kilka minut
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline connector - Desktop */}
          <div className="hidden md:block absolute top-28 left-0 right-0 h-1 overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'linear-gradient(90deg, transparent 10%, rgba(139, 92, 246, 0.5) 30%, rgba(34, 211, 238, 0.5) 50%, rgba(245, 158, 11, 0.5) 70%, transparent 90%)',
              }}
            />
            {/* Animated progress */}
            <div
              className="absolute top-0 h-full transition-all duration-1000 ease-out"
              style={{
                left: 0,
                width: `${((activeStep + 1) / steps.length) * 100}%`,
                background: `linear-gradient(90deg, ${steps[0].color}, ${steps[activeStep].color})`,
                opacity: 0.6,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-card relative opacity-0 translate-y-8 transition-all duration-700`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`group relative p-8 rounded-3xl text-center transition-all duration-500 ${
                    activeStep === index ? 'scale-[1.02]' : ''
                  }`}
                  style={{
                    background: activeStep === index
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)'
                      : 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    border: `1px solid ${activeStep === index ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)'}`,
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Active glow */}
                  {activeStep === index && (
                    <div
                      className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${step.color}40 0%, transparent 60%)`,
                      }}
                    />
                  )}

                  {/* Step Number Circle */}
                  <div className="relative mx-auto mb-6">
                    <div
                      className={`relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white transition-all duration-500`}
                      style={{
                        boxShadow: activeStep === index ? `0 0 40px ${step.color}60` : `0 0 20px ${step.color}30`,
                        transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Number Badge */}
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: step.color,
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-purple-200/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <svg className="w-6 h-6 text-purple-500/50 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className="relative w-3 h-3 rounded-full transition-all duration-300"
              style={{
                background: activeStep === index ? step.color : 'rgba(255,255,255,0.2)',
                boxShadow: activeStep === index ? `0 0 10px ${step.color}` : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .step-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}

SeonyuHowItWorks.displayName = 'SeonyuHowItWorks'
