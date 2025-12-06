/**
 * SEO Library - SPEC-004 SEO & Analytics
 * Central export for all SEO utilities
 */

// Metadata utilities
export {
  generateMetadata,
  getSiteDefaults,
  pageMetadata,
  generateBlogPostMetadata,
  generateServiceMetadata,
  type SEOMetadata,
} from './metadata'

// JSON-LD Schema generators
export {
  organizationSchema,
  articleSchema,
  serviceSchema,
  faqSchema,
  serviceSchemas,
  type ArticleSchemaInput,
  type ServiceSchemaInput,
  type FAQItem,
} from './schemas'
