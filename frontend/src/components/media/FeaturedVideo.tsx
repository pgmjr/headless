import React from 'react';

interface FeaturedVideoProps {
  videoUrl: string;
  caption?: string;
}

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ videoUrl, caption }) => (
  <div className="my-8">
    <div className="relative pb-[56.25%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Featured Video"
      />
    </div>
    {caption && (
      <p className="mt-2 text-center text-gray-600 dark:text-gray-400">{caption}</p>
    )}
  </div>
);

export default FeaturedVideo;
