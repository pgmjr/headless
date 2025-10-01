import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * Interface Name: `ResetInput`
 *
 * Description:
 * Represents an HTML input element of type `"reset"`. Resets all fields in the parent form to their default values.
 *
 * Parameters:
 *
 * **Defined:**
 * - `type: 'reset'` — identifies this input as a reset button
 * - `value?: string` — label displayed on the button
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
 * interface ResetInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'reset';
 *   value?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * const inputAttributes: ResetInput = {
 *   type: 'reset',
 *   value: 'Clear Form',
 *   'aria-label': 'Reset the form'
 * };
 * ```
 */
export interface ResetInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'reset';
  value?: string;
}

export default ResetInput
