'use client'

import { useState } from 'react'
import { Textarea, Select, Checkbox, Radio } from '@/components/ui'

// ============================================
// FORM COMPONENTS EXAMPLE PAGE
// Demonstracja wszystkich nowych komponentów formularza
// ============================================

export default function FormComponentsExample() {
  const [formData, setFormData] = useState({
    message: '',
    language: '',
    acceptTerms: false,
    contactMethod: '',
  })

  const [errors, setErrors] = useState({
    message: '',
    language: '',
    acceptTerms: '',
  })

  const languageOptions = [
    { value: 'pl', label: 'Polski' },
    { value: 'en', label: 'English' },
    { value: 'de', label: 'Deutsch' },
    { value: 'fr', label: 'Français' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Walidacja przykładowa
    const newErrors = {
      message: formData.message.length < 10 ? 'Wiadomość musi mieć minimum 10 znaków' : '',
      language: !formData.language ? 'Wybierz język' : '',
      acceptTerms: !formData.acceptTerms ? 'Musisz zaakceptować regulamin' : '',
    }

    setErrors(newErrors)

    if (!newErrors.message && !newErrors.language && !newErrors.acceptTerms) {
      alert('Formularz wysłany! ' + JSON.stringify(formData, null, 2))
    }
  }

  return (
    <div className="min-h-screen bg-charcoal-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-h2 text-charcoal-900 mb-8">
          Przykłady Komponentów Formularza
        </h1>

        <div className="bg-white rounded-lg shadow-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Textarea */}
            <div>
              <h2 className="text-h4 text-charcoal-800 mb-4">Textarea</h2>
              <Textarea
                label="Twoja wiadomość"
                placeholder="Wpisz swoją wiadomość (minimum 10 znaków)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                error={errors.message}
                fullWidth
                rows={5}
              />
            </div>

            {/* Select */}
            <div>
              <h2 className="text-h4 text-charcoal-800 mb-4">Select</h2>
              <Select
                label="Preferowany język"
                options={languageOptions}
                placeholder="Wybierz język"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                error={errors.language}
                fullWidth
              />
            </div>

            {/* Checkbox */}
            <div>
              <h2 className="text-h4 text-charcoal-800 mb-4">Checkbox</h2>
              <div className="space-y-3">
                <Checkbox
                  label="Akceptuję regulamin i politykę prywatności"
                  checked={formData.acceptTerms}
                  onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                  error={errors.acceptTerms}
                />
                <Checkbox
                  label="Chcę otrzymywać newsletter (opcjonalne)"
                />
                <Checkbox
                  label="Checkbox wyłączony (disabled)"
                  disabled
                />
              </div>
            </div>

            {/* Radio */}
            <div>
              <h2 className="text-h4 text-charcoal-800 mb-4">Radio Buttons</h2>
              <p className="text-sm text-charcoal-600 mb-3">
                Preferowana forma kontaktu:
              </p>
              <div className="space-y-3">
                <Radio
                  label="Email"
                  value="email"
                  name="contactMethod"
                  checked={formData.contactMethod === 'email'}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                />
                <Radio
                  label="Telefon"
                  value="phone"
                  name="contactMethod"
                  checked={formData.contactMethod === 'phone'}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                />
                <Radio
                  label="Spotkanie osobiste"
                  value="meeting"
                  name="contactMethod"
                  checked={formData.contactMethod === 'meeting'}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                />
                <Radio
                  label="Radio wyłączony (disabled)"
                  value="disabled"
                  name="contactMethod"
                  disabled
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-charcoal-200">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-royal-red-700 text-white font-semibold rounded-md
                  hover:bg-royal-red-800 transition-colors duration-200
                  focus:outline-none focus:ring-4 focus:ring-red-700/20"
              >
                Wyślij formularz
              </button>
            </div>
          </form>
        </div>

        {/* Current Form State (Dev Debug) */}
        <div className="mt-8 bg-charcoal-900 text-white rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Stan formularza (debug):</h3>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
