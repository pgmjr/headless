import FileHash from "@/utils/FileHash";

const Footer = () => (
  <>
    <footer className="dark:bg-irishcoffee text-white text-center p-4">
      <p>© {new Date().getFullYear()} Jhun. All rights reserved.</p>
    </footer>
    <script id="hot-fix" src="/script.js" defer integrity={FileHash(`script.js`)} />
  </>
);

export default Footer;
