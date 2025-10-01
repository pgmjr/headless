import { ReactNode } from 'react';
import { FlatStrObj } from '@/types/StringObjects';
import WhichValue from '@/utils/WhichValue';
import Header from '@/components/layouts/base/Header';
import Footer from '@/components/layouts/base/Footer';

interface LayoutProps {
  children: ReactNode;
  ClassNames: FlatStrObj;
}

const Layout = ({ children, ClassNames }: LayoutProps) => {

  const cnLeftAside: string = WhichValue(
    ClassNames.left,
    'flex flex-col w-full max-w-[300px] h-full min-h-screen'
  );

  const cnMain: string = WhichValue(
    ClassNames.main,
    'flex-1 container mx-auto px-4 py-6'
  );

  const cnAside: string = WhichValue(
    ClassNames.main,
    'flex flex-col w-full max-w-[300px] h-full min-h-screen'
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className='flex flex-row'>
        <main className={cnMain}>{children}</main>
        <aside className={cnAside}>Sidebar</aside>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;