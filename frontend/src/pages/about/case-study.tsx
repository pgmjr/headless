import Layout from '@/components/layouts/page/Boxed';
import CustomHead from '@/components/base/CustomHead';

const CaseStudy = () => {
  return (
    <Layout>
      <CustomHead title="Case Studies | Jhun's Site" description="In-depth looks into our successful projects" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Case Studies</h1>
        <div className="space-y-4">
          <div className="bg-white border p-4 rounded shadow-sm">
            <h2 className="font-semibold">E-Commerce Conversion Optimization</h2>
            <p className="text-sm ">How we increased revenue by 40% in 6 months.</p>
          </div>
          <div className="bg-white border p-4 rounded shadow-sm">
            <h2 className="font-semibold">SEO for SaaS</h2>
            <p className="text-sm ">Achieving page 1 rankings in under 3 months.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CaseStudy;
