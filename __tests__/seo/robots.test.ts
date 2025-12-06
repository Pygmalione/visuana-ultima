/**
 * Robots.txt Tests - SPEC-004 SEO & Analytics
 * Tests for robots.txt configuration
 */

import { describe, it, expect } from 'vitest'
import robots from '@/app/robots'

describe('Robots.txt Configuration', () => {
  it('should return valid robots configuration object', () => {
    const result = robots()

    expect(result).toHaveProperty('rules')
    expect(result).toHaveProperty('sitemap')
  })

  it('should allow all user agents by default', () => {
    const result = robots()

    expect(result.rules).toBeDefined()
    if (Array.isArray(result.rules)) {
      const defaultRule = result.rules.find(rule => rule.userAgent === '*')
      expect(defaultRule).toBeDefined()
      expect(defaultRule?.allow).toBe('/')
    } else {
      expect(result.rules.userAgent).toBe('*')
      expect(result.rules.allow).toBe('/')
    }
  })

  it('should reference sitemap.xml location', () => {
    const result = robots()

    expect(result.sitemap).toBe('https://visuana.pl/sitemap.xml')
  })

  it('should disallow admin/private routes', () => {
    const result = robots()

    const disallowPaths = ['/api/', '/admin/']

    if (Array.isArray(result.rules)) {
      const defaultRule = result.rules.find(rule => rule.userAgent === '*')
      if (defaultRule?.disallow) {
        const disallowed = Array.isArray(defaultRule.disallow)
          ? defaultRule.disallow
          : [defaultRule.disallow]
        disallowPaths.forEach(path => {
          expect(disallowed).toContain(path)
        })
      }
    } else if (result.rules.disallow) {
      const disallowed = Array.isArray(result.rules.disallow)
        ? result.rules.disallow
        : [result.rules.disallow]
      disallowPaths.forEach(path => {
        expect(disallowed).toContain(path)
      })
    }
  })
})
