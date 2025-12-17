# SPEC-012: Frontend Visual Audit & Polish

**Status:** 🟡 W opracowaniu
**Priorytet:** Krytyczny (przed launch)
**Zależności:** SPEC-002 ✅, SPEC-005 ✅, SPEC-006 ✅, SPEC-007 ✅, SPEC-011 ✅
**Szacowany czas:** 2-3 dni
**Data utworzenia:** 2025-12-07

---

## 1. Cel Specyfikacji

Kompleksowy audyt wizualny wszystkich stron Visuana pod kątem:
- Adherence do Design System (SPEC-002)
- Best practices frontend design
- Spójność wizualna między stronami
- UX/UI polish
- Responsywność
- Accessibility (WCAG 2.1 AA)
- Performance wizualna (animations, transitions)

---

## 2. Zakres Audytu

### 2.1 Strony do audytu

| Strona | Route | Status |
|--------|-------|--------|
| Homepage | `/` | 🔍 Do audytu |
| O nas | `/o-nas` | 🔍 Do audytu |
| Usługi | `/uslugi/*` | 🔍 Do audytu |
| Kontakt | `/kontakt` | 🔍 Do audytu |
| Blog | `/blog`, `/blog/*` | 🔍 Do audytu |
| Dla branż | `/dla/*` | 🔍 Do audytu |
| Dla ról | `/dla-*` | 🔍 Do audytu |

### 2.2 Komponenty do audytu

- Navigation (Navbar, MegaMenu)
- Hero sections
- Cards (Service, Blog, Feature)
- Buttons & CTAs
- Forms
- Footer
- Typography
- Icons
- Spacing & Layout

---

## 3. Kryteria Audytu

### 3.1 Design System Adherence

| Kryterium | Waga | Opis |
|-----------|------|------|
| Kolory | 🔴 Wysoka | Zgodność z paletą Visuana |
| Typografia | 🔴 Wysoka | Clash Display / Jakarta Sans / JetBrains |
| Spacing | 🟡 Średnia | Tailwind spacing scale |
| Shadows | 🟢 Niska | Consistent shadow tokens |
| Border radius | 🟢 Niska | Consistent radius scale |

### 3.2 Best Practices Frontend

| Kryterium | Standard | Narzędzie |
|-----------|----------|-----------|
| Semantic HTML | HTML5 semantic tags | Manual review |
| Accessibility | WCAG 2.1 AA | axe-core, Lighthouse |
| Performance | Lighthouse >90 | Lighthouse CI |
| Responsive | Mobile-first | Chrome DevTools |
| SEO | Meta tags, JSON-LD | Lighthouse |

### 3.3 Visual Polish Checklist

- [ ] Consistent hover states
- [ ] Smooth transitions (300ms ease)
- [ ] Loading states
- [ ] Empty states
- [ ] Error states
- [ ] Focus indicators
- [ ] Animation timing
- [ ] Image optimization
- [ ] Icon consistency

---

## 4. Obrazy Stock (Pexels)

### 4.1 Wymagane obrazy

| Kategoria | Ilość | Użycie |
|-----------|-------|--------|
| Team/People | 5-8 | About, Testimonials |
| Office/Workspace | 3-5 | Background, Hero |
| Tech/Abstract | 3-5 | Features, Blog |
| Industry-specific | 8 | Industry pages |

### 4.2 Specyfikacja obrazów

- **Format:** WebP (z JPEG fallback)
- **Rozmiary:**
  - Hero: 1920x1080
  - Card: 800x600
  - Thumbnail: 400x300
- **Optymalizacja:** Next.js Image component
- **Alt text:** Descriptive, keyword-rich

### 4.3 Źródła

- **Primary:** Pexels.com (free, high quality)
- **Secondary:** Unsplash.com
- **Icons:** Lucide React (already used)

---

## 5. E2E Testing Plan

### 5.1 Chrome DevTools Tests

```typescript
// Test areas via chrome-devtools MCP
const testAreas = [
  'navigation-flow',
  'form-submissions',
  'responsive-breakpoints',
  'animation-performance',
  'accessibility-audit',
  'console-errors',
  'network-requests',
  'lighthouse-scores'
]
```

### 5.2 Visual Regression Tests

- Screenshot comparison per page
- Mobile vs Desktop
- Dark mode (jeśli zaimplementowany)

### 5.3 Performance Tests

- Core Web Vitals
- Bundle size analysis
- Image loading performance

---

## 6. Iteracyjny Proces Poprawek

```
┌─────────────────────────────────────────────────────────┐
│                  ITERATION CYCLE                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   1. AUDIT                                              │
│      ↓ Identify issues                                  │
│                                                         │
│   2. PRIORITIZE                                         │
│      ↓ P0 → P1 → P2                                    │
│                                                         │
│   3. FIX                                                │
│      ↓ Implement changes                                │
│                                                         │
│   4. TEST                                               │
│      ↓ E2E via chrome-devtools                          │
│                                                         │
│   5. VERIFY                                             │
│      ↓ Screenshot comparison                            │
│                                                         │
│   6. REPEAT                                             │
│      → Until all P0/P1 resolved                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 7. Deliverables

### 7.1 Dokumenty

| Dokument | Opis |
|----------|------|
| `AUDIT-REPORT.md` | Wyniki audytu |
| `FIXES-LOG.md` | Log poprawek |
| `SCREENSHOTS/` | Przed/po comparison |

### 7.2 Kod

- Poprawione komponenty
- Nowe style/animacje
- Zoptymalizowane obrazy

### 7.3 Testy

- E2E test suite
- Visual regression baseline
- Lighthouse CI config

---

## 8. Kryteria Akceptacji

### 8.1 Must Have (P0)

- [ ] Lighthouse score >90 na wszystkich stronach
- [ ] Zero console errors
- [ ] WCAG 2.1 AA compliance
- [ ] Mobile responsive (320px - 1440px)
- [ ] Consistent typography
- [ ] All CTAs functional

### 8.2 Should Have (P1)

- [ ] Smooth animations (60fps)
- [ ] Optimized images (<100KB per image)
- [ ] Loading states
- [ ] Hover effects consistent
- [ ] Focus indicators visible

### 8.3 Could Have (P2)

- [ ] Micro-interactions
- [ ] Advanced animations
- [ ] Dark mode support
- [ ] Skeleton loaders

---

## 9. Timeline

| Dzień | Zadania |
|-------|---------|
| 1 | Audyt wszystkich stron, raport |
| 2 | Pobranie obrazów, P0 fixes |
| 3 | P1 fixes, E2E tests |
| 4 | Final polish, documentation |

---

## 10. Narzędzia

| Narzędzie | Użycie |
|-----------|--------|
| Chrome DevTools | E2E testing, performance |
| Lighthouse | Performance, accessibility |
| axe-core | Accessibility audit |
| Pexels API | Stock images |
| Next.js Image | Image optimization |
| Framer Motion | Animations (if needed) |

---

**Autor:** Claude Code
**Wersja:** 1.0
**Data:** 2025-12-07
