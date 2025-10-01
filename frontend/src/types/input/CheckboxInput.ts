import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * CheckboxInput
 *
 * Description:
 * Represents an HTML input element of type `"checkbox"`. Used for selecting one or more options from a set.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `checked?: boolean` — marks the checkbox as selected when true
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — determines element visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier for the input element (inherited from GlobalAttributes)
 * - `name: string` — key name used during form submission
 * - `required?: boolean` — indicates if the checkbox must be checked before form submission
 * - `type: 'checkbox'` — identifies this input as a checkbox
 * - `value?: string` — the value sent to the server when the checkbox is selected
 *
 * Syntax:
 * ```ts
 * export interface CheckboxInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'checkbox';
 *   name: string;
 *   checked?: boolean;
 *   required?: boolean;
 *   value?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: CheckboxInput = {
 *   type: 'checkbox',
 *   name: 'subscribe',
 *   checked: true,
 *   value: 'yes',
 *   'aria-label': 'Subscribe to newsletter'
 * };
 *
 * // Multiple input usage
 * const formInputs: [EmailInput, CheckboxInput] = [
 *   {
 *     type: 'email',
 *     id: 'email',
 *     name: 'email',
 *     placeholder: 'Enter your email',
 *     required: true
 *   },
 *   {
 *     type: 'checkbox',
 *     name: 'subscribe',
 *     checked: true,
 *     value: 'yes',
 *     'aria-label': 'Subscribe to newsletter'
 *   }
 * ];
 * ```
 */
export interface CheckboxInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'checkbox';
  name: string;
  checked?: boolean;
  required?: boolean;
  value?: string;
}

export default CheckboxInput
