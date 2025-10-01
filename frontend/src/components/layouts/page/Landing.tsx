import { ReactNode } from 'react';

const Landing = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <div className='flex flex-row'>
      <main className='flex-1 container mx-auto px-4 py-6'>{children}</main>
      <aside className='flex flex-col w-full max-w-[300px] h-full min-h-screen'>Sidebar</aside>
    </div>
  </div>
);

export default Landing;