import { ReactNode } from 'react';
import Header from '@/components/layouts/base/Header';
import Footer from '@/components/layouts/base/Footer';
import { WhichValue } from '@/utils';
import { FlatStrObj } from '@/types/StringObjects';

interface LayoutProps {
  children: ReactNode;
  ClassNames?: FlatStrObj | undefined;
}

const FullWidth = ({ children, ClassNames }: LayoutProps) => {
  const layoutContainer = WhichValue(ClassNames?.container, 'flex flex-col min-h-screen');
  const layoutMain = WhichValue(ClassNames?.main, 'flex-1 container mx-auto px-4 py-6 dark:bg-iroko');

  return (
    <div className={layoutContainer}>
      <Header />
      <main className={layoutMain}>{children}</main>
      <Footer />
    </div>
  );
};

export default FullWidth;