import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePage'
import { ServicePageData, FAQPageSchema, ServiceSchema, FeatureIcon } from '@/types/service'

// ============================================
// CONTENT MARKETING SERVICE PAGE
// SPEC-006: Service Pages
// Route: /uslugi/content-marketing
// ============================================

// SEO Metadata
export const metadata: Metadata = {
  title: 'Content Marketing | Visuana - Strategia Tresci',
  description: 'Strategia tresci oparta na danych, nie domyslach. AI-powered keyword research, SEO-optimized content i performance analytics. Wzrost organicznego ruchu o 300%.',
  keywords: ['content marketing', 'strategia tresci', 'SEO content', 'blog firmowy', 'content marketing agencja'],
  openGraph: {
    title: 'Content Marketing | Visuana - Strategia Tresci',
    description: 'Strategia tresci oparta na danych, nie domyslach. Wzrost organicznego ruchu o 300% w 6 miesiecy.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/uslugi/content-marketing',
  },
}

// Service Schema for JSON-LD
const serviceSchema: ServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Content Marketing - Visuana',
  description: 'Profesjonalne uslugi content marketingu oparte na danych. Strategia tresci, SEO content, blog firmowy.',
  provider: {
    '@type': 'Organization',
    name: 'Visuana',
    url: 'https://visuana.pl',
  },
  areaServed: 'Polska',
  serviceType: 'Content Marketing',
}

// FAQ Schema for Google
const faqSchema: FAQPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ile kosztuje content marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ceny uslug content marketingowych zaczynaja sie od 3000 PLN miesiecznie. Ostateczna cena zalezy od zakresu prac, ilosci tresci i zlozonosci branzy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak dlugo trwa, zanim zobacze wyniki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pierwsze mierzalne wyniki pojawiaja sie po 3-6 miesiacach. SEO i content marketing to strategia dlugoterminowa - pelne efekty widoczne sa po 6-12 miesiacach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy tworzycie tresci w jezyku angielskim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, tworzymy tresci zarowno w jezyku polskim jak i angielskim. Wspolpracujemy z native speakerami dla zapewnienia najwyzszej jakosci.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak mierzycie skutecznosc content marketingu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Korzystamy z zaawansowanych narzedzi analitycznych. Mierzymy ruch organiczny, pozycje w Google, czas na stronie, konwersje i ROI. Otrzymujesz miesieczne raporty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy moge zobaczyc przykladowe realizacje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oczywiscie! Na naszej stronie znajdziesz case studies z rzeczywistymi wynikami. Chetnie pokarzemy rowniez dodatkowe realizacje podczas bezplatnej konsultacji.',
      },
    },
  ],
}

// Page Data
const pageData: Omit<ServicePageData, 'title' | 'metaDescription' | 'keywords' | 'schema'> = {
  hero: {
    title: 'Content Marketing, ktory przynosi wyniki',
    subtitle: 'Strategia tresci oparta na danych, nie domyslach. 300% wzrostu organicznego ruchu w 6 miesiecy.',
    ctaPrimaryLabel: 'Bezplatna konsultacja',
    ctaPrimaryHref: '/kontakt',
    ctaSecondaryLabel: 'Zobacz case study',
    ctaSecondaryHref: '#case-study',
    backgroundGradient: 'royal-red',
  },
  problem: {
    heading: 'Czy to brzmi znajomo?',
    painPoints: [
      'Twoj blog nie generuje leadow?',
      'Konkurencja wyprzedza Cie w Google?',
      'Nie wiesz, jakie tresci tworzyc?',
      'Inwestujesz w content, ale nie widzisz ROI?',
    ],
    hookText: 'Jest na to rozwiazanie...',
  },
  solution: {
    heading: 'Jak dzialamy',
    features: [
      {
        icon: 'search' as FeatureIcon,
        title: 'AI-powered keyword research',
        description: 'Wykorzystujemy AI do analizy slow kluczowych i identyfikacji szans na szybki wzrost.',
      },
      {
        icon: 'edit' as FeatureIcon,
        title: 'SEO-optimized content',
        description: 'Tworzymy tresci zoptymalizowane pod wyszukiwarki, ktore przyciagaja ruch organiczny.',
      },
      {
        icon: 'chart' as FeatureIcon,
        title: 'Performance analytics',
        description: 'Mierzymy kazdy aspekt strategii. Dostajesz miesieczne raporty z wynikami.',
      },
      {
        icon: 'share' as FeatureIcon,
        title: 'Content distribution',
        description: 'Strategicznie dystrybuujemy tresci w kanalach, gdzie sa Twoi klienci.',
      },
    ],
  },
  process: {
    heading: 'Jak wyglada wspolpraca',
    steps: [
      {
        number: 1,
        title: 'Konsultacja',
        description: 'Poznajemy Twoj biznes, cele i wyzwania. Analizujemy konkurencje.',
      },
      {
        number: 2,
        title: 'Strategia',
        description: 'Tworzymy plan dzialania oparty na danych. Definiujemy KPI.',
      },
      {
        number: 3,
        title: 'Realizacja',
        description: 'Wdrazamy strategie. Tworzymy i publikujemy tresci.',
      },
      {
        number: 4,
        title: 'Optymalizacja',
        description: 'Mierzymy wyniki. Optymalizujemy na biezaco.',
      },
    ],
  },
  caseStudies: [
    {
      clientName: "L'Oreal Poland",
      industry: 'Beauty & Cosmetics',
      metric: '+180%',
      metricLabel: 'organic traffic',
      description: 'Wzrost ruchu organicznego dzieki kompleksowej strategii content marketingowej obejmujacej blog, social media i SEO.',
      link: '/case-study/loreal',
    },
  ],
  faq: {
    heading: 'Czesto zadawane pytania',
    items: [
      {
        question: 'Ile kosztuje content marketing?',
        answer: 'Ceny uslug content marketingowych zaczynaja sie od 3000 PLN miesiecznie. Ostateczna cena zalezy od zakresu prac, ilosci tresci i zlozonosci branzy. Chetnie przygotujemy indywidualna wycene podczas bezplatnej konsultacji.',
      },
      {
        question: 'Jak dlugo trwa, zanim zobacze wyniki?',
        answer: 'Pierwsze mierzalne wyniki pojawiaja sie po 3-6 miesiacach. SEO i content marketing to strategia dlugoterminowa - pelne efekty widoczne sa po 6-12 miesiacach. Warto pamietac, ze tresci raz stworzone pracuja na Ciebie przez lata.',
      },
      {
        question: 'Czy tworzycie tresci w jezyku angielskim?',
        answer: 'Tak, tworzymy tresci zarowno w jezyku polskim jak i angielskim. Wspolpracujemy z native speakerami dla zapewnienia najwyzszej jakosci jezykowej.',
      },
      {
        question: 'Jak mierzycie skutecznosc content marketingu?',
        answer: 'Korzystamy z zaawansowanych narzedzi analitycznych. Mierzymy ruch organiczny, pozycje w Google, czas na stronie, konwersje i ROI. Otrzymujesz miesieczne raporty z przejrzystymi danymi.',
      },
      {
        question: 'Czy moge zobaczyc przykladowe realizacje?',
        answer: 'Oczywiscie! Na naszej stronie znajdziesz case studies z rzeczywistymi wynikami. Chetnie pokarzemy rowniez dodatkowe realizacje podczas bezplatnej konsultacji.',
      },
    ],
  },
  cta: {
    heading: 'Gotowy na wzrost?',
    description: 'Umow sie na bezplatna konsultacje. Pokarzemy, jak content marketing moze zwiekszy Twoj ruch organiczny.',
    buttonLabel: 'Bezplatna konsultacja',
    buttonHref: '/kontakt',
    variant: 'royal-red',
  },
}

export default function ContentMarketingPage() {
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
