import * as React from 'react'
import type { CompanySize, ServiceType } from '@/types/contact'

// ============================================
// ADMIN NOTIFICATION EMAIL TEMPLATE - SPEC-007
// ============================================

interface ContactNotificationEmailProps {
  name: string
  email: string
  company?: string
  companySize: CompanySize
  service: ServiceType
  message: string
  newsletterConsent?: boolean
}

const companySizeLabels: Record<CompanySize, string> = {
  jdg: 'JDG / Freelancer',
  msp: 'MSP (2-50 pracownikow)',
  enterprise: 'Enterprise (50+ pracownikow)',
  other: 'Inny',
}

const serviceLabels: Record<ServiceType, string> = {
  content: 'Content Marketing',
  influencer: 'Influencer Marketing',
  asia: 'Market Research Azja',
  ai: 'AI & Automatyzacja',
  other: 'Nie wiem jeszcze / Konsultacja',
}

export function ContactNotificationEmail({
  name,
  email,
  company,
  companySize,
  service,
  message,
  newsletterConsent,
}: ContactNotificationEmailProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nowa wiadomosc od {name}</title>
      </head>
      <body style={{
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        backgroundColor: '#F3F4F6',
        margin: 0,
        padding: '20px',
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          padding: '32px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        }}>
          {/* Header */}
          <div style={{
            borderBottom: '2px solid #B91C1C',
            paddingBottom: '16px',
            marginBottom: '24px',
          }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#1F2937',
              margin: 0,
            }}>
              Nowa wiadomosc z formularza kontaktowego
            </h1>
          </div>

          {/* Contact Details */}
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '24px',
          }}>
            <tbody>
              <tr>
                <td style={{
                  padding: '8px 0',
                  color: '#6B7280',
                  fontWeight: 600,
                  width: '140px',
                  verticalAlign: 'top',
                }}>
                  Imie i nazwisko:
                </td>
                <td style={{
                  padding: '8px 0',
                  color: '#1F2937',
                }}>
                  {name}
                </td>
              </tr>
              <tr>
                <td style={{
                  padding: '8px 0',
                  color: '#6B7280',
                  fontWeight: 600,
                  verticalAlign: 'top',
                }}>
                  Email:
                </td>
                <td style={{
                  padding: '8px 0',
                  color: '#1F2937',
                }}>
                  <a href={`mailto:${email}`} style={{ color: '#3B82F6' }}>
                    {email}
                  </a>
                </td>
              </tr>
              {company && (
                <tr>
                  <td style={{
                    padding: '8px 0',
                    color: '#6B7280',
                    fontWeight: 600,
                    verticalAlign: 'top',
                  }}>
                    Firma:
                  </td>
                  <td style={{
                    padding: '8px 0',
                    color: '#1F2937',
                  }}>
                    {company}
                  </td>
                </tr>
              )}
              <tr>
                <td style={{
                  padding: '8px 0',
                  color: '#6B7280',
                  fontWeight: 600,
                  verticalAlign: 'top',
                }}>
                  Wielkosc firmy:
                </td>
                <td style={{
                  padding: '8px 0',
                  color: '#1F2937',
                }}>
                  {companySizeLabels[companySize]}
                </td>
              </tr>
              <tr>
                <td style={{
                  padding: '8px 0',
                  color: '#6B7280',
                  fontWeight: 600,
                  verticalAlign: 'top',
                }}>
                  Zainteresowanie:
                </td>
                <td style={{
                  padding: '8px 0',
                  color: '#1F2937',
                }}>
                  {serviceLabels[service]}
                </td>
              </tr>
              <tr>
                <td style={{
                  padding: '8px 0',
                  color: '#6B7280',
                  fontWeight: 600,
                  verticalAlign: 'top',
                }}>
                  Newsletter:
                </td>
                <td style={{
                  padding: '8px 0',
                  color: '#1F2937',
                }}>
                  {newsletterConsent ? 'Tak' : 'Nie'}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Message */}
          <div style={{
            backgroundColor: '#F3F4F6',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '24px',
          }}>
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#6B7280',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Wiadomosc
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#1F2937',
              margin: 0,
              whiteSpace: 'pre-wrap',
              lineHeight: 1.6,
            }}>
              {message}
            </p>
          </div>

          {/* Footer */}
          <div style={{
            borderTop: '1px solid #E5E7EB',
            paddingTop: '16px',
            fontSize: '12px',
            color: '#9CA3AF',
          }}>
            <p style={{ margin: 0 }}>
              Wyslano z visuana.pl • {new Date().toLocaleDateString('pl-PL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
