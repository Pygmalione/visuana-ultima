# SPEC-003: Blog System (Strapi + Next.js)

**Status:** 🟡 In Progress
**Created:** 2025-12-04
**Dependencies:** SPEC-001 ✅, SPEC-002 ✅

---

## Overview

Integracja Strapi CMS (strapi.sophitech.pl) z Next.js 16 dla systemu blogowego Visuana Ultima.

---

## Objectives

1. **Strapi Integration** - Połączenie z zewnętrznym CMS
2. **Blog Pages** - Lista artykułów + strona pojedynczego artykułu
3. **Category Filtering** - Filtrowanie po kategoriach
4. **Fallback System** - Mock data gdy Strapi niedostępne
5. **ISR/Caching** - Incremental Static Regeneration

---

## Technical Stack

- **CMS:** Strapi v5 @ strapi.sophitech.pl
- **Frontend:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS (SPEC-002 Design System)
- **Testing:** Vitest

---

## API Endpoints

```
GET /api/articles         - Lista artykułów (paginacja, filtry)
GET /api/articles?filters[slug][$eq]=X - Pojedynczy artykuł
GET /api/categories       - Lista kategorii
GET /api/authors          - Lista autorów
```

---

## Deliverables

### ✅ Completed

| Deliverable | Status | Location |
|-------------|--------|----------|
| TypeScript types | ✅ | `src/types/blog.ts` |
| Strapi client | ✅ | `src/lib/blog/strapi-client.ts` |
| Mock data fallback | ✅ | `src/lib/blog/mock-data.ts` |
| Blog list page | ✅ | `src/app/blog/page.tsx` |
| Article detail page | ✅ | `src/app/blog/[slug]/page.tsx` |
| Unit tests | ✅ | `__tests__/lib/blog/strapi-client.test.ts` |

### 🟡 In Progress

| Deliverable | Status | Notes |
|-------------|--------|-------|
| Strapi content | ⚠️ | CMS pusty - potrzeba dodać artykuły |
| ISR configuration | 🟡 | 60s revalidate (do optymalizacji) |
| RSS Feed | ⬜ | Pending |
| Sitemap | ⬜ | Pending |

---

## Configuration

```env
NEXT_PUBLIC_STRAPI_URL=https://strapi.sophitech.pl
STRAPI_API_TOKEN=<token>
```

---

## Test Results (2025-12-04)

```
✓ __tests__/lib/blog/strapi-client.test.ts (15 tests) 4ms
  - Strapi Mappers (3 tests)
  - Strapi Client (12 tests)
```

---

## Dependencies

- SPEC-001 (Brand Identity) ✅ - Tone of Voice for content
- SPEC-002 (Design System) ✅ - UI components (ArticleCard, etc.)

---

## Next Steps

1. [ ] Dodać content do Strapi CMS
2. [ ] Skonfigurować STRAPI_API_TOKEN w .env.local
3. [ ] Zaimplementować RSS feed
4. [ ] Dodać dynamiczny sitemap
5. [ ] Optymalizacja ISR (headers, cache)

---

## Revision History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-04 | Spec created, code already implemented | Claude Code |
