// pages/index.tsx
import Layout from '@/components/Layout';
import CustomHead from '@/components/base/CustomHead';
import content from '@/data/index.json';
import HeroBannerSlider from '@/components/media/HeroBannerSlider';

const HomePage = () => {
  // const page = JSON.parse(JSON.stringify(content.home)) || [];
  const page = content.home || [];

  return (
    <Layout>
      <CustomHead title={page?.seo?.title || 'Home'} description={page?.seo?.description || ''} />
      <div className="p-6 max-w-7xl mx-auto">
        {page.heroSlider?.items && (
          <HeroBannerSlider slides={page.heroSlider.items} />
        )}
      </div>
      <div className="p-6">
        <h1 className="text-4xl font-extrabold  mb-4">{page?.content?.title}</h1>
        <p className="text-lg  max-w-2xl">
          {page?.content?.description}
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">{page?.highlights?.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {page?.highlights?.items?.map((item: { title: string, description: string }, i: number) => (
              <div key={i} className="bg-white shadow-md rounded p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm ">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">{page?.featuredProducts?.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page?.featuredProducts?.items?.map((item: { title: string, description: string }, i: number) => (
              <div key={i} className="bg-white rounded shadow p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm ">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">{page?.popularServices?.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page?.popularServices?.items?.map((item: { title: string, description: string }, i: number) => (
              <div key={i} className="bg-white rounded shadow p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm ">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
