# CLAUDE.md - Visuana Ultima

## Project Overview

**Visuana Ultima** - Glowna strona butikowej agencji doradztwa Visuana specjalizujacej sie w Digital Marketing, Content Marketing, Influencer Marketing oraz AI-powered analytics z orkiestracja multiagentowa.

**Tech Stack**: Node.js / Next.js
**Database**: Supabase (PostgreSQL + realtime + auth)
**Development Environment**: Docker Compose
**Project Type**: Corporate Website / SaaS Landing

---

## Claude OS Integration

Projekt zintegrowany z Claude OS dla persistent memory i context management.

**Knowledge Bases:**
- `visuana-ultima-knowledge_docs` - dokumentacja projektu
- `visuana-ultima-project_profile` - architektura i standardy
- `visuana-ultima-project_index` - indeks kodu
- `visuana-ultima-project_memories` - decyzje i wzorce

**Komendy Claude OS:**
- `/claude-os-search [query]` - wyszukaj w pamieci projektu
- `/claude-os-save [insight]` - zapisz insight/decyzje
- `/claude-os-remember [fact]` - zapamietaj fakt
- `/claude-os-session` - zarzadzaj sesjami

---

## Agent-OS - Spec-Driven Development

Agent-OS to system agentow do rozwoju projektow opartego na specyfikacjach.
**Dokumentacja:** https://buildermethods.com/agent-os

### Komendy (7)

| Komenda | Opis |
|---------|------|
| `/plan-product` | Planowanie produktu, misja, roadmapa |
| `/shape-spec` | Ksztaltowanie wymagan przez pytania |
| `/write-spec` | Tworzenie szczegolowej specyfikacji |
| `/create-tasks` | Tworzenie listy zadan z specyfikacji |
| `/implement-tasks` | Implementacja zadan z tasks.md |
| `/orchestrate-tasks` | Orkiestracja calego workflow |
| `/improve-skills` | Ulepszanie Claude Code Skills |

### Agenci (8)

| Agent | Rola |
|-------|------|
| `spec-initializer` | Inicjalizuje folder specyfikacji |
| `spec-shaper` | Zbiera wymagania przez pytania |
| `spec-writer` | Tworzy szczegolowa specyfikacje |
| `spec-verifier` | Weryfikuje specyfikacje |
| `product-planner` | Planuje produkt i roadmape |
| `tasks-list-creator` | Tworzy liste zadan |
| `implementer` | Implementuje zgodnie z tasks.md |
| `implementation-verifier` | Weryfikuje implementacje |

### Struktura

```
agent-os/
├── product/            # Misja, roadmapa, tech-stack
├── specs/              # Specyfikacje (YYYY-MM-DD-nazwa)
└── standards/          # Standardy kodowania
    ├── backend/        # API, migrations, models, queries
    ├── frontend/       # accessibility, components, css, responsive
    ├── global/         # coding-style, conventions, error-handling
    └── testing/        # test-writing

.claude/
├── commands/agent-os/  # 7 komend slash
└── agents/agent-os/    # 8 agentow

.claude-os/
├── config.json         # Konfiguracja Claude OS
└── hooks.json          # Hooki sesji
```

---

## Workflow

1. **Product Planning** - `/plan-product` -> definiuje misje, roadmape, tech-stack
2. **Spec Shaping** - `/shape-spec` -> zbiera wymagania przez pytania
3. **Spec Writing** - `/write-spec` -> generuje szczegolowa specyfikacje
4. **Tasks Creation** - `/create-tasks` -> tworzy liste zadan
5. **Implementation** - `/implement-tasks` lub `/orchestrate-tasks`

---

## Tech Stack Details

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Components**: React Server Components + Client Components
- **State**: React hooks, Zustand (jesli potrzebne)

### Backend
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Realtime**: Supabase Realtime
- **Storage**: Supabase Storage

### Development
- **Container**: Docker Compose
- **Package Manager**: pnpm
- **Linting**: ESLint + Prettier
- **Testing**: Vitest + Playwright

---

## Polish Language (ABSOLUTE RULE)

**Wszystkie tresci w rozmowach z uzytkownikiem MUSZA byc w naturalnym, natywnym polskim.** NIE tlumacz doslownie z angielskiego - mysl jak Polak. Naturalnie brzmace anglicyzmy (np. "debugging", "deploy") sa akceptowane.

---

## Quick Start

```bash
# Rozpocznij planowanie produktu
/plan-product

# Lub bezposrednio zacznij od specyfikacji
/shape-spec

# Przeszukaj pamiec projektu
/claude-os-search "architektura"
```
