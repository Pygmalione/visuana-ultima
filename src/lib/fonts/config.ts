/**
 * Font Configuration - SPEC-004 SEO & Analytics (Task Group 8)
 *
 * Uses next/font for optimized font loading:
 * - Automatic font-display: swap
 * - Self-hosted fonts (no external requests)
 * - CSS variable injection
 * - Subset optimization
 */

import { Syne, Outfit, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// ============================================
// GOOGLE FONTS (with next/font optimization)
// ============================================

/**
 * Syne - Display font for headings
 * Bold, geometric, distinctive - perfect for tech/AI branding
 */
export const syne = Syne({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-syne',
  preload: true,
})

/**
 * Outfit - Modern body font
 * Clean, geometric, professional - NOT generic like Inter
 */
export const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-outfit',
  preload: true,
})

// Legacy alias for backward compatibility
export const inter = outfit

/**
 * JetBrains Mono - Code/monospace font
 * Used for code snippets and technical content
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-mono',
  preload: false, // Not critical, can load later
})

// ============================================
// LOCAL FONTS (if using Clash Display)
// ============================================

/**
 * Clash Display - Heading font (local)
 * Bold, modern display font for headings
 *
 * Note: Uncomment when you have the font files
 * Place fonts in /public/fonts/clash-display/
 */
// export const clashDisplay = localFont({
//   src: [
//     {
//       path: '../../../public/fonts/clash-display/ClashDisplay-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../../../public/fonts/clash-display/ClashDisplay-Semibold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../../../public/fonts/clash-display/ClashDisplay-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   display: 'swap',
//   variable: '--font-clash',
//   preload: true,
// })

/**
 * Plus Jakarta Sans - Alternative heading font (Google Fonts)
 * Modern, geometric sans-serif
 */
// import { Plus_Jakarta_Sans } from 'next/font/google'
// export const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ['latin', 'latin-ext'],
//   display: 'swap',
//   variable: '--font-jakarta',
//   preload: true,
// })

// ============================================
// FONT COLLECTION
// ============================================

/**
 * All fonts for export
 */
export const fonts = {
  syne,
  outfit,
  inter, // alias for outfit
  jetbrainsMono,
}

/**
 * Combined CSS variable classes
 * Apply to <html> element
 */
export const fontVariables = [
  syne.variable,
  outfit.variable,
  jetbrainsMono.variable,
].filter(Boolean).join(' ')

// ============================================
// FONT PRELOAD LINKS (for manual optimization)
// ============================================

/**
 * Critical fonts to preload
 * These are automatically handled by next/font
 * but listed here for documentation
 */
export const criticalFonts = [
  // Inter is critical (body text)
  { family: 'Inter', weight: '400', style: 'normal' },
  { family: 'Inter', weight: '600', style: 'normal' },
  { family: 'Inter', weight: '700', style: 'normal' },
]

// ============================================
// TAILWIND FONT FAMILY CONFIG
// ============================================

/**
 * Font family configuration for Tailwind
 * Use in tailwind.config.ts fontFamily
 */
export const tailwindFontFamily = {
  sans: ['var(--font-outfit)', 'Outfit', 'system-ui', '-apple-system', 'sans-serif'],
  display: ['var(--font-syne)', 'Syne', 'system-ui', 'sans-serif'],
  mono: ['var(--font-mono)', 'JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
}

export default fonts
