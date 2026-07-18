import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEOHead Component
 * Manages dynamically injecting title, description, canonical url,
 * social media graph tags, and JSON-LD structured data using react-helmet-async.
 */
export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://demoadsense.com/og-image-placeholder.png',
  articleData = null,
  faqData = null,
  breadcrumbs = null,
}) {
  const siteName = 'Demo AdSense';
  const finalTitle = title ? `${title} | ${siteName}` : `${siteName} - Quality Content. Better Earnings.`;
  const finalDescription = description || 'Demo AdSense is your ultimate guide for programming tutorials, debugging tips, developer productivity tools, tech reviews, and hardware guides.';
  const finalUrl = canonicalUrl || window.location.href;

  // JSON-LD schemas
  const schemas = [];

  // 1. Organization Schema (Default)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://demoadsense.com/#organization',
    'name': siteName,
    'url': 'https://demoadsense.com',
    'logo': 'https://demoadsense.com/logo.png',
    'sameAs': [
      'https://twitter.com/demoadsense',
      'https://github.com/demoadsense',
      'https://facebook.com/demoadsense'
    ]
  };
  schemas.push(organizationSchema);

  // 2. Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbListSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': crumb.name,
        'item': crumb.url.startsWith('http') ? crumb.url : `https://demoadsense.com${crumb.url}`,
      })),
    };
    schemas.push(breadcrumbListSchema);
  }

  // 3. Article Schema
  if (articleData) {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      '@id': `${finalUrl}#article`,
      'isPartOf': {
        '@id': 'https://demoadsense.com/#website'
      },
      'headline': articleData.title,
      'description': articleData.description,
      'inLanguage': 'en-US',
      'mainEntityOfPage': finalUrl,
      'image': [articleData.image || ogImage],
      'datePublished': articleData.publishedDate,
      'dateModified': articleData.updatedDate || articleData.publishedDate,
      'author': {
        '@type': 'Person',
        'name': articleData.authorName,
        'url': `https://demoadsense.com/author/${articleData.authorSlug}`,
      },
      'publisher': {
        '@id': 'https://demoadsense.com/#organization'
      },
      'dependencies': articleData.category,
      'proficiencyLevel': 'Beginner/Intermediate/Advanced'
    };
    schemas.push(articleSchema);
  }

  // 4. FAQ Schema
  if (faqData && faqData.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqData.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer,
        },
      })),
    };
    schemas.push(faqSchema);
  }

  return (
    <Helmet>
      {/* HTML Language tag (configured globally or per page, but Helmet handles head properties) */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {articleData && (
        <>
          <meta property="article:published_time" content={articleData.publishedDate} />
          <meta property="article:modified_time" content={articleData.updatedDate || articleData.publishedDate} />
          <meta property="article:section" content={articleData.category} />
          {articleData.tags && articleData.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@demoadsense" />
      <meta name="twitter:creator" content="@demoadsense" />

      {/* Inject all schemas */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
