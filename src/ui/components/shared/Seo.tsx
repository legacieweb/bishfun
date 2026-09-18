import { Helmet } from "react-helmet-async";
import { brandConfig } from "@/config/brand";
import type { SEOProps, BreadcrumbItem } from "@/lib/seo";

export interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

const SEO: React.FC<SEOComponentProps> = ({
  title,
  description,
  keywords,
  image,
  canonical,
  locale = "en",
  article = false,
  publishedTime,
  modifiedTime,
  noIndex = false,
  structuredData,
  breadcrumbs,
  children,
}) => {
  const pageTitle = title
    ? `${title} | ${brandConfig.name}`
    : `${brandConfig.name} — ${brandConfig.tagline}`;

  const desc = description || brandConfig.description;
  const metaKeywords = keywords?.join(", ") || brandConfig.keywords.join(", ");
  const ogImage = image || `https://${brandConfig.domain}/og-image.png`;
  const canonicalUrl = canonical || `https://${brandConfig.domain}`;

  const breadcrumbData = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item: BreadcrumbItem, i: number) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }
    : undefined;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={brandConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={brandConfig.social.twitter} />

      <link rel="canonical" href={canonicalUrl} />

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
      {breadcrumbData && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      )}

      {children}
    </Helmet>
  );
};

export default SEO;
