import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Visuana | AI-Powered Marketing Agency',
  description: 'Butikowa agencja doradztwa specjalizująca się w Digital Marketing, Content Marketing, Influencer Marketing oraz AI-powered analytics.',
  keywords: ['marketing', 'AI', 'content marketing', 'influencer marketing', 'digital marketing', 'analytics'],
  authors: [{ name: 'Karol Dębkowski', url: 'https://visuana.pl' }],
  openGraph: {
    title: 'Visuana | AI-Powered Marketing Agency',
    description: 'Butikowa agencja doradztwa specjalizująca się w Digital Marketing, Content Marketing, Influencer Marketing oraz AI-powered analytics.',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Visuana',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visuana | AI-Powered Marketing Agency',
    description: 'Butikowa agencja doradztwa specjalizująca się w AI-powered marketing.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className="min-h-screen bg-white text-charcoal-800 antialiased">
        <a href="#main-content" className="skip-link">
          Przejdź do głównej treści
        </a>
        {children}
      </body>
    </html>
  )
}
