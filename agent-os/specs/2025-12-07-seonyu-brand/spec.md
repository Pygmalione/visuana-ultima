# SPEC-008: Seonyu Brand & Landing Page

**Status:** 🟡 W opracowaniu
**Priorytet:** Wysoki (Faza 4)
**Zależności:** SPEC-001 (ToV) ✅, SPEC-002 (Design System) ✅
**Szacowany czas:** 3-4 dni
**Data utworzenia:** 2025-12-07

---

## 1. Cel Specyfikacji

Stworzenie landing page dla submarki **Seonyu** - AI-powered influencer marketing platform. Seonyu to narzędzie/usługa Visuana specjalizująca się w automatyzacji influencer marketingu z wykorzystaniem sztucznej inteligencji.

### 1.1 Czym jest Seonyu?

- **Submarka Visuana** do influencer marketingu
- **AI-powered platform** do discovery, outreach i kampanii
- **Target:** Marki D2C, e-commerce, startupy szukające skalowalnego influencer marketingu
- **Differentiator:** Automatyzacja + AI matching + performance tracking

### 1.2 Cele biznesowe

1. Lead generation dla usługi Seonyu
2. Pozycjonowanie jako innowacyjne AI rozwiązanie
3. Reuse komponentów z Visuana (SPEC-002, SPEC-003)
4. SEO dla fraz "AI influencer marketing", "automatyzacja influencer"

---

## 2. Zakres Specyfikacji

### 2.1 W zakresie (In Scope)

- [x] Landing page seonyu.pl (subdomena lub osobna domena)
- [x] Hero section z value proposition
- [x] Features section (AI capabilities)
- [x] How it works (3-step process)
- [x] Pricing tiers (opcjonalnie)
- [x] Testimonials / Social proof
- [x] CTA: Demo request / Free trial
- [x] Integration z Visuana brand
- [x] SEO meta tags i JSON-LD

### 2.2 Poza zakresem (Out of Scope)

- Dashboard aplikacji (to osobny produkt)
- User authentication (późniejsza faza)
- Billing system
- Pełna dokumentacja API

---

## 3. Architektura Techniczna

### 3.1 Struktura routingu

```
/seonyu (lub seonyu.visuana.pl)
├── / (landing page)
├── /funkcje (features deep dive)
├── /cennik (pricing - opcjonalnie)
├── /demo (demo request form)
└── /kontakt (contact → redirect do Visuana?)
```

### 3.2 Reuse z Visuana

| Komponent | Źródło | Modyfikacja |
|-----------|--------|-------------|
| Button | SPEC-002 | Kolory Seonyu |
| Card | SPEC-002 | Bez zmian |
| Hero | SPEC-005 | Nowy content, gradient |
| Footer | SPEC-002 | Linki Seonyu |
| ContactForm | SPEC-007 | Pola demo request |
| SEO metadata | SPEC-004 | Seonyu branding |

### 3.3 Tailwind Theme Extension

```typescript
// tailwind.config.ts - Seonyu colors
colors: {
  seonyu: {
    primary: '#7C3AED',    // Purple - AI/Tech vibe
    secondary: '#A855F7',  // Lighter purple
    accent: '#F59E0B',     // Orange for CTAs
    dark: '#1E1B4B',       // Deep indigo
    light: '#EDE9FE',      // Light purple bg
  }
}
```

---

## 4. Design Seonyu

### 4.1 Brand Identity

| Element | Wartość |
|---------|---------|
| **Nazwa** | Seonyu (선유 - "flow/stream" po koreańsku) |
| **Tagline** | "AI-Powered Influencer Marketing" |
| **Tone of Voice** | Tech-forward, data-driven, friendly |
| **Primary Color** | Purple (#7C3AED) |
| **Secondary** | Orange (#F59E0B) |
| **Font** | Inter (jak Visuana) lub Clash Display |

### 4.2 Visual Direction

- **Gradients:** Purple → Blue tech gradients
- **Illustrations:** Abstract AI/network visualizations
- **Icons:** Lucide icons (consistent z Visuana)
- **Imagery:** Diverse influencers, dashboards, analytics

---

## 5. Sekcje Landing Page

### 5.1 Hero Section

```
┌─────────────────────────────────────────────────────────┐
│  SEONYU                                    [Demo] [Login]│
├─────────────────────────────────────────────────────────┤
│                                                         │
│    AI-Powered                                           │
│    Influencer Marketing                                 │
│    ────────────────────                                 │
│    Znajdź idealnych influencerów, automatyzuj          │
│    outreach i śledź wyniki - wszystko z AI.            │
│                                                         │
│    [Zamów Demo]  [Zobacz jak działa]                   │
│                                                         │
│    ✓ 10,000+ influencerów  ✓ AI matching  ✓ ROI tracking│
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 5.2 Features Section

**3 główne funkcje:**

1. **AI Discovery**
   - Inteligentne wyszukiwanie influencerów
   - Filtry: nisza, engagement, lokalizacja
   - Fake follower detection

2. **Automated Outreach**
   - Personalizowane wiadomości AI
   - Sekwencje follow-up
   - CRM dla influencerów

3. **Performance Analytics**
   - ROI tracking per influencer
   - Attribution modeling
   - Real-time dashboards

### 5.3 How It Works

```
1. Połącz markę           2. AI znajdzie match        3. Automatyzuj kampanie
   ─────────────              ─────────────              ─────────────
   Dodaj brief i budżet      AI przeszukuje bazę       Outreach, tracking,
   kampanii influencer       10k+ influencerów         raporty - automatycznie
```

### 5.4 Social Proof

- Logos klientów (placeholder → real later)
- Testimonial od marketing managera
- Stats: "250% avg ROI", "50% mniej czasu na outreach"

### 5.5 CTA Section

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│       Gotowy na AI influencer marketing?                │
│                                                         │
│       [Zamów bezpłatne demo - 15 min]                   │
│                                                         │
│       lub napisz: hello@seonyu.pl                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Wymagania Techniczne

### 6.1 Performance

- Lighthouse score: >90
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

### 6.2 SEO

- Meta title: "Seonyu - AI Influencer Marketing Platform | Visuana"
- Meta description: "Automatyzuj influencer marketing z AI. Discovery, outreach, analytics - wszystko w jednym narzędziu."
- Keywords: AI influencer marketing, automatyzacja influencer, platforma influencer

### 6.3 Analytics

- GA4 events: page_view, cta_click, demo_request
- Conversion tracking: demo form submissions
- UTM parameter handling

---

## 7. Kryteria Akceptacji

### 7.1 Must Have

- [ ] Landing page responsywny (mobile-first)
- [ ] Hero z value proposition
- [ ] Features section (3 główne)
- [ ] How it works (3 kroki)
- [ ] CTA demo request
- [ ] SEO meta tags
- [ ] Reuse Visuana components

### 7.2 Should Have

- [ ] Animations/transitions
- [ ] Social proof section
- [ ] FAQ section
- [ ] Integration z Visuana navigation

### 7.3 Could Have

- [ ] Pricing page
- [ ] Case studies
- [ ] Blog section (reuse SPEC-003)
- [ ] Chatbot/widget

---

## 8. Testowanie

### 8.1 Unit Tests

- Components rendering
- Form validation
- SEO metadata generation

### 8.2 E2E Tests

- Landing page load
- Navigation links
- Demo form submission
- Mobile responsiveness

### 8.3 Visual Regression

- Screenshot comparison
- Cross-browser testing

---

## 9. Deployment

### 9.1 Opcje Hosting

**Opcja A: Subdomena**
- seonyu.visuana.pl
- Shared Next.js app
- Easier maintenance

**Opcja B: Osobna domena**
- seonyu.pl
- Separate deployment
- Better brand separation

**Rekomendacja:** Opcja A (subdomena) dla MVP

### 9.2 Environment

- Vercel deployment
- Same repo as Visuana
- Feature flag for Seonyu routes

---

## 10. Timeline

| Faza | Czas | Deliverables |
|------|------|--------------|
| Design | 1 dzień | Wireframes, color scheme |
| Development | 2 dni | Components, pages |
| Testing | 0.5 dnia | E2E, visual |
| Polish | 0.5 dnia | Animations, copy |
| **Total** | **4 dni** | Landing page live |

---

## 11. Załączniki

### 11.1 Konkurencja

- **Grin** - Enterprise influencer platform
- **Upfluence** - AI-powered discovery
- **CreatorIQ** - End-to-end platform
- **AspireIQ** - Community-driven

### 11.2 Inspiracje Design

- Linear.app (clean, tech)
- Vercel.com (gradients, modern)
- Stripe.com (clarity, CTAs)

---

**Autor:** Claude Code
**Wersja:** 1.0
**Data:** 2025-12-07
