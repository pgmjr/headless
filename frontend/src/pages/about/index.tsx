import Layout from '@/components/layouts/page/FullWidth';
import CustomHead from '@/components/base/CustomHead';
import content from '@/data/index.json';


const AboutPage = () => {
  const page = content.about;

  return (
    <Layout>
      <CustomHead title={page?.seo?.title || 'About'} description={page?.seo?.description || ''} />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold  mb-4">{page?.content?.title}</h1>
        <p className="text-lg  mb-6">{page?.content?.intro}</p>

        {page?.content?.sections?.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold  mb-2">{section.title}</h2>
            <p className="">{section.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;