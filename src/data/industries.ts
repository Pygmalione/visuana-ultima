/**
 * Industries Data - SPEC-011 Industry Pages
 *
 * Complete content for all 8 industry landing pages
 * All content in Polish
 */

import { Industry, IndustrySlug, IndustryMap } from '@/types/industry'

// ============================================
// COMMON ROLES (used across industries)
// ============================================

const commonRoles = {
  cmo: {
    id: 'cmo',
    name: 'CMO / Dyrektor Marketingu',
    slug: 'cmo',
    description: 'Strategia i ROI na poziomie C-suite',
  },
  marketingManager: {
    id: 'marketing-manager',
    name: 'Marketing Manager',
    slug: 'marketing-manager',
    description: 'Egzekucja i optymalizacja kampanii',
  },
  founder: {
    id: 'founder',
    name: 'Founder / CEO',
    slug: 'founder',
    description: 'Wzrost i skalowanie biznesu',
  },
  growthLead: {
    id: 'growth-lead',
    name: 'Growth Lead',
    slug: 'growth-lead',
    description: 'Metryki, eksperymenty, akwizycja',
  },
}

// ============================================
// SAAS / TECH INDUSTRY
// ============================================

const saasIndustry: Industry = {
  id: 'saas',
  slug: 'saas',
  name: 'SaaS / Tech',
  headline: 'Marketing SaaS, ktory skaluje sie z Twoim MRR',
  valueProps: [
    'PLG + Sales-led hybrid strategy',
    'CAC:LTV optimization z AI analytics',
    'Developer-focused content & community',
  ],
  metaTitle: 'Marketing dla SaaS i firm technologicznych | Visuana',
  metaDescription: 'Specjalizujemy sie w marketingu dla SaaS. PLG, CAC:LTV optymalizacja, developer advocacy. Wzrost MRR oparty na danych.',
  painPoints: [
    {
      id: 'plg-vs-sales',
      title: 'PLG vs Sales-led - ktory model wybrac?',
      description: 'Nie wiesz, czy postawic na Product-Led Growth czy tradycyjny zespol sales. A moze hybrid? Pomagamy znalezc balans.',
      icon: 'balance',
    },
    {
      id: 'cac-ltv',
      title: 'CAC rosnie, LTV stoi w miejscu',
      description: 'Koszty pozyskania klienta ida w gore, a retention nie nadaza. Trzeba zoptymalizowac caly funnel.',
      icon: 'chart-down',
    },
    {
      id: 'developer-audience',
      title: 'Jak dotrzec do developerow?',
      description: 'Developer audience jest skeptyczna wobec marketingu. Potrzebujesz autentycznego developer advocacy.',
      icon: 'code',
    },
    {
      id: 'technical-content',
      title: 'Brak technical content, ktory konwertuje',
      description: 'Generyczne blogi nie dzialaja. Potrzebujesz tresci, ktore rozumieja Twoj produkt i problem klienta.',
      icon: 'document',
    },
  ],
  solutions: [
    {
      id: 'plg-engine',
      title: 'AI-Powered PLG Engine',
      description: 'Budujemy Product-Led Growth engine z data-driven onboardingiem i self-serve conversion.',
      benefits: [
        'Onboarding optimization z AI analytics',
        'Self-serve trial-to-paid conversion',
        'Usage-based upsell triggers',
      ],
      icon: 'rocket',
    },
    {
      id: 'mrr-attribution',
      title: 'MRR Attribution Dashboard',
      description: 'Kazdy zlotowka wydana na marketing ma swoje zrodlo. Wiemy, co dziala.',
      benefits: [
        'Multi-touch attribution model',
        'CAC payback period tracking',
        'Cohort LTV analysis',
      ],
      icon: 'chart',
    },
    {
      id: 'developer-advocacy',
      title: 'Developer Advocacy Program',
      description: 'Autentyczny content dla developerow. Nie marketing - edukacja.',
      benefits: [
        'Technical blog & documentation',
        'Developer community building',
        'Open source contributions',
      ],
      icon: 'users',
    },
  ],
  caseStudy: {
    title: 'SaaS B2B - 180% wzrostu MRR w 12 miesiecy',
    description: 'Polski startup SaaS z problemem CAC. Wdrozylismy PLG engine + content marketing. Wynik? MRR x2.8.',
    metrics: [
      { value: '180%', label: 'wzrost MRR' },
      { value: '-40%', label: 'redukcja CAC' },
      { value: '3.2x', label: 'LTV:CAC ratio' },
    ],
  },
  faqs: [
    {
      question: 'Czy pracujecie z early-stage startupami?',
      answer: 'Tak, pracujemy z firmami na roznych etapach - od seed po Series B. Dopasowujemy strategie do etapu rozwoju i budgetu.',
    },
    {
      question: 'Jak mierzycie efektywnosc marketingu SaaS?',
      answer: 'Kluczowe metryki to MRR growth, CAC, LTV, CAC payback period, net revenue retention. Budujemy custom dashboardy pod Twoje KPIs.',
    },
    {
      question: 'Ile trwa zobaczenie pierwszych wynikow?',
      answer: 'PLG i content marketing to gra dlugoterminowa. Pierwsze sygnaly po 2-3 miesiacach, znaczacy wplyw na MRR po 6+ miesiacach.',
    },
    {
      question: 'Czy pomagacie z expansion na USA/EU?',
      answer: 'Tak, mamy doswiadczenie w ekspansji polskich SaaS na rynki zachodnie. Lokalizacja, GTM strategy, partnership building.',
    },
  ],
  relatedRoles: [commonRoles.founder, commonRoles.growthLead, commonRoles.cmo],
}

// ============================================
// E-COMMERCE INDUSTRY
// ============================================

const ecommerceIndustry: Industry = {
  id: 'ecommerce',
  slug: 'ecommerce',
  name: 'E-commerce',
  headline: 'E-commerce marketing z 48-godzinnym testowaniem ROI',
  valueProps: [
    'ROAS optimization w czasie rzeczywistym',
    'AI-powered product descriptions',
    'Multi-channel attribution bez zgadywania',
  ],
  metaTitle: 'Marketing dla e-commerce | Visuana',
  metaDescription: 'Marketing e-commerce z gwarancja ROI. ROAS optimization, product feed management, cross-channel analytics. Dane, nie domysly.',
  painPoints: [
    {
      id: 'roas-optimization',
      title: 'ROAS spada, a koszty rosna',
      description: 'iOS 14+, cookieless future, rosnace CPM. Potrzebujesz nowych podejsc do performance marketingu.',
      icon: 'trending-down',
    },
    {
      id: 'seasonality',
      title: 'Sezonowosc rujnuje cash flow',
      description: 'Black Friday, swieta, lato - wahania sprzedazy sa nieprzewidywalne. Trzeba je okielznac.',
      icon: 'calendar',
    },
    {
      id: 'multi-channel',
      title: 'Chaos kanalow sprzedazy',
      description: 'Allegro, Amazon, wlasny sklep, marketplace - brak spojnej strategii i atrybucji.',
      icon: 'layers',
    },
    {
      id: 'product-feeds',
      title: 'Product feeds to koszmar',
      description: 'Tytuly, opisy, zdjecia - optymalizacja feedow zajmuje cale dnie. A wyniki i tak srednie.',
      icon: 'database',
    },
  ],
  solutions: [
    {
      id: 'ai-descriptions',
      title: 'AI Product Descriptions',
      description: 'Generujemy opisy produktow, ktore sprzedaja. SEO-optimized, conversion-focused.',
      benefits: [
        'Bulk generation tysiecy opisow',
        'A/B testing tytul + opis',
        'Lokalizacja na rozne rynki',
      ],
      icon: 'edit',
    },
    {
      id: 'predictive-inventory',
      title: 'Predictive Inventory Marketing',
      description: 'Wiesz, co sie sprzeda zanim sie skonczy. Promuj wlasciwe produkty we wlasciwym czasie.',
      benefits: [
        'Demand forecasting z AI',
        'Stock-aware campaign optimization',
        'Markdown strategy automation',
      ],
      icon: 'box',
    },
    {
      id: 'cross-channel-roi',
      title: 'Cross-Channel ROI Engine',
      description: 'Jeden dashboard dla wszystkich kanalow. Wiesz, gdzie inwestowac kazda zlotowke.',
      benefits: [
        'Unified analytics platform',
        'Attribution modeling',
        'Budget allocation optimization',
      ],
      icon: 'pie-chart',
    },
  ],
  caseStudy: {
    title: 'E-commerce fashion - 250% wzrostu ROAS',
    description: 'Polski sklep z odzieza z problemem ROAS. AI-powered feed optimization + cross-channel strategy.',
    metrics: [
      { value: '250%', label: 'wzrost ROAS' },
      { value: '+85%', label: 'conversion rate' },
      { value: '-30%', label: 'CPA' },
    ],
  },
  faqs: [
    {
      question: 'Czy pracujecie z malymi sklepami?',
      answer: 'Pracujemy ze sklepami generujacymi min. 50K PLN miesiecznie. Ponizej tego progu trudno osiagnac ROI na naszych uslugach.',
    },
    {
      question: 'Jakie platformy e-commerce wspieracie?',
      answer: 'Shopify, WooCommerce, Magento, PrestaShop, custom solutions. Integrujemy sie z kazdym stackiem.',
    },
    {
      question: 'Czy pomagacie z Allegro i Amazon?',
      answer: 'Tak, marketplace marketing to nasza specjalnosc. Optymalizacja listingow, PPC, Brand Registry.',
    },
    {
      question: 'Jak szybko poprawiacie ROAS?',
      answer: 'Pierwsze optymalizacje w ciagu tygodnia. Znaczacy wzrost ROAS zazwyczaj po 4-6 tygodniach intensywnej pracy.',
    },
  ],
  relatedRoles: [commonRoles.founder, commonRoles.marketingManager, commonRoles.growthLead],
}

// ============================================
// PROFESSIONAL SERVICES INDUSTRY
// ============================================

const professionalServicesIndustry: Industry = {
  id: 'uslugi-profesjonalne',
  slug: 'uslugi-profesjonalne',
  name: 'Uslugi profesjonalne',
  headline: 'Marketing dla firm uslugowych, ktore chca premium klientow',
  valueProps: [
    'Thought leadership, ktory buduje autorytet',
    'Lead generation dla drogich uslug',
    'Reputation management na auto-pilocie',
  ],
  metaTitle: 'Marketing dla firm uslugowych | Visuana',
  metaDescription: 'Marketing dla kancelarii, agencji, firm konsultingowych. Thought leadership, lead generation, budowanie autorytetu.',
  painPoints: [
    {
      id: 'thought-leadership',
      title: 'Brak thought leadership',
      description: 'Konkurencja publikuje, wystepuje na konferencjach, ma podcast. Ty nie masz czasu na content.',
      icon: 'mic',
    },
    {
      id: 'long-cycles',
      title: 'Dlugie cykle sprzedazy',
      description: 'Od pierwszego kontaktu do zamkniecia mijaja miesiace. Trzeba nurtureowac leady przez caly ten czas.',
      icon: 'clock',
    },
    {
      id: 'reputation',
      title: 'Reputacja w sieci to przypadek',
      description: 'Nie kontrolujesz, co Google pokazuje o Twojej firmie. Opinie, wyniki wyszukiwania - chaos.',
      icon: 'star',
    },
    {
      id: 'referrals',
      title: 'Zaleznosc od polecen',
      description: '80% klientow z referrali to swietnie, ale to nie skaluje. Potrzebujesz przewidywalnego pipeline.',
      icon: 'users',
    },
  ],
  solutions: [
    {
      id: 'authority-content',
      title: 'Authority Content Engine',
      description: 'Budujemy Twoj personal brand przez content. Artykuly, LinkedIn, podcasty - wszystko zintegrowane.',
      benefits: [
        'Ghost-writing dla partnerow',
        'LinkedIn automation',
        'Podcast production',
      ],
      icon: 'award',
    },
    {
      id: 'case-study-automation',
      title: 'Case Study Automation',
      description: 'Zamieniamy kazdy sukces w sprzedazowe case study. Proces zautomatyzowany od A do Z.',
      benefits: [
        'Interview-based case studies',
        'Video testimonials',
        'ROI calculators',
      ],
      icon: 'file-text',
    },
    {
      id: 'review-management',
      title: 'Review & Reputation Engine',
      description: 'Kontroluj, co klienci mowia o Tobie online. Proaktywne zbieranie opinii + crisis management.',
      benefits: [
        'Automated review collection',
        'Google Business optimization',
        'Crisis response protocol',
      ],
      icon: 'shield',
    },
  ],
  caseStudy: {
    title: 'Kancelaria prawna - 3x wiecej premium klientow',
    description: 'Warszawska kancelaria z problemem akwizycji. Thought leadership + LinkedIn strategy.',
    metrics: [
      { value: '3x', label: 'wiecej zapytan' },
      { value: '+200%', label: 'srednia wartosc klienta' },
      { value: '85%', label: 'close rate na poleceniach' },
    ],
  },
  faqs: [
    {
      question: 'Czy pracujecie z malymi firmami uslugowymi?',
      answer: 'Tak, pracujemy z firmami od 3-5 osob po duze organizacje. Strategia dopasowana do skali.',
    },
    {
      question: 'Jak budujecie thought leadership?',
      answer: 'Wywiad z ekspertem, ghost-writing artykulow, LinkedIn strategy, podcast appearances. Ty dajesz wiedze, my pakujemy i dystrybuujemy.',
    },
    {
      question: 'Ile czasu potrzeba na budowe autorytetu?',
      answer: 'Pierwsze efekty po 3 miesiacach, znaczacy autorytet po 6-12 miesiacach konsekwentnego contentu.',
    },
    {
      question: 'Czy pomagacie z kryzysami reputacji?',
      answer: 'Tak, mamy protokol crisis management. Szybka reakcja, content strategy, monitoring.',
    },
  ],
  relatedRoles: [commonRoles.founder, commonRoles.cmo, commonRoles.marketingManager],
}

// ============================================
// HEALTHCARE / MEDTECH INDUSTRY
// ============================================

const medtechIndustry: Industry = {
  id: 'medtech',
  slug: 'medtech',
  name: 'Healthcare / MedTech',
  headline: 'Marketing medyczny zgodny z regulacjami. Zero ryzyka.',
  valueProps: [
    'HIPAA/GDPR compliant od pierwszego dnia',
    'Precyzyjna terminologia medyczna',
    'Patient journey optimization',
  ],
  metaTitle: 'Marketing dla healthcare i MedTech | Visuana',
  metaDescription: 'Marketing medyczny z compliance. HIPAA/GDPR, terminologia medyczna, patient acquisition. Bezpieczny wzrost.',
  painPoints: [
    {
      id: 'compliance',
      title: 'Compliance to pole minowe',
      description: 'HIPAA, GDPR, regulacje krajowe - jeden blad i koniec. Potrzebujesz partnera, ktory zna te zasady.',
      icon: 'shield-check',
    },
    {
      id: 'medical-accuracy',
      title: 'Content musi byc medycznie poprawny',
      description: 'Generyczne agencje nie rozumieja roznic miedzy FDA a CE. Potrzebujesz specjalistow.',
      icon: 'stethoscope',
    },
    {
      id: 'trust',
      title: 'Budowanie zaufania pacjentow',
      description: 'Healthcare to biznes zaufania. Marketing musi budowac, nie podwazac wiarygodnosc.',
      icon: 'heart',
    },
    {
      id: 'regulatory',
      title: 'Regulatory approval delays',
      description: 'Produkt czeka na zatwierdzenie, a marketing musi byc gotowy na dzien zero.',
      icon: 'clock',
    },
  ],
  solutions: [
    {
      id: 'medical-ai',
      title: 'Pre-Vetted Medical AI Content',
      description: 'AI + human medical review. Szybki content, ktory przechodzi weryfikacje regulatorow.',
      benefits: [
        'Medical terminology accuracy',
        'Regulatory pre-review',
        'Multi-market localization',
      ],
      icon: 'cpu',
    },
    {
      id: 'compliance-first',
      title: 'Compliance-First Marketing',
      description: 'Kazda kampania projektowana z mysl o regulacjach. Zero niespodzianek.',
      benefits: [
        'HIPAA/GDPR frameworks',
        'Consent management',
        'Audit trail documentation',
      ],
      icon: 'lock',
    },
    {
      id: 'patient-journey',
      title: 'Patient Journey Optimization',
      description: 'Od awareness do conversion - sciezka pacjenta zoptymalizowana pod healthcare.',
      benefits: [
        'Symptom-to-solution content',
        'Provider finder optimization',
        'Telehealth conversion funnels',
      ],
      icon: 'activity',
    },
  ],
  caseStudy: {
    title: 'MedTech startup - launch w 3 krajach EU',
    description: 'Urzadzenie medyczne CE-marked. Marketing launch w Polsce, Niemczech, Czechach jednoczesnie.',
    metrics: [
      { value: '3', label: 'kraje launchu' },
      { value: '15K', label: 'patient leads' },
      { value: '0', label: 'compliance issues' },
    ],
  },
  faqs: [
    {
      question: 'Czy macie doswiadczenie z FDA/CE?',
      answer: 'Tak, pracowalismy z produktami CE-marked i FDA-cleared. Rozumiemy roznice w marketingu miedzy rynkami.',
    },
    {
      question: 'Jak zapewniacie medical accuracy?',
      answer: 'Wspolpracujemy z medical advisors. Kazdy content przechodzi peer review przed publikacja.',
    },
    {
      question: 'Czy pomagacie z patient acquisition?',
      answer: 'Tak, od SEO po paid ads - wszystko w ramach regulacji. HCP i DTC marketing.',
    },
    {
      question: 'Jak dlugo trwa launch marketing?',
      answer: 'Zalezne od produktu i rynku. Typowo 2-3 miesiace przygotowania przed approval, ready na dzien zero.',
    },
  ],
  relatedRoles: [commonRoles.cmo, commonRoles.founder, commonRoles.marketingManager],
}

// ============================================
// FINTECH INDUSTRY
// ============================================

const fintechIndustry: Industry = {
  id: 'fintech',
  slug: 'fintech',
  name: 'Fintech',
  headline: 'Fintech marketing z wbudowana compliance layer',
  valueProps: [
    'KNF/regulatory compliant campaigns',
    'Trust-building dla financial products',
    'Complex product simplification',
  ],
  metaTitle: 'Marketing dla fintech | Visuana',
  metaDescription: 'Marketing fintech z compliance. KNF, trust building, financial education. Wzrost z bezpieczenstwem.',
  painPoints: [
    {
      id: 'regulatory',
      title: 'KNF patrzy na kazdy ruch',
      description: 'Regulacje finansowe sa surowe. Jeden bledny claim i masz problem.',
      icon: 'gavel',
    },
    {
      id: 'trust-signals',
      title: 'Klienci nie ufaja nowym graczom',
      description: 'Banki maja 100 lat historii. Ty masz 3 lata. Trzeba zbudowac zaufanie od zera.',
      icon: 'shield',
    },
    {
      id: 'complex-products',
      title: 'Produkt jest skomplikowany',
      description: 'Wyjasnisz swoja usluge w 30 sekund? Bo klient ma tylko tyle cierpliwosci.',
      icon: 'puzzle',
    },
    {
      id: 'risk',
      title: 'Fear of financial products',
      description: 'Ludzie boja sie stracic pieniadze. Marketing musi to zaadresowac.',
      icon: 'alert-triangle',
    },
  ],
  solutions: [
    {
      id: 'regulatory-ai',
      title: 'Regulatory-Compliant AI Content',
      description: 'AI generuje, compliance team weryfikuje. Szybki content bez ryzyka.',
      benefits: [
        'Pre-approved templates',
        'Disclaimer automation',
        'Risk disclosure compliance',
      ],
      icon: 'file-check',
    },
    {
      id: 'financial-education',
      title: 'Financial Education Hub',
      description: 'Buduj zaufanie przez edukacje. Content, ktory pomaga klientom zrozumiec finanse.',
      benefits: [
        'Explainer videos',
        'Calculator tools',
        'Educational blog series',
      ],
      icon: 'book-open',
    },
    {
      id: 'trust-optimization',
      title: 'Trust Signal Optimization',
      description: 'Certyfikaty, licencje, social proof - wszystko w jednym miejscu.',
      benefits: [
        'Trust badge strategy',
        'Review management',
        'Security messaging',
      ],
      icon: 'badge-check',
    },
  ],
  caseStudy: {
    title: 'Fintech B2C - 400% wzrostu user base',
    description: 'Aplikacja finansowa z licencja KNF. Content marketing + trust building = eksplozja wzrostu.',
    metrics: [
      { value: '400%', label: 'wzrost uzytkown.' },
      { value: '65%', label: 'retention rate' },
      { value: '0', label: 'compliance flags' },
    ],
  },
  faqs: [
    {
      question: 'Czy znacie regulacje KNF?',
      answer: 'Tak, pracowalismy z firmami pod nadzorem KNF. Rozumiemy ograniczenia marketingu uslug finansowych.',
    },
    {
      question: 'Jak budujecie zaufanie dla nowych firm?',
      answer: 'Licencje, certyfikaty, case studies, media coverage, influencer partnerships - wielowymiarowa strategia.',
    },
    {
      question: 'Czy pomagacie z financial education content?',
      answer: 'Tak, to nasza specjalnosc. Content, ktory edukuje i buduje pozycje eksperta.',
    },
    {
      question: 'Jak dlugo trwa budowanie zaufania?',
      answer: 'Pierwsze efekty po 2-3 miesiacach. Solidne zaufanie wymaga 6-12 miesiecy konsekwentnej pracy.',
    },
  ],
  relatedRoles: [commonRoles.cmo, commonRoles.growthLead, commonRoles.founder],
}

// ============================================
// MANUFACTURING / B2B INDUSTRY
// ============================================

const manufacturingIndustry: Industry = {
  id: 'produkcja',
  slug: 'produkcja',
  name: 'Produkcja / B2B',
  headline: 'Marketing B2B dla firm produkcyjnych. Od leada do kontraktu.',
  valueProps: [
    'Technical content dla inzynierow',
    'Trade show ROI optimization',
    'Long-cycle lead nurturing',
  ],
  metaTitle: 'Marketing dla firm produkcyjnych i B2B | Visuana',
  metaDescription: 'Marketing B2B dla produkcji. Technical content, trade show strategy, lead nurturing. Kontrakcty, nie leady.',
  painPoints: [
    {
      id: 'long-cycles',
      title: 'Cykle sprzedazy trwaja wiecznosc',
      description: '6-18 miesiecy od pierwszego kontaktu do podpisania. Trzeba nurtureowac przez caly ten czas.',
      icon: 'clock',
    },
    {
      id: 'technical-buyers',
      title: 'Klienci to inzynierowie, nie marketerzy',
      description: 'Twoi klienci czytaja specyfikacje, nie slogany. Content musi byc techniczny i konkretny.',
      icon: 'cpu',
    },
    {
      id: 'trade-shows',
      title: 'Targi to czarna dziura budzetowa',
      description: 'Stoisko kosztuje fortune, a ROI? Nikt nie wie. Trzeba to policzyc.',
      icon: 'calendar',
    },
    {
      id: 'specs',
      title: 'Sprzedajesz przez specyfikacje',
      description: 'Datasheet, CAD files, certyfikaty - to Twoja broszura. Ale czy ktos to znajduje?',
      icon: 'file-text',
    },
  ],
  solutions: [
    {
      id: 'technical-content',
      title: 'Technical Content Engine',
      description: 'White papers, case studies, specyfikacje - content dla inzynierow.',
      benefits: [
        'Engineering-grade copywriting',
        'Technical SEO optimization',
        'CAD/PDF optimization',
      ],
      icon: 'book',
    },
    {
      id: 'lead-nurturing',
      title: 'Long-Cycle Lead Nurturing',
      description: 'Nie tracisz leadow w 18-miesiecznym cyklu. Automation + personalizacja.',
      benefits: [
        'Multi-touch email sequences',
        'Account-based marketing',
        'Sales enablement content',
      ],
      icon: 'mail',
    },
    {
      id: 'trade-show-roi',
      title: 'Trade Show ROI System',
      description: 'Przed, w trakcie i po targach - kazdy kontakt trackowany.',
      benefits: [
        'Pre-show outreach',
        'Lead capture optimization',
        'Post-show nurturing',
      ],
      icon: 'target',
    },
  ],
  caseStudy: {
    title: 'Producent maszyn - 5 kontraktow z targow',
    description: 'Firma produkcyjna z problemem ROI na targach. Nowy system = 5 kontraktow o wartosci 2M PLN.',
    metrics: [
      { value: '5', label: 'kontraktow' },
      { value: '2M PLN', label: 'wartosc' },
      { value: '320%', label: 'ROI targow' },
    ],
  },
  faqs: [
    {
      question: 'Czy rozumiecie branzy przemyslowa?',
      answer: 'Tak, pracowalismy z producentami maszyn, automatyka, chemii przemyslowej. Rozumiemy jezyk techniczny.',
    },
    {
      question: 'Jak nurtureowac leady przez 18 miesiecy?',
      answer: 'Email automation, retargeting, content dripping, account-based marketing. Systematyczny proces.',
    },
    {
      question: 'Czy pomagacie z targami?',
      answer: 'Tak, od strategii przed targami przez lead capture po follow-up. Pelny cykl.',
    },
    {
      question: 'Jak mierzycie ROI w B2B?',
      answer: 'Pipeline value, closed deals, CAC, sales cycle length. Nie vanity metrics.',
    },
  ],
  relatedRoles: [commonRoles.cmo, commonRoles.marketingManager, commonRoles.founder],
}

// ============================================
// EDTECH INDUSTRY
// ============================================

const edtechIndustry: Industry = {
  id: 'edtech',
  slug: 'edtech',
  name: 'EdTech',
  headline: 'EdTech marketing, ktory konwertuje probki na subskrypcje',
  valueProps: [
    'Trial-to-paid conversion optimization',
    'Multi-stakeholder targeting',
    'Educational content jako produkt',
  ],
  metaTitle: 'Marketing dla EdTech | Visuana',
  metaDescription: 'Marketing EdTech. Trial conversion, enrollment funnels, multi-persona targeting. Edukacja, ktora sie sprzedaje.',
  painPoints: [
    {
      id: 'trial-conversion',
      title: 'Ludzie probuja, ale nie placa',
      description: 'Free trial wygasa, user znika. Trzeba zbudowac habit loop zanim sie skonczy.',
      icon: 'user-x',
    },
    {
      id: 'seasonal',
      title: 'Sezonowosc enrollment',
      description: 'Wrzesien i styczen to peak, reszta roku to pustka. Cash flow rollercoaster.',
      icon: 'calendar',
    },
    {
      id: 'multi-stakeholder',
      title: 'Kto jest klientem? Rodzic, uczen, firma?',
      description: 'Decision maker to nie zawsze user. Trzeba przekonac obu.',
      icon: 'users',
    },
    {
      id: 'content-as-product',
      title: 'Content to produkt, nie marketing',
      description: 'Twoj content edukacyjny sprzedaje, ale tez daje wartosc za darmo. Gdzie granica?',
      icon: 'book-open',
    },
  ],
  solutions: [
    {
      id: 'educational-ai',
      title: 'Educational AI Engine',
      description: 'AI personalizuje sciezke nauki + marketing. Jeden system, dwa cele.',
      benefits: [
        'Personalized onboarding',
        'Progress-based upsells',
        'Completion rate optimization',
      ],
      icon: 'cpu',
    },
    {
      id: 'enrollment-funnel',
      title: 'Year-Round Enrollment Funnel',
      description: 'Nie czekaj na wrzesien. Buduj pipeline przez caly rok.',
      benefits: [
        'Evergreen content strategy',
        'Seasonal campaign templates',
        'Early-bird offers automation',
      ],
      icon: 'trending-up',
    },
    {
      id: 'multi-persona',
      title: 'Multi-Persona Targeting',
      description: 'Rodzic, uczen, HR manager - kazdy dostaje wlasciwy przekaz.',
      benefits: [
        'Persona-based content',
        'Dual-funnel architecture',
        'Family/corporate packages',
      ],
      icon: 'target',
    },
  ],
  caseStudy: {
    title: 'Platforma e-learningowa - 3x trial conversion',
    description: 'EdTech z problemem konwersji triali. Onboarding redesign + habit building = 3x wiecej placacych.',
    metrics: [
      { value: '3x', label: 'trial conversion' },
      { value: '+45%', label: 'completion rate' },
      { value: '-60%', label: 'churn rate' },
    ],
  },
  faqs: [
    {
      question: 'Czy pracujecie z B2B EdTech?',
      answer: 'Tak, corporate learning, LMS, szkolenia dla firm. B2C i B2B EdTech to nasze specjalnosci.',
    },
    {
      question: 'Jak zwiekszacie trial conversion?',
      answer: 'Onboarding optimization, habit loops, progress gamification, value demonstration zanim trial sie skonczy.',
    },
    {
      question: 'Czy pomagacie z content strategy?',
      answer: 'Tak, balansujemy free vs paid content. Wartosciowy content za darmo, najlepsza wartosc za plata.',
    },
    {
      question: 'Jak targetowac rodzicow vs uczniow?',
      answer: 'Separate funnels, separate messaging. Rodzic widzi ROI i bezpieczenstwo, uczen widzi fun i progress.',
    },
  ],
  relatedRoles: [commonRoles.founder, commonRoles.growthLead, commonRoles.marketingManager],
}

// ============================================
// REAL ESTATE / PROPTECH INDUSTRY
// ============================================

const realEstateIndustry: Industry = {
  id: 'nieruchomosci',
  slug: 'nieruchomosci',
  name: 'Nieruchomosci / PropTech',
  headline: 'Marketing nieruchomosci, ktory sprzedaje przed premiera',
  valueProps: [
    'Pre-sales lead generation',
    'Hyper-local SEO dominance',
    'Virtual tour optimization',
  ],
  metaTitle: 'Marketing dla nieruchomosci i PropTech | Visuana',
  metaDescription: 'Marketing nieruchomosci. Pre-sales, local SEO, virtual tours, lead qualification. Sprzedaz przed budowa.',
  painPoints: [
    {
      id: 'local-market',
      title: 'Lokalizacja to wszystko',
      description: 'Klient szuka "mieszkanie Mokotow", nie "mieszkanie Warszawa". Hyper-local SEO jest kluczowe.',
      icon: 'map-pin',
    },
    {
      id: 'visual-content',
      title: 'Zdjecia to polowa sukcesu',
      description: 'Slabe zdjecia = zero zapytan. Virtual tour, drone, staging - trzeba inwestowac.',
      icon: 'camera',
    },
    {
      id: 'lead-qualification',
      title: 'Duzo zapytan, malo powazynch',
      description: 'Ogloszenie generuje 100 zapytan, 5 jest powaznych. Jak oddzielic ziarno od plew?',
      icon: 'filter',
    },
    {
      id: 'off-plan',
      title: 'Sprzedaz off-plan to wyzwanie',
      description: 'Sprzedajesz cos, czego jeszcze nie ma. Trzeba zbudowac zaufanie i wizje.',
      icon: 'building',
    },
  ],
  solutions: [
    {
      id: 'hyper-local-ai',
      title: 'Hyper-Local AI SEO',
      description: 'Dominuj w wynikach dla kazdej dzielnicy, ulicy, osiedla.',
      benefits: [
        'Location-based keyword strategy',
        'Google Business optimization',
        'Local backlink building',
      ],
      icon: 'map',
    },
    {
      id: 'virtual-tour',
      title: 'Virtual Tour Optimization',
      description: 'Twoje virtual tours konwertuja lepiej niz konkurencji.',
      benefits: [
        'Interactive hotspots',
        'Lead capture integration',
        'Mobile optimization',
      ],
      icon: 'video',
    },
    {
      id: 'lead-scoring',
      title: 'AI Lead Scoring',
      description: 'Wiesz, ktory lead jest goracy. Automatyczna kwalifikacja.',
      benefits: [
        'Behavioral scoring',
        'Intent signals tracking',
        'Auto-prioritization',
      ],
      icon: 'bar-chart',
    },
  ],
  caseStudy: {
    title: 'Deweloper - 70% sprzedazy przed budowa',
    description: 'Inwestycja premium w Warszawie. Pre-sales marketing = 70% lokali sprzedanych przed wbiciem lopaty.',
    metrics: [
      { value: '70%', label: 'pre-sales' },
      { value: '45 dni', label: 'avg. time to close' },
      { value: '12%', label: 'premium nad rynkiem' },
    ],
  },
  faqs: [
    {
      question: 'Czy pracujecie z malymi agencjami?',
      answer: 'Tak, od single-agent offices po duze sieci. Skalujemy strategia pod rozmiar.',
    },
    {
      question: 'Jak poprawiacie local SEO?',
      answer: 'Google Business, local citations, location pages, review management. Kompleksowa strategia lokalna.',
    },
    {
      question: 'Czy pomagacie z virtual tours?',
      answer: 'Tak, optymalizacja istniejacych tour, integracja z lead capture, analytics.',
    },
    {
      question: 'Jak kwalifikujecie leady?',
      answer: 'Behavior scoring, chatbot pre-qualification, form optimization. Skupiamy sie na ready-to-buy.',
    },
  ],
  relatedRoles: [commonRoles.marketingManager, commonRoles.founder, commonRoles.cmo],
}

// ============================================
// INDUSTRIES MAP
// ============================================

export const industries: IndustryMap = {
  saas: saasIndustry,
  ecommerce: ecommerceIndustry,
  'uslugi-profesjonalne': professionalServicesIndustry,
  medtech: medtechIndustry,
  fintech: fintechIndustry,
  produkcja: manufacturingIndustry,
  edtech: edtechIndustry,
  nieruchomosci: realEstateIndustry,
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get industry by slug
 */
export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries[slug as IndustrySlug]
}

/**
 * Get all industry slugs for static generation
 */
export function getAllIndustrySlugs(): IndustrySlug[] {
  return Object.keys(industries) as IndustrySlug[]
}

/**
 * Get all industries as array
 */
export function getAllIndustries(): Industry[] {
  return Object.values(industries)
}

export default industries
