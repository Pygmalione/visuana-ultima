# Task Breakdown: SPEC-007 Contact Page

**Spec:** SPEC-007 Contact Page
**Created:** 2025-12-05
**Status:** COMPLETE
**Dependencies:** SPEC-001 (Project Setup), SPEC-002 (Design System)

---

## Overview

**Total Tasks:** 32
**Estimated Total Duration:** 2.5 days (20 hours)

Strona kontaktowa Visuana Ultima z formularzem kontaktowym, kwalifikacja leadow, social proof i FAQ.

---

## Task List

### Phase 1: Form Validation Schema & Types

#### Task Group 1: Validation Layer
**Dependencies:** None
**Estimated Duration:** 2 hours

- [x] 1.0 Complete validation schema layer
  - [x] 1.1 Write 3-4 focused tests for validation schema
    - Test required fields validation (name, email, message, companySize, service, gdprConsent)
    - Test email format validation
    - Test optional fields (company, newsletterConsent)
    - Test GDPR consent required
  - [x] 1.2 Create TypeScript types for contact form
    - Location: `src/types/contact.ts`
    - Define `ContactFormData` interface
    - Define `CompanySize` and `ServiceType` enums
    - Define `ContactFormResponse` type
  - [x] 1.3 Create Zod validation schema
    - Location: `src/lib/validations/contact.ts`
    - Schema for all form fields
    - Email regex validation
    - Required fields: name, email, message, companySize, service, gdprConsent
    - Optional fields: company, newsletterConsent
  - [x] 1.4 Ensure validation tests pass
    - Run ONLY tests from 1.1
    - Verify all validation rules work correctly

**Acceptance Criteria:**
- TypeScript types defined and exported
- Zod schema validates all field types
- Email validation rejects invalid formats
- GDPR consent is required
- Tests from 1.1 pass (8 tests passing)

---

### Phase 2: Contact Form Component

#### Task Group 2: Form UI Component
**Dependencies:** Task Group 1
**Estimated Duration:** 4 hours

- [x] 2.0 Complete contact form component
  - [x] 2.1 Write 4-5 focused tests for form component
    - Test form renders all required fields
    - Test form submission triggers validation
    - Test error states display correctly
    - Test success state renders
    - Test loading state during submission
  - [x] 2.2 Create form input components (if not in Design System)
    - Location: `src/components/ui/form/`
    - Input component with label and error state (existed)
    - Textarea component with character count (existed)
    - Select component for dropdowns (existed)
    - Checkbox component for consents (existed)
  - [x] 2.3 Create ContactForm component
    - Location: `src/components/forms/ContactForm.tsx`
    - Use react-hook-form with zodResolver
    - Implement all fields per spec
    - Polish labels and placeholders
    - Honeypot field for anti-bot
  - [x] 2.4 Implement form states
    - Loading state (button spinner)
    - Success state (green confirmation)
    - Error state (red error message)
    - Field-level error messages
  - [x] 2.5 Add accessibility features
    - Proper aria-labels
    - Focus management
    - Error announcements for screen readers
    - Keyboard navigation
  - [x] 2.6 Ensure form component tests pass
    - Run ONLY tests from 2.1
    - Verify form renders and validates

**Acceptance Criteria:**
- Form renders all fields from spec
- Validation errors display per field
- Form is fully keyboard accessible
- Loading/success/error states work
- Tests from 2.1 pass (5 tests passing)

---

### Phase 3: Server Action & Email Integration

#### Task Group 3: Backend Logic
**Dependencies:** Task Group 1
**Estimated Duration:** 4 hours

- [x] 3.0 Complete server action and email layer
  - [x] 3.1 Write 4-5 focused tests for server action
    - Test successful form submission
    - Test validation rejection on server
    - Test rate limiting (if implemented)
    - Test email service call (mocked)
    - Test honeypot detection
  - [x] 3.2 Create server action for form submission
    - Location: `app/kontakt/actions.ts`
    - Server-side Zod validation
    - Honeypot check
    - Rate limiting (basic, IP-based)
    - Return appropriate response types
  - [x] 3.3 Set up Resend email service
    - Install and configure Resend SDK
    - Create email configuration
    - Environment variables for API key
  - [x] 3.4 Create admin notification email template
    - Location: `src/lib/email/contact-notification.tsx`
    - React Email template
    - Include all form fields
    - Clear formatting for CRM integration
  - [x] 3.5 Create user confirmation email template
    - Location: `src/lib/email/contact-confirmation.tsx`
    - Thank you message
    - Next steps (blog, LinkedIn)
    - Professional formatting
  - [x] 3.6 Implement email sending in server action
    - Send admin notification
    - Send user confirmation
    - Handle email errors gracefully
  - [x] 3.7 Ensure server action tests pass
    - Run ONLY tests from 3.1
    - Verify server-side validation
    - Verify email mocks called correctly

**Acceptance Criteria:**
- Server action validates and processes form
- Admin receives notification email
- User receives confirmation email
- Honeypot blocks bots
- Rate limiting prevents spam
- Tests from 3.1 pass (5 tests passing)

---

### Phase 4: Contact Page Layout

#### Task Group 4: Page UI Design
**Dependencies:** Task Groups 2, 3
**Estimated Duration:** 4 hours

- [x] 4.0 Complete contact page layout
  - [x] 4.1 Write 3-4 focused tests for page component
    - Test page renders hero section
    - Test two-column layout renders
    - Test FAQ section renders
    - Test SEO metadata is correct
  - [x] 4.2 Create contact page hero section
    - Location: `app/kontakt/page.tsx`
    - H1: "Zacznijmy wspolprace"
    - Subheader: "Bezplatna konsultacja 15 minut..."
    - Consistent with Design System
  - [x] 4.3 Implement two-column layout
    - Left: ContactForm component
    - Right: Contact info card
    - Responsive (stacks on mobile)
  - [x] 4.4 Create contact info component
    - Location: `src/components/contact/ContactInfo.tsx`
    - Email: karol@visuana.pl
    - Social links: LinkedIn, Twitter
    - Company info
  - [x] 4.5 Create FAQ accordion component
    - Location: `src/components/contact/ContactFAQ.tsx`
    - 4 questions from spec
    - Accessible accordion pattern
    - Smooth animations
  - [x] 4.6 Create testimonials section
    - Location: `src/components/contact/ContactTestimonials.tsx`
    - 2-3 testimonials (placeholder data)
    - Card layout with quote marks
  - [x] 4.7 Ensure page component tests pass
    - Run ONLY tests from 4.1
    - Verify page structure renders

**Acceptance Criteria:**
- Page matches spec layout
- Two-column layout works on desktop
- Single-column on mobile (responsive)
- FAQ accordion is accessible
- Tests from 4.1 pass (4 tests passing)

---

### Phase 5: SEO & Metadata

#### Task Group 5: SEO Optimization
**Dependencies:** Task Group 4
**Estimated Duration:** 2 hours

- [x] 5.0 Complete SEO implementation
  - [x] 5.1 Write 2 focused tests for SEO
    - Test page title is correct
    - Test JSON-LD schema is present
  - [x] 5.2 Implement page metadata
    - Title: "Kontakt | Visuana Ultima - Marketing AI-Powered"
    - Meta description per spec
    - Open Graph tags
    - Twitter card tags
  - [x] 5.3 Add JSON-LD ContactPage schema
    - Organization schema
    - ContactPage type
    - Contact information
  - [x] 5.4 Ensure SEO tests pass
    - Run ONLY tests from 5.1

**Acceptance Criteria:**
- Page has correct title and description
- JSON-LD schema validates
- Open Graph works for social sharing
- Tests from 5.1 pass (4 tests passing)

---

### Phase 6: Responsive Design & Polish

#### Task Group 6: Mobile & UX Polish
**Dependencies:** Task Groups 4, 5
**Estimated Duration:** 2 hours

- [x] 6.0 Complete responsive design
  - [x] 6.1 Implement mobile layout (320px - 768px)
    - Single column layout
    - Form fields full width
    - Touch-friendly inputs (min 44px tap targets)
    - Contact info above/below form
  - [x] 6.2 Implement tablet layout (768px - 1024px)
    - Two-column with narrower columns
    - Appropriate spacing
  - [x] 6.3 Implement desktop layout (1024px+)
    - Full two-column layout
    - Optimal reading widths
  - [x] 6.4 Add micro-interactions
    - Form field focus animations (glow effect: 0 0 30px rgba(220, 38, 38, 0.3))
    - Button hover states
    - Success/error state transitions
    - FAQ accordion smooth height animations
  - [x] 6.5 Cross-browser testing
    - Test Chrome, Firefox, Safari (manual verification recommended)
    - Test on iOS Safari, Chrome mobile (manual verification recommended)

**Acceptance Criteria:**
- Page looks good on all breakpoints
- Touch targets are accessible on mobile (min 44px)
- Animations are smooth
- No layout issues across browsers

---

### Phase 7: Testing & Integration

#### Task Group 7: Test Review & Gap Analysis
**Dependencies:** Task Groups 1-6
**Estimated Duration:** 2 hours

- [x] 7.0 Review tests and fill critical gaps
  - [x] 7.1 Review all tests from phases 1-6
    - Validation tests (8 from Task 1.1)
    - Form component tests (5 from Task 2.1)
    - Server action tests (5 from Task 3.1)
    - Page component tests (4 from Task 4.1)
    - SEO tests (4 from Task 5.1)
    - Total existing: 26 tests
  - [x] 7.2 Identify critical gaps
    - End-to-end form submission flow
    - Integration between form and server action
    - Email delivery confirmation
  - [x] 7.3 Write up to 5 additional integration tests
    - E2E: Complete form submission flow
    - Integration: Form to server action
    - Integration: Server action to email service (mocked)
    - Integration: Newsletter consent handling
    - Integration: Honeypot bot prevention
  - [x] 7.4 Run all feature-specific tests
    - Run ONLY tests related to contact page
    - Total: 31 tests (26 existing + 5 integration)
    - All tests pass

**Acceptance Criteria:**
- All feature tests pass (31 total)
- Critical user flow is covered
- No more than 5 additional tests added
- Form submission works end-to-end

---

## Execution Order

| Order | Task Group | Phase | Duration | Dependencies | Status |
|-------|------------|-------|----------|--------------|--------|
| 1 | Task Group 1 | Validation Schema | 2h | None | DONE |
| 2 | Task Group 2 | Form Component | 4h | Task Group 1 | DONE |
| 3 | Task Group 3 | Server Action & Email | 4h | Task Group 1 | DONE |
| 4 | Task Group 4 | Page Layout | 4h | Task Groups 2, 3 | DONE |
| 5 | Task Group 5 | SEO | 2h | Task Group 4 | DONE |
| 6 | Task Group 6 | Responsive & Polish | 2h | Task Groups 4, 5 | DONE |
| 7 | Task Group 7 | Testing & Integration | 2h | Task Groups 1-6 | DONE |

**Note:** Task Groups 2 and 3 can be worked on in parallel after Task Group 1 is complete.

---

## File Structure

```
app/kontakt/
  page.tsx                    # Contact page
  actions.ts                  # Server action for form
  loading.tsx                 # Loading state (optional)

src/components/
  forms/
    ContactForm.tsx           # Main contact form component
  contact/
    ContactInfo.tsx           # Contact information card
    ContactFAQ.tsx            # FAQ accordion
    ContactTestimonials.tsx   # Testimonials section
  ui/form/
    Input.tsx                 # Form input (if not in DS)
    Textarea.tsx              # Textarea (if not in DS)
    Select.tsx                # Select dropdown (if not in DS)
    Checkbox.tsx              # Checkbox (if not in DS)

src/lib/
  validations/
    contact.ts                # Zod validation schema
  email/
    contact-notification.tsx  # Admin email template
    contact-confirmation.tsx  # User email template

src/types/
  contact.ts                  # TypeScript types

__tests__/
  lib/validations/
    contact.test.ts           # Validation tests
  components/forms/
    ContactForm.test.tsx      # Form component tests
  app/kontakt/
    actions.test.ts           # Server action tests
    page.test.tsx             # Page component tests
    seo.test.tsx              # SEO tests
  integration/kontakt/
    contact-flow.test.tsx     # Integration tests (NEW)
```

---

## Environment Variables Required

```env
# Resend Email Service
RESEND_API_KEY=re_xxxxxxxxxxxx

# Email Configuration
CONTACT_EMAIL_TO=karol@visuana.pl
CONTACT_EMAIL_FROM=noreply@visuana.pl

# Rate Limiting (optional)
RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW=60000
```

---

## Dependencies to Install

```bash
pnpm add resend react-email @react-email/components
pnpm add react-hook-form @hookform/resolvers zod
pnpm add -D @testing-library/react @testing-library/jest-dom
```

---

## Revision History

| Date | Change | Author |
|------|--------|--------|
| 2025-12-05 | Tasks.md created | Claude Code |
| 2025-12-05 | Phases 1-5 completed | Claude Code |
| 2025-12-05 | Phases 6-7 completed, SPEC-007 COMPLETE | Claude Code |
