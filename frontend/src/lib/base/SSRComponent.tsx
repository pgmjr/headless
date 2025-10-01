const SSRComponent = ({ data }: { data: string }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Server/Static Rendered Page</h1>
      <p className="mt-4 ">Data: {data}</p>
    </div>
  );
};

export default SSRComponent;