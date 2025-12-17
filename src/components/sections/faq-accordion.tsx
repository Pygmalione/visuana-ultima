'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { FAQAccordionProps } from '@/types/service'
import { Container } from '@/components/layout/container'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// FAQ ACCORDION COMPONENT
// Based on SPEC-006 Service Pages
// Enhanced with 60fps smooth animations
// ============================================

interface EnhancedFAQAccordionProps extends FAQAccordionProps {
  /** Disable entrance animations */
  disableAnimations?: boolean
}

export function FAQAccordion({
  heading,
  items,
  disableAnimations = false,
}: EnhancedFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const [sectionRef, isInView] = useInView({ threshold: 0.1 })

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView

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
      ref={sectionRef}
      data-testid="faq-accordion"
      className="py-16 md:py-24 bg-slate-50"
    >
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Heading with text reveal */}
          <h2
            className={`
              text-3xl md:text-4xl font-display font-light text-slate-900 text-center mb-12 tracking-tight
              ${shouldAnimate ? 'animate-text-reveal' : ''}
            `}
            style={{
              animationDelay: shouldAnimate ? '0ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            {heading}
          </h2>

          {/* FAQ Items with staggered entrance */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggleItem(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                shouldAnimate={shouldAnimate}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

// ============================================
// FAQ ITEM SUB-COMPONENT
// With smooth height animation
// ============================================

interface FAQItemProps {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
  onKeyDown: (e: React.KeyboardEvent) => void
  shouldAnimate: boolean
  prefersReducedMotion: boolean
}

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
  onKeyDown,
  shouldAnimate,
  prefersReducedMotion,
}: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)

  // Measure content height for smooth animation
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [answer, isOpen])

  const itemId = `faq-item-${index}`
  const contentId = `faq-content-${index}`

  return (
    <div
      className={`
        bg-white rounded-xl shadow-subtle overflow-hidden
        border border-slate-200
        transition-all duration-300 ease-out
        ${isOpen ? 'shadow-card border-slate-300' : 'hover:border-slate-300 hover:shadow-card'}
        ${shouldAnimate ? 'animate-scale-in' : ''}
      `}
      style={{
        animationDelay: shouldAnimate ? getStaggerDelay(index + 1, 100) : undefined,
        opacity: shouldAnimate ? 0 : 1,
        animationFillMode: 'forwards',
      }}
    >
      {/* Question Button */}
      <button
        id={itemId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        onKeyDown={onKeyDown}
        className={`
          w-full flex items-center justify-between p-6 text-left
          focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-inset
          transition-colors duration-200
          ${isOpen ? 'bg-slate-50' : 'hover:bg-slate-50'}
        `}
      >
        <span className="text-lg font-display font-light text-slate-900 pr-4 tracking-tight">
          {question}
        </span>

        {/* Animated Plus/Minus Icon */}
        <span
          className={`
            flex-shrink-0 w-8 h-8 flex items-center justify-center
            rounded-full bg-slate-100 text-slate-600
            transition-all duration-300 ease-out
            ${isOpen ? 'bg-slate-200 rotate-45' : 'group-hover:bg-slate-200'}
          `}
          aria-hidden="true"
          style={{
            willChange: 'transform',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300"
          >
            <line x1="12" x2="12" y1="5" y2="19" />
            <line x1="5" x2="19" y1="12" y2="12" />
          </svg>
        </span>
      </button>

      {/* Answer Content with smooth height animation */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={itemId}
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          height: isOpen ? `${contentHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          className="px-6 pb-6 text-slate-600 font-light leading-relaxed"
        >
          {answer}
        </div>
      </div>

      {/* Subtle glow effect when open */}
      {isOpen && !prefersReducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none rounded-xl opacity-50"
          style={{
            boxShadow: 'inset 0 0 20px rgba(148, 163, 184, 0.1)',
          }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

FAQAccordion.displayName = 'FAQAccordion'
