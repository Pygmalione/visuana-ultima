/**
 * JsonLd Component - SPEC-004 SEO & Analytics
 * Injects JSON-LD structured data into page head
 */

interface JsonLdProps {
  schema: Record<string, unknown>
}

/**
 * Renders JSON-LD structured data script tag
 * Use in page components to add rich snippets
 *
 * @example
 * <JsonLd schema={organizationSchema()} />
 */
export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  )
}

/**
 * Renders multiple JSON-LD schemas
 * Use when a page needs multiple schema types
 *
 * @example
 * <JsonLdMultiple schemas={[organizationSchema(), faqSchema(faqs)]} />
 */
export function JsonLdMultiple({ schemas }: { schemas: Record<string, unknown>[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} schema={schema} />
      ))}
    </>
  )
}

export default JsonLd
