import Layout from '@/components/layouts/page/FullWidth';
import CustomHead from '@/components/base/CustomHead';
import Accordion from '@/components/contents/Accordion'
import Card from '@/components/widgets/Card';
import Link from 'next/link';
import Data from '@/data/index.json';

const FAQsPage = () => {
  type FAQsItems = {
    question: string,
    answer: string,
  }

  type FAQsList = FAQsItems[];

  const data = JSON.parse(JSON.stringify(Data.faqs)) || [];

  const seo: {
    title: string,
    description: string
  } = data?.seo || [];

  const content: {
    title: string,
    description: string
  } = data?.content || [];

  const faqs: FAQsList = data?.items || [];
  const category: string = "faqs";

  return (
    <Layout>
      <CustomHead title={seo?.title || 'FAQs'} description={seo?.description || ''} />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">{content?.title}</h1>
        <p className="mb-4 ">{content?.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Accordion items={faqs} />
        </div>
      </div>
    </Layout>
  );
}

export default FAQsPage;