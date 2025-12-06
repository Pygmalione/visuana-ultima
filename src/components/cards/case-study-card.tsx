'use client'

import Link from 'next/link'
import { CaseStudyCardProps } from '@/types/service'
import { Card, CardContent } from '@/components/ui/card'

// ============================================
// CASE STUDY CARD COMPONENT
// Based on SPEC-006 Service Pages
// Displays client success story with key metric
// ============================================

export function CaseStudyCard({
  clientName,
  industry,
  metric,
  metricLabel,
  description,
  link,
  logo,
}: CaseStudyCardProps) {
  return (
    <Card
      data-testid="case-study-card"
      hoverable
      className="overflow-hidden"
    >
      <CardContent className="p-0">
        {/* Top Section - Metric Highlight */}
        <div className="bg-gradient-to-br from-royal-red-700 to-royal-red-800 p-6 text-center">
          {/* Large Metric */}
          <div className="text-4xl md:text-5xl font-bold text-white mb-2">
            {metric}
          </div>
          <div className="text-royal-red-100 text-sm uppercase tracking-wide">
            {metricLabel}
          </div>
        </div>

        {/* Bottom Section - Client Info */}
        <div className="p-6">
          {/* Client Logo Placeholder */}
          {logo ? (
            <div className="mb-4">
              <img
                src={logo}
                alt={`${clientName} logo`}
                className="h-8 object-contain"
              />
            </div>
          ) : (
            <div className="h-8 mb-4 flex items-center">
              <span className="text-lg font-semibold text-charcoal-800">
                {clientName}
              </span>
            </div>
          )}

          {/* Industry Tag */}
          <div className="inline-block px-3 py-1 bg-charcoal-100 rounded-full text-xs text-charcoal-600 mb-4">
            {industry}
          </div>

          {/* Description */}
          <p className="text-charcoal-600 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Link to full case study */}
          <Link
            href={link}
            className="inline-flex items-center gap-2 text-royal-red-700 font-semibold hover:text-royal-red-800 transition-colors"
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
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

CaseStudyCard.displayName = 'CaseStudyCard'
