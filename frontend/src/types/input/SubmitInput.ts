import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * Interface Name: `SubmitInput`
 *
 * Description:
 * Represents an HTML input element of type `"submit"`. Used to submit the form data to the server.
 *
 * Parameters:
 *
 * **Defined:**
 * - `type: 'submit'` — identifies this input as a submit button
 * - `value?: string` — label displayed on the button
 * - `formAction?: string` — override form submission URL
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
 * interface SubmitInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'submit';
 *   value?: string;
 *   formAction?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * const inputAttributes: SubmitInput = {
 *   type: 'submit',
 *   value: 'Save',
 *   'aria-label': 'Submit the form'
 * };
 * ```
 */
export interface SubmitInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'submit';
  value?: string;
  formAction?: string;
}

export default SubmitInput
