import { Navbar, Footer, Section, Grid } from '@/components/layout'
import { HeroLight, CTABox } from '@/components/sections'
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { ArticleCard } from '@/components/cards'
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

        {/* Services Section - Elegant Typography */}
        <Section bgColor="white" padding="xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200 mb-8">
              Nasze usługi
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Co robimy (i robimy to dobrze)
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              Nie jesteśmy kolejną agencją, która obiecuje księżyc. Jesteśmy butikowym zespołem, który dostarcza wyniki.
            </p>
          </div>

          <Grid cols={4} gap="lg">
            {services.map((service) => (
              <Card key={service.title} hoverable>
                <CardHeader>
                  <div className="text-4xl mb-4 opacity-70 transition-opacity duration-300 group-hover:opacity-100">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Section>

        {/* Client Logos Section */}
        <Section bgColor="muted" padding="md">
          <div className="text-center mb-8">
            <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">
              Zaufali nam
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="w-24 md:w-32 h-12 flex items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                title={client.name}
              >
                {/* Placeholder - replace with actual logos */}
                <span className="text-slate-600 font-light text-sm">{client.name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Stats Section - Elegant Light */}
        <Section bgColor="white" padding="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 group cursor-default">
              <p className="font-display text-4xl md:text-5xl font-light text-slate-900 tracking-tight transition-all duration-300 group-hover:scale-105 group-hover:text-slate-700">12+</p>
              <p className="text-slate-500 mt-3 font-light text-sm">Lat doświadczenia</p>
            </div>
            <div className="p-6 group cursor-default border-l border-slate-200">
              <p className="font-display text-4xl md:text-5xl font-light text-slate-900 tracking-tight transition-all duration-300 group-hover:scale-105 group-hover:text-slate-700">150%</p>
              <p className="text-slate-500 mt-3 font-light text-sm">Średni wzrost ROI</p>
            </div>
            <div className="p-6 group cursor-default border-l border-slate-200">
              <p className="font-display text-4xl md:text-5xl font-light text-slate-900 tracking-tight transition-all duration-300 group-hover:scale-105 group-hover:text-slate-700">50+</p>
              <p className="text-slate-500 mt-3 font-light text-sm">Zadowolonych klientów</p>
            </div>
            <div className="p-6 group cursor-default border-l border-slate-200">
              <p className="font-display text-4xl md:text-5xl font-light text-slate-900 tracking-tight transition-all duration-300 group-hover:scale-105 group-hover:text-slate-700">3</p>
              <p className="text-slate-500 mt-3 font-light text-sm">Kraje działania</p>
            </div>
          </div>
        </Section>

        {/* Founder Story Section - Elegant Light */}
        <Section bgColor="muted" padding="xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Founder Image Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="text-6xl text-white font-light">KD</span>
                </div>
              </div>
              {/* Founder Story */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-6 tracking-tight">
                  Cześć, jestem Karol
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4 font-light">
                  12 lat w marketingu. Z czego połowę w Azji - od L&apos;Oréal Korea po Netflix Japan.
                  Widziałem kampanie za miliony dolarów i takie za grosze, które działały lepiej.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                  <strong className="text-slate-900 font-medium">Hot take:</strong> Większość agencji sprzedaje Ci
                  PowerPointy. My dostarczamy wyniki. Dane nie kłamią - i to jest nasze motto.
                </p>
                <Button variant="outline" size="md">
                  Poznaj całą historię
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Latest Articles Section - Elegant Typography */}
        <Section bgColor="white" padding="xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200 mb-8">
              Insights
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Z bloga
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              Praktyczne porady, case studies i hot takes. Zero fluffu, same konkrety.
            </p>
          </div>

          <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="lg">
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                slug={article.slug}
                image={article.image}
              />
            ))}
          </Grid>

          <div className="text-center mt-12">
            <a
              href="/blog"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
            >
              Zobacz wszystkie artykuły
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Section>

        {/* CTA Section - Elegant Dark */}
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
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
              Gotowy na marketing, który ma sens?
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Umów bezpłatną konsultację (45 minut). Bez zobowiązań, bez sprzedaży pod presją. Tylko konkretna analiza Twojej sytuacji.
            </p>
            <a
              href="/kontakt"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Umów konsultację
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
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
