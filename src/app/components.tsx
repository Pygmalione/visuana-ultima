'use client'

import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'
import { Grid } from '@/components/layout'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { ArticleCard } from '@/components/cards'

// ============================================
// HOMEPAGE ANIMATED COMPONENTS
// Client-side wrappers with scroll-triggered animations
// ============================================

// ============================================
// ANIMATED SERVICES SECTION
// ============================================

interface Service {
  title: string
  description: string
  icon: string
}

interface AnimatedServicesSectionProps {
  services: Service[]
}

export function AnimatedServicesSection({ services }: AnimatedServicesSectionProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref}>
      {/* Section Header */}
      <div className="text-center mb-16">
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200 mb-8 ${shouldAnimate ? 'animate-scale-in' : ''}`}
          style={{
            animationDelay: shouldAnimate ? '0ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          Nasze usługi
        </span>
        <h2
          className={`font-display text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight ${shouldAnimate ? 'animate-text-reveal' : ''}`}
          style={{
            animationDelay: shouldAnimate ? '100ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          Co robimy (i robimy to dobrze)
        </h2>
        <p
          className={`text-lg text-slate-500 max-w-2xl mx-auto font-light ${shouldAnimate ? 'animate-text-reveal' : ''}`}
          style={{
            animationDelay: shouldAnimate ? '200ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          Nie jesteśmy kolejną agencją, która obiecuje księżyc. Jesteśmy butikowym zespołem, który dostarcza wyniki.
        </p>
      </div>

      {/* Services Grid with Staggered Cards */}
      <Grid cols={4} gap="lg">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={shouldAnimate ? 'animate-scale-in' : ''}
            style={{
              animationDelay: shouldAnimate ? getStaggerDelay(index, 100) : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            <Card hoverable>
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
          </div>
        ))}
      </Grid>
    </div>
  )
}

// ============================================
// ANIMATED CLIENT LOGOS SECTION
// ============================================

interface ClientLogo {
  name: string
  logo: string
}

interface AnimatedClientLogosProps {
  logos: ClientLogo[]
}

export function AnimatedClientLogos({ logos }: AnimatedClientLogosProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.3 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref}>
      <div
        className={`text-center mb-8 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">
          Zaufali nam
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logos.map((client, index) => (
          <div
            key={client.name}
            className={`w-24 md:w-32 h-12 flex items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${shouldAnimate ? 'animate-scale-in' : ''}`}
            title={client.name}
            style={{
              animationDelay: shouldAnimate ? getStaggerDelay(index, 80) : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            <span className="text-slate-600 font-light text-sm">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// ANIMATED STATS SECTION
// ============================================

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '12+', label: 'Lat doświadczenia' },
  { value: '150%', label: 'Średni wzrost ROI' },
  { value: '50+', label: 'Zadowolonych klientów' },
  { value: '3', label: 'Kraje działania' },
]

export function AnimatedStatsSection() {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.3 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`p-6 group cursor-default ${index > 0 ? 'border-l border-slate-200' : ''} ${shouldAnimate ? 'animate-scale-in' : ''}`}
          style={{
            animationDelay: shouldAnimate ? getStaggerDelay(index, 100) : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          <p className="font-display text-4xl md:text-5xl font-light text-slate-900 tracking-tight transition-all duration-300 group-hover:scale-105 group-hover:text-slate-700">
            {stat.value}
          </p>
          <p className="text-slate-500 mt-3 font-light text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

// ============================================
// ANIMATED FOUNDER STORY SECTION
// ============================================

export function AnimatedFounderStory() {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Founder Image */}
        <div
          className={`flex-shrink-0 ${shouldAnimate ? 'animate-scale-in' : ''}`}
          style={{
            animationDelay: shouldAnimate ? '0ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="text-6xl text-white font-light">KD</span>
          </div>
        </div>

        {/* Founder Story */}
        <div className="flex-1 text-center md:text-left">
          <h2
            className={`font-display text-2xl md:text-3xl lg:text-4xl font-light text-slate-900 mb-6 tracking-tight ${shouldAnimate ? 'animate-text-reveal' : ''}`}
            style={{
              animationDelay: shouldAnimate ? '100ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            Cześć, jestem Karol
          </h2>
          <p
            className={`text-slate-600 text-lg leading-relaxed mb-4 font-light ${shouldAnimate ? 'animate-text-reveal' : ''}`}
            style={{
              animationDelay: shouldAnimate ? '200ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            12 lat w marketingu. Z czego połowę w Azji - od L&apos;Oréal Korea po Netflix Japan.
            Widziałem kampanie za miliony dolarów i takie za grosze, które działały lepiej.
          </p>
          <p
            className={`text-slate-600 text-lg leading-relaxed mb-8 font-light ${shouldAnimate ? 'animate-text-reveal' : ''}`}
            style={{
              animationDelay: shouldAnimate ? '300ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            <strong className="text-slate-900 font-medium">Hot take:</strong> Większość agencji sprzedaje Ci
            PowerPointy. My dostarczamy wyniki. Dane nie kłamią - i to jest nasze motto.
          </p>
          <div
            className={shouldAnimate ? 'animate-scale-in' : ''}
            style={{
              animationDelay: shouldAnimate ? '400ms' : undefined,
              opacity: shouldAnimate ? 0 : 1,
              animationFillMode: 'forwards',
            }}
          >
            <a
              href="/o-nas"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Poznaj całą historię
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// ANIMATED ARTICLES SECTION
// ============================================

interface Article {
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
  image: string
}

interface AnimatedArticlesSectionProps {
  articles: Article[]
}

export function AnimatedArticlesSection({ articles }: AnimatedArticlesSectionProps) {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref}>
      {/* Section Header */}
      <div className="text-center mb-16">
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-slate-600 bg-slate-100 border border-slate-200 mb-8 ${shouldAnimate ? 'animate-scale-in' : ''}`}
          style={{
            animationDelay: shouldAnimate ? '0ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          Insights
        </span>
        <h2
          className={`font-display text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight ${shouldAnimate ? 'animate-text-reveal' : ''}`}
          style={{
            animationDelay: shouldAnimate ? '100ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          Z bloga
        </h2>
        <p
          className={`text-lg text-slate-500 max-w-2xl mx-auto font-light ${shouldAnimate ? 'animate-text-reveal' : ''}`}
          style={{
            animationDelay: shouldAnimate ? '200ms' : undefined,
            opacity: shouldAnimate ? 0 : 1,
            animationFillMode: 'forwards',
          }}
        >
          Praktyczne porady, case studies i hot takes. Zero fluffu, same konkrety.
        </p>
      </div>

      {/* Articles Grid */}
      <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="lg">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            excerpt={article.excerpt}
            category={article.category}
            date={article.date}
            slug={article.slug}
            image={article.image}
            index={index}
          />
        ))}
      </Grid>

      {/* View All Link */}
      <div
        className={`text-center mt-12 ${shouldAnimate ? 'animate-scale-in' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '500ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
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
    </div>
  )
}

// ============================================
// ANIMATED BOTTOM CTA SECTION
// ============================================

export function AnimatedHomeCTA() {
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const shouldAnimate = !prefersReducedMotion && isInView

  return (
    <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '0ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Gotowy na marketing, który ma sens?
      </h2>
      <p
        className={`text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '100ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Umów bezpłatną konsultację (45 minut). Bez zobowiązań, bez sprzedaży pod presją. Tylko konkretna analiza Twojej sytuacji.
      </p>
      <a
        href="/kontakt"
        className={`group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${shouldAnimate ? 'animate-scale-in' : ''}`}
        style={{
          animationDelay: shouldAnimate ? '200ms' : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Umów konsultację
        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  )
}
