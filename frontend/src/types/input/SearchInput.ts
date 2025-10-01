import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * SearchInput
 *
 * Description:
 * Represents a single-line search field allowing users to enter search queries.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — enables browser suggestion behavior
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — determines visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier (inherited from GlobalAttributes)
 * - `name: string` — name used during form submission
 * - `placeholder?: string` — hint displayed inside the field
 * - `required?: boolean` — makes field mandatory in a form
 * - `type: 'search'` — identifies the input as a search field
 * - `value?: string` — current or default value
 *
 * Syntax:
 * ```ts
 * export interface SearchInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'search';
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
 * const inputAttributes: SearchInput = {
 *   type: 'search',
 *   name: 'query',
 *   placeholder: 'Search here...',
 *   required: true
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, SearchInput] = [
 *   {
 *     type: 'text',
 *     id: 'firstName',
 *     name: 'firstName',
 *     placeholder: 'Enter your name',
 *     required: true
 *   },
 *   {
 *     type: 'search',
 *     name: 'query',
 *     placeholder: 'Search here...',
 *     required: true
 *   }
 * ];
 * ```
 */
export interface SearchInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'search';
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}

export default SearchInput
