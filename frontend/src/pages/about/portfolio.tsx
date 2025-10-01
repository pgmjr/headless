import Layout from '@/components/Layout';
import CustomHead from '@/components/base/CustomHead';
import ProjectCard from '@/components/widgets/ProjectCard';

const Portfolio = () => {
  return (
    <Layout>
      <CustomHead title="Portfolio | Jhun's Site" description="Explore past work and achievements" />
      <div className="p-6 space-y-10">
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
        <p className=" max-w-2xl mb-6">
          Here are a few examples of our most impactful projects. These case studies showcase our ability to deliver performance, accessibility, and user engagement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard title="E-commerce Platform" description="Built a scalable and secure e-commerce platform using Next.js, Stripe, and WooCommerce API." />
          <ProjectCard title="Corporate Site Redesign" description="Redesigned a legacy corporate site for improved performance, UX, and SEO using Headless WordPress." />
          <ProjectCard title="Custom CRM Solution" description="Developed a tailored CRM dashboard with Laravel API and Next.js frontend." />
        </div>
      </div>
    </Layout>
  );
}

export default Portfolio;
