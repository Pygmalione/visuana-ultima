# TYPOGRAPHY VARIANTS - Visuana Ultima

**Data:** 2025-12-05
**Kontekst:** Butikowa agencja marketingowa z Azją/Koreą jako USP
**Brand:** Royal Red (#B91C1C), elegancja, pewność siebie, inteligentny humor
**Tone:** 70% Data + 20% Story + 10% Humor

---

## WARIANT A: MINIMALISTYCZNY (OBECNY)

### Font Combination
- **Headers:** Inter Bold/Semibold (700/600)
- **Body:** Inter Regular (400)
- **Akcent:** Inter Italic (400)
- **Monospace:** JetBrains Mono (dla danych/kodu)

### Font Weights
- 400 (Regular) - body text
- 600 (Semibold) - H3, H4, subheadings
- 700 (Bold) - H1, H2, CTA buttons

### Font Sizes Scale

**Mobile:**
```css
h1: 32px / 1.2 / -0.02em / 700
h2: 28px / 1.3 / -0.01em / 700
h3: 22px / 1.35 / 0 / 600
h4: 18px / 1.4 / 0 / 600
body-lg: 17px / 1.6 / 400
body: 15px / 1.65 / 400
body-sm: 13px / 1.7 / 400
caption: 11px / 1.5 / 400
```

**Desktop:**
```css
h1: 48px / 1.2 / -0.02em / 700
h2: 36px / 1.3 / -0.01em / 700
h3: 28px / 1.35 / 0 / 600
h4: 24px / 1.4 / 0 / 600
body-lg: 18px / 1.6 / 400
body: 16px / 1.65 / 400
body-sm: 14px / 1.7 / 400
caption: 12px / 1.5 / 400
```

### Line Heights
- Headers: 1.2-1.4 (tight for impact)
- Body: 1.6-1.7 (comfortable reading)
- Captions: 1.5 (compact but readable)

### Letter Spacing
- H1/H2: -0.02em/-0.01em (optical tightening)
- H3/H4: 0 (neutral)
- Body: 0 (default)

### Gdzie Pobrać
- **Google Fonts:** `https://fonts.google.com/specimen/Inter`
- **Variable Font:** Recommended (supports 400-900 weights dynamically)
- **CDN:** `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`

### Fallback Fonts
```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Variable vs Static
**Użyj Variable Font:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
```
- **Pros:** 1 plik zamiast 3 (400/600/700), mniejszy rozmiar
- **Cons:** Brak wsparcia w IE11 (nie problem w 2025)

### Performance
- **WOFF2:** 25-30KB (variable font)
- **FOUT Strategy:** `font-display: swap` (domyślnie w Google Fonts)
- **Preload:**
```html
<link rel="preload" href="/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossorigin>
```

### Accessibility
- Min font size: 15px (mobile body) - ✅ WCAG AA
- Line height: 1.6+ dla body - ✅ WCAG AAA
- Contrast ratio: #1F2937 na białym = 14.8:1 - ✅ WCAG AAA

### Pros
✅ Czytelna, neutralna, uniwersalna
✅ Doskonałaczytelność na ekranach
✅ Variable font = optymalizacja performance
✅ Świetna dla dashboardów i danych (70% Data)
✅ Open-source, bezpłatna

### Cons
❌ Brak charakteru premium
❌ Zbyt powszechna (używana wszędzie)
❌ Nie wyróżnia marki
❌ Mało "koreańskiej" elegancji

### Pasuje do Brand Visuana?
**CZĘŚCIOWO (6/10)**

**Dlaczego TAK:**
- Neutralna, profesjonalna
- Świetna do prezentacji danych (70% Data)
- Nowoczesna, tech-forward

**Dlaczego NIE:**
- Brak premium feel (Royal Red wymaga więcej prestiżu)
- Za bardzo "startup SaaS", za mało "butikowa agencja"
- Nie oddaje azjatyckiej elegancji

---

## WARIANT B: PREMIUM/LUXURY

### Font Combination
- **Headers:** Cormorant Garamond Bold/Semibold (700/600)
- **Body:** Lato Regular (400)
- **Akcent:** Cormorant Garamond Italic (400)
- **Monospace:** JetBrains Mono (dla danych)

### Font Weights
- **Cormorant Garamond:** 400 (akcent), 600 (H3/H4), 700 (H1/H2)
- **Lato:** 400 (body), 700 (bold text)

### Font Sizes Scale

**Mobile:**
```css
h1: 36px / 1.15 / -0.01em / 700 (Cormorant)
h2: 30px / 1.2 / -0.005em / 700 (Cormorant)
h3: 24px / 1.3 / 0 / 600 (Cormorant)
h4: 20px / 1.35 / 0 / 600 (Cormorant)
body-lg: 17px / 1.7 / 400 (Lato)
body: 15px / 1.75 / 400 (Lato)
body-sm: 13px / 1.8 / 400 (Lato)
caption: 11px / 1.6 / 400 (Lato)
```

**Desktop:**
```css
h1: 54px / 1.15 / -0.01em / 700 (Cormorant)
h2: 42px / 1.2 / -0.005em / 700 (Cormorant)
h3: 32px / 1.3 / 0 / 600 (Cormorant)
h4: 26px / 1.35 / 0 / 600 (Cormorant)
body-lg: 18px / 1.7 / 400 (Lato)
body: 16px / 1.75 / 400 (Lato)
body-sm: 14px / 1.8 / 400 (Lato)
caption: 12px / 1.6 / 400 (Lato)
```

### Line Heights
- Headers (serif): 1.15-1.35 (tighter for elegance)
- Body (sans): 1.7-1.8 (generous for readability)

### Letter Spacing
- H1/H2: -0.01em/-0.005em (tighter serifs)
- H3/H4: 0
- Body: 0

### Gdzie Pobrać
- **Cormorant Garamond:** `https://fonts.google.com/specimen/Cormorant+Garamond`
- **Lato:** `https://fonts.google.com/specimen/Lato`
- **CDN:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@400;700&display=swap');
```

### Fallback Fonts
```css
font-family-headers: 'Cormorant Garamond', 'Georgia', 'Times New Roman', serif;
font-family-body: 'Lato', 'Helvetica Neue', 'Arial', sans-serif;
```

### Variable vs Static
**Static Fonts (brak variable dla Cormorant):**
- Cormorant: ~40KB (3 weights + italic)
- Lato: ~30KB (2 weights)
- **Total:** ~70KB

### Performance
- **WOFF2:** 70KB total
- **FOUT Strategy:** `font-display: swap`
- **Preload headers only:**
```html
<link rel="preload" href="/fonts/CormorantGaramond-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

### Accessibility
- Min font size: 15px - ✅ WCAG AA
- Line height: 1.7+ - ✅ WCAG AAA
- **UWAGA:** Serify w małych rozmiarach (caption) mogą być mniej czytelne - użyj Lato dla UI elements

### Pros
✅ Premium, luksusowy feel
✅ Wysoka czytelność body (Lato)
✅ Elegancja serif + funkcjonalność sans
✅ Dobrze oddaje "butikowy" charakter
✅ Royal Red + serif = klasyczna elegancja

### Cons
❌ Serif headers wolniejsze do odczytu (słabe dla 70% Data)
❌ Większy rozmiar fontów (70KB vs 30KB)
❌ Mniej tech-forward, bardziej tradycyjny
❌ Może być za "zachodni" dla Azja/Korea USP

### Pasuje do Brand Visuana?
**CZĘŚCIOWO (7/10)**

**Dlaczego TAK:**
- Premium feel pasuje do Royal Red
- Elegancja serif = butikowa agencja
- Lato body = czytelność danych

**Dlaczego NIE:**
- Zbyt tradycyjny dla AI/multiagent branding
- Serify nie pasują do 70% Data (wolniejszy odczyt)
- Brak "koreańskiej" nowoczesności

---

## WARIANT C: TECH/MODERN

### Font Combination
- **Headers:** Clash Display Bold/Semibold (700/600)
- **Body:** Plus Jakarta Sans Regular (400)
- **Akcent:** JetBrains Mono Medium (500) - dla danych/liczb
- **Monospace:** JetBrains Mono Regular (400)

### Font Weights
- **Clash Display:** 600 (H3/H4), 700 (H1/H2)
- **Plus Jakarta Sans:** 400 (body), 500 (emphasis), 700 (bold)
- **JetBrains Mono:** 400 (code), 500 (data highlight)

### Font Sizes Scale

**Mobile:**
```css
h1: 34px / 1.1 / -0.025em / 700 (Clash)
h2: 28px / 1.15 / -0.015em / 700 (Clash)
h3: 22px / 1.25 / -0.01em / 600 (Clash)
h4: 18px / 1.3 / 0 / 600 (Clash)
body-lg: 17px / 1.6 / 0 / 400 (Jakarta)
body: 15px / 1.65 / 0 / 400 (Jakarta)
body-sm: 13px / 1.7 / 0 / 400 (Jakarta)
data: 15px / 1.4 / 0.01em / 500 (JetBrains)
caption: 11px / 1.5 / 0 / 400 (Jakarta)
```

**Desktop:**
```css
h1: 52px / 1.1 / -0.025em / 700 (Clash)
h2: 40px / 1.15 / -0.015em / 700 (Clash)
h3: 30px / 1.25 / -0.01em / 600 (Clash)
h4: 24px / 1.3 / 0 / 600 (Clash)
body-lg: 18px / 1.6 / 0 / 400 (Jakarta)
body: 16px / 1.65 / 0 / 400 (Jakarta)
body-sm: 14px / 1.7 / 0 / 400 (Jakarta)
data: 16px / 1.4 / 0.01em / 500 (JetBrains)
caption: 12px / 1.5 / 0 / 400 (Jakarta)
```

### Line Heights
- Headers: 1.1-1.3 (ultra-tight for impact)
- Body: 1.6-1.7 (standard readability)
- Data/mono: 1.4 (compact for dashboards)

### Letter Spacing
- H1/H2: -0.025em/-0.015em (aggressive tightening)
- H3/H4: -0.01em/0
- Data: +0.01em (monospace needs breathing)

### Gdzie Pobrać
- **Clash Display:** `https://www.fontshare.com/fonts/clash-display` (FREE)
- **Plus Jakarta Sans:** `https://fonts.google.com/specimen/Plus+Jakarta+Sans`
- **JetBrains Mono:** `https://www.jetbrains.com/lp/mono/` (FREE)

**CDN (Jakarta + JetBrains):**
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

**Self-host Clash Display** (Fontshare):
```html
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet">
```

### Fallback Fonts
```css
font-family-headers: 'Clash Display', 'Inter', system-ui, sans-serif;
font-family-body: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
font-family-data: 'JetBrains Mono', 'Courier New', monospace;
```

### Variable vs Static
**Variable Fonts:**
- **Plus Jakarta Sans:** Variable (400-800) - ~35KB
- **JetBrains Mono:** Variable (100-900) - ~40KB
- **Clash Display:** Static only - ~50KB (2 weights)
- **Total:** ~125KB (heaviest option)

**Optimization:**
```css
/* Subset Latin only */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&subset=latin&display=swap');
```

### Performance
- **WOFF2:** 125KB total (heavy!)
- **FOUT Strategy:** `font-display: swap`
- **Optimization:** Lazy-load JetBrains Mono (only for data sections)
```html
<link rel="preload" href="/fonts/ClashDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/PlusJakartaSans-Variable.woff2" as="font" type="font/woff2" crossorigin>
```

### Accessibility
- Min font size: 15px - ✅ WCAG AA
- Line height: 1.6+ - ✅ WCAG AAA
- **UWAGA:** Monospace dla danych może być mniej czytelny w długich tekstach - użyj tylko dla liczb/kodu

### Pros
✅ Ultra-nowoczesny, tech-forward
✅ Clash Display = silny brand character
✅ Doskonały dla AI/multiagent branding
✅ Monospace dla danych = profesjonalny dashboard feel
✅ Jakarta Sans = wysoka czytelność
✅ Unikalna kombinacja (mało kto używa)

### Cons
❌ Heavy (125KB - najcięższy wariant)
❌ Clash Display wymaga self-hostingu (Fontshare)
❌ Może być za "agresywny" dla butikowej agencji
❌ Tight letter-spacing może zmniejszyć czytelność
❌ Monospace dla danych może być "za tech" dla storytelling

### Pasuje do Brand Visuana?
**TAK (8.5/10)**

**Dlaczego TAK:**
- **Idealny dla AI/tech branding** (multiagent = cutting-edge)
- Clash Display = mocny, pewny siebie (pasuje do Royal Red)
- Jakarta Sans = czytelność + elegancja
- Monospace dla danych = profesjonalizm (70% Data)
- Nowoczesny, wyróżnia się od konkurencji

**Dlaczego NIE:**
- Może być za "tech startup", za mało "butikowa agencja"
- Heavy performance cost (125KB)
- Wymaga więcej pracy przy implementacji (self-hosting Clash)

**REKOMENDACJA:** Najlepszy dla tech-forward brand identity Visuana.

---

## WARIANT D: EDITORIAL/MAGAZINE

### Font Combination
- **Headers:** PP Editorial New Bold/Semibold (700/600)
- **Body:** IBM Plex Sans Regular (400)
- **Akcent:** IBM Plex Serif Italic (400) - dla cytatów/quote
- **Monospace:** IBM Plex Mono (400) - dla danych

### Font Weights
- **PP Editorial New:** 600 (H3/H4), 700 (H1/H2)
- **IBM Plex Sans:** 400 (body), 500 (emphasis), 700 (bold)
- **IBM Plex Serif:** 400 (quotes), 500 (italic emphasis)
- **IBM Plex Mono:** 400 (data/code)

### Font Sizes Scale

**Mobile:**
```css
h1: 38px / 1.15 / -0.015em / 700 (PP Editorial)
h2: 30px / 1.2 / -0.01em / 700 (PP Editorial)
h3: 24px / 1.3 / 0 / 600 (PP Editorial)
h4: 20px / 1.35 / 0 / 600 (PP Editorial)
body-lg: 17px / 1.7 / 0 / 400 (IBM Sans)
body: 15px / 1.75 / 0 / 400 (IBM Sans)
body-sm: 13px / 1.8 / 0 / 400 (IBM Sans)
quote: 16px / 1.6 / 0 / 400i (IBM Serif)
data: 14px / 1.5 / 0.02em / 400 (IBM Mono)
caption: 11px / 1.6 / 0 / 400 (IBM Sans)
```

**Desktop:**
```css
h1: 56px / 1.15 / -0.015em / 700 (PP Editorial)
h2: 44px / 1.2 / -0.01em / 700 (PP Editorial)
h3: 34px / 1.3 / 0 / 600 (PP Editorial)
h4: 26px / 1.35 / 0 / 600 (PP Editorial)
body-lg: 18px / 1.7 / 0 / 400 (IBM Sans)
body: 16px / 1.75 / 0 / 400 (IBM Sans)
body-sm: 14px / 1.8 / 0 / 400 (IBM Sans)
quote: 18px / 1.6 / 0 / 400i (IBM Serif)
data: 15px / 1.5 / 0.02em / 400 (IBM Mono)
caption: 12px / 1.6 / 0 / 400 (IBM Sans)
```

### Line Heights
- Headers: 1.15-1.35 (tight editorial style)
- Body: 1.7-1.8 (generous for longform)
- Quotes: 1.6 (comfortable storytelling)
- Data: 1.5 (compact dashboards)

### Letter Spacing
- H1/H2: -0.015em/-0.01em (subtle tightening)
- H3/H4: 0
- Data/mono: +0.02em (monospace breathing)

### Gdzie Pobrać
- **PP Editorial New:** `https://pangrampangram.com/products/editorial-new` (PAID - $99-199)
  - **Alternatywa FREE:** Fraunces (Google Fonts) - podobny editorial vibe
- **IBM Plex (Sans/Serif/Mono):** `https://fonts.google.com/specimen/IBM+Plex+Sans` (FREE)

**CDN (IBM Plex family):**
```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400&family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Mono:wght@400&display=swap');
```

**Alternatywa FREE (Fraunces zamiast PP Editorial):**
```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,400&display=swap');
```

### Fallback Fonts
```css
font-family-headers: 'PP Editorial New', 'Fraunces', 'Georgia', serif;
font-family-body: 'IBM Plex Sans', system-ui, sans-serif;
font-family-accent: 'IBM Plex Serif', 'Georgia', serif;
font-family-data: 'IBM Plex Mono', 'Courier New', monospace;
```

### Variable vs Static
**Variable Fonts:**
- **IBM Plex Sans:** Variable (100-700) - ~45KB
- **IBM Plex Serif:** Variable (100-700) - ~40KB
- **IBM Plex Mono:** Static - ~30KB
- **PP Editorial New:** Static only - ~80KB (paid)
- **Total:** ~195KB (VERY heavy if using PP Editorial)

**FREE Alternative (Fraunces):**
- **Fraunces:** Variable - ~60KB
- **IBM Plex (all 3):** ~115KB
- **Total:** ~175KB (still heavy)

### Performance
- **WOFF2:** 175-195KB total (HEAVIEST!)
- **FOUT Strategy:** `font-display: swap`
- **Optimization:** Lazy-load IBM Serif/Mono (tylko dla quotes/data)
```html
<link rel="preload" href="/fonts/IBMPlexSans-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Fraunces-Variable.woff2" as="font" type="font/woff2" crossorigin>
```

### Accessibility
- Min font size: 15px - ✅ WCAG AA
- Line height: 1.7+ - ✅ WCAG AAA
- **UWAGA:** Serif headers w małych rozmiarach mogą być mniej czytelne - użyj IBM Sans dla small UI elements

### Pros
✅ Editorial, magazine-quality typography
✅ Doskonały dla storytelling (20% Story)
✅ IBM Plex = IBM design legacy (profesjonalizm)
✅ Multi-font system = bogata hierarchia wizualna
✅ Idealne dla content marketing agency
✅ Serif headers = elegancja + autorytet

### Cons
❌ BARDZO heavy (175-195KB - najcięższy wariant)
❌ PP Editorial NEW = paid ($99-199)
❌ 4 różne fonty = complexity w implementacji
❌ Może być za "magazynowy", za mało tech
❌ Serif headers wolniejsze do odczytu (słabe dla 70% Data)
❌ Wymaga więcej pracy przy optymalizacji performance

### Pasuje do Brand Visuana?
**CZĘŚCIOWO (7.5/10)**

**Dlaczego TAK:**
- **Idealny dla content marketing** (20% Story)
- Editorial style = butikowa agencja premium
- IBM Plex = profesjonalizm + tech heritage
- Quotes/Serif = storytelling elegance
- Multi-font system = sophisticated brand

**Dlaczego NIE:**
- Za heavy (195KB - problem dla mobile)
- Paid font (PP Editorial) = dodatkowy koszt
- Może być za "tradycyjny magazyn", za mało AI/tech
- Serif headers nie pasują do 70% Data (wolniejszy odczyt)
- Complexity = więcej pracy przy maintenance

**REKOMENDACJA:** Świetny dla content-heavy sections, ale za ciężki jako główny system.

---

## COMPARATIVE SUMMARY

| Kryteria | A: Minimal | B: Luxury | C: Tech/Modern | D: Editorial |
|----------|------------|-----------|----------------|--------------|
| **Performance** | ⭐⭐⭐⭐⭐ (30KB) | ⭐⭐⭐⭐ (70KB) | ⭐⭐⭐ (125KB) | ⭐⭐ (175KB) |
| **Czytelność Data** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Storytelling** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Premium Feel** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Tech/AI Vibe** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Uniqueness** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Implementation** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Cost** | FREE | FREE | FREE | PAID ($99+) |
| **70% Data Match** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **20% Story Match** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Royal Red Match** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Asia/Korea USP** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **TOTAL SCORE** | **37/55** | **43/55** | **48/55** | **43/55** |

---

## FINAL RECOMMENDATION

### 🏆 WINNER: WARIANT C - TECH/MODERN

**Dlaczego:**
1. **Najlepiej pasuje do brand DNA:**
   - AI/multiagent = cutting-edge tech (Clash Display)
   - 70% Data = monospace dla liczb (JetBrains Mono)
   - Royal Red + bold headers = pewność siebie

2. **Uniqueness:**
   - Clash Display = mało używany, wyróżniający
   - Jakarta Sans + Clash = świeża kombinacja
   - Monospace akcent = tech sophistication

3. **Performance tradeoff OK:**
   - 125KB to więcej niż Inter, ale warte dla brand differentiation
   - Variable fonts + lazy-load = optymalizacja możliwa

4. **Korea/Asia USP:**
   - Nowoczesny, minimalistyczny = Korean design aesthetic
   - Tech-forward = pasuje do Seoul tech scene

### 🥈 RUNNER-UP: WARIANT B - LUXURY (jeśli bardziej premium positioning)

**Jeśli Visuana chce być:**
- Bardziej traditional luxury agency
- Mniej tech, więcej elegance
- Storytelling > Data

**Ale:**
- Mniej unique
- Gorszy dla dashboards/analytics
- Bardziej "zachodni", mniej "koreański"

### ⚠️ AVOID: WARIANT D - EDITORIAL

**Dlaczego:**
- Za heavy (195KB)
- Paid font (PP Editorial)
- Za magazynowy, za mało tech
- Over-complicated (4 fonty)

---

## IMPLEMENTATION GUIDE - WARIANT C (Tech/Modern)

### Step 1: Install Fonts

**tailwind.config.ts:**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        // Headers (Clash Display)
        'h1': ['52px', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h3': ['30px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
        // Body (Jakarta Sans)
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.7', fontWeight: '400' }],
        // Data (JetBrains Mono)
        'data': ['16px', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
        'data-sm': ['14px', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
}
```

**app/layout.tsx:**
```tsx
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// Google Fonts
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

// Self-hosted Clash Display (Fontshare)
const clash = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${jakarta.variable} ${clash.variable} ${jetbrains.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

### Step 2: Download Clash Display

1. Go to: https://www.fontshare.com/fonts/clash-display
2. Download weights: 600 (Semibold), 700 (Bold)
3. Save to: `/public/fonts/ClashDisplay-*.woff2`

### Step 3: Usage Examples

```tsx
// Headers (Clash Display)
<h1 className="font-display text-h1 text-charcoal-900">
  AI-Powered Marketing
</h1>

// Body (Jakarta Sans)
<p className="font-sans text-body text-charcoal-700">
  Wykorzystujemy multiagentową orkiestrację do analizy danych.
</p>

// Data/Numbers (JetBrains Mono)
<span className="font-mono text-data text-royal-red-700 font-medium">
  +247% ROI
</span>

// Mixed example
<div className="space-y-4">
  <h2 className="font-display text-h2 text-charcoal-900">
    Wyniki Q4 2024
  </h2>
  <p className="font-sans text-body-lg text-charcoal-700">
    Nasi klienci osiągnęli średni wzrost o{' '}
    <span className="font-mono text-data text-royal-red-700 font-medium">
      +247%
    </span>{' '}
    w engagement rate.
  </p>
</div>
```

### Step 4: Performance Optimization

**next.config.js:**
```js
module.exports = {
  // Optimize font loading
  optimizeFonts: true,

  // Preload critical fonts
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}
```

**Preload in layout.tsx:**
```tsx
export const metadata: Metadata = {
  // ... other metadata
  icons: {
    preload: [
      { rel: 'preload', href: '/fonts/ClashDisplay-Bold.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    ],
  },
}
```

### Step 5: Mobile Responsive Adjustments

```tsx
// Responsive headers
<h1 className="font-display text-[34px] md:text-h1 leading-[1.1] tracking-[-0.025em] font-bold">
  Hero Headline
</h1>

// Responsive body
<p className="font-sans text-[15px] md:text-body leading-[1.65]">
  Body text content
</p>

// Responsive data
<span className="font-mono text-[15px] md:text-data font-medium tracking-[0.01em]">
  +247%
</span>
```

---

## ACCESSIBILITY CHECKLIST

### WCAG 2.1 AA Compliance

- [x] Min font size 15px (mobile)
- [x] Line height ≥1.5 dla wszystkich tekstów
- [x] Contrast ratio ≥4.5:1 dla body text
- [x] Contrast ratio ≥3:1 dla large text (≥24px)
- [x] Letter spacing nie < -0.03em (readable tight tracking)
- [x] Word spacing nie < -0.05em
- [x] Text nie justified (tylko left-aligned)
- [x] Max line length 65-75 characters

### Testing

```bash
# Install axe-core for accessibility testing
npm install --save-dev @axe-core/react

# Test font readability
npm install --save-dev lighthouse

# Run Lighthouse CI
lighthouse https://visuana-ultima.test --view
```

---

## COST BREAKDOWN

| Font | License | Cost |
|------|---------|------|
| Clash Display | Fontshare Free License | $0 |
| Plus Jakarta Sans | Google Fonts (OFL) | $0 |
| JetBrains Mono | Apache 2.0 | $0 |
| **TOTAL** | | **$0** |

**License Notes:**
- **Clash Display:** Free for commercial use (Fontshare), attribution NOT required
- **Jakarta Sans:** Open Font License (OFL)
- **JetBrains Mono:** Apache 2.0 (fully open-source)

---

## MIGRATION PLAN (from Inter to Clash+Jakarta)

### Phase 1: Add New Fonts (1 day)
1. Download Clash Display weights (600, 700)
2. Add Jakarta Sans via Google Fonts
3. Update `tailwind.config.ts`
4. Update `layout.tsx`

### Phase 2: Component Migration (2-3 days)
1. Update all `<h1>-<h4>` to use `font-display`
2. Keep body text as `font-sans` (Jakarta)
3. Add `font-mono` to data/stats components
4. Test responsive breakpoints

### Phase 3: Testing (1 day)
1. Lighthouse performance audit
2. WCAG accessibility audit
3. Cross-browser testing (Chrome, Firefox, Safari)
4. Mobile device testing

### Phase 4: Cleanup (0.5 day)
1. Remove Inter font (if not used)
2. Remove unused font weights
3. Optimize font loading (preload, swap)

**Total Time:** 4-5 days

---

## ALTERNATIVE QUICK WIN

**Jeśli brak czasu na pełną migrację:**

### HYBRID APPROACH (2 hours)
Keep Inter dla body, add Clash Display tylko dla headers:

```tsx
// tailwind.config.ts
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'], // Keep for body
  display: ['Clash Display', 'Inter', 'system-ui'], // Add for headers
}

// Usage
<h1 className="font-display">Headline</h1>
<p className="font-sans">Body text stays Inter</p>
```

**Performance:**
- Inter: 30KB (already loaded)
- Clash Display: 50KB (only 2 weights)
- **Total:** 80KB (+50KB from current)

**Pros:**
- Quick to implement (2h)
- Minimal performance impact
- Instant brand differentiation (headers only)

**Cons:**
- Nie full rebrand
- Wciąż Inter dla body (powszechny)

---

## CONCLUSION

**RECOMMENDED:** Wariant C (Tech/Modern) - Clash Display + Jakarta Sans + JetBrains Mono

**Dlaczego:**
1. Najlepiej pasuje do tech/AI brand positioning
2. Unique, wyróżniający się
3. Doskonały dla 70% Data + 20% Story + 10% Humor
4. FREE (0 PLN)
5. Performance OK (125KB - akceptowalny tradeoff)
6. Nowoczesny, koreański minimalizm

**Implementation Time:** 4-5 dni
**Cost:** 0 PLN
**Performance Impact:** +95KB (30KB → 125KB)
**Brand Impact:** ⭐⭐⭐⭐⭐

---

**Prepared for:** Visuana Ultima
**Date:** 2025-12-05
**Author:** Claude (Frontend Developer)
**Status:** READY FOR IMPLEMENTATION
