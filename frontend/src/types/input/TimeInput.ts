import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * TimeInput
 *
 * Description:
 * Accepts time input in `HH:MM` format, useful for scheduling, booking, or time-specific forms.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — browser behavior for time suggestions
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — toggles visibility of the element (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier (inherited from GlobalAttributes)
 * - `name: string` — used as a key when submitting form data
 * - `placeholder?: string` — hint text to display inside the input
 * - `required?: boolean` — specifies if input is mandatory
 * - `type: 'time'` — sets the input type as time
 * - `value?: string` — current or default time value
 *
 * Syntax:
 * ```ts
 * export interface TimeInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-controls' | 'aria-current' | 'aria-expanded' | 'aria-pressed'> {
 *   type: 'time';
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
 * const inputAttributes: TimeInput = {
 *   type: 'time',
 *   name: 'appointmentTime',
 *   placeholder: 'HH:MM',
 *   required: true
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, TimeInput] = [
 *   {
 *     type: 'text',
 *     name: 'fullName',
 *     placeholder: 'Enter your full name',
 *     required: true
 *   },
 *   {
 *     type: 'time',
 *     name: 'appointmentTime',
 *     placeholder: 'HH:MM',
 *     required: true
 *   }
 * ];
 * ```
 */
export interface TimeInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-controls' | 'aria-current' | 'aria-expanded' | 'aria-pressed'> {
  type: 'time';
  name: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}

export default TimeInput
