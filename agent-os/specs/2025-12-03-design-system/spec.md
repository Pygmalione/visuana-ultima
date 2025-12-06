# SPEC-002: Design System & UI Components

**Status:** ✅ COMPLETE (aktualizacja: 2025-12-05)
**Priorytet:** KRYTYCZNY 🔴
**Szacowany czas:** 3-4 dni
**Zależności:** SPEC-001 (Brand Identity - kolory, fonty, visual guidelines)

---

## 0. DESIGN VARIANTS (2025-12-05)

> **Pełna dokumentacja:**
> - `agent-os/research/DESIGN-VARIANTS.md` - biblioteki, typografia, struktura
> - `agent-os/research/VISUAL-DESIGN-VARIANTS.md` - **4 warianty graficzne z komponentami, animacjami, kolorami, copy**

### Wybrany kierunek wizualny: DATA-DRIVEN FUTURISM + BOLD COPY

| Kategoria | Wybór | Uzasadnienie |
|-----------|-------|--------------|
| **Kierunek wizualny** | Wariant D: Data-Driven Futurism | AI-native, dashboard aesthetics, tech premium |
| **Biblioteki UI** | shadcn/ui + Motion One + Lucide | Copy-paste control, Tailwind-native, accessible |
| **Typografia** | Clash Display + Jakarta Sans + JetBrains Mono | Tech/AI vibe, unikalna, 70% Data match |
| **Paleta kolorów** | Deep tech blue-black + Royal Red accent + Data colors | `--bg-void: #030712`, `--royal-red-600: #DC2626` |
| **Animacje** | Terminal-style, glow effects, particle grid | Futurystyczne, data-driven |
| **Copy tone** | Prowokacyjny + Data-driven (Wariant A + D mix) | "Twoja agencja kłamie. My mamy dowody." |

### Kluczowe elementy wizualne

**Kolory:**
```css
--bg-void: #030712;        /* Deep tech background */
--bg-panel: #0F172A;       /* Card surfaces */
--royal-red-600: #DC2626;  /* Primary accent */
--data-green: #22C55E;     /* Success metrics */
--data-blue: #3B82F6;      /* Info metrics */
--glow-red: 0 0 30px rgba(220, 38, 38, 0.3);
```

**Hero headline (bold copy):**
> "Twoja agencja kłamie. My mamy dowody."
> lub
> "Marketing sterowany przez AI."

**CTA (prowokacyjne):**
> "POKAŻ MI, GDZIE TRACĘ KASĘ"

### Typografia - szczegóły (Wariant C: Tech/Modern)

```typescript
// tailwind.config.ts
fontFamily: {
  sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
  display: ['Clash Display', 'Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
}

// Font sizes (Desktop)
fontSize: {
  'h1': ['52px', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
  'h2': ['40px', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
  'h3': ['30px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
  'h4': ['24px', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
  'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
  'body': ['16px', { lineHeight: '1.65', fontWeight: '400' }],
  'data': ['16px', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
}
```

**Źródła fontów:**
- Clash Display: https://www.fontshare.com/fonts/clash-display (FREE)
- Plus Jakarta Sans: Google Fonts
- JetBrains Mono: https://www.jetbrains.com/lp/mono/ (FREE)

### Migracja typografii (z Inter)

**Quick Win (2h):** Dodaj Clash Display tylko dla headers, zachowaj Inter dla body
**Pełna migracja (4-5 dni):** Pełna zamiana na Clash + Jakarta + JetBrains

---

## 1. CEL SPECYFIKACJI

Zbudować kompletny, reużywalny design system oparty na Tailwind CSS z zestawem komponenty UI gotowych do użycia w:
- Homepage Visuana (główny produkt)
- Stronach usługowych (Content Marketing, AI Agents, etc.)
- Blogu (Visuana + Seonyu)
- Submarki Seonyu

Design system musi być:
- **Spójny** - jeden źródło prawdy dla palety kolorów, typografii, spacing
- **Dostępny** - WCAG 2.1 AA compliance
- **Responzywny** - mobile-first, desktop-ready
- **Performantny** - optymalizacja CSS, bundle size
- **Rozszerzalny** - łatwe dodawanie nowych komponentów

---

## 2. WYMAGANIA FUNKCJONALNE

### 2.1 Konfiguracja Tailwind CSS
- [ ] **Kolory** - ekstrakcja z SPEC-001 (Visual Identity):
  - Primary: Royal Red (#DC2F29 lub wariant)
  - Secondary: Neutrals (gray, white, black)
  - Accent: Warianty dla CTA, hover states
  - Dark mode colors
- [ ] **Typografia**:
  - Font faces (system fonts lub custom z Google Fonts)
  - Font sizes (text-sm, text-base, text-lg, text-xl, text-2xl, etc.)
  - Font weights (regular, medium, semibold, bold)
  - Line heights (prose, tight, normal, relaxed)
- [ ] **Spacing** - skalowanie (4px, 8px, 16px, itd.)
- [ ] **Breakpoints** - mobile-first (sm, md, lg, xl, 2xl)
- [ ] **Shadows** - subtle, medium, large dla depth
- [ ] **Border radius** - consistent rounding
- [ ] **Animacje** - transitions, durations dla smooth interactions

### 2.2 Komponenty UI Bazowe

#### Layout Components
- [ ] **Container** - max-width wrapper z padding
- [ ] **Grid** - responsive grid system (2/3/4 kolumny)
- [ ] **Section** - semantic wrapper dla sekcji strony

#### Navigation
- [ ] **Navbar** - sticky header z logo, nav links, CTA button
  - Desktop: horizontal layout
  - Mobile: hamburger menu
- [ ] **Footer** - multi-column footer z links, social, newsletter signup
- [ ] **Breadcrumb** - navigation aid dla stron podrzędnych
- [ ] **Pagination** - dla list artykułów

#### Typography
- [ ] **Heading** - komponenty (H1-H6) ze skalowaniem
- [ ] **Paragraph** - body text z leading variants
- [ ] **Link** - inline links z hover state, external indicator (optional)
- [ ] **Code** - inline code, code blocks (syntax highlighting - optional)
- [ ] **Quote** - blockquote dla cytatów

#### Buttons
- [ ] **Button (Primary)** - royal red, bold, dominant
- [ ] **Button (Secondary)** - outline, subtle
- [ ] **Button (Ghost)** - transparent, text-only
- [ ] **Button (Icon)** - icon buttons
- [ ] **Button states** - hover, active, disabled, loading
- [ ] **Button sizes** - sm, md, lg

#### Cards
- [ ] **Card (Service)** - dla sekcji usług (icon, title, description, link)
- [ ] **Card (Article)** - dla bloga (image, title, excerpt, date, category, author)
- [ ] **Card (Testimonial)** - dla social proof (avatar, quote, author)
- [ ] **Card (Team)** - dla team members (photo, name, role, social links)
- [ ] **Card (Feature)** - dla feature highlights

#### Forms
- [ ] **Input** - text, email, phone, url
- [ ] **Textarea** - multi-line input
- [ ] **Select** - dropdown selector
- [ ] **Checkbox** - multiple selection
- [ ] **Radio** - single selection
- [ ] **Form Group** - wrapper dla label + input + error message
- [ ] **Form validation** - error states, success indicators

#### Dialogs & Modals
- [ ] **Modal** - overlay dialog
- [ ] **Alert Dialog** - confirmation modal
- [ ] **Toast/Notification** - temporary messages

#### Hero Sections
- [ ] **Hero (Full Width)** - bold statement + CTA
- [ ] **Hero (Split)** - content + image side-by-side
- [ ] **Hero (Video Background)** - video backdrop (optional)

#### CTA Sections
- [ ] **CTA Box** - simple call-to-action (text + button)
- [ ] **CTA Newsletter** - email signup form

#### Blog Specific
- [ ] **ArticleCard** - teaser dla artykułu
- [ ] **ArticleList** - grid/list artykułów
- [ ] **AuthorBio** - author info section
- [ ] **CategoryFilter** - dropdown/buttons do filtrowania
- [ ] **TableOfContents** - spis treści dla artykułu
- [ ] **CopyButton** - do code blocks

---

## 3. WYMAGANIA TECHNICZNE

### 3.1 Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 3.4+
- **UI Base**: shadcn/ui (optional, dla skomplikowanych komponentów)
- **Animacje**: Framer Motion (dla micro-interactions)
- **TypeScript**: Strict mode, fully typed components
- **Testing**: Vitest + Storybook (optional docs)

### 3.2 Struktura kodu

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── modal.tsx
│   │   └── ... (inne komponenty)
│   ├── layout/               # Layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   ├── sections/             # Landing page sections
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── testimonials.tsx
│   │   ├── cta.tsx
│   │   └── ... (inne sekcje)
│   └── blog/                 # Blog specific components
│       ├── article-card.tsx
│       ├── article-list.tsx
│       ├── author-bio.tsx
│       └── category-filter.tsx
├── styles/
│   ├── globals.css           # Global styles
│   └── tailwind.css          # Tailwind directives
├── config/
│   └── tailwind-config.ts    # Tailwind configuration
└── types/
    └── components.ts         # Component type definitions
```

### 3.3 Accessibility (WCAG 2.1 AA)
- [ ] Semantic HTML (button, nav, main, article, etc.)
- [ ] ARIA attributes gdzie potrzebne (aria-label, aria-hidden, role)
- [ ] Color contrast ratio (4.5:1 minimum dla tekstu)
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus indicators (outline/ring)
- [ ] Screen reader testing

### 3.4 Performance
- [ ] CSS minification & purging (Tailwind)
- [ ] Critical CSS inline (inline above-the-fold styles)
- [ ] Image optimization (next/image)
- [ ] No unused styles exported
- [ ] Bundle size monitoring

### 3.5 Dark Mode
- [ ] Tailwind dark mode configuration
- [ ] Kolory dla dark/light mode variants
- [ ] System preference detection (prefers-color-scheme)
- [ ] Manual theme toggle (optional)

---

## 4. KOMPONENTY DO ZBUDOWANIA

### Faza 1: Fundamenty (Dzień 1)
1. Tailwind config (kolory, typografia, spacing)
2. Button (primary, secondary, ghost, sizes, states)
3. Input (text, states, validation)
4. Card (basic wrapper)
5. Container & Grid layout

### Faza 2: Layout (Dzień 2)
6. Navbar (desktop + mobile)
7. Footer (multi-column)
8. Section wrapper
9. Hero (full-width)
10. CTA box

### Faza 3: Content (Dzień 3)
11. Article card
12. Testimonial card
13. Service card
14. Category filter
15. Author bio

### Faza 4: Advanced (Dzień 4 - optional)
16. Modal/Dialog
17. Form components (Textarea, Select, Checkbox, Radio)
18. Toast notifications
19. Table of contents
20. Copy button

---

## 5. INTEGRACJA Z ISTNIEJĄCYM KODEM

### 5.1 SPEC-001 (Brand Identity)
Czekamy na finalizację:
- Paleta kolorów (royal red + neutrals)
- Typografia (font choices, sizing)
- Logo guidelines
- Visual patterns

### 5.2 Przyszłe specyfikacje
- **SPEC-003** (Blog System) - będzie reużywać komponenty z SPEC-002
- **SPEC-005** (Homepage) - będzie reużywać sections z SPEC-002
- **SPEC-006** (Service pages) - będzie reużywać cards + sections

---

## 6. DELIVERABLES

- [ ] **`tailwind.config.js`** - pełna konfiguracja Tailwind CSS
- [ ] **`/src/components/ui/`** - 15+ komponentów bazowych
- [ ] **`/src/components/layout/`** - navbar, footer, section, container
- [ ] **`/src/components/sections/`** - hero, CTA, features sections
- [ ] **`/src/components/blog/`** - article-card, list, filter, author-bio
- [ ] **`/src/styles/globals.css`** - global styles, animations
- [ ] **`/src/types/components.ts`** - type definitions dla komponentów
- [ ] **`Design System Documentation`** - README z usage examples
- [ ] **`Storybook`** (optional) - interactive component library
- [ ] **Dark mode support** - pełna konfiguracja theme switch

---

## 7. KRYTERIA AKCEPTACJI

- [ ] Wszystkie komponenty responsywne (mobile-first)
- [ ] WCAG 2.1 AA compliance (accessibility tests)
- [ ] 100% TypeScript coverage
- [ ] Zero unused CSS (bundle analysis)
- [ ] Dark mode fully functional
- [ ] Component tests (>80% coverage dla kritycznych komponentów)
- [ ] Documentation (usage examples, props, variants)
- [ ] Consistency across components (spacing, colors, interactions)

---

## 8. TIMELINE & OWNERSHIP

| Faza | Komponent | Czas | Owner |
|------|-----------|------|-------|
| 1 | Tailwind config | 2h | Implementer |
| 1 | Button, Input, Card | 4h | Implementer |
| 2 | Navbar, Footer, Section | 4h | Implementer |
| 3 | Article/Service/Testimonial cards | 4h | Implementer |
| 4 | Forms, Modal, Advanced | 4h | Implementer |
| - | Testing & Accessibility | 4h | Verifier |
| - | Documentation | 2h | Implementer |

**Total: 24-28 hours (3-4 dni)**

---

## 9. RYZYKA & MITYGACJA

| Ryzyko | Mitygacja |
|--------|-----------|
| SPEC-001 nie gotowe na czas | Starter colors, updatuj później (hot-swap) |
| Tailwind config zbyt skomplikowany | Start simple, iterate |
| Accessibility issues late | Test early, use axe-core |
| Dark mode complexity | Use Tailwind dark: variant, keep it simple |
| Too many components | MVP first (10), add more after |

---

## 10. NOTATKI

1. **Component Library vs Storybook** - Storybook opcjonalnie, bo Next.js ma dosyć dla small design system
2. **shadcn/ui** - Można go użyć na bazie (copy-paste approach) dla skomplikowanych komponentów jak Modal
3. **Animacje** - Framer Motion opcjonalnie dla micro-interactions (nie blokuje MVP)
4. **Dark mode** - Built-in w Tailwind, łatwe do implementacji
5. **Testing** - Unit testy dla logiki, visual tests dla UI (optional na początek)
