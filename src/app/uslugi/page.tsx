import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layout/container'


// ============================================
// SERVICE LIST PAGE
// SPEC-006: Service Pages - Phase 6
// Route: /uslugi
// Static Generation - service info rarely changes
// ============================================

/**
 * Static Generation - SPEC-004 SEO & Analytics
 * Service pages content is static
 */
export const revalidate = 31536000 // 1 year

// SEO Metadata
export const metadata: Metadata = {
  title: 'Uslugi | Visuana - Marketing, Influencerzy, Azja, AI',
  description: 'Kompleksowe wsparcie marketingowe dla Twojego biznesu. Content marketing, influencer marketing, ekspansja na rynki azjatyckie i AI w marketingu.',
  keywords: ['uslugi marketingowe', 'content marketing', 'influencer marketing', 'market research azja', 'AI marketing'],
  openGraph: {
    title: 'Uslugi | Visuana - Marketing, Influencerzy, Azja, AI',
    description: 'Kompleksowe wsparcie marketingowe dla Twojego biznesu. Content marketing, influencer marketing, ekspansja na rynki azjatyckie i AI w marketingu.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/uslugi',
  },
}

// Organization Schema with services for JSON-LD
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Visuana',
  url: 'https://visuana.pl',
  description: 'Butikowa agencja doradztwa specjalizujaca sie w Digital Marketing, Content Marketing, Influencer Marketing oraz AI-powered analytics.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Uslugi marketingowe',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Content Marketing',
          description: 'Strategia tresci oparta na danych. AI-powered keyword research, SEO-optimized content.',
          url: 'https://visuana.pl/uslugi/content-marketing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Influencer Marketing',
          description: 'Kampanie z influencerami z gwarancja ROI. Doswiadczenie z L\'Oreal, Netflix, HBO.',
          url: 'https://visuana.pl/uslugi/influencer-marketing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Market Research Azja',
          description: '7 lat doswiadczenia w Korei i Azji. Badania rynku, kontakty biznesowe, lokalizacja.',
          url: 'https://visuana.pl/uslugi/market-research-azja',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Agents & Automatyzacja',
          description: 'AI w marketingu. Automatyzacja rutynowych zadan. Oszczednosc 40% kosztow.',
          url: 'https://visuana.pl/uslugi/ai-agents',
        },
      },
    ],
  },
}

// Service data
const services = [
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description: 'Strategia tresci oparta na danych, nie domyslach. AI-powered keyword research, SEO-optimized content i performance analytics.',
    metric: '+300%',
    metricLabel: 'wzrostu ruchu',
    href: '/uslugi/content-marketing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    description: 'Kampanie z influencerami, ktore sprzedaja. Weryfikacja tworcow, strategia, realizacja i pomiar ROI.',
    metric: '500K',
    metricLabel: 'zasiegu',
    href: '/uslugi/influencer-marketing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'market-research-azja',
    title: 'Market Research Azja',
    description: '7 lat doswiadczenia w Korei i Azji. Badania rynku, kontakty biznesowe, lokalizacja kulturowa.',
    metric: '3x',
    metricLabel: 'wzrostu przychodow',
    href: '/uslugi/market-research-azja',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'ai-agents',
    title: 'AI Agents & Automatyzacja',
    description: 'AI w marketingu to nie przyszlosc. To terazniejszosc. Automatyzacja rutynowych zadan, oszczednosc 40% kosztow.',
    metric: '40%',
    metricLabel: 'oszczednosci',
    href: '/uslugi/ai-agents',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function ServiceListPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-charcoal-900 to-charcoal-800">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Nasze uslugi
              </h1>
              <p className="text-lg md:text-xl text-charcoal-300">
                Kompleksowe wsparcie marketingowe dla Twojego biznesu
              </p>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  aria-label={service.title}
                  className="group block"
                >
                  <article
                    data-testid="service-list-card"
                    className="h-full p-6 md:p-8 bg-white rounded-xl border border-charcoal-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div
                      aria-hidden="true"
                      className="w-14 h-14 mb-6 flex items-center justify-center rounded-lg bg-royal-red-50 text-royal-red-700 transition-colors duration-200 group-hover:bg-royal-red-100"
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-charcoal-800 mb-3 group-hover:text-royal-red-700 transition-colors duration-200">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-charcoal-600 mb-6">
                      {service.description}
                    </p>

                    {/* Metric */}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl md:text-4xl font-bold text-royal-red-700">
                        {service.metric}
                      </span>
                      <span className="text-charcoal-500 text-sm">
                        {service.metricLabel}
                      </span>
                    </div>

                    {/* Link indicator */}
                    <div className="flex items-center gap-2 text-royal-red-700 font-semibold">
                      <span>Dowiedz sie wiecej</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section
          data-testid="service-list-cta"
          className="py-16 md:py-24 bg-royal-red-700"
        >
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nie wiesz, ktora usluga wybrac?
              </h2>
              <p className="text-lg md:text-xl text-royal-red-100 mb-8">
                Umow sie na bezplatna konsultacje. Pomozemy dobrac rozwiazania do Twoich potrzeb i budzetow.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-royal-red-700 rounded-md shadow-button hover:shadow-button-hover hover:bg-charcoal-100 transition-all duration-200 hover:-translate-y-0.5"
              >
                Bezplatna konsultacja
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
