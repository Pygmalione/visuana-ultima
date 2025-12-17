# Tech Stack - Visuana Ultima

## Frontend

### Framework
- **Next.js 14+** (App Router) - React framework z SSR/SSG, optymalizacja SEO
- **React 18** - UI library

### Styling
- **Tailwind CSS** - utility-first CSS framework
- **shadcn/ui** - komponenty UI (opcjonalnie, w miare potrzeb)

### Komponenty reuzywalne
- Blog components (lista, artykul, kategorie, tagi)
- Landing page sections (hero, features, testimonials, CTA)
- Formularze kontaktowe
- Navigation & footer

---

## CMS (Content Management)

### Strapi (Headless CMS)
- **Lokalizacja:** VPS w Niemczech (juz zainstalowany)
- **Wersja:** Strapi 4.x lub 5.x
- **Uzycie:** Blog, strony uslugowe, content dynamiczny

### Integracja Strapi + Next.js
- REST API lub GraphQL
- ISR (Incremental Static Regeneration) dla SEO
- Webhook do rewalidacji po publikacji

---

## Database

### Supabase
- **Kiedy:** Dla funkcji wymagajacych bazy (CRM, dashboard klienta, leady)
- **PostgreSQL** pod spodem
- **Auth:** Supabase Auth jesli potrzebne logowanie
- **Realtime:** Dla live updates (opcjonalnie)

---

## Infrastructure

### VPS (Niemcy)
- **Lokalizacja:** Hetzner lub podobny
- **Uslug:** n8n, Dify.ai, Strapi

### n8n (Workflow Automation)
- Formularze -> powiadomienia email
- Lead management automation
- Content publication workflows
- Integracje z zewnetrznymi API

### Dify.ai
- Chatbot AI na stronie
- Custom AI agents dla klientow
- RAG (Retrieval Augmented Generation)

---

## DevOps

### Docker Compose
- Lokalne srodowisko development
- Orchestracja uslug (Strapi, n8n, bazy)

### Package Manager
- **pnpm** - szybszy, efektywniejszy niz npm/yarn

### Version Control
- **Git** + **GitHub**
- Feature branches
- PR-based workflow

### CI/CD
- **GitHub Actions** - testy, linting, deploy
- Automatyczny deploy na Vercel (frontend)

---

## Hosting & Deploy

### Frontend (Next.js)
- **Vercel** - natywne wsparcie dla Next.js, edge functions, analytics
- Alternatywa: Cloudflare Pages

### Strapi CMS
- **VPS** - Docker container na VPS w Niemczech
- Nginx reverse proxy

### Database (Supabase)
- **Supabase Cloud** - managed PostgreSQL
- Alternatywa: self-hosted na VPS

---

## SEO & Analytics

### SEO
- next-sitemap (sitemap.xml, robots.txt)
- Strukturyzowane dane (JSON-LD)
- Meta tagi, Open Graph

### Analytics
- **Google Analytics 4** - ruch, konwersje
- **Google Search Console** - indeksowanie, wydajnosc
- **Vercel Analytics** (opcjonalnie) - Web Vitals

---

## Email & Newsletter

### Transakcyjne
- **Resend** lub **SendGrid** - powiadomienia, formularze

### Newsletter
- **Buttondown** lub **Resend** - subskrypcje, kampanie
- Integracja z n8n

---

## Testing & Quality

### Testing
- **Vitest** lub **Jest** - unit tests
- **Playwright** - E2E tests (kluczowe sciezki)
- TDD dla stable features (>80% coverage)

### Linting & Formatting
- **ESLint** - linting JavaScript/TypeScript
- **Prettier** - formatowanie kodu
- **TypeScript** - statyczne typowanie (strict mode)

### Quality Gates
- Pre-commit hooks (Husky + lint-staged)
- CI checks przed merge

---

## Integracje zewnetrzne

### Marketing
- Google Tag Manager (opcjonalnie)
- Facebook Pixel (jesli reklamy)
- LinkedIn Insight Tag (jesli B2B ads)

### Komunikacja
- Slack/Discord webhooks (powiadomienia o leadach)
- Kalendarz (Cal.com lub Calendly) dla umawiania spotkan

---

## Architektura (schemat)

```
                    +------------------+
                    |    Vercel        |
                    |  (Next.js 14+)   |
                    +--------+---------+
                             |
              +--------------+--------------+
              |                             |
    +---------v---------+         +---------v---------+
    |      Strapi       |         |     Supabase      |
    |   (Headless CMS)  |         |   (PostgreSQL)    |
    |     [VPS DE]      |         |     [Cloud]       |
    +-------------------+         +-------------------+
              |
    +---------v---------+
    |       n8n         |
    |   (Automation)    |
    |     [VPS DE]      |
    +-------------------+
              |
    +---------v---------+
    |     Dify.ai       |
    |   (AI Chatbot)    |
    |     [VPS DE]      |
    +-------------------+
```

---

## Kluczowe decyzje techniczne

1. **Strapi jako CMS** - juz zainstalowany, headless, elastyczny, reuzywalne typy content
2. **Next.js App Router** - nowoczesny, SEO-friendly, server components
3. **Supabase zamiast wlasnej bazy** - managed, szybki start, auth out-of-box
4. **pnpm** - szybszy, oszczedza miejsce, lepszy dla monorepo
5. **n8n na VPS** - pelna kontrola, bez limitow, integracja z Dify.ai
6. **TDD pragmatyczne** - testy dla stable features, skip dla prototypow
