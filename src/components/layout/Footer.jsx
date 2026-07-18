import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import { categories } from '../../data/categories';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide an email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  const footerCategories = categories.slice(0, 6);

  const policyLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookie' },
    { name: 'DMCA Policy', path: '/dmca' },
    { name: 'Editorial Policy', path: '/editorial' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Articles Archive', path: '/articles' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Write For Us', path: '/write-for-us' },
    { name: 'Advertise With Us', path: '/advertise' },
    { name: 'Careers', path: '/careers' }
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top footer row: columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100 dark:border-slate-800">
          
          {/* Brand block (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="40" height="40" rx="12" fill="#0F172A" />
                <path d="M20 8 L30 14 V26 L20 32 L10 26 V14 L20 8 Z" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" />
                <path d="M16 16 L12 20 L16 24" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 16 L28 20 L24 24" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 15 L18 25" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="font-display font-black text-xl tracking-tight text-gray-900 dark:text-white leading-none">
                Tech<span className="text-blue-600">Axioz</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-sans leading-relaxed">
              We provide clean, high-quality coding resources, frameworks checklists, and hardware guidelines built to help developers learn, build, and grow.
            </p>
            
            {/* Social icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://github.com/techaxioz" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 dark:bg-slate-900 hover:bg-green-50 dark:hover:bg-green-950/20 text-slate-500 hover:text-green-600 rounded-full transition-colors" aria-label="GitHub">
                <Github className="w-4.5 h-4.5" />
              </a>
              <a href="https://twitter.com/techaxioz" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 dark:bg-slate-900 hover:bg-green-50 dark:hover:bg-green-950/20 text-slate-500 hover:text-green-600 rounded-full transition-colors" aria-label="Twitter">
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a href="https://linkedin.com/company/techaxioz" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 dark:bg-slate-900 hover:bg-green-50 dark:hover:bg-green-950/20 text-slate-500 hover:text-green-600 rounded-full transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a href="https://facebook.com/techaxioz" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 dark:bg-slate-900 hover:bg-green-50 dark:hover:bg-green-950/20 text-slate-500 hover:text-green-600 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links block (Col span 2) */}
          <div className="lg:col-span-2 space-y-4 md:pl-2">
            <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest font-display">
              Company
            </span>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-500 hover:text-green-650 dark:text-slate-400 dark:hover:text-green-400 transition-colors font-semibold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories block (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest font-display">
              Popular Categories
            </span>
            <ul className="space-y-2.5">
              {footerCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="text-sm text-gray-500 hover:text-green-650 dark:text-slate-400 dark:hover:text-green-400 transition-colors font-semibold"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies block (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest font-display">
              Legal & Policies
            </span>
            <ul className="space-y-2.5">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-500 hover:text-green-650 dark:text-slate-400 dark:hover:text-green-400 transition-colors font-semibold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Lower Row: newsletter & copyright */}
        <div className="mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div id="footer-newsletter" className="w-full lg:max-w-md space-y-2">
            <span className="text-sm font-bold text-gray-900 dark:text-white block font-display">
              Subscribe for Technical Updates
            </span>
            {subscribed ? (
              <div className="p-3 text-xs bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-250 text-emerald-800 dark:text-emerald-350 rounded-xl">
                Thank you! You are subscribed to TechAxioz notifications.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center w-full">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className="w-full pl-3.5 pr-10 py-2.5 text-xs rounded-[14px] border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer"
                  aria-label="Subscribe email"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
            {error && <span className="text-[11px] text-red-500 block">{error}</span>}
          </div>

          <p className="text-xs text-gray-400 dark:text-slate-500 text-center lg:text-right">
            &copy; {new Date().getFullYear()} TechAxioz. Designed with a clean light layout built for publisher speed. Learn. Build. Grow.
          </p>
        </div>

      </div>
    </footer>
  );
}
