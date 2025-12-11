'use client'

import { useState, useRef, useEffect } from 'react'

// ============================================
// SEONYU FAQ - LIGHT THEME
// Minimal | Blue Gradient | 21st.dev Style
// ============================================

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Jak Seonyu znajduje influencerow?',
    answer: 'Nasz AI analizuje ponad 10 milionow profili w social media, oceniajac nie tylko zasiegi, ale tez jakość engagementu, autentycznosc followersow i dopasowanie do Twojej branzy. Wynik? Precyzyjne rekomendacje zamiast zglaszanej pracy.',
  },
  {
    question: 'Ile kosztuje korzystanie z platformy?',
    answer: 'Oferujemy elastyczne plany - od darmowego trial przez 14 dni, przez pakiety dla malych firm (od 299 zl/mies), az po rozwiazania enterprise z dedykowanym wsparciem. Umow sie na demo, a dopasujemy oferte do Twoich potrzeb.',
  },
  {
    question: 'Czy moge zintegrowac Seonyu z innymi narzędziami?',
    answer: 'Tak! Seonyu oferuje integracje z popularnymi platformami: CRM (HubSpot, Salesforce), narzędziami do social media (Hootsuite, Buffer) oraz systemami analitycznymi. API pozwala na customowe integracje.',
  },
  {
    question: 'Jak dziala automatyczny outreach?',
    answer: 'AI przygotowuje spersonalizowane wiadomości na podstawie profilu influencera i Twojej marki. Ty zatwierdzasz - Seonyu wysyla. Sredni response rate naszych uzytkownikow to 34% (vs 8% branżowej sredniej).',
  },
  {
    question: 'Czy wspieracie kampanie na TikTok i YouTube?',
    answer: 'Tak, wspieramy wszystkie glówne platformy: Instagram, TikTok, YouTube, Twitter/X, LinkedIn i Twitch. Dla kazdej platformy mamy dedykowane metryki i benchmarki.',
  },
  {
    question: 'Jak szybko moge zaczac?',
    answer: 'Setup trwa 24h. Po demo otrzymujesz dostęp do platformy, wprowadzamy Twoja markę do systemu i juz mozesz wyszukiwac influencerow. Pelna konfiguracja z integracjami zajmuje maksymalnie tydzien.',
  },
]

// Accordion Item component with smooth height animation
function AccordionItem({ item, index, isOpen, onToggle }: {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div
      className={`
        border border-slate-200 rounded-xl overflow-hidden
        transition-all duration-300 ease-out bg-white/80 backdrop-blur-sm
        ${isOpen ? 'shadow-lg shadow-slate-200/50 border-blue-200' : 'hover:border-slate-300'}
      `.trim().replace(/\s+/g, ' ')}
    >
      <button
        onClick={onToggle}
        className={`
          w-full flex items-center justify-between
          px-5 sm:px-6 py-5
          text-left
          transition-colors duration-200
          ${isOpen ? 'bg-blue-50/50' : 'hover:bg-slate-50/80'}
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-blue-500 focus-visible:ring-inset
        `.trim().replace(/\s+/g, ' ')}
        aria-expanded={isOpen}
        aria-controls={`seonyu-faq-answer-${index}`}
        id={`seonyu-faq-question-${index}`}
      >
        <span className="text-base font-medium text-slate-800 pr-4 leading-relaxed">
          {item.question}
        </span>
        <span
          className={`
            flex-shrink-0 w-8 h-8
            flex items-center justify-center
            rounded-full
            transition-all duration-300 ease-out
            ${isOpen
              ? 'bg-blue-600 text-white rotate-180'
              : 'bg-slate-100 text-slate-500'
            }
          `.trim().replace(/\s+/g, ' ')}
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        id={`seonyu-faq-answer-${index}`}
        role="region"
        aria-labelledby={`seonyu-faq-question-${index}`}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-300 ease-out"
      >
        <div ref={contentRef}>
          <p className="px-5 sm:px-6 py-5 text-slate-600 bg-slate-50/50 border-t border-slate-100 leading-relaxed font-light">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function SeonyuFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-labelledby="faq-title"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            top: '20%',
            right: '-10%',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Header */}
        <div
          className={`
            text-center mb-12 md:mb-16
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-light tracking-wider uppercase text-blue-700 bg-blue-50/80 backdrop-blur-sm border border-blue-100 mb-6">
            FAQ
          </span>

          <h2
            id="faq-title"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-4 tracking-tight"
          >
            Czeste{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              pytania
            </span>
          </h2>

          <p className="text-lg text-slate-500 font-light max-w-xl mx-auto">
            Wszystko co musisz wiedziec o Seonyu zanim zaczniesz
          </p>
        </div>

        {/* FAQ Items */}
        <div
          className={`
            space-y-3 sm:space-y-4
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
          style={{ transitionDelay: '200ms' }}
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`
            text-center mt-12 md:mt-16
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-slate-500 font-light mb-4">
            Masz inne pytania?
          </p>
          <a
            href="mailto:hello@seonyu.pl"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Napisz do nas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

SeonyuFAQ.displayName = 'SeonyuFAQ'
