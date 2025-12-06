# Task Breakdown: SPEC-006 Service Pages

## Spec Info

| Field | Value |
|-------|-------|
| Spec ID | SPEC-006 |
| Status | COMPLETED |
| Created | 2025-12-05 |
| Dependencies | SPEC-001 (Visual Identity), SPEC-002 (Design System) |
| Estimated Duration | 4 days |

---

## Overview

Total Tasks: 45
Total Phases: 7

Strony uslugowe Visuana Ultima prezentujace oferte agencji. Kazda strona z dedykowana trescia, case studies, CTA i SEO.

---

## Task List

### Phase 1: Service Page Template & Reusable Components

**Dependencies:** SPEC-001, SPEC-002 (completed)
**Estimated Duration:** 1 day (8h)
**Assigned to:** ui-designer
**Status:** COMPLETED

#### Task Group 1.0: Service Page Template Components

- [x] 1.1 Write 4-6 focused tests for service page template components
  - Test ServiceHero component renders title, subtitle, and CTAs
  - Test ProblemSection component renders pain points
  - Test SolutionSection component renders features with icons
  - Test ProcessTimeline component renders 4 steps
  - Test FAQAccordion component expands/collapses items
  - Test CaseStudyCard component renders metrics

- [x] 1.2 Create ServiceHero component
  - **Location:** `src/components/sections/service-hero.tsx`
  - **Props:** title, subtitle, ctaPrimary, ctaSecondary, backgroundGradient
  - **Reuse:** Extend existing Hero component pattern from `src/components/sections/hero.tsx`
  - Full-width with gradient background (royal-red to charcoal)
  - H1 with bold typography, subtitle with muted color
  - Primary CTA: "Bezplatna konsultacja" (solid button)
  - Secondary CTA: "Zobacz case study" (outline button)

- [x] 1.3 Create ProblemSection component
  - **Location:** `src/components/sections/problem-section.tsx`
  - **Props:** heading, painPoints (array of strings), hookText
  - 3-4 pain points with checkmark/X icons
  - "Czy to brzmi znajomo?" pattern
  - Hook text transition to solution

- [x] 1.4 Create SolutionSection component
  - **Location:** `src/components/sections/solution-section.tsx`
  - **Props:** heading, features (array: icon, title, description)
  - 3-4 feature cards with icons
  - Grid layout: 1 col mobile, 2 cols tablet, 4 cols desktop
  - Reuse Card component pattern from `src/components/ui/card.tsx`

- [x] 1.5 Create ProcessTimeline component
  - **Location:** `src/components/sections/process-timeline.tsx`
  - **Props:** heading, steps (array: number, title, description)
  - Vertical timeline on mobile, horizontal on desktop
  - 4 steps: Konsultacja, Strategia, Realizacja, Optymalizacja
  - Connecting line between steps
  - Step numbers with royal-red accent

- [x] 1.6 Create CaseStudyCard component
  - **Location:** `src/components/cards/case-study-card.tsx`
  - **Props:** clientName, industry, metric, metricLabel, description, link
  - Large metric display (e.g., "+180%")
  - Client logo placeholder
  - Link to full case study
  - Hover effect (reuse hoverable Card pattern)

- [x] 1.7 Create FAQAccordion component
  - **Location:** `src/components/sections/faq-accordion.tsx`
  - **Props:** heading, items (array: question, answer)
  - Expandable/collapsible items
  - Only one item open at a time
  - Smooth height animation
  - Plus/minus icons for state indication
  - Keyboard accessible (Enter/Space to toggle)

- [x] 1.8 Create ServiceCTA component
  - **Location:** `src/components/sections/service-cta.tsx`
  - **Props:** heading, description, buttonLabel, buttonHref, variant
  - Reuse CTABox pattern from `src/components/sections/cta-box.tsx`
  - Full-width section with royal-red background
  - Form embed option vs simple button

- [x] 1.9 Create ServicePageTemplate composite component
  - **Location:** `src/components/templates/ServicePage.tsx`
  - Combines all section components
  - **Props:** ServicePageData interface
  - Consistent spacing between sections (py-16 md:py-24)
  - SEO metadata preparation

- [x] 1.10 Ensure Phase 1 tests pass
  - Run ONLY the 4-6 tests written in 1.1
  - Verify all components render correctly
  - Do NOT run entire test suite

**Acceptance Criteria:**
- 4-6 focused tests pass
- All section components render with correct props
- Components follow existing design system patterns
- Responsive layouts work across breakpoints
- Keyboard navigation works for FAQ accordion

---

### Phase 2: Content Marketing Page

**Dependencies:** Phase 1
**Estimated Duration:** 0.5 day (4h)
**Assigned to:** ui-designer
**Status:** COMPLETED

#### Task Group 2.0: Content Marketing Service Page

- [x] 2.1 Write 2-3 focused tests for Content Marketing page
  - Test page renders correct H1 and meta title
  - Test page includes all required sections
  - Test JSON-LD Service schema is present

- [x] 2.2 Create Content Marketing page route
  - **Location:** `src/app/uslugi/content-marketing/page.tsx`
  - Use ServicePageTemplate component
  - H1: "Content Marketing, ktory przynosi wyniki"
  - Subheader: "Strategia tresci oparta na danych, nie domyslach. 300% wzrostu organicznego ruchu w 6 miesiecy."

- [x] 2.3 Implement Content Marketing page content
  - **Pain Points:**
    - "Twoj blog nie generuje leadow?"
    - "Konkurencja wyprzedza Cie w Google?"
    - "Nie wiesz, jakie tresci tworzyc?"
  - **Key Features:**
    - AI-powered keyword research
    - SEO-optimized content creation
    - Performance analytics dashboard
    - Content distribution strategy
  - **Case Study:** L'Oreal Poland - +180% organic traffic

- [x] 2.4 Add Content Marketing page SEO metadata
  - Title: "Content Marketing | Visuana - Strategia Tresci"
  - Meta description: ~155 characters
  - Open Graph tags (title, description, image)
  - JSON-LD Service schema
  - Keywords: content marketing, strategia tresci, SEO content, blog firmowy

- [x] 2.5 Create Content Marketing FAQ content
  - 5-7 questions about content marketing services
  - FAQ Schema markup for Google
  - Questions: pricing, timeline, process, results, measurement

- [x] 2.6 Ensure Phase 2 tests pass
  - Run ONLY the 2-3 tests written in 2.1
  - Verify page renders all sections
  - Verify SEO metadata is correct

**Acceptance Criteria:**
- 2-3 focused tests pass
- Page accessible at `/uslugi/content-marketing`
- All sections render with correct content
- SEO metadata complete and valid
- FAQ schema valid

---

### Phase 3: Influencer Marketing Page

**Dependencies:** Phase 1
**Estimated Duration:** 0.5 day (4h)
**Assigned to:** ui-designer
**Status:** COMPLETED

#### Task Group 3.0: Influencer Marketing Service Page

- [x] 3.1 Write 2-3 focused tests for Influencer Marketing page
  - Test page renders correct H1 and meta title
  - Test page includes all required sections
  - Test JSON-LD Service schema is present

- [x] 3.2 Create Influencer Marketing page route
  - **Location:** `src/app/uslugi/influencer-marketing/page.tsx`
  - Use ServicePageTemplate component
  - H1: "Influencer Marketing z gwarancja ROI"
  - Subheader: "Kampanie z influencerami, ktore sprzedaja. Doswiadczenie z L'Oreal, Netflix, HBO."

- [x] 3.3 Implement Influencer Marketing page content
  - **Pain Points:**
    - "Influencerzy nie przynoszą sprzedazy?"
    - "Nie wiesz, jak wybrac odpowiednich tworcow?"
    - "Kampanie influencer marketing to dla Ciebie czarna magia?"
  - **Key Features:**
    - Influencer vetting & verification
    - Campaign strategy & creative
    - Contract negotiation
    - Performance tracking
  - **Case Study:** Netflix - Jadzia Kim campaign, 500K reach

- [x] 3.4 Add Influencer Marketing page SEO metadata
  - Title: "Influencer Marketing | Visuana - Kampanie z Influencerami"
  - Meta description: ~155 characters
  - Open Graph tags
  - JSON-LD Service schema
  - Keywords: influencer marketing, kampania influencer, wspolpraca z influencerami

- [x] 3.5 Create Influencer Marketing FAQ content
  - 5-7 questions about influencer marketing services
  - FAQ Schema markup
  - Questions: influencer selection, pricing models, ROI measurement, contracts

- [x] 3.6 Ensure Phase 3 tests pass
  - Run ONLY the 2-3 tests written in 3.1

**Acceptance Criteria:**
- 2-3 focused tests pass
- Page accessible at `/uslugi/influencer-marketing`
- All sections render with correct content
- SEO metadata complete and valid

---

### Phase 4: Market Research Asia Page

**Dependencies:** Phase 1
**Estimated Duration:** 0.5 day (4h)
**Assigned to:** ui-designer
**Status:** COMPLETED

#### Task Group 4.0: Market Research Asia Service Page

- [x] 4.1 Write 2-3 focused tests for Market Research Asia page
  - Test page renders correct H1 and meta title
  - Test page includes all required sections
  - Test JSON-LD Service schema is present

- [x] 4.2 Create Market Research Asia page route
  - **Location:** `src/app/uslugi/market-research-azja/page.tsx`
  - Use ServicePageTemplate component
  - H1: "Twoj partner do ekspansji na rynki azjatyckie"
  - Subheader: "7 lat doswiadczenia w Korei i Azji. Badania rynku, kontakty biznesowe, lokalizacja."

- [x] 4.3 Implement Market Research Asia page content
  - **Pain Points:**
    - "Chcesz wejsc na rynek azjatycki, ale nie wiesz od czego zaczac?"
    - "Boisz sie barier kulturowych i jezykowych?"
    - "Szukasz zaufanych dostawcow w Azji?"
  - **Key Features:**
    - Korea market entry strategy
    - Supplier sourcing & verification
    - Cultural localization
    - Business matchmaking
  - **Case Study:** Polski e-commerce - wejscie na rynek koreanski

- [x] 4.4 Add Market Research Asia page SEO metadata
  - Title: "Market Research Azja | Visuana - Ekspansja na Rynki Azjatyckie"
  - Meta description: ~155 characters
  - Open Graph tags
  - JSON-LD Service schema
  - Keywords: rynek azjatycki, Korea biznes, import z Azji, ekspansja azja

- [x] 4.5 Create Market Research Asia FAQ content
  - 5-7 questions about Asian market services
  - FAQ Schema markup
  - Questions: Korea entry, supplier verification, cultural differences, timeline

- [x] 4.6 Ensure Phase 4 tests pass
  - Run ONLY the 2-3 tests written in 4.1

**Acceptance Criteria:**
- 2-3 focused tests pass
- Page accessible at `/uslugi/market-research-azja`
- All sections render with correct content
- SEO metadata complete and valid

---

### Phase 5: AI Agents & Automation Page

**Dependencies:** Phase 1
**Estimated Duration:** 0.5 day (4h)
**Assigned to:** ui-designer
**Status:** COMPLETED

#### Task Group 5.0: AI Agents Service Page

- [x] 5.1 Write 2-3 focused tests for AI Agents page
  - Test page renders correct H1 and meta title
  - Test page includes all required sections
  - Test JSON-LD Service schema is present

- [x] 5.2 Create AI Agents page route
  - **Location:** `src/app/uslugi/ai-agents/page.tsx`
  - Use ServicePageTemplate component
  - H1: "AI w marketingu to nie przyszlosc. To terazniejszosc."
  - Subheader: "Automatyzacja rutynowych zadan. Oszczednosc 40% kosztow. Zero kompromisow na jakosci."

- [x] 5.3 Implement AI Agents page content
  - **Pain Points:**
    - "Twoj zespol tonie w powtarzalnych zadaniach?"
    - "Nie nadazasz za konkurencja, ktora juz korzysta z AI?"
    - "Boisz sie, ze AI zastapi Twoj zespol?"
  - **Key Features:**
    - AI content generation (z human oversight)
    - Marketing automation workflows
    - Chatbot & customer service AI
    - Predictive analytics
  - **Case Study:** SaaS client - 40% cost reduction, 2x output

- [x] 5.4 Add AI Agents page SEO metadata
  - Title: "AI Agents & Automatyzacja | Visuana - AI w Marketingu"
  - Meta description: ~155 characters
  - Open Graph tags
  - JSON-LD Service schema
  - Keywords: AI marketing, automatyzacja marketingu, AI agenci, marketing automation

- [x] 5.5 Create AI Agents FAQ content
  - 5-7 questions about AI marketing services
  - FAQ Schema markup
  - Questions: AI capabilities, human oversight, implementation timeline, cost savings

- [x] 5.6 Ensure Phase 5 tests pass
  - Run ONLY the 2-3 tests written in 5.1

**Acceptance Criteria:**
- 2-3 focused tests pass
- Page accessible at `/uslugi/ai-agents`
- All sections render with correct content
- SEO metadata complete and valid

---

### Phase 6: Service List Page

**Dependencies:** Phase 2, 3, 4, 5
**Estimated Duration:** 0.5 day (4h)
**Assigned to:** ui-designer
**Status:** COMPLETED

#### Task Group 6.0: Service List Overview Page

- [x] 6.1 Write 2-3 focused tests for Service List page
  - Test page renders all 4 service cards
  - Test page renders correct H1
  - Test service cards link to correct URLs

- [x] 6.2 Create Service List page route
  - **Location:** `src/app/uslugi/page.tsx`
  - H1: "Nasze uslugi"
  - Subheader: "Kompleksowe wsparcie marketingowe dla Twojego biznesu"

- [x] 6.3 Create ServiceCard component for list page
  - **Location:** `src/components/cards/service-card.tsx`
  - **Props:** title, description, icon, href, metrics (optional)
  - Large icon or illustration
  - Service name and short description
  - Key metric highlight (e.g., "300% wzrostu")
  - Link to full service page
  - Hover effect with scale and shadow

- [x] 6.4 Implement Service List page layout
  - Grid layout: 1 col mobile, 2 cols desktop
  - 4 service cards with consistent styling
  - Links to individual service pages
  - CTA section at bottom

- [x] 6.5 Add Service List page SEO metadata
  - Title: "Uslugi | Visuana - Marketing, Influencerzy, Azja, AI"
  - Meta description: ~155 characters
  - Open Graph tags
  - JSON-LD Organization with services

- [x] 6.6 Add internal linking from service list to individual pages
  - Each service card links to its service page
  - Add "Dowiedz sie wiecej" link on each card

- [x] 6.7 Ensure Phase 6 tests pass
  - Run ONLY the 2-3 tests written in 6.1

**Acceptance Criteria:**
- 2-3 focused tests pass
- Page accessible at `/uslugi`
- All 4 service cards render correctly
- Links navigate to correct service pages
- SEO metadata complete

---

### Phase 7: Testing & SEO Verification

**Dependencies:** Phase 1-6
**Estimated Duration:** 0.5 day (4h)
**Assigned to:** qa-tester
**Status:** COMPLETED

#### Task Group 7.0: Test Review & Gap Analysis

- [x] 7.1 Review all existing tests from Phases 1-6
  - Phase 1: 11 component tests
  - Phase 2-5: 3 tests each (12 total)
  - Phase 6: 6 tests
  - Total existing: 29 tests

- [x] 7.2 Analyze test coverage gaps for service pages feature
  - Focus ONLY on gaps related to SPEC-006 requirements
  - Prioritize end-to-end user workflows
  - Check cross-page navigation
  - Verify responsive behavior across breakpoints

- [x] 7.3 Write up to 6 additional strategic tests (if necessary)
  - E2E: User navigates from service list to individual service
  - E2E: User clicks CTA and reaches contact form
  - Integration: FAQ accordion state management
  - Integration: Process timeline responsive behavior
  - SEO: All pages have valid JSON-LD schemas
  - Accessibility: Keyboard navigation through all interactive elements

- [x] 7.4 Verify SEO implementation across all pages
  - Run JSON-LD schema validation for each page
  - Verify Open Graph tags render correctly
  - Check meta descriptions are unique per page
  - Verify internal linking between service pages

- [x] 7.5 Test responsive behavior
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px+
  - Verify all sections adapt correctly
  - Check touch targets are minimum 44x44px

- [x] 7.6 Verify accessibility compliance
  - Keyboard navigation for FAQ accordion
  - Focus indicators visible
  - Color contrast ratios (4.5:1 minimum)
  - Screen reader testing for key sections
  - Proper heading hierarchy (H1 -> H2 -> H3)

- [x] 7.7 Run feature-specific test suite
  - Run ONLY tests related to SPEC-006
  - Total: 36 tests (29 existing + 7 integration)
  - Do NOT run entire application test suite
  - Document any failures

- [x] 7.8 Fix any failing tests and verify
  - Address test failures
  - Re-run affected tests
  - Document fixes applied

**Acceptance Criteria:**
- All 36 feature-specific tests pass
- JSON-LD schemas valid for all service pages
- Responsive design works across all breakpoints
- Accessibility requirements met
- No critical bugs in service pages navigation

---

## Execution Order

```
Phase 1: Service Page Template (1 day) [COMPLETED]
    |
    +---> Phase 2: Content Marketing (0.5 day) [COMPLETED]
    |
    +---> Phase 3: Influencer Marketing (0.5 day) [COMPLETED]
    |
    +---> Phase 4: Market Research Asia (0.5 day) [COMPLETED]
    |
    +---> Phase 5: AI Agents (0.5 day) [COMPLETED]
    |
    v
Phase 6: Service List Page (0.5 day) [COMPLETED]
    |
    v
Phase 7: Testing & SEO Verification (0.5 day) [COMPLETED]
```

**Note:** Phases 2-5 can be executed in parallel after Phase 1 completion.

---

## File Structure Summary

```
src/
├── app/
│   └── uslugi/
│       ├── page.tsx                           # Service list page
│       ├── content-marketing/
│       │   └── page.tsx                       # Content Marketing service
│       ├── influencer-marketing/
│       │   └── page.tsx                       # Influencer Marketing service
│       ├── market-research-azja/
│       │   └── page.tsx                       # Market Research Asia service
│       └── ai-agents/
│           └── page.tsx                       # AI Agents service
├── components/
│   ├── sections/
│   │   ├── service-hero.tsx                   # Service page hero
│   │   ├── problem-section.tsx                # Pain points section
│   │   ├── solution-section.tsx               # Features/benefits section
│   │   ├── process-timeline.tsx               # 4-step process timeline
│   │   ├── faq-accordion.tsx                  # FAQ with accordion
│   │   └── service-cta.tsx                    # Service CTA section
│   ├── cards/
│   │   ├── case-study-card.tsx                # Case study highlight
│   │   └── service-card.tsx                   # Service card for list
│   └── templates/
│       └── ServicePage.tsx                    # Composite template
└── types/
    └── service.ts                             # Service page types

__tests__/
└── components/
    └── service-pages/
        ├── service-components.test.tsx        # Component unit tests (11)
        ├── content-marketing.test.tsx         # Content Marketing page tests (3)
        ├── influencer-marketing.test.tsx      # Influencer Marketing page tests (3)
        ├── market-research-asia.test.tsx      # Market Research Asia page tests (3)
        ├── ai-agents.test.tsx                 # AI Agents page tests (3)
        ├── service-list.test.tsx              # Service List page tests (6)
        └── integration.test.tsx               # Integration tests (7)
```

---

## Technical Notes

### Component Reuse

- **Hero pattern:** Extend from `src/components/sections/hero.tsx`
- **Card pattern:** Extend from `src/components/ui/card.tsx`
- **CTA pattern:** Extend from `src/components/sections/cta-box.tsx`
- **Container:** Use `src/components/layout/container.tsx`

### Design System Compliance

- Use existing Tailwind config colors (charcoal, royal-red)
- Follow shadow patterns (shadow-card, shadow-button)
- Maintain consistent spacing (py-16 md:py-24 for sections)
- Mobile-first responsive approach

### Performance Considerations

- ISR with 1 hour revalidation for service pages
- Image optimization (WebP, responsive srcset)
- Lazy loading for below-fold content
- Minimize client-side JavaScript

### SEO Requirements

- Unique title and meta description per page
- JSON-LD Service schema per service page
- FAQ schema for FAQ sections
- Open Graph images per service
- Internal cross-linking between services

---

## Revision History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-05 | Tasks breakdown created | tasks-list-creator |
| 2025-12-05 | Phases 1-5 completed | implementer |
| 2025-12-05 | Phases 6-7 completed, SPEC-006 finished | implementer |
