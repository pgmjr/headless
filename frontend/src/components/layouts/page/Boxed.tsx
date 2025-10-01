import { ReactNode } from 'react';
import { WhichValue } from '@/utils';
import { FlatStrObj, MixedStrObjArr } from '@/types/StringObjects';
import Header from '@/components/layouts/base/Header';
import Footer from '@/components/layouts/base/Footer';

interface LayoutProps {
  title?: string,
  description?: string,
  children?: ReactNode,
  ClassNames?: FlatStrObj
}

interface AsideClassNamesProps {
  container?: string,
  wrapper: string,
  panel: Array<Record<string, string>>
}

const Layout = ({ title, description, children, ClassNames }: LayoutProps) => {
  const layoutContainer = WhichValue(ClassNames?.container, 'm-0 mx-auto p-0 px-5 gap-5 w-full max-w-[1440px] flex flex-row items-stretch');
  const layoutMain = WhichValue(ClassNames?.main, 'm-0 p-0 pb-10 gap-5 w-full flex flex-1 flex-col flex-nowrap justify-start items-stretch');

  return (
    <div className="flex flex-col min-h-screen gap-5">
      <Header />
      <div className='mx-[auto] my-0 p-0 px-5 w-full max-w-[1440px] block'>
        <h1 className="text-4xl font-bold  mb-4">{title}</h1>
        <p className="mb-8">{description}</p>
      </div>
      <div className={layoutContainer}>
        <main className={layoutMain}>
          {children}
        </main>
      </div>
      <Footer />
    </div >
  );
};

export const Boxed = ({ title, description, children, ClassNames }: LayoutProps) => {
  return <Layout title={title} description={description} ClassNames={ClassNames}> {children} </Layout>
};

export default Layout;