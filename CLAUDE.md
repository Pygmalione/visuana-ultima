# CLAUDE.md - Visuana Ultima

## Project Overview

**Visuana Ultima** - Strona butikowej agencji marketingowej specjalizujacej sie w Content Marketing, Influencer Marketing, Market Research Azja oraz AI-powered solutions.

| Parametr | Wartosc |
|----------|---------|
| **Stack** | Next.js 16 (App Router) + React 19 + Tailwind CSS 4 |
| **Testing** | Vitest + Testing Library |
| **Package Manager** | pnpm |
| **Database** | Supabase (planowane) |
| **CMS** | Strapi (VPS3, planowane) |

---

## Quick Start

```bash
pnpm install          # Instalacja zaleznosci
pnpm dev              # Dev server (localhost:3000)
pnpm build            # Production build
pnpm test             # Uruchom testy
pnpm test:coverage    # Testy z coverage
```

---

## Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage (/)
│   ├── seonyu/            # Seonyu landing (/seonyu) - SPEC-008
│   ├── kontakt/           # Contact page + server actions
│   ├── uslugi/            # Service pages (content-marketing, influencer, ai-agents, market-research)
│   ├── dla/[industry]/    # Industry landing pages (8 industries)
│   ├── dla-ceo/           # Role landing pages (6 roles)
│   └── blog/              # Blog pages
├── components/
│   ├── ui/                # Base UI (Button, Card, Input, Modal, Toast)
│   ├── layout/            # Navbar, Footer, MegaMenu, Section, Grid, Container
│   ├── sections/          # Hero, HeroLight, CTABox, FAQ, ProcessTimeline
│   ├── cards/             # ArticleCard, ServiceCard, CaseStudyCard
│   ├── forms/             # ContactForm (react-hook-form + zod)
│   ├── templates/         # ServicePage, IndustryPageTemplate, RolePageTemplate
│   └── seo/               # JsonLd structured data
├── lib/
│   ├── blog/              # Strapi client + mock data
│   ├── seo/               # Metadata helpers, schemas
│   ├── analytics/         # GA4 config, events, UTM tracking
│   ├── email/             # Resend templates (contact notification/confirmation)
│   ├── validations/       # Zod schemas (contact form)
│   └── performance/       # ISR revalidation config, dynamic imports
├── data/                  # Static data (industries, roles)
├── types/                 # TypeScript types
└── hooks/                 # Custom hooks (useAnalytics)

agent-os/
├── product/               # Mission, roadmap, tech-stack, specs-plan
├── specs/                 # Feature specifications (YYYY-MM-DD-nazwa/)
└── standards/             # Coding standards (backend, frontend, global, testing)
```

---

## Design System

**Theme**: Elegant light (McKinsey-style) z cienka typografia
**Colors**: Slate palette (slate-900 primary, slate-500 secondary)
**Typography**: font-light domyslnie, font-medium dla akcentow

### Key Components

| Component | Usage |
|-----------|-------|
| `HeroLight` | Light theme hero z badge, gradient orbs |
| `CTABox` | CTA section (light/dark variants) |
| `Button` | primary/secondary/outline/ghost, sm/md/lg |
| `Card` | hoverable cards z CardHeader/Content/Footer |
| `MegaMenu` | Navigation dropdown (8 industries, 6 roles) |

---

## Completed Features (SPECs)

- [x] **SPEC-001** Brand Identity & ToV
- [x] **SPEC-002** Homepage components
- [x] **SPEC-003** Service pages (4 services)
- [x] **SPEC-004** SEO & Analytics (GA4, sitemap, JSON-LD)
- [x] **SPEC-005** Contact page + Resend email
- [x] **SPEC-006** Blog system (mock data, article pages)
- [x] **SPEC-008** Seonyu landing page (AI Influencer Platform)
- [x] **SPEC-011** Industry (8) & Role (6) landing pages + MegaMenu

---

## Agent-OS Commands

| Command | Description |
|---------|-------------|
| `/plan-product` | Product planning, mission, roadmap |
| `/shape-spec` | Gather requirements through questions |
| `/write-spec` | Create detailed specification |
| `/create-tasks` | Generate tasks.md from spec |
| `/implement-tasks` | Implement tasks from tasks.md |
| `/orchestrate-tasks` | Full workflow orchestration |

---

## Testing

```bash
pnpm test              # Watch mode
pnpm test:run          # Single run
pnpm test:coverage     # With coverage report
```

**Test files**: `__tests__/*.test.tsx` w src/components/

---

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage - services, stats, founder story, blog preview |
| `src/app/seonyu/page.tsx` | Seonyu AI platform landing |
| `src/components/layout/MegaMenu.tsx` | Navigation mega menu |
| `src/lib/performance/revalidation.ts` | ISR config (homepage: 12h) |
| `src/app/kontakt/actions.ts` | Contact form server action |

---

## Graphiti Memory

```python
# Query context
mcp__MCP_DOCKER__search_memory_facts(
    query="visuana feature",
    group_ids=["development", "visuana-ultima"]
)

# Save insights
mcp__MCP_DOCKER__add_memory(
    name="Visuana: [topic]",
    episode_body="...",
    group_id="visuana-ultima"
)
```

---

## Polish Language (ABSOLUTE RULE)

Wszystkie tresci uzytkownika w naturalnym polskim. Anglicyzmy techniczne (debugging, deploy) akceptowane. Unikaj doslownych tlumaczen.
