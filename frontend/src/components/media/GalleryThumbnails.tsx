import React from 'react';
import Image from 'next/image';

interface GalleryThumbnailsProps {
  images: { src: string; alt?: string }[];
}

const GalleryThumbnails: React.FC<GalleryThumbnailsProps> = ({ images }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
    {images.map((img, i) => (
      <div key={i} className="rounded overflow-hidden">
        <Image src={img.src} alt={img.alt || `Image ${i + 1}`} width={400} height={300} className="w-full h-auto" />
      </div>
    ))}
  </div>
);

export default GalleryThumbnails;
