import React from 'react';

interface Track { title: string; src: string }

const AudioPlaylist: React.FC<{ tracks: Track[] }> = ({ tracks }) => (
  <div className="space-y-4 my-4">
    {tracks.map((t, i) => (
      <div key={i} className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
        <p className="font-semibold text-black dark:text-white">{t.title}</p>
        <audio controls className="w-full">
          <source src={t.src} />
        </audio>
      </div>
    ))}
  </div>
);
