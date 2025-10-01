import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * Interface Name: `ImageInput`
 *
 * Description:
 * Represents an HTML input element of type `"image"`. This renders an image as a submit button and is used to submit forms with visual cues.
 *
 * Parameters:
 *
 * **Defined:**
 * - `type: 'image'` — identifies this input as an image submit button
 * - `name?: string` — optional key used during form submission
 * - `src: string` — URL of the image
 * - `alt: string` — alternative text for accessibility
 * - `width?: number | string` — image width
 * - `height?: number | string` — image height
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
 * interface ImageInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'image';
 *   src: string;
 *   alt: string;
 *   name?: string;
 *   width?: number | string;
 *   height?: number | string;
 *   formAction?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * const inputAttributes: ImageInput = {
 *   type: 'image',
 *   src: '/submit.png',
 *   alt: 'Submit form',
 *   name: 'submitBtn',
 *   'aria-label': 'Submit using image'
 * };
 * ```
 */
export interface ImageInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'image';
  src: string;
  alt: string;
  name?: string;
  width?: number | string;
  height?: number | string;
  formAction?: string;
}

export default ImageInput
