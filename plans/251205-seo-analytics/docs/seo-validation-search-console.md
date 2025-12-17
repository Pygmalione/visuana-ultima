# SEO Validation & Search Console Setup - SPEC-004 (Task Group 12)

## JSON-LD Schema Validation

### Validation Tools

1. **Google Rich Results Test**
   URL: https://search.google.com/test/rich-results

2. **Schema.org Validator**
   URL: https://validator.schema.org/

### Schemas to Validate

| Schema | Page | Status |
|--------|------|--------|
| Organization | Homepage | Validate |
| Article | Blog posts | Validate |
| Service | Service pages | Validate |
| FAQPage | Contact page | Validate |

### Validation Checklist

#### Organization Schema (Homepage)
```
URL: https://visuana.pl
```
- [ ] @type = "Organization"
- [ ] name = "Visuana"
- [ ] url = "https://visuana.pl"
- [ ] logo present and accessible
- [ ] contactPoint configured
- [ ] sameAs includes social links

#### Article Schema (Blog Posts)
```
URL: https://visuana.pl/blog/[any-post]
```
- [ ] @type = "Article"
- [ ] headline matches page title
- [ ] datePublished in ISO format
- [ ] author with @type = "Person"
- [ ] publisher with @type = "Organization"
- [ ] image URL accessible

#### Service Schema (Service Pages)
```
URL: https://visuana.pl/uslugi/content-marketing
```
- [ ] @type = "Service"
- [ ] name matches service name
- [ ] provider references Visuana
- [ ] areaServed includes Poland

## Mobile-Friendly Validation

### Google Mobile-Friendly Test
URL: https://search.google.com/test/mobile-friendly

Test all page types:
- [ ] Homepage
- [ ] Blog listing
- [ ] Blog post
- [ ] Service pages
- [ ] Contact page

### Common Issues
- Text too small to read (< 16px)
- Clickable elements too close together (< 48px)
- Viewport not configured
- Content wider than screen

## Google Search Console Setup

### Step 1: Add Property

1. Go to https://search.google.com/search-console
2. Click "Add property"
3. Choose "URL prefix"
4. Enter: `https://visuana.pl`

### Step 2: Verify Ownership

Recommended method: **HTML tag**

Add to `<head>` in layout.tsx:
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

Alternative methods:
- DNS TXT record
- Google Analytics (if already configured)
- Google Tag Manager

### Step 3: Submit Sitemap

1. Go to "Sitemaps" in left menu
2. Enter: `sitemap.xml`
3. Click "Submit"

Sitemap URL: `https://visuana.pl/sitemap.xml`

### Step 4: Request Indexing

For priority pages:
1. Go to "URL Inspection"
2. Enter URL (e.g., homepage)
3. Click "Request Indexing"

Priority pages to index:
- https://visuana.pl
- https://visuana.pl/blog
- https://visuana.pl/uslugi/content-marketing
- https://visuana.pl/uslugi/influencer-marketing
- https://visuana.pl/uslugi/ai-agents
- https://visuana.pl/uslugi/market-research-azja
- https://visuana.pl/kontakt

### Step 5: Configure Monitoring

Set up email alerts for:
- [ ] Indexing issues
- [ ] Mobile usability problems
- [ ] Security issues
- [ ] Core Web Vitals failures

## SEO Monitoring Checklist

### Weekly Tasks
- [ ] Check Search Console for new issues
- [ ] Review indexing status
- [ ] Monitor Core Web Vitals

### Monthly Tasks
- [ ] Review top performing queries
- [ ] Check for crawl errors
- [ ] Analyze page experience report
- [ ] Review backlinks

### Quarterly Tasks
- [ ] Full Lighthouse audit
- [ ] Schema validation
- [ ] Competitor analysis
- [ ] Keyword ranking review

## Baseline Metrics

Document initial metrics after setup:

| Metric | Date | Value |
|--------|------|-------|
| Pages indexed | YYYY-MM-DD | _ |
| Total impressions | YYYY-MM-DD | _ |
| Total clicks | YYYY-MM-DD | _ |
| Average position | YYYY-MM-DD | _ |
| Core Web Vitals (% passing) | YYYY-MM-DD | _ |

## Troubleshooting

### Sitemap Not Processing
1. Check sitemap is accessible at /sitemap.xml
2. Validate XML format
3. Check robots.txt allows sitemap access
4. Resubmit after 48 hours

### Pages Not Indexing
1. Check if page is blocked by robots.txt
2. Check for noindex meta tag
3. Check canonical URL is correct
4. Request manual indexing

### Schema Errors
1. Run Rich Results Test
2. Fix specific errors reported
3. Redeploy
4. Re-test validation

## Environment Variables for Production

```env
# Google Search Console
# Add verification meta tag in layout.tsx or use DNS verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code

# Google Analytics 4 (already configured in Task Group 4)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Final Checklist

- [ ] All JSON-LD schemas pass Rich Results Test
- [ ] All pages pass Mobile-Friendly Test
- [ ] Site verified in Google Search Console
- [ ] Sitemap submitted and accepted
- [ ] Priority pages requested for indexing
- [ ] Email alerts configured
- [ ] Baseline metrics documented
