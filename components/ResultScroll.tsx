import React from 'react';
import { DivinationResult } from '../types';

interface ResultScrollProps {
  result: DivinationResult;
  onReset: () => void;
}

const ResultScroll: React.FC<ResultScrollProps> = ({ result, onReset }) => {
  return (
    <div className="max-w-4xl mx-auto w-full animate-fade-in relative pb-12">
       {/* Scroll Header */}
       <div className="h-12 bg-stone-800 rounded-t-lg mx-4 flex items-center justify-center relative shadow-lg z-20 border-b-4 border-antique-gold">
         <div className="w-16 h-2 bg-antique-gold rounded-full"></div>
       </div>

       {/* Paper Content */}
       <div className="bg-[#FDF6E3] mx-auto px-8 py-10 shadow-2xl relative min-h-[600px] border-l-8 border-r-8 border-[#E6D5B8]">
          
          {/* Watermark/Texture overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Hexagram Title */}
            <div className="text-center mb-8">
              <span className="block text-sm text-stone-500 uppercase tracking-[0.3em] mb-2 font-display">Thiên Cơ Lộ Tướng</span>
              <h2 className="text-4xl md:text-5xl font-display text-oriental-red font-bold drop-shadow-sm mb-2">
                {result.hexagramName}
              </h2>
              <div className="w-32 h-1 bg-oriental-red mx-auto mt-4"></div>
            </div>

            {/* Poem Section */}
            <div className="my-6 p-6 bg-paper-bg/50 border border-stone-300 rounded-sm w-full md:w-3/4 shadow-inner">
               <div className="text-center space-y-3">
                 {result.poem.map((line, idx) => (
                   <p key={idx} className="text-xl md:text-2xl font-serif italic text-ink-black leading-relaxed">
                     {line}
                   </p>
                 ))}
               </div>
            </div>

            {/* Interpretation */}
            <div className="w-full space-y-6 mt-4">
              <section>
                <h3 className="flex items-center text-2xl font-display text-jade-green mb-3 border-b border-jade-green/30 pb-2">
                  <span className="mr-2 text-3xl">✦</span> Luận Giải
                </h3>
                <p className="text-lg text-stone-800 font-serif leading-8 text-justify">
                  {result.interpretation}
                </p>
              </section>

              <section>
                <h3 className="flex items-center text-2xl font-display text-antique-gold mb-3 border-b border-antique-gold/30 pb-2 drop-shadow-md filter brightness-90">
                  <span className="mr-2 text-3xl">✦</span> Lời Khuyên
                </h3>
                <p className="text-lg text-stone-800 font-serif leading-8 text-justify">
                  {result.advice}
                </p>
              </section>

              {/* Lucky Elements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-stone-300">
                <div className="text-center p-4 border border-stone-200 bg-white/30 rounded">
                  <span className="block text-stone-500 text-sm uppercase tracking-wider mb-1">Phương Hướng</span>
                  <span className="text-xl font-bold text-oriental-red font-display">{result.luckyElements.direction}</span>
                </div>
                <div className="text-center p-4 border border-stone-200 bg-white/30 rounded">
                  <span className="block text-stone-500 text-sm uppercase tracking-wider mb-1">Màu Sắc</span>
                  <span className="text-xl font-bold text-oriental-red font-display">{result.luckyElements.color}</span>
                </div>
                <div className="text-center p-4 border border-stone-200 bg-white/30 rounded">
                  <span className="block text-stone-500 text-sm uppercase tracking-wider mb-1">Con Số</span>
                  <span className="text-xl font-bold text-oriental-red font-display">{result.luckyElements.number}</span>
                </div>
              </div>
            </div>

          </div>
       </div>

       {/* Scroll Footer */}
       <div className="h-12 bg-stone-800 rounded-b-lg mx-4 flex items-center justify-center relative shadow-lg z-20 border-t-4 border-antique-gold -mt-1">
         <div className="w-16 h-2 bg-antique-gold rounded-full"></div>
       </div>

       {/* Reset Button */}
       <div className="flex justify-center mt-12">
          <button 
            onClick={onReset}
            className="text-stone-600 hover:text-oriental-red underline underline-offset-4 font-display font-bold tracking-widest transition-colors"
          >
            ← Xin Quẻ Khác
          </button>
       </div>
    </div>
  );
};

export default ResultScroll;
