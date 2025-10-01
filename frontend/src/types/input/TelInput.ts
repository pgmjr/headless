import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * TelInput
 *
 * Description:
 * Represents a telephone number input field. Ideal for forms that require user contact information.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — browser autofill hint for phone numbers
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — toggles visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier (inherited from GlobalAttributes)
 * - `name: string` — name used during form submission
 * - `placeholder?: string` — placeholder text inside the input
 * - `required?: boolean` — specifies if input is mandatory
 * - `type: 'tel'` — identifies the input as a phone number field
 * - `value?: string` — current or default phone number
 *
 * Syntax:
 * ```ts
 * export interface TelInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-controls' | 'aria-current' | 'aria-expanded' | 'aria-pressed'> {
 *   type: 'tel';
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
 * const inputAttributes: TelInput = {
 *   type: 'tel',
 *   name: 'contactNumber',
 *   placeholder: '(123) 456-7890',
 *   required: true
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, TelInput] = [
 *   {
 *     type: 'text',
 *     id: 'firstName',
 *     name: 'firstName',
 *     placeholder: 'Enter your name',
 *     required: true
 *   },
 *   {
 *     type: 'tel',
 *     name: 'contactNumber',
 *     placeholder: '(123) 456-7890',
 *     required: true
 *   }
 * ];
 * ```
 */
export interface TelInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-controls' | 'aria-current' | 'aria-expanded' | 'aria-pressed'> {
  type: 'tel';
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}

export default TelInput
