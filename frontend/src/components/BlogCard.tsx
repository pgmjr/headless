import Link from 'next/link';

type Blog = {
  slug: string;
  title: string;
  summary: string;
};

const BlogCard = ({ slug, title, summary }: Blog) => (
  <div className="border rounded p-4 shadow hover:shadow-md transition">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-4 ">{summary}</p>
    <Link href={`/blogs/${slug}`} className="text-blue-500 underline">
      Read more →
    </Link>
  </div>
);

export default BlogCard;