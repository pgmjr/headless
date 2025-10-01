import { Elem } from "@/components/base/elem";

const AudioPlayerStyled: React.FC<{ src: string }> = ({ src }) => (
  <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded p-4 my-4">
    <audio controls className="w-full">
      <source src={src} />
    </audio>
  </div>
);

export default AudioPlayerStyled;