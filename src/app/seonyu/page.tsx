import { Metadata } from 'next'
import {
  SeonyuNavbar,
  SeonyuHero,
  SeonyuFeatures,
  SeonyuHowItWorks,
  SeonyuSocialProof,
  SeonyuCTA,
  SeonyuFooter,
} from './components'

// ============================================
// SEONYU LANDING PAGE - SPEC-008
// AI-Powered Influencer Marketing Platform
// ============================================

export const metadata: Metadata = {
  title: 'AI Influencer Marketing Platform',
  description: 'Znajdz idealnych influencerow, automatyzuj outreach i sledz wyniki - wszystko z AI. Seonyu to platforma do influencer marketingu nowej generacji.',
  openGraph: {
    title: 'Seonyu - AI Influencer Marketing Platform',
    description: 'Znajdz idealnych influencerow, automatyzuj outreach i sledz wyniki - wszystko z AI.',
  },
}

export default function SeonyuPage() {
  return (
    <main id="main-content">
      {/* Navigation */}
      <SeonyuNavbar />

      {/* Hero Section */}
      <SeonyuHero />

      {/* Features Section */}
      <SeonyuFeatures />

      {/* How It Works Section */}
      <SeonyuHowItWorks />

      {/* Social Proof Section */}
      <SeonyuSocialProof />

      {/* CTA Section */}
      <SeonyuCTA />

      {/* Footer */}
      <SeonyuFooter />
    </main>
  )
}
