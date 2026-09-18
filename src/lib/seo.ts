import { brandConfig } from "@/config/brand";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  canonical?: string;
  locale?: string;
  article?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
  breadcrumbs?: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const buildPageTitle = (title?: string): string => {
  if (title) {
    return `${title} | ${brandConfig.name}`;
  }
  return `${brandConfig.name} — ${brandConfig.tagline}`;
};

export const buildMetaDescription = (description?: string): string => {
  return description || brandConfig.description;
};

export const buildCanonicalUrl = (path?: string): string => {
  if (!path) return `https://${brandConfig.domain}`;
  return `https://${brandConfig.domain}${path}`;
};

export const defaultSocialImage = (path?: string): string => {
  return `https://${brandConfig.domain}${path || "/"}og-image.png`;
};
