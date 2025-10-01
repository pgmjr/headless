import React, { useState } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: { src: string; alt?: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx + images.length - 1) % images.length);
  const next = () => setIdx((idx + 1) % images.length);

  return (
    <div className="relative my-8">
      <div className="overflow-hidden rounded-md">
        <Image
          src={images[idx].src}
          alt={images[idx].alt || `Slide ${idx + 1}`}
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <button onClick={prev} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full p-2">
        ‹
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 rounded-full p-2">
        ›
      </button>
    </div>
  );
};

export default ImageSlider;
