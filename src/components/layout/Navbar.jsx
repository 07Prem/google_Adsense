import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, Sun, Moon, ChevronDown, Check, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../../data/categories';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Dark mode setup
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Sticky header effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path navigation
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  const triggerSubscribeScroll = () => {
    const el = document.getElementById('footer-newsletter') || document.getElementById('newsletter-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphism shadow-soft py-2' 
          : 'bg-white/90 dark:bg-slate-900/90 border-b border-slate-100 dark:border-slate-800/40 py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo on Left */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 group">
                <svg className="w-10 h-10 flex-shrink-0 transition-transform duration-355 group-hover:rotate-6" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="40" height="40" rx="12" fill="#0F172A" />
                  <path d="M20 8 L30 14 V26 L20 32 L10 26 V14 L20 8 Z" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M16 16 L12 20 L16 24" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 16 L28 20 L24 24" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 15 L18 25" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl tracking-tight text-gray-900 dark:text-white leading-none">
                    Tech<span className="text-blue-600">Axioz</span>
                  </span>
                  <span className="text-[10px] tracking-widest text-slate-400 dark:text-slate-500 font-bold mt-1 leading-tight uppercase font-sans">
                    Learn. Build. Grow.
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation Center */}
            <nav className="hidden lg:flex items-center space-x-6" aria-label="Main Navigation">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-semibold text-sm transition-colors duration-200 hover:text-green-500 ${
                    location.pathname === item.path
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-gray-600 dark:text-slate-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Categories Trigger */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                  className="flex items-center gap-1 font-semibold text-sm text-gray-600 dark:text-slate-300 hover:text-green-500 cursor-pointer"
                  aria-expanded={dropdownOpen}
                >
                  Categories <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-xl py-2 z-50 grid grid-cols-1 gap-0.5"
                    >
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/category/${cat.slug}`}
                          className="px-4 py-2.5 text-xs font-bold text-gray-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-green-550 transition-colors"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Utility Actions on Right */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 text-gray-500 hover:text-green-500 dark:text-slate-400 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={toggleDarkMode}
                className="p-2.5 text-gray-500 hover:text-green-500 dark:text-slate-400 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={triggerSubscribeScroll}
                className="px-5 py-2.5 text-xs font-bold bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/10 text-white rounded-full transition-all cursor-pointer font-sans"
              >
                Subscribe
              </button>
            </div>

            {/* Mobile Actions Drawer handles */}
            <div className="flex lg:hidden items-center space-x-1.5">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-500 dark:text-slate-400 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-500 dark:text-slate-400 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
                aria-label="Theme toggle"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-500 dark:text-slate-300 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
                aria-expanded={isOpen}
                aria-label="Toggle Drawer Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-xs h-full bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="font-display font-bold text-lg dark:text-white">Navigation</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 dark:text-slate-450 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="text-base font-semibold text-gray-700 dark:text-slate-200 hover:text-green-500 py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3 font-display">
                      Categories
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/category/${cat.slug}`}
                          className="text-sm font-semibold text-gray-600 dark:text-slate-350 hover:text-green-505 py-1"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-8">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    triggerSubscribeScroll();
                  }}
                  className="w-full flex items-center justify-center px-4 py-3 text-center text-sm font-bold text-white bg-green-500 hover:bg-green-600 rounded-full shadow-md"
                >
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Search Interface */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              className="relative w-full max-w-xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-205 dark:border-slate-700"
            >
              <form onSubmit={handleSearchSubmit} className="flex items-center px-4 py-4.5">
                <Search className="w-5 h-5 text-slate-400 mr-3" />
                <input
                  type="text"
                  placeholder="Type to search programming, AI, reviews..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-0 outline-none text-gray-900 dark:text-white text-base placeholder-slate-400 focus:ring-0"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-1 text-slate-450 hover:text-slate-600 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
