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
      <ul className='m-0 p-0 [list-style:none]'>
        <li className='relative'>
          <input
            type="radio"
            name="accordion"
            className="peer w-full h-full absolute top-0 left-0 z-50 [opacity:0]"
          />
          <h3 className="w-full relative text-left px-4 py-2 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none m-0 text-[1.25rem] z-10">
            {question}
          </h3>
          <div className="h-0 my-[-16px] p-4 overflow-y-hidden [opacity:0] [transition:0.5s_ease-in-out] [transition-property:margin,_height,_opacity] px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 [opacity-0] peer-checked:mx-[0] peer-checked:m-0 peer-checked:h-auto peer-checked:[opacity:100] z-0">
            {answer}
          </div>
        </li>
      </ul>
    </div>
  );
};

{/*
  <div className="border border-gray-200 dark:border-gray-700 rounded">
  <div className="w-full relative text-left px-4 py-2 bg-gray-50 dark:bg-gray-900 text-black dark:text-white focus:outline-none">
    <input type="radio"
      onClick={() => setOpen(!open)}
      className='w-full h-full absolute top-[0] left-[0] [opacity:0]'
    />{question}
  </div>
  {open && (
    <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
      {answer}
    </div>
  )}
</div>
*/}

export default Accordion;
