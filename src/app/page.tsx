import { Navbar, Footer, Section } from '@/components/layout'
import { HeroLight } from '@/components/sections'
import {
  AnimatedServicesSection,
  AnimatedClientLogos,
  AnimatedStatsSection,
  AnimatedFounderStory,
  AnimatedArticlesSection,
  AnimatedHomeCTA,
} from './components'

// ============================================
// HOMEPAGE - VISUANA
// Based on SPEC-001 Brand Identity & ToV
// ISR: Revalidate every 12 hours
// ============================================

/**
 * ISR Configuration - SPEC-004 SEO & Analytics
 * Revalidate homepage every 12 hours to update stats and featured content
 */
export const revalidate = 43200 // 12 hours

const navItems = [
  { label: 'Usługi', href: '/uslugi' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'O nas', href: '/o-nas' },
]

const footerColumns = [
  {
    title: 'Usługi',
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
      { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    ],
  },
]

const socialLinks = [
  { platform: 'linkedin' as const, href: 'https://linkedin.com/company/visuana' },
  { platform: 'twitter' as const, href: 'https://twitter.com/visuana' },
  { platform: 'instagram' as const, href: 'https://instagram.com/visuana' },
]

const services = [
  {
    title: 'Content marketing',
    description: 'Strategia treści oparta na danych. Blog, newsletter, social media - wszystko z jasnym ROI.',
    icon: '📝',
  },
  {
    title: 'Influencer marketing',
    description: 'Weryfikacja influencerów przez AI. Bez fake followersów, z realnymi wynikami.',
    icon: '🎯',
  },
  {
    title: 'AI analytics',
    description: 'Dashboardy, które rozumiesz. Metryki, które mają znaczenie. Decyzje oparte na faktach.',
    icon: '📊',
  },
  {
    title: 'Strategia digital',
    description: 'Od audytu po egzekucję. Holistyczne podejście do marketingu online.',
    icon: '🚀',
  },
]

const clientLogos = [
  { name: "L'Oréal", logo: '/logos/loreal.svg' },
  { name: 'Netflix', logo: '/logos/netflix.svg' },
  { name: 'Samsung', logo: '/logos/samsung.svg' },
  { name: 'Coca-Cola', logo: '/logos/coca-cola.svg' },
  { name: 'Allegro', logo: '/logos/allegro.svg' },
]

const latestArticles = [
  {
    title: 'Jak L\'Oréal Korea osiągnęła 300% wzrostu w social media',
    excerpt: 'Case study z mojego doświadczenia w Korei. Konkretne taktyki, które możesz zastosować od dziś.',
    category: 'Case study',
    date: '2025-01-10',
    slug: 'loreal-korea-case-study',
    image: '/images/blog/loreal-korea.jpg',
  },
  {
    title: 'AI w marketingu: hype vs rzeczywistość (dane z 2025)',
    excerpt: 'Przeanalizowałem 50 firm. Oto co naprawdę działa, a co to tylko marketing.',
    category: 'AI marketing',
    date: '2025-01-08',
    slug: 'ai-marketing-2025',
    image: '/images/blog/ai-marketing.jpg',
  },
  {
    title: 'Dlaczego 90% strategii content marketingu nie działa',
    excerpt: 'Hot take: większość firm robi content marketing źle. Oto jak to naprawić.',
    category: 'Content',
    date: '2025-01-05',
    slug: 'content-marketing-bledy',
    image: '/images/blog/content-marketing.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <Navbar
        navItems={navItems}
        ctaLabel="Umów konsultację"
        ctaHref="/kontakt"
      />

      <main id="main-content">
        {/* Hero Section - McKinsey-style Light Theme */}
        <HeroLight
          badge="AI-Powered Marketing Agency"
          title="Marketing, który działa. Dane, które nie kłamią."
          subtitle="Butikowa agencja AI-powered marketingu. Łączymy dane, storytelling i odrobinę humoru, żeby tworzyć kampanie z realnym ROI."
          ctaLabel="Umów bezpłatną konsultację"
          ctaHref="/kontakt"
          secondaryCtaLabel="Zobacz case studies"
          secondaryCtaHref="/case-studies"
        />

        {/* Services Section - with Scroll-Triggered Animations */}
        <Section bgColor="white" padding="xl">
          <AnimatedServicesSection services={services} />
        </Section>

        {/* Client Logos Section - with Staggered Entrance */}
        <Section bgColor="muted" padding="md">
          <AnimatedClientLogos logos={clientLogos} />
        </Section>

        {/* Stats Section - with Staggered Entrance */}
        <Section bgColor="white" padding="lg">
          <AnimatedStatsSection />
        </Section>

        {/* Founder Story Section - with Scroll-Triggered Animations */}
        <Section bgColor="muted" padding="xl">
          <AnimatedFounderStory />
        </Section>

        {/* Latest Articles Section - with Staggered Animations */}
        <Section bgColor="white" padding="xl">
          <AnimatedArticlesSection articles={latestArticles} />
        </Section>

        {/* CTA Section - Elegant Dark with Animated Content */}
        <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
          {/* Subtle gradient orbs */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] animate-pulse-slow"
              style={{
                background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
                top: '-20%',
                right: '10%',
              }}
            />
            <div
              className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] animate-pulse-slow"
              style={{
                background: 'radial-gradient(circle, #1e40af 0%, transparent 70%)',
                bottom: '-15%',
                left: '5%',
                animationDelay: '1s',
              }}
            />
          </div>
          <AnimatedHomeCTA />
        </section>
      </main>

      {/* Footer */}
      <Footer
        columns={footerColumns}
        socialLinks={socialLinks}
      />
    </>
  )
}
