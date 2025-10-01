import ColumnProps from "./ColumnsProps";

interface ColumnSectionProps {
  /**
   * Accepts either:
   * - Named children: `{ left, right, center }` (for 2–3 columns)
   * - An array of React nodes (for 4+ dynamic columns)
   */
  children: ColumnProps | React.ReactNode[];

  /**
   * Number of columns to display. Controls the Tailwind `md:grid-cols-X` class.
   * - Default: `2`
   * - Common values: `2`, `3`, `4`, etc.
   */
  columns?: number;

  /**
   * Tailwind utility classes or custom className to override styles.
   * You can fully control the grid, gap, or responsive layout using `className`.
   */
  className?: string;
}

export default ColumnSectionProps;
