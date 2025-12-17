# DESIGN VARIANTS - Visuana Ultima

**Data:** 2025-12-05
**Status:** RESEARCH COMPLETE
**Autor:** Claude Code (4 parallel agents)

---

## Executive Summary

Ten dokument konsoliduje badania 4 agentów nad wariantami designu dla Visuana Ultima. Zawiera rekomendacje dla:
- Bibliotek UI
- Typografii
- Struktury strony
- Języka/copy

### Rekomendowane warianty (TL;DR)

| Kategoria | Rekomendacja | Alternatywa |
|-----------|--------------|-------------|
| **Biblioteki UI** | shadcn/ui + Motion One + Lucide | Radix UI + Motion |
| **Typografia** | Clash Display + Jakarta Sans + JetBrains Mono | Inter (obecny) |
| **Struktura** | Story-Driven + Content Hub (hybryda) | Classic Agency |
| **Copy/Język** | Data-Story Fusion (70% Data + 20% Story + 10% Humor) | Data-Driven |

---

## 1. BIBLIOTEKI UI

### Wariant A: shadcn/ui (REKOMENDOWANY)

**Skład:**
- shadcn/ui (komponenty Radix + Tailwind)
- Motion One (animacje)
- Lucide React (ikony)
- React Context (state)

**Pros:**
- Copy-paste approach (nie npm install) = pełna kontrola
- Doskonała integracja z Tailwind
- Accessible by default (Radix)
- Zero dependency lock-in

**Cons:**
- Wymaga ręcznego kopiowania komponentów
- Mniej "out of the box" niż pełne UI kits

### Wariant B: Radix UI + Custom

**Skład:**
- Radix UI Primitives (unstyled)
- Motion One (animacje)
- Phosphor Icons (ikony)
- Zustand (state)

**Pros:**
- Najwyższy poziom customizacji
- Zero CSS baggage

**Cons:**
- Więcej pracy na stylowanie
- Stroma krzywa uczenia

### Wariant C: Headless UI

**Skład:**
- Headless UI (Tailwind Labs)
- Motion One (animacje)
- Hero Icons (ikony)
- React Context (state)

**Pros:**
- Oficjalnie od Tailwind Labs
- Prosta integracja

**Cons:**
- Mniej komponentów niż Radix
- Ograniczona elastyczność

### Wariant D: Full UI Kit (Mantine/Chakra)

**Skład:**
- Mantine UI lub Chakra UI
- Built-in animations
- Built-in icons
- Built-in state

**Pros:**
- Wszystko w jednym
- Szybki development

**Cons:**
- Duży bundle size
- Mniejsza kontrola nad designem
- Tailwind redundancy

---

## 2. TYPOGRAFIA

### Wariant A: Minimalistyczny (OBECNY)

**Kombinacja:** Inter (all)
**Rozmiar:** ~30KB
**Score:** 37/55

**Pros:** Performance, czytelność, universal
**Cons:** Brak charakteru premium, zbyt powszechny

### Wariant B: Premium/Luxury

**Kombinacja:** Cormorant Garamond (headers) + Lato (body)
**Rozmiar:** ~70KB
**Score:** 43/55

**Pros:** Premium feel, elegancja
**Cons:** Serify wolniejsze do odczytu dla 70% Data, zbyt tradycyjny

### Wariant C: Tech/Modern (REKOMENDOWANY)

**Kombinacja:**
- Headers: Clash Display (Bold/Semibold)
- Body: Plus Jakarta Sans (Regular)
- Data: JetBrains Mono (Medium)

**Rozmiar:** ~125KB
**Score:** 48/55

**Font Sizes (Desktop):**
```css
h1: 52px / 1.1 / -0.025em / 700 (Clash)
h2: 40px / 1.15 / -0.015em / 700 (Clash)
h3: 30px / 1.25 / -0.01em / 600 (Clash)
h4: 24px / 1.3 / 0 / 600 (Clash)
body-lg: 18px / 1.6 / 400 (Jakarta)
body: 16px / 1.65 / 400 (Jakarta)
data: 16px / 1.4 / 0.01em / 500 (JetBrains)
```

**Pros:**
- Idealny dla AI/tech branding
- Clash Display = silny, unikalny charakter
- Monospace dla danych = profesjonalizm
- Nowoczesny, wyróżniający

**Cons:**
- Cięższy (125KB)
- Clash wymaga self-hostingu (Fontshare)

**Gdzie pobrać:**
- Clash Display: https://www.fontshare.com/fonts/clash-display (FREE)
- Plus Jakarta Sans: Google Fonts
- JetBrains Mono: https://www.jetbrains.com/lp/mono/ (FREE)

### Wariant D: Editorial/Magazine

**Kombinacja:** PP Editorial New (headers) + IBM Plex (body/mono)
**Rozmiar:** ~175-195KB
**Score:** 43/55

**Pros:** Editorial, magazine-quality
**Cons:** Za heavy, płatny font (PP Editorial $99+)

### Porównanie typografii

| Kryteria | A: Minimal | B: Luxury | C: Tech | D: Editorial |
|----------|------------|-----------|---------|--------------|
| Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Premium Feel | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Tech/AI Vibe | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Uniqueness | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 70% Data Match | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Cost | FREE | FREE | FREE | PAID |

---

## 3. STRUKTURA STRONY

### Wariant A: Classic Agency

```
Homepage (/)
├── Usługi (/uslugi)
│   ├── Content Marketing
│   ├── Influencer Marketing
│   ├── Market Research Azja
│   └── AI Agents & Automatyzacja
├── Case Studies (/case-studies)
├── Blog (/blog)
├── O nas (/o-nas)
└── Kontakt (/kontakt)
```

**Time to First Lead:** 2-4 tygodnie
**SEO Potential:** Dobry
**Best For:** Korporacje, porównywanie ofert

### Wariant B: Story-Driven (REKOMENDOWANY dla Homepage)

```
Homepage (/)
├── Founder Story (/historia)
├── Problem & Solution (/problem)
├── Jak pracujemy (/proces)
├── Usługi (/uslugi) [skrócone]
├── Blog (/insights)
└── Kontakt (/zaczynamy)
```

**Time to First Lead:** 1-2 tygodnie
**Conversion Rate:** 5-8% (najwyższy)
**Best For:** Przedsiębiorcy szukający partnera, personal brands

### Wariant C: Product-Led

```
Homepage (/)
├── Pricing (/cennik)
├── Features (/funkcje)
├── How It Works (/jak-dziala)
├── Blog (/blog)
└── About (/o-nas)
```

**Time to First Lead:** 1 tydzień
**Best For:** JDG, self-service buyers

### Wariant D: Content Hub (REKOMENDOWANY dla Bloga)

```
Homepage (Blog Hub) (/)
├── Kategorie
│   ├── Content Marketing
│   ├── Influencer Marketing
│   ├── AI & Automation
│   └── Asia Business
├── Najpopularniejsze
├── Newsletter
├── Usługi (sidebar/footer)
└── O mnie
```

**Time to First Lead:** 3-6 miesięcy
**SEO Potential:** Doskonały (long-term)
**Best For:** Thought leadership, organic growth

### Rekomendacja: HYBRYDA

**Story-Driven Homepage + Content Hub Blog:**

```
Homepage (Story-Driven)
  ↓
Founder Story → Problem/Solution → Usługi (3-5)
  ↓                                    ↓
Blog (Content Hub) ←--linkowanie--→ Case Studies
  ↓
Newsletter → Lead Nurturing → Konwersja
```

**Dlaczego:**
1. Korea credentials = silny hook (Story-Driven)
2. Long-term SEO dominacja (Content Hub)
3. Jasne usługi dla zaawansowanych (Classic Agency)

---

## 4. JĘZYK/COPY

### Wariant A: Data-Driven

**Styl:** Liczby, metryki, ROI, case studies
**Engagement Rate:** 3-5%
**Lead Quality:** Wysoka
**Time to Convert:** Szybki (1-2 dni)

**Przykład headline:**
> "300% wzrostu organicznego ruchu w 6 miesięcy. Bez płatnych reklam."

**Best For:** Manager Piotr (30-40), Przedsiębiorca Marek (bootstrap)

### Wariant B: Storytelling

**Styl:** Narracja, journey, emocjonalna więź
**Engagement Rate:** 6-8%
**Lead Quality:** Średnia
**Time to Convert:** Średni (1-2 tyg)

**Przykład headline:**
> "Byłem pierwszym Polakiem ze stypendium rządowym w Korei. Teraz pomagam Ci wykorzystać azjatyckie trendy."

**Best For:** Influencerka Ania (25-35), osoby z Asia-related biznesem

### Wariant C: Bold/Provocative

**Styl:** Kontrowersyjny, kwestionujący status quo
**Engagement Rate:** 8-12% (najwyższy)
**Lead Quality:** Średnia
**Risk Level:** Wysoki

**Przykład headline:**
> "Twoja agencja kradnie Twoje pieniądze. Udowodnię Ci to w 15 minut."

**Best For:** Frustrated buyers, disruptors

### Wariant D: Educational

**Styl:** Przewodniki, how-to, deep dives
**Engagement Rate:** 1-3%
**Lead Quality:** Bardzo wysoka
**SEO Value:** Bardzo wysokie

**Przykład headline:**
> "Kompletny przewodnik po influencer marketingu w 2025 [12,000 słów]"

**Best For:** Research-heavy buyers, thought leadership

### Rekomendacja: DATA-STORY FUSION (REKOMENDOWANY)

**Formuła:** 70% Data + 20% Story + 10% Humor

**Przykład Homepage Hero:**
```
H1: Pierwszy Polak ze stypendium rządowym w Korei.
    Teraz: 300% wzrostu organicznego ruchu dla firm jak Twoja.

Subheader: L'Oréal, Netflix, BCG: sprawdzone strategie.
           AI-powered execution: ceny o 40% niższe niż tradycyjne agencje.

CTA Primary: "Bezpłatny audit + 15-minutowy call"
CTA Secondary: "Zobacz case study Netflix"
```

**Tone Guidelines:**
- Headlines: Bold/Data-driven (numbers attract)
- Body copy: Storytelling (Korea, founder credentials)
- CTAs: Action-oriented (clear benefit)
- Microcopy: Touch of humor ("Nie wysyłamy spamu. Obiecujemy.")

---

## 5. IMPLEMENTACJA

### Faza 1: Quick Wins (1-2 dni)

1. Dodać Clash Display jako font-display (tylko headers)
2. Zachować Inter dla body (hybrid approach)
3. Zaktualizować hero copy według Data-Story Fusion

### Faza 2: Pełna migracja typografii (4-5 dni)

1. Download Clash Display (600, 700) z Fontshare
2. Dodać Plus Jakarta Sans via Google Fonts
3. Skonfigurować tailwind.config.ts
4. Migrować komponenty do nowych fontów
5. Testy accessibility + performance

### Faza 3: Struktura strony (ongoing)

1. Homepage: Story-Driven layout
2. Blog: Content Hub structure
3. Usługi: Classic Agency subpages
4. Newsletter: Lead nurturing automation

---

## 6. A/B TESTING PLAN

### Test 1: Headlines

**A (Data):** "300% wzrostu organicznego ruchu w 6 miesięcy"
**B (Story):** "Pierwszy Polak ze stypendium w Korei..."

Metric: CTR na główny CTA

### Test 2: CTA Copy

**A (Low pressure):** "Bezpłatny audit 15 min"
**B (High pressure):** "Pokaż mi, gdzie tracę kasę"

Metric: Conversion rate do formularza

### Test 3: Typography

**A (Inter):** Current font
**B (Clash + Jakarta):** New font combo

Metric: Time on page + scroll depth

---

## Pliki źródłowe

- `TYPOGRAPHY-VARIANTS.md` - szczegółowa analiza typografii (870 linii)
- `agent-os/research/site-structure-variants.md` - struktura strony (334 linie)
- `agent-os/research/copy-language-variants.md` - język/copy (477 linii)

---

**Status:** READY FOR IMPLEMENTATION
**Next Step:** Aktualizacja SPEC-002 z wybranymi wariantami
