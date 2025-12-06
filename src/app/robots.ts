/**
 * Robots.txt Configuration - SPEC-004 SEO & Analytics
 * Configures search engine crawler access rules
 */

import { MetadataRoute } from 'next'

const BASE_URL = 'https://visuana.pl'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
