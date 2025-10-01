import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * PasswordInput
 *
 * Description:
 * Represents an HTML input element of type `"password"`. Used for securely capturing password fields, hiding user input from view.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — enables password manager or browser autocomplete
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — determines element visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier for the input element (inherited from GlobalAttributes)
 * - `name: string` — key name used during form submission
 * - `placeholder?: string` — hint text shown when input is empty
 * - `required?: boolean` — marks the field as mandatory
 * - `type: 'password'` — identifies this input as a password field
 * - `value?: string` — current or default password value
 *
 * Syntax:
 * ```ts
 * export interface PasswordInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'password';
 *   name: string;
 *   value?: string;
 *   required?: boolean;
 *   placeholder?: string;
 *   autoComplete?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: PasswordInput = {
 *   type: 'password',
 *   name: 'userPassword',
 *   placeholder: 'Enter your password',
 *   required: true
 * };
 *
 * // Multiple input usage
 * const formInputs: [EmailInput, PasswordInput] = [
 *   {
 *     type: 'email',
 *     name: 'userEmail',
 *     placeholder: 'Enter your email',
 *     required: true
 *   },
 *   {
 *     type: 'password',
 *     name: 'userPassword',
 *     placeholder: 'Enter your password',
 *     required: true
 *   }
 * ];
 * ```
 */
export interface PasswordInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'password';
  name: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

export default PasswordInput
