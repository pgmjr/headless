// components/GridBlock.tsx
import React from 'react';

const GridBlock = ({ children }: { children: React.ReactNode }) => {
  const blocks = React.Children.toArray(children);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blocks.map((block, idx) => (
        <div key={idx}>{block}</div>
      ))}
    </div>
  );
};
