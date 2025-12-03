import { Navbar, Footer, Section, Grid } from '@/components/layout'
import { Hero, CTABox } from '@/components/sections'
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { ArticleCard } from '@/components/cards'

// ============================================
// HOMEPAGE - VISUANA
// Based on SPEC-001 Brand Identity & ToV
// ============================================

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
    slug: '/blog/loreal-korea-case-study',
    image: '/blog/loreal-korea.jpg',
  },
  {
    title: 'AI w marketingu: hype vs rzeczywistość (dane z 2025)',
    excerpt: 'Przeanalizowałem 50 firm. Oto co naprawdę działa, a co to tylko marketing.',
    category: 'AI marketing',
    date: '2025-01-08',
    slug: '/blog/ai-marketing-2025',
    image: '/blog/ai-marketing.jpg',
  },
  {
    title: 'Dlaczego 90% strategii content marketingu nie działa',
    excerpt: 'Hot take: większość firm robi content marketing źle. Oto jak to naprawić.',
    category: 'Content',
    date: '2025-01-05',
    slug: '/blog/content-marketing-bledy',
    image: '/blog/content-marketing.jpg',
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
        {/* Hero Section */}
        <Hero
          title="Marketing, który działa. Dane, które nie kłamią."
          subtitle="Butikowa agencja AI-powered marketingu. Łączymy dane, storytelling i odrobinę humoru, żeby tworzyć kampanie z realnym ROI."
          ctaLabel="Umów bezpłatną konsultację"
          ctaHref="/kontakt"
          secondaryCtaLabel="Zobacz case studies"
          secondaryCtaHref="/case-studies"
        />

        {/* Services Section */}
        <Section bgColor="white" padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-4">
              Co robimy (i robimy to dobrze)
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Nie jesteśmy kolejną agencją, która obiecuje księżyc. Jesteśmy butikowym zespołem, który dostarcza wyniki.
            </p>
          </div>

          <Grid cols={4} gap="lg">
            {services.map((service) => (
              <Card key={service.title} hoverable>
                <CardHeader>
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
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
            <p className="text-sm text-charcoal-500 uppercase tracking-wider font-medium">
              Zaufali nam
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="w-24 md:w-32 h-12 flex items-center justify-center"
                title={client.name}
              >
                {/* Placeholder - replace with actual logos */}
                <span className="text-charcoal-400 font-semibold text-sm">{client.name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Stats Section */}
        <Section bgColor="white" padding="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-royal-red-700">12+</p>
              <p className="text-charcoal-600 mt-2">Lat doświadczenia</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-royal-red-700">150%</p>
              <p className="text-charcoal-600 mt-2">Średni wzrost ROI</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-royal-red-700">50+</p>
              <p className="text-charcoal-600 mt-2">Zadowolonych klientów</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-royal-red-700">3</p>
              <p className="text-charcoal-600 mt-2">Kraje działania</p>
            </div>
          </div>
        </Section>

        {/* Founder Story Section */}
        <Section bgColor="muted" padding="xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Founder Image Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-royal-red-600 to-royal-red-800 shadow-xl flex items-center justify-center">
                  <span className="text-6xl text-white font-bold">KD</span>
                </div>
              </div>
              {/* Founder Story */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal-800 mb-4">
                  Cześć, jestem Karol
                </h2>
                <p className="text-charcoal-600 text-lg leading-relaxed mb-4">
                  12 lat w marketingu. Z czego połowę w Azji - od L&apos;Oréal Korea po Netflix Japan.
                  Widziałem kampanie za miliony dolarów i takie za grosze, które działały lepiej.
                </p>
                <p className="text-charcoal-600 text-lg leading-relaxed mb-6">
                  <strong className="text-charcoal-800">Hot take:</strong> Większość agencji sprzedaje Ci
                  PowerPointy. My dostarczamy wyniki. Dane nie kłamią - i to jest nasze motto.
                </p>
                <Button variant="outline" size="md">
                  Poznaj całą historię →
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Latest Articles Section */}
        <Section bgColor="white" padding="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-4">
              Z bloga
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
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
            <Button variant="outline" size="lg">
              Zobacz wszystkie artykuły →
            </Button>
          </div>
        </Section>

        {/* CTA Section */}
        <Section bgColor="royal-red" padding="lg">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gotowy na marketing, który ma sens?
            </h2>
            <p className="text-lg text-royal-red-100 mb-8 max-w-2xl mx-auto">
              Umów bezpłatną konsultację (45 minut). Bez zobowiązań, bez sprzedaży pod presją. Tylko konkretna analiza Twojej sytuacji.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-royal-red-700"
            >
              Umów konsultację →
            </Button>
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
