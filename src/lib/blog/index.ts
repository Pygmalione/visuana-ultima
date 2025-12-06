// ============================================
// BLOG LIBRARY - SPEC-003
// Central export for blog functionality
// ============================================

// Strapi client for production
export {
  strapiClient,
  getArticles,
  getArticleBySlug,
  getLatestArticles,
  getArticlesByCategory,
  getArticlesByAuthor,
  getCategories,
  getCategoryBySlug,
  getAuthors,
  getAuthorBySlug,
  getAllBlogSlugs, // SPEC-004: For sitemap generation
  // Mappers for custom usage
  mapStrapiArticle,
  mapStrapiCategory,
  mapStrapiAuthor,
} from './strapi-client'

// Mock data for development/fallback
export {
  categories,
  authors,
  articles,
  // Mock utility functions (deprecated - use Strapi client)
  getArticleBySlug as getMockArticleBySlug,
  getArticlesByCategory as getMockArticlesByCategory,
  getArticlesByAuthor as getMockArticlesByAuthor,
  getPublishedArticles as getMockPublishedArticles,
  getLatestArticles as getMockLatestArticles,
  getCategoryBySlug as getMockCategoryBySlug,
  getAuthorBySlug as getMockAuthorBySlug,
} from './mock-data'
