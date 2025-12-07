import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Navbar, Footer, Section } from '@/components/layout'
import { AuthorBio } from '@/components/cards'
import { JsonLd } from '@/components/seo/JsonLd'
import { articleSchema } from '@/lib/seo/schemas'
import { getArticleBySlug, getArticles, getLatestArticles } from '@/lib/blog/strapi-client'
import { getArticleBySlug as getMockArticleBySlug, getLatestArticles as getMockLatestArticles, articles as mockArticles } from '@/lib/blog/mock-data'
import { REVALIDATION_CONFIG } from '@/lib/performance/revalidation'
import type { ArticleWithRelations } from '@/types/blog'
import type { Metadata } from 'next'

// ============================================
// ARTICLE PAGE - SPEC-003 + SPEC-004 ISR
// Individual blog article with rich content
// ============================================

/**
 * ISR Configuration - Task Group 9
 * Revalidate blog posts every hour
 */
export const revalidate = REVALIDATION_CONFIG.blogPost

/**
 * Generate static paths for known articles
 * Enables SSG for existing blog posts
 */
export async function generateStaticParams() {
  try {
    const response = await getArticles({ pageSize: 100 })
    if (response.data.length > 0) {
      return response.data.map((article) => ({
        slug: article.slug,
      }))
    }
  } catch {
    // Fallback to mock data
  }

  // Use mock data as fallback
  return mockArticles.map((article) => ({
    slug: article.slug,
  }))
}

// Navigation config
const navItems = [
  { label: 'Uslugi', href: '/uslugi' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'O nas', href: '/o-nas' },
]

const footerColumns = [
  {
    title: 'Uslugi',
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
      { label: 'Polityka prywatnosci', href: '/polityka-prywatnosci' },
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

async function getArticleData(slug: string): Promise<ArticleWithRelations | null> {
  try {
    // Try Strapi first
    const article = await getArticleBySlug(slug)
    if (article) return article

    // Fallback to mock data
    return getMockArticleBySlug(slug) || null
  } catch (error) {
    console.error('Error fetching article:', error)
    // Fallback to mock data on error
    return getMockArticleBySlug(slug) || null
  }
}

async function getRelatedArticles(currentSlug: string): Promise<ArticleWithRelations[]> {
  try {
    const articles = await getLatestArticles(4)
    return articles.filter(a => a.slug !== currentSlug).slice(0, 3)
  } catch {
    return getMockLatestArticles(4).filter(a => a.slug !== currentSlug).slice(0, 3)
  }
}

// ============================================
// METADATA
// ============================================

interface PageParams {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleData(slug)

  if (!article) {
    return {
      title: 'Artykul nie znaleziony | Visuana',
    }
  }

  return {
    title: article.meta_title || `${article.title} | Visuana Blog`,
    description: article.meta_description || article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.og_image || article.featured_image ? [article.og_image || article.featured_image!] : undefined,
      type: 'article',
      publishedTime: article.published_at,
      authors: article.author ? [article.author.name] : undefined,
    },
  }
}

// ============================================
// ARTICLE CONTENT COMPONENT
// ============================================

function ArticleContent({ content }: { content: string }) {
  // Simple markdown-like rendering for now
  // In production, use a proper markdown parser like remark/rehype
  return (
    <div
      className="prose prose-lg prose-charcoal max-w-none
        prose-headings:text-charcoal-800 prose-headings:font-bold
        prose-h1:text-3xl prose-h1:mb-6
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-charcoal-700 prose-p:leading-relaxed prose-p:mb-4
        prose-a:text-royal-red-700 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-charcoal-800
        prose-ul:my-4 prose-li:text-charcoal-700
        prose-blockquote:border-l-royal-red-600 prose-blockquote:bg-charcoal-50 prose-blockquote:py-1
        prose-code:bg-charcoal-100 prose-code:px-1 prose-code:rounded
        prose-pre:bg-charcoal-800 prose-pre:text-charcoal-100
        prose-table:border-collapse
        prose-th:bg-charcoal-100 prose-th:p-3 prose-th:text-left
        prose-td:border prose-td:border-charcoal-200 prose-td:p-3
      "
      dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
    />
  )
}

// Simple markdown to HTML converter
function formatMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>[\s\S]*<\/li>)/g, '<ul>$1</ul>')
    // Code blocks
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // Inline code
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Paragraphs (simple)
    .replace(/\n\n/g, '</p><p>')
    // Horizontal rules
    .replace(/^---$/gim, '<hr />')
    // Tables (basic)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(Boolean).map(c => c.trim())
      return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>'
    })
}

// ============================================
// RELATED ARTICLES COMPONENT
// ============================================

function RelatedArticles({ articles }: { articles: ArticleWithRelations[] }) {
  if (articles.length === 0) return null

  return (
    <div className="mt-16 pt-12 border-t border-charcoal-200">
      <h2 className="text-2xl font-bold text-charcoal-800 mb-6">
        Podobne artykuly
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="group block bg-charcoal-50 rounded-lg p-4 hover:bg-charcoal-100 transition-colors"
          >
            <span className="text-xs font-semibold text-royal-red-700 uppercase tracking-wider">
              {article.category?.name}
            </span>
            <h3 className="font-bold text-charcoal-800 mt-1 group-hover:text-royal-red-700 transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-charcoal-600 mt-2 line-clamp-2">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ============================================
// PAGE COMPONENT
// ============================================

export default async function ArticlePage({ params }: PageParams) {
  const { slug } = await params
  const article = await getArticleData(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(slug)

  const publishedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  // Generate Article schema for JSON-LD
  const schema = articleSchema({
    title: article.title,
    description: article.excerpt || article.title, // Fallback to title if no excerpt
    slug: article.slug,
    datePublished: article.published_at || new Date().toISOString(),
    dateModified: article.updated_at || article.published_at,
    author: article.author?.name || 'Visuana Team',
    image: article.featured_image,
  })

  return (
    <>
      <Navbar
        navItems={navItems}
        ctaLabel="Umow konsultacje"
        ctaHref="/kontakt"
      />

      {/* Article JSON-LD Schema */}
      <JsonLd schema={schema} />

      <main id="main-content">
        {/* Article Header */}
        <Section bgColor="white" padding="lg">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-charcoal-500 mb-6">
              <Link href="/blog" className="hover:text-royal-red-700 transition-colors">
                Blog
              </Link>
              <span>/</span>
              {article.category && (
                <>
                  <Link
                    href={`/blog?kategoria=${article.category.slug}`}
                    className="hover:text-royal-red-700 transition-colors"
                  >
                    {article.category.name}
                  </Link>
                  <span>/</span>
                </>
              )}
              <span className="text-charcoal-400 truncate">{article.title}</span>
            </nav>

            {/* Category Badge */}
            {article.category && (
              <Link
                href={`/blog?kategoria=${article.category.slug}`}
                className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-royal-red-700 bg-royal-red-50 rounded-full mb-4 hover:bg-royal-red-100 transition-colors"
              >
                {article.category.name}
              </Link>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-800 leading-tight mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
                {article.excerpt}
              </p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-500 pb-8 border-b border-charcoal-200">
              {/* Author */}
              {article.author && (
                <div className="flex items-center gap-2">
                  {article.author.avatar ? (
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="w-10 h-10 rounded-full bg-royal-red-100 text-royal-red-700 font-bold flex items-center justify-center">
                      {article.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  )}
                  <div>
                    <p className="font-medium text-charcoal-800">{article.author.name}</p>
                    {article.author.role && (
                      <p className="text-xs text-charcoal-500">{article.author.role}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Separator */}
              {article.author && publishedDate && <span className="text-charcoal-300">-</span>}

              {/* Date */}
              {publishedDate && (
                <time dateTime={article.published_at}>
                  {publishedDate}
                </time>
              )}

              {/* Reading time */}
              {article.reading_time && (
                <>
                  <span className="text-charcoal-300">-</span>
                  <span>{article.reading_time} min czytania</span>
                </>
              )}
            </div>
          </div>
        </Section>

        {/* Featured Image */}
        {article.featured_image && (
          <Section bgColor="white" padding="sm">
            <div className="max-w-4xl mx-auto">
              <img
                src={article.featured_image}
                alt={article.featured_image_alt || article.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </Section>
        )}

        {/* Article Content */}
        <Section bgColor="white" padding="lg">
          <div className="max-w-3xl mx-auto">
            <ArticleContent content={article.content} />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-charcoal-200">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-charcoal-100 text-charcoal-600 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            {article.author && (
              <div className="mt-12 pt-8 border-t border-charcoal-200">
                <AuthorBio
                  name={article.author.name}
                  avatar={article.author.avatar}
                  bio={article.author.bio}
                  role={article.author.role}
                  socialLinks={article.author.social_links}
                />
              </div>
            )}

            {/* Related Articles */}
            <RelatedArticles articles={relatedArticles} />
          </div>
        </Section>

        {/* CTA Section */}
        <Section bgColor="muted" padding="lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-charcoal-800 mb-4">
              Chcesz wiecej takich tresci?
            </h2>
            <p className="text-charcoal-600 mb-6">
              Dolacz do newslettera. Raz w tygodniu - same konkrety, zero spamu.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="twoj@email.pl"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-royal-red-700 text-white font-semibold rounded-lg hover:bg-royal-red-800 transition-colors"
              >
                Zapisz sie
              </button>
            </form>
          </div>
        </Section>
      </main>

      <Footer columns={footerColumns} socialLinks={socialLinks} />
    </>
  )
}
