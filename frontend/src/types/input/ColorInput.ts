import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * ColorInput
 *
 * Description:
 * Represents an HTML input element of type `"color"`. Allows users to select a color value using a color picker.
 *
 * Parameters:
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — determines element visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier for the input element (inherited from GlobalAttributes)
 * - `name: string` — key name used during form submission
 * - `required?: boolean` — indicates if a color value must be selected before submission
 * - `type: 'color'` — identifies this input as a color picker
 * - `value?: string` — the color value in hexadecimal format (e.g., "#ff0000")
 *
 * Syntax:
 * ```ts
 * export interface ColorInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'color';
 *   name: string;
 *   required?: boolean;
 *   value?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: ColorInput = {
 *   type: 'color',
 *   name: 'themeColor',
 *   value: '#ffcc00',
 *   'aria-label': 'Choose theme color'
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, ColorInput] = [
 *   {
 *     type: 'text',
 *     id: 'username',
 *     name: 'username',
 *     placeholder: 'Enter username',
 *     required: true
 *   },
 *   {
 *     type: 'color',
 *     name: 'themeColor',
 *     value: '#ffcc00',
 *     'aria-label': 'Choose theme color'
 *   }
 * ];
 * ```
 */
export interface ColorInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'color';
  name: string;
  required?: boolean;
  value?: string;
}

export default ColorInput
