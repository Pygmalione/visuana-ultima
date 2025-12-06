# Testing Configuration - Visuana Ultima

## Overview

Projekt używa **Vitest** jako test runnera dla testów jednostkowych i integracyjnych.

## Test Stats

- **Test Files**: 38 plików
- **Total Tests**: 398 testów
- **Status**: ✅ 100% passing (398/398)
- **Execution Time**: ~2.5s

## Configuration Files

### vitest.config.ts

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['__tests__/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/.next/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/**/*.spec.{ts,tsx}',
        'src/**/*.d.ts',
        'src/**/*.config.{ts,tsx}',
        'src/**/index.ts',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    testTimeout: 10000,
    retry: 1,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### vitest.setup.ts

Setup file konfiguruje mocki dla Next.js API:

```typescript
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
  useParams: () => ({}),
  notFound: vi.fn(),
  redirect: vi.fn(),
}))

// Mock next/headers
vi.mock('next/headers', () => ({
  headers: vi.fn(() => new Headers()),
  cookies: vi.fn(() => ({
    get: vi.fn(),
    set: vi.fn(),
    delete: vi.fn(),
  })),
}))
```

### tsconfig.json

Dodano types dla Vitest i Testing Library:

```json
{
  "compilerOptions": {
    "types": ["vitest/globals", "@testing-library/jest-dom"],
    // ... reszta konfiguracji
  }
}
```

## Scripts

```json
{
  "test": "vitest",              // Watch mode
  "test:ui": "vitest --ui",      // UI mode (wymaga @vitest/ui)
  "test:run": "vitest --run",    // Single run (CI)
  "test:coverage": "vitest --coverage"  // Coverage report
}
```

## Usage

```bash
# Uruchom testy w watch mode
pnpm test

# Uruchom testy raz (CI/CD)
pnpm test:run

# Generuj coverage report
pnpm test:coverage

# UI mode (wymaga instalacji @vitest/ui)
pnpm test:ui
```

## Test Structure

```
__tests__/
├── analytics/          # Testy GA4, events, UTM
├── app/               # Testy stron Next.js
│   └── kontakt/       # Testy formularza kontaktowego
├── components/        # Testy komponentów UI
│   ├── cards/         # ArticleCard, ServiceCard, TestimonialCard
│   ├── forms/         # ContactForm
│   ├── sections/      # CTABox
│   ├── service-pages/ # Strony usług
│   └── ui/            # Button, Input, Modal, Toast, etc.
├── integration/       # Testy integracyjne
├── lib/              # Testy utility functions
│   ├── blog/         # Strapi client
│   └── validations/  # Walidacje formularzy
├── optimization/     # Testy optymalizacji
└── seo/             # Testy SEO, metadata, schemas
```

## Known Issues (TypeScript)

⚠️ Obecnie występuje 20 błędów TypeScript w testach (nie blokują one działania testów):

1. **NODE_ENV assignment** (1 błąd) - naprawiony w vitest.setup.ts
2. **Type assertions** (14 błędów) - unknown types w schema validations
3. **Missing dependencies** (2 błędy) - `@react-email/render` do dodania
4. **Type errors** (3 błędy) - OpenGraph type, ZodError props

Te błędy zostaną naprawione w osobnym zadaniu.

## Coverage Thresholds

Projekt wymaga minimum **80% coverage** dla:
- Lines
- Functions
- Branches
- Statements

## Next Steps

1. Napraw błędy TypeScript w testach
2. Dodaj `@react-email/render` dependency
3. Zwiększ coverage dla komponentów <80%
4. Dodaj E2E testy (Playwright)
