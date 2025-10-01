import { useRouter } from 'next/router';
import Layout from '@/components/layouts/page/BoxedSidebar';
import CustomHead from '@/components/base/CustomHead';
import useSWR from 'swr';
import content from '@/data/index.json';
import { Fetcher } from '@/utils/fetcher';
import Loader from '@/components/base/Loader';
import { wpOrigin, apiOrigin } from '@/config';
import { parseHTML } from '@/utils';

const BlogsSinglePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const apiURL = `${apiOrigin}/?page=blogs-single&slug=${slug}`
  const wpURL = `${wpOrigin}/wp-json/wp/v2/posts?slug=${slug}`

  // const laravel: any = Fetcher(apiURL) || null;

  const wp: any = Fetcher(wpURL);
  const json = content.blogs?.list?.find((item: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    description: string;
    content: string;
  }) => item.slug === slug);


  const data =
    // laravel?.article ||
    (Array.isArray(wp) && wp.length
      ? {
        title: wp[0].title.rendered,
        excerpt: wp[0].excerpt.rendered.replace(/<[^>]+>/g, ''),
        content: parseHTML(wp[0].content.rendered)
      }
      : json);

  console.log(data);

  if (!data) return (
    <Loader />
  )

  return (
    <Layout>
      <CustomHead title={`${data.title} | blogs`} description={data.excerpt} />
      <div className="mx-[0] p-6 bg-irishcoffee">
        <header>
          <h1 className="text-3xl text-wheatfield font-bold mb-4">{data.title}</h1>
        </header>
        <div className="prose prose-lg max-w-none">{data.content}</div>
      </div>
    </Layout >
  );
}

export default BlogsSinglePage;
