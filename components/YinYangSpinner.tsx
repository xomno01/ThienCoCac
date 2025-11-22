import React from 'react';

const YinYangSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="w-24 h-24 rounded-full border-2 border-oriental-red relative animate-spin [animation-duration:3s]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ink-black to-white rounded-full overflow-hidden">
             {/* Left half mask to create yin yang shape approximation with CSS */}
             <div className="absolute top-0 left-1/2 w-1/2 h-full bg-white"></div> 
             <div className="absolute top-0 left-1/4 w-12 h-12 bg-ink-black rounded-full z-10"></div>
             <div className="absolute bottom-0 left-1/4 w-12 h-12 bg-white rounded-full z-10"></div>
             {/* Dots */}
             <div className="absolute top-4 left-[38%] w-3 h-3 bg-white rounded-full z-20"></div>
             <div className="absolute bottom-4 left-[38%] w-3 h-3 bg-ink-black rounded-full z-20"></div>
        </div>
      </div>
      <p className="text-oriental-red font-serif text-lg italic animate-pulse">
        Đang thâu tóm càn khôn, luận giải thiên cơ...
      </p>
    </div>
  );
};

export default YinYangSpinner;
