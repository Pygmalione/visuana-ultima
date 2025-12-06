import { z } from 'zod'
import type { CompanySize, ServiceType } from '@/types/contact'

// ============================================
// CONTACT FORM VALIDATION SCHEMA - SPEC-007
// ============================================

/**
 * Email regex pattern for validation
 */
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

/**
 * Company size enum values
 */
const companySizeValues: [CompanySize, ...CompanySize[]] = ['jdg', 'msp', 'enterprise', 'other']

/**
 * Service type enum values
 */
const serviceValues: [ServiceType, ...ServiceType[]] = ['content', 'influencer', 'asia', 'ai', 'other']

/**
 * Contact form Zod validation schema
 */
export const contactFormSchema = z.object({
  // Required fields
  name: z
    .string()
    .min(2, 'Imie i nazwisko musi miec co najmniej 2 znaki')
    .max(100, 'Imie i nazwisko moze miec maksymalnie 100 znakow'),

  email: z
    .string()
    .min(1, 'Email jest wymagany')
    .regex(emailRegex, 'Nieprawidlowy format adresu email'),

  message: z
    .string()
    .min(10, 'Wiadomosc musi miec co najmniej 10 znakow')
    .max(2000, 'Wiadomosc moze miec maksymalnie 2000 znakow'),

  companySize: z.enum(companySizeValues, {
    message: 'Wybierz wielkosc firmy',
  }),

  service: z.enum(serviceValues, {
    message: 'Wybierz usluge',
  }),

  gdprConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Zgoda na przetwarzanie danych jest wymagana',
    }),

  // Optional fields
  company: z
    .string()
    .max(100, 'Nazwa firmy moze miec maksymalnie 100 znakow')
    .optional(),

  newsletterConsent: z.boolean().optional(),

  // Honeypot field (should be empty)
  website: z.string().max(0, 'Bot detected').optional(),
})

/**
 * Type inferred from schema
 */
export type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * Validation error messages in Polish
 */
export const validationMessages = {
  name: {
    required: 'Imie i nazwisko jest wymagane',
    tooShort: 'Imie i nazwisko musi miec co najmniej 2 znaki',
    tooLong: 'Imie i nazwisko moze miec maksymalnie 100 znakow',
  },
  email: {
    required: 'Email jest wymagany',
    invalid: 'Nieprawidlowy format adresu email',
  },
  message: {
    required: 'Wiadomosc jest wymagana',
    tooShort: 'Wiadomosc musi miec co najmniej 10 znakow',
    tooLong: 'Wiadomosc moze miec maksymalnie 2000 znakow',
  },
  companySize: {
    required: 'Wybierz wielkosc firmy',
  },
  service: {
    required: 'Wybierz usluge',
  },
  gdprConsent: {
    required: 'Zgoda na przetwarzanie danych jest wymagana',
  },
}
