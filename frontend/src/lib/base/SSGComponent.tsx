import { FC } from 'react';

interface SSGComponentProps {
  data: string;
}

const SSGComponent: FC<SSGComponentProps> = ({ data }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Static Site Generated Page</h1>
      <p className="mt-4 ">Data: {data}</p>
    </div>
  );
};

export default SSGComponent;