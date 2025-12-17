'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { CaseStudyCardProps } from '@/types/service'
import { Card, CardContent } from '@/components/ui/card'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// CASE STUDY CARD COMPONENT
// Based on SPEC-006 Service Pages
// Enhanced with 60fps microinteractions
// ============================================

interface EnhancedCaseStudyCardProps extends CaseStudyCardProps {
  /** Index for staggered animations */
  index?: number
  /** Disable entrance animations */
  disableAnimations?: boolean
}

export function CaseStudyCard({
  clientName,
  industry,
  metric,
  metricLabel,
  description,
  link,
  logo,
  index = 0,
  disableAnimations = false,
}: EnhancedCaseStudyCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const [cardRef, isInView] = useInView({ threshold: 0.3 })
  const [displayMetric, setDisplayMetric] = useState(metric)
  const animationTriggered = useRef(false)

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView

  // Animate numeric metrics with counter effect
  useEffect(() => {
    if (!shouldAnimate || animationTriggered.current) return

    // Check if metric contains a number to animate
    const numericMatch = metric.match(/^(\+)?(\d+(?:,\d+)*(?:\.\d+)?)(.*?)$/)
    if (!numericMatch) return

    animationTriggered.current = true
    const prefix = numericMatch[1] || ''
    const targetNum = parseFloat(numericMatch[2].replace(/,/g, ''))
    const suffix = numericMatch[3] || ''
    const hasCommas = numericMatch[2].includes(',')

    const duration = 1500 // 1.5 seconds
    const steps = 40
    const increment = targetNum / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, targetNum)

      // Format with commas if original had them
      const formatted = hasCommas
        ? Math.round(current).toLocaleString('pl-PL')
        : Number.isInteger(targetNum)
          ? Math.round(current).toString()
          : current.toFixed(1)

      setDisplayMetric(`${prefix}${formatted}${suffix}`)

      if (step >= steps) {
        clearInterval(timer)
        setDisplayMetric(metric) // Ensure exact final value
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [shouldAnimate, metric])

  return (
    <div
      ref={cardRef}
      className={`
        ${shouldAnimate ? 'animate-scale-in' : ''}
      `}
      style={{
        animationDelay: shouldAnimate ? getStaggerDelay(index, 150) : undefined,
        opacity: shouldAnimate ? 0 : 1,
        animationFillMode: 'forwards',
      }}
    >
      <Card
        data-testid="case-study-card"
        hoverable
        className="overflow-hidden group"
      >
        <CardContent className="p-0">
          {/* Top Section - Metric Highlight with shimmer */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center overflow-hidden">
            {/* Shimmer effect on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
              aria-hidden="true"
            />

            {/* Animated gradient orb */}
            <div
              className="absolute w-[200px] h-[200px] rounded-full opacity-20 blur-[60px] top-[-50%] right-[-20%] animate-glow-pulse"
              style={{
                background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            {/* Large Metric with counter animation */}
            <div
              className={`
                relative z-10 text-4xl md:text-5xl font-display font-light text-white mb-2 tracking-tight
                ${shouldAnimate ? 'animate-text-reveal' : ''}
              `}
              style={{
                animationDelay: shouldAnimate ? `${(index * 150) + 100}ms` : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              {displayMetric}
            </div>
            <div
              className={`
                relative z-10 text-slate-400 text-sm uppercase tracking-wider font-light
                ${shouldAnimate ? 'animate-text-reveal' : ''}
              `}
              style={{
                animationDelay: shouldAnimate ? `${(index * 150) + 200}ms` : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              {metricLabel}
            </div>
          </div>

          {/* Bottom Section - Client Info */}
          <div className="p-6">
            {/* Client Logo or Name */}
            <div
              className={`
                mb-4
                ${shouldAnimate ? 'animate-text-reveal' : ''}
              `}
              style={{
                animationDelay: shouldAnimate ? `${(index * 150) + 300}ms` : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              {logo ? (
                <img
                  src={logo}
                  alt={`${clientName} logo`}
                  className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="text-lg font-display font-light text-slate-900 tracking-tight">
                  {clientName}
                </span>
              )}
            </div>

            {/* Industry Tag */}
            <div
              className={`
                inline-block px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600 mb-4
                transition-colors duration-200 group-hover:bg-slate-200
                ${shouldAnimate ? 'animate-scale-in' : ''}
              `}
              style={{
                animationDelay: shouldAnimate ? `${(index * 150) + 350}ms` : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              {industry}
            </div>

            {/* Description */}
            <p
              className={`
                text-slate-600 font-light leading-relaxed mb-4 line-clamp-3
                ${shouldAnimate ? 'animate-text-reveal' : ''}
              `}
              style={{
                animationDelay: shouldAnimate ? `${(index * 150) + 400}ms` : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              {description}
            </p>

            {/* Link to full case study */}
            <Link
              href={link}
              className={`
                group/link inline-flex items-center gap-2 text-slate-700 font-medium
                hover:text-slate-900 transition-colors duration-200
                ${shouldAnimate ? 'animate-text-reveal' : ''}
              `}
              style={{
                animationDelay: shouldAnimate ? `${(index * 150) + 450}ms` : undefined,
                opacity: shouldAnimate ? 0 : 1,
                animationFillMode: 'forwards',
              }}
            >
              Zobacz case study
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
                aria-hidden="true"
                className="transition-transform duration-200 group-hover/link:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

CaseStudyCard.displayName = 'CaseStudyCard'
