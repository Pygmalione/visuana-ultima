import { notFound } from 'next/navigation'
import { Navbar, Footer, Section } from '@/components/layout'
import { AuthorBio } from '@/components/cards'
import { JsonLd } from '@/components/seo/JsonLd'
import { articleSchema } from '@/lib/seo/schemas'
import { getArticleBySlug, getArticles, getLatestArticles } from '@/lib/blog/strapi-client'
import { getArticleBySlug as getMockArticleBySlug, getLatestArticles as getMockLatestArticles, articles as mockArticles } from '@/lib/blog/mock-data'
import {
  AnimatedArticleHeader,
  AnimatedFeaturedImage,
  AnimatedRelatedArticles,
  AnimatedArticleCTA,
} from './components'

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
export const revalidate = 3600 // 1 hour

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
        {/* Article Header with Scroll-Triggered Animations */}
        <Section bgColor="white" padding="lg">
          <AnimatedArticleHeader article={article} publishedDate={publishedDate} />
        </Section>

        {/* Featured Image with Scale Animation */}
        {article.featured_image && (
          <Section bgColor="white" padding="sm">
            <AnimatedFeaturedImage
              src={article.featured_image}
              alt={article.featured_image_alt || article.title}
            />
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

            {/* Related Articles with Staggered Animations */}
            <AnimatedRelatedArticles articles={relatedArticles} />
          </div>
        </Section>

        {/* CTA Section with Entrance Animations */}
        <Section bgColor="muted" padding="lg">
          <AnimatedArticleCTA />
        </Section>
      </main>

      <Footer columns={footerColumns} socialLinks={socialLinks} />
    </>
  )
}
