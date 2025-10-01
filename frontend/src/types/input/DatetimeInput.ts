import { GlobalAttributes } from '../GlobalAttributes'
import { AriaAttributes } from '../AriaAttributes'

/**
 * Interface Name: `DatetimeInput`
 *
 * Description:
 * Represents an HTML input element of type`"datetime-local"`.This input enables users to select both a date and a time, optionally with constraints(e.g., min / max values).It supports form submission and native browser validation.
 *
 * Parameters:
 *
 * ** Defined:**
 * - `type: 'datetime-local'` — identifies this input as a date - time field
 * - `name: string` — key name used during form submission
 * - `required?: boolean` — marks the field as mandatory
 * - `min?: string` — minimum allowed datetime(in ISO format)
 * - `max?: string` — maximum allowed datetime(in ISO format)
 * - `step?: number | string` — legal intervals for values(in seconds)
 * - `autoComplete?: string` — suggests previous values(browser - dependent)
 * - `value?: string` — preset datetime value(ISO format)
 *
 * ** Inherited from GlobalAttributes:**
 * - `className?: string`
 * - `id?: string`
 * - `hidden?: boolean`
 *
 * ** Inherited from AriaAttributes:**
 * - `aria-label?: string`
 *
 * Syntax:
 * ```ts
 * interface DatetimeInput extends
 *   Omit<GlobalAttributes, 'lang' | 'title'>,
 *   Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
 *   type: 'datetime-local';
 *   name: string;
 *   required?: boolean;
 *   min?: string;
 *   max?: string;
 *   step?: number | string;
 *   autoComplete?: string;
 *   value?: string;
 * }
 * ```
 *
 * Usage:
 * ```ts
 * const inputAttributes: DatetimeInput = {
 *   type: 'datetime-local',
 *   name: 'appointmentTime',
 *   required: true,
 *   min: '2025-01-01T00:00',
 *   max: '2025-12-31T23:59',
 *   step: 60,
 *   'aria-label': 'Choose appointment date and time'
 * };
 * ```
 */
export interface DatetimeInput extends
  Omit<GlobalAttributes, 'lang' | 'title'>,
  Omit<AriaAttributes, 'aria-current' | 'aria-expanded' | 'aria-pressed' | 'aria-controls'> {
  type: 'datetime-local';
  name: string;
  required?: boolean;
  min?: string;
  max?: string;
  step?: number | string;
  autoComplete?: string;
  value?: string;
}

export default DatetimeInput
