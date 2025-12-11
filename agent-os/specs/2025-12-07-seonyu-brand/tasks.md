# Tasks - SPEC-008: Seonyu Brand & Landing

**Spec:** SPEC-008 Seonyu Brand & Landing Page
**Status:** 🟡 W trakcie
**Data utworzenia:** 2025-12-07

---

## Progress Summary

```
Phase 1: ████████████████████ 100%  Setup & Config
Phase 2: ████████████████████ 100%  Components
Phase 3: ██████████████████░░  90%  Pages
Phase 4: ░░░░░░░░░░░░░░░░░░░░   0%  Testing
Phase 5: ░░░░░░░░░░░░░░░░░░░░   0%  Polish
─────────────────────────────────────
Overall: ██████████████░░░░░░  65%
```

---

## Phase 1: Setup & Configuration

### Task Group 1.1: Theme Setup
- [x] 1.1.1 Extend Tailwind config with Seonyu colors
- [x] 1.1.2 Add Seonyu font configuration (if different)
- [x] 1.1.3 Create Seonyu CSS variables

### Task Group 1.2: Routing Setup
- [x] 1.2.1 Create `/seonyu` route directory
- [x] 1.2.2 Setup Seonyu layout component
- [x] 1.2.3 Add Seonyu to sitemap configuration

---

## Phase 2: Components

### Task Group 2.1: Seonyu-specific Components
- [x] 2.1.1 Create SeonyuHero component
- [x] 2.1.2 Create SeonyuFeatures component
- [x] 2.1.3 Create SeonyuHowItWorks component
- [x] 2.1.4 Create SeonyuSocialProof component
- [x] 2.1.5 Create SeonyuCTA component
- [x] 2.1.6 Create SeonyuNavbar component
- [x] 2.1.7 Create SeonyuFooter component

### Task Group 2.2: Reuse Visuana Components
- [x] 2.2.1 Adapt Button for Seonyu colors
- [x] 2.2.2 Adapt Card for Seonyu styling
- [x] 2.2.3 Adapt ContactForm for demo requests

---

## Phase 3: Pages

### Task Group 3.1: Landing Page
- [x] 3.1.1 Create `/seonyu/page.tsx` (main landing)
- [x] 3.1.2 Add Hero section
- [x] 3.1.3 Add Features section (3 features)
- [x] 3.1.4 Add How It Works section
- [x] 3.1.5 Add Social Proof section
- [x] 3.1.6 Add CTA section
- [x] 3.1.7 Add FAQ section

### Task Group 3.2: Additional Pages (Optional)
- [ ] 3.2.1 Create `/seonyu/funkcje/page.tsx`
- [ ] 3.2.2 Create `/seonyu/demo/page.tsx`
- [ ] 3.2.3 Create `/seonyu/cennik/page.tsx` (if needed)

### Task Group 3.3: SEO & Metadata
- [x] 3.3.1 Add generateMetadata for Seonyu pages
- [x] 3.3.2 Create Seonyu JSON-LD schemas
- [ ] 3.3.3 Add Open Graph images

---

## Phase 4: Testing

### Task Group 4.1: Unit Tests
- [ ] 4.1.1 Test SeonyuHero component
- [ ] 4.1.2 Test SeonyuFeatures component
- [ ] 4.1.3 Test SeonyuCTA component
- [ ] 4.1.4 Test demo form validation

### Task Group 4.2: Integration Tests
- [ ] 4.2.1 Test landing page rendering
- [ ] 4.2.2 Test navigation between sections
- [ ] 4.2.3 Test demo form submission

### Task Group 4.3: E2E Tests
- [ ] 4.3.1 Test full landing page flow
- [ ] 4.3.2 Test mobile responsiveness
- [ ] 4.3.3 Test SEO meta tags

---

## Phase 5: Polish & Launch

### Task Group 5.1: Visual Polish
- [ ] 5.1.1 Add entrance animations
- [ ] 5.1.2 Add hover effects
- [ ] 5.1.3 Add gradient backgrounds
- [ ] 5.1.4 Optimize images

### Task Group 5.2: Performance
- [ ] 5.2.1 Run Lighthouse audit
- [ ] 5.2.2 Optimize LCP
- [ ] 5.2.3 Reduce bundle size

### Task Group 5.3: Launch
- [ ] 5.3.1 Final review
- [ ] 5.3.2 Update sitemap
- [ ] 5.3.3 Add to navigation

---

## Dependencies

| Dependency | Status | Notes |
|------------|--------|-------|
| SPEC-001 ToV | ✅ Done | Use Visuana ToV adapted |
| SPEC-002 Design System | ✅ Done | Reuse components |
| SPEC-004 SEO | ✅ Done | Reuse patterns |
| SPEC-007 Contact | ✅ Done | Reuse form logic |

---

## Blockers

| Blocker | Status | Resolution |
|---------|--------|------------|
| None | - | - |

---

## Revision History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-07 | Tasks.md created | Claude Code |
| 2025-12-11 | Updated progress - Phase 1-2 complete, Phase 3 ~80% | Claude Code |
| 2025-12-11 | Added SeonyuFAQ component - Phase 3 now 90% | Claude Code |
