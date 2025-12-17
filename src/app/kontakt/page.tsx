import type { Metadata } from 'next'
import { Navbar, Footer, Container, Section } from '@/components/layout'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { ContactFAQ } from '@/components/contact/ContactFAQ'
import { ContactTestimonials } from '@/components/contact/ContactTestimonials'
import { JsonLdMultiple } from '@/components/seo/JsonLd'
import { submitContactForm } from './actions'
import {
  ContactHeroContent,
  AnimatedFormCard,
  AnimatedBottomCTA,
} from './components'


// ============================================
// CONTACT PAGE - SPEC-007
// Static Generation - contact info rarely changes
// Server Actions still work with static generation
// ============================================

/**
 * Static Generation - SPEC-004 SEO & Analytics
 * Contact page content is static, form submission is handled by Server Action
 */
export const revalidate = 31536000 // 1 year

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
        {/* Hero Section with Animated Content */}
        <Section bgColor="white" padding="xl">
          <Container>
            <ContactHeroContent />

            {/* Two-column layout: Form + Info */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Left Column - Contact Form (3/5 width) with Animated Card */}
              <div className="lg:col-span-3">
                <AnimatedFormCard>
                  <ContactForm submitAction={submitContactForm} />
                </AnimatedFormCard>
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

        {/* Bottom CTA with Entrance Animations */}
        <Section bgColor="royal-red" padding="lg">
          <AnimatedBottomCTA />
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
