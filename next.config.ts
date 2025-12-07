import type { NextConfig } from "next";

/**
 * Next.js Configuration - SPEC-004 SEO & Analytics
 *
 * Optimizations:
 * - Image optimization with WebP/AVIF
 * - Strict mode for better performance
 * - Headers for caching
 */
const nextConfig: NextConfig = {
  // ============================================
  // IMAGE OPTIMIZATION (Task Group 7)
  // ============================================
  images: {
    // Enable modern image formats
    formats: ['image/avif', 'image/webp'],

    // Image quality (85% is good balance)
    // Can be overridden per-image with quality prop
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Allow external image domains if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.strapi.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],

    // Reduce unoptimized images warning
    unoptimized: false,
  },

  // ============================================
  // PERFORMANCE OPTIMIZATIONS (Task Group 9)
  // ============================================

  // Enable React strict mode for better debugging
  reactStrictMode: true,

  // Reduce bundle size by removing unused packages
  modularizeImports: {
    // Only import what we need
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },

  // ============================================
  // CACHING HEADERS (Task Group 9)
  // ============================================
  async headers() {
    return [
      {
        // Static assets - long cache
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // JS/CSS bundles - versioned, long cache
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // HTML pages - short cache, revalidate
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // ============================================
  // EXPERIMENTAL FEATURES
  // ============================================
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },

  // ============================================
  // TURBOPACK ROOT (silence lockfile warning)
  // ============================================
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
