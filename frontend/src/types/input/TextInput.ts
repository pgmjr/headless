import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * TextInput
 *
 * Description:
 * Represents a single-line plain text input. Commonly used for names, titles, and other short text data.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — instructs browser on autofill behavior
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — toggles element visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier for the input (inherited from GlobalAttributes)
 * - `name: string` — key used for form submission
 * - `placeholder?: string` — text displayed as a hint within the input field
 * - `required?: boolean` — determines if the field is mandatory
 * - `type: 'text'` — identifies the input type as a single-line text field
 * - `value?: string` — default or current text content of the input
 *
 * Syntax:
 * ```ts
 * export interface TextInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-controls' | 'aria-current' | 'aria-expanded' | 'aria-pressed'> {
 *   type: 'text';
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
 * const inputAttributes: TextInput = {
 *   type: 'text',
 *   name: 'firstName',
 *   placeholder: 'Enter your name',
 *   required: true
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, EmailInput] = [
 *   {
 *     type: 'text',
 *     name: 'firstName',
 *     placeholder: 'Enter your name',
 *     required: true
 *   },
 *   {
 *     type: 'email',
 *     name: 'emailAddress',
 *     placeholder: 'your@email.com',
 *     required: true
 *   }
 * ];
 * ```
 */
export interface TextInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-controls' | 'aria-current' | 'aria-expanded' | 'aria-pressed'> {
  type: 'text';
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}

export default TextInput
