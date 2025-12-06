import { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/templates/ServicePage'
import { ServicePageData, FAQPageSchema, ServiceSchema, FeatureIcon } from '@/types/service'

// ============================================
// AI AGENTS & AUTOMATION SERVICE PAGE
// SPEC-006: Service Pages
// Route: /uslugi/ai-agents
// ============================================

// SEO Metadata
export const metadata: Metadata = {
  title: 'AI Agents & Automatyzacja | Visuana - AI w Marketingu',
  description: 'AI w marketingu to nie przyszlosc. To terazniejszosc. Automatyzacja rutynowych zadan. Oszczednosc 40% kosztow. Zero kompromisow na jakosci.',
  keywords: ['AI marketing', 'automatyzacja marketingu', 'AI agenci', 'marketing automation', 'AI content'],
  openGraph: {
    title: 'AI Agents & Automatyzacja | Visuana - AI w Marketingu',
    description: 'Automatyzacja rutynowych zadan. Oszczednosc 40% kosztow. Zero kompromisow na jakosci.',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://visuana.pl/uslugi/ai-agents',
  },
}

// Service Schema for JSON-LD
const serviceSchema: ServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agents & Automatyzacja - Visuana',
  description: 'Wdrazanie AI w marketingu. Automatyzacja procesow, generowanie tresci z human oversight, chatboty i predictive analytics.',
  provider: {
    '@type': 'Organization',
    name: 'Visuana',
    url: 'https://visuana.pl',
  },
  areaServed: 'Polska',
  serviceType: 'AI Marketing Automation',
}

// FAQ Schema for Google
const faqSchema: FAQPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Czy AI zastapi moj zespol marketingowy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nie. AI wspiera i wzmacnia Twoj zespol, nie zastepuje go. Automatyzuje powtarzalne zadania, dzieki czemu ludzie moga skupic sie na strategii i kreatywnosci.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak dlugo trwa wdrozenie AI w marketingu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Podstawowe wdrozenie zajmuje 2-4 tygodnie. Pelna integracja z procesami firmy moze trwac 2-3 miesiace w zaleznosci od zlozonosci.',
      },
    },
    {
      '@type': 'Question',
      name: 'Czy AI-generated content jest bezpieczny dla SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tak, jesli jest odpowiednio nadzorowany. Stosujemy podejscie human-in-the-loop - AI generuje drafty, a ludzie weryfikuja i poprawiaja. Google nie karze za AI content, karze za niskiej jakosci content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ile mozna zaoszczedzic dzieki automatyzacji?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nasi klienci oszczedzaja srednio 40% kosztow operacyjnych przy jednoczesnym wzroscie outputu o 100%. ROI zwykle pojawia sie w ciagu 3-6 miesiecy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jakie narzedzia AI wykorzystujecie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wykorzystujemy najlepsze dostepne narzedzia: GPT-4, Claude, Midjourney, oraz wlasne rozwiazania. Dobieramy technologie do Twoich potrzeb.',
      },
    },
  ],
}

// Page Data
const pageData: Omit<ServicePageData, 'title' | 'metaDescription' | 'keywords' | 'schema'> = {
  hero: {
    title: 'AI w marketingu to nie przyszlosc. To terazniejszosc.',
    subtitle: 'Automatyzacja rutynowych zadan. Oszczednosc 40% kosztow. Zero kompromisow na jakosci.',
    ctaPrimaryLabel: 'Bezplatna konsultacja',
    ctaPrimaryHref: '/kontakt',
    ctaSecondaryLabel: 'Zobacz case study',
    ctaSecondaryHref: '#case-study',
    backgroundGradient: 'charcoal',
  },
  problem: {
    heading: 'Czy to brzmi znajomo?',
    painPoints: [
      'Twoj zespol tonie w powtarzalnych zadaniach?',
      'Nie nadazasz za konkurencja, ktora juz korzysta z AI?',
      'Boisz sie, ze AI zastapi Twoj zespol?',
      'Nie wiesz, od czego zaczac z AI w marketingu?',
    ],
    hookText: 'Jest na to rozwiazanie...',
  },
  solution: {
    heading: 'Jak dzialamy',
    features: [
      {
        icon: 'bot' as FeatureIcon,
        title: 'AI content generation',
        description: 'Generowanie tresci z human oversight. Szybciej, taniej, z kontrola jakosci.',
      },
      {
        icon: 'zap' as FeatureIcon,
        title: 'Marketing automation workflows',
        description: 'Automatyzacja procesow marketingowych. Email, social media, lead nurturing.',
      },
      {
        icon: 'users' as FeatureIcon,
        title: 'Chatbot & customer service AI',
        description: 'Inteligentne chatboty obslugujace klientow 24/7. Integracja z Twoimi systemami.',
      },
      {
        icon: 'chart' as FeatureIcon,
        title: 'Predictive analytics',
        description: 'Predykcje sprzedazy i zachowan klientow. Podejmuj decyzje oparte na danych.',
      },
    ],
  },
  process: {
    heading: 'Jak wyglada wspolpraca',
    steps: [
      {
        number: 1,
        title: 'Konsultacja',
        description: 'Analizujemy Twoje procesy. Identyfikujemy obszary do automatyzacji.',
      },
      {
        number: 2,
        title: 'Strategia',
        description: 'Tworzymy roadmape wdrozenia AI. Definiujemy KPI i mierzymy baseline.',
      },
      {
        number: 3,
        title: 'Realizacja',
        description: 'Wdrazamy rozwiazania AI. Szkolimy zespol. Integrujemy z systemami.',
      },
      {
        number: 4,
        title: 'Optymalizacja',
        description: 'Monitorujemy wyniki. Optymalizujemy i skalujemy rozwiazania.',
      },
    ],
  },
  caseStudies: [
    {
      clientName: 'SaaS Client',
      industry: 'Technology / SaaS',
      metric: '40%',
      metricLabel: 'cost reduction',
      description: 'Redukcja kosztow operacyjnych o 40% przy 2-krotnym wzroscie outputu dzieki automatyzacji procesow contentowych.',
      link: '/case-study/saas-ai',
    },
  ],
  faq: {
    heading: 'Czesto zadawane pytania',
    items: [
      {
        question: 'Czy AI zastapi moj zespol marketingowy?',
        answer: 'Nie. AI wspiera i wzmacnia Twoj zespol, nie zastepuje go. Automatyzuje powtarzalne zadania, dzieki czemu ludzie moga skupic sie na strategii i kreatywnosci. To jak danie supermocy Twojemu zespolowi.',
      },
      {
        question: 'Jak dlugo trwa wdrozenie AI w marketingu?',
        answer: 'Podstawowe wdrozenie zajmuje 2-4 tygodnie. Pelna integracja z procesami firmy moze trwac 2-3 miesiace w zaleznosci od zlozonosci. Zaczynamy od quick wins, zeby szybko zobaczyc ROI.',
      },
      {
        question: 'Czy AI-generated content jest bezpieczny dla SEO?',
        answer: 'Tak, jesli jest odpowiednio nadzorowany. Stosujemy podejscie human-in-the-loop - AI generuje drafty, a ludzie weryfikuja i poprawiaja. Google nie karze za AI content, karze za niskiej jakosci content.',
      },
      {
        question: 'Ile mozna zaoszczedzic dzieki automatyzacji?',
        answer: 'Nasi klienci oszczedzaja srednio 40% kosztow operacyjnych przy jednoczesnym wzroscie outputu o 100%. ROI zwykle pojawia sie w ciagu 3-6 miesiecy.',
      },
      {
        question: 'Jakie narzedzia AI wykorzystujecie?',
        answer: 'Wykorzystujemy najlepsze dostepne narzedzia: GPT-4, Claude, Midjourney, oraz wlasne rozwiazania. Dobieramy technologie do Twoich potrzeb i budzetow.',
      },
    ],
  },
  cta: {
    heading: 'Gotowy na AI w marketingu?',
    description: 'Umow sie na bezplatna konsultacje. Pokarzemy, jak AI moze zautomatyzowac Twoje procesy marketingowe.',
    buttonLabel: 'Bezplatna konsultacja',
    buttonHref: '/kontakt',
    variant: 'gradient',
  },
}

export default function AIAgentsPage() {
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
