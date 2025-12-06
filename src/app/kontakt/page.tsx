import type { Metadata } from 'next'
import { Navbar, Footer, Container, Section } from '@/components/layout'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { ContactFAQ } from '@/components/contact/ContactFAQ'
import { ContactTestimonials } from '@/components/contact/ContactTestimonials'
import { JsonLdMultiple } from '@/components/seo/JsonLd'
import { submitContactForm } from './actions'

// ============================================
// CONTACT PAGE - SPEC-007
// ============================================

// Navigation items (same as homepage for consistency)
const navItems = [
  { label: 'Uslugi', href: '/uslugi' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'O nas', href: '/o-nas' },
  { label: 'Kontakt', href: '/kontakt', active: true },
]

const footerColumns = [
  {
    title: 'Uslugi',
    links: [
      { label: 'Content marketing', href: '/uslugi/content-marketing' },
      { label: 'Influencer marketing', href: '/uslugi/influencer-marketing' },
      { label: 'AI analytics', href: '/uslugi/ai-analytics' },
      { label: 'Strategia digital', href: '/uslugi/strategia-digital' },
    ],
  },
  {
    title: 'Zasoby',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Podcast', href: '/podcast' },
      { label: 'Raporty', href: '/raporty' },
    ],
  },
  {
    title: 'Firma',
    links: [
      { label: 'O nas', href: '/o-nas' },
      { label: 'Kariera', href: '/kariera' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Polityka prywatnosci', href: '/polityka-prywatnosci' },
    ],
  },
]

const socialLinks = [
  { platform: 'linkedin' as const, href: 'https://linkedin.com/company/visuana' },
  { platform: 'twitter' as const, href: 'https://twitter.com/visuana' },
  { platform: 'instagram' as const, href: 'https://instagram.com/visuana' },
]

// ============================================
// METADATA - SEO
// ============================================

export const metadata: Metadata = {
  title: 'Kontakt | Visuana Ultima - Marketing AI-Powered',
  description: 'Skontaktuj sie z Visuana Ultima. Bezplatna konsultacja 15 minut. Content marketing, influencer marketing, AI w marketingu.',
  keywords: ['kontakt', 'konsultacja marketingowa', 'visuana', 'marketing AI', 'content marketing'],
  openGraph: {
    title: 'Kontakt | Visuana Ultima',
    description: 'Skontaktuj sie z Visuana Ultima. Bezplatna konsultacja 15 minut. Zero zobowiazan.',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Visuana',
    url: 'https://visuana.pl/kontakt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt | Visuana Ultima',
    description: 'Skontaktuj sie z Visuana Ultima. Bezplatna konsultacja marketingowa.',
  },
  alternates: {
    canonical: 'https://visuana.pl/kontakt',
  },
}

// ============================================
// JSON-LD SCHEMAS
// ============================================

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontakt - Visuana Ultima',
  description: 'Strona kontaktowa Visuana Ultima. Formularz kontaktowy i informacje o firmie.',
  url: 'https://visuana.pl/kontakt',
  mainEntity: {
    '@type': 'Organization',
    name: 'Visuana Ultima',
    email: 'karol@visuana.pl',
    url: 'https://visuana.pl',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'karol@visuana.pl',
      availableLanguage: ['Polish', 'English'],
    },
  },
}

const faqSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Jak szybko odpowiadacie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Odpowiadamy w ciagu 24 godzin w dni robocze. W pilnych sprawach mozesz tez napisac bezposrednio na karol@visuana.pl.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ile kosztuje konsultacja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pierwsza konsultacja (15 minut) jest calkowicie bezplatna. To okazja, zebysmy poznali Twoje potrzeby i sprawdzili, czy mozemy pomoc.',
      },
    },
    {
      '@type': 'Question',
      name: 'Z jakimi firmami pracujecie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pracujemy z JDG, MSP i startupami. Specjalizujemy sie w content marketingu, influencer marketingu, AI w marketingu oraz market research Azja.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy pracujecie z firmami zagranicznymi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak! Mamy szczegolne doswiadczenie w rynkach azjatyckich (Japonia, Korea, Chiny). Obslugujemy klientow po polsku i angielsku.',
      },
    },
  ],
}

// ============================================
// PAGE COMPONENT
// ============================================

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLdMultiple schemas={[contactPageSchema, faqSchemaData]} />

      {/* Navigation */}
      <Navbar
        navItems={navItems}
        ctaLabel="Kontakt"
        ctaHref="/kontakt"
      />

      <main id="main-content">
        {/* Hero Section */}
        <Section bgColor="white" padding="xl">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-800 mb-4 sm:mb-6">
                Porozmawiajmy o Twoim projekcie
              </h1>
              <p className="text-lg sm:text-xl text-charcoal-600 leading-relaxed">
                Bezplatna konsultacja 15 minut. Zero zobowiazan. Konkrety.
              </p>
            </div>

            {/* Two-column layout: Form + Info */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Left Column - Contact Form (3/5 width) */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-card p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-charcoal-800 mb-6">
                    Zostaw wiadomosc
                  </h2>
                  <ContactForm submitAction={submitContactForm} />
                </div>
              </div>

              {/* Right Column - Contact Info (2/5 width) */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <ContactFAQ />

        {/* Testimonials Section */}
        <ContactTestimonials />

        {/* Bottom CTA */}
        <Section bgColor="royal-red" padding="lg">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Wolisz rozmowe telefoniczna?
            </h2>
            <p className="text-lg text-royal-red-100 mb-6 max-w-2xl mx-auto">
              Napisz na{' '}
              <a
                href="mailto:karol@visuana.pl"
                className="underline hover:text-white transition-colors"
              >
                karol@visuana.pl
              </a>
              {' '}a umowimy sie na krotka rozmowe.
            </p>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <Footer
        columns={footerColumns}
        socialLinks={socialLinks}
      />
    </>
  )
}
