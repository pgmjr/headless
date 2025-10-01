type ElemProps<T extends keyof JSX.IntrinsicElements = 'div'> = {
  /**
   * Optional element type to render (e.g. 'section', 'article', 'aside', etc.).
   * Defaults to 'div' if not provided.
   */
  as?: T;

  /**
   * Utility-first or custom class names. Typically Tailwind classes.
   */
  className?: string;

  /**
   * The child elements or nodes inside the tag.
   */
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export default ElemProps;