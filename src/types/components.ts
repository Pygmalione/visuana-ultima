import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, HTMLAttributes } from 'react'

// ============================================
// BUTTON TYPES
// ============================================

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  children: ReactNode
}

// ============================================
// INPUT TYPES
// ============================================

export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  success?: boolean
  fullWidth?: boolean
}

// ============================================
// CARD TYPES
// ============================================

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
  variant?: 'default' | 'featured'
  children: ReactNode
}

// ============================================
// LAYOUT TYPES
// ============================================

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6
export type GridGap = 'sm' | 'md' | 'lg' | 'xl'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: GridCols | { sm?: GridCols; md?: GridCols; lg?: GridCols; xl?: GridCols }
  gap?: GridGap
  children: ReactNode
}

// ============================================
// SECTION TYPES
// ============================================

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  bgColor?: 'white' | 'muted' | 'dark' | 'royal-red'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
}

// ============================================
// NAVBAR TYPES
// ============================================

export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export interface NavbarProps {
  logo?: ReactNode
  navItems: NavItem[]
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
}

// ============================================
// FOOTER TYPES
// ============================================

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'instagram' | 'facebook' | 'youtube'
  href: string
}

export interface FooterProps {
  columns: FooterColumn[]
  socialLinks?: SocialLink[]
  copyright?: string
  onNewsletterSignup?: (email: string) => void
}

// ============================================
// HERO TYPES
// ============================================

export interface HeroProps {
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  backgroundImage?: string
  overlay?: boolean
}

// ============================================
// ARTICLE CARD TYPES
// ============================================

export type ArticleCardVariant = 'default' | 'compact' | 'featured'

export interface ArticleCardProps {
  image?: string
  category?: string
  title: string
  excerpt?: string
  date?: string
  author?: {
    name: string
    avatar?: string
  }
  slug: string
  variant?: ArticleCardVariant
}

// ============================================
// SERVICE CARD TYPES
// ============================================

export type ServiceCardVariant = 'default' | 'horizontal' | 'featured'

export interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
  linkLabel?: string
  variant?: ServiceCardVariant
}

// ============================================
// TESTIMONIAL TYPES
// ============================================

export interface TestimonialProps {
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: string
  rating?: 1 | 2 | 3 | 4 | 5
}

// ============================================
// MODAL/DIALOG TYPES
// ============================================

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children: ReactNode
  size?: ModalSize
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
}

// ============================================
// TOAST TYPES
// ============================================

export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
  id: string
  title?: string
  message: string
  variant?: ToastVariant
  duration?: number
  onClose?: (id: string) => void
}

// ============================================
// CTA BOX TYPES
// ============================================

export interface CTABoxProps {
  title: string
  description?: string
  buttonLabel: string
  buttonHref: string
  bgColor?: 'royal-red' | 'charcoal' | 'white' | 'muted'
  alignment?: 'left' | 'center' | 'right'
}

// ============================================
// AUTHOR BIO TYPES
// ============================================

export interface AuthorBioProps {
  name: string
  avatar?: string
  bio?: string
  role?: string
  socialLinks?: {
    platform: 'linkedin' | 'twitter' | 'instagram' | 'website'
    href: string
  }[]
}

// ============================================
// CATEGORY FILTER TYPES
// ============================================

export interface CategoryFilterProps {
  categories: string[]
  activeCategory?: string
  onCategoryChange: (category: string) => void
  showAll?: boolean
  allLabel?: string
}

// ============================================
// FORM COMPONENTS TYPES
// ============================================

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
  fullWidth?: boolean
}

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  error?: string
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  error?: string
}

// ============================================
// COPY BUTTON TYPES
// ============================================

export interface CopyButtonProps {
  text: string
  onCopy?: () => void
  className?: string
  label?: string
}

// ============================================
// TABLE OF CONTENTS TYPES
// ============================================

export interface TOCHeading {
  id: string
  text: string
  level: 2 | 3
}

export interface TableOfContentsProps {
  headings: TOCHeading[]
  activeId?: string
  onHeadingClick?: (id: string) => void
  sticky?: boolean
}
