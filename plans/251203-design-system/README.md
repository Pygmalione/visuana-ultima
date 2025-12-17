# SPEC-002: Design System & UI Components

**Inicjalizacja:** 2025-12-03
**Priorytet:** KRYTYCZNY 🔴
**Szacowany czas:** 3-4 dni (24-28 godzin MVP)
**Status:** Planning Phase

---

## Szybki przegląd

SPEC-002 definiuje kompletny design system oparty na Tailwind CSS z reużywalnym zestawem UI komponentów dla:
- Homepage Visuana (główny produkt)
- Stron usługowych
- Bloga (Visuana + Seonyu)
- Dowolnych przyszłych ekspansji

---

## Zawartość spec-u

### spec.md
Pełna specyfikacja zawierająca:
- 10 sekcji (cel, wymagania, komponenty, tech stack, timeline, ryzyka)
- 25+ komponentów do zbudowania
- Detalne kryteria akceptacji
- Integracja z innymi specyfikacjami (SPEC-001, SPEC-003, itd.)

### tasks.md
Lista 30+ szczegółowych zadań pogrupowanych w 5 faz:
- **Faza 1:** Konfiguracja Tailwind + komponenty bazowe (Button, Input, Card)
- **Faza 2:** Layout (Navbar, Footer, Hero, CTA)
- **Faza 3:** Content (Article Card, Service Card, Testimonial)
- **Faza 4:** Advanced (Forms, Modal, Toast, TOC)
- **Faza 5:** Dokumentacja, testy, accessibility

### planning/visuals/
Folder na mockupy, wireframes, design referencias z SPEC-001.

### implementation/
Folder dla raportów z implementacji (będzie populowany podczas prac).

---

## Zależności

```
SPEC-001 (Brand Identity)
    ↓ (kolory, fonty, visual guidelines)
    ↓
SPEC-002 (Design System) ← TY JESTEŚ TUTAJ
    ↓ (komponenty reużywalne)
    ├─→ SPEC-003 (Blog System)
    ├─→ SPEC-005 (Homepage)
    ├─→ SPEC-006 (Strony usługowe)
    └─→ SPEC-008 (Seonyu)
```

**Zablokowana na:** SPEC-001 (Visual Identity - kolory, fonty)

---

## Scope MVP (3 dni)

```
Faza 1: Tailwind config + Button, Input, Card, Container, Grid (8-9h)
Faza 2: Navbar, Footer, Section, Hero, CTA (8-10h)
Faza 5: Unit testy, dokumentacja, accessibility (4-6h)
─────────────────────────────────────────────────
RAZEM: 20-25 godzin
```

**MVP deliverables:**
- Tailwind config (kolory, typografia, spacing)
- 10 komponentów (Button, Input, Card, Container, Grid, Navbar, Footer, Section, Hero, CTA)
- Unit testy (>80% coverage)
- Design System README z usage examples
- Dark mode support

---

## Extended Scope (4 dni)

Dodać Fazę 3:
- Article Card, Service Card, Testimonial, Author Bio, Category Filter

---

## Full Scope (5 dni+)

Wszystkie 5 faz + Storybook.

---

## Kto robi co?

| Role | Zadania |
|------|---------|
| **Implementer** | Wszystkie komponenty (Fazy 1-4) |
| **Verifier** | Testy, accessibility audit, dokumentacja |
| **Designer** | Mockupy w `planning/visuals/` |

---

## Kolejne kroki

1. **SPEC-001 finalizacja** - poczekaj na kolory + fonty
2. **Task 1.1: Tailwind Config** - start po SPEC-001
3. **Tasks 1.2-1.5** - komponenty bazowe (parallel)
4. **Faza 2-3** - layout + content components
5. **Faza 5** - dokumentacja + testy

---

## Zasoby

- **Tech Stack Doc:** `/agent-os/product/tech-stack.md`
- **Specs Plan:** `/agent-os/product/specs-plan.md`
- **Tailwind Docs:** https://tailwindcss.com/
- **shadcn/ui:** https://ui.shadcn.com/ (optional base for complex components)
- **Framer Motion:** https://www.framer.com/motion/ (optional animations)

---

## Notatki

1. **Hot-swap colors** - Jeśli SPEC-001 nie gotowa, start z placeholder colors, zmień później
2. **Component-first** - Build components, později aggregate do stron
3. **Dark mode by default** - Każdy komponent musi mieć dark: variants
4. **Accessibility** - Test każdy komponent z axe-core + keyboard navigation
5. **TypeScript** - 100% type coverage dla components
6. **Testing** - Unit testy parallel z implementacją
7. **Documentation** - README + usage examples dla każdego komponentu

---

## Status

✅ **Initialized** (2025-12-03)
🔄 **Awaiting:** SPEC-001 finalization (colors, fonts)
⏳ **Next:** Task 1.1 - Tailwind Configuration

---

## Kontakt

Pytania o spec? Przeglądaj `spec.md` dla detali, `tasks.md` dla konkretnych zadań.
