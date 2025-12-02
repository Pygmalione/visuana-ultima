# CLAUDE.md - Visuana Ultima

## Project Overview

Visuana Ultima - project initialized with Agent-OS workflow.

**Development Environment**: Local
**Project Type**: TBD (run `/plan-product` to define)

---

## Agent-OS - Spec-Driven Development

Agent-OS to system agentow do rozwoju projektow opartego na specyfikacjach.
**Dokumentacja:** https://buildermethods.com/agent-os

### Komendy (6)

| Komenda | Opis |
|---------|------|
| `/plan-product` | Planowanie produktu, misja, roadmapa |
| `/shape-spec` | Ksztaltowanie wymagan przez pytania |
| `/write-spec` | Tworzenie szczegolowej specyfikacji |
| `/create-tasks` | Tworzenie listy zadan z specyfikacji |
| `/implement-tasks` | Implementacja zadan z tasks.md |
| `/orchestrate-tasks` | Orkiestracja calego workflow |

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
    ├── backend/
    ├── frontend/
    ├── global/
    └── testing/

.claude/
├── commands/agent-os/  # 6 komend slash
└── agents/agent-os/    # 8 agentow
```

---

## Workflow

1. **Product Planning** - `/plan-product` -> definiuje misje, roadmape, tech-stack
2. **Spec Shaping** - `/shape-spec` -> zbiera wymagania przez pytania
3. **Spec Writing** - `/write-spec` -> generuje szczegolowa specyfikacje
4. **Tasks Creation** - `/create-tasks` -> tworzy liste zadan
5. **Implementation** - `/implement-tasks` lub `/orchestrate-tasks`

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
```
