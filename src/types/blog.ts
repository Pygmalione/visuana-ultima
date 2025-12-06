// ============================================
// BLOG TYPES - SPEC-003
// Database schema types for blog system
// ============================================

// ============================================
// CATEGORY
// ============================================

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  color?: string
  created_at: string
  updated_at: string
}

// ============================================
// AUTHOR
// ============================================

export interface Author {
  id: string
  name: string
  slug: string
  bio?: string
  avatar?: string
  role?: string
  email?: string
  social_links?: {
    platform: 'linkedin' | 'twitter' | 'instagram' | 'website'
    href: string
  }[]
  created_at: string
  updated_at: string
}

// ============================================
// ARTICLE
// ============================================

export type ArticleStatus = 'draft' | 'published' | 'archived'

export interface Article {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  featured_image?: string
  featured_image_alt?: string
  category_id: string
  author_id: string
  status: ArticleStatus
  published_at?: string
  reading_time?: number
  meta_title?: string
  meta_description?: string
  og_image?: string
  tags?: string[]
  created_at: string
  updated_at: string
}

// ============================================
// ARTICLE WITH RELATIONS
// ============================================

export interface ArticleWithRelations extends Article {
  category: Category
  author: Author
}

// ============================================
// TAG (optional, for future use)
// ============================================

export interface Tag {
  id: string
  name: string
  slug: string
  created_at: string
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  per_page: number
  total_pages: number
}

export interface BlogFilters {
  category?: string
  author?: string
  status?: ArticleStatus
  search?: string
  tags?: string[]
}

// ============================================
// FORM TYPES (for CMS/admin)
// ============================================

export interface ArticleFormData {
  title: string
  slug?: string
  excerpt?: string
  content: string
  featured_image?: string
  featured_image_alt?: string
  category_id: string
  author_id: string
  status: ArticleStatus
  published_at?: string
  meta_title?: string
  meta_description?: string
  tags?: string[]
}

export interface CategoryFormData {
  name: string
  slug?: string
  description?: string
  color?: string
}

export interface AuthorFormData {
  name: string
  slug?: string
  bio?: string
  avatar?: string
  role?: string
  email?: string
  social_links?: {
    platform: 'linkedin' | 'twitter' | 'instagram' | 'website'
    href: string
  }[]
}
