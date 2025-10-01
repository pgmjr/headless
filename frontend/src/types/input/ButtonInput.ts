import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * ButtonInput
 *
 * Description:
 * Represents an HTML input element of type `"button"`. Used for triggering actions in client-side applications
 * without submitting forms. Often paired with JavaScript event handlers.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — determines element visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier for the input element (inherited from GlobalAttributes)
 * - `name: string` — key name used for identification or JavaScript access
 * - `text: string` — visible text label of the button (rendered via value attribute)
 * - `type: 'button'` — identifies this input as a button type
 * - `value?: string` — associated value (e.g., for event handling or fallback)
 *
 * Syntax:
 * ```ts
 * export interface ButtonInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'button';
 *   name: string;
 *   text: string;
 *   value?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: ButtonInput = {
 *   type: 'button',
 *   name: 'cancelAction',
 *   text: 'Cancel',
 *   'aria-label': 'Cancel action'
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, ButtonInput] = [
 *   {
 *     type: 'text',
 *     id: 'username',
 *     name: 'username',
 *     placeholder: 'Enter your username',
 *     required: true
 *   },
 *   {
 *     type: 'button',
 *     name: 'cancelAction',
 *     text: 'Cancel',
 *     'aria-label': 'Cancel action'
 *   }
 * ];
 * ```
 */
export interface ButtonInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'button';
  name: string;
  text: string;
  value?: string;
}

export default ButtonInput
