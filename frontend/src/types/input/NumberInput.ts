import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * NumberInput
 *
 * Description:
 * Represents an HTML input element of type `"number"`. Accepts numeric input with optional min, max, and step attributes for validation and control.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — enables or disables autofill suggestions
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — determines element visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier for the input element (inherited from GlobalAttributes)
 * - `max?: number` — maximum allowed value
 * - `min?: number` — minimum allowed value
 * - `name: string` — key name used during form submission
 * - `placeholder?: string` — hint text shown when input is empty
 * - `required?: boolean` — marks the field as mandatory
 * - `step?: number` — granularity of value change (e.g., 1, 0.1)
 * - `type: 'number'` — identifies this input as a numeric field
 * - `value?: number` — current or default value
 *
 * Syntax:
 * ```ts
 * export interface NumberInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'number';
 *   name: string;
 *   value?: number;
 *   required?: boolean;
 *   placeholder?: string;
 *   autoComplete?: string;
 *   min?: number;
 *   max?: number;
 *   step?: number;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: NumberInput = {
 *   type: 'number',
 *   name: 'age',
 *   placeholder: 'Enter your age',
 *   min: 1,
 *   max: 100,
 *   step: 1,
 *   required: true
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, NumberInput] = [
 *   {
 *     type: 'text',
 *     id: 'fullName',
 *     name: 'fullName',
 *     placeholder: 'Your full name',
 *     required: true
 *   },
 *   {
 *     type: 'number',
 *     name: 'age',
 *     placeholder: 'Enter your age',
 *     min: 1,
 *     max: 100,
 *     step: 1,
 *     required: true
 *   }
 * ];
 * ```
 */
export interface NumberInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'number';
  name: string;
  value?: number;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  min?: number;
  max?: number;
  step?: number;
}

export default NumberInput
