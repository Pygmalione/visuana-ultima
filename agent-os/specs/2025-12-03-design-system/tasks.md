# Tasks - SPEC-002: Design System & UI Components

**Projekt:** Visuana Ultima
**Spec:** SPEC-002 (Design System & UI Components)
**Data inicjalizacji:** 2025-12-03
**Szacowany czas:** 24-28 godzin (3-4 dni)

---

## FAZA 1: KONFIGURACJA & KOMPONENTY BAZOWE (Dzień 1)

### Task 1.1: Tailwind Configuration
**Szacowany czas:** 2-3 godziny
**Priorytet:** KRYTYCZNY

**Opis:**
Ustawić pełną konfigurację Tailwind CSS ze skalą kolorów, typografią, spacing'iem i breakpoint'ami na bazie SPEC-001 (Brand Identity).

**Kryteria akceptacji:**
- [ ] `tailwind.config.js` stworzony z custom colors
- [ ] Royal red oraz neutralne kolory zdefiniowane
- [ ] Typografia (fonty, rozmiary, wagi) skonfigurowana
- [ ] Spacing scale (4px, 8px, 16px, itd.) zdefiniowany
- [ ] Breakpoints: sm, md, lg, xl, 2xl ustawione
- [ ] Shadows, border-radius, animations dodane
- [ ] Dark mode konfiguracja zaimplementowana
- [ ] `globals.css` z Tailwind directives

**Dependencje:** SPEC-001 (colors, fonts)

**Subtasks:**
1. Ekstrakcja kolorów z SPEC-001 Brand Identity doc
2. Setup font faces (Google Fonts lub system fonts)
3. Custom spacing scale
4. Dark mode configuration
5. Plugin setup (jeśli potrzebne)

**Test plan:**
- [ ] `npx tailwindcss --check` bez błędów
- [ ] Bundle size check (CSS powinno być <50KB)
- [ ] Dark mode toggle test

---

### Task 1.2: Button Component
**Szacowany czas:** 2 godziny
**Priorytet:** KRYTYCZNY

**Opis:**
Zbudować reużywalny komponent Button z variantami (primary, secondary, ghost), rozmiarami (sm, md, lg) i stanami (hover, active, disabled, loading).

**Kryteria akceptacji:**
- [ ] 4 warianty: primary, secondary, ghost, outline
- [ ] 3 rozmiary: sm, md, lg
- [ ] Wszystkie stany: hover, active, disabled, loading
- [ ] Type-safe props (TypeScript)
- [ ] WCAG 2.1 AA compliance (color contrast)
- [ ] Accessibility: proper button semantics, aria-labels
- [ ] Props: `onClick`, `disabled`, `loading`, `variant`, `size`, `className`
- [ ] Responsive (padding, font-size)

**Dependencje:** Task 1.1

**Subtasks:**
1. Component skeleton (`button.tsx`)
2. Variant styles (primary, secondary, ghost, outline)
3. Size styles (sm, md, lg)
4. State styles (hover, active, disabled)
5. Loading indicator (optional spinner)
6. TypeScript types
7. Unit tests

**Test plan:**
- [ ] Render all variants & sizes
- [ ] Hover/active states visually correct
- [ ] Disabled button not clickable
- [ ] Accessibility test (a11y)
- [ ] Snapshot test

---

### Task 1.3: Input Component
**Szacowany czas:** 2 godziny
**Priorytet:** KRYTYCZNY

**Opis:**
Zbudować reużywalny Input component z obsługą different input types, validation states, error messages.

**Kryteria akceptacji:**
- [ ] Support dla types: text, email, phone, url, password
- [ ] Label wrapper
- [ ] Error state z error message
- [ ] Success state (optional)
- [ ] Placeholder text
- [ ] Disabled state
- [ ] Full width option
- [ ] WCAG 2.1 AA compliance
- [ ] Props: `type`, `placeholder`, `disabled`, `error`, `label`, `value`, `onChange`
- [ ] TypeScript types

**Dependencje:** Task 1.1

**Subtasks:**
1. Input HTML element styling
2. Label component
3. Error message display
4. Validation state styling
5. TypeScript types
6. Unit tests

**Test plan:**
- [ ] All input types render correctly
- [ ] Error state shows message
- [ ] Disabled state prevents input
- [ ] Accessibility (label association, aria-invalid)
- [ ] Mobile keyboard appropriate to type

---

### Task 1.4: Card Component
**Szacowany czas:** 1 godzina
**Priorytet:** KRYTYCZNY

**Opis:**
Zbudować bazowy Card component jako wrapper dla content z shadow, border-radius, padding.

**Kryteria akceptacji:**
- [ ] Basic card wrapper z elevation (shadow)
- [ ] Consistent padding
- [ ] Border radius z design system
- [ ] Hover effect (optional)
- [ ] Responsive spacing
- [ ] Props: `children`, `className`, `hoverable`, `variant`
- [ ] TypeScript types

**Dependencje:** Task 1.1

**Subtasks:**
1. Card HTML structure
2. Styling (shadow, radius, padding)
3. Hover variant
4. TypeScript types

**Test plan:**
- [ ] Renders with correct spacing
- [ ] Shadow visible
- [ ] Responsive padding

---

### Task 1.5: Container & Grid Components
**Szacowany czas:** 1.5 godziny
**Priorytet:** KRYTYCZNY

**Opis:**
Zbudować Layout components: Container (max-width wrapper) i Grid (responsive grid system).

**Kryteria akceptacji:**
- [ ] **Container**: max-width (1200px), horizontal padding, centered
- [ ] **Grid**: 1/2/3/4 kolumny responsive, gap spacing
- [ ] Mobile: 1 kolumna, tablet: 2 kolumny, desktop: 3-4 kolumny
- [ ] Props: `children`, `className`, `cols`, `gap`
- [ ] TypeScript types

**Dependencje:** Task 1.1

**Subtasks:**
1. Container component
2. Grid component
3. Responsive breakpoints
4. TypeScript types

**Test plan:**
- [ ] Container max-width respected
- [ ] Grid cols responsive (1->2->3->4)
- [ ] Gap consistent

---

## FAZA 2: LAYOUT COMPONENTS (Dzień 2)

### Task 2.1: Navbar Component
**Szacowany czas:** 3-4 godziny
**Priorytet:** WYSOKI

**Opis:**
Zbudować sticky header (Navbar) z logo, navigation links, CTA button, mobile hamburger menu.

**Kryteria akceptacji:**
- [ ] Sticky positioning na top
- [ ] Logo/branding na left
- [ ] Navigation links (center/right)
- [ ] CTA button primary
- [ ] Mobile hamburger menu (sm breakpoint)
- [ ] Mobile nav slides in from left
- [ ] Responsive: desktop horizontal, mobile vertical
- [ ] Dark mode support
- [ ] Props: `logo`, `navItems`, `ctaButton`, `onCtaClick`
- [ ] TypeScript types

**Dependencje:** Task 1.2, 1.4

**Subtasks:**
1. Desktop navbar layout
2. Mobile hamburger menu
3. Navigation links styling
4. CTA button integration
5. Mobile menu animations (Framer Motion optional)
6. Active link indicator
7. TypeScript types
8. Unit tests

**Test plan:**
- [ ] Desktop layout correct
- [ ] Hamburger visible on mobile
- [ ] Mobile menu opens/closes
- [ ] Links clickable
- [ ] CTA button visible
- [ ] Sticky behavior works

---

### Task 2.2: Footer Component
**Szacowany czas:** 2-3 godziny
**Priorytet:** WYSOKI

**Opis:**
Zbudować multi-column footer z links, social icons, copyright, newsletter signup.

**Kryteria akceptacji:**
- [ ] Multi-column layout (4 columns on desktop)
- [ ] 1 column na mobile
- [ ] Column sections: Usługi, Zasoby, Firma, Kontakt
- [ ] Social media icons
- [ ] Newsletter signup form
- [ ] Copyright notice
- [ ] Dark mode support
- [ ] Responsive
- [ ] Props: `columns`, `socialLinks`, `onNewsletterSignup`
- [ ] TypeScript types

**Dependencje:** Task 1.1, 1.5, Task 2.1 (consistency)

**Subtasks:**
1. Footer grid layout
2. Column sections
3. Social icons
4. Newsletter form
5. Copyright section
6. TypeScript types
7. Unit tests

**Test plan:**
- [ ] 4 columns on desktop
- [ ] 1 column on mobile
- [ ] All links clickable
- [ ] Newsletter form submits
- [ ] Social icons visible

---

### Task 2.3: Section Wrapper Component
**Szacowany czas:** 1 godzina
**Priorytet:** WYSOKI

**Opis:**
Zbudować Section component do semantic wrap'owania sekcji strony z opcjonalnym background, padding, spacing.

**Kryteria akceptacji:**
- [ ] Section HTML element
- [ ] Consistent padding/spacing
- [ ] Optional background color/image
- [ ] Optional top/bottom separator
- [ ] Container inside
- [ ] Props: `children`, `bgColor`, `bgImage`, `padding`, `separator`
- [ ] TypeScript types

**Dependencje:** Task 1.1, 1.5

**Subtasks:**
1. Section structure
2. Padding variants
3. Background options
4. Separators
5. TypeScript types

**Test plan:**
- [ ] Renders correct spacing
- [ ] Background applied
- [ ] Responsive padding

---

### Task 2.4: Hero Section Component
**Szacowany czas:** 2 godziny
**Priorytet:** WYSOKI

**Opis:**
Zbudować reusable Hero section component (full-width banner z heading, subheading, CTA button, optional image).

**Kryteria akceptacji:**
- [ ] Full width banner
- [ ] Large heading (H1)
- [ ] Subheading/description
- [ ] CTA button
- [ ] Optional background image/video
- [ ] Responsive (text sizes, spacing)
- [ ] Dark/light mode
- [ ] Props: `title`, `subtitle`, `ctaLabel`, `ctaLink`, `backgroundImage`
- [ ] TypeScript types

**Dependencje:** Task 1.1, 1.2, Task 2.3

**Subtasks:**
1. Hero layout (text + image grid)
2. Large typography
3. CTA button
4. Background image handling
5. Responsive breakpoints
6. TypeScript types
7. Unit tests

**Test plan:**
- [ ] Hero renders full-width
- [ ] Text sizes responsive
- [ ] CTA button visible
- [ ] Background image displays
- [ ] Mobile: stacked layout

---

### Task 2.5: CTA Box Component
**Szacowany czas:** 1 godzina
**Priorytet:** ŚREDNI

**Opis:**
Zbudować prosty CTA section component (text + button).

**Kryteria akceptacji:**
- [ ] Text content (optional colored background)
- [ ] CTA button aligned right
- [ ] Responsive (stacked na mobile)
- [ ] Props: `text`, `buttonLabel`, `buttonLink`, `bgColor`
- [ ] TypeScript types

**Dependencje:** Task 1.2, Task 2.3

**Subtasks:**
1. CTA layout
2. Button integration
3. Responsive stacking
4. TypeScript types

**Test plan:**
- [ ] Text and button render
- [ ] Button clickable
- [ ] Mobile: stacked layout

---

## FAZA 3: CONTENT COMPONENTS (Dzień 3)

### Task 3.1: Article Card Component
**Szacowany czas:** 2 godziny
**Priorytet:** WYSOKI

**Opis:**
Zbudować Article Card component do wyświetlania artykułów na blogu (image, title, excerpt, date, category, author).

**Kryteria akceptacji:**
- [ ] Featured image (top)
- [ ] Category badge
- [ ] Title (clickable link)
- [ ] Excerpt/description
- [ ] Publication date
- [ ] Author name/avatar
- [ ] Hover effect (shadow, scale)
- [ ] Props: `image`, `category`, `title`, `excerpt`, `date`, `author`, `slug`
- [ ] TypeScript types

**Dependencje:** Task 1.1, 1.4

**Subtasks:**
1. Article card layout
2. Image styling
3. Metadata display
4. Hover effects
5. TypeScript types
6. Unit tests

**Test plan:**
- [ ] Image displays
- [ ] All metadata visible
- [ ] Hover effect works
- [ ] Link clickable

---

### Task 3.2: Service Card Component
**Szacowany czas:** 1.5 godziny
**Priorytet:** WYSOKI

**Opis:**
Zbudować Service Card component do wyświetlania usług (icon, title, description, link).

**Kryteria akceptacji:**
- [ ] Icon (top)
- [ ] Title
- [ ] Description
- [ ] "Learn more" link
- [ ] Hover effect
- [ ] Props: `icon`, `title`, `description`, `link`
- [ ] TypeScript types

**Dependencje:** Task 1.1, 1.4

**Subtasks:**
1. Service card layout
2. Icon styling
3. Text styling
4. Hover effect
5. TypeScript types

**Test plan:**
- [ ] Icon displays
- [ ] Text renders
- [ ] Link clickable

---

### Task 3.3: Testimonial Card Component
**Szacowany czas:** 1.5 godziny
**Priorytet:** ŚREDNI

**Opis:**
Zbudować Testimonial Card component do wyświetlania opinii klientów (quote, author, role, avatar).

**Kryteria akceptacji:**
- [ ] Quote text (large, italic)
- [ ] Author name
- [ ] Author role/company
- [ ] Author avatar (circular)
- [ ] Optional star rating
- [ ] Props: `quote`, `author`, `role`, `avatar`, `rating`
- [ ] TypeScript types

**Dependencje:** Task 1.1, 1.4

**Subtasks:**
1. Testimonial layout
2. Quote styling
3. Author info
4. Avatar circular crop
5. Optional rating
6. TypeScript types

**Test plan:**
- [ ] Quote renders
- [ ] Author info displays
- [ ] Avatar shows

---

### Task 3.4: Author Bio Component
**Szacowany czas:** 1 godzina
**Priorytet:** ŚREDNI

**Opis:**
Zbudować Author Bio component dla stron artykułów (avatar, name, bio, social links).

**Kryteria akceptacji:**
- [ ] Author avatar (circular)
- [ ] Author name (linked)
- [ ] Bio description
- [ ] Social media links
- [ ] Props: `author`, `bio`, `socialLinks`
- [ ] TypeScript types

**Dependencje:** Task 1.1, 1.4

**Subtasks:**
1. Author bio layout
2. Avatar styling
3. Bio text
4. Social icons
5. TypeScript types

**Test plan:**
- [ ] Avatar displays
- [ ] Bio text renders
- [ ] Social links clickable

---

### Task 3.5: Category Filter Component
**Szacowany czas:** 1 godzina
**Priorytet:** ŚREDNI

**Opis:**
Zbudować Category Filter component do filtrowania artykułów na blogu.

**Kryteria akceptacji:**
- [ ] Button/chip dla każdej kategorii
- [ ] "All" option
- [ ] Active state styling
- [ ] onClick handler
- [ ] Props: `categories`, `activeCategory`, `onCategoryChange`
- [ ] TypeScript types

**Dependencje:** Task 1.2

**Subtasks:**
1. Filter button styles
2. Active state
3. Event handling
4. TypeScript types

**Test plan:**
- [ ] All categories render
- [ ] Active category highlighted
- [ ] onClick fires event

---

## FAZA 4: ADVANCED COMPONENTS (Dzień 4 - Optional)

### Task 4.1: Form Components (Textarea, Select, Checkbox, Radio)
**Szacowany czas:** 3 godziny
**Priorytet:** NISKI

**Opis:**
Zbudować dodatkowe form components: Textarea, Select, Checkbox, Radio.

**Kryteria akceptacji:**
- [ ] Textarea (multi-line input)
- [ ] Select (dropdown)
- [ ] Checkbox (multiple selection)
- [ ] Radio (single selection)
- [ ] All with labels, error states
- [ ] Consistent styling z Input
- [ ] TypeScript types

**Dependencje:** Task 1.3

---

### Task 4.2: Modal/Dialog Component
**Szacowany czas:** 2 godziny
**Priorytet:** NISKI

**Opis:**
Zbudować Modal component do dialogs, modals, alerts.

**Kryteria akceptacji:**
- [ ] Overlay backdrop
- [ ] Modal content
- [ ] Close button
- [ ] Optional header/footer
- [ ] Keyboard close (Escape)
- [ ] Focus trap
- [ ] WCAG 2.1 AA compliance
- [ ] Props: `open`, `onClose`, `title`, `children`

**Dependencje:** Task 1.1, 1.2

---

### Task 4.3: Toast/Notification Component
**Szacowany czas:** 1.5 godziny
**Priorytet:** NISKI

**Opis:**
Zbudować Toast component dla temporary notifications (success, error, info, warning).

**Kryteria akceptacji:**
- [ ] 4 types: success, error, info, warning
- [ ] Auto-dismiss after 3-5 seconds
- [ ] Close button
- [ ] Stack toasts
- [ ] Props: `message`, `type`, `duration`

**Dependencje:** Task 1.1

---

### Task 4.4: Table of Contents Component
**Szacowany czas:** 1.5 godziny
**Priorytet:** NISKI

**Opis:**
Zbudować Table of Contents component dla artykułów (auto-generate z headings).

**Kryteria akceptacji:**
- [ ] Auto-detect H2/H3 headings
- [ ] Clickable navigation
- [ ] Active section highlight
- [ ] Sticky sidebar (optional)
- [ ] Props: `headings`, `onHeadingClick`

**Dependencje:** Task 1.1

---

### Task 4.5: Copy Button Component
**Szacowany czas:** 0.5 godziny
**Priorytet:** NISKI

**Opis:**
Zbudować Copy Button component dla code blocks.

**Kryteria akceptacji:**
- [ ] Copy text to clipboard
- [ ] Visual feedback (changed icon, message)
- [ ] Props: `text`, `onCopy`

**Dependencje:** Task 1.2

---

## FAZA 5: DOKUMENTACJA & TESTOWANIE

### Task 5.1: Unit Tests & Component Tests
**Szacowany czas:** 4-6 godzin
**Priorytet:** WYSOKI

**Opis:**
Napisać unit testy dla wszystkich komponentów (>80% coverage dla critical components).

**Kryteria akceptacji:**
- [ ] Vitest setup
- [ ] Unit tests dla każdego komponentu
- [ ] Render tests
- [ ] Props tests
- [ ] State tests
- [ ] Accessibility tests (axe-core)
- [ ] 80%+ coverage dla critical components

**Dependencje:** All component tasks

---

### Task 5.2: Design System Documentation
**Szacowany czas:** 2-3 godziny
**Priorytet:** WYSOKI

**Opis:**
Napisać dokumentację Design System z usage examples, props, variants.

**Kryteria akceptacji:**
- [ ] README.md (overview)
- [ ] Getting started guide
- [ ] Component catalog (każdy komponent)
- [ ] Props documentation
- [ ] Usage examples
- [ ] Accessibility guidelines
- [ ] Customization guide

**Dependencje:** All component tasks

---

### Task 5.3: Accessibility Audit
**Szacowany czas:** 2 godziny
**Priorytet:** WYSOKI

**Opis:**
Przeprowadzić accessibility audit i fix issues (WCAG 2.1 AA).

**Kryteria akceptacji:**
- [ ] axe-core scan (no violations)
- [ ] Keyboard navigation test
- [ ] Screen reader test
- [ ] Color contrast check
- [ ] Focus indicators visible
- [ ] All critical components accessible

**Dependencje:** All component tasks

---

### Task 5.4: Storybook Setup (Optional)
**Szacowany czas:** 3-4 godziny
**Priorytet:** NISKI

**Opis:**
Setup Storybook dla interactive component library documentation.

**Kryteria akceptacji:**
- [ ] Storybook configured
- [ ] Story dla każdego komponentu
- [ ] Addon: a11y, viewport, interactions
- [ ] Deploy Storybook (Vercel/Netlify)

**Dependencje:** All component tasks

---

## PODSUMOWANIE

| Faza | Komponenty | Czas | Priorytet |
|------|-----------|------|----------|
| 1 | Config, Button, Input, Card, Container, Grid | 8-9h | KRYTYCZNY |
| 2 | Navbar, Footer, Section, Hero, CTA | 8-10h | WYSOKI |
| 3 | Article, Service, Testimonial, Author, Filter | 6-7h | WYSOKI |
| 4 | Forms, Modal, Toast, TOC, Copy Button | 8-10h | NISKI |
| 5 | Tests, Documentation, Accessibility, Storybook | 11-15h | WYSOKI |

**RAZEM: 41-51 godzin**

> **MVP SCOPE (18-20 godzin):** Fazy 1-2 + testy + dokumentacja
> **EXTENDED (26-30 godzin):** Fazy 1-3 + testy + dokumentacja
> **FULL (41-51 godzin):** Wszystkie fazy

---

## NOTATKI

- Tailwind config musi być synchronizowany z SPEC-001
- Wszystkie komponenty TypeScript + type-safe
- Accessibility checks w każdym tasku
- Tests parallel z implementacją
- Dark mode do każdego komponentu
