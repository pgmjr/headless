import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { prot, host } from '@/config';

export async function fetchArticles() {
  try {
    const res = await fetch(`${prot}://${host}/articles`);
    if (!res.ok) throw new Error('Failed to fetch articles');
    return await res.json();
  } catch (error) {
    console.error('[fetchArticles] Error:', error);
    return 'Error fetching articles';
  }
}

export async function fetchArticleBySlug(slug: string | string[] | undefined) {
  try {
    const res = await fetch(`${prot}://${host}/articles/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch article');
    return await res.json();
  } catch (error) {
    console.error('[fetchArticleBySlug] Error:', error);
    return 'Error fetching article';
  }
}

export async function getSSRProps(context: GetServerSidePropsContext) {
  const data = await fetchArticles();
  return { props: { data } };
}

export async function getSSGProps(context: GetStaticPropsContext) {
  const slug = context?.params?.slug;
  const data = await fetchArticleBySlug(slug);

  if (data) return {
    props: { data },
    revalidate: 60,
  };

  return {};
}

