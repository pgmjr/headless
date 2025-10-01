import React from 'react';
import Image from 'next/image';

interface FeaturedImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

const FeaturedImage: React.FC<FeaturedImageProps> = ({ src, alt, caption }) => (
  <div className="my-8">
    <Image src={src} alt={alt || 'Featured'} width={1200} height={600} className="w-full h-auto rounded-md" />
    {caption && (
      <p className="mt-2 text-center text-gray-600 dark:text-gray-400">{caption}</p>
    )}
  </div>
);

export default FeaturedImage;
