/**
 * whichValue.ts
 * 
 * Utility to select between two optional string values with fallback.
 * 
 * @version 1.0.0
 * @author PGMJR
 * @github https://github.com/pgmjr
 * @created 2025-07-22
 * @license MIT
 * 
 * Returns the primary string if non-empty and defined,
 * otherwise returns the fallback if valid,
 * otherwise returns empty string.
 * 
 * @param value - The primary string value to use.
 * @param fallback - The fallback string value to use if primary is empty or undefined.
 * @returns The selected string or empty string.
 */
export const WhichValue = (
  value?: string | undefined,
  fallback?: string | undefined
): string => {
  return value !== '' && value !== undefined
    ? value
    : fallback !== '' && fallback !== undefined
      ? fallback
      : '';
};

export default WhichValue;
