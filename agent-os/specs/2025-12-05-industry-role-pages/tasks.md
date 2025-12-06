# Task Breakdown: SPEC-011 Industry & Role Value Proposition Pages

**Spec:** SPEC-011 Industry & Role Pages
**Created:** 2025-12-05
**Status:** 🟡 READY FOR IMPLEMENTATION
**Dependencies:** SPEC-002 ✅ (Design System), SPEC-005 ✅ (Homepage)

---

## Overview

**Total Tasks:** 48
**Estimated Total Duration:** 8 days (64 hours)

System stron z dedykowaną propozycją wartości dla 8 branż i 6 pozycji funkcjonalnych, dostępnych z megamenu.

---

## Task List

### Phase 1: MegaMenu Component

#### Task Group 1: MegaMenu Foundation
**Dependencies:** SPEC-002 (Design System)
**Estimated Duration:** 6 hours

- [ ] 1.0 Complete MegaMenu component
  - [ ] 1.1 Write tests for MegaMenu
    - Test menu opens on hover/click
    - Test keyboard navigation (Tab, Enter, Escape)
    - Test mobile accordion behavior
    - Test links render correctly
  - [ ] 1.2 Create MegaMenu container component
    - Location: `src/components/layout/MegaMenu.tsx`
    - Desktop: 2-column dropdown layout
    - Tablet: Collapsible accordions
    - Mobile: Nested menu with back button
  - [ ] 1.3 Create MegaMenuSection component
    - Location: `src/components/layout/MegaMenuSection.tsx`
    - Icon + title + items list
    - Hover states
  - [ ] 1.4 Create MegaMenuItem component
    - Location: `src/components/layout/MegaMenuItem.tsx`
    - Title + subtitle + link
    - Optional badge (new, popular)
  - [ ] 1.5 Integrate MegaMenu into Navbar
    - Update existing Navbar component
    - Add "Dla kogo" trigger
    - Handle responsive states
  - [ ] 1.6 Add accessibility features
    - ARIA attributes (aria-expanded, aria-haspopup)
    - Focus trap when open
    - Escape key closes menu
  - [ ] 1.7 Ensure MegaMenu tests pass

**Acceptance Criteria:**
- MegaMenu works on desktop, tablet, mobile
- Keyboard navigation complete
- All tests pass
- Integrates with existing Navbar

---

### Phase 2: Page Templates

#### Task Group 2: Industry Page Template
**Dependencies:** Task Group 1
**Estimated Duration:** 4 hours

- [ ] 2.0 Complete Industry Page template
  - [ ] 2.1 Write tests for IndustryPage template
    - Test renders hero with industry name
    - Test pain points section renders
    - Test solution cards render
    - Test roles navigation renders
    - Test SEO metadata
  - [ ] 2.2 Create IndustryPage template
    - Location: `src/components/templates/IndustryPage.tsx`
    - Props: industry data object
    - Sections: Hero, PainPoints, Solution, Proof, RolesNav, FAQ, CTA
  - [ ] 2.3 Create IndustryHero variant
    - Location: `src/components/sections/IndustryHero.tsx`
    - Industry-specific headline + value props
    - Industry icon/illustration slot
  - [ ] 2.4 Create PainPointsGrid component
    - Location: `src/components/sections/PainPointsGrid.tsx`
    - 2x2 grid on desktop, 1 column mobile
    - Icon + title + description per item
  - [ ] 2.5 Create IndustryNav component
    - Location: `src/components/sections/IndustryNav.tsx`
    - Links to industry+role combinations
    - Card-style navigation
  - [ ] 2.6 Ensure IndustryPage tests pass

**Acceptance Criteria:**
- Template reusable for all 8 industries
- All sections responsive
- Tests pass

---

#### Task Group 3: Role Page Template
**Dependencies:** Task Group 1
**Estimated Duration:** 4 hours

- [ ] 3.0 Complete Role Page template
  - [ ] 3.1 Write tests for RolePage template
    - Test renders hero with role name
    - Test challenges section renders
    - Test solution section renders
    - Test industries navigation renders
  - [ ] 3.2 Create RolePage template
    - Location: `src/components/templates/RolePage.tsx`
    - Props: role data object
    - Sections: Hero, Challenges, Solution, IndustriesNav, Testimonial, CTA
  - [ ] 3.3 Create RoleHero variant
    - Location: `src/components/sections/RoleHero.tsx`
    - Role-specific headline
    - "Dla [rola] którzy..." framing
  - [ ] 3.4 Create ChallengesSection component
    - Location: `src/components/sections/ChallengesSection.tsx`
    - Role-specific challenges list
    - Empathetic copy framing
  - [ ] 3.5 Create RoleNav component
    - Location: `src/components/sections/RoleNav.tsx`
    - Links to role+industry combinations
  - [ ] 3.6 Ensure RolePage tests pass

**Acceptance Criteria:**
- Template reusable for all 6 roles
- All sections responsive
- Tests pass

---

#### Task Group 4: Combined Page Template
**Dependencies:** Task Groups 2, 3
**Estimated Duration:** 3 hours

- [ ] 4.0 Complete Combined Page template
  - [ ] 4.1 Write tests for CombinedPage template
    - Test renders industry + role in title
    - Test specific pain points render
    - Test specific solution renders
  - [ ] 4.2 Create CombinedPage template
    - Location: `src/components/templates/CombinedPage.tsx`
    - Props: industry + role data
    - Sections: Hero, SpecificPains, SpecificSolution, CaseStudy, QuickCTA
  - [ ] 4.3 Create CombinedHero variant
    - "[Rola] w [branża]: [headline]"
    - Ultra-specific value proposition
  - [ ] 4.4 Ensure CombinedPage tests pass

**Acceptance Criteria:**
- Template works for any industry+role combo
- Tests pass

---

### Phase 3: Industry Pages (8 pages)

#### Task Group 5: Priority Industries (SaaS, E-commerce)
**Dependencies:** Task Group 2
**Estimated Duration:** 4 hours

- [ ] 5.0 Complete priority industry pages
  - [ ] 5.1 Create dynamic route handler
    - Location: `app/dla/[industry]/page.tsx`
    - generateStaticParams for all industries
    - generateMetadata for SEO
  - [ ] 5.2 Create SaaS industry page content
    - Headline: "Marketing SaaS, który skaluje się z Twoim MRR"
    - Pain points: PLG vs Sales-led, CAC:LTV, etc.
    - Unique offers: AI PLG engine, MRR attribution, etc.
  - [ ] 5.3 Create E-commerce industry page content
    - Headline: "E-commerce marketing z 48-godzinnym testowaniem ROI"
    - Pain points: ROAS, seasonality, multi-channel, etc.
    - Unique offers: Predictive inventory, cross-channel ROI, etc.
  - [ ] 5.4 Add JSON-LD Service schema
  - [ ] 5.5 Test pages render correctly

**Acceptance Criteria:**
- /dla/saas and /dla/ecommerce live
- SEO metadata correct
- JSON-LD validates

---

#### Task Group 6: Medium Priority Industries
**Dependencies:** Task Group 5
**Estimated Duration:** 4 hours

- [ ] 6.0 Complete medium priority industries
  - [ ] 6.1 Create Professional Services page
    - `/dla/uslugi-profesjonalne`
    - Content for law, consulting, accounting
  - [ ] 6.2 Create Healthcare/MedTech page
    - `/dla/medtech`
    - Compliance-first messaging
  - [ ] 6.3 Create Fintech page
    - `/dla/fintech`
    - Regulatory compliance focus
  - [ ] 6.4 Test all pages render correctly

**Acceptance Criteria:**
- 3 additional industry pages live
- Content matches spec
- SEO metadata correct

---

#### Task Group 7: Lower Priority Industries
**Dependencies:** Task Group 6
**Estimated Duration:** 4 hours

- [ ] 7.0 Complete remaining industries
  - [ ] 7.1 Create Manufacturing/B2B page
    - `/dla/produkcja`
    - Long sales cycle focus
  - [ ] 7.2 Create EdTech page
    - `/dla/edtech`
    - Trial-to-paid conversion focus
  - [ ] 7.3 Create Real Estate/PropTech page
    - `/dla/nieruchomosci`
    - Local market focus
  - [ ] 7.4 Create industry index page
    - `/dla` listing all industries
    - Card layout with descriptions
  - [ ] 7.5 Test all pages

**Acceptance Criteria:**
- All 8 industry pages live
- Index page at /dla
- All tests pass

---

### Phase 4: Role Pages (6 pages)

#### Task Group 8: Priority Roles (CEO, CMO, Founder)
**Dependencies:** Task Group 3
**Estimated Duration:** 4 hours

- [ ] 8.0 Complete priority role pages
  - [ ] 8.1 Create dynamic route handler
    - Location: `app/dla-[role]/page.tsx`
    - Note: Using dla-[role] not /dla/[role] to avoid conflict
  - [ ] 8.2 Create CEO/Founder page
    - `/dla-ceo`
    - "Marketing, który CEO rozumie: ROI, nie vanity metrics"
    - CEO Dashboard, executive reports
  - [ ] 8.3 Create CMO page
    - `/dla-cmo`
    - "AI Marketing Partner, nie kolejna agencja"
    - CMO-as-partner model, revenue attribution
  - [ ] 8.4 Create Startup Founder page
    - `/dla-founder`
    - "Marketing na autopilot, żebyś mógł budować produkt"
    - Founder-friendly pricing, 48h onboarding
  - [ ] 8.5 Add JSON-LD schemas
  - [ ] 8.6 Test pages render correctly

**Acceptance Criteria:**
- 3 priority role pages live
- Content matches spec
- SEO metadata correct

---

#### Task Group 9: Remaining Roles
**Dependencies:** Task Group 8
**Estimated Duration:** 3 hours

- [ ] 9.0 Complete remaining role pages
  - [ ] 9.1 Create Marketing Director page
    - `/dla-marketing-director`
    - Execution focus, limited budget empathy
  - [ ] 9.2 Create Head of Growth page
    - `/dla-growth`
    - "Growth Engineering, nie Growth Hacking"
    - Experiment factory, attribution
  - [ ] 9.3 Create Content Manager page
    - `/dla-content-manager`
    - "10x Twój output bez 10x wysiłku"
    - AI workflow (not replacement)
  - [ ] 9.4 Test all pages

**Acceptance Criteria:**
- All 6 role pages live
- Content matches spec

---

### Phase 5: Combined Pages (Top Combos)

#### Task Group 10: Priority Combinations
**Dependencies:** Task Groups 5-9
**Estimated Duration:** 4 hours

- [ ] 10.0 Complete top combined pages
  - [ ] 10.1 Create combined route handler
    - Location: `app/dla/[industry]/[role]/page.tsx`
    - generateStaticParams for top combos
  - [ ] 10.2 Create SaaS + CEO page
    - `/dla/saas/ceo`
    - Ultra-specific content
  - [ ] 10.3 Create SaaS + CMO page
    - `/dla/saas/cmo`
  - [ ] 10.4 Create E-commerce + Founder page
    - `/dla/ecommerce/founder`
  - [ ] 10.5 Create Healthcare + CMO page
    - `/dla/medtech/cmo`
  - [ ] 10.6 Test combined pages

**Acceptance Criteria:**
- Top 4 combined pages live
- Content hyper-specific to combination
- Cross-linking works

---

### Phase 6: Content & Copy

#### Task Group 11: Copy Writing (ToV Applied)
**Dependencies:** Task Groups 5-10
**Estimated Duration:** 6 hours

- [ ] 11.0 Complete all page copy
  - [ ] 11.1 Apply Visuana ToV to all industry pages
    - Use `~/_tov/visuana-tov.md` guidelines
    - Data-driven, provocative, no korpo-speak
  - [ ] 11.2 Apply ToV to all role pages
  - [ ] 11.3 Apply ToV to combined pages
  - [ ] 11.4 Create industry-specific pain points content
    - Research each industry's top challenges
    - Use industry terminology correctly
  - [ ] 11.5 Create role-specific challenges content
    - Empathetic framing
    - Buying triggers per role
  - [ ] 11.6 Review and polish all copy
    - Check for consistency
    - Ensure no banned words (korpo-speak)

**Acceptance Criteria:**
- All copy follows ToV guidelines
- No banned words
- Copy is compelling and specific

---

### Phase 7: SEO & Metadata

#### Task Group 12: SEO Implementation
**Dependencies:** Task Groups 5-11
**Estimated Duration:** 4 hours

- [ ] 12.0 Complete SEO implementation
  - [ ] 12.1 Write SEO tests
    - Test meta title format
    - Test JSON-LD presence
    - Test canonical URLs
  - [ ] 12.2 Create SEO metadata for all industry pages
    - Unique title per page
    - Unique description per page
    - Open Graph images
  - [ ] 12.3 Create SEO metadata for all role pages
  - [ ] 12.4 Add JSON-LD Service schemas
    - serviceType, areaServed, audience
    - Validate with Google Rich Results Test
  - [ ] 12.5 Implement internal linking strategy
    - Industry → Role cross-links
    - Role → Industry cross-links
    - Blog category links
  - [ ] 12.6 Create sitemap entries
    - Add all new URLs to sitemap
  - [ ] 12.7 Ensure SEO tests pass

**Acceptance Criteria:**
- All pages have unique SEO metadata
- JSON-LD validates
- Internal linking complete
- Sitemap updated

---

### Phase 8: Polish & Testing

#### Task Group 13: Responsive & Performance
**Dependencies:** Task Groups 1-12
**Estimated Duration:** 4 hours

- [ ] 13.0 Complete responsive and performance polish
  - [ ] 13.1 Test MegaMenu on all breakpoints
    - Desktop: 1024px+
    - Tablet: 768-1024px
    - Mobile: <768px
  - [ ] 13.2 Test all page templates on mobile
    - Touch targets min 44px
    - No horizontal scroll
    - Images responsive
  - [ ] 13.3 Performance audit
    - Lighthouse score >90
    - LCP <2.5s
    - CLS <0.1
  - [ ] 13.4 Cross-browser testing
    - Chrome, Firefox, Safari
    - iOS Safari, Chrome mobile

**Acceptance Criteria:**
- All pages responsive
- Lighthouse >90
- No browser-specific bugs

---

#### Task Group 14: Integration Testing
**Dependencies:** Task Group 13
**Estimated Duration:** 4 hours

- [ ] 14.0 Complete integration testing
  - [ ] 14.1 Write E2E tests for navigation flow
    - Open MegaMenu → Click industry → Page loads
    - Click role from industry page → Combined page loads
  - [ ] 14.2 Test all internal links work
  - [ ] 14.3 Test form submissions on CTA sections
  - [ ] 14.4 Test analytics events fire correctly
  - [ ] 14.5 Run full test suite
    - All unit tests
    - All integration tests
    - E2E tests
  - [ ] 14.6 Fix any failing tests

**Acceptance Criteria:**
- All tests pass
- Navigation flows work
- Forms submit correctly
- Analytics tracking works

---

## Execution Order

| Order | Task Group | Phase | Duration | Dependencies | Status |
|-------|------------|-------|----------|--------------|--------|
| 1 | Task Group 1 | MegaMenu | 6h | SPEC-002 | ⬜ |
| 2 | Task Group 2 | Industry Template | 4h | TG1 | ⬜ |
| 3 | Task Group 3 | Role Template | 4h | TG1 | ⬜ |
| 4 | Task Group 4 | Combined Template | 3h | TG2, TG3 | ⬜ |
| 5 | Task Group 5 | Priority Industries | 4h | TG2 | ⬜ |
| 6 | Task Group 6 | Med Industries | 4h | TG5 | ⬜ |
| 7 | Task Group 7 | Low Industries | 4h | TG6 | ⬜ |
| 8 | Task Group 8 | Priority Roles | 4h | TG3 | ⬜ |
| 9 | Task Group 9 | Remaining Roles | 3h | TG8 | ⬜ |
| 10 | Task Group 10 | Combined Pages | 4h | TG5-9 | ⬜ |
| 11 | Task Group 11 | Copy/ToV | 6h | TG5-10 | ⬜ |
| 12 | Task Group 12 | SEO | 4h | TG5-11 | ⬜ |
| 13 | Task Group 13 | Responsive | 4h | TG1-12 | ⬜ |
| 14 | Task Group 14 | Integration | 4h | TG13 | ⬜ |

**Note:** Task Groups 2, 3 can run in parallel. Task Groups 5-9 can partially overlap.

---

## File Structure

```
app/
├── dla/
│   ├── page.tsx                    # Industry index
│   ├── [industry]/
│   │   ├── page.tsx                # Industry page (dynamic)
│   │   └── [role]/
│   │       └── page.tsx            # Combined page (dynamic)
│   └── layout.tsx                  # Shared layout
├── dla-[role]/
│   └── page.tsx                    # Role page (dynamic)

src/components/
├── layout/
│   ├── MegaMenu.tsx                # MegaMenu container
│   ├── MegaMenuSection.tsx         # Menu section
│   └── MegaMenuItem.tsx            # Menu item
├── sections/
│   ├── IndustryHero.tsx            # Industry hero variant
│   ├── RoleHero.tsx                # Role hero variant
│   ├── PainPointsGrid.tsx          # Pain points 2x2 grid
│   ├── ChallengesSection.tsx       # Role challenges
│   ├── IndustryNav.tsx             # Industry navigation
│   └── RoleNav.tsx                 # Role navigation
├── templates/
│   ├── IndustryPage.tsx            # Industry page template
│   ├── RolePage.tsx                # Role page template
│   └── CombinedPage.tsx            # Combined page template

content/
├── industries/
│   ├── saas.ts                     # SaaS content data
│   ├── ecommerce.ts                # E-commerce content data
│   └── ...
├── roles/
│   ├── ceo.ts                      # CEO content data
│   ├── cmo.ts                      # CMO content data
│   └── ...
└── combined/
    ├── saas-ceo.ts                 # Combined content
    └── ...

__tests__/
├── components/
│   ├── layout/
│   │   └── MegaMenu.test.tsx
│   ├── sections/
│   │   └── ...
│   └── templates/
│       └── ...
├── app/
│   ├── dla/
│   │   └── ...
│   └── ...
└── integration/
    └── navigation-flow.test.tsx
```

---

## Content Data Structure

```typescript
// types/industry.ts
export interface IndustryData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  painPoints: {
    title: string;
    description: string;
    icon: string;
  }[];
  solutions: {
    title: string;
    description: string;
    icon: string;
  }[];
  caseStudy?: {
    client: string;
    metric: string;
    description: string;
  };
  keywords: string[];
  roles: string[]; // Available role combinations
}

// types/role.ts
export interface RoleData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  buyingTriggers: string[];
  industries: string[]; // Available industry combinations
}
```

---

## Revision History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-05 | Tasks.md created | Claude Code |
