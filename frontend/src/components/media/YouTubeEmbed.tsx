const YouTubeEmbed: React.FC<{ videoId: string }> = ({ videoId }) => (
  <div className="relative pb-[56.25%] h-0 my-6">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      className="absolute w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video"
    />
  </div>
);
