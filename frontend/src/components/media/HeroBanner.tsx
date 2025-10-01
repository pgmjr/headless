import React from 'react';
import Link from 'next/link';

interface HeroBannerProps {
  headline: string;
  subheadline?: string;
  ctaText: string;
  ctaHref: string;
  bgImageUrl?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  headline, subheadline, ctaText, ctaHref, bgImageUrl
}) => {

  return (
    <section
      className={`relative bg-cover bg-center py-20 text-center ${bgImageUrl ? 'bg-[' + bgImageUrl + ']' : ''} bg-gray-100 dark:bg-gray-800`}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
          {headline}
        </h1>
        {subheadline && (
          <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            {subheadline}
          </p>
        )}
        <Link href={ctaHref}>
          <a className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
            {ctaText}
          </a>
        </Link>
      </div>
    </section>

  );
};

export default HeroBanner;
