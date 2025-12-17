import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import LoadingSpinner from './components/LoadingSpinner';
import { ArrowUp } from 'lucide-react';

// Wrapper component to handle routing effects (scroll, loading)
const AppContent: React.FC = () => {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Handle Route Changes (Transitions)
  useEffect(() => {
    // 1. Show Spinner immediately on route change
    setIsLoading(true);

    // 2. Scroll to top
    window.scrollTo(0, 0);

    // 3. Simulate Loading / Transition Delay
    // This allows the spinner to be seen and creates a smooth 'fade in' effect for content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 0.8s transition time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Handle Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (docHeight > 0) {
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
        setShowScrollTop(progress > 50);
      } else {
        setScrollProgress(0);
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <main className="position-relative overflow-x-hidden">
        {/* Page Loader Overlay */}
        <div
            className={`fixed inset-0 z-[100] w-full h-full transition-opacity duration-500 ease-in-out ${
                isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          <LoadingSpinner />
        </div>

        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent pointer-events-none">
          <div
              className="h-full bg-gradient-to-r from-cyan-500 to-lime-500 transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Main Content with Fade Transition */}
        <div
            className={`flex flex-col min-h-screen transition-opacity duration-700 ease-in-out ${
                isLoading ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <Navbar />
          <main className="flex-grow mt-[125px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/contact-us" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>

        {/* Scroll To Top Button */}
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full bg-cyan-600 text-white shadow-xl border border-white/20 z-50 transition-all duration-300 transform hover:bg-cyan-500 hover:scale-110 focus:outline-none flex items-center justify-center ${
                showScrollTop && !isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
            aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      </main>
  );
};

const App: React.FC = () => {
  return (
      <Router>
          <Toaster position="top-center" />
        <AppContent />
      </Router>
  );
};

export default App;