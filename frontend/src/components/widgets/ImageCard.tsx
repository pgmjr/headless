import React from "react";
import Image from "next/image";

const ImageCard = (data: {
  slug: string,
  title:
  string,
  description: string,
  img: {
    url: string,
    alt: string,
    width?: number,
    height?: number,
    sizes?: string,
  }
}) => {

  const imgData = data.img;

  return (
    <div className="flex flex-row border border-gray-200 p-4 rounded group-hover:shadow-lg transition">
      {imgData?.url &&
        <Image
          src={imgData?.url}
          alt={imgData?.alt}
          width={imgData?.width}
          height={imgData?.height}
          sizes={imgData?.sizes}
          loading="lazy"
          decoding='async'
          fetchPriority='high'
        />
      }
      <h3 className="text-xl font-semibold mb-2 group-hover:">{data.title}</h3>
      <p className="mb-2">{data.description}</p>
      <p className="text-blue-500 underline">Read more →</p>
    </div>
  );
};

export default ImageCard;
