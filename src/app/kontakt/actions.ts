'use server'

import { Resend } from 'resend'
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact'
import type { ContactFormResponse } from '@/types/contact'
import { ContactNotificationEmail } from '@/lib/email/contact-notification'
import { ContactConfirmationEmail } from '@/lib/email/contact-confirmation'

// ============================================
// CONTACT FORM SERVER ACTION - SPEC-007
// ============================================

// Service and company size labels for email/logging
const serviceLabels: Record<string, string> = {
  content: 'Content Marketing',
  influencer: 'Influencer Marketing',
  asia: 'Market Research Azja',
  ai: 'AI & Automatyzacja',
  other: 'Nie wiem jeszcze / Konsultacja',
}

const companySizeLabels: Record<string, string> = {
  jdg: 'JDG / Freelancer',
  msp: 'MSP (2-50 pracownikow)',
  enterprise: 'Enterprise (50+ pracownikow)',
  other: 'Inny',
}

/**
 * Send email notification to admin
 * Uses Resend API if configured, otherwise falls back to mock
 */
async function sendAdminNotification(data: ContactFormData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY
  const adminEmail = process.env.ADMIN_EMAIL || 'karol@visuana.pl'

  // If no API key, log to console (development mode)
  if (!resendApiKey) {
    console.log('=== CONTACT FORM SUBMISSION (DEV MODE) ===')
    console.log('To:', adminEmail)
    console.log('From:', data.name, `<${data.email}>`)
    console.log('Company:', data.company || 'N/A')
    console.log('Company Size:', companySizeLabels[data.companySize])
    console.log('Service:', serviceLabels[data.service])
    console.log('Message:', data.message)
    console.log('Newsletter:', data.newsletterConsent ? 'Yes' : 'No')
    console.log('==========================================')
    return true
  }

  try {
    const resend = new Resend(resendApiKey)

    const { error } = await resend.emails.send({
      from: 'Visuana Contact <kontakt@visuana.pl>',
      to: adminEmail,
      subject: `Nowa wiadomosc od ${data.name}${data.company ? ` - ${data.company}` : ''}`,
      replyTo: data.email,
      react: ContactNotificationEmail({
        name: data.name,
        email: data.email,
        company: data.company,
        companySize: data.companySize,
        service: data.service,
        message: data.message,
        newsletterConsent: data.newsletterConsent,
      }),
    })

    if (error) {
      console.error('Resend API error (admin):', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error sending admin notification:', error)
    return false
  }
}

/**
 * Send confirmation email to user
 * Uses Resend API if configured
 */
async function sendUserConfirmation(data: ContactFormData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY

  // If no API key, skip user confirmation in dev mode
  if (!resendApiKey) {
    console.log('=== USER CONFIRMATION (DEV MODE - SKIPPED) ===')
    return true
  }

  try {
    const resend = new Resend(resendApiKey)

    const { error } = await resend.emails.send({
      from: 'Karol Debkowski <karol@visuana.pl>',
      to: data.email,
      subject: 'Dziekujemy za kontakt | Visuana Ultima',
      react: ContactConfirmationEmail({
        name: data.name,
      }),
    })

    if (error) {
      console.error('Resend API error (user):', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error sending user confirmation:', error)
    return false
  }
}

/**
 * Main contact form submission handler
 * Server Action for form processing
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  // 1. Validate data server-side
  const validationResult = contactFormSchema.safeParse(data)

  if (!validationResult.success) {
    const fieldErrors: Record<string, string[]> = {}
    const zodErrors = validationResult.error.issues

    zodErrors.forEach((err) => {
      const field = err.path[0] as string
      if (!fieldErrors[field]) {
        fieldErrors[field] = []
      }
      fieldErrors[field].push(err.message)
    })

    return {
      success: false,
      message: 'Popraw bledy w formularzu',
      errors: fieldErrors,
    }
  }

  // 2. Check honeypot (bot detection)
  if (data.website && data.website.length > 0) {
    // Silently accept but don't process - appears successful to bot
    return {
      success: true,
      message: 'Dziekujemy za wiadomosc!',
    }
  }

  // 3. Rate limiting check (simple in-memory, replace with Redis in production)
  // TODO: Implement proper rate limiting with Redis/Upstash

  try {
    // 4. Send admin notification
    const adminEmailSent = await sendAdminNotification(validationResult.data)

    if (!adminEmailSent) {
      return {
        success: false,
        message: 'Nie udalo sie wyslac wiadomosci. Sprobuj ponownie lub napisz bezposrednio: karol@visuana.pl',
      }
    }

    // 5. Send user confirmation (non-blocking, don't fail if this fails)
    await sendUserConfirmation(validationResult.data)

    // 6. TODO: Webhook to CRM (HubSpot, Notion, etc.)
    // await sendToCRM(validationResult.data)

    return {
      success: true,
      message: 'Dziekujemy za wiadomosc! Odpowiemy w ciagu 24 godzin.',
    }
  } catch (error) {
    console.error('Contact form submission error:', error)

    return {
      success: false,
      message: 'Wystapil blad serwera. Sprobuj ponownie pozniej lub napisz bezposrednio: karol@visuana.pl',
    }
  }
}
