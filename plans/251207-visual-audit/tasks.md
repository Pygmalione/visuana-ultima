# Tasks - SPEC-012: Frontend Visual Audit & Polish

**Spec:** SPEC-012 Frontend Visual Audit
**Status:** 🟡 W trakcie
**Data utworzenia:** 2025-12-07

---

## Progress Summary

```
Phase 1: ░░░░░░░░░░░░░░░░░░░░   0%  Audit
Phase 2: ░░░░░░░░░░░░░░░░░░░░   0%  Stock Images
Phase 3: ░░░░░░░░░░░░░░░░░░░░   0%  P0 Fixes
Phase 4: ░░░░░░░░░░░░░░░░░░░░   0%  P1 Fixes
Phase 5: ░░░░░░░░░░░░░░░░░░░░   0%  E2E Testing
─────────────────────────────────────
Overall: ░░░░░░░░░░░░░░░░░░░░   0%
```

---

## Phase 1: Comprehensive Audit

### Task Group 1.1: Page Audits
- [ ] 1.1.1 Audit Homepage (`/`)
- [ ] 1.1.2 Audit About page (`/o-nas`)
- [ ] 1.1.3 Audit Services pages (`/uslugi/*`)
- [ ] 1.1.4 Audit Contact page (`/kontakt`)
- [ ] 1.1.5 Audit Blog pages (`/blog`, `/blog/*`)
- [ ] 1.1.6 Audit Industry pages (`/dla/*`)
- [ ] 1.1.7 Audit Role pages (`/dla-*`)

### Task Group 1.2: Component Audits
- [ ] 1.2.1 Audit Navigation (Navbar, MegaMenu)
- [ ] 1.2.2 Audit Hero sections
- [ ] 1.2.3 Audit Card components
- [ ] 1.2.4 Audit Button components
- [ ] 1.2.5 Audit Form components
- [ ] 1.2.6 Audit Footer

### Task Group 1.3: Generate Report
- [ ] 1.3.1 Create AUDIT-REPORT.md
- [ ] 1.3.2 Categorize issues (P0/P1/P2)
- [ ] 1.3.3 Screenshot current state

---

## Phase 2: Stock Images (Pexels)

### Task Group 2.1: Download Images
- [ ] 2.1.1 Team/People images (5-8)
- [ ] 2.1.2 Office/Workspace images (3-5)
- [ ] 2.1.3 Tech/Abstract images (3-5)
- [ ] 2.1.4 Industry-specific images (8)

### Task Group 2.2: Optimize Images
- [ ] 2.2.1 Convert to WebP format
- [ ] 2.2.2 Resize to required dimensions
- [ ] 2.2.3 Compress (<100KB each)
- [ ] 2.2.4 Add to public/images/

### Task Group 2.3: Integrate Images
- [ ] 2.3.1 Update Hero sections with images
- [ ] 2.3.2 Update Card components
- [ ] 2.3.3 Update Industry pages
- [ ] 2.3.4 Add proper alt text

---

## Phase 3: P0 Critical Fixes

### Task Group 3.1: Typography Fixes
- [ ] 3.1.1 Ensure Clash Display for headings
- [ ] 3.1.2 Ensure Jakarta Sans for body
- [ ] 3.1.3 Fix font sizes (type scale)
- [ ] 3.1.4 Fix line heights

### Task Group 3.2: Color Fixes
- [ ] 3.2.1 Ensure brand colors used correctly
- [ ] 3.2.2 Fix contrast issues
- [ ] 3.2.3 Consistent hover states
- [ ] 3.2.4 Fix CTA button colors

### Task Group 3.3: Layout Fixes
- [ ] 3.3.1 Fix spacing inconsistencies
- [ ] 3.3.2 Fix responsive breakpoints
- [ ] 3.3.3 Fix mobile navigation
- [ ] 3.3.4 Fix content overflow

### Task Group 3.4: Accessibility Fixes
- [ ] 3.4.1 Add missing alt text
- [ ] 3.4.2 Fix focus indicators
- [ ] 3.4.3 Add aria labels
- [ ] 3.4.4 Fix color contrast

---

## Phase 4: P1 Enhancements

### Task Group 4.1: Animations
- [ ] 4.1.1 Add entrance animations
- [ ] 4.1.2 Add scroll-triggered animations
- [ ] 4.1.3 Smooth page transitions
- [ ] 4.1.4 Button hover animations

### Task Group 4.2: Micro-interactions
- [ ] 4.2.1 Card hover effects
- [ ] 4.2.2 Link underline animations
- [ ] 4.2.3 Form input focus effects
- [ ] 4.2.4 Loading states

### Task Group 4.3: Visual Polish
- [ ] 4.3.1 Add subtle gradients
- [ ] 4.3.2 Add shadows where needed
- [ ] 4.3.3 Icon animations
- [ ] 4.3.4 Image treatments

---

## Phase 5: E2E Testing & Iteration

### Task Group 5.1: Chrome DevTools Testing
- [ ] 5.1.1 Test all pages load correctly
- [ ] 5.1.2 Test navigation flow
- [ ] 5.1.3 Test form submissions
- [ ] 5.1.4 Test responsive breakpoints

### Task Group 5.2: Performance Testing
- [ ] 5.2.1 Run Lighthouse audit
- [ ] 5.2.2 Check Core Web Vitals
- [ ] 5.2.3 Analyze bundle size
- [ ] 5.2.4 Test image loading

### Task Group 5.3: Visual Regression
- [ ] 5.3.1 Capture baseline screenshots
- [ ] 5.3.2 Compare before/after
- [ ] 5.3.3 Document changes

### Task Group 5.4: Iteration
- [ ] 5.4.1 Fix issues found in testing
- [ ] 5.4.2 Re-test fixed areas
- [ ] 5.4.3 Final review
- [ ] 5.4.4 Create FIXES-LOG.md

---

## Blockers

| Blocker | Status | Resolution |
|---------|--------|------------|
| None | - | - |

---

## Notes

- Use chrome-devtools MCP for E2E testing
- Download images from Pexels (free license)
- Focus on P0 first, then P1
- Iterate until Lighthouse >90

---

## Revision History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-07 | Tasks.md created | Claude Code |
