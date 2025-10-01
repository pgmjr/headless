import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * Interface: InputElement
 * Description:
 * Represents an <input> HTML element used in forms to capture user input. Supports multiple types like text, email, radio, etc.
 *
 * Parameters:
 * - id: string — unique identifier for the input element
 * - name: string — name used during form submission
 * - type: string — specifies the input type (e.g., text, email, checkbox)
 * - value?: string | number — default or current value
 * - required?: boolean — whether the input is required
 * - placeholder?: string — helper text displayed inside input
 * - autoComplete?: string — browser auto-completion behavior
 * - ariaLabel?: string — screen reader label
 *
 * Syntax:
 * interface InputElement extends GlobalAttributes, AriaAttributes { ... }
 *
 * Usage:
 * ```js
 * const emailInput: InputElement = {
 *   id: "email",
 *   name: "userEmail",
 *   type: "email",
 *   placeholder: "Enter your email",
 *   required: true
 * };
 * ```
 */
export interface InputElement extends Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-pressed' | 'aria-expanded'> {
  id: string;
  name: string;
  type:
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'date'
  | 'search'
  | 'tel'
  | 'url';
  value?: string | number;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

export default InputElement
