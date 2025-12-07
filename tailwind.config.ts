import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors (SPEC-001 Brand Identity)
        'royal-red': {
          DEFAULT: '#B91C1C',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C', // Brand primary
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        // Text Colors
        'charcoal': {
          DEFAULT: '#1F2937',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280', // Steel Gray
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937', // Deep Charcoal
          900: '#111827',
          950: '#030712',
        },
        // Accents
        'electric-blue': {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        'success': {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        'warning': {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        'purple': {
          DEFAULT: '#8B5CF6',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        // Seonyu Brand Colors (SPEC-008)
        'seonyu': {
          primary: '#7C3AED',     // Purple - AI/Tech vibe
          secondary: '#A855F7',   // Lighter purple
          accent: '#F59E0B',      // Orange for CTAs
          dark: '#1E1B4B',        // Deep indigo
          light: '#EDE9FE',       // Light purple bg
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',
          800: '#6B21A8',
          900: '#581C87',
          950: '#3B0764',
        },
        // Semantic Colors
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'muted': '#F3F4F6',
        'border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Headers (SPEC-001)
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.35', letterSpacing: '0', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        // Body
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.7', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // 8px base system
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'button': '0 1px 3px rgba(185, 28, 28, 0.2)',
        'button-hover': '0 4px 12px rgba(185, 28, 28, 0.3)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        // Seonyu shadows (SPEC-008)
        'seonyu-button': '0 1px 3px rgba(124, 58, 237, 0.2)',
        'seonyu-button-hover': '0 4px 12px rgba(124, 58, 237, 0.3)',
        'seonyu-glow': '0 0 30px rgba(124, 58, 237, 0.4)',
        'seonyu-card': '0 4px 20px rgba(30, 27, 75, 0.1)',
      },
      animation: {
        'spin-slow': 'spin 0.8s linear infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-out-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        'container': '1200px',
        'prose': '65ch',
      },
    },
  },
  plugins: [],
}

export default config
