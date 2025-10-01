import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * UrlInput
 *
 * Description:
 * Accepts and validates full web addresses (URLs). Often used for profile links, website fields, or external references.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — browser autofill behavior
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — toggles visibility of the element (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier (inherited from GlobalAttributes)
 * - `name: string` — used as a key when submitting form data
 * - `placeholder?: string` — hint for users about the expected URL format
 * - `required?: boolean` — indicates the field must be filled
 * - `type: 'url'` — specifies the input field is for URLs
 * - `value?: string` — default or current URL value
 *
 * Syntax:
 * ```ts
 * export interface UrlInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-controls' | 'aria-current' | 'aria-expanded' | 'aria-pressed'> {
 *   type: 'url';
 *   name: string;
 *   value?: string;
 *   placeholder?: string;
 *   required?: boolean;
 *   autoComplete?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: UrlInput = {
 *   type: 'url',
 *   name: 'website',
 *   placeholder: 'https://example.com',
 *   required: true
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, UrlInput] = [
 *   {
 *     type: 'text',
 *     name: 'fullName',
 *     placeholder: 'Your full name',
 *     required: true
 *   },
 *   {
 *     type: 'url',
 *     name: 'website',
 *     placeholder: 'https://example.com',
 *     required: true
 *   }
 * ];
 * ```
 */
export interface UrlInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-controls' | 'aria-current' | 'aria-expanded' | 'aria-pressed'> {
  type: 'url';
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}

export default UrlInput
