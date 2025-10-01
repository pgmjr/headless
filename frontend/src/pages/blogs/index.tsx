import { ReactNode } from 'react';
import Loader from '@/components/base/Loader';
import CustomHead from '@/components/base/CustomHead';
import Layout from '@/components/layouts/page/Boxed';
import Card from '@/components/widgets/BlogCard';
import Link from 'next/link';
import Data from '@/data/index.json';
import getLatestPostsList from '@/utils/getLatestPostsList';
import { FlatStrObj } from '@/types';

interface AsideClassNamesProps {
  container?: string,
  wrapper?: string,
  boxes?: Array<Record<string, string>>
}

interface LayoutClassnamesProps {
  container?: string,
  main?: string,
  aside?: AsideClassNamesProps
}

interface LayoutProps {
  title?: string,
  description?: string,
  children?: ReactNode,
  AsideChildren?: ReactNode,
  ClassNames?: LayoutClassnamesProps
}

interface BlogItems {
  slug: string,
  title: string,
  excerpt: string,
  description: string,
  content: string
}

interface LayoutProps {
  title?: string,
  description?: string,
  classNames?: FlatStrObj
}

type BlogList = BlogItems[];


const BlogPage = () => {

  const data = JSON.parse(JSON.stringify(Data.blogs)) || [];

  const seo: {
    title: string,
    description: string
  } = data?.seo || [];

  const content: {
    title: string,
    description: string
  } = data?.content || [];

  // const aricles: BlogList = data?.list || [];
  const category: string = "blogs";

  const postListData: any = getLatestPostsList({});
  console.log(postListData)
  if (!postListData) {
    return (
      <Loader />
    )
  };

  return (
    <Loader />
  )

  const title: string = seo.title;
  const description: string = seo.description;
  const aricles: BlogList | any = postListData || [];

  const LayoutClassnames: LayoutClassnamesProps = {
    container: 'm-0 mx-auto p-0 px-5 gap-5 w-full max-w-[1440px] flex flex-row items-stretch',
    main: 'm-0 p-0 pb-10 gap-5 w-full flex flex-1 flex-col flex-nowrap justify-start items-stretch',
    aside: {
      container: 'm-0 p-0 pb-10 gap-5 flex flex-col w-full max-w-[300px] h-full min-h-screen',
      wrapper: '',
      boxes: []
    }
  };

  return (
    <>
      <CustomHead title={title} description={description} />
      <Layout title={title} description={description}>
        <div className="grid gap-5">
          {aricles.map((article: BlogItems | any) => (
            article.status === 'publish' ?
              <Link key={article.slug} href={`/${category}/${article.slug}`} className='group hover:no-underline'>
                <Card slug={article.slug} title={article.title.rendered} description={article.excerpt.rendered} />
              </Link>
              : ''
          ))}
        </div>
      </Layout>
    </>
  );
};

export default BlogPage;
