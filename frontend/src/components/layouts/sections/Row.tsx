import React from 'react';
import RowProps from '@/types/components/RowProps';
import RowSectionProps from '@/types/components/RowSectionProps';

/**
 * 🧩 Component: RowSection
 *
 * A flexible vertical layout component for splitting content into stacked rows.
 * Useful for layered content sections, feature groupings, or TOC + intro + body splits.
 *
 * ----------------------------------------
 * ✅ Ideal For:
 * - Two or three stacked content blocks
 * - Dynamic row-based content (e.g. stacked cards)
 * - Section-level layout blocks inside a page
 *
 * ----------------------------------------
 * 🧾 Props:
 * @param {RowProps | ReactNode[]} children - Named (top/middle/bottom) or array of nodes
 * @param {string} [className] - Optional Tailwind or custom class overrides
 *
 * ----------------------------------------
 * 🧪 Syntax:
 * <RowSection className="space-y-6">
 *   {{ top: <Intro />, bottom: <Content /> }}
 * </RowSection>
 *
 * <RowSection className="space-y-4">
 *   {[<Row1 />, <Row2 />, <Row3 />]}
 * </RowSection>
 */
const Row: React.FC<RowSectionProps> = ({
  children,
  className = '',
}) => {
  // Determine if using named children
  const isNamed =
    !Array.isArray(children) &&
    typeof children === 'object' &&
    (children as RowProps).top !== undefined;

  return (
    <section className={className}>
      {isNamed
        ? [
          (children as RowProps).top,
          (children as RowProps).middle,
          (children as RowProps).bottom,
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

export default Row;
