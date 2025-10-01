import { ReactNode } from 'react';
import Header from '@/components/layouts/base/Header';
import Footer from '@/components/layouts/base/Footer';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
    <Footer />
  </div>
);

export default Layout;