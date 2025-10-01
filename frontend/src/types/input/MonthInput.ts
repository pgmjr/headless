import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * Interface Name: `MonthInput`
 *
 * Description:
 * Represents an HTML input element of type `"month"`. Allows users to select a specific year and month (without specifying a day).
 *
 * Parameters:
 *
 * **Defined:**
 * - `type: 'month'` — identifies this input as a month picker
 * - `name: string` — key name used during form submission
 * - `value?: string` — prefilled month in `YYYY-MM` format
 * - `min?: string` — minimum allowable month
 * - `max?: string` — maximum allowable month
 * - `required?: boolean` — marks field as mandatory
 * - `autoComplete?: string` — browser hint for previous input
 *
 * **Inherited from GlobalAttributes:**
 * - `className?: string`
 * - `id?: string`
 * - `hidden?: boolean`
 *
 * **Inherited from AriaAttributes:**
 * - `aria-label?: string`
 *
 * Syntax:
 * ```ts
 * interface MonthInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'month';
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
 * const inputAttributes: MonthInput = {
 *   type: 'month',
 *   name: 'billingMonth',
 *   value: '2025-07',
 *   required: true,
 *   'aria-label': 'Select billing month'
 * };
 * ```
 */
export interface MonthInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'month';
  name: string;
  value?: string;
  min?: string;
  max?: string;
  required?: boolean;
  autoComplete?: string;
}

export default MonthInput
