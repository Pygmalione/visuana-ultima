import { Navbar, Footer, Section, Grid } from '@/components/layout'
import { Hero } from '@/components/sections'
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'

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
      { label: 'Content Marketing', href: '/uslugi/content-marketing' },
      { label: 'Influencer Marketing', href: '/uslugi/influencer-marketing' },
      { label: 'AI Analytics', href: '/uslugi/ai-analytics' },
      { label: 'Strategia Digital', href: '/uslugi/strategia-digital' },
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
    title: 'Content Marketing',
    description: 'Strategia treści oparta na danych. Blog, newsletter, social media - wszystko z jasnym ROI.',
    icon: '📝',
  },
  {
    title: 'Influencer Marketing',
    description: 'Weryfikacja influencerów przez AI. Bez fake followersów, z realnymi wynikami.',
    icon: '🎯',
  },
  {
    title: 'AI Analytics',
    description: 'Dashboardy, które rozumiesz. Metryki, które mają znaczenie. Decyzje oparte na faktach.',
    icon: '📊',
  },
  {
    title: 'Strategia Digital',
    description: 'Od audytu po egzekucję. Holistyczne podejście do marketingu online.',
    icon: '🚀',
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

        {/* Social Proof / Stats Section */}
        <Section bgColor="muted" padding="lg">
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
