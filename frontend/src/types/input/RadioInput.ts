import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * Interface Name: `RadioInput`
 *
 * Description:
 * Represents an HTML input element of type `"radio"`. Used to allow the user to select a single option from a group.
 *
 * Parameters:
 *
 * **Defined:**
 * - `type: 'radio'` — identifies this input as a radio button
 * - `name: string` — form group name for grouping radio buttons
 * - `value: string` — value sent if this radio is selected
 * - `checked?: boolean` — whether this radio is initially selected
 * - `required?: boolean` — whether selection is required
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
 * interface RadioInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'radio';
 *   name: string;
 *   value: string;
 *   checked?: boolean;
 *   required?: boolean;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * const inputAttributes: RadioInput = {
 *   type: 'radio',
 *   name: 'gender',
 *   value: 'male',
 *   checked: true,
 *   'aria-label': 'Male'
 * };
 * ```
 */
export interface RadioInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'radio';
  name: string;
  value: string;
  checked?: boolean;
  required?: boolean;
}

export default RadioInput
