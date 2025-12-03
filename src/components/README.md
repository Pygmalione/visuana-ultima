# Visuana Design System

Kompletny Design System dla projektów Visuana, zbudowany w oparciu o Tailwind CSS, React i TypeScript.

## Spis treści

- [Instalacja](#instalacja)
- [Kolory](#kolory)
- [Komponenty](#komponenty)
  - [UI](#ui-components)
  - [Layout](#layout-components)
  - [Sections](#section-components)
  - [Cards](#card-components)
- [Accessibility](#accessibility)
- [Testing](#testing)

---

## Instalacja

```bash
# Komponenty są dostępne przez aliasy ścieżek
import { Button, Input, Card } from '@/components/ui'
import { Container, Grid, Navbar, Footer } from '@/components/layout'
import { Hero, CTABox } from '@/components/sections'
import { ArticleCard, ServiceCard, TestimonialCard, AuthorBio } from '@/components/cards'
```

---

## Kolory

Design System bazuje na palecie kolorów SPEC-001 (Brand Identity):

| Nazwa | Hex | Tailwind Class |
|-------|-----|----------------|
| Royal Red | `#B91C1C` | `royal-red-700` |
| Deep Charcoal | `#1F2937` | `charcoal-800` |
| Steel Gray | `#6B7280` | `charcoal-500` |
| Light Silver | `#F3F4F6` | `charcoal-100` |

---

## Komponenty

### UI Components

#### Button

Przycisk z wariantami i rozmiarami.

```tsx
import { Button } from '@/components/ui'

// Warianty
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>

// Rozmiary
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Stan loading
<Button loading>Loading...</Button>
```

**Props:**
| Prop | Type | Default | Opis |
|------|------|---------|------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'outline'` | `'primary'` | Wariant wizualny |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Rozmiar przycisku |
| `loading` | `boolean` | `false` | Stan ładowania |
| `disabled` | `boolean` | `false` | Wyłączony |

---

#### Input

Pole tekstowe z obsługą błędów i stanów.

```tsx
import { Input } from '@/components/ui'

<Input
  label="Email"
  type="email"
  placeholder="jan@example.com"
/>

// Z błędem
<Input
  label="Hasło"
  type="password"
  error="Hasło jest za krótkie"
/>

// Pełna szerokość
<Input fullWidth label="Imię" />
```

**Props:**
| Prop | Type | Default | Opis |
|------|------|---------|------|
| `label` | `string` | - | Etykieta pola |
| `error` | `string` | - | Komunikat błędu |
| `success` | `boolean` | `false` | Stan sukcesu |
| `fullWidth` | `boolean` | `false` | Pełna szerokość |

---

#### Textarea

Wieloliniowe pole tekstowe.

```tsx
import { Textarea } from '@/components/ui'

<Textarea
  label="Wiadomość"
  placeholder="Napisz swoją wiadomość..."
  rows={5}
/>
```

---

#### Select

Pole wyboru z opcjami.

```tsx
import { Select } from '@/components/ui'

<Select
  label="Kategoria"
  options={[
    { value: 'marketing', label: 'Marketing' },
    { value: 'seo', label: 'SEO' },
    { value: 'content', label: 'Content' },
  ]}
  placeholder="Wybierz kategorię"
/>
```

---

#### Checkbox & Radio

Pola wyboru pojedynczego i wielokrotnego.

```tsx
import { Checkbox, Radio } from '@/components/ui'

<Checkbox label="Akceptuję regulamin" />
<Radio label="Opcja 1" name="opcje" value="1" />
```

---

#### Card

Kontener karty z subkomponentami.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui'

<Card hoverable>
  <CardHeader>
    <CardTitle>Tytuł karty</CardTitle>
    <CardDescription>Opis karty</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Treść karty...</p>
  </CardContent>
  <CardFooter>
    <Button>Akcja</Button>
  </CardFooter>
</Card>
```

---

#### Modal

Dialog modalny z focus trap i obsługą klawiatury.

```tsx
import { Modal } from '@/components/ui'
import { useState } from 'react'

function Example() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Otwórz modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Tytuł modala"
        size="md"
      >
        <p>Treść modala...</p>
      </Modal>
    </>
  )
}
```

**Props:**
| Prop | Type | Default | Opis |
|------|------|---------|------|
| `isOpen` | `boolean` | - | Czy modal jest otwarty |
| `onClose` | `() => void` | - | Callback zamknięcia |
| `title` | `string` | - | Tytuł modala |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Rozmiar |
| `closeOnOverlayClick` | `boolean` | `true` | Zamknij klikając tło |
| `closeOnEscape` | `boolean` | `true` | Zamknij klawiszem Escape |

---

#### Toast

Powiadomienia z auto-dismiss.

```tsx
import { Toast } from '@/components/ui'

<Toast
  id="1"
  title="Sukces"
  message="Operacja zakończona pomyślnie"
  variant="success"
  duration={5000}
  onClose={(id) => console.log('Zamknięto', id)}
/>
```

**Warianty:** `success`, `error`, `warning`, `info`

---

#### CategoryFilter

Filtr kategorii dla bloga.

```tsx
import { CategoryFilter } from '@/components/ui'

<CategoryFilter
  categories={['Marketing', 'SEO', 'Content', 'Social Media']}
  activeCategory="Marketing"
  onCategoryChange={(category) => console.log(category)}
  showAll={true}
  allLabel="Wszystkie"
/>
```

---

#### TableOfContents

Spis treści dla artykułów.

```tsx
import { TableOfContents } from '@/components/ui'

const headings = [
  { id: 'intro', text: 'Wprowadzenie', level: 2 },
  { id: 'features', text: 'Funkcje', level: 2 },
  { id: 'feature-1', text: 'Funkcja 1', level: 3 },
]

<TableOfContents
  headings={headings}
  activeId="intro"
  onHeadingClick={(id) => scrollTo(id)}
  sticky={true}
/>
```

---

#### CopyButton

Przycisk kopiowania do schowka.

```tsx
import { CopyButton } from '@/components/ui'

<CopyButton
  text="npm install @visuana/package"
  onCopy={() => console.log('Skopiowano!')}
/>
```

---

### Layout Components

#### Container

Kontener z max-width i centrowaniem.

```tsx
import { Container } from '@/components/layout'

<Container maxWidth="lg">
  <h1>Treść strony</h1>
</Container>
```

**maxWidth:** `'sm'` | `'md'` | `'lg'` | `'xl'` | `'full'`

---

#### Grid

Responsywny grid z dynamicznymi kolumnami.

```tsx
import { Grid } from '@/components/layout'

// Stała liczba kolumn
<Grid cols={3} gap="md">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Grid>

// Responsywne kolumny
<Grid cols={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="lg">
  {items.map(item => <Card key={item.id} />)}
</Grid>
```

---

#### Section

Wrapper sekcji z padding i tłem.

```tsx
import { Section } from '@/components/layout'

<Section bgColor="muted" padding="lg">
  <Container>
    <h2>Sekcja strony</h2>
  </Container>
</Section>
```

**bgColor:** `'white'` | `'muted'` | `'dark'` | `'royal-red'`

---

#### Navbar

Nawigacja z mobile menu i WCAG keyboard trap.

```tsx
import { Navbar } from '@/components/layout'

<Navbar
  logo={<Logo />}
  navItems={[
    { label: 'Usługi', href: '/uslugi' },
    { label: 'Blog', href: '/blog' },
    { label: 'O nas', href: '/o-nas' },
  ]}
  ctaLabel="Kontakt"
  ctaHref="/kontakt"
/>
```

---

#### Footer

Stopka z wieloma kolumnami i social links.

```tsx
import { Footer } from '@/components/layout'

<Footer
  columns={[
    {
      title: 'Usługi',
      links: [
        { label: 'SEO', href: '/uslugi/seo' },
        { label: 'Content', href: '/uslugi/content' },
      ]
    },
    // ...
  ]}
  socialLinks={[
    { platform: 'linkedin', href: 'https://linkedin.com/company/visuana' },
    { platform: 'twitter', href: 'https://twitter.com/visuana' },
  ]}
  copyright="© 2025 Visuana. Wszelkie prawa zastrzeżone."
/>
```

---

### Section Components

#### Hero

Sekcja hero z CTA.

```tsx
import { Hero } from '@/components/sections'

<Hero
  title="Rozwijaj swój biznes z Visuana"
  subtitle="Eksperci marketingu cyfrowego"
  ctaLabel="Rozpocznij"
  ctaHref="/kontakt"
  secondaryCtaLabel="Dowiedz się więcej"
  secondaryCtaHref="/uslugi"
  backgroundImage="/images/hero-bg.jpg"
  overlay={true}
/>
```

---

#### CTABox

Sekcja call-to-action.

```tsx
import { CTABox } from '@/components/sections'

<CTABox
  title="Gotowy na współpracę?"
  description="Skontaktuj się z nami już dziś"
  buttonLabel="Umów spotkanie"
  buttonHref="/kontakt"
  bgColor="royal-red"
  alignment="center"
/>
```

---

### Card Components

#### ArticleCard

Karta artykułu blogowego.

```tsx
import { ArticleCard } from '@/components/cards'

<ArticleCard
  image="/images/article.jpg"
  category="Marketing"
  title="10 strategii content marketingu"
  excerpt="Poznaj sprawdzone metody..."
  date="2025-01-15"
  author={{ name: 'Jan Kowalski', avatar: '/avatars/jan.jpg' }}
  slug="/blog/content-marketing-strategie"
  variant="featured"
/>
```

**Warianty:** `'default'` | `'compact'` | `'featured'`

---

#### ServiceCard

Karta usługi.

```tsx
import { ServiceCard } from '@/components/cards'

<ServiceCard
  icon={<SearchIcon />}
  title="SEO Optimization"
  description="Zwiększamy widoczność Twojej strony w wyszukiwarkach"
  link="/uslugi/seo"
  linkLabel="Dowiedz się więcej"
  variant="horizontal"
/>
```

---

#### TestimonialCard

Karta opinii klienta.

```tsx
import { TestimonialCard } from '@/components/cards'

<TestimonialCard
  quote="Współpraca z Visuana przyniosła świetne rezultaty"
  author="Anna Nowak"
  role="CEO"
  company="TechCorp"
  avatar="/avatars/anna.jpg"
  rating={5}
/>
```

---

#### AuthorBio

Bio autora artykułu.

```tsx
import { AuthorBio } from '@/components/cards'

<AuthorBio
  name="Jan Kowalski"
  avatar="/avatars/jan.jpg"
  bio="Ekspert content marketingu z 10-letnim doświadczeniem"
  role="Content Director"
  socialLinks={[
    { platform: 'linkedin', href: 'https://linkedin.com/in/jan' },
    { platform: 'twitter', href: 'https://twitter.com/jan' },
  ]}
/>
```

---

## Accessibility

Wszystkie komponenty spełniają standardy WCAG 2.1 AA:

- **Keyboard Navigation** - Pełna obsługa klawiatury
- **Focus Management** - Widoczne focus indicators
- **ARIA Attributes** - Prawidłowe aria-labels i role
- **Color Contrast** - Minimalne ratio 4.5:1
- **Screen Reader** - Testowane z VoiceOver/NVDA

### Focus Trap

Komponenty Modal i Navbar mobile menu implementują focus trap:
- Tab cykluje tylko w obrębie komponentu
- Escape zamyka komponent
- Focus wraca do triggera po zamknięciu

---

## Testing

```bash
# Uruchom wszystkie testy
pnpm vitest run

# Uruchom testy z watch mode
pnpm vitest

# Sprawdź TypeScript
pnpm exec tsc --noEmit

# Build produkcyjny
pnpm build
```

### Test Coverage

| Kategoria | Testy | Status |
|-----------|-------|--------|
| UI Components | 124 | ✅ |
| Layout Components | - | ✅ |
| Section Components | 16 | ✅ |
| Card Components | 65 | ✅ |
| **Razem** | **226** | ✅ |

---

## Struktura plików

```
src/components/
├── ui/
│   ├── button.tsx
│   ├── input.tsx
│   ├── textarea.tsx
│   ├── select.tsx
│   ├── checkbox.tsx
│   ├── radio.tsx
│   ├── card.tsx
│   ├── modal.tsx
│   ├── toast.tsx
│   ├── category-filter.tsx
│   ├── table-of-contents.tsx
│   ├── copy-button.tsx
│   └── index.ts
├── layout/
│   ├── container.tsx
│   ├── grid.tsx
│   ├── section.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── index.ts
├── sections/
│   ├── hero.tsx
│   ├── cta-box.tsx
│   └── index.ts
├── cards/
│   ├── article-card.tsx
│   ├── service-card.tsx
│   ├── testimonial-card.tsx
│   ├── author-bio.tsx
│   └── index.ts
└── README.md
```

---

## Wersja

**v1.0.0** - 2025-12-03

- 23 komponenty
- 226 testów
- WCAG 2.1 AA compliant
- TypeScript 100%
- Dark mode ready
