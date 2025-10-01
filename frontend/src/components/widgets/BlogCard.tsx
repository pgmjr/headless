import { useState, useEffect } from "react";

const Card = (data: { slug: string, title: string, description: string }) => {

  const [content, setContent] = useState<string>("");

  useEffect(() => {
    setContent(data.description);
  }, [data.description]);

  return (
    <div className="border border-gray-200 p-4 rounded group-hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2 text-white group-hover:underline">{data.title}</h2>
      <p className="mb-2" dangerouslySetInnerHTML={{ __html: content }} />
      <p className="text-blue-500 group-hover:underline">Read more →</p>
    </div>
  );
};

export default Card;