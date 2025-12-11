import { Suspense } from 'react'
import { Navbar, Footer, Section, Grid } from '@/components/layout'
import { ArticleCard } from '@/components/cards'
import { getArticles, getCategories } from '@/lib/blog/strapi-client'
import { articles as mockArticles, categories as mockCategories } from '@/lib/blog/mock-data'

import type { ArticleWithRelations, Category } from '@/types/blog'
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
// CATEGORY FILTER COMPONENT
// ============================================

function CategoryFilter({
  categories,
  activeCategory,
}: {
  categories: Category[]
  activeCategory?: string
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <a
        href="/blog"
        className={`
          px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
          ${!activeCategory
            ? 'bg-royal-red-700 text-white'
            : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
          }
        `}
      >
        Wszystkie
      </a>
      {categories.map((category) => (
        <a
          key={category.id}
          href={`/blog?kategoria=${category.slug}`}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${activeCategory === category.slug
              ? 'bg-royal-red-700 text-white'
              : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
            }
          `}
        >
          {category.name}
        </a>
      ))}
    </div>
  )
}

// ============================================
// ARTICLES GRID COMPONENT
// ============================================

function ArticlesGrid({ articles }: { articles: ArticleWithRelations[] }) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-charcoal-500 text-lg">
          Brak artykułów w tej kategorii. Wróć wkrótce!
        </p>
      </div>
    )
  }

  // First article featured, rest default
  const [featured, ...rest] = articles

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      {featured && (
        <ArticleCard
          title={featured.title}
          excerpt={featured.excerpt}
          category={featured.category?.name}
          date={featured.published_at ? new Date(featured.published_at).toLocaleDateString('pl-PL') : undefined}
          slug={featured.slug}
          image={featured.featured_image}
          author={featured.author ? { name: featured.author.name, avatar: featured.author.avatar } : undefined}
          variant="featured"
        />
      )}

      {/* Rest of articles */}
      {rest.length > 0 && (
        <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="lg">
          {rest.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category?.name}
              date={article.published_at ? new Date(article.published_at).toLocaleDateString('pl-PL') : undefined}
              slug={article.slug}
              image={article.featured_image}
              author={article.author ? { name: article.author.name, avatar: article.author.avatar } : undefined}
            />
          ))}
        </Grid>
      )}
    </div>
  )
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
        {/* Hero Section */}
        <Section bgColor="muted" padding="xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
              Blog
            </h1>
            <p className="text-lg text-charcoal-600 mb-8">
              Praktyczne porady, case studies i hot takes o marketingu.
              Zero fluffu, same konkrety.
            </p>

            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={categorySlug}
            />
          </div>
        </Section>

        {/* Articles Grid */}
        <Section bgColor="white" padding="xl">
          <Suspense fallback={<ArticlesSkeleton />}>
            <ArticlesGrid articles={articles} />
          </Suspense>

          {/* Results info */}
          <div className="text-center mt-12 text-charcoal-500 text-sm">
            {total} {total === 1 ? 'artykuł' : total < 5 ? 'artykuły' : 'artykułów'}
            {source === 'mock' && (
              <span className="ml-2 text-xs text-charcoal-400">
                (dane testowe)
              </span>
            )}
          </div>
        </Section>

        {/* Newsletter CTA */}
        <Section bgColor="royal-red" padding="lg">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Nie przegap kolejnych artykułów
            </h2>
            <p className="text-royal-red-100 mb-6 max-w-xl mx-auto">
              Dołącz do newslettera. Zero spamu, same konkrety - raz w tygodniu.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="twoj@email.pl"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-royal-red-700 font-semibold rounded-lg hover:bg-royal-red-50 transition-colors"
              >
                Zapisz się
              </button>
            </form>
          </div>
        </Section>
      </main>

      <Footer columns={footerColumns} socialLinks={socialLinks} />
    </>
  )
}
