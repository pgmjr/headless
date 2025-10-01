import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * WeekInput
 *
 * Description:
 * Accepts week and year values (e.g., "2025-W25"). Commonly used for scheduling systems, timesheets, or planning forms.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — browser autofill behavior
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — toggles visibility of the element (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier for the input (inherited from GlobalAttributes)
 * - `name: string` — used as a key when submitting form data
 * - `required?: boolean` — indicates the field must be filled
 * - `type: 'week'` — identifies this as a week picker input
 * - `value?: string` — default or current value in ISO week format (e.g., '2025-W25')
 *
 * Syntax:
 * ```ts
 * export interface WeekInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-controls' | 'aria-current' | 'aria-expanded' | 'aria-pressed'> {
 *   type: 'week';
 *   name: string;
 *   value?: string;
 *   required?: boolean;
 *   autoComplete?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: WeekInput = {
 *   type: 'week',
 *   name: 'workWeek',
 *   value: '2025-W25',
 *   required: true
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, WeekInput] = [
 *   {
 *     type: 'text',
 *     name: 'projectName',
 *     placeholder: 'Enter your project name',
 *     required: true
 *   },
 *   {
 *     type: 'week',
 *     name: 'workWeek',
 *     value: '2025-W25',
 *     required: true
 *   }
 * ];
 * ```
 */
export interface WeekInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-controls' | 'aria-current' | 'aria-expanded' | 'aria-pressed'> {
  type: 'week';
  name: string;
  value?: string;
  required?: boolean;
  autoComplete?: string;
}

export default WeekInput
