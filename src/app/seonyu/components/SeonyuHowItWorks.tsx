'use client'

import { Container } from '@/components/layout/container'

// ============================================
// SEONYU HOW IT WORKS - SPEC-008
// 3-step process visualization
// ============================================

const steps = [
  {
    number: '01',
    title: 'Polacz marke',
    description: 'Dodaj brief kampanii i okresl budzet. AI zrozumie Twoje potrzeby i cele.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'AI znajdzie match',
    description: 'Algorytm przeszukuje baze 10,000+ influencerow i dobiera najlepszych kandydatow.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Automatyzuj kampanie',
    description: 'Outreach, tracking, raporty - wszystko dzieje sie automatycznie. Ty kontrolujesz wyniki.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export function SeonyuHowItWorks() {
  return (
    <section id="jak-dziala" className="py-20 md:py-28 bg-gradient-to-br from-seonyu-50 to-seonyu-100/50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-seonyu-700 text-sm font-medium mb-4 shadow-sm">
            Jak to dziala
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-seonyu-dark mb-4">
            3 proste kroki
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Od briefu do wynikow w kilka minut
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-gradient-to-r from-seonyu-200 via-seonyu-300 to-seonyu-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                {/* Step Number Circle */}
                <div className="relative mx-auto mb-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <span className="text-seonyu-primary">
                      {step.icon}
                    </span>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-seonyu-primary text-white text-sm font-bold flex items-center justify-center shadow-seonyu-button">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-seonyu-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <svg className="w-6 h-6 text-seonyu-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

SeonyuHowItWorks.displayName = 'SeonyuHowItWorks'
