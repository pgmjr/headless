import React from 'react';
import ElemProps from '@/types/atom/ElemProps';

/**
 * ***Component: Elem (Polymorphic Element Constructor)***
 *
 * A layout-friendly React component that renders any valid HTML tag using the `as` prop.
 * Useful for creating flexible wrappers like sections, articles, navs, or layout blocks
 * without repeating semantic boilerplate.
 *
 * Also referred to as a "Polymorphic Component" in design systems.
 *
 * ----------------------------------------
 * ***Ideal For:***
 * - Section and layout wrappers (e.g. `<section">`, `<Elem as="a"rticle>`, `<Elem as="aside>`)
 * - Reusable surface or card containers
 * - Semantic flexibility in UI scaffolding
 * - Reducing the need for multiple wrapper components
 *
 * ----------------------------------------
 * ***Parameters:***
 * @param {keyof JSX.IntrinsicElements} [as='div'] - The HTML tag to render
 * @param {string} [className] - Optional utility classes (Tailwind-friendly)
 * @param {React.ReactNode} [children] - Child elements
 * @param {...props} props - Any additional valid DOM attributes for the specified tag
 *
 * ----------------------------------------
 * ***Syntax:***
 * <tag" className="your-classes {...otherProps}>
 *   {children}
 * </Elem>
 *
 * ----------------------------------------
 * ***Usage Examples:***
 *
 * <section className="p-8 bg-gray-100 dark:bg-gray-800">
 *   <article className="prose dark:prose-invert">
 *     {children}
 *   </Elem>
 * </Elem>
 *
 * <nav" className="flex items-center gap-4 role="navigation">
 *   <Link href="/">Home</Link>
 *   <Link href="/about">About</Link>
 * </Elem>
 *
 * <aside className="w-64 p-4 bg-white shadow-md dark:bg-gray-900">
 *   <Sidebar />
 * </Elem>
 */
export const Elem = <T extends React.ElementType = 'div'>({
  as,
  className = '',
  children,
  ...rest
}: ElemProps<T>) => {
  const Tag = as || 'div';
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};
