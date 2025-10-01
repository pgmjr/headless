import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * Interface Name: `HiddenInput`
 *
 * Description:
 * Represents an HTML input element of type `"hidden"`. This is used to store data in a form that should not be visible or editable by the user.
 *
 * Parameters:
 *
 * **Defined:**
 * - `type: 'hidden'` — identifies this input as hidden
 * - `name: string` — key name used during form submission
 * - `value?: string` — value to submit
 *
 * **Inherited from GlobalAttributes:**
 * - `id?: string`
 *
 * **Inherited from AriaAttributes:**
 * - None (ARIA attributes are typically not applicable for hidden inputs)
 *
 * Syntax:
 * ```ts
 * interface HiddenInput extends Omit<GlobalAttributes, 'lang' | 'title'> {
 *   type: 'hidden';
 *   name: string;
 *   value?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * const inputAttributes: HiddenInput = {
 *   type: 'hidden',
 *   name: 'sessionId',
 *   value: 'abc123'
 * };
 * ```
 */
export interface HiddenInput extends Omit<GlobalAttributes, 'lang' | 'title'> {
  type: 'hidden';
  name: string;
  value?: string;
}

export default HiddenInput
