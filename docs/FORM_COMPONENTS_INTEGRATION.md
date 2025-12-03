# Form Components - Integration Examples

## React Hook Form + Zod

### Installation
```bash
pnpm add react-hook-form zod @hookform/resolvers
```

### Example: Contact Form
```tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Textarea, Select, Checkbox } from '@/components/ui'

// Schema validation
const contactSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć minimum 2 znaki'),
  email: z.string().email('Nieprawidłowy adres email'),
  message: z.string().min(10, 'Wiadomość musi mieć minimum 10 znaków'),
  language: z.string().min(1, 'Wybierz język'),
  acceptTerms: z.boolean().refine(val => val === true, 'Musisz zaakceptować regulamin'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form data:', data)
    // API call here
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Textarea
        label="Wiadomość"
        placeholder="Twoja wiadomość..."
        error={errors.message?.message}
        fullWidth
        {...register('message')}
      />

      <Select
        label="Preferowany język"
        options={[
          { value: 'pl', label: 'Polski' },
          { value: 'en', label: 'English' },
        ]}
        placeholder="Wybierz język"
        error={errors.language?.message}
        fullWidth
        {...register('language')}
      />

      <Checkbox
        label="Akceptuję regulamin"
        error={errors.acceptTerms?.message}
        {...register('acceptTerms')}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-royal-red-700 text-white rounded-md disabled:opacity-50"
      >
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
      </button>
    </form>
  )
}
```

## Formik Integration

### Installation
```bash
pnpm add formik yup
```

### Example
```tsx
'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Textarea, Select, Radio } from '@/components/ui'

const validationSchema = Yup.object({
  feedback: Yup.string().required('Pole wymagane').min(20, 'Minimum 20 znaków'),
  rating: Yup.string().required('Wybierz ocenę'),
  category: Yup.string().required('Wybierz kategorię'),
})

export default function FeedbackForm() {
  return (
    <Formik
      initialValues={{ feedback: '', rating: '', category: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(false)
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-6">
          <Field name="feedback">
            {({ field }: any) => (
              <Textarea
                label="Twoja opinia"
                placeholder="Podziel się swoją opinią..."
                error={touched.feedback && errors.feedback ? errors.feedback : undefined}
                fullWidth
                {...field}
              />
            )}
          </Field>

          <Field name="category">
            {({ field }: any) => (
              <Select
                label="Kategoria"
                options={[
                  { value: 'service', label: 'Obsługa klienta' },
                  { value: 'product', label: 'Produkt' },
                  { value: 'other', label: 'Inne' },
                ]}
                placeholder="Wybierz kategorię"
                error={touched.category && errors.category ? errors.category : undefined}
                fullWidth
                {...field}
              />
            )}
          </Field>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-charcoal-800">Ocena:</p>
            {[1, 2, 3, 4, 5].map(rating => (
              <Field key={rating} name="rating">
                {({ field }: any) => (
                  <Radio
                    label={`${rating} ${rating === 1 ? 'gwiazdka' : 'gwiazdki'}`}
                    value={String(rating)}
                    {...field}
                    checked={field.value === String(rating)}
                  />
                )}
              </Field>
            ))}
            {touched.rating && errors.rating && (
              <p className="text-sm text-red-500">{errors.rating}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-royal-red-700 text-white rounded-md"
          >
            Wyślij opinię
          </button>
        </Form>
      )}
    </Formik>
  )
}
```

## Custom Validation Hook

### Simple useFormValidation Hook
```tsx
'use client'

import { useState } from 'react'

type ValidationRules<T> = {
  [K in keyof T]?: (value: T[K]) => string | undefined
}

export function useFormValidation<T extends Record<string, any>>(
  initialValues: T,
  validationRules: ValidationRules<T>
) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})

  const validateField = (name: keyof T, value: any): string | undefined => {
    const validator = validationRules[name]
    return validator ? validator(value) : undefined
  }

  const handleChange = (name: keyof T) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : e.target.value

    setValues(prev => ({ ...prev, [name]: value }))

    // Validate on change if field was touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (name: keyof T) => () => {
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, values[name])
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const validateAll = (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {}
    let isValid = true

    Object.keys(validationRules).forEach(key => {
      const error = validateField(key as keyof T, values[key as keyof T])
      if (error) {
        newErrors[key as keyof T] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
  }
}
```

### Usage Example
```tsx
'use client'

import { Textarea, Select, Checkbox } from '@/components/ui'
import { useFormValidation } from '@/hooks/useFormValidation'

export default function NewsletterForm() {
  const { values, errors, touched, handleChange, handleBlur, validateAll } =
    useFormValidation(
      {
        email: '',
        frequency: '',
        topics: false,
      },
      {
        email: (value) => {
          if (!value) return 'Email jest wymagany'
          if (!/\S+@\S+\.\S+/.test(value)) return 'Nieprawidłowy email'
        },
        frequency: (value) => {
          if (!value) return 'Wybierz częstotliwość'
        },
        topics: (value) => {
          if (!value) return 'Musisz wybrać minimum jeden temat'
        },
      }
    )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateAll()) {
      console.log('Form valid:', values)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Select
        label="Jak często chcesz otrzymywać newsletter?"
        options={[
          { value: 'daily', label: 'Codziennie' },
          { value: 'weekly', label: 'Raz w tygodniu' },
          { value: 'monthly', label: 'Raz w miesiącu' },
        ]}
        placeholder="Wybierz częstotliwość"
        value={values.frequency}
        onChange={handleChange('frequency')}
        onBlur={handleBlur('frequency')}
        error={touched.frequency ? errors.frequency : undefined}
        fullWidth
      />

      <Checkbox
        label="Interesują mnie tematy związane z AI i marketingiem"
        checked={values.topics}
        onChange={handleChange('topics') as any}
        onBlur={handleBlur('topics')}
        error={touched.topics ? errors.topics : undefined}
      />

      <button
        type="submit"
        className="px-6 py-3 bg-royal-red-700 text-white rounded-md"
      >
        Zapisz się
      </button>
    </form>
  )
}
```

## Uncontrolled Forms (Native FormData API)

### Server Actions (Next.js 14+)
```tsx
'use server'

import { z } from 'zod'
import { Textarea, Select } from '@/components/ui'

const contactSchema = z.object({
  message: z.string().min(10),
  topic: z.string().min(1),
})

async function submitContact(formData: FormData) {
  'use server'

  const data = {
    message: formData.get('message'),
    topic: formData.get('topic'),
  }

  const result = contactSchema.safeParse(data)

  if (!result.success) {
    return { error: result.error.flatten() }
  }

  // Save to database
  console.log('Valid data:', result.data)
  return { success: true }
}

export default function ServerActionForm() {
  return (
    <form action={submitContact} className="space-y-6">
      <Textarea
        label="Wiadomość"
        name="message"
        placeholder="Twoja wiadomość..."
        required
        fullWidth
      />

      <Select
        label="Temat"
        name="topic"
        options={[
          { value: 'general', label: 'Ogólne zapytanie' },
          { value: 'support', label: 'Wsparcie techniczne' },
          { value: 'sales', label: 'Sprzedaż' },
        ]}
        placeholder="Wybierz temat"
        required
        fullWidth
      />

      <button
        type="submit"
        className="px-6 py-3 bg-royal-red-700 text-white rounded-md"
      >
        Wyślij
      </button>
    </form>
  )
}
```

## Multi-Step Form

### With State Management
```tsx
'use client'

import { useState } from 'react'
import { Textarea, Select, Radio, Checkbox } from '@/components/ui'

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    email: '',
    // Step 2
    company: '',
    role: '',
    // Step 3
    message: '',
    consent: false,
  })

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3].map(s => (
            <div
              key={s}
              className={`w-1/3 h-2 mx-1 rounded ${
                s <= step ? 'bg-royal-red-700' : 'bg-charcoal-200'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-charcoal-600 text-center">
          Krok {step} z 3
        </p>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-h3 text-charcoal-900">Dane osobowe</h2>
          {/* Input fields here */}
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-h3 text-charcoal-900">Informacje o firmie</h2>
          <Select
            label="Stanowisko"
            options={[
              { value: 'ceo', label: 'CEO/Właściciel' },
              { value: 'marketing', label: 'Marketing Manager' },
              { value: 'other', label: 'Inne' },
            ]}
            placeholder="Wybierz stanowisko"
            value={formData.role}
            onChange={e => updateField('role', e.target.value)}
            fullWidth
          />
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-h3 text-charcoal-900">Dodatkowe informacje</h2>
          <Textarea
            label="Wiadomość (opcjonalna)"
            value={formData.message}
            onChange={e => updateField('message', e.target.value)}
            fullWidth
            rows={5}
          />
          <Checkbox
            label="Wyrażam zgodę na przetwarzanie danych osobowych"
            checked={formData.consent}
            onChange={e => updateField('consent', e.target.checked)}
          />
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-3 border-2 border-charcoal-300 rounded-md"
          >
            Wstecz
          </button>
        )}
        <button
          type="button"
          onClick={step === 3 ? () => console.log('Submit:', formData) : nextStep}
          className="ml-auto px-6 py-3 bg-royal-red-700 text-white rounded-md"
        >
          {step === 3 ? 'Wyślij' : 'Dalej'}
        </button>
      </div>
    </div>
  )
}
```

## Accessibility Enhancement

### ARIA Live Regions for Errors
```tsx
'use client'

import { Textarea } from '@/components/ui'
import { useState } from 'react'

export default function AccessibleForm() {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const validate = (value: string) => {
    if (value.length < 10) {
      setError('Wiadomość musi mieć minimum 10 znaków')
    } else {
      setError('')
    }
  }

  return (
    <div>
      {/* Live region for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {error && `Błąd walidacji: ${error}`}
      </div>

      <Textarea
        label="Wiadomość"
        value={message}
        onChange={e => {
          setMessage(e.target.value)
          validate(e.target.value)
        }}
        error={error}
        fullWidth
        aria-describedby="message-hint"
      />
      <p id="message-hint" className="text-sm text-charcoal-600 mt-1">
        Wpisz minimum 10 znaków
      </p>
    </div>
  )
}
```

## Best Practices Summary

### DO ✅
- Use React Hook Form for complex forms (10+ fields)
- Validate on blur for better UX
- Show errors after user interaction (touched fields)
- Use TypeScript for type safety
- Clear error state on field change
- Provide helpful error messages in Polish

### DON'T ❌
- Validate on every keystroke (bad UX)
- Show all errors immediately on mount
- Use generic error messages ("Error", "Invalid")
- Forget to handle loading/submitting states
- Ignore accessibility (ARIA, keyboard nav)

---

**Last updated**: 2025-12-03
