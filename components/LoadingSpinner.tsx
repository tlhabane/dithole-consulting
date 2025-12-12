import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div className="relative w-24 h-24">
        {/* Outer Ring */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-100 rounded-full"></div>
        {/* Spinning Arc 1 */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div>
         {/* Inner Ring Static */}
        <div className="absolute top-4 left-4 w-16 h-16 border-4 border-slate-50 rounded-full"></div>
        {/* Spinning Arc 2 */}
        <div className="absolute top-4 left-4 w-16 h-16 border-4 border-lime-500 rounded-full border-b-transparent animate-spin" style={{ animationDuration: '1.5s' }}></div>
        
        {/* Center Pulse */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-tr from-cyan-500 to-lime-500 rounded-full animate-ping"></div>
      </div>
      <div className="mt-8">
        <span className="font-heading text-2xl tracking-[0.2em] text-slate-800 font-bold animate-pulse">DITHOLE</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;