import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * FileInput
 *
 * Description:
 * Represents an HTML input element of type `"file"`. Enables file uploads in forms, including support for multiple file selection and specific MIME type filtering.
 *
 * Parameters:
 * - `accept?: string` — comma-separated list of accepted file types (e.g., ".jpg, .png, application/pdf")
 * - `aria-label?: string` — screen reader label (inherited from AriaAttributes)
 * - `autoComplete?: string` — suggests filename values (browser dependent)
 * - `className?: string` — CSS class for styling (inherited from GlobalAttributes)
 * - `hidden?: boolean` — determines element visibility (inherited from GlobalAttributes)
 * - `id?: string` — unique identifier for the input element (inherited from GlobalAttributes)
 * - `multiple?: boolean` — allows selecting more than one file
 * - `name: string` — key name used during form submission
 * - `required?: boolean` — marks the field as mandatory
 * - `type: 'file'` — identifies this input as a file input field
 *
 * Syntax:
 * ```ts
 * export interface FileInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'file';
 *   name: string;
 *   required?: boolean;
 *   multiple?: boolean;
 *   accept?: string;
 *   autoComplete?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * // Single input usage
 * const inputAttributes: FileInput = {
 *   type: 'file',
 *   name: 'upload',
 *   accept: '.pdf,.docx',
 *   required: true,
 *   'aria-label': 'Upload document'
 * };
 *
 * // Multiple input usage
 * const formInputs: [TextInput, FileInput] = [
 *   {
 *     type: 'text',
 *     id: 'documentName',
 *     name: 'docName',
 *     placeholder: 'Enter document name',
 *     required: true
 *   },
 *   {
 *     type: 'file',
 *     name: 'upload',
 *     accept: '.pdf,.docx',
 *     required: true,
 *     'aria-label': 'Upload document'
 *   }
 * ];
 * ```
 */
export interface FileInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'file';
  name: string;
  required?: boolean;
  multiple?: boolean;
  accept?: string;
  autoComplete?: string;
}

export default FileInput
