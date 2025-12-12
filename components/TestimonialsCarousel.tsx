import React, { useState, useEffect, useRef } from 'react';
import { Testimonial } from '../types';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsCarouselProps {
  items: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive settings
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) { // xl desktop
        setItemsToShow(4);
      } else if (window.innerWidth >= 768) { // md tablet
        setItemsToShow(2);
      } else {
        setItemsToShow(1); // mobile
      }
    };

    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure index stays valid when screen size changes
  useEffect(() => {
    const max = Math.max(0, items.length - itemsToShow);
    if (currentIndex > max) {
        setCurrentIndex(max);
    }
  }, [itemsToShow, items.length, currentIndex]);

  const maxIndex = Math.max(0, items.length - itemsToShow);

  const next = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      next();
    }
    if (isRightSwipe && currentIndex > 0) {
      prev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!items.length) return null;

  return (
    <div className="relative group px-4 md:px-12">
        {/* Navigation Buttons (visible on larger screens or hover) */}
        <div className="absolute top-1/2 left-0 md:left-2 transform -translate-y-1/2 z-10 hidden md:block">
            <button
                onClick={prev}
                disabled={currentIndex === 0}
                className={`p-3 rounded-full bg-white shadow-xl border border-slate-100 text-slate-700 transition transform hover:scale-110 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-cyan-50 hover:text-cyan-600'}`}
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={24} />
            </button>
        </div>
        <div className="absolute top-1/2 right-0 md:right-2 transform -translate-y-1/2 z-10 hidden md:block">
            <button
                onClick={next}
                disabled={currentIndex === maxIndex}
                className={`p-3 rounded-full bg-white shadow-xl border border-slate-100 text-slate-700 transition transform hover:scale-110 ${currentIndex === maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-cyan-50 hover:text-cyan-600'}`}
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} />
            </button>
        </div>

        {/* Carousel Track */}
        <div 
            className="overflow-hidden py-8 -mx-4 px-4" // Negative margin to allow shadow overflow
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
                {items.map((t) => (
                    <div 
                        key={t.id} 
                        className="flex-shrink-0 px-3"
                        style={{ width: `${100 / itemsToShow}%` }}
                    >
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="font-sans text-slate-600 italic mb-6 flex-grow leading-relaxed">"{t.quote}"</p>
                            <div className="mt-auto pt-4 border-t border-slate-50">
                                <h4 className="font-heading text-2xl font-bold text-slate-900">{t.author}</h4>
                                <p className="font-sans text-sm text-cyan-600 font-medium">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-2 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-cyan-500' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
        </div>
    </div>
  );
}

export default TestimonialsCarousel;