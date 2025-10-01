import Head from 'next/head';

type SeoProps = {
  title: string;
  description: string;
};

const CustomHead = ({ title, description }: SeoProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="UTF-8" />
    <link href="/styles.css" />
  </Head>
);

export default CustomHead;
