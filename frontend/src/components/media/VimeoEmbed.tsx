const VimeoEmbed: React.FC<{ videoId: string }> = ({ videoId }) => (
  <div className="relative pb-[56.25%] h-0 my-6">
    <iframe
      src={`https://player.vimeo.com/video/${videoId}`}
      className="absolute w-full h-full"
      allowFullScreen
      title="Vimeo video"
    />
  </div>
);
