# SPEC-006: Service Pages

**Status:** 🟡 Planning
**Created:** 2025-12-05
**Dependencies:** SPEC-001 ✅, SPEC-002 ✅

---

## Overview

Strony usługowe Visuana Ultima prezentujące ofertę agencji. Każda strona z dedykowaną treścią, case studies, CTA i SEO.

---

## Objectives

1. **Content Marketing** - Strona usługi content marketingu
2. **Influencer Marketing** - Strona usługi influencer marketingu
3. **Market Research Azja** - Strona usługi badań rynku azjatyckiego
4. **AI Agents & Automatyzacja** - Strona usługi AI w marketingu

---

## Page Structure

### URL Structure

```
/uslugi                          # Lista usług
/uslugi/content-marketing        # Content Marketing
/uslugi/influencer-marketing     # Influencer Marketing
/uslugi/market-research-azja     # Market Research Asia
/uslugi/ai-agents                # AI Agents & Automation
```

### Page Template (każda usługa)

```
[Hero Section]
- H1: Nazwa usługi
- Subheader: Value proposition (1-2 zdania)
- CTA Primary: "Bezpłatna konsultacja"
- CTA Secondary: "Zobacz case study"

[Problem Section]
- Nagłówek: "Czy to brzmi znajomo?"
- 3-4 pain points target audience
- Hook: "Jest na to rozwiązanie..."

[Solution Section]
- Nagłówek: "Jak działamy"
- 3-4 key features/benefits
- Ikony + krótkie opisy

[Process Section]
- Nagłówek: "Jak wygląda współpraca"
- 4 kroki procesu (timeline visual)
- Krok 1: Konsultacja
- Krok 2: Strategia
- Krok 3: Realizacja
- Krok 4: Optymalizacja

[Case Study Section]
- Nagłówek: "Wyniki, które mówimy same za siebie"
- 1-2 featured case studies (z liczbami)
- Link: "Zobacz więcej case studies"

[Pricing/Packages Section] (optional)
- 2-3 pakiety cenowe
- CTA: "Wybierz pakiet" lub "Zapytaj o wycenę"

[FAQ Section]
- 5-7 najczęstszych pytań
- Schema markup dla Google

[CTA Section]
- Nagłówek: "Gotowy na wzrost?"
- Formularz kontaktowy lub CTA button
```

---

## Service Pages Content

### 1. Content Marketing (`/uslugi/content-marketing`)

**H1:** Content Marketing, który przynosi wyniki
**Subheader:** Strategia treści oparta na danych, nie domysłach. 300% wzrostu organicznego ruchu w 6 miesięcy.

**Key Features:**
- AI-powered keyword research
- SEO-optimized content creation
- Performance analytics dashboard
- Content distribution strategy

**Case Study:** L'Oréal Poland - +180% organic traffic

**Keywords:** content marketing, strategia treści, SEO content, blog firmowy

---

### 2. Influencer Marketing (`/uslugi/influencer-marketing`)

**H1:** Influencer Marketing z gwarancją ROI
**Subheader:** Kampanie z influencerami, które sprzedają. Doświadczenie z L'Oréal, Netflix, HBO.

**Key Features:**
- Influencer vetting & verification
- Campaign strategy & creative
- Contract negotiation
- Performance tracking

**Case Study:** Netflix - Jadzia Kim campaign, 500K reach

**Keywords:** influencer marketing, kampania influencer, współpraca z influencerami

---

### 3. Market Research Azja (`/uslugi/market-research-azja`)

**H1:** Twój partner do ekspansji na rynki azjatyckie
**Subheader:** 7 lat doświadczenia w Korei i Azji. Badania rynku, kontakty biznesowe, lokalizacja.

**Key Features:**
- Korea market entry strategy
- Supplier sourcing & verification
- Cultural localization
- Business matchmaking

**Case Study:** Polski e-commerce - wejście na rynek koreański

**Keywords:** rynek azjatycki, Korea biznes, import z Azji, ekspansja azja

---

### 4. AI Agents & Automatyzacja (`/uslugi/ai-agents`)

**H1:** AI w marketingu to nie przyszłość. To teraźniejszość.
**Subheader:** Automatyzacja rutynowych zadań. Oszczędność 40% kosztów. Zero kompromisów na jakości.

**Key Features:**
- AI content generation (z human oversight)
- Marketing automation workflows
- Chatbot & customer service AI
- Predictive analytics

**Case Study:** SaaS client - 40% cost reduction, 2x output

**Keywords:** AI marketing, automatyzacja marketingu, AI agenci, marketing automation

---

## Technical Requirements

### Components (from SPEC-002)

- Hero (full-width with image/gradient)
- Feature cards (icon + title + description)
- Process timeline
- Case study card
- FAQ accordion
- CTA section
- Contact form

### SEO (from SPEC-004)

- Unique title & meta description per page
- JSON-LD Service schema
- Open Graph image per service
- Internal linking (cross-reference usługi)

### Performance

- ISR (Incremental Static Regeneration) - 1 hour
- Image optimization (WebP, responsive)
- Lazy loading for below-fold content

---

## Deliverables

| Deliverable | Status | Location |
|-------------|--------|----------|
| Service list page | ⬜ | `app/uslugi/page.tsx` |
| Content Marketing page | ⬜ | `app/uslugi/content-marketing/page.tsx` |
| Influencer Marketing page | ⬜ | `app/uslugi/influencer-marketing/page.tsx` |
| Market Research page | ⬜ | `app/uslugi/market-research-azja/page.tsx` |
| AI Agents page | ⬜ | `app/uslugi/ai-agents/page.tsx` |
| Service page template | ⬜ | `src/components/templates/ServicePage.tsx` |

---

## Copy Guidelines

**Tone:** Data-Story Fusion (70% Data + 20% Story + 10% Humor)
**Headlines:** Bold, number-driven (e.g., "300% wzrostu")
**Body:** Storytelling z credentials
**CTAs:** Action-oriented, low-pressure

**Reference:** `agent-os/research/DESIGN-VARIANTS.md` (sekcja 4: Język/Copy)

---

## Timeline

| Phase | Task | Duration |
|-------|------|----------|
| 1 | Service page template | 1 day |
| 2 | Content Marketing page | 0.5 day |
| 3 | Influencer Marketing page | 0.5 day |
| 4 | Market Research page | 0.5 day |
| 5 | AI Agents page | 0.5 day |
| 6 | Service list page | 0.5 day |
| 7 | Testing & SEO | 0.5 day |

**Total:** 4 days

---

## Revision History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-05 | Spec created | Claude Code |
