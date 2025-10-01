import React from 'react';

interface DocSectionProps {
  title: string;
  children: React.ReactNode;
}

const DocsSection: React.FC<DocSectionProps> = ({ title, children }) => (
  <section className="my-8">
    <h2 className="text-2xl font-bold text-black dark:text-white mb-4">{title}</h2>
    <div className="space-y-6 text-gray-800 dark:text-gray-200">
      {children}
    </div>
  </section>
);

export default DocsSection;
