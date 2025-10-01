import { ReactNode } from 'react';
import { WhichValue } from '@/utils';
import { FlatStrObj, MixedStrObjArr } from '@/types/StringObjects';
import Header from '@/components/layouts/base/Header';
import Aside from '@/components/layouts/base/Aside';
import Column from '../sections/Column';
import Row from '../sections/Row';
import Footer from '@/components/layouts/base/Footer';
import Link from 'next/link';

interface AsideClassNamesProps {
  container?: string,
  wrapper?: string
}

interface LayoutClassnamesProps {
  container?: string,
  main?: string,
  title?: string,
  aside?: AsideClassNamesProps
}

interface LayoutProps {
  title?: string,
  description?: string,
  children?: ReactNode,
  AsideChildren?: ReactNode,
  ClassNames?: LayoutClassnamesProps
}

const Layout = ({ title, description, children, AsideChildren, ClassNames }: LayoutProps) => {
  const mainClass = WhichValue(
    ClassNames?.main,
    'flex flex-col justify-start items-center'
  );

  const containerClass = WhichValue(
    ClassNames?.container,
    'mx-[20px] my-[0] gap-[20px] flex'
  );

  const AsideClassnames: AsideClassNamesProps = {
    container: 'm-0 p-[10px] gap-4 w-full max-w-[300px] flex flex-col flex-nowrap justify-start items-center relative',
    wrapper: 'w-full border-[1px] border-solid border-[#FFF] p-[10px] block sticky top-[0] z-[1] h-[185.97px',
  }

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen gap-5">
        <main className={ClassNames?.main}>
          <Column className={ClassNames?.title}>
            <h1 className="text-4xl font-bold  mb-4">{title}</h1>
            <p className="mb-8">{description}</p>
          </Column>
          <Row className={containerClass}>
            {children}
            <Aside ClassNames={ClassNames?.aside}>
              {AsideChildren && (
                /* Override Sidebar Content */
                AsideChildren
              ) || (
                  /* Sidebar default for boxed layout */
                  <div className={ClassNames?.aside?.wrapper}>
                    <h3>Popular Article</h3>
                    <ul className='list-none'>
                      <li>
                        <Link href="#" className=''>
                          Article Title 1
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className=''>
                          Article Title 2
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className=''>
                          Article Title 3
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className=''>
                          Article Title 4
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
            </Aside>
          </Row>
        </main>
      </div >
      <Footer />
    </>
  );
};

export const BoxedSidebar = ({ title, description, children, ClassNames }: LayoutProps) => {
  return <Layout title={title} description={description} ClassNames={ClassNames}> {children} </Layout>
};

export default Layout;