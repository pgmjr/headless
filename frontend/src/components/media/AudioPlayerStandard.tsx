import { Elem } from "@/components/base/elem";

const AudioPlayerStandard: React.FC<{ src: string }> = ({ src }) => (
  <audio controls className="w-full my-4">
    <source src={src} />
    <noscript> Your browser does not support the audio element.</noscript>
  </audio>
);

export default AudioPlayerStandard;