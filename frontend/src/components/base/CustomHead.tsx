import React from 'react';
import Head from 'next/head';
import FileHash from "@/utils/FileHash";
import { SpeedInsights } from "@vercel/speed-insights/next"

interface CustomHeadProps {
  title?: string,
  description?: string,
  children?: React.ReactNode,
}

const CustomHead = ({ title, description, children }: CustomHeadProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <link rel='preload' href="/style.css" as="style" integrity={FileHash(`style.css`)} />
      {children}

      <SpeedInsights />
    </Head>
  </>
);

export default CustomHead;