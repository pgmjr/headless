'use client';
import { useState } from 'react';

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setOpen(true)}>
        Open Modal
      </button >
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-md">
            <h2 className="text-xl font-bold mb-2">Modal Title</h2>
            <p className="text-sm  mb-4">Here’s some modal content with Tailwind styling.</p>
            <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div >
      )}
    </>
  );
}

export default Modal;
