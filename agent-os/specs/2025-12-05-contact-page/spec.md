# SPEC-007: Contact Page

**Status:** 🟡 Planning
**Created:** 2025-12-05
**Dependencies:** SPEC-001 ✅, SPEC-002 ✅

---

## Overview

Strona kontaktowa Visuana Ultima z formularzem, informacjami kontaktowymi i social proof.

---

## Objectives

1. **Contact Form** - Formularz kontaktowy z segmentacją
2. **Lead Qualification** - Kwalifikacja leadów przez pytania
3. **Social Proof** - Testimoniale i credentials
4. **CTA Secondary** - Newsletter signup, social links

---

## Page Structure

### URL

```
/kontakt
```

### Page Layout

```
[Hero Section]
- H1: "Zacznijmy współpracę"
- Subheader: "Bezpłatna konsultacja 15 minut. Zero zobowiązań. Konkrety."

[Two-Column Layout]

[Left Column - Contact Form]
- Form title: "Zostaw wiadomość"
- Fields (see below)
- Submit button: "Wyślij wiadomość"
- Privacy note: "Twoje dane są bezpieczne. Nie wysyłamy spamu."

[Right Column - Contact Info]
- Email: karol@visuana.pl
- Phone: (optional)
- Social links: LinkedIn, Twitter
- Company info: Visuana Ultima, NIP, adres (optional)

[Below Fold]

[FAQ Section]
- "Jak szybko odpowiadacie?" - W ciągu 24h
- "Ile kosztuje konsultacja?" - Pierwsza konsultacja gratis
- "Z jakimi firmami pracujecie?" - JDG, MSP, startupy
- "Czy pracujecie z firmami zagranicznymi?" - Tak, Azja specjalność

[Testimonial Section]
- 2-3 krótkie testimoniale
- Nazwisko + firma + zdjęcie (jeśli możliwe)

[Map Section] (optional)
- Google Maps embed (jeśli biuro fizyczne)
```

---

## Contact Form Fields

### Required Fields

```typescript
interface ContactForm {
  // Basic info
  name: string;           // Imię i nazwisko
  email: string;          // Email (validation)
  company?: string;       // Firma (optional)

  // Lead qualification
  companySize: 'jdg' | 'msp' | 'enterprise' | 'other';
  service: 'content' | 'influencer' | 'asia' | 'ai' | 'other';

  // Message
  message: string;        // Wiadomość (textarea)

  // Consent
  gdprConsent: boolean;   // Zgoda RODO
  newsletterConsent?: boolean; // Newsletter (optional)
}
```

### Form Labels (Polish)

| Field | Label | Placeholder |
|-------|-------|-------------|
| name | Imię i nazwisko* | Jan Kowalski |
| email | Email* | jan@firma.pl |
| company | Firma | Nazwa firmy (opcjonalnie) |
| companySize | Wielkość firmy* | Wybierz... |
| service | Czym jesteś zainteresowany?* | Wybierz usługę... |
| message | Wiadomość* | Opisz krótko swoje potrzeby... |
| gdprConsent | Zgoda RODO* | Wyrażam zgodę na przetwarzanie... |
| newsletterConsent | Newsletter | Chcę otrzymywać newsletter |

### Company Size Options

- JDG / Freelancer
- MSP (2-50 pracowników)
- Enterprise (50+ pracowników)
- Inny

### Service Options

- Content Marketing
- Influencer Marketing
- Market Research Azja
- AI & Automatyzacja
- Nie wiem jeszcze / Konsultacja

---

## Technical Requirements

### Form Handling

- [ ] Server action for form submission
- [ ] Email notification (Resend/SendGrid)
- [ ] Confirmation email to user
- [ ] Webhook to CRM (optional: HubSpot, Notion)
- [ ] Rate limiting (prevent spam)
- [ ] Honeypot field (anti-bot)

### Validation

- [ ] Client-side validation (zod + react-hook-form)
- [ ] Server-side validation
- [ ] Email format validation
- [ ] Required fields validation
- [ ] GDPR consent required

### Success/Error States

```tsx
// Success
<div className="bg-green-50 border border-green-200 p-4 rounded">
  <h3>Dziękujemy za wiadomość!</h3>
  <p>Odpowiemy w ciągu 24 godzin.</p>
</div>

// Error
<div className="bg-red-50 border border-red-200 p-4 rounded">
  <h3>Coś poszło nie tak</h3>
  <p>Spróbuj ponownie lub napisz bezpośrednio: karol@visuana.pl</p>
</div>
```

### SEO

- Title: "Kontakt | Visuana Ultima - Marketing AI-Powered"
- Meta description: "Skontaktuj się z Visuana Ultima. Bezpłatna konsultacja 15 minut. Content marketing, influencer marketing, AI w marketingu."
- JSON-LD: ContactPage schema

---

## Components (from SPEC-002)

- Form components (Input, Textarea, Select, Checkbox)
- Button (primary, loading state)
- Card (testimonial)
- FAQ accordion
- Social links

---

## Deliverables

| Deliverable | Status | Location |
|-------------|--------|----------|
| Contact page | ⬜ | `app/kontakt/page.tsx` |
| Contact form component | ⬜ | `src/components/forms/ContactForm.tsx` |
| Form server action | ⬜ | `app/kontakt/actions.ts` |
| Email template | ⬜ | `src/lib/email/contact-notification.tsx` |
| Form validation schema | ⬜ | `src/lib/validations/contact.ts` |

---

## Email Notifications

### To Admin

```
Subject: Nowa wiadomość od [name] - [company]

Nowa wiadomość z formularza kontaktowego:

Imię: [name]
Email: [email]
Firma: [company]
Wielkość: [companySize]
Zainteresowanie: [service]

Wiadomość:
[message]

---
Wysłano z visuana.pl
```

### To User (Confirmation)

```
Subject: Dziękujemy za kontakt | Visuana Ultima

Cześć [name]!

Dziękuję za wiadomość. Odezwę się w ciągu 24 godzin.

Tymczasem możesz:
- Przeczytać nasz blog: visuana.pl/blog
- Zobaczyć case studies: visuana.pl/case-studies
- Połączyć się na LinkedIn: linkedin.com/in/karoldebkowski

Do usłyszenia!
Karol Dębkowski
Founder, Visuana Ultima
```

---

## Timeline

| Phase | Task | Duration |
|-------|------|----------|
| 1 | Contact form component | 0.5 day |
| 2 | Form validation & server action | 0.5 day |
| 3 | Email notifications (Resend) | 0.5 day |
| 4 | Contact page layout | 0.5 day |
| 5 | Testing & spam protection | 0.5 day |

**Total:** 2.5 days

---

## Privacy & GDPR

### Required Consent Text

```
Wyrażam zgodę na przetwarzanie moich danych osobowych przez Visuana Ultima
w celu odpowiedzi na moją wiadomość. Zapoznałem się z Polityką Prywatności.
```

### Privacy Policy Link

Link do `/polityka-prywatnosci` (wymaga osobnej strony)

---

## Revision History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-05 | Spec created | Claude Code |
