import Link from 'next/link';
import content from '@/data/index.json';

const menu = JSON.parse(JSON.stringify(content.menu)) || [];

const Header = () => (
  <header className="text-white p-4 z-[100000]">
    <nav className="flex gap-4 flex-row justify-end">
      {menu.primary.items.map((items: { link: string, label: string }) => (
        <Link href={items.link} key={items.label} className='text-white focus:text-[#f0aa70] hover:text-[#f0aa70]'>{items.label}</Link>
      ))}
    </nav>
  </header>
);

export default Header;
