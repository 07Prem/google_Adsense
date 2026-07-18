import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * LayoutWrapper Component
 * Shell component hosting Navbar, main router children, and Footer.
 * Implements "Back to Top" button and scrolls window to top on route change.
 */
export default function LayoutWrapper({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Check scroll coordinate to display "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/20 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Scroll back to top of the page"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
