import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePage'
import { ServicePageData, FAQPageSchema, ServiceSchema, FeatureIcon } from '@/types/service'
import { REVALIDATION_CONFIG } from '@/lib/performance/revalidation'

// ============================================
// MARKET RESEARCH ASIA SERVICE PAGE
// SPEC-006: Service Pages
// Route: /uslugi/market-research-azja
// Static Generation
// ============================================

/**
 * Static Generation - SPEC-004 SEO & Analytics
 */
export const revalidate = REVALIDATION_CONFIG.servicePage

// SEO Metadata
export const metadata: Metadata = {
  title: 'Market Research Azja | Visuana - Ekspansja na Rynki Azjatyckie',
  description: '7 lat doswiadczenia w Korei i Azji. Badania rynku, kontakty biznesowe, lokalizacja. Twoj partner do ekspansji na rynki azjatyckie.',
  keywords: ['rynek azjatycki', 'Korea biznes', 'import z Azji', 'ekspansja azja', 'badania rynku azja'],
  openGraph: {
    title: 'Market Research Azja | Visuana - Ekspansja na Rynki Azjatyckie',
    description: '7 lat doswiadczenia w Korei i Azji. Badania rynku, kontakty biznesowe, lokalizacja.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/uslugi/market-research-azja',
  },
}

// Service Schema for JSON-LD
const serviceSchema: ServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Market Research Asia - Visuana',
  description: 'Profesjonalne badania rynku azjatyckiego. Strategia wejscia na rynek koreanski, sourcing dostawcow, lokalizacja kulturowa.',
  provider: {
    '@type': 'Organization',
    name: 'Visuana',
    url: 'https://visuana.pl',
  },
  areaServed: 'Azja',
  serviceType: 'Market Research',
}

// FAQ Schema for Google
const faqSchema: FAQPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Jak dlugo trwa wejscie na rynek koreanski?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proces zalezy od branzy i produktu. Typowo przygotowanie strategii zajmuje 2-3 miesiace, a pierwsze kontrakty mozna podpisac po 6-12 miesiacach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy pomagacie w znalezieniu dostawcow w Azji?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, mamy siec zweryfikowanych dostawcow w Korei, Chinach, Wietnamie i innych krajach azjatyckich. Weryfikujemy ich wiarygodnosc i jakos produkcji.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jakie branże obsługujecie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Specjalizujemy sie w kosmetykach, modzie, elektronice i FMCG. Mamy doswiadczenie rowniez w branzy spozywczej i tech.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy oferujecie tlumaczenia i lokalizacje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, wspolpracujemy z native speakerami koreanskiego, chinskiego i japonskiego. Oferujemy lokalizacje tresci marketingowych i dokumentow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ile kosztuja uslugi ekspansji na Azje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koszty zaleza od zakresu projektu. Audyt rynku zaczyna sie od 10000 PLN, pelna obsluga ekspansji od 50000 PLN. Przygotujemy indywidualna wycene.',
      },
    },
  ],
}

// Page Data
const pageData: Omit<ServicePageData, 'title' | 'metaDescription' | 'keywords' | 'schema'> = {
  hero: {
    title: 'Twoj partner do ekspansji na rynki azjatyckie',
    subtitle: '7 lat doswiadczenia w Korei i Azji. Badania rynku, kontakty biznesowe, lokalizacja.',
    ctaPrimaryLabel: 'Bezplatna konsultacja',
    ctaPrimaryHref: '/kontakt',
    ctaSecondaryLabel: 'Zobacz case study',
    ctaSecondaryHref: '#case-study',
    backgroundGradient: 'dark',
  },
  problem: {
    heading: 'Czy to brzmi znajomo?',
    painPoints: [
      'Chcesz wejsc na rynek azjatycki, ale nie wiesz od czego zaczac?',
      'Boisz sie barier kulturowych i jezykowych?',
      'Szukasz zaufanych dostawcow w Azji?',
      'Nie masz kontaktow biznesowych w regionie?',
    ],
    hookText: 'Jest na to rozwiazanie...',
  },
  solution: {
    heading: 'Jak dzialamy',
    features: [
      {
        icon: 'globe' as FeatureIcon,
        title: 'Korea market entry strategy',
        description: 'Kompleksowa strategia wejscia na rynek koreanski. Od analizy po wdrozenie.',
      },
      {
        icon: 'shield' as FeatureIcon,
        title: 'Supplier sourcing & verification',
        description: 'Znajdziemy i zweryfikujemy dostawcow. Sprawdzimy ich wiarygodnosc i jakosc.',
      },
      {
        icon: 'users' as FeatureIcon,
        title: 'Cultural localization',
        description: 'Dostosujemy Twoja komunikacje do kultury azjatyckiej. Native speakerzy.',
      },
      {
        icon: 'handshake' as FeatureIcon,
        title: 'Business matchmaking',
        description: 'Polaczymy Cie z partnerami biznesowymi. Wykorzystamy nasza siec kontaktow.',
      },
    ],
  },
  process: {
    heading: 'Jak wyglada wspolpraca',
    steps: [
      {
        number: 1,
        title: 'Konsultacja',
        description: 'Poznajemy Twoj produkt i cele. Oceniamy potencjal rynkowy.',
      },
      {
        number: 2,
        title: 'Strategia',
        description: 'Tworzymy plan ekspansji. Identyfikujemy partnerow i kanaly.',
      },
      {
        number: 3,
        title: 'Realizacja',
        description: 'Wdrazamy strategie. Koordynujemy kontakty i negocjacje.',
      },
      {
        number: 4,
        title: 'Optymalizacja',
        description: 'Wsparcie po wejsciu na rynek. Skalowanie dzialan.',
      },
    ],
  },
  caseStudies: [
    {
      clientName: 'Polski E-commerce',
      industry: 'E-commerce / Retail',
      metric: '3x',
      metricLabel: 'revenue growth',
      description: 'Udane wejscie na rynek koreanski. 3-krotny wzrost przychodow w pierwszym roku dzieki strategii ekspansji.',
      link: '/case-study/ecommerce-korea',
    },
  ],
  faq: {
    heading: 'Czesto zadawane pytania',
    items: [
      {
        question: 'Jak dlugo trwa wejscie na rynek koreanski?',
        answer: 'Proces zalezy od branzy i produktu. Typowo przygotowanie strategii zajmuje 2-3 miesiace, a pierwsze kontrakty mozna podpisac po 6-12 miesiacach. Kluczowa jest dokladna analiza rynku i budowanie relacji.',
      },
      {
        question: 'Czy pomagacie w znalezieniu dostawcow w Azji?',
        answer: 'Tak, mamy siec zweryfikowanych dostawcow w Korei, Chinach, Wietnamie i innych krajach azjatyckich. Weryfikujemy ich wiarygodnosc, jakosc produkcji i warunki wspolpracy.',
      },
      {
        question: 'Jakie branże obsługujecie?',
        answer: 'Specjalizujemy sie w kosmetykach, modzie, elektronice i FMCG. Mamy doswiadczenie rowniez w branzy spozywczej i tech. Chetnie porozmawiamy o Twojej branzy.',
      },
      {
        question: 'Czy oferujecie tlumaczenia i lokalizacje?',
        answer: 'Tak, wspolpracujemy z native speakerami koreanskiego, chinskiego i japonskiego. Oferujemy lokalizacje tresci marketingowych, dokumentow i stron internetowych.',
      },
      {
        question: 'Ile kosztuja uslugi ekspansji na Azje?',
        answer: 'Koszty zaleza od zakresu projektu. Audyt rynku zaczyna sie od 10000 PLN, pelna obsluga ekspansji od 50000 PLN. Przygotujemy indywidualna wycene podczas bezplatnej konsultacji.',
      },
    ],
  },
  cta: {
    heading: 'Gotowy na ekspansje do Azji?',
    description: 'Umow sie na bezplatna konsultacje. Ocenimy potencjal Twojego produktu na rynkach azjatyckich.',
    buttonLabel: 'Bezplatna konsultacja',
    buttonHref: '/kontakt',
    variant: 'charcoal',
  },
}

export default function MarketResearchAsiaPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Content */}
      <ServicePageTemplate data={pageData} />
    </>
  )
}
