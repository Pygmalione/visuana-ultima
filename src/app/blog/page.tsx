import { Suspense } from 'react'
import { Navbar, Footer, Section } from '@/components/layout'
import { getArticles, getCategories } from '@/lib/blog/strapi-client'
import { articles as mockArticles, categories as mockCategories } from '@/lib/blog/mock-data'
import {
  BlogHeroContent,
  BlogCategoryFilter,
  AnimatedArticlesGrid,
  AnimatedNewsletterCTA,
  AnimatedResultsInfo,
} from './components'

import type { Metadata } from 'next'

// ============================================
// BLOG PAGE - SPEC-003 + SPEC-004 ISR
// Article listing with category filter
// ============================================

/**
 * ISR Configuration - Task Group 9
 * Revalidate blog listing every 30 minutes
 */
export const revalidate = 1800 // 30 minutes

export const metadata: Metadata = {
  title: 'Blog | Visuana - Marketing, który działa',
  description: 'Praktyczne porady, case studies i hot takes o marketingu. Zero fluffu, same konkrety.',
  openGraph: {
    title: 'Blog | Visuana',
    description: 'Praktyczne porady, case studies i hot takes o marketingu.',
  },
}

// Navigation config (shared with homepage)
const navItems = [
  { label: 'Usługi', href: '/uslugi' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog', active: true },
  { label: 'O nas', href: '/o-nas' },
]

const footerColumns = [
  {
    title: 'Usługi',
    links: [
      { label: 'Content marketing', href: '/uslugi/content-marketing' },
      { label: 'Influencer marketing', href: '/uslugi/influencer-marketing' },
      { label: 'AI analytics', href: '/uslugi/ai-analytics' },
      { label: 'Strategia digital', href: '/uslugi/strategia-digital' },
    ],
  },
  {
    title: 'Zasoby',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Podcast', href: '/podcast' },
      { label: 'Raporty', href: '/raporty' },
    ],
  },
  {
    title: 'Firma',
    links: [
      { label: 'O nas', href: '/o-nas' },
      { label: 'Kariera', href: '/kariera' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    ],
  },
]

const socialLinks = [
  { platform: 'linkedin' as const, href: 'https://linkedin.com/company/visuana' },
  { platform: 'twitter' as const, href: 'https://twitter.com/visuana' },
  { platform: 'instagram' as const, href: 'https://instagram.com/visuana' },
]

// ============================================
// DATA FETCHING
// ============================================

async function getBlogData(categorySlug?: string) {
  try {
    // Fetch from Strapi
    const [articlesResponse, categories] = await Promise.all([
      getArticles({ category: categorySlug, pageSize: 12 }),
      getCategories(),
    ])

    // If Strapi returns data, use it
    if (articlesResponse.data.length > 0 || categories.length > 0) {
      return {
        articles: articlesResponse.data,
        categories,
        total: articlesResponse.total,
        source: 'strapi' as const,
      }
    }

    // Fallback to mock data if Strapi is empty/unavailable
    let filteredArticles = mockArticles
    if (categorySlug) {
      const category = mockCategories.find(c => c.slug === categorySlug)
      if (category) {
        filteredArticles = mockArticles.filter(a => a.category_id === category.id)
      }
    }

    return {
      articles: filteredArticles,
      categories: mockCategories,
      total: filteredArticles.length,
      source: 'mock' as const,
    }
  } catch (error) {
    console.error('Error fetching blog data:', error)
    // Fallback to mock data on error
    return {
      articles: mockArticles,
      categories: mockCategories,
      total: mockArticles.length,
      source: 'mock' as const,
    }
  }
}


// ============================================
// LOADING SKELETON
// ============================================

function ArticlesSkeleton() {
  return (
    <div className="space-y-8">
      {/* Featured skeleton */}
      <div className="bg-charcoal-100 rounded-lg h-80 animate-pulse" />

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-charcoal-100 rounded-lg h-64 animate-pulse" />
        ))}
      </div>
    </div>
  )
}

// ============================================
// PAGE COMPONENT
// ============================================

interface BlogPageProps {
  searchParams: Promise<{ kategoria?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const categorySlug = params.kategoria

  const { articles, categories, total, source } = await getBlogData(categorySlug)

  return (
    <>
      <Navbar
        navItems={navItems}
        ctaLabel="Umów konsultację"
        ctaHref="/kontakt"
      />

      <main id="main-content">
        {/* Hero Section with Animated Content */}
        <Section bgColor="muted" padding="xl">
          <BlogHeroContent
            title="Blog"
            description="Praktyczne porady, case studies i hot takes o marketingu. Zero fluffu, same konkrety."
          >
            <BlogCategoryFilter
              categories={categories}
              activeCategory={categorySlug}
            />
          </BlogHeroContent>
        </Section>

        {/* Articles Grid with Staggered Animations */}
        <Section bgColor="white" padding="xl">
          <Suspense fallback={<ArticlesSkeleton />}>
            <AnimatedArticlesGrid articles={articles} />
          </Suspense>

          {/* Animated Results Info */}
          <AnimatedResultsInfo total={total} source={source} />
        </Section>

        {/* Newsletter CTA with Entrance Animations */}
        <Section bgColor="royal-red" padding="lg">
          <AnimatedNewsletterCTA />
        </Section>
      </main>

      <Footer columns={footerColumns} socialLinks={socialLinks} />
    </>
  )
}
