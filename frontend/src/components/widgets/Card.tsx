const Card = (data: { slug: string, title: string, description: string }) => (
  <div className="flex flex-col border border-gray-200 p-4 rounded group-hover:shadow-lg transition">
    <h2 className="text-xl font-semibold mb-2 group-hover:">{data.title}</h2>
    <p className="mb-2">{data.description}</p>
    <p className="text-blue-500 underline">Read more →</p>
  </div >
);

export default Card;