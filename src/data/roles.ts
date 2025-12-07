/**
 * Roles Data - SPEC-011 Role Pages
 *
 * Complete content for all 6 role landing pages
 * URL pattern: /dla-[role]
 * All content in Polish
 */

import { Role, RoleSlug, RoleMap, RoleIndustryLink } from '@/types/role'

// ============================================
// COMMON INDUSTRIES (used across roles)
// ============================================

const commonIndustries: RoleIndustryLink[] = [
  {
    id: 'saas',
    name: 'SaaS / Tech',
    slug: 'saas',
    description: 'PLG, CAC:LTV, developer marketing',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    slug: 'ecommerce',
    description: 'ROAS, product feeds, multi-channel',
  },
  {
    id: 'fintech',
    name: 'Fintech',
    slug: 'fintech',
    description: 'Compliance, trust building, edukacja',
  },
  {
    id: 'medtech',
    name: 'Healthcare / MedTech',
    slug: 'medtech',
    description: 'HIPAA/GDPR, patient journey',
  },
  {
    id: 'uslugi-profesjonalne',
    name: 'Uslugi profesjonalne',
    slug: 'uslugi-profesjonalne',
    description: 'Thought leadership, lead gen',
  },
  {
    id: 'produkcja',
    name: 'Produkcja / B2B',
    slug: 'produkcja',
    description: 'Long-cycle, technical content',
  },
  {
    id: 'edtech',
    name: 'EdTech',
    slug: 'edtech',
    description: 'Trial conversion, multi-persona',
  },
  {
    id: 'nieruchomosci',
    name: 'Nieruchomosci',
    slug: 'nieruchomosci',
    description: 'Local SEO, virtual tours, lead scoring',
  },
]

// ============================================
// CEO / FOUNDER ROLE
// ============================================

const ceoRole: Role = {
  id: 'ceo',
  slug: 'ceo',
  name: 'CEO / Founder',
  headline: 'Marketing, ktory CEO rozumie: ROI, nie vanity metrics',
  subheadline: 'Dla CEO, ktorzy chca widziec jak marketing przekłada sie na przychody',
  metaTitle: 'Marketing dla CEO i Founderow | Visuana',
  metaDescription: 'Marketing z perspektywa CEO: revenue attribution, executive dashboards, board-ready metrics. Zero vanity metrics, tylko ROI.',
  challenges: [
    {
      id: 'black-box',
      title: 'Marketing to black box',
      description: 'Zespol mowi "zaufaj mi", ale nie potrafisz ocenic, czy budzet jest dobrze wydawany. Brakuje Ci przejrzystosci.',
      icon: 'eye-off',
    },
    {
      id: 'no-revenue-link',
      title: 'Brak polaczenia z przychodami',
      description: 'Widzisz metryki marketingowe, ale nie wiesz jak przekladaja sie na faktyczna sprzedaz i revenue.',
      icon: 'unlink',
    },
    {
      id: 'trust-me',
      title: 'Agencje mowia "trust me"',
      description: 'Kazda agencja obiecuje wyniki, ale malo ktora potrafi je udowodnic w jezyku biznesowym.',
      icon: 'message-circle',
    },
    {
      id: 'time-to-value',
      title: 'Nieznany time-to-value',
      description: 'Nie wiesz kiedy zobaczysz efekty i czy inwestycja sie zwroci. Brakuje przewidywalnosci.',
      icon: 'clock',
    },
  ],
  solutions: [
    {
      id: 'ceo-dashboard',
      title: 'CEO Dashboard',
      description: 'Jeden ekran z wszystkimi kluczowymi metrykami. Revenue attribution, CAC, LTV - wszystko w czasie rzeczywistym.',
      benefits: [
        'Revenue attribution - widzisz skad przychodzi kazda zlotowka',
        'Weekly executive summary automatycznie',
        'Board-ready raporty jednym kliknieciem',
      ],
      icon: 'layout-dashboard',
    },
    {
      id: 'strategic-alignment',
      title: 'Strategic Alignment',
      description: 'Laczymi cele marketingowe z OKRami firmy. Kazda kampania sluzy strategicznym celom.',
      benefits: [
        'OKRs → kampanie mapping',
        'Quarterly business reviews',
        'Strategic planning support',
      ],
      icon: 'target',
    },
    {
      id: 'predictable-growth',
      title: 'Predictable Growth Model',
      description: 'Model wzrostu z przewidywalnymi wynikami. Wiesz co dostaniesz za kazda zainwestowana zlotowke.',
      benefits: [
        'Scenario planning',
        'ROI forecasting',
        'Growth trajectory modeling',
      ],
      icon: 'trending-up',
    },
  ],
  testimonial: {
    quote: 'Wreszcie rozumiem, za co place. Dashboard pokazuje mi dokladnie, jak marketing wplywa na przychody.',
    author: 'Tomasz K.',
    title: 'CEO',
    company: 'TechScale (SaaS B2B)',
  },
  industries: commonIndustries,
  ctaText: 'Umow strategiczna konsultacje',
  ctaDescription: 'Bezplatna 45-minutowa sesja strategiczna z analiza Twojej sytuacji',
}

// ============================================
// CMO / VP MARKETING ROLE
// ============================================

const cmoRole: Role = {
  id: 'cmo',
  slug: 'cmo',
  name: 'CMO / VP Marketing',
  headline: 'AI Marketing Partner, nie kolejna agencja',
  subheadline: 'Dla CMO, ktorzy potrzebuja partnera rozumiejacego presje C-suite',
  metaTitle: 'Marketing dla CMO i VP Marketingu | Visuana',
  metaDescription: 'Partner marketingowy dla CMO: revenue attribution, team augmentation, martech integration. Rozumiemy presje C-suite.',
  challenges: [
    {
      id: 'do-more-less',
      title: 'Wiecej za mniej',
      description: 'Presja, zeby dostarczac wiecej przy ograniczonym budżecie i zespole. Kazdy kwartał trudniejszy.',
      icon: 'scale',
    },
    {
      id: 'prove-roi',
      title: 'Udowodnij ROI przed CEO',
      description: 'Musisz pokazac, ze marketing przynosi wyniki. Vanity metrics nie wystarczaja.',
      icon: 'presentation',
    },
    {
      id: 'bandwidth',
      title: 'Team bandwidth',
      description: 'Zespol jest na granicy. Brakuje rak do nowych inicjatyw, ale zatrudnienie trwa wieki.',
      icon: 'users',
    },
    {
      id: 'tech-overwhelm',
      title: 'Tech stack overwhelm',
      description: 'Za duzo narzedzi, za malo integracji. Dane sa wszedzie, ale nigdzie jednoczesnie.',
      icon: 'layers',
    },
  ],
  solutions: [
    {
      id: 'cmo-partner',
      title: 'CMO-as-Partner Model',
      description: 'Nie jestesmy agencja, jestesmy rozszerzeniem Twojego zespolu. Rozumiemy presje i cele.',
      benefits: [
        'Weekly strategic syncs',
        'Direct access do ekspertow',
        'Flexible engagement model',
      ],
      icon: 'handshake',
    },
    {
      id: 'revenue-attribution',
      title: 'Revenue Attribution System',
      description: 'Multi-touch attribution, ktory pokazuje prawdziwy wplyw marketingu na przychody.',
      benefits: [
        'Full-funnel tracking',
        'Channel ROI comparison',
        'Budget optimization insights',
      ],
      icon: 'bar-chart',
    },
    {
      id: 'team-augmentation',
      title: 'Team Augmentation',
      description: 'Dodajemy capacity do Twojego zespolu. Specjalisci od contentu, performance, analytics.',
      benefits: [
        'On-demand specialists',
        'No recruitment overhead',
        'Seamless integration',
      ],
      icon: 'user-plus',
    },
  ],
  testimonial: {
    quote: 'Wreszcie mam partnera, ktory rozumie presje, jaka mam od board. Razem budujemy growth machine.',
    author: 'Anna M.',
    title: 'VP Marketing',
    company: 'FinanceApp (Fintech)',
  },
  industries: commonIndustries,
  ctaText: 'Porozmawiajmy o wspolpracy',
  ctaDescription: 'Bezplatna sesja strategiczna - zobaczmy, jak mozemy Ci pomoc',
}

// ============================================
// MARKETING DIRECTOR ROLE
// ============================================

const marketingDirectorRole: Role = {
  id: 'marketing-director',
  slug: 'marketing-director',
  name: 'Marketing Director',
  headline: 'Wykonanie na poziomie, gdy budzet nie',
  subheadline: 'Dla Marketing Directorow, ktorzy musza dostarczac wyniki przy ograniczonych zasobach',
  metaTitle: 'Marketing dla Marketing Directorow | Visuana',
  metaDescription: 'Execution-focused partnership dla Marketing Directorow. Priority channel optimization, automated reporting, best practices transfer.',
  challenges: [
    {
      id: 'limited-resources',
      title: 'Ograniczony zespol i budzet',
      description: 'Masz wielkie cele, ale maly zespol. Musisz byc kreatywny z zasobami.',
      icon: 'wallet',
    },
    {
      id: 'execution-bottlenecks',
      title: 'Execution bottlenecks',
      description: 'Pomysly sa, ale realizacja kuleje. Wszystko trwa dluzej niz powinno.',
      icon: 'hourglass',
    },
    {
      id: 'too-many-channels',
      title: 'Za duzo kanalow',
      description: 'Social, email, paid, SEO, events... Nie mozesz robic wszystkiego dobrze.',
      icon: 'git-branch',
    },
    {
      id: 'reporting-overhead',
      title: 'Raportowanie zajmuje wieki',
      description: 'Tworzenie raportow pochłania czas, ktory moglbys poswiecic na strategię.',
      icon: 'file-text',
    },
  ],
  solutions: [
    {
      id: 'execution-partnership',
      title: 'Execution-Focused Partnership',
      description: 'Nie tylko strategia - dostarczamy gotowe materialy, kampanie, content.',
      benefits: [
        'Turnkey campaign execution',
        'Content production pipeline',
        'Campaign management',
      ],
      icon: 'play-circle',
    },
    {
      id: 'priority-optimization',
      title: 'Priority Channel Optimization',
      description: 'Koncentrujemy sie na 2-3 kanalach, ktore daja najlepsze wyniki. Reszta moze poczekac.',
      benefits: [
        'Channel audit & prioritization',
        '80/20 resource allocation',
        'Quick wins identification',
      ],
      icon: 'target',
    },
    {
      id: 'automated-reporting',
      title: 'Automated Reporting',
      description: 'Raporty generuja sie same. Ty dostajesz insights, nie musisz zbierac danych.',
      benefits: [
        'Auto-generated weekly reports',
        'Custom KPI dashboards',
        'Stakeholder-ready presentations',
      ],
      icon: 'refresh-cw',
    },
  ],
  testimonial: {
    quote: 'Z 3-osobowym zespolem dostarczamy wyniki, jakie wieksze dzialy maja problem osiagnac.',
    author: 'Piotr N.',
    title: 'Marketing Director',
    company: 'GrowthScale (E-commerce)',
  },
  industries: commonIndustries,
  ctaText: 'Sprawdz jak mozemy pomoc',
  ctaDescription: 'Bezplatna analiza Twojej sytuacji i rekomendacje',
}

// ============================================
// HEAD OF GROWTH ROLE
// ============================================

const growthRole: Role = {
  id: 'growth',
  slug: 'growth',
  name: 'Head of Growth',
  headline: 'Growth Engineering, nie Growth Hacking',
  subheadline: 'Dla Growth Leaderow, ktorzy buduja systemy, nie szukaja trickow',
  metaTitle: 'Marketing dla Head of Growth | Visuana',
  metaDescription: 'Growth Engineering: experiment factory, multi-touch attribution, growth model building. Systemy, nie hacki.',
  challenges: [
    {
      id: 'experiment-velocity',
      title: 'Za wolne eksperymentowanie',
      description: 'Chcesz testowac 10 rzeczy tygodniowo, ale ledwo dajesz rade 2. Velocity kuleje.',
      icon: 'zap',
    },
    {
      id: 'attribution-complexity',
      title: 'Attribution to koszmar',
      description: 'Multi-touch journey sprawia, ze nie wiesz co naprawde dziala. Dane sa nieczytelne.',
      icon: 'shuffle',
    },
    {
      id: 'cross-functional',
      title: 'Cross-functional friction',
      description: 'Growth wymaga wspolpracy z produktem, salesem, supportem. Nie zawsze jest prosto.',
      icon: 'users',
    },
    {
      id: 'data-quality',
      title: 'Data quality issues',
      description: 'Garbage in, garbage out. Twoje decyzje sa tak dobre jak dane, na ktorych bazujesz.',
      icon: 'database',
    },
  ],
  solutions: [
    {
      id: 'experiment-factory',
      title: 'Experiment Factory',
      description: 'System do szybkiego testowania hipotez. 10x wiecej eksperymentow przy tym samym zespole.',
      benefits: [
        'Hypothesis templating',
        'Rapid test deployment',
        'Statistical significance tracking',
      ],
      icon: 'flask',
    },
    {
      id: 'multi-touch-attribution',
      title: 'Multi-Touch Attribution',
      description: 'Prawdziwy obraz customer journey. Wiesz, co dziala na kazdym etapie.',
      benefits: [
        'Full-funnel visibility',
        'Channel contribution analysis',
        'Incrementality testing',
      ],
      icon: 'git-merge',
    },
    {
      id: 'growth-model',
      title: 'Growth Model Building',
      description: 'Budujemy model wzrostu oparty na Twoich danych. Przewidywalne skalowanie.',
      benefits: [
        'Input/output modeling',
        'Scenario simulation',
        'North Star metric tracking',
      ],
      icon: 'trending-up',
    },
  ],
  testimonial: {
    quote: 'Przeszlismy od 2 do 15 eksperymentow tygodniowo. Velocity wzroslo 7x.',
    author: 'Mateusz R.',
    title: 'Head of Growth',
    company: 'RocketSaaS (B2B SaaS)',
  },
  industries: commonIndustries,
  ctaText: 'Porozmawiajmy o growthie',
  ctaDescription: 'Bezplatna sesja - audyt Twojego growth stacka',
}

// ============================================
// CONTENT MANAGER ROLE
// ============================================

const contentManagerRole: Role = {
  id: 'content-manager',
  slug: 'content-manager',
  name: 'Content Manager',
  headline: '10x Twoj output bez 10x wysilku',
  subheadline: 'Dla Content Managerow, ktorzy chca skalowac produkcje bez utraty jakosci',
  metaTitle: 'Marketing dla Content Managerow | Visuana',
  metaDescription: 'AI content workflow dla Content Managerow: 10x output, SEO integration, distribution automation. Jakosc bez kompromisow.',
  challenges: [
    {
      id: 'volume-demands',
      title: 'Rosna wymagania volumenu',
      description: 'Stakeholders chca wiecej contentu, ale zespol zostaje ten sam. Presja rosnie.',
      icon: 'trending-up',
    },
    {
      id: 'quality-consistency',
      title: 'Zachowanie jakosci',
      description: 'Wiecej nie moze znaczyc gorzej. Ale jak utrzymac standard przy skali?',
      icon: 'check-circle',
    },
    {
      id: 'seo-requirements',
      title: 'SEO jako must-have',
      description: 'Kazdy tekst musi byc zoptymalizowany. To dodatkowa warstwa pracy.',
      icon: 'search',
    },
    {
      id: 'distribution-chaos',
      title: 'Dystrybucja to chaos',
      description: 'Content powstaje, ale dystrybucja kuleje. Blog, social, email - za duzo kanalow.',
      icon: 'share-2',
    },
  ],
  solutions: [
    {
      id: 'ai-content-workflow',
      title: 'AI Content Workflow',
      description: 'AI asystuje w tworzeniu, Ty kontrolujesz jakosc. 10x output, ta sama jakosc.',
      benefits: [
        'AI-assisted first drafts',
        'Brand voice consistency',
        'Human quality control',
      ],
      icon: 'cpu',
    },
    {
      id: 'editorial-automation',
      title: 'Editorial Calendar Automation',
      description: 'Kalendarz redakcyjny, ktory zarzadza sie sam. Przypomnienia, deadlines, workflow.',
      benefits: [
        'Automated scheduling',
        'Deadline tracking',
        'Team coordination',
      ],
      icon: 'calendar',
    },
    {
      id: 'seo-integration',
      title: 'SEO-Integrated Writing',
      description: 'SEO wbudowane w proces tworzenia. Nie dodatkowy krok, a czesc workflow.',
      benefits: [
        'Keyword suggestions during writing',
        'Content optimization scoring',
        'SERP analysis integration',
      ],
      icon: 'search',
    },
  ],
  testimonial: {
    quote: 'Publikujemy 4x wiecej contentu niz rok temu. Traffic wzrosl 280%. Ten sam zespol.',
    author: 'Karolina W.',
    title: 'Content Lead',
    company: 'ContentScale (B2B)',
  },
  industries: commonIndustries,
  ctaText: 'Zobacz jak to dziala',
  ctaDescription: 'Demo AI content workflow - 15 minut',
}

// ============================================
// STARTUP FOUNDER ROLE
// ============================================

const founderRole: Role = {
  id: 'founder',
  slug: 'founder',
  name: 'Startup Founder',
  headline: 'Marketing na autopilot, zebys mogl budowac produkt',
  subheadline: 'Dla Founderow, ktorzy nie maja czasu ani zespolu na marketing',
  metaTitle: 'Marketing dla Startup Founderow | Visuana',
  metaDescription: 'Done-for-you marketing dla founderow: 48h onboarding, founder-friendly pricing, weekly optimization. Ty budujesz produkt, my marketing.',
  challenges: [
    {
      id: 'no-time',
      title: 'Nie masz czasu na marketing',
      description: 'Produkt, fundraising, hiring - marketing spada na dalszy plan, ale wiesz, ze jest wazny.',
      icon: 'clock',
    },
    {
      id: 'no-team',
      title: 'Brak zespolu i budzetu',
      description: 'Nie stac Cie na CMO ani na duza agencje. Ale potrzebujesz wynikow.',
      icon: 'users',
    },
    {
      id: 'quick-wins',
      title: 'Potrzebujesz quick wins',
      description: 'Runway jest ograniczony. Potrzebujesz wynikow teraz, nie za 6 miesiecy.',
      icon: 'zap',
    },
    {
      id: 'where-start',
      title: 'Nie wiesz od czego zaczac',
      description: 'SEO? Paid? Content? Social? Za duzo opcji, za malo pewnosci.',
      icon: 'compass',
    },
  ],
  solutions: [
    {
      id: 'founder-pricing',
      title: 'Founder-Friendly Pricing',
      description: 'Pakiety dopasowane do stage i runway. Rozsadne ceny, bez dlugich commitmentow.',
      benefits: [
        'Stage-based pricing',
        'Month-to-month flexibility',
        'Equity-for-services option',
      ],
      icon: 'tag',
    },
    {
      id: 'done-for-you',
      title: 'Done-For-You Basics',
      description: 'My robimy wszystko. Ty dostajesz efekty i weekly update. Zero Twojego czasu.',
      benefits: [
        'Full execution',
        'Weekly reporting',
        'Async communication',
      ],
      icon: 'check-square',
    },
    {
      id: 'fast-onboarding',
      title: '48h Onboarding',
      description: 'Zaczynamy dzialac w 48 godzin. Nie miesiace setupu i planowania.',
      benefits: [
        'Quick start playbook',
        'Rapid campaign launch',
        'First results in 2 weeks',
      ],
      icon: 'rocket',
    },
  ],
  testimonial: {
    quote: 'W koncu moge sie skupic na produkcie. Marketing dziala, traffic rosnie, ja mam spokoj.',
    author: 'Jakub S.',
    title: 'Founder & CEO',
    company: 'TechStartup (Seed Stage)',
  },
  industries: commonIndustries,
  ctaText: 'Zacznij w 48 godzin',
  ctaDescription: 'Szybka rozmowa - 15 minut, i zaczynamy dzialac',
}

// ============================================
// ROLES MAP
// ============================================

export const roles: RoleMap = {
  ceo: ceoRole,
  cmo: cmoRole,
  'marketing-director': marketingDirectorRole,
  growth: growthRole,
  'content-manager': contentManagerRole,
  founder: founderRole,
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get role by slug
 */
export function getRoleBySlug(slug: string): Role | undefined {
  return roles[slug as RoleSlug]
}

/**
 * Get all role slugs for static generation
 */
export function getAllRoleSlugs(): RoleSlug[] {
  return Object.keys(roles) as RoleSlug[]
}

/**
 * Get all roles as array
 */
export function getAllRoles(): Role[] {
  return Object.values(roles)
}

export default roles
