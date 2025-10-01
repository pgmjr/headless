// pages/widgets/index.tsx
import Layout from '@/components/layouts/page/BoxedSidebar';
import Head from '@/components/base/CustomHead';
import content from '@/data/index.json';
import { useState } from 'react';

export default function WidgetPage() {
  const page = JSON.parse(JSON.stringify(content.widgets));

  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  return (
    <Layout>
      <Head title={page.seo.title} description={page.seo.description} />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold  mb-2">{page.content.title}</h1>
        <p className=" mb-6">{page.content.description}</p>

        {/* Alert Box */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Alert Box</h2>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded shadow">
            {page.list[0].message}
          </div>
        </section>

        {/* Card */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Card</h2>
          <div className="bg-white rounded shadow p-4 border">
            <h3 className="text-lg font-bold mb-1">{page.list[1].title}</h3>
            <p className="">{page.list[1].description}</p>
          </div>
        </section>

        {/* Accordion */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Accordion</h2>
          <div className="divide-y divide-gray-300">
            {page.list[2].items.map((item: { question: string; answer: string }, i: number) => (
              <div key={i} className="py-2">
                <button
                  className="w-full text-left font-semibold text-blue-700"
                  onClick={() => setAccordionOpen(accordionOpen === i ? null : i)}
                >
                  {item.question}
                </button>
                {accordionOpen === i && (
                  <p className=" mt-1">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Testimonial</h2>
          <blockquote className="bg-gray-100 p-4 rounded shadow italic border-l-4 border-blue-500">
            <p>{page.list[3].quote}</p>
            <footer className="mt-2 text-sm ">– {page.list[3].author}</footer>
          </blockquote>
        </section>
      </div>
    </Layout>
  );
}
