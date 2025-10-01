/**
 * Input Interfaces Entry Point
 *
 * This module consolidates all strongly-typed input element interfaces, ensuring
 * consistent usage across forms, components, and reusable UI libraries in TypeScript-based
 * environments like React or Next.js.
 *
 * The exported interfaces strictly follow semantic HTML5 input types, extended with
 * accessibility, SEO, and security considerations.
 *
 * Features:
 * - Alphabetically ordered input interfaces
 * - Enforced typings for form field attributes
 * - Global and ARIA attribute support via inheritance
 * - IDE-friendly typings for input attributes
 * - Accessible via individual imports or through a unified namespace
 *
 * Usage:
 *
 * // Named import (recommended for tree-shaking and modularity)
 * import { EmailInput } from '@/types/inputs';
 *
 * const emailAttributes: EmailInput = {
 *   type: 'email',
 *   name: 'email',
 *   id: 'email',
 *   placeholder: 'Enter your email',
 *   required: true
 * };
 *
 * // Default namespace import (useful for dynamic input rendering)
 * import inputs from './inputs';
 *
 * const passwordAttributes: inputs.PasswordInput = {
 *   type: 'password',
 *   name: 'userPassword',
 *   placeholder: 'Enter password'
 * };
 */

// Named exports (tree-shakable)
export * from './ButtonInput';
export * from './CheckboxInput';
export * from './ColorInput';
export * from './DateInput';
export * from './DatetimeInput';
export * from './EmailInput';
export * from './FileInput';
export * from './HiddenInput';
export * from './ImageInput';
export * from './MonthInput';
export * from './NumberInput';
export * from './PasswordInput';
export * from './RadioInput';
export * from './RangeInput';
export * from './ResetInput';
export * from './SearchInput';
export * from './SubmitInput';
export * from './TelInput';
export * from './TextInput';
export * from './TimeInput';
export * from './UrlInput';
export * from './WeekInput';
