import * as React from 'react'

// ============================================
// USER CONFIRMATION EMAIL TEMPLATE - SPEC-007
// ============================================

interface ContactConfirmationEmailProps {
  name: string
}

export function ContactConfirmationEmail({
  name,
}: ContactConfirmationEmailProps) {
  const firstName = name.split(' ')[0]

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dziekujemy za kontakt | Visuana Ultima</title>
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
          {/* Logo / Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '32px',
          }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#B91C1C',
              margin: 0,
            }}>
              Visuana Ultima
            </h1>
          </div>

          {/* Main Content */}
          <div style={{
            marginBottom: '32px',
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#1F2937',
              margin: '0 0 16px 0',
            }}>
              Czesc {firstName}!
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#4B5563',
              lineHeight: 1.6,
              margin: '0 0 16px 0',
            }}>
              Dziekuje za wiadomosc. Odezwe sie w ciagu <strong>24 godzin</strong>.
            </p>

            <p style={{
              fontSize: '16px',
              color: '#4B5563',
              lineHeight: 1.6,
              margin: '0 0 24px 0',
            }}>
              Tymczasem mozesz:
            </p>

            {/* Action Links */}
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}>
              <tbody>
                <tr>
                  <td style={{ padding: '8px 0' }}>
                    <a
                      href="https://visuana.pl/blog"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: '#3B82F6',
                        textDecoration: 'none',
                        fontSize: '16px',
                      }}
                    >
                      <span style={{
                        display: 'inline-block',
                        width: '24px',
                        height: '24px',
                        marginRight: '12px',
                        backgroundColor: '#EFF6FF',
                        borderRadius: '4px',
                        textAlign: 'center',
                        lineHeight: '24px',
                      }}>
                        📚
                      </span>
                      Przeczytac nasz blog z poradami marketingowymi
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0' }}>
                    <a
                      href="https://visuana.pl/case-studies"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: '#3B82F6',
                        textDecoration: 'none',
                        fontSize: '16px',
                      }}
                    >
                      <span style={{
                        display: 'inline-block',
                        width: '24px',
                        height: '24px',
                        marginRight: '12px',
                        backgroundColor: '#EFF6FF',
                        borderRadius: '4px',
                        textAlign: 'center',
                        lineHeight: '24px',
                      }}>
                        📊
                      </span>
                      Zobaczyc nasze case studies
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0' }}>
                    <a
                      href="https://linkedin.com/in/karoldebkowski"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: '#3B82F6',
                        textDecoration: 'none',
                        fontSize: '16px',
                      }}
                    >
                      <span style={{
                        display: 'inline-block',
                        width: '24px',
                        height: '24px',
                        marginRight: '12px',
                        backgroundColor: '#EFF6FF',
                        borderRadius: '4px',
                        textAlign: 'center',
                        lineHeight: '24px',
                      }}>
                        💼
                      </span>
                      Polaczyc sie na LinkedIn
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Signature */}
          <div style={{
            borderTop: '1px solid #E5E7EB',
            paddingTop: '24px',
          }}>
            <p style={{
              fontSize: '16px',
              color: '#4B5563',
              lineHeight: 1.6,
              margin: '0 0 16px 0',
            }}>
              Do uslyszenia!
            </p>
            <p style={{
              fontSize: '16px',
              color: '#1F2937',
              fontWeight: 600,
              margin: '0 0 4px 0',
            }}>
              Karol Debkowski
            </p>
            <p style={{
              fontSize: '14px',
              color: '#6B7280',
              margin: 0,
            }}>
              Founder, Visuana Ultima
            </p>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: '32px',
            paddingTop: '16px',
            borderTop: '1px solid #E5E7EB',
            textAlign: 'center',
            fontSize: '12px',
            color: '#9CA3AF',
          }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <a href="https://visuana.pl" style={{ color: '#6B7280' }}>visuana.pl</a>
              {' • '}
              <a href="mailto:karol@visuana.pl" style={{ color: '#6B7280' }}>karol@visuana.pl</a>
            </p>
            <p style={{ margin: 0 }}>
              Otrzymujesz ten email, poniewaz skontaktowales sie z nami przez formularz na stronie.
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
