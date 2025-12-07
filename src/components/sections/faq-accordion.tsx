'use client'

import { useState, useCallback } from 'react'
import { FAQAccordionProps } from '@/types/service'
import { Container } from '@/components/layout/container'

// ============================================
// FAQ ACCORDION COMPONENT
// Based on SPEC-006 Service Pages
// Expandable/collapsible FAQ items with keyboard accessibility
// ============================================

export function FAQAccordion({
  heading,
  items,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleItem(index)
    }
  }, [toggleItem])

  return (
    <section
      data-testid="faq-accordion"
      className="py-16 md:py-24 bg-charcoal-50"
    >
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 text-center mb-12">
            {heading}
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {items.map((item, index) => {
              const isOpen = openIndex === index
              const itemId = `faq-item-${index}`
              const contentId = `faq-content-${index}`

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-card overflow-hidden"
                >
                  {/* Question Button */}
                  <button
                    id={itemId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-inset"
                  >
                    <span className="text-lg font-semibold text-charcoal-800 pr-4">
                      {item.question}
                    </span>

                    {/* Plus/Minus Icon */}
                    <span
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-royal-red-700 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" x2="12" y1="5" y2="19" />
                        <line x1="5" x2="19" y1="12" y2="12" />
                      </svg>
                    </span>
                  </button>

                  {/* Answer Content */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={itemId}
                    className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="px-6 pb-6 text-charcoal-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

FAQAccordion.displayName = 'FAQAccordion'
