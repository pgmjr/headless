// components/widgets/Toast.tsx
'use client';
import { useState, useEffect } from 'react';

const Toast = ({ message }: { message: string }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md transition-opacity">
      {message}
    </div>
  );
}

export default Toast;
