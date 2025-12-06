import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePage'
import { ServicePageData, FAQPageSchema, ServiceSchema, FeatureIcon } from '@/types/service'
import { REVALIDATION_CONFIG } from '@/lib/performance/revalidation'

// ============================================
// INFLUENCER MARKETING SERVICE PAGE
// SPEC-006: Service Pages
// Route: /uslugi/influencer-marketing
// Static Generation
// ============================================

/**
 * Static Generation - SPEC-004 SEO & Analytics
 */
export const revalidate = REVALIDATION_CONFIG.servicePage

// SEO Metadata
export const metadata: Metadata = {
  title: 'Influencer Marketing | Visuana - Kampanie z Influencerami',
  description: 'Kampanie z influencerami, ktore sprzedaja. Doswiadczenie z L\'Oreal, Netflix, HBO. Gwarancja ROI i pelna obsluga od strategii po raportowanie.',
  keywords: ['influencer marketing', 'kampania influencer', 'wspolpraca z influencerami', 'influencer marketing agencja'],
  openGraph: {
    title: 'Influencer Marketing | Visuana - Kampanie z Influencerami',
    description: 'Kampanie z influencerami, ktore sprzedaja. Doswiadczenie z L\'Oreal, Netflix, HBO.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/uslugi/influencer-marketing',
  },
}

// Service Schema for JSON-LD
const serviceSchema: ServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influencer Marketing - Visuana',
  description: 'Profesjonalne kampanie influencer marketingowe. Selekcja influencerow, strategia, realizacja i pomiar ROI.',
  provider: {
    '@type': 'Organization',
    name: 'Visuana',
    url: 'https://visuana.pl',
  },
  areaServed: 'Polska',
  serviceType: 'Influencer Marketing',
}

// FAQ Schema for Google
const faqSchema: FAQPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Jak dobieracie influencerow do kampanii?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Analizujemy dane demograficzne followersow, wskazniki zaangazowania, autentycznosc i dopasowanie do marki. Weryfikujemy konta pod katem fake followers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ile kosztuje kampania z influencerem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Koszty zaleza od zasiegow influencera i zakresu wspolpracy. Kampanie z mikroinfluencerami zaczynaja sie od 5000 PLN, z makroinfluencerami od 20000 PLN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak mierzycie efektywnosc kampanii?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mierzymy zasiegi, zaangazowanie, klikniecia, konwersje i sprzedaz. Dostarczamy szczegolowe raporty z ROI kazdej kampanii.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy zajmujecie sie umowami z influencerami?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, obslugujemy caly proces - od negocjacji warunkow, przez przygotowanie umow, po rozliczenia. Masz jednego partnera do wszystkiego.',
      },
    },
    {
      '@type': 'Question',
      name: 'Z jakimi platformami pracujecie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Realizujemy kampanie na Instagram, TikTok, YouTube, Facebook i LinkedIn. Dobieramy platformy do Twojej grupy docelowej.',
      },
    },
  ],
}

// Page Data
const pageData: Omit<ServicePageData, 'title' | 'metaDescription' | 'keywords' | 'schema'> = {
  hero: {
    title: 'Influencer Marketing z gwarancja ROI',
    subtitle: 'Kampanie z influencerami, ktore sprzedaja. Doswiadczenie z L\'Oreal, Netflix, HBO.',
    ctaPrimaryLabel: 'Bezplatna konsultacja',
    ctaPrimaryHref: '/kontakt',
    ctaSecondaryLabel: 'Zobacz case study',
    ctaSecondaryHref: '#case-study',
    backgroundGradient: 'royal-red',
  },
  problem: {
    heading: 'Czy to brzmi znajomo?',
    painPoints: [
      'Influencerzy nie przynoszą sprzedazy?',
      'Nie wiesz, jak wybrac odpowiednich tworcow?',
      'Kampanie influencer marketing to dla Ciebie czarna magia?',
      'Placisz za zasiegi, ale nie widzisz konwersji?',
    ],
    hookText: 'Jest na to rozwiazanie...',
  },
  solution: {
    heading: 'Jak dzialamy',
    features: [
      {
        icon: 'users' as FeatureIcon,
        title: 'Influencer vetting & verification',
        description: 'Weryfikujemy autentycznosc influencerow. Sprawdzamy real engagement i fake followers.',
      },
      {
        icon: 'target' as FeatureIcon,
        title: 'Campaign strategy & creative',
        description: 'Tworzymy strategie dopasowana do Twoich celow. Nadzorujemy kreacje.',
      },
      {
        icon: 'handshake' as FeatureIcon,
        title: 'Contract negotiation',
        description: 'Negocjujemy warunki i przygotowujemy umowy. Oszczedzasz czas i unikasz ryzyka.',
      },
      {
        icon: 'chart' as FeatureIcon,
        title: 'Performance tracking',
        description: 'Mierzymy kazdy aspekt kampanii. Raportujemy ROI, nie tylko zasiegi.',
      },
    ],
  },
  process: {
    heading: 'Jak wyglada wspolpraca',
    steps: [
      {
        number: 1,
        title: 'Konsultacja',
        description: 'Poznajemy Twoja marke, cele i budzet. Analizujemy rynek.',
      },
      {
        number: 2,
        title: 'Strategia',
        description: 'Dobieramy influencerow. Tworzymy brief i plan kampanii.',
      },
      {
        number: 3,
        title: 'Realizacja',
        description: 'Koordynujemy wspolprace. Nadzorujemy publikacje.',
      },
      {
        number: 4,
        title: 'Optymalizacja',
        description: 'Analizujemy wyniki. Optymalizujemy na biezaco.',
      },
    ],
  },
  caseStudies: [
    {
      clientName: 'Netflix',
      industry: 'Entertainment',
      metric: '500K',
      metricLabel: 'reach',
      description: 'Kampania z Jadzia Kim promujaca nowy serial. Zaangazowanie 8x wyzsze niz benchmark branzy.',
      link: '/case-study/netflix',
    },
  ],
  faq: {
    heading: 'Czesto zadawane pytania',
    items: [
      {
        question: 'Jak dobieracie influencerow do kampanii?',
        answer: 'Analizujemy dane demograficzne followersow, wskazniki zaangazowania, autentycznosc i dopasowanie do marki. Weryfikujemy konta pod katem fake followers. Kazdy influencer przechodzi wieloetapowa weryfikacje.',
      },
      {
        question: 'Ile kosztuje kampania z influencerem?',
        answer: 'Koszty zaleza od zasiegow influencera i zakresu wspolpracy. Kampanie z mikroinfluencerami zaczynaja sie od 5000 PLN, z makroinfluencerami od 20000 PLN. Przygotujemy indywidualna wycene na podstawie Twoich celow.',
      },
      {
        question: 'Jak mierzycie efektywnosc kampanii?',
        answer: 'Mierzymy zasiegi, zaangazowanie, klikniecia, konwersje i sprzedaz. Dostarczamy szczegolowe raporty z ROI kazdej kampanii. Nie placi sie za zasiegi - placi sie za wyniki.',
      },
      {
        question: 'Czy zajmujecie sie umowami z influencerami?',
        answer: 'Tak, obslugujemy caly proces - od negocjacji warunkow, przez przygotowanie umow, po rozliczenia. Masz jednego partnera do wszystkiego.',
      },
      {
        question: 'Z jakimi platformami pracujecie?',
        answer: 'Realizujemy kampanie na Instagram, TikTok, YouTube, Facebook i LinkedIn. Dobieramy platformy do Twojej grupy docelowej i celow kampanii.',
      },
    ],
  },
  cta: {
    heading: 'Gotowy na kampanie, ktora sprzedaje?',
    description: 'Umow sie na bezplatna konsultacje. Pokarzemy, jak influencer marketing moze wzrosnac Twoja sprzedaz.',
    buttonLabel: 'Bezplatna konsultacja',
    buttonHref: '/kontakt',
    variant: 'royal-red',
  },
}

export default function InfluencerMarketingPage() {
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
