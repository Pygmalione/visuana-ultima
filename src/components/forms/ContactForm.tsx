'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact'
import {
  COMPANY_SIZE_OPTIONS,
  SERVICE_OPTIONS,
  type ContactFormResponse,
} from '@/types/contact'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { useReducedMotion, useInView, getStaggerDelay } from '@/lib/animations'

// ============================================
// CONTACT FORM COMPONENT - SPEC-007
// Enhanced with staggered field entrance animations
// ============================================

interface ContactFormProps {
  submitAction: (data: ContactFormData) => Promise<ContactFormResponse>
  /** Disable entrance animations */
  disableAnimations?: boolean
}

export function ContactForm({ submitAction, disableAnimations = false }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<ContactFormResponse | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const shouldAnimate = !prefersReducedMotion && !disableAnimations && isInView

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      companySize: undefined,
      service: undefined,
      message: '',
      gdprConsent: false,
      newsletterConsent: false,
      website: '', // honeypot
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (data.website && data.website.length > 0) {
      // Bot detected, silently fail
      setSubmitResult({ success: true, message: 'Dziekujemy za wiadomosc!' })
      return
    }

    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await submitAction(data)
      setSubmitResult(result)

      if (result.success) {
        reset()
      }
    } catch {
      setSubmitResult({
        success: false,
        message: 'Cos poszlo nie tak. Sprobuj ponownie lub napisz bezposrednio: karol@visuana.pl',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success state with scale-in animation
  if (submitResult?.success) {
    return (
      <div
        data-testid="success-message"
        className="bg-success-50 border border-success-200 rounded-lg p-6 text-center animate-scale-in"
        role="alert"
        aria-live="polite"
        style={{
          animationDelay: '0ms',
          animationFillMode: 'forwards',
        }}
      >
        <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <svg
            className="w-6 h-6 text-success-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-success-800 mb-2">
          Dziekujemy za wiadomosc!
        </h3>
        <p className="text-success-700">
          Odpowiemy w ciagu 24 godzin.
        </p>
      </div>
    )
  }

  return (
    <div ref={ref}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
        aria-label="Formularz kontaktowy"
      >
      {/* Error message */}
      {submitResult && !submitResult.success && (
        <div
          className="bg-red-50 border border-red-200 rounded-lg p-4 animate-scale-in"
          role="alert"
          aria-live="assertive"
        >
          <h3 className="text-sm font-semibold text-red-800 mb-1">
            Cos poszlo nie tak
          </h3>
          <p className="text-sm text-red-700">{submitResult.message}</p>
        </div>
      )}

      {/* Name - Field 1 */}
      <div
        className={shouldAnimate ? 'animate-text-reveal' : ''}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(0, 80) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <Input
          {...register('name')}
          label="Imie i nazwisko*"
          placeholder="Jan Kowalski"
          error={errors.name?.message}
          fullWidth
          autoComplete="name"
          aria-required="true"
        />
      </div>

      {/* Email - Field 2 */}
      <div
        className={shouldAnimate ? 'animate-text-reveal' : ''}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(1, 80) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <Input
          {...register('email')}
          type="email"
          label="Email*"
          placeholder="jan@firma.pl"
          error={errors.email?.message}
          fullWidth
          autoComplete="email"
          aria-required="true"
        />
      </div>

      {/* Company (optional) - Field 3 */}
      <div
        className={shouldAnimate ? 'animate-text-reveal' : ''}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(2, 80) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <Input
          {...register('company')}
          label="Firma"
          placeholder="Nazwa firmy (opcjonalnie)"
          error={errors.company?.message}
          fullWidth
          autoComplete="organization"
        />
      </div>

      {/* Company Size - Field 4 */}
      <div
        className={shouldAnimate ? 'animate-text-reveal' : ''}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(3, 80) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <Select
          {...register('companySize')}
          label="Wielkosc firmy*"
          placeholder="Wybierz..."
          options={COMPANY_SIZE_OPTIONS}
          error={errors.companySize?.message}
          fullWidth
          aria-required="true"
        />
      </div>

      {/* Service - Field 5 */}
      <div
        className={shouldAnimate ? 'animate-text-reveal' : ''}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(4, 80) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <Select
          {...register('service')}
          label="Czym jestes zainteresowany?*"
          placeholder="Wybierz usluge..."
          options={SERVICE_OPTIONS}
          error={errors.service?.message}
          fullWidth
          aria-required="true"
        />
      </div>

      {/* Message - Field 6 */}
      <div
        className={shouldAnimate ? 'animate-text-reveal' : ''}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(5, 80) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <Textarea
          {...register('message')}
          label="Wiadomosc*"
          placeholder="Opisz krotko swoje potrzeby..."
          rows={5}
          error={errors.message?.message}
          fullWidth
          aria-required="true"
        />
      </div>

      {/* Honeypot - hidden from users, visible to bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <Input
          {...register('website')}
          label="Website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* GDPR Consent - Field 7 */}
      <div
        className={shouldAnimate ? 'animate-text-reveal' : ''}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(6, 80) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <Checkbox
          {...register('gdprConsent')}
          label="Zgoda RODO* - Wyrazam zgode na przetwarzanie moich danych osobowych przez Visuana Ultima w celu odpowiedzi na moja wiadomosc."
          error={errors.gdprConsent?.message}
          aria-required="true"
        />
      </div>

      {/* Newsletter Consent - Field 8 */}
      <div
        className={shouldAnimate ? 'animate-text-reveal' : ''}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(7, 80) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <Checkbox
          {...register('newsletterConsent')}
          label="Newsletter - Chce otrzymywac newsletter z poradami marketingowymi."
        />
      </div>

      {/* Privacy note - Field 9 */}
      <p
        className={`text-sm text-charcoal-500 ${shouldAnimate ? 'animate-text-reveal' : ''}`}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(8, 80) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        Twoje dane sa bezpieczne. Nie wysylamy spamu.{' '}
        <a href="/polityka-prywatnosci" className="underline hover:text-royal-red-700 transition-colors duration-200">
          Polityka prywatnosci
        </a>
      </p>

      {/* Submit Button - Field 10 */}
      <div
        className={shouldAnimate ? 'animate-scale-in' : ''}
        style={{
          animationDelay: shouldAnimate ? getStaggerDelay(9, 80) : undefined,
          opacity: shouldAnimate ? 0 : 1,
          animationFillMode: 'forwards',
        }}
      >
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="w-full"
        >
          Wyslij wiadomosc
        </Button>
      </div>
      </form>
    </div>
  )
}

ContactForm.displayName = 'ContactForm'
