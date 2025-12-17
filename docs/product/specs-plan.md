# Plan Specyfikacji - Visuana Ultima

## Legenda

- 🔴 **BLOCKER** - musi być ukończone przed następnymi
- 🟡 **ZALEŻNY** - wymaga ukończenia poprzednich
- 🟢 **NIEZALEŻNY** - może być robiony równolegle

---

## WARSTWA 1: FUNDAMENTY (Blokery)

### SPEC-001: Brand Identity & Tone of Voice 🔴
**Priorytet:** KRYTYCZNY - blokuje cały content
**Szacowany czas:** 3-5 dni

**Podejście:** Reverse-engineering sukcesu - analiza najlepszych polskich twórców contentu, ekstrakcja wzorców, synteza do własnego ToV.

**Zawartość:**

**A) ANALIZA WZORCÓW (ekstrakcja z contentu)**
- Wybór 5-10 polskich twórców do analizy (np. Franek Georgiew, Artur Jabłoński, Paweł Tkaczyk...)
- Zebranie 20-30 postów od każdego (LinkedIn, Twitter, blog)
- Analiza: hooki, struktura, język, humor, wartości, engagement
- Synteza: co bierzemy, czego unikamy, co dodajemy

**B) GŁOS FOUNDERA (Karol Dębkowski)**
- Na podstawie analizy wzorców + naturalne tendencje
- Jak Karol pisze: hook, struktura, humor, słownictwo
- 3-5 próbnych postów do walidacji

**C) GŁOS "PRACOWNIKÓW" (jeśli różny)**
- Bardziej formalny? Mniej osobisty?
- Template dla innych autorów bloga

**D) VISUAL IDENTITY**
- Logo guidelines (nowe, prostsze)
- Paleta kolorów (royal red jako dominujący)
- Typografia (fonty dla web)

**E) SUBMARKI - SEONYU**
- Osobny ToV: profesjonalny, ekspercki, międzykulturowy
- Mniej humoru, więcej danych
- Ekstrakcja z twórców piszących o Azji/eksporcie

**Deliverables:**
- `agent-os/standards/brand/tone-of-voice.md` (główny ToV Visuana)
- `agent-os/standards/brand/tone-of-voice-extraction.md` (metodologia + analizy)
- `agent-os/standards/brand/visual-identity.md`
- `agent-os/standards/brand/submarki/seonyu-tov.md`
- `agent-os/standards/brand/przykladowe-posty/` (próbne teksty)

---

### SPEC-002: Design System & UI Components 🔴
**Priorytet:** KRYTYCZNY - blokuje frontend
**Szacowany czas:** 3-4 dni
**Zależności:** SPEC-001 (kolory, fonty)

**Zawartość:**
- Tailwind config (kolory, spacing, breakpoints)
- Komponenty bazowe:
  - Button (primary, secondary, ghost)
  - Card (article, service, testimonial)
  - Hero sections (warianty)
  - Navigation (desktop, mobile)
  - Footer
  - Forms (contact, newsletter)
- Komponenty bloga:
  - ArticleCard
  - ArticleList
  - ArticlePage
  - CategoryFilter
  - AuthorBio
- Animacje i micro-interactions

**Deliverables:**
- Tailwind config
- Komponenty w `/src/components/ui/`
- Storybook (opcjonalnie)

---

## WARSTWA 2: INFRASTRUKTURA TECHNICZNA

### SPEC-003: Blog System (Strapi + Next.js) 🟡
**Priorytet:** WYSOKI - fundament content machine
**Szacowany czas:** 4-5 dni
**Zależności:** SPEC-002 (komponenty UI)

**Zawartość:**
- Konfiguracja Strapi (content types):
  - Article (title, slug, content, excerpt, featuredImage, category, author, publishedAt)
  - Category (name, slug, description)
  - Author (name, bio, avatar)
  - Tag (name, slug)
- Integracja Next.js:
  - API routes / Server Actions
  - ISR (Incremental Static Regeneration)
  - SEO meta tags (OpenGraph, Twitter)
- Strony:
  - `/blog` - lista artykułów
  - `/blog/[slug]` - pojedynczy artykuł
  - `/blog/kategoria/[category]` - filtrowanie
- RSS feed
- Sitemap dynamiczny

**Deliverables:**
- Strapi content types
- Next.js pages dla bloga
- Komponenty bloga (REUŻYWALNE!)

---

### SPEC-004: SEO & Analytics Foundation 🟡
**Priorytet:** WYSOKI
**Szacowany czas:** 2 dni
**Zależności:** SPEC-003

**Zawartość:**
- Meta tags system (per-page SEO)
- Structured data (JSON-LD):
  - Organization
  - Article
  - Service
  - FAQ
- Google Analytics 4 setup
- Google Search Console
- Sitemap.xml (dynamiczny)
- Robots.txt
- OpenGraph images (auto-generated?)

**Deliverables:**
- SEO utilities
- Analytics integration
- Verification files

---

## WARSTWA 3: STRONY GŁÓWNE

### SPEC-005: Homepage Visuana 🟡
**Priorytet:** WYSOKI
**Szacowany czas:** 3-4 dni
**Zależności:** SPEC-001, SPEC-002

**Zawartość:**
- Hero section (bold statement + CTA)
- Sekcja usług (5 obszarów: Content, Influencer, Azja, AI, Apps)
- Social proof (logo klientów: L'Oréal, Netflix, etc.)
- Founder story (credentials, ale z humorem)
- Najnowsze artykuły (z bloga)
- CTA kontaktowy
- Footer

**Deliverables:**
- `/app/page.tsx`
- Sekcje jako komponenty

---

### SPEC-006: Strony Usługowe (Szablon) 🟡
**Priorytet:** WYSOKI
**Szacowany czas:** 3 dni
**Zależności:** SPEC-001, SPEC-002, SPEC-005

**Zawartość:**
- Szablon strony usługowej:
  - Hero z value proposition
  - Problem → Rozwiązanie
  - Jak działamy (proces)
  - Dla kogo (persony)
  - Case study / Przykłady
  - Cennik (opcjonalnie)
  - FAQ
  - CTA
- Pierwsza usługa: Content Marketing
- Druga usługa: AI Agents / Multi-agent

**Deliverables:**
- Szablon `/app/uslugi/[slug]/page.tsx`
- 2 pierwsze strony usługowe

---

### SPEC-007: Strona Kontakt 🟡
**Priorytet:** ŚREDNI
**Szacowany czas:** 1-2 dni
**Zależności:** SPEC-002

**Zawartość:**
- Formularz kontaktowy (Supabase lub email)
- Informacje kontaktowe
- Mapa (opcjonalnie)
- FAQ szybkie

**Deliverables:**
- `/app/kontakt/page.tsx`
- Form handling

---

## WARSTWA 4: SUBMARKI

### SPEC-008: Seonyu - Brand & Landing 🟡
**Priorytet:** ŚREDNI
**Szacowany czas:** 3-4 dni
**Zależności:** SPEC-001 (ToV Seonyu), SPEC-002, SPEC-003

**Zawartość:**
- **Tone of Voice Seonyu:**
  - Profesjonalny, ekspercki
  - Międzykulturowy (Polska ↔ Azja)
  - Mniej humoru, więcej danych
- Landing page seonyu.pl
- Usługi market research:
  - Badanie rynku koreańskiego
  - Badanie patentów
  - Odkrywanie produktów
- Blog section (reużycie SPEC-003!)
- Integracja z Visuana (cross-linking)

**Deliverables:**
- Seonyu ToV w `agent-os/standards/brand/`
- Landing page
- Konfiguracja domeny

---

## WARSTWA 5: CONTENT & AUTOMATYZACJA

### SPEC-009: Content Strategy & Calendar 🟡
**Priorytet:** WYSOKI (po ToV!)
**Szacowany czas:** 2-3 dni
**Zależności:** SPEC-001 (Tone of Voice!), SPEC-003

**Zawartość:**
- Strategia treści:
  - Pilary contentowe (5 obszarów usług)
  - Klastry tematyczne
  - Słowa kluczowe (SEO)
  - Słowa kluczowe (AIO - AI chatbots)
- Kalendarz pierwszych 20 artykułów:
  - Tematy
  - Kategorie
  - Target keywords
  - Outline
- Wytyczne dla pisania (zgodne z ToV!)
- Prompty dla AI do generowania drafts

**Deliverables:**
- Content strategy doc
- Kalendarz artykułów
- Writing guidelines (z ToV)

---

### SPEC-010: Content Automation (n8n + Dify) 🟢
**Priorytet:** NISKI (Faza 3)
**Szacowany czas:** 4-5 dni
**Zależności:** SPEC-003, SPEC-009

**Zawartość:**
- n8n workflow:
  - Trigger: nowy pomysł na artykuł
  - AI: generowanie draft (Dify)
  - Review: human in the loop
  - Publish: do Strapi
- Dify agent dla generowania treści
- Quality checks
- Automatyczne social media posts

**Deliverables:**
- n8n workflows
- Dify agent config

---

## KOLEJNOŚĆ REALIZACJI

```
TYDZIEŃ 1-2: FUNDAMENTY
├── SPEC-001: Brand Identity & Tone of Voice 🔴
└── SPEC-002: Design System & UI Components 🔴

TYDZIEŃ 3-4: INFRASTRUKTURA
├── SPEC-003: Blog System (Strapi + Next.js)
└── SPEC-004: SEO & Analytics

TYDZIEŃ 5-6: STRONY GŁÓWNE
├── SPEC-005: Homepage Visuana
├── SPEC-006: Strony Usługowe (2 pierwsze)
└── SPEC-007: Strona Kontakt

TYDZIEŃ 7-8: CONTENT MACHINE
├── SPEC-009: Content Strategy & Calendar
└── [Pierwsze artykuły na blogu]

TYDZIEŃ 9+: ROZSZERZENIA
├── SPEC-008: Seonyu submarką
└── SPEC-010: Content Automation
```

---

## ZALEŻNOŚCI (DIAGRAM)

```
SPEC-001 (ToV) ──┬──→ SPEC-002 (Design) ──→ SPEC-003 (Blog)
                 │                          │
                 │                          ├──→ SPEC-005 (Homepage)
                 │                          │
                 │                          └──→ SPEC-006 (Usługi)
                 │
                 └──→ SPEC-009 (Content Strategy) ──→ [Artykuły]
                                                      │
                                                      └──→ SPEC-010 (Automation)

SPEC-001 (Seonyu ToV) ──→ SPEC-008 (Seonyu Landing)
```

---

## UWAGI

1. **SPEC-001 jest absolutnym blokerem** - bez Tone of Voice nie możemy pisać żadnego contentu
2. **Blog system (SPEC-003) musi być reużywalny** - ten sam kod dla Visuana i submarek
3. **Strony usługowe mogą być dodawane iteracyjnie** - zaczynamy od 2, potem kolejne
4. **Seonyu może poczekać** - najpierw core Visuana
5. **Content automation to Faza 3** - ręczne pisanie na początek
