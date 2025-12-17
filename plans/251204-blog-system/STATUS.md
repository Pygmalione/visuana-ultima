# STATUS - SPEC-003: Blog System (Strapi + Next.js)

**Initialized:** 2025-12-04
**Current Status:** 🟡 Core Complete, Content Pending
**Build:** ✅ Passing (Next.js 16.0.7 Turbopack)
**Tests:** ✅ 15/15 passed

---

## ✅ COMPLETED

### Phase 1: Foundation
- [x] TypeScript types (`src/types/blog.ts`)
- [x] Strapi client (`src/lib/blog/strapi-client.ts`)
- [x] Mock data fallback (`src/lib/blog/mock-data.ts`)
- [x] Central export (`src/lib/blog/index.ts`)

### Phase 2: Pages
- [x] Blog list page (`/blog`)
- [x] Article detail page (`/blog/[slug]`)
- [x] Category filtering (`/blog?kategoria=X`)
- [x] Metadata generation (SEO)

### Phase 3: Testing
- [x] Strapi mapper tests (3 tests)
- [x] API client tests (12 tests)
- [x] Error handling tests

---

## 🟡 IN PROGRESS

### Phase 4: Content & Polish
- [ ] Add articles to Strapi CMS
- [ ] Configure STRAPI_API_TOKEN
- [ ] RSS feed endpoint
- [ ] Dynamic sitemap

---

## Diagnostics (2025-12-04)

| Check | Result |
|-------|--------|
| Unit tests | ✅ 15/15 passed |
| Dev server | ✅ Running on :3001 |
| Strapi API | ⚠️ Empty (0 articles) |
| Fallback | ✅ Mock data working |

---

## Files

```
src/
├── types/blog.ts           # TypeScript types
├── lib/blog/
│   ├── strapi-client.ts    # Strapi API client
│   ├── mock-data.ts        # Fallback data
│   └── index.ts            # Central export
└── app/blog/
    ├── page.tsx            # Blog list
    └── [slug]/page.tsx     # Article detail

__tests__/lib/blog/
└── strapi-client.test.ts   # Unit tests (15)
```

---

## Commands

```bash
pnpm dev                    # Dev server
pnpm vitest run             # Run tests
curl https://strapi.sophitech.pl/api/articles  # Test Strapi
```
