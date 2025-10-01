import React from 'react';
import ColumnProps from '@/types/components/ColumnsProps';
import ColumnSectionProps from '@/types/components/ColumnSectionProps';

/**
 * 🧩 Component: ColumnSection
 *
 * A layout utility section for splitting inner content into horizontal columns.
 * Useful for table of contents + content pairs, multi-panel sections, or feature layouts.
 *
 * ----------------------------------------
 * ✅ Ideal For:
 * - 2-column or 3-column split layouts
 * - Dynamically generated content flex-column
 * - Reusable section blocks with layout flexibility
 *
 * ----------------------------------------
 * 🧾 Props:
 * @param {ColumnProps | ReactNode[]} children - Named (left/right/center) or array of nodes
 * @param {number} [columns=2] - Number of columns in layout
 * @param {string} [className] - Optional Tailwind or custom class overrides
 *
 * ----------------------------------------
 * 🧪 Syntax:
 * <ColumnSection columns={2} className="gap-6">
 *   {{ left: <Sidebar />, right: <Content /> }}
 * </ColumnSection>
 *
 * <ColumnSection columns={4} className="gap-4">
 *   {[<Block1 />, <Block2 />, <Block3 />, <Block4 />]}
 * </ColumnSection>
 */
const Column: React.FC<ColumnSectionProps> = ({
  children,
  columns = 2,
  className = 'mx-[20px] my-[0] gap-[20px] flex flex-col flex-nowrap justify-start items-start',
}) => {
  // Check if children use named slots (left, center, right)
  const isNamed =
    !Array.isArray(children) &&
    typeof children === 'object' &&
    (children as ColumnProps).left !== undefined;

  // Compose Tailwind grid classes
  const gridColsClass = `md:grid-cols-${columns}`;
  const layoutClass = `grid grid-cols-1 ${gridColsClass} ${className}`;

  return (
    <section className={layoutClass}>
      {isNamed
        ? [
          (children as ColumnProps).left,
          columns === 3 && (children as ColumnProps).center,
          (children as ColumnProps).right,
        ]
          .filter(Boolean)
          .map((child, index) => (
            <React.Fragment key={index}>{child}</React.Fragment>
          ))
        : (children as React.ReactNode[]).map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
    </section>
  );
};

export default Column;
