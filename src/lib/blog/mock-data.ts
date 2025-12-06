// ============================================
// MOCK DATA - Development only
// Replace with Supabase queries in production
// ============================================

import type { Category, Author, ArticleWithRelations } from '@/types/blog'

// ============================================
// CATEGORIES
// ============================================

export const categories: Category[] = [
  {
    id: '1',
    name: 'Content marketing',
    slug: 'content-marketing',
    description: 'Strategie treści, copywriting, storytelling',
    color: '#B91C1C',
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'AI marketing',
    slug: 'ai-marketing',
    description: 'Sztuczna inteligencja w marketingu, automatyzacja, narzędzia AI',
    color: '#4F46E5',
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },
  {
    id: '3',
    name: 'Case study',
    slug: 'case-study',
    description: 'Przykłady z życia, analiza kampanii, wyniki',
    color: '#059669',
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },
  {
    id: '4',
    name: 'Influencer marketing',
    slug: 'influencer-marketing',
    description: 'Współpraca z influencerami, weryfikacja, kampanie',
    color: '#D97706',
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },
  {
    id: '5',
    name: 'Strategia',
    slug: 'strategia',
    description: 'Planowanie, audyty, roadmapy marketingowe',
    color: '#7C3AED',
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },
]

// ============================================
// AUTHORS
// ============================================

export const authors: Author[] = [
  {
    id: '1',
    name: 'Karol Dębkowski',
    slug: 'karol-debkowski',
    bio: '12 lat w marketingu. Połowę w Azji - od L\'Oréal Korea po Netflix Japan. Widziałem kampanie za miliony dolarów i takie za grosze, które działały lepiej. Dane nie kłamią.',
    avatar: '/authors/karol.jpg',
    role: 'Founder & CEO',
    email: 'karol@visuana.pl',
    social_links: [
      { platform: 'linkedin', href: 'https://linkedin.com/in/karoldebkowski' },
      { platform: 'twitter', href: 'https://twitter.com/karoldebkowski' },
    ],
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Anna Kowalska',
    slug: 'anna-kowalska',
    bio: 'Content strategist z 8-letnim doświadczeniem. Specjalizuje się w B2B content marketingu i SEO copywritingu.',
    avatar: '/authors/anna.jpg',
    role: 'Content Director',
    social_links: [
      { platform: 'linkedin', href: 'https://linkedin.com/in/annakowalska' },
    ],
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2025-01-01T00:00:00Z',
  },
]

// ============================================
// ARTICLES
// ============================================

export const articles: ArticleWithRelations[] = [
  {
    id: '1',
    title: 'Jak L\'Oréal Korea osiągnęła 300% wzrostu w social media',
    slug: 'loreal-korea-case-study',
    excerpt: 'Case study z mojego doświadczenia w Korei. Konkretne taktyki, które możesz zastosować od dziś. Bez marketingowego bełkotu.',
    content: `
# Jak L'Oréal Korea osiągnęła 300% wzrostu w social media

**TL;DR:** Zrezygnowaliśmy z globalnych kreacji, postawiliśmy na lokalne twarze i user-generated content. Wynik? 300% wzrost engagement w 6 miesięcy.

## Kontekst

2019 rok. Jestem w Seulu, odpowiedzialny za digital marketing L'Oréal Korea. Problem? Globalne kampanie nie działają. Koreańskie konsumentki są wymagające - znają się na urodzie lepiej niż większość beauty influencerów na Zachodzie.

## Co nie działało

1. **Globalne kreacje** - Zachodnie modelki nie rezonowały z lokalnym rynkiem
2. **Standardowe KOLs** - Top influencerzy byli drodzy i mało autentyczni
3. **Produkcja high-end** - Perfekcyjne zdjęcia wyglądały zbyt "reklamowo"

## Nasza strategia

### 1. Micro-influencerzy zamiast celebrytów

Zamiast 5 mega-influencerów, zainwestowaliśmy w 200 micro-influencerów (10-50k followersów). Koreańki ufają rekomendacjom "zwykłych dziewczyn" bardziej niż celebrytom.

**Dane:** Micro-influencerzy generowali 4x wyższy engagement rate przy 1/10 budżetu.

### 2. User-generated content jako główny driver

Stworzyliśmy challenge #MyLorealRoutine - proste zdjęcie przed/po z naszymi produktami. Nagrodą była współpraca z marką (nie pieniądze!).

**Wynik:** 50,000+ organicznych postów w 3 miesiące.

### 3. Lokalizacja, nie tłumaczenie

Przepisaliśmy całą komunikację od zera. Zamiast tłumaczyć globalne copy, stworzyliśmy content, który brzmiał jak rozmowa między przyjaciółkami.

## Rezultaty

| Metryka | Przed | Po | Zmiana |
|---------|-------|-----|--------|
| Engagement rate | 1.2% | 4.8% | +300% |
| Organic reach | 500K | 2.1M | +320% |
| UGC posts/miesiąc | 2,000 | 18,000 | +800% |
| Cost per engagement | $0.45 | $0.12 | -73% |

## Lekcje dla Twojej marki

1. **Lokalizuj, nie tłumacz** - Treść musi brzmieć naturalnie w danym języku
2. **Micro > Macro** - Mniejsze konta często mają lepsze zaangażowanie
3. **UGC > profesjonalne produkcje** - Autentyczność wygrywa
4. **Testuj małe, skaluj duże** - Zaczęliśmy od jednego produktu, potem rozszerzyliśmy

---

*Masz pytania o marketing na rynkach azjatyckich? [Umów bezpłatną konsultację](/kontakt).*
    `.trim(),
    featured_image: '/blog/loreal-korea.jpg',
    featured_image_alt: 'L\'Oréal Korea social media case study',
    category_id: '3',
    author_id: '1',
    status: 'published',
    published_at: '2025-01-10T10:00:00Z',
    reading_time: 8,
    meta_title: 'Case study: L\'Oréal Korea 300% wzrost w social media | Visuana',
    meta_description: 'Jak L\'Oréal Korea osiągnęła 300% wzrostu engagement w social media. Konkretne taktyki micro-influencerów i UGC do zastosowania.',
    tags: ['case-study', 'social-media', 'korea', 'loreal', 'influencer-marketing'],
    created_at: '2025-01-08T00:00:00Z',
    updated_at: '2025-01-10T10:00:00Z',
    category: categories[2],
    author: authors[0],
  },
  {
    id: '2',
    title: 'AI w marketingu: hype vs rzeczywistość (dane z 2025)',
    slug: 'ai-marketing-2025',
    excerpt: 'Przeanalizowałem 50 firm. Oto co naprawdę działa, a co to tylko marketing narzędzi AI.',
    content: `
# AI w marketingu: hype vs rzeczywistość (dane z 2025)

**Hot take:** 90% narzędzi AI marketingowych to przepakowane GPT z wysoką ceną. Ale te 10% może zmienić Twoją firmę.

## Metodologia

Przeanalizowałem 50 firm (głównie SMB, 10-200 pracowników) używających narzędzi AI w marketingu przez minimum 6 miesięcy. Zebrałem dane o:
- ROI z wdrożenia
- Czas zaoszczędzony na zadaniach
- Jakość outputu (ocena ludzka)
- Retencja narzędzia po 6 miesiącach

## Co działa

### 1. AI do researchu i analizy konkurencji
**Oszczędność:** 15-20h/miesiąc
**ROI:** 400-600%

Narzędzia jak Perplexity czy Claude do analizy rynku zastępują godziny manualnego researchu. Kluczowe: promptowanie i weryfikacja danych.

### 2. Asystenci do pisania (z redakcją ludzką)
**Oszczędność:** 8-12h/miesiąc
**ROI:** 200-300%

AI generuje drafty, człowiek redaguje. Próby pełnej automatyzacji contentu = spadek jakości o 60%.

### 3. Chatboty dla support i kwalifikacji leadów
**Oszczędność:** 30-40h/miesiąc
**ROI:** 500-800%

Tu AI naprawdę błyszczy. Proste zapytania obsługiwane 24/7, zespół może się skupić na złożonych problemach.

## Co nie działa

### 1. Pełna automatyzacja contentu
**Reality check:** Jakość spada, engagement spada, SEO może ucierpieć

### 2. "AI strategia" bez ludzkiego nadzoru
**Reality check:** AI nie rozumie Twojego biznesu. Musi być narzędziem, nie decydentem.

### 3. Drogi enterprise AI dla SMB
**Reality check:** GPT-4 + dobre prompty > narzędzie za $500/miesiąc dla większości przypadków.

## Rekomendacje

1. **Zacznij od problemu, nie od narzędzia** - Gdzie tracisz najwięcej czasu?
2. **Human-in-the-loop zawsze** - AI wspiera, nie zastępuje
3. **Mierz ROI bezlitośnie** - Jeśli narzędzie nie przynosi oszczędności w 3 miesiące, wyrzuć

---

*Chcesz pomóc we wdrożeniu AI w Twoim marketingu? [Porozmawiajmy](/kontakt).*
    `.trim(),
    featured_image: '/blog/ai-marketing.jpg',
    featured_image_alt: 'AI w marketingu - analiza 2025',
    category_id: '2',
    author_id: '1',
    status: 'published',
    published_at: '2025-01-08T10:00:00Z',
    reading_time: 6,
    meta_title: 'AI w marketingu 2025: co działa, a co nie | Visuana',
    meta_description: 'Analiza 50 firm używających AI w marketingu. Konkretne dane o ROI, oszczędności czasu i jakości. Bez hype\'u.',
    tags: ['ai', 'marketing', 'analiza', 'narzedzia', 'automatyzacja'],
    created_at: '2025-01-06T00:00:00Z',
    updated_at: '2025-01-08T10:00:00Z',
    category: categories[1],
    author: authors[0],
  },
  {
    id: '3',
    title: 'Dlaczego 90% strategii content marketingu nie działa',
    slug: 'content-marketing-bledy',
    excerpt: 'Hot take: większość firm robi content marketing źle. Oto 5 błędów i jak je naprawić.',
    content: `
# Dlaczego 90% strategii content marketingu nie działa

**Plot twist:** Problem nie jest w content marketingu. Problem jest w jego wykonaniu.

## 5 błędów, które zabijają Twój content marketing

### 1. Piszesz dla algorytmu, nie dla ludzi

**Symptom:** Artykuły pełne keywordów, ale nudne jak flaki z olejem.

**Fix:** Najpierw napisz dla człowieka, potem optymalizuj. Jeśli Ty nie chcesz tego czytać, nikt inny też nie chce.

### 2. Brak dystrybucji

**Symptom:** Świetne artykuły, które czyta 50 osób.

**Fix:** Zasada 20/80 - 20% czasu na tworzenie, 80% na dystrybucję. Newsletter, LinkedIn, współprace, remarketing.

### 3. Nierealistyczne oczekiwania czasowe

**Symptom:** "Po 3 miesiącach nie widzimy ruchu, content marketing nie działa."

**Fix:** Minimum 6-12 miesięcy na widoczne rezultaty. To maraton, nie sprint.

### 4. Brak oryginalności

**Symptom:** Kolejny artykuł "10 trendów marketingowych 2025".

**Fix:** Własne dane, case studies, kontrariańskie opinie. Niech ludzie cytują CIEBIE.

### 5. Brak powiązania z biznesem

**Symptom:** Ruch rośnie, leady nie.

**Fix:** Każdy artykuł musi mieć CTA i ścieżkę do konwersji. Ruch bez konwersji = vanity metric.

## Co robić zamiast tego

1. **Publikuj mniej, lepiej** - 1 świetny artykuł/tydzień > 5 przeciętnych
2. **Buduj newsletter** - Własna lista > algorytmy platform
3. **Mierz to, co ważne** - Leady, nie pageviews
4. **Repurpose** - Jeden artykuł = 5 postów LinkedIn + 10 tweetów + newsletter

---

*Potrzebujesz strategii content marketingowej, która działa? [Umów konsultację](/kontakt).*
    `.trim(),
    featured_image: '/blog/content-marketing.jpg',
    featured_image_alt: 'Błędy w content marketingu',
    category_id: '1',
    author_id: '1',
    status: 'published',
    published_at: '2025-01-05T10:00:00Z',
    reading_time: 5,
    meta_title: '5 błędów content marketingu i jak ich uniknąć | Visuana',
    meta_description: 'Dlaczego większość strategii content marketingu nie działa? 5 najczęstszych błędów i konkretne rozwiązania.',
    tags: ['content-marketing', 'strategia', 'bledy', 'porady'],
    created_at: '2025-01-03T00:00:00Z',
    updated_at: '2025-01-05T10:00:00Z',
    category: categories[0],
    author: authors[0],
  },
  {
    id: '4',
    title: 'Jak weryfikować influencerów przed współpracą (checklist)',
    slug: 'weryfikacja-influencerow-checklist',
    excerpt: 'Kompletna checklista do weryfikacji influencerów. Uniknij fake followersów i zmarnowanego budżetu.',
    content: `
# Jak weryfikować influencerów przed współpracą

**Statystyka:** 50-70% kont influencerów ma sztuczne followery. Oto jak ich rozpoznać.

## Checklist weryfikacji (10 punktów)

### 1. Engagement Rate
- Micro (10-50k): 3-6% to norma
- Mid (50-200k): 2-4% to norma
- Macro (200k+): 1-2% to norma

**Red flag:** Powyżej lub poniżej normy o 50%+

### 2. Komentarze vs polubienia
Stosunek powinien być 1-5%.

**Red flag:** Tylko polubienia, brak komentarzy = boty.

### 3. Jakość komentarzy
Przeczytaj 20 losowych komentarzy.

**Red flag:** Generyczne emoji, 1-2 słowa, niezwiązane z treścią.

### 4. Wzrost followersów
Sprawdź w Social Blade.

**Red flag:** Gwałtowne skoki (kupione), nagłe spadki (czystka botów).

### 5. Audience demographics
Poproś o insights lub użyj HypeAuditor.

**Red flag:** Audience z krajów niewspółgrających z contentem.

### 6. Poprzednie współprace
Sprawdź oznaczenia #ad, #sponsored.

**Red flag:** Brak współprac lub same jednorazowe.

### 7. Jakość contentu
Czy content jest spójny? Czy ma osobowość?

**Red flag:** Generyczne zdjęcia stockowe, niespójny styl.

### 8. Responsywność
Napisz do influencera przed współpracą.

**Red flag:** Brak odpowiedzi lub niechęć do negocjacji.

### 9. Media kit
Poproś o media kit z danymi.

**Red flag:** Brak media kitu = brak profesjonalizmu.

### 10. Wyniki poprzednich kampanii
Poproś o case studies lub referencje.

**Red flag:** Odmowa lub "nie śledzimy wyników".

## Narzędzia do weryfikacji

- **HypeAuditor** - analiza audience
- **Social Blade** - historyczny wzrost
- **Not Just Analytics** - dla Instagrama
- **Modash** - baza influencerów

---

*Potrzebujesz pomocy z influencer marketingiem? [Skontaktuj się z nami](/kontakt).*
    `.trim(),
    featured_image: '/blog/influencer-verification.jpg',
    featured_image_alt: 'Weryfikacja influencerów checklist',
    category_id: '4',
    author_id: '2',
    status: 'published',
    published_at: '2025-01-02T10:00:00Z',
    reading_time: 7,
    meta_title: 'Checklist weryfikacji influencerów | Visuana',
    meta_description: 'Kompletna 10-punktowa checklista do weryfikacji influencerów. Uniknij fake followersów i zmarnowanego budżetu.',
    tags: ['influencer-marketing', 'weryfikacja', 'checklist', 'social-media'],
    created_at: '2024-12-30T00:00:00Z',
    updated_at: '2025-01-02T10:00:00Z',
    category: categories[3],
    author: authors[1],
  },
]

// ============================================
// UTILITY FUNCTIONS
// ============================================

export function getArticleBySlug(slug: string): ArticleWithRelations | undefined {
  return articles.find(article => article.slug === slug)
}

export function getArticlesByCategory(categorySlug: string): ArticleWithRelations[] {
  const category = categories.find(c => c.slug === categorySlug)
  if (!category) return []
  return articles.filter(article => article.category_id === category.id)
}

export function getArticlesByAuthor(authorSlug: string): ArticleWithRelations[] {
  const author = authors.find(a => a.slug === authorSlug)
  if (!author) return []
  return articles.filter(article => article.author_id === author.id)
}

export function getPublishedArticles(): ArticleWithRelations[] {
  return articles
    .filter(article => article.status === 'published')
    .sort((a, b) => new Date(b.published_at!).getTime() - new Date(a.published_at!).getTime())
}

export function getLatestArticles(count: number = 3): ArticleWithRelations[] {
  return getPublishedArticles().slice(0, count)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find(a => a.slug === slug)
}
