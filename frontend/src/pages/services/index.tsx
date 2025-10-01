import Layout from '@/components/layouts/page/FullWidth';
import CustomHead from '@/components/base/CustomHead';
import Card from '@/components/widgets/Card';
import Link from 'next/link';
import Data from '@/data/index.json';
// import { Fetcher } from '@/utils/fetcher';
// import { stringify } from 'querystring';
// import { fetchArticleBySlug } from '@/data/article';

const ServicesPage = () => {
  type ServicesItems = {
    slug: string,
    title: string,
    excerpt: string,
    description: string,
    content: string
  }

  type ServicesList = ServicesItems[];

  const data = JSON.parse(JSON.stringify(Data.services)) || [];

  const seo: {
    title: string,
    description: string
  } = data?.seo || [];

  const content: {
    title: string,
    description: string
  } = data?.content || [];

  const services: ServicesList = data?.list || [];
  const category: string = "services";

  return (
    <Layout>
      <CustomHead title={seo?.title || 'Services'} description={seo?.description || ''} />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">{content?.title}</h1>
        <p className="mb-4 ">{content?.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: ServicesItems) => (
            <Link key={service.slug} href={`/${category}/${service.slug}`} className='group'>
              <Card slug={service.slug} title={service.title} description={service.description} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ServicesPage;
