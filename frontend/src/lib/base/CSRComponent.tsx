import { useEffect, useState } from 'react';
import Loader from '../../components/base/Loader';

const CSRComponent = ({ fallback }: { fallback: string }) => {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('[CSR] Fetching data on the client...');
    setTimeout(() => {
      setData('This is CSR data fetched after load.');
      setLoading(false);
    }, 1000);
  }, []);

  if (!loading) {
    return <Loader />
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Client-Side Rendered Page</h1>
      <p className="mt-4 ">
        {loading ? 'Loading…' : `Data: ${data}`}
      </p>
    </div>
  );
};

export default CSRComponent;