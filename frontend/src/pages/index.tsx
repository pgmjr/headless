// pages/index.tsx
import { FlatStrObj } from '@/types/StringObjects';
import { HomePageContent } from '@/types/pages/home'
import FullWidth from '@/components/layouts/page/FullWidth';
import CustomHead from '@/components/base/CustomHead';
import content from '@/data/index.json';
import HeroBannerSlider from '@/components/media/HeroBannerSlider';
import { Fetcher } from '@/utils';
import { publicOrigin, apiOrigin, wpOrigin } from '@/config';

const HomePage = () => {
  // const page = JSON.parse(JSON.stringify(content.home)) || [];
  const apiURL = `${wpOrigin}/wp-json/wp/v2/pages`
  const page: HomePageContent = content.home || [];
  const ClassNames: FlatStrObj = {
    container: 'flex flex-col min-h-screen',
    main: 'flex-1 mx-auto'
  };

  return (
    <FullWidth ClassNames={ClassNames}>
      <CustomHead title={page?.seo?.title || 'Home'} description={page?.seo?.description || ''} />
      <div className="mx-auto">
        {page.heroSlider?.items && (
          <HeroBannerSlider slides={page.heroSlider.items} />
        )}
      </div>
      <div className="p-6">
        <h1 className="text-4xl font-extrabold text-[#F6EBD3] mb-4">{page?.content?.title}</h1>
        <p className="text-lg text-white-700 max-w-2xl">
          {page?.content?.description}
        </p>

        <section className="mt-10">
          <h2 className="text-2xl text-[#F6EBD3] font-semibold mb-2">{page?.highlights?.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {page?.highlights?.items?.map((item: { title: string, description: string }, i: number) => (
              <div key={i} className="bg-white shadow-md hover:shadow-xl rounded p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm ">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl text-[#F6EBD3] font-semibold mb-4">{page?.featuredProducts?.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page?.featuredProducts?.items?.map((item: { title: string, description: string }, i: number) => (
              <div key={i} className="bg-white rounded shadow hover:shadow-xl p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm ">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl text-[#F6EBD3] font-semibold mb-4">{page?.popularServices?.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page?.popularServices?.items?.map((item: { title: string, description: string }, i: number) => (
              <div key={i} className="bg-white rounded shadow hover:shadow-xl p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm ">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </FullWidth>
  );
}

export default HomePage;
