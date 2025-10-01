/**
 * Interface: GlobalAttributes
 * Description:
 * Common HTML attributes shared across nearly all tags. Used for styling, identification, and document-level metadata.
 *
 * Parameters:
 * - id?: string — unique element identifier
 * - className?: string — CSS class name(s)
 * - title?: string — supplementary info shown on hover
 * - lang?: string — document language tag (e.g., "en", "fr")
 * - hidden?: boolean — whether the element is hidden from visual rendering
 *
 * Syntax:
 * interface GlobalAttributes { ... }
 *
 * Usage:
 * ```js
 * const div: GlobalAttributes = { id: "main", className: "container", lang: "en" };
 * ```
 */
export interface GlobalAttributes {
  id?: string;
  className?: string;
  title?: string;
  lang?: string;
  hidden?: boolean;
}
