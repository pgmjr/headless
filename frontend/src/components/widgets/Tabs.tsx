'use client';
import { useState } from 'react';

const tabs = ['Overview', 'Features', 'Pricing'];

const Tabs = () => {
  const [active, setActive] = useState('Overview');

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex space-x-2 mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded ${active === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded bg-gray-50">
        <p>You are viewing: <strong>{active}</strong></p>
      </div>
    </div >
  );
}

export default Tabs;