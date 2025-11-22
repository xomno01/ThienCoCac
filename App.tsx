import React, { useState } from 'react';
import { UserInfo, DivinationResult } from './types';
import DivinationForm from './components/DivinationForm';
import ResultScroll from './components/ResultScroll';
import YinYangSpinner from './components/YinYangSpinner';
import AudioPlayer from './components/AudioPlayer';
import { consultTheOracles } from './services/geminiService';

const App: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'input' | 'loading' | 'result'>('intro');
  const [result, setResult] = useState<DivinationResult | null>(null);

  const handleStart = () => {
    setStep('input');
  };

  const handleFormSubmit = async (userInfo: UserInfo) => {
    setStep('loading');
    try {
      const data = await consultTheOracles(userInfo);
      setResult(data);
      // Artificial delay for ritual effect if API is too fast
      setTimeout(() => {
        setStep('result');
      }, 2000);
    } catch (error) {
      console.error("Error fetching result", error);
      // Handle error state gracefully, maybe go back to input with an alert
      alert("Thiên cơ bất khả lộ. Xin hãy thử lại sau.");
      setStep('input');
    }
  };

  const handleReset = () => {
    setResult(null);
    setStep('intro');
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col font-serif">
      <AudioPlayer />
      
      {/* Background Layers */}
      <div className="fixed inset-0 bg-[#F4E4BC] bg-parchment opacity-80 -z-30"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-stone-900/10 via-transparent to-stone-900/20 -z-20 pointer-events-none"></div>
      
      {/* Red vertical decorative lines (Common in Chinese layout) */}
      <div className="fixed top-0 left-8 w-px h-full bg-oriental-red/20 -z-10 hidden md:block"></div>
      <div className="fixed top-0 right-8 w-px h-full bg-oriental-red/20 -z-10 hidden md:block"></div>
      <div className="fixed top-0 left-12 w-px h-full bg-oriental-red/10 -z-10 hidden md:block"></div>
      <div className="fixed top-0 right-12 w-px h-full bg-oriental-red/10 -z-10 hidden md:block"></div>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen relative">
        
        {/* Header / Branding */}
        {step !== 'result' && (
          <header className="mb-12 text-center animate-fade-in">
             <div className="w-16 h-16 mx-auto mb-4 border-4 border-oriental-red rounded-full flex items-center justify-center bg-stone-800 text-antique-gold shadow-lg">
                <span className="text-3xl font-bold">天</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-display font-bold text-oriental-red tracking-widest drop-shadow-sm mb-2">
               THIÊN CƠ CÁC
             </h1>
             <p className="text-stone-600 italic text-lg md:text-xl tracking-wide">
               Luận Giải Vận Mệnh - Nắm Bắt Thời Cơ
             </p>
          </header>
        )}

        {/* Views */}
        {step === 'intro' && (
          <div className="text-center animate-fade-in space-y-8 max-w-2xl">
            <p className="text-xl leading-8 text-stone-800 bg-white/40 p-6 rounded border border-stone-300 shadow-sm">
              "Vạn sự tùy duyên, nhưng mệnh do mình nắm. Hãy để trí tuệ ngàn năm của Kinh Dịch soi đường chỉ lối cho bạn giữa dòng đời vạn biến."
            </p>
            <button
              onClick={handleStart}
              className="px-12 py-4 bg-oriental-red text-paper-bg text-xl font-bold uppercase tracking-[0.2em] hover:bg-red-900 transition-all duration-300 shadow-xl border-2 border-antique-gold rounded-sm transform hover:scale-105"
            >
              Xin Quẻ
            </button>
          </div>
        )}

        {step === 'input' && (
          <div className="w-full animate-fade-in">
            <DivinationForm onSubmit={handleFormSubmit} />
            <div className="mt-8 text-center">
              <button 
                onClick={() => setStep('intro')}
                className="text-stone-500 hover:text-stone-800 text-sm uppercase tracking-widest"
              >
                Trở về
              </button>
            </div>
          </div>
        )}

        {step === 'loading' && (
           <YinYangSpinner />
        )}

        {step === 'result' && result && (
          <ResultScroll result={result} onReset={handleReset} />
        )}

      </main>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-stone-500 text-sm bg-stone-900/5 relative z-10">
        <p>© {new Date().getFullYear()} Thiên Cơ Các. Ứng dụng mang tính chất tham khảo & giải trí.</p>
      </footer>
    </div>
  );
};

export default App;
