import { useRouter } from 'next/router';
import Layout from '@/components/layouts/page/BoxedSidebar';
import CustomHead from '@/components/base/CustomHead';
import useSWR from 'swr';
import content from '@/data/index.json';
import { Fetcher } from '@/utils/fetcher';
import { wpOrigin, apiOrigin } from '@/config';

const ProductSinglePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const apiURL = `${apiOrigin}/?page=products-single&slug=${slug}`
  const wpURL = `${wpOrigin}/wp-json/wp/v2/posts?slug=${slug}`

  const laravel: any = useSWR(
    () => (slug ? apiURL : undefined),
    Fetcher
  );

  const wp: any = useSWR(
    () => (slug ? wpURL : undefined),
    Fetcher
  );

  const json = content.products?.list?.find((item: any) => item.slug === slug);

  const data =
    laravel?.product ||
    (Array.isArray(wp) && wp.length
      ? {
        title: wp[0].title.rendered,
        excerpt: wp[0].excerpt.rendered.replace(/<[^>]+>/g, ''),
        content: wp[0].content.rendered.replace(/<[^>]+>/g, '')
      }
      : null) ||
    json;

  if (!data) return <Layout><p className="p-4">Loading or no product found.</p></Layout>;

  return (
    <Layout>
      <CustomHead title={`${data.title} | Product`} description={data.excerpt} />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className=" mb-4">{data.excerpt}</p>
        <div className="prose prose-lg max-w-none " dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    </Layout>
  );
}

export default ProductSinglePage;