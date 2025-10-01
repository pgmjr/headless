import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * DateInput
 *
 * Description:
 * Represents an HTML input element of type `"date"`. Allows users to enter or select a date (year, month, and day).
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — browser behavior for autofill (e.g., "bday", "off")
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — determines element visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier for the input element (inherited from GlobalAttributes)
 * - `max?: string` — maximum acceptable date (in YYYY-MM-DD format)
 * - `min?: string` — minimum acceptable date (in YYYY-MM-DD format)
 * - `name: string` — key name used during form submission
 * - `required?: boolean` — indicates if a date is required before submission
 * - `type: 'date'` — identifies this input as a date picker
 * - `value?: string` — the pre-filled or current date value
 *
 * Syntax:
 * ```ts
 * export interface DateInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'date';
 *   name: string;
 *   value?: string;
 *   min?: string;
 *   max?: string;
 *   required?: boolean;
 *   autoComplete?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: DateInput = {
 *   type: 'date',
 *   name: 'birthDate',
 *   min: '1900-01-01',
 *   max: '2100-12-31',
 *   required: true,
 *   'aria-label': 'Enter your birth date'
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, DateInput] = [
 *   {
 *     type: 'text',
 *     id: 'firstName',
 *     name: 'firstName',
 *     placeholder: 'Enter your name',
 *     required: true
 *   },
 *   {
 *     type: 'date',
 *     name: 'birthDate',
 *     min: '1900-01-01',
 *     max: '2100-12-31',
 *     required: true,
 *     'aria-label': 'Enter your birth date'
 *   }
 * ];
 * ```
 */
export interface DateInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'date';
  name: string;
  value?: string;
  min?: string;
  max?: string;
  required?: boolean;
  autoComplete?: string;
}

export default DateInput
