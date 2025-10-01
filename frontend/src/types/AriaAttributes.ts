/**
 * Interface: AriaAttributes
 * Description:
 * Accessibility-related attributes used for screen readers and assistive technology.
 *
 * Parameters:
 * - 'aria-label'?: string — custom accessible name
 * - 'aria-labelledby'?: string — ID reference for labeling element
 * - 'aria-describedby'?: string — ID reference for descriptive content
 * - 'aria-hidden'?: boolean — whether the element is hidden from accessibility API
 * - 'aria-pressed'?: boolean — toggle button state
 * - 'aria-expanded'?: boolean — whether the element is expanded/collapsed
 * - 'aria-controls'?: string — ID of the element that is controlled
 * - 'aria-current'?: enum — defines the current item within a set
 *
 * Syntax:
 * interface AriaAttributes { ... }
 *
 * Usage:
 * ```js
 * const aria: AriaAttributes = { 'aria-label': 'Close menu', 'aria-expanded': false };
 * ```
 */
export interface AriaAttributes {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-hidden'?: boolean;
  'aria-pressed'?: boolean;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'true' | 'false';
}
