import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * EmailInput
 *
 * Description:
 * Represents an HTML input element of type `"email"`. Validates input for email formatting. Ideal for sign-up, login, and contact forms.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — browser autofill behavior (e.g., "email", "username")
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — determines element visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier for the input element (inherited from GlobalAttributes)
 * - `multiple?: boolean` — allows multiple comma-separated emails
 * - `name: string` — key name used during form submission
 * - `placeholder?: string` — short hint describing expected value
 * - `required?: boolean` — indicates if the input is mandatory
 * - `type: 'email'` — identifies this input as an email field
 * - `value?: string` — pre-filled or current email address
 *
 * Syntax:
 * ```ts
 * export interface EmailInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'email';
 *   name: string;
 *   value?: string;
 *   required?: boolean;
 *   placeholder?: string;
 *   multiple?: boolean;
 *   autoComplete?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: EmailInput = {
 *   type: 'email',
 *   name: 'userEmail',
 *   placeholder: 'you@example.com',
 *   required: true,
 *   'aria-label': 'Email address'
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, EmailInput] = [
 *   {
 *     type: 'text',
 *     id: 'fullName',
 *     name: 'fullName',
 *     placeholder: 'Full name',
 *     required: true
 *   },
 *   {
 *     type: 'email',
 *     name: 'userEmail',
 *     placeholder: 'you@example.com',
 *     required: true,
 *     'aria-label': 'Email address'
 *   }
 * ];
 * ```
 */
export interface EmailInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'email';
  name: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  multiple?: boolean;
  autoComplete?: string;
}

export default EmailInput
