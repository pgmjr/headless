const GenericEmbed: React.FC<{ src: string }> = ({ src }) => (
  <div className="relative pb-[56.25%] h-0 my-6">
    <iframe
      src={src}
      className="absolute w-full h-full"
      frameBorder="0"
      allowFullScreen
      title="Embedded video"
    />
  </div>
);
