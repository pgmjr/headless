import React from 'react';
type SectionBlockProps = React.PropsWithChildren<{
  className?: string;
}>;


/**
 * 🧩 Component: SectionBlock
 *
 * A flexible layout wrapper component using the native <section> element.
 * Useful for structuring modular content blocks within a page — such as hero banners,
 * content splits, or standalone sections like FAQs, sliders, or feature blocks.
 *
 * ✅ Renders a <section> tag
 * ✅ Accepts children elements
 * ✅ Allows custom class names for styling and layout control
 *
 * 💡 Ideal for:
 * - Grouping related content blocks
 * - Creating semantic, accessible page sections
 * - Applying layout constraints (padding, margin, background, etc.)
 *
 * ---
 *
 * 🧾 Props:
 * @param {React.ReactNode} children – The content inside the section.
 * @param {string} [className] – Optional Tailwind or custom class names for layout/styling.
 *
 * ---
 *
 * 🧪 Syntax:
 * ```tsx
 * <SectionBlock className="bg-white py-8">
 *   <YourComponent />
 * </SectionBlock>
 * ```
 *
 * 📌 Usage Example:
 * ```tsx
 * import SectionBlock from '@/components/blocks/SectionBlock';
 *
 * const HomePage = () => (
 *   <SectionBlock className="bg-white dark:bg-gray-900 px-4 py-12">
 *     <h2 className="text-xl font-bold text-black dark:text-white">Welcome!</h2>
 *   </SectionBlock>
 * );
 * ```
 */
const SectionBlock = ({ children, className = '' }: SectionBlockProps) => {
  return <section className={className}>{children}</section>;
};

export default SectionBlock;
