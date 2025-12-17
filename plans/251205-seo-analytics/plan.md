# SPEC-004: SEO & Analytics

**Status:** 🟡 Planning
**Created:** 2025-12-05
**Dependencies:** SPEC-001 ✅, SPEC-002 ✅, SPEC-003 ✅

---

## Overview

Implementacja kompleksowej strategii SEO i systemu analityki dla Visuana Ultima.

---

## Objectives

1. **Technical SEO** - Optymalizacja struktury, metadane, sitemap
2. **Content SEO** - Keyword research, content optimization
3. **Analytics** - Google Analytics 4, tracking events
4. **Performance** - Core Web Vitals optimization

---

## Technical Requirements

### 4.1 Technical SEO

- [ ] Dynamic sitemap.xml (`/sitemap.xml`)
- [ ] robots.txt configuration
- [ ] Canonical URLs
- [ ] Structured data (JSON-LD)
  - [ ] Organization schema
  - [ ] Article schema (blog)
  - [ ] Service schema
  - [ ] FAQ schema
- [ ] Open Graph meta tags
- [ ] Twitter Cards
- [ ] Hreflang (PL/EN if multilingual)

### 4.2 Metadata System

```typescript
// src/lib/seo/metadata.ts
interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    type: 'website' | 'article';
  };
  twitter: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    image: string;
  };
  canonical?: string;
  noIndex?: boolean;
}
```

### 4.3 Analytics Setup

- [ ] Google Analytics 4 integration
- [ ] Google Search Console verification
- [ ] Event tracking:
  - Page views
  - CTA clicks
  - Form submissions
  - Scroll depth
  - Time on page
- [ ] Goal conversions (contact form, newsletter)
- [ ] UTM parameter tracking

### 4.4 Core Web Vitals

**Targets:**
| Metric | Target | Measurement |
|--------|--------|-------------|
| LCP | < 2.5s | Largest Contentful Paint |
| FID | < 100ms | First Input Delay |
| CLS | < 0.1 | Cumulative Layout Shift |
| TTFB | < 200ms | Time to First Byte |

**Optimization:**
- [ ] Image optimization (WebP, lazy loading)
- [ ] Font optimization (preload, display: swap)
- [ ] Critical CSS inline
- [ ] JavaScript code splitting
- [ ] ISR/SSG for static pages

---

## Deliverables

| Deliverable | Status | Location |
|-------------|--------|----------|
| Sitemap.xml | ⬜ | `app/sitemap.ts` |
| robots.txt | ⬜ | `app/robots.ts` |
| SEO metadata util | ⬜ | `src/lib/seo/metadata.ts` |
| JSON-LD schemas | ⬜ | `src/lib/seo/schemas.ts` |
| GA4 integration | ⬜ | `src/lib/analytics/` |
| Event tracking | ⬜ | `src/lib/analytics/events.ts` |

---

## Content SEO Strategy

### Primary Keywords (Polish)

| Keyword | Volume | Difficulty | Page |
|---------|--------|------------|------|
| content marketing | High | Medium | /uslugi/content-marketing |
| influencer marketing | Medium | Medium | /uslugi/influencer-marketing |
| AI w marketingu | Low | Low | /blog, /uslugi/ai-agents |
| marketing agencja | Medium | High | Homepage |
| rynek azjatycki | Low | Low | /uslugi/market-research-azja |

### Secondary Keywords

- marketing dla MSP
- automatyzacja marketingu
- Korea biznes
- analiza influencerów
- content strategy

---

## Testing & Monitoring

### Tools

- Google Search Console (ranking, clicks, impressions)
- Google Analytics 4 (traffic, conversions)
- Lighthouse CI (performance monitoring)
- Ahrefs/SEMrush (keyword tracking)

### Test Checklist

- [ ] Lighthouse score > 90 (Performance, SEO, Accessibility)
- [ ] All pages indexed in Google Search Console
- [ ] Structured data validation (Google Rich Results Test)
- [ ] Mobile-friendly test pass
- [ ] Core Web Vitals pass

---

## Timeline

| Phase | Task | Duration |
|-------|------|----------|
| 1 | Technical SEO (sitemap, robots, meta) | 1 day |
| 2 | Structured data (JSON-LD) | 0.5 day |
| 3 | GA4 + event tracking | 1 day |
| 4 | Performance optimization | 1 day |
| 5 | Testing & validation | 0.5 day |

**Total:** 4 days

---

## Revision History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-05 | Spec created | Claude Code |
