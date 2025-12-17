# Performance Validation Guide - SPEC-004 (Task Group 11)

## Core Web Vitals Targets

| Metric | Target | Description |
|--------|--------|-------------|
| LCP | < 2.5s | Largest Contentful Paint |
| FID | < 100ms | First Input Delay |
| CLS | < 0.1 | Cumulative Layout Shift |
| TTFB | < 200ms | Time to First Byte |

## Lighthouse Audit Checklist

### Pre-Deployment Checklist

Run Lighthouse on all page types:

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audits (replace URL with your staging/production URL)
lighthouse https://visuana.pl --output html --output-path ./lighthouse-homepage.html
lighthouse https://visuana.pl/blog --output html --output-path ./lighthouse-blog.html
lighthouse https://visuana.pl/uslugi/content-marketing --output html --output-path ./lighthouse-service.html
lighthouse https://visuana.pl/kontakt --output html --output-path ./lighthouse-contact.html
```

### Target Scores

| Category | Target Score |
|----------|-------------|
| Performance | > 90 |
| Accessibility | > 90 |
| Best Practices | > 90 |
| SEO | > 90 |

## Page-Specific Validation

### Homepage
- [ ] Hero image is priority loaded (LCP element)
- [ ] Above-fold content loads within 2.5s
- [ ] No layout shifts during load
- [ ] All images use Next.js Image component

### Blog Pages
- [ ] Article images lazy load
- [ ] ISR working (check revalidate header)
- [ ] JSON-LD Article schema present
- [ ] Featured image optimized

### Service Pages
- [ ] Static generation confirmed
- [ ] JSON-LD Service schema present
- [ ] FAQ schema if FAQs exist

### Contact Page
- [ ] Form loads without JS blocking
- [ ] reCAPTCHA loads asynchronously (if used)

## Performance Monitoring Tools

### 1. Google PageSpeed Insights
URL: https://pagespeed.web.dev/

Run for:
- Homepage (mobile + desktop)
- Blog listing
- Sample blog post
- Service pages

### 2. Google Search Console
URL: https://search.google.com/search-console

Check:
- Core Web Vitals report
- Mobile Usability
- Page Experience

### 3. WebPageTest
URL: https://www.webpagetest.org/

Recommended settings:
- Test Location: Frankfurt, Germany (closest to Poland)
- Browser: Chrome
- Connection: 4G
- Runs: 3 (median)

## Optimization Checklist

### Images (Task Group 7)
- [x] Next.js Image component for all images
- [x] WebP/AVIF automatic conversion enabled
- [x] Lazy loading for below-fold images
- [x] Priority loading for LCP image
- [x] Blur placeholder configured

### Fonts (Task Group 8)
- [x] next/font for all fonts
- [x] font-display: swap enabled
- [x] Fonts subset to latin/latin-ext
- [x] Critical fonts preloaded

### JavaScript (Task Group 9)
- [x] Route-level code splitting (automatic)
- [x] Dynamic imports for heavy components
- [x] Analytics loaded asynchronously
- [x] Third-party scripts deferred

### Caching (Task Group 9)
- [x] Static assets: 1 year cache
- [x] JS/CSS bundles: immutable cache
- [x] Blog posts: ISR (1 hour)
- [x] Blog listing: ISR (30 minutes)

## Common Issues & Solutions

### LCP > 2.5s
- Check if hero image is priority loaded
- Verify image is optimized (WebP, correct size)
- Check server response time

### CLS > 0.1
- Add explicit width/height to images
- Reserve space for fonts
- Avoid inserting content above existing content

### FID > 100ms
- Reduce JavaScript bundle size
- Defer non-critical JavaScript
- Use code splitting

## Validation Commands

```bash
# Build production version
pnpm build

# Analyze bundle size
npx @next/bundle-analyzer

# Run local Lighthouse
npx lighthouse http://localhost:3000 --view
```

## Post-Deployment Verification

1. Run PageSpeed Insights on production URL
2. Check Core Web Vitals in Search Console (after 28 days of data)
3. Monitor Real User Metrics (RUM) if available
4. Set up alerts for performance regressions
