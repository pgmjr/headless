import React, { useState } from 'react';

interface AccordionItem { question: string; answer: React.ReactNode }
interface AccordionProps { items: AccordionItem[] }

const Accordion: React.FC<AccordionProps> = ({ items }) => (
  <div className="space-y-4 my-6">
    {items.map((item, i) => (
      <AccordionItemComp key={i} question={item.question} answer={item.answer} />
    ))}
  </div>
);

const AccordionItemComp: React.FC<AccordionItem> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none"
      >
        {question}
      </button>
      {open && (
        <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Accordion;
