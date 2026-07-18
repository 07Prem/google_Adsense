import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowLeft, Home, BookOpen } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead 
        title="404 Page Not Found"
        description="The page you are looking for does not exist on Demo AdSense. Search our programming guides and laptop reviews."
      />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="max-w-md mx-auto">
          <HelpCircle className="w-16 h-16 text-green-600 mx-auto mb-4 animate-bounce" />
          
          <h1 className="font-display font-black text-6xl text-slate-900 dark:text-white leading-none mb-4">
            404
          </h1>
          
          <h2 className="font-display font-extrabold text-2xl text-slate-800 dark:text-slate-200 mb-2">
            Page Not Found
          </h2>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed mb-8">
            The page you are looking for might have been renamed, removed, or had its URL changed. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" /> Home Page
            </Link>
            <Link
              to="/articles"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-850 dark:text-slate-200 rounded-xl text-xs font-bold transition-all hover:bg-slate-50 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-green-600" /> Browse Articles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
