# Form Components - Dokumentacja

## Przegląd

Cztery nowe komponenty formularza dla Visuana Ultima design system:
- **Textarea** - wieloliniowe pole tekstowe
- **Select** - lista rozwijana
- **Checkbox** - pole wyboru
- **Radio** - przycisk opcji

## Utworzone pliki

### Komponenty
1. `/src/components/ui/textarea.tsx` - komponent Textarea
2. `/src/components/ui/select.tsx` - komponent Select
3. `/src/components/ui/checkbox.tsx` - komponent Checkbox
4. `/src/components/ui/radio.tsx` - komponent Radio

### Typy
- `/src/types/components.ts` - rozszerzone o TextareaProps, SelectProps, CheckboxProps, RadioProps

### Testy
- `/__tests__/components/ui/form-components.test.tsx` - 12 testów (wszystkie przeszły)

### Przykład
- `/src/app/examples/form-components/page.tsx` - strona demo

### Eksporty
- `/src/components/ui/index.ts` - zaktualizowane eksporty

## Użycie

### Import
```tsx
import { Textarea, Select, Checkbox, Radio } from '@/components/ui'
```

### Textarea
```tsx
<Textarea
  label="Komentarz"
  placeholder="Wpisz komentarz..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error="To pole jest wymagane"
  fullWidth
  rows={5}
/>
```

**Props:**
- `label?: string` - etykieta pola
- `error?: string` - komunikat błędu
- `fullWidth?: boolean` - szerokość 100%
- `rows?: number` - ilość wierszy (domyślnie 4)
- wszystkie standardowe props `<textarea>`

### Select
```tsx
<Select
  label="Język"
  options={[
    { value: 'pl', label: 'Polski' },
    { value: 'en', label: 'English' }
  ]}
  placeholder="Wybierz język"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error="Wybierz opcję"
  fullWidth
/>
```

**Props:**
- `label?: string` - etykieta pola
- `options: Array<{ value: string; label: string }>` - opcje listy (wymagane)
- `placeholder?: string` - tekst placeholder
- `error?: string` - komunikat błędu
- `fullWidth?: boolean` - szerokość 100%
- wszystkie standardowe props `<select>`

### Checkbox
```tsx
<Checkbox
  label="Akceptuję regulamin"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  error="Pole wymagane"
/>
```

**Props:**
- `label: string` - etykieta (wymagana)
- `error?: string` - komunikat błędu
- wszystkie standardowe props `<input type="checkbox">`

### Radio
```tsx
<Radio
  label="Opcja A"
  value="a"
  name="choice"
  checked={value === 'a'}
  onChange={(e) => setValue(e.target.value)}
  error="Wybierz opcję"
/>
```

**Props:**
- `label: string` - etykieta (wymagana)
- `error?: string` - komunikat błędu
- wszystkie standardowe props `<input type="radio">`

## Stylowanie

### Wspólne cechy (zgodne z Input)
- Border: `border-2 border-charcoal-200`
- Focus: `focus:border-royal-red-700 focus:ring-4 focus:ring-royal-red-700/20`
- Error: `border-red-500 focus:ring-red-500/20`
- Disabled: `bg-charcoal-100 opacity-60 cursor-not-allowed`
- Label: `text-sm font-semibold text-charcoal-800 mb-1.5`

### Szczegóły specyficzne
- **Textarea**: `resize-y` (możliwość zmiany wysokości)
- **Select**: standardowy dropdown z custom styling
- **Checkbox/Radio**: `w-5 h-5` z `checked:bg-royal-red-700`
- **Radio**: dodatkowo `rounded-full`

## Dostępność (Accessibility)

Wszystkie komponenty implementują:
- `aria-invalid="true"` przy błędach
- `aria-describedby` linkujący do komunikatu błędu
- `aria-required="true"` dla pól wymaganych
- Proper label association przez `htmlFor` i `id`
- Role alerts dla komunikatów błędów (`role="alert"`)
- Keyboard navigation support
- Focus indicators

## Testy

### Pokrycie testowe
- **12 testów** w jednym pliku
- **100% pass rate**
- Każdy komponent: 3 testy minimum

### Test scenarios
1. **Renderowanie** - czy komponent renderuje się z labelką
2. **Stan błędu** - czy błędy wyświetlają się poprawnie
3. **Disabled state** - czy disabled działa

### Uruchomienie testów
```bash
pnpm exec vitest run __tests__/components/ui/form-components.test.tsx
```

## Demo Page

Obejrzyj pełny przykład użycia:
```
http://localhost:3000/examples/form-components
```

Strona zawiera:
- Wszystkie 4 komponenty w akcji
- Walidację formularza
- Stany error
- Stany disabled
- Live preview stanu formularza (debug)

## TypeScript

Wszystkie komponenty są w pełni typowane z TypeScript strict mode:
- Exportowane interfejsy: `TextareaProps`, `SelectProps`, `CheckboxProps`, `RadioProps`
- forwardRef pattern dla ref forwarding
- Proper generic typing
- Wszystkie props z autocomplete

## Zgodność z SPEC-001

Komponenty są zgodne z Visuana Brand Identity:
- Kolory: royal-red-700, charcoal (różne odcienie)
- Typography: Inter font, defined font sizes
- Spacing: 8px base system
- Shadows: subtle shadows na focus
- Transitions: 200ms ease-out

## Następne kroki

Możesz teraz:
1. Użyć komponentów w formularzach kontaktowych
2. Stworzyć formularze newsletter signup
3. Zbudować complex multi-step forms
4. Dodać walidację (np. z React Hook Form, Zod)
5. Rozszerzyć o nowe warianty (np. inline checkbox/radio groups)
