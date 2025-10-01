/**
 * ============================
 * Centralized Type Definitions
 * For: Headless WP + Next.js + Laravel API + SEO + A11y
 * ============================
 * 
 * This file contains type declarations for:
 * - WordPress CMS content models
 * - API response contracts (Laravel middleware)
 * - SEO & Structured Data (Schema.org)
 * - Web Performance metrics
 * - Accessibility (A11y) compliance
 * 
 * Usage:
 * ```ts
 * import { PostType, SeoMeta, ApiResponse, ... } from '@/types';
 * ```
 */

/* ==================================
 * CUSTOM INTERFACE / TYPES
 * ==================================
 */

/* ClassNamesProps */
export * from './StringObjects';

// ------------------------------------------------------------------
// WordPress Content Types
// ------------------------------------------------------------------

/**
 * Represents a single WordPress post.
 * 
 * Typically used in blog archives, single post views, and CMS page rendering.
 * 
 * @example
 * const post: PostType = { id: 1, title: "Hello World", ... };
 */
export interface PostType {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  categories: CategoryType[];
  tags: TagType[];
  author: AuthorType;
  date: string;
  modified: string;
  status: 'publish' | 'draft' | 'private';
}

/**
 * Represents a static or hierarchical page from WordPress.
 * 
 * Ideal for site pages like "About", "Contact", etc.
 */
export interface PageType {
  id: number;
  slug: string;
  title: string;
  content: string;
  parent?: number;
  featuredImage?: string;
  status: 'publish' | 'draft' | 'private';
}

/**
 * WordPress post category object.
 */
export interface CategoryType {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

/**
 * WordPress post tag object.
 */
export interface TagType {
  id: number;
  name: string;
  slug: string;
}

/**
 * WordPress user object (usually for post authors).
 */
export interface AuthorType {
  id: number;
  name: string;
  avatarUrl?: string;
  bio?: string;
  link?: string;
}

// ------------------------------------------------------------------
// API Middleware Types (Laravel, etc.)
// ------------------------------------------------------------------

/**
 * Generic API response wrapper.
 * 
 * Used to standardize Laravel/Express/Next API responses.
 * 
 * @example
 * const response: ApiResponse<PostType> = {
 *   success: true,
 *   data: { id: 1, title: "Hello" },
 * };
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  status?: number;
}

/**
 * Extension of ApiResponse that includes pagination metadata.
 * 
 * @example
 * const paginated: PaginatedResponse<PostType> = {
 *   success: true,
 *   data: [...],
 *   currentPage: 1,
 *   totalPages: 3,
 *   totalItems: 27,
 * };
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

// ------------------------------------------------------------------
// SEO & Structured Data (Schema.org)
// ------------------------------------------------------------------

/**
 * Metadata fields used for SEO and Open Graph.
 * 
 * Typically attached to page head or via Head component.
 */
export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
}

/**
 * Schema.org-compliant JSON-LD format for articles or blog posts.
 * 
 * Helps search engines display rich snippets.
 */
export interface JsonLdArticle {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  image: string[];
  author: {
    "@type": "Person";
    name: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
}

// ------------------------------------------------------------------
// Web Performance Metrics
// ------------------------------------------------------------------

/**
 * Core Web Vitals and related performance metrics.
 * 
 * Typically measured via `web-vitals` or custom metrics reporting.
 */
export interface WebVitals {
  CLS: number;   // Cumulative Layout Shift
  FID: number;   // First Input Delay
  LCP: number;   // Largest Contentful Paint
  TTFB: number;  // Time To First Byte
  FCP: number;   // First Contentful Paint
  TTI?: number;  // Time to Interactive
}

// ------------------------------------------------------------------
// Accessibility (A11y)
// ------------------------------------------------------------------

/**
 * A basic accessibility audit checklist status.
 * 
 * Can be used in static validation or manual testing tools.
 */
export interface AccessibilityChecklist {
  altTextUsed: boolean;
  landmarkRegionsDefined: boolean;
  keyboardNavigable: boolean;
  colorContrastPassed: boolean;
  ariaLabelsUsed: boolean;
  headingsProperlyOrdered: boolean;
}

// ------------------------------------------------------------------
// Utility Types
// ------------------------------------------------------------------

/**
 * Nullable helper — allows null but not undefined.
 * 
 * @example
 * const val: Nullable<string> = null;
 */
export type Nullable<T> = T | null;

/**
 * Maybe helper — allows null or undefined.
 * 
 * @example
 * const val: Maybe<number> = undefined;
 */
export type Maybe<T> = T | null | undefined;

/**
 * Universal ID type — string or number.
 */
export type ID = string | number;
