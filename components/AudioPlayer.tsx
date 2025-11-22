import React, { useState } from 'react';

// Using a simple mute toggle for UI completeness, though we don't autoplay audio to respect browser policies
const AudioPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="p-2 bg-stone-800/80 rounded-full text-antique-gold hover:bg-stone-700 transition-colors border border-antique-gold/50"
        title={isMuted ? "Bật nhạc nền" : "Tắt nhạc nền"}
      >
        {isMuted ? (
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 21 12m0 0-3.75 2.25M21 12H3" />
           </svg>
        ) : (
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
           </svg>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
