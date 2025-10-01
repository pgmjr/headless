import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * RangeInput
 *
 * Description:
 * Represents an input field that lets users select a numeric value from a given range using a slider.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — enables browser suggestion behavior
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — determines visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier (inherited from GlobalAttributes)
 * - `max?: number` — maximum allowed value
 * - `min?: number` — minimum allowed value
 * - `name: string` — name used during form submission
 * - `required?: boolean` — makes field mandatory in a form
 * - `step?: number` — value change step interval
 * - `type: 'range'` — identifies the input as a range slider
 * - `value?: number` — current or default value
 *
 * Syntax:
 * ```ts
 * export interface RangeInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'range';
 *   name: string;
 *   value?: number;
 *   min?: number;
 *   max?: number;
 *   step?: number;
 *   required?: boolean;
 *   autoComplete?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: RangeInput = {
 *   type: 'range',
 *   name: 'volume',
 *   min: 0,
 *   max: 100,
 *   step: 1,
 *   value: 50
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, RangeInput] = [
 *   {
 *     type: 'text',
 *     name: 'username',
 *     id: 'username',
 *     placeholder: 'Enter username',
 *     required: true
 *   },
 *   {
 *     type: 'range',
 *     name: 'volume',
 *     min: 0,
 *     max: 100,
 *     step: 1,
 *     value: 50
 *   }
 * ];
 * ```
 */
export interface RangeInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'range';
  name: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  autoComplete?: string;
}

export default RangeInput
