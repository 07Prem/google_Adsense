import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Bookmark, Share2, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAuthor } from '../../data/authors';
import { categories } from '../../data/categories';

export default function ArticleCard({ article }) {
  const author = getAuthor(article.authorSlug);
  const categoryData = categories.find(c => c.slug === article.category) || categories[0];

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  // Initialize bookmark status
  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    setIsBookmarked(!!bookmarks[article.slug]);
  }, [article.slug]);

  const toggleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    if (bookmarks[article.slug]) {
      delete bookmarks[article.slug];
      setIsBookmarked(false);
    } else {
      bookmarks[article.slug] = true;
      setIsBookmarked(true);
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  };

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/article/${article.slug}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.article 
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col bg-white dark:bg-slate-800 rounded-[18px] border border-slate-200/60 dark:border-slate-700/50 shadow-soft hover:shadow-xl transition-all overflow-hidden h-full relative"
    >
      {/* Large Image Area */}
      <Link to={`/article/${article.slug}`} className="block relative overflow-hidden aspect-video group">
        <img 
          src={article.featuredImage} 
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-[18px]"
        />
        
        {/* Overlaid Badges */}
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${categoryData.color} shadow-sm backdrop-blur-sm`}>
          {categoryData.name}
        </span>
      </Link>

      {/* Card Content Area */}
      <div className="flex flex-col flex-grow p-5 font-sans">
        
        {/* Metadata info */}
        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-slate-500 mb-3.5">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-green-550" />
              {article.publishedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-green-550" />
              {article.readTime}
            </span>
          </div>

          {/* Action triggers: Share and Bookmark */}
          <div className="flex items-center space-x-1.5 z-10">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-slate-50 hover:bg-green-50 dark:bg-slate-905 dark:hover:bg-slate-700 text-slate-400 hover:text-green-600 transition-colors relative cursor-pointer"
              aria-label="Share article"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
              
              <AnimatePresence>
                {copied && (
                  <motion.span 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-8 right-0 bg-slate-900 text-white text-[9px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap"
                  >
                    Copied URL!
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={toggleBookmark}
              className={`p-1.5 rounded-lg bg-slate-50 dark:bg-slate-905 hover:bg-green-50 dark:hover:bg-slate-700 transition-all cursor-pointer ${
                isBookmarked ? 'text-green-600 dark:text-green-450' : 'text-slate-400 hover:text-green-600'
              }`}
              aria-label="Bookmark article"
            >
              <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        {/* Title */}
        <Link to={`/article/${article.slug}`}>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white line-clamp-2 hover:text-green-555 transition-colors leading-snug mb-2 font-display">
            {article.title}
          </h3>
        </Link>

        {/* Text paragraph */}
        <p className="text-xs sm:text-sm text-gray-550 dark:text-slate-350 line-clamp-3 leading-relaxed mb-5">
          {article.description}
        </p>

        {/* Card Footer author/CTA */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={author.avatar} 
              alt={author.name}
              className="w-7 h-7 rounded-full object-cover border border-slate-100 dark:border-slate-700"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-805 dark:text-slate-205 leading-none">
                {author.name}
              </span>
              <span className="text-[9px] text-gray-400 dark:text-slate-500 font-sans mt-0.5">
                {author.role.split(' ')[0]}
              </span>
            </div>
          </div>

          <Link 
            to={`/article/${article.slug}`}
            className="flex items-center gap-1 text-xs font-bold text-green-600 dark:text-green-400 hover:text-green-700 hover:underline transition-colors group"
          >
            Read <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </motion.article>
  );
}
