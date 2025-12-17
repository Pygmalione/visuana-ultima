# SPEC-011: Industry & Role Value Proposition Pages

**Status:** 🟡 Planning
**Created:** 2025-12-05
**Priority:** 🟢 HIGH
**Dependencies:** SPEC-002 ✅ (Design System), SPEC-005 ✅ (Homepage), SPEC-006 (Service Pages)

---

## 1. OVERVIEW

### Problem Statement

Generyczne strony usługowe nie konwertują - każdy CEO SaaS ma inne problemy niż CEO e-commerce, a CMO szuka innych rozwiązań niż Founder. Jednocześnie rynek zalany jest "AI content generators" - usługami tak banalnymi, że konkuruje z nimi 10,000 narzędzi online.

### Solution

System stron z dedykowaną propozycją wartości dla:
- **8 branż** (Industry Verticals)
- **6 pozycji funkcjonalnych** (Job Roles/Functions)

Dostępne z **megamenu** na stronie głównej Visuana.

### Key Differentiators (vs. Commoditized AI Services)

**NIE ROBIMY** (bo robi to 10,000 narzędzi):
- Generowanie postów social media
- Podstawowe SEO content
- Chatboty FAQ
- "AI-powered" copywriting (generic)

**ROBIMY** (unikalne, trudne do skopiowania):
- Vertical-specific AI models (pre-configured dla branży)
- ROI Attribution System (łączy marketing z revenue)
- Industry Compliance AI (HIPAA, GDPR, SOC2 out-of-box)
- Predictive Campaign Intelligence (nie analytics, ale prognozy)
- Multi-agent Content Operations (orkiestracja, nie generowanie)

---

## 2. INDUSTRY VERTICALS (8 branż)

### 2.1 Struktura URL

```
/dla/[branża]                    # Landing dla branży
/dla/[branża]/[rola]             # Specificzna strona branża + rola
```

### 2.2 Lista branż

| ID | Branża (PL) | URL Slug | Priority | Justification |
|----|-------------|----------|----------|---------------|
| IND-01 | **SaaS / Tech** | `/dla/saas` | 🔴 HIGH | Highest budget, AI-native buyers |
| IND-02 | **E-commerce** | `/dla/ecommerce` | 🔴 HIGH | Volume, measurable ROI |
| IND-03 | **Professional Services** | `/dla/uslugi-profesjonalne` | 🟡 MED | Law, consulting, accounting |
| IND-04 | **Healthcare / MedTech** | `/dla/medtech` | 🟡 MED | Compliance-heavy = moat |
| IND-05 | **Fintech / Finance** | `/dla/fintech` | 🟡 MED | High ARPU, regulated |
| IND-06 | **Manufacturing / B2B** | `/dla/produkcja` | 🟢 LOW | Long sales cycles |
| IND-07 | **Education / EdTech** | `/dla/edtech` | 🟢 LOW | Growing vertical |
| IND-08 | **Real Estate / PropTech** | `/dla/nieruchomosci` | 🟢 LOW | Local market focus |

### 2.3 Value Proposition per Industry

#### IND-01: SaaS / Tech

**Headline:** "Marketing SaaS, który skaluje się z Twoim MRR"
**Pain Points:**
- PLG vs. Sales-led balance
- CAC:LTV optymalizacja
- Product-led content strategy
- Developer/technical audience

**Unique Offer:**
- AI-powered PLG content engine
- MRR attribution dashboard
- Developer advocacy strategy
- Technical content z code examples

**Keywords:** marketing SaaS, B2B SaaS marketing, SaaS growth, PLG marketing

---

#### IND-02: E-commerce

**Headline:** "E-commerce marketing z 48-godzinnym testowaniem ROI"
**Pain Points:**
- ROAS optimization
- Seasonality management
- Multi-channel attribution
- Product feed optimization

**Unique Offer:**
- AI product description engine (NOT generic)
- Predictive inventory marketing
- Cross-channel ROI dashboard
- Seasonal campaign automation

**Keywords:** marketing e-commerce, sklep internetowy marketing, ROAS, kampanie produktowe

---

#### IND-03: Professional Services

**Headline:** "Marketing dla firm usługowych, które chcą premium klientów"
**Pain Points:**
- Thought leadership wymagane
- Long consideration cycles
- Reputation management
- Referral dependency

**Unique Offer:**
- Authority content engine
- Lawyer/consultant thought leadership
- Case study automation
- Review management system

**Keywords:** marketing kancelarii, marketing firmy doradczej, thought leadership

---

#### IND-04: Healthcare / MedTech

**Headline:** "Marketing medyczny zgodny z regulacjami. Zero ryzyka."
**Pain Points:**
- HIPAA / GDPR compliance
- Medical accuracy requirements
- Trust-building imperative
- Regulatory review cycles

**Unique Offer:**
- Pre-vetted medical content AI
- Compliance-first workflows
- Patient journey mapping
- HCP (Healthcare Professional) targeting

**Keywords:** marketing medyczny, marketing kliniki, HIPAA compliance, medtech marketing

---

#### IND-05: Fintech / Finance

**Headline:** "Fintech marketing z wbudowaną compliance layer"
**Pain Points:**
- KNF / regulatory compliance
- Trust signals critical
- Complex product explanation
- Risk communication

**Unique Offer:**
- Regulatory-compliant content AI
- Financial education content
- Trust signal optimization
- Risk-aware messaging framework

**Keywords:** marketing fintech, marketing finansowy, compliance content

---

#### IND-06: Manufacturing / B2B

**Headline:** "Marketing B2B dla firm produkcyjnych. Od leada do kontraktu."
**Pain Points:**
- 6-18 month sales cycles
- Technical decision makers
- Trade show ROI tracking
- Specification sheets

**Unique Offer:**
- Technical content factory
- Lead nurturing automation (long cycle)
- Trade show ROI attribution
- Spec sheet to story conversion

**Keywords:** marketing B2B, marketing produkcji, lead generation B2B

---

#### IND-07: Education / EdTech

**Headline:** "EdTech marketing, który konwertuje próbki na subskrypcje"
**Pain Points:**
- Trial to paid conversion
- Seasonal enrollment cycles
- Multi-stakeholder (students, parents, schools)
- Content as product

**Unique Offer:**
- Educational content AI (pedagogical)
- Enrollment funnel optimization
- Multi-persona targeting
- Learning outcome storytelling

**Keywords:** marketing edtech, marketing szkoły, enrollment marketing

---

#### IND-08: Real Estate / PropTech

**Headline:** "Marketing nieruchomości, który sprzedaje przed premierą"
**Pain Points:**
- Local market dynamics
- Visual content intensity
- Lead qualification (buyers vs. browsers)
- Off-plan sales

**Unique Offer:**
- Hyper-local content AI
- Virtual tour optimization
- Lead scoring for real estate
- Pre-sale campaign automation

**Keywords:** marketing deweloperski, marketing nieruchomości, proptech

---

## 3. JOB ROLES / FUNCTIONS (6 pozycji)

### 3.1 Lista ról

| ID | Rola (PL) | URL Slug | Priority | Justification |
|----|-----------|----------|----------|---------------|
| ROLE-01 | **CEO / Founder** | `/dla-ceo` | 🔴 HIGH | Decision maker, budget holder |
| ROLE-02 | **CMO / VP Marketing** | `/dla-cmo` | 🔴 HIGH | Direct buyer |
| ROLE-03 | **Marketing Director** | `/dla-marketing-director` | 🟡 MED | Implementer, influencer |
| ROLE-04 | **Head of Growth** | `/dla-growth` | 🟡 MED | Data-driven buyer |
| ROLE-05 | **Content Manager** | `/dla-content-manager` | 🟢 LOW | User, not buyer |
| ROLE-06 | **Startup Founder (solo)** | `/dla-founder` | 🔴 HIGH | Fast decision, all-in-one need |

### 3.2 Value Proposition per Role

#### ROLE-01: CEO / Founder

**Headline:** "Marketing, który CEO rozumie: ROI, nie vanity metrics"
**Pain Points:**
- Marketing = black box
- "Trust me" from agencies
- No connection to revenue
- Time to value unknown

**Unique Offer:**
- CEO Dashboard (revenue attribution)
- Executive summary reports
- Strategic alignment (OKRs → campaigns)
- Board-ready metrics

**Buying Triggers:**
- Fundraising (need growth story)
- Board pressure on CAC
- Scaling pains (what worked stops)

---

#### ROLE-02: CMO / VP Marketing

**Headline:** "AI Marketing Partner, nie kolejna agencja"
**Pain Points:**
- Pressure to do more with less
- Prove ROI to CEO
- Team bandwidth limits
- Tech stack overwhelm

**Unique Offer:**
- CMO-as-partner model
- Revenue attribution system
- Team augmentation (not replacement)
- Martech integration expertise

**Buying Triggers:**
- Budget review season
- Team turnover
- New CEO expectations
- Competitive pressure

**Reference:** [BCG: What CEOs Should Look For in an AI-First CMO](https://www.bcg.com/publications/2025/what-ceos-should-look-for-in-an-ai-first-cmo)

---

#### ROLE-03: Marketing Director

**Headline:** "Wykonanie na poziomie, gdy budżet nie"
**Pain Points:**
- Limited team/budget
- Execution bottlenecks
- Too many channels
- Reporting overhead

**Unique Offer:**
- Execution-focused partnership
- Priority channel optimization
- Automated reporting
- Best practices transfer

---

#### ROLE-04: Head of Growth

**Headline:** "Growth Engineering, nie Growth Hacking"
**Pain Points:**
- Experiment velocity
- Attribution complexity
- Cross-functional friction
- Data quality issues

**Unique Offer:**
- Experiment factory (rapid testing)
- Multi-touch attribution
- Growth model building
- Data infrastructure advisory

---

#### ROLE-05: Content Manager

**Headline:** "10x Twój output bez 10x wysiłku"
**Pain Points:**
- Volume demands
- Quality consistency
- SEO requirements
- Distribution coordination

**Unique Offer:**
- AI content workflow (not replacement)
- Editorial calendar automation
- SEO-integrated writing
- Distribution playbooks

---

#### ROLE-06: Startup Founder (solo)

**Headline:** "Marketing na autopilot, żebyś mógł budować produkt"
**Pain Points:**
- No time for marketing
- No team/budget
- Need quick wins
- Don't know where to start

**Unique Offer:**
- Founder-friendly pricing
- Done-for-you basics
- 48h onboarding
- Weekly "set and forget" optimization

---

## 4. MEGAMENU STRUCTURE

### 4.1 Navigation Architecture

```
[Megamenu Trigger: "Dla kogo"]
├── 📊 Branże
│   ├── SaaS / Tech
│   ├── E-commerce
│   ├── Professional Services
│   ├── Healthcare / MedTech
│   ├── Fintech
│   └── Więcej branż →
│
├── 👤 Pozycje
│   ├── CEO / Founder
│   ├── CMO / VP Marketing
│   ├── Marketing Director
│   ├── Head of Growth
│   └── Startup Founder
│
└── 🎯 Quick Links
    ├── Bezpłatna konsultacja
    └── Case studies
```

### 4.2 Megamenu Visual Design

```
┌─────────────────────────────────────────────────────────────────────┐
│  DLA KOGO                                              [×]          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  📊 BRANŻE                    👤 POZYCJE                            │
│  ─────────────                ──────────────                        │
│  □ SaaS / Tech                □ CEO / Founder                       │
│    AI marketing dla firm         Dashboard ROI, decyzje             │
│    technologicznych              strategiczne                       │
│                                                                      │
│  □ E-commerce                 □ CMO / VP Marketing                  │
│    ROAS, kampanie                Partner, nie kolejna               │
│    produktowe                    agencja                            │
│                                                                      │
│  □ Professional Services      □ Marketing Director                  │
│    Kancelarie, firmy             Wykonanie z ograniczonym           │
│    doradcze                      budżetem                           │
│                                                                      │
│  □ Healthcare / MedTech       □ Head of Growth                      │
│    Compliance-first              Eksperymenty, atry-                │
│    marketing                     bucja                              │
│                                                                      │
│  → Wszystkie branże           □ Startup Founder                     │
│                                  Marketing na                        │
│                                  autopilot                           │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────  │
│  🎯 Nie wiesz, od czego zacząć? [Bezpłatna konsultacja 15 min]     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.3 Responsive Behavior

- **Desktop (1024px+):** Full megamenu with 2 columns
- **Tablet (768-1024px):** Collapsible accordions
- **Mobile (<768px):** Nested menu with back navigation

---

## 5. PAGE TEMPLATE STRUCTURE

### 5.1 Industry Page Template

```tsx
// app/dla/[industry]/page.tsx

<IndustryPage>
  <HeroSection>
    - Industry-specific headline
    - 2-3 bullet value props
    - CTA: "Bezpłatna konsultacja"
    - Industry visual (illustration/icon)
  </HeroSection>

  <PainPointsSection>
    - "Czy to brzmi znajomo?"
    - 4 industry-specific pain points
    - Each with icon + description
  </PainPointsSection>

  <SolutionSection>
    - "Jak działamy dla [branża]"
    - 3-4 unique offers for industry
    - Feature cards with benefits
  </SolutionSection>

  <IndustryProofSection>
    - Industry-specific case study
    - Metrics/numbers prominently
    - Client logo (if permitted)
  </IndustryProofSection>

  <RolesNavigationSection>
    - "Dopasuj do swojej roli"
    - Links to industry+role combos
    - e.g., /dla/saas/ceo, /dla/saas/cmo
  </RolesNavigationSection>

  <FAQSection>
    - Industry-specific FAQs
    - JSON-LD schema
  </FAQSection>

  <CTASection>
    - Final conversion push
    - Form or calendar embed
  </CTASection>
</IndustryPage>
```

### 5.2 Role Page Template

```tsx
// app/dla-[role]/page.tsx

<RolePage>
  <HeroSection>
    - Role-specific headline
    - "Dla [rola] którzy..."
    - CTA: "Porozmawiajmy"
  </HeroSection>

  <ChallengesSection>
    - "Znamy Twoje wyzwania"
    - Role-specific challenges
    - Empathetic framing
  </ChallengesSection>

  <SolutionSection>
    - "Jak Ci pomagamy"
    - Role-specific deliverables
    - Outcome-focused
  </SolutionSection>

  <IndustriesNavigationSection>
    - "Wybierz swoją branżę"
    - Links to role+industry combos
    - Brief description each
  </IndustriesNavigationSection>

  <TestimonialsSection>
    - Quote from similar role
    - Company/title attribution
  </TestimonialsSection>

  <CTASection>
    - Role-appropriate CTA
    - CEO: "Umów strategiczną konsultację"
    - Content Manager: "Zacznij bezpłatny trial"
  </CTASection>
</RolePage>
```

### 5.3 Combined Industry+Role Page

```tsx
// app/dla/[industry]/[role]/page.tsx

<CombinedPage>
  <HeroSection>
    - "[Rola] w [branża]: [headline]"
    - Ultra-specific value prop
  </HeroSection>

  <SpecificPainPoints>
    - Intersection of industry + role pains
    - Max 3-4 highly relevant
  </SpecificPainPoints>

  <SpecificSolution>
    - Tailored service bundle
    - "Dla [rola] w [branża] proponujemy:"
  </SpecificSolution>

  <CaseStudy>
    - Same industry + role
    - Highly relatable
  </CaseStudy>

  <QuickCTA>
    - Short form / instant booking
    - "15 minut, zero zobowiązań"
  </QuickCTA>
</CombinedPage>
```

---

## 6. SEO STRATEGY

### 6.1 Keyword Matrix

| Industry | Role | Target Keyword |
|----------|------|----------------|
| SaaS | CEO | marketing SaaS dla CEO |
| SaaS | CMO | CMO SaaS marketing strategy |
| E-commerce | Founder | marketing e-commerce dla założyciela |
| Healthcare | CMO | marketing medyczny dla CMO |
| Fintech | Growth | fintech growth marketing |

### 6.2 Content Clusters

```
/dla/saas (pillar)
├── /dla/saas/ceo
├── /dla/saas/cmo
├── /dla/saas/growth
└── /blog/kategoria/saas (supporting content)
```

### 6.3 JSON-LD Schema

```json
{
  "@type": "Service",
  "serviceType": "Marketing Services",
  "areaServed": "Poland",
  "audience": {
    "@type": "Audience",
    "audienceType": "SaaS Companies"
  },
  "provider": {
    "@type": "Organization",
    "name": "Visuana"
  }
}
```

---

## 7. DIFFERENTIATED AI SERVICES (NOT Commoditized)

### 7.1 What We DON'T Do (Commoditized)

| Service | Why NOT | Competitors |
|---------|---------|-------------|
| AI content generation (basic) | Jasper, Copy.ai, ChatGPT | 10,000+ tools |
| Social media scheduling | Buffer, Hootsuite, etc. | Commoditized |
| Basic SEO audit | Ahrefs, Semrush, free tools | Commoditized |
| Generic chatbots | Intercom, Drift, etc. | Commoditized |
| Email template generation | Mailchimp, many others | Commoditized |

### 7.2 What We DO (Differentiated)

| Service | Why UNIQUE | Difficulty for competitors |
|---------|-----------|---------------------------|
| **Vertical AI Models** | Pre-trained for industry nuance | Requires domain expertise + data |
| **Revenue Attribution AI** | Connects marketing → revenue | Requires integration + methodology |
| **Compliance-First Content** | HIPAA/GDPR/KNF built-in | Requires legal + technical |
| **Multi-Agent Orchestration** | Systems, not tools | Requires architecture expertise |
| **Predictive Campaign Intel** | Forecasts, not reports | Requires ML + domain knowledge |
| **Strategic AI Advisory** | HOW to use AI, not just tools | Requires experience + strategy |

### 7.3 Service Difficulty vs. Automation Matrix

```
                 HIGH VALUE
                     │
    Compliance AI    │    Revenue Attribution
    (Healthcare)     │    (ROI Dashboard)
                     │
  ───────────────────┼───────────────────
                     │
    Vertical         │    Multi-Agent
    Content          │    Orchestration
                     │
                     │
                LOW VALUE
         EASY TO AUTOMATE ─── HARD TO AUTOMATE
```

**Sweet Spot:** High Value + Hard to Automate = Our services

---

## 8. TECHNICAL REQUIREMENTS

### 8.1 Dynamic Routing

```typescript
// app/dla/[industry]/page.tsx
// app/dla/[industry]/[role]/page.tsx
// app/dla-[role]/page.tsx

export async function generateStaticParams() {
  const industries = ['saas', 'ecommerce', 'medtech', 'fintech', ...];
  const roles = ['ceo', 'cmo', 'growth', 'founder', ...];

  return industries.flatMap(industry =>
    roles.map(role => ({ industry, role }))
  );
}
```

### 8.2 Content Management

**Option A:** Strapi CMS
- Content type: `industry-page`, `role-page`
- Relations: industry ↔ roles

**Option B:** MDX Files
- `/content/industries/saas.mdx`
- `/content/roles/ceo.mdx`
- Frontmatter for metadata

**Recommended:** Start with MDX, migrate to Strapi when content scales.

### 8.3 Components Required

| Component | Status | Notes |
|-----------|--------|-------|
| `MegaMenu` | ⬜ NEW | Desktop + mobile versions |
| `IndustryHero` | ⬜ NEW | Variant of Hero |
| `RoleHero` | ⬜ NEW | Variant of Hero |
| `PainPointsGrid` | ⬜ NEW | 2x2 or 4x1 layout |
| `SolutionCards` | ✅ REUSE | From SPEC-006 |
| `IndustryNav` | ⬜ NEW | Cross-linking navigation |
| `RoleNav` | ⬜ NEW | Cross-linking navigation |

---

## 9. IMPLEMENTATION PHASES

### Phase 1: Foundation (3 days)
- [ ] MegaMenu component
- [ ] Industry page template
- [ ] Role page template
- [ ] 2 industry pages (SaaS, E-commerce)
- [ ] 2 role pages (CEO, CMO)

### Phase 2: Expansion (2 days)
- [ ] Remaining 6 industry pages
- [ ] Remaining 4 role pages
- [ ] Combined pages (top 4 combos)

### Phase 3: Content & SEO (2 days)
- [ ] Copy for all pages (ToV applied)
- [ ] SEO metadata
- [ ] JSON-LD schemas
- [ ] Internal linking

### Phase 4: Polish (1 day)
- [ ] Mobile optimization
- [ ] Performance audit
- [ ] A/B test setup for CTAs

**Total:** 8 days

---

## 10. SUCCESS METRICS

| Metric | Target | Measurement |
|--------|--------|-------------|
| Organic traffic to /dla/* | +200% in 3 months | GA4 |
| Conversion rate (form) | 3-5% | GA4 Events |
| Time on page | >2 min | GA4 |
| Bounce rate | <40% | GA4 |
| Keyword rankings | Top 10 for 20 keywords | GSC |

---

## 11. DELIVERABLES

| Deliverable | Location | Status |
|-------------|----------|--------|
| MegaMenu component | `src/components/layout/MegaMenu.tsx` | ⬜ |
| Industry page template | `src/components/templates/IndustryPage.tsx` | ⬜ |
| Role page template | `src/components/templates/RolePage.tsx` | ⬜ |
| Combined page template | `src/components/templates/CombinedPage.tsx` | ⬜ |
| 8 Industry pages | `app/dla/[industry]/page.tsx` | ⬜ |
| 6 Role pages | `app/dla-[role]/page.tsx` | ⬜ |
| Top combined pages | `app/dla/[industry]/[role]/page.tsx` | ⬜ |
| Content (MDX/Strapi) | `content/industries/*.mdx` | ⬜ |
| SEO schemas | Inline in pages | ⬜ |

---

## 12. REVISION HISTORY

| Date | Change | Author |
|------|--------|--------|
| 2025-12-05 | Spec created | Claude Code |

---

## REFERENCES

- [BCG: AI-First CMO](https://www.bcg.com/publications/2025/what-ceos-should-look-for-in-an-ai-first-cmo)
- [Vertical SaaS Trends](https://www.understoryagency.com/blog/must-know-saas-industry-trends)
- [AI Marketing Differentiation](https://seniorexecutive.com/ai-changing-marketing-agency-value/)
- [RevvGrowth: Future of AI in B2B Marketing](https://www.revvgrowth.com/ai-marketing/future-of-ai)
