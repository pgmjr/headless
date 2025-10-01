import React from 'react';

interface TextBlockProps {
  children: React.ReactNode;
}

const TextBlock: React.FC<TextBlockProps> = ({ children }) => (
  <div className="prose prose-lg dark:prose-invert mx-auto my-6 text-black dark:text-white">
    {children}
  </div>
);

export default TextBlock;
