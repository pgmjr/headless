import Layout from '@/components/layouts/page/FullWidth';
import CustomHead from '@/components/base/CustomHead';
import Card from '@/components/widgets/Card';
import Link from 'next/link';
import Data from '@/data/index.json';
// import { Fetcher } from '@/utils/fetcher';
// import { stringify } from 'querystring';
// import { fetchArticleBySlug } from '@/data/article';


const ProductsPage = () => {
  type ProductItems = {
    slug: string,
    title: string,
    excerpt: string,
    description: string,
    content: string
  }

  type ProductList = ProductItems[];

  const data = JSON.parse(JSON.stringify(Data.products)) || [];

  const seo: {
    title: string,
    description: string
  } = data?.seo || [];

  const content: {
    title: string,
    description: string
  } = data?.content || [];

  const products: ProductList = data?.list || [];
  const category: string = "products";


  return (
    <Layout>
      <CustomHead title={seo?.title || 'Products'} description={seo?.description || ''} />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">{content?.title}</h1>
        <p className="mb-4 ">{content?.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: ProductItems) => (
            <Link key={product.slug} href={`/${category}/${product.slug}`} className='group'>
              <Card slug={product.slug} title={product.title} description={product.description} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ProductsPage;
