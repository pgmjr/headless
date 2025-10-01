// components/widgets/Accordion.tsx
'use client';
import { useState } from 'react';

const faqItems = [
  { question: 'What services do you offer?', answer: 'We provide full stack WordPress development, SEO, and eCommerce solutions.' },
  { question: 'How long does a typical project take?', answer: 'It depends on the scope, but most small projects take 2-4 weeks.' },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-xl mx-auto">
      {faqItems.map((item, i) => (
        <div key={i} className="border-b border-gray-200">
          <button
            className="w-full text-left p-4 font-semibold  hover:bg-gray-100"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.question}
          </button>
          {openIndex === i && (
            <div className="p-4 bg-gray-50">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
