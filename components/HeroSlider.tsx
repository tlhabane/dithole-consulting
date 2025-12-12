import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slides } from '../data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Auto-scroll every 6 seconds
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative h-[500px] md:h-[650px] overflow-hidden bg-slate-900">
      {slides.map((slide, index) => {
        return (
          <div
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            key={slide.id}
          >
            {index === current && (
                <>
                {/* Background Image with Overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none tracking-wide animate-[fadeInDown_1s_ease-out]">
                            {slide.title}
                        </h1>
                        <p className="font-sans text-lg md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.3s_both]">
                            {slide.subtitle}
                        </p>
                        <Link 
                            to={slide.ctaLink} 
                            className="font-heading tracking-wider text-xl inline-block bg-gradient-to-r from-cyan-600 to-lime-600 hover:from-cyan-500 hover:to-lime-500 text-white font-bold py-3 px-10 rounded-full transition duration-300 shadow-lg hover:shadow-cyan-500/25 animate-[fadeInUp_1s_ease-out_0.6s_both]"
                        >
                            {slide.ctaText}
                        </Link>
                    </div>
                </div>
                </>
            )}
          </div>
        );
      })}

      {/* Controls */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-slate-900/40 hover:bg-slate-900/70 text-white transition focus:outline-none border border-slate-700/50"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-slate-900/40 hover:bg-slate-900/70 text-white transition focus:outline-none border border-slate-700/50"
      >
        <ChevronRight size={32} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-cyan-500 w-8' : 'bg-slate-400/50'}`}
              />
          ))}
      </div>
    </div>
  );
};

export default HeroSlider;