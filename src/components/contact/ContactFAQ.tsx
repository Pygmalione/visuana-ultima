'use client'

import { useState, useRef, useEffect } from 'react'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// CONTACT FAQ COMPONENT - SPEC-007
// Enhanced with smooth accordion animations
// + scroll-triggered entrance animations
// ============================================

interface ContactFAQProps {
  /** Disable entrance animations */
  disableAnimations?: boolean
}

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Jak szybko odpowiadacie?',
    answer: 'Odpowiadamy w ciagu 24 godzin w dni robocze. W pilnych sprawach mozesz tez napisac bezposrednio na karol@visuana.pl.',
  },
  {
    question: 'Ile kosztuje konsultacja?',
    answer: 'Pierwsza konsultacja (15 minut) jest calkowicie bezplatna. To okazja, zebysmy poznali Twoje potrzeby i sprawdzili, czy mozemy pomoc.',
  },
  {
    question: 'Z jakimi firmami pracujecie?',
    answer: 'Pracujemy z JDG, MSP i startupami. Specjalizujemy sie w content marketingu, influencer marketingu, AI w marketingu oraz market research Azja.',
  },
  {
    question: 'Czy pracujecie z firmami zagranicznymi?',
    answer: 'Tak! Mamy szczegolne doswiadczenie w rynkach azjatyckich (Japonia, Korea, Chiny). Obslugujemy klientow po polsku i angielsku.',
  },
]

// Accordion Item component with smooth height animation + entrance animation
function AccordionItem({ item, index, isOpen, onToggle, shouldAnimate }: {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
  shouldAnimate: boolean
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
        border border-charcoal-200 rounded-lg overflow-hidden
        transition-all duration-300 ease-out
        ${isOpen ? 'shadow-card' : 'hover:border-charcoal-300 hover:-translate-y-0.5'}
        ${shouldAnimate ? 'animate-scale-in' : ''}
      `.trim().replace(/\s+/g, ' ')}
      style={{
        animationDelay: shouldAnimate ? getStaggerDelay(index + 1, 100) : undefined,
        opacity: shouldAnimate ? 0 : 1,
        animationFillMode: 'forwards',
      }}
    >
      <button
        onClick={onToggle}
        className={`
          w-full flex items-center justify-between
          px-4 sm:px-6 py-4
          min-h-[56px]
          text-left bg-white
          transition-colors duration-200
          ${isOpen ? 'bg-charcoal-50' : 'hover:bg-charcoal-50'}
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-red-600 focus-visible:ring-inset
        `.trim().replace(/\s+/g, ' ')}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="text-base font-semibold text-charcoal-800 pr-4">
          {item.question}
        </span>
        <span
          className={`
            flex-shrink-0 w-8 h-8
            flex items-center justify-center
            rounded-full
            transition-all duration-300 ease-out
            ${isOpen
              ? 'bg-royal-red-600 text-white rotate-180'
              : 'bg-charcoal-100 text-charcoal-600'
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
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-300 ease-out"
      >
        <div ref={contentRef}>
          <p className="px-4 sm:px-6 py-4 text-charcoal-600 bg-charcoal-50 border-t border-charcoal-100 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ContactFAQ({ disableAnimations = false }: ContactFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.15 })

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading with text reveal animation */}
        <h2
          className={`
            text-2xl lg:text-3xl font-bold text-charcoal-800 text-center mb-8 sm:mb-12
            ${shouldAnimate ? 'animate-text-reveal' : ''}
          `}
          style={{
            animationDelay: shouldAnimate ? '0ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          Czesto zadawane pytania
        </h2>

        {/* FAQ items with staggered entrance */}
        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
              shouldAnimate={shouldAnimate}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

ContactFAQ.displayName = 'ContactFAQ'
