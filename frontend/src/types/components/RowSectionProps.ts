import RowProps from "./RowProps";

interface RowSectionProps {
  /**
   * Accepts either:
   * - Named children: `{ top, middle, bottom }` (for up to 3 rows)
   * - An array of React nodes (for dynamic row stacks)
   */
  children: RowProps | React.ReactNode[];

  /**
   * Optional utility classes to control spacing, layout, and responsive behavior.
   * You can use Tailwind classes here, e.g. `space-y-4`, `pb-10`, etc.
   */
  className?: string;
}

export default RowSectionProps;
