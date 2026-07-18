import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, Share2, Twitter, Facebook, Linkedin, Copy, 
  MessageSquare, User, ArrowLeft, ArrowRight, BookOpen, AlertTriangle, 
  CheckCircle, HelpCircle, Flame, Check, AlertCircle, Layers, Bookmark 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import InArticleAd from '../components/ads/InArticleAd';
import SidebarAd from '../components/ads/SidebarAd';
import BottomAd from '../components/ads/BottomAd';

import { getArticleBySlug, getRelatedArticles, articles } from '../data/articles';
import { getAuthor } from '../data/authors';
import { categories } from '../data/categories';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  const [comments, setComments] = useState([
    { id: 1, author: 'Jane Doe', role: 'Fullstack Engineer', text: 'This was an incredibly helpful breakdown. Thanks for writing this guide!', date: 'July 14, 2026' },
    { id: 2, author: 'Markus V.', role: 'Developer', text: 'Clean code guidelines here are golden. I\'ve shared this with my engineering team.', date: 'July 15, 2026' }
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const articleContentRef = useRef(null);

  // Monitor scroll for reading progress calculations
  useEffect(() => {
    const handleScroll = () => {
      if (!articleContentRef.current) return;
      const element = articleContentRef.current;
      const totalHeight = element.clientHeight - window.innerHeight;
      const scrolled = window.scrollY - element.offsetTop;
      if (totalHeight > 0 && scrolled > 0) {
        setReadingProgress(Math.min((scrolled / totalHeight) * 100, 100));
      } else {
        setReadingProgress(0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  // Load bookmark status
  useEffect(() => {
    if (!article) return;
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    setIsBookmarked(!!bookmarks[article.slug]);
  }, [slug, article]);

  // Reset page parameters on slug change
  useEffect(() => {
    setNewCommentName('');
    setNewCommentText('');
    setCommentSuccess(false);
    setActiveFaq(null);
    setCopySuccess(false);
    setReadingProgress(0);
  }, [slug]);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white">Article Not Found</h2>
        <p className="text-sm text-gray-500 mt-2">The article you are looking for does not exist on Demo AdSense.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const author = getAuthor(article.authorSlug);
  const categoryData = categories.find(c => c.slug === article.category) || categories[0];
  const related = getRelatedArticles(article.slug, article.category, 3);

  // Find previous and next articles in the registry for navigation
  const currentIndex = articles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  const toggleBookmark = () => {
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

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;
    
    const comment = {
      id: Date.now(),
      author: newCommentName.trim(),
      role: 'Guest Developer',
      text: newCommentText.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };

    setComments([...comments, comment]);
    setNewCommentName('');
    setNewCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 4000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const breadcrumbsPaths = [
    { name: categoryData.name, url: `/category/${article.category}` },
    { name: article.title, url: `/article/${article.slug}` }
  ];

  return (
    <>
      <SEOHead 
        title={article.title}
        description={article.description}
        canonicalUrl={`https://demoadsense.com/article/${article.slug}`}
        ogType="article"
        ogImage={article.featuredImage}
        articleData={{
          title: article.title,
          description: article.description,
          image: article.featuredImage,
          publishedDate: article.publishedDate,
          updatedDate: article.updatedDate,
          category: categoryData.name,
          authorName: author.name,
          authorSlug: author.slug,
          tags: article.tags
        }}
        faqData={article.faqs}
        breadcrumbs={breadcrumbsPaths}
      />

      {/* Reading Progress Bar (Sticky Top) */}
      <div 
        className="fixed top-16 md:top-20 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 z-50 overflow-hidden"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-green-500 transition-all duration-75"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-4">
          
          {/* Main Article Column */}
          <article className="lg:col-span-8 bg-white dark:bg-slate-805 rounded-[18px] border border-slate-205 dark:border-slate-700/40 p-6 md:p-10 shadow-soft overflow-hidden">
            
            {/* Header info */}
            <header className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <Link 
                  to={`/category/${article.category}`}
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryData.color}`}
                >
                  {categoryData.name}
                </Link>

                <button
                  onClick={toggleBookmark}
                  className={`p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-green-50/30 transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-bold ${
                    isBookmarked ? 'text-green-600 dark:text-green-400 bg-green-50/20' : 'text-slate-400 hover:text-green-600'
                  }`}
                  aria-label="Bookmark this article"
                >
                  <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
                  <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                </button>
              </div>
              
              <h1 className="font-display font-black text-2.5xl sm:text-3.5xl md:text-4xl text-gray-900 dark:text-white leading-tight mb-4">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 dark:text-slate-500 pt-4 border-t border-slate-100 dark:border-slate-850">
                <Link to={`/author/${author.slug}`} className="flex items-center gap-2 group text-gray-805 dark:text-slate-200 font-semibold">
                  <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full object-cover" />
                  <span className="group-hover:text-green-500 transition-colors">{author.name}</span>
                </Link>
                <span>&bull;</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-green-500" /> {article.publishedDate}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-green-500" /> {article.readTime} read</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 rounded-[18px] overflow-hidden aspect-video">
              <img src={article.featuredImage} alt={article.title} className="w-full h-full object-cover" />
            </div>

            {/* Table of Contents */}
            {article.toc && article.toc.length > 0 && (
              <div className="mb-8 p-6 rounded-[18px] bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800">
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mb-3 flex items-center gap-2">
                  <BookOpen className="w-4.5 h-4.5 text-green-500" /> Table of Contents
                </h3>
                <ul className="space-y-2">
                  {article.toc.map((heading) => (
                    <li key={heading.id}>
                      <a 
                        href={`#${heading.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(heading.id);
                          if (el) {
                            const offset = 90;
                            const bodyRect = document.body.getBoundingClientRect().top;
                            const elementRect = el.getBoundingClientRect().top;
                            const elementPosition = elementRect - bodyRect;
                            const offsetPosition = elementPosition - offset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className="text-sm text-gray-600 dark:text-slate-400 hover:text-green-500 transition-colors hover:underline font-semibold"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content Body Container */}
            <div ref={articleContentRef} className="prose dark:prose-invert max-w-none text-gray-700 dark:text-slate-300 leading-relaxed font-sans text-base sm:text-lg space-y-6">
              {article.content.map((block, idx) => {
                
                // Add inline ad slots after paragraph blocks to maximize AdSense revenue
                const shouldRenderInlineAd = idx === 1 || idx === 4;

                switch (block.type) {
                  case 'paragraph':
                    return (
                      <React.Fragment key={idx}>
                        <p className="font-sans leading-relaxed text-gray-650 dark:text-slate-350">{block.text}</p>
                        {shouldRenderInlineAd && <InArticleAd />}
                      </React.Fragment>
                    );
                  
                  case 'heading2':
                    return <h2 key={idx} id={block.id} className="font-display font-extrabold text-xl sm:text-2xl text-gray-900 dark:text-white mt-10 mb-4">{block.text}</h2>;
                  
                  case 'heading3':
                    return <h3 key={idx} className="font-display font-extrabold text-lg sm:text-xl text-gray-900 dark:text-white mt-8 mb-3">{block.text}</h3>;
                  
                  case 'code':
                    return (
                      <div key={idx} className="relative group">
                        <pre className="p-4 rounded-[14px] bg-slate-900 text-slate-100 overflow-x-auto text-sm my-6 font-mono border border-slate-800 shadow-sm leading-relaxed">
                          <code className="block whitespace-pre">{block.code}</code>
                        </pre>
                      </div>
                    );
                  
                  case 'list':
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-650 dark:text-slate-350">
                        {block.items.map((item, index) => (
                          <li key={index} className="font-sans text-sm sm:text-base leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    );
                  
                  case 'tip':
                    return (
                      <div key={idx} className="flex gap-4 p-5 rounded-[14px] bg-green-50/50 dark:bg-green-950/20 border-l-4 border-green-500 text-slate-800 dark:text-green-200 my-6">
                        <Flame className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <div>
                          <span className="font-display font-bold text-sm block mb-0.5">PRO TIP</span>
                          <p className="text-sm font-sans leading-relaxed">{block.text}</p>
                        </div>
                      </div>
                    );
                  
                  case 'warning':
                    return (
                      <div key={idx} className="flex gap-4 p-5 rounded-[14px] bg-amber-50/50 dark:bg-amber-950/20 border-l-4 border-amber-500 text-slate-800 dark:text-amber-200 my-6">
                        <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                        <div>
                          <span className="font-display font-bold text-sm block mb-0.5">CAUTION</span>
                          <p className="text-sm font-sans leading-relaxed">{block.text}</p>
                        </div>
                      </div>
                    );
                  
                  case 'pros-cons':
                    return (
                      <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                        <div className="p-5 rounded-[14px] bg-green-50/30 dark:bg-green-950/10 border border-green-100 dark:border-green-950 text-slate-850 dark:text-green-300">
                          <h4 className="font-display font-bold text-sm mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" /> Key Strengths
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm font-sans leading-relaxed">
                            {block.pros.map((p, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-green-500 mt-1 flex-shrink-0" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-5 rounded-[14px] bg-red-50/30 dark:bg-red-950/10 border border-red-100 dark:border-red-950 text-slate-850 dark:text-red-300">
                          <h4 className="font-display font-bold text-sm mb-3 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-red-500" /> Crucial Trade-offs
                          </h4>
                          <ul className="space-y-2 text-xs sm:text-sm font-sans leading-relaxed">
                            {block.cons.map((c, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-red-500 font-bold leading-none mt-1 flex-shrink-0">&#8211;</span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  
                  default:
                    return null;
                }
              })}
            </div>

            {/* Social Share Buttons */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-between items-center gap-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-display">Share This Article</span>
              <div className="flex items-center space-x-2">
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-slate-500 hover:text-green-500 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl transition-all"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-slate-500 hover:text-green-600 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl transition-all"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-slate-500 hover:text-green-500 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl transition-all"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopyLink}
                  className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl transition-all flex items-center gap-1 cursor-pointer text-xs font-semibold"
                  aria-label="Copy link"
                >
                  {copySuccess ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copySuccess ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Author card footer section */}
            <div className="mt-12 p-6 rounded-[18px] bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <img src={author.avatar} alt={author.name} className="w-16 h-16 rounded-full object-cover border border-slate-205 dark:border-slate-800 shadow-sm flex-shrink-0" />
              <div className="text-center sm:text-left flex-grow">
                <Link to={`/author/${author.slug}`} className="font-display font-bold text-lg text-gray-900 dark:text-white hover:text-green-500 transition-colors">
                  Written by {author.name}
                </Link>
                <span className="text-xs text-slate-400 block mt-0.5 mb-2">{author.role}</span>
                <p className="text-sm text-gray-500 dark:text-slate-400 font-sans leading-relaxed">
                  {author.fullBio}
                </p>
              </div>
            </div>

            {/* Navigation rows prev/next */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-8">
              {prevArticle ? (
                <Link to={`/article/${prevArticle.slug}`} className="p-4 rounded-[14px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-green-500/20 transition-all flex flex-col group">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Previous
                  </span>
                  <span className="font-display font-bold text-sm text-gray-805 dark:text-slate-200 line-clamp-1 group-hover:text-green-500 transition-colors">
                    {prevArticle.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
              
              {nextArticle && (
                <Link to={`/article/${nextArticle.slug}`} className="p-4 rounded-[14px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-green-500/20 transition-all flex flex-col items-end text-right group">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                    Next <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="font-display font-bold text-sm text-gray-805 dark:text-slate-200 line-clamp-1 group-hover:text-green-500 transition-colors">
                    {nextArticle.title}
                  </span>
                </Link>
              )}
            </div>

            {/* Article Specific FAQ Section */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-805">
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5.5 h-5.5 text-green-500" /> Article FAQs
                </h3>
                <div className="space-y-4">
                  {article.faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="border border-slate-200 dark:border-slate-750 rounded-xl overflow-hidden shadow-xs"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full text-left px-5 py-3.5 flex justify-between items-center font-display font-bold text-sm text-gray-905 dark:text-white bg-slate-50/50 dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-700/20 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <span className="text-green-550 font-bold">{activeFaq === idx ? '−' : '+'}</span>
                      </button>
                      {activeFaq === idx && (
                        <div className="px-5 pb-4 pt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans border-t border-slate-100 dark:border-slate-800">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Comments UI Section */}
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-805">
              <h3 className="font-display font-bold text-gray-900 dark:text-white text-xl mb-6 flex items-center gap-2">
                <MessageSquare className="w-5.5 h-5.5 text-green-500" /> Readers Comments ({comments.length})
              </h3>
              
              <div className="space-y-4 mb-8">
                {comments.map((comment) => (
                  <div key={comment.id} className="p-5 rounded-[18px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-xs font-bold">
                          <User className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-slate-800 dark:text-white block">{comment.author}</span>
                          <span className="text-[10px] text-slate-400 block -mt-0.5">{comment.role}</span>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">{comment.date}</span>
                    </div>
                    <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-sans mt-2">{comment.text}</p>
                  </div>
                ))}
              </div>

              {/* Input forms with rounded-[14px] borders */}
              <form onSubmit={handlePostComment} className="p-6 rounded-[18px] bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800">
                <span className="text-sm font-bold text-gray-900 dark:text-white block mb-4">Post a Comment</span>
                {commentSuccess && (
                  <div className="p-3 text-xs bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-350 rounded-[14px] mb-4">
                    Comment posted successfully. Thank you for contributing!
                  </div>
                )}
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={newCommentName}
                      onChange={(e) => setNewCommentName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 text-sm rounded-[14px] border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your comment message here..." 
                      rows="4"
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 text-sm rounded-[14px] border border-slate-205 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-y"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full text-xs font-bold self-start cursor-pointer transition-colors"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Sidebar Ad Slot */}
            <SidebarAd />

            {/* Related Articles list */}
            <div className="p-6 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-205 dark:border-slate-700/40 shadow-soft">
              <h4 className="font-display font-bold text-gray-900 dark:text-white text-base mb-4 pb-2 border-b border-slate-100 dark:border-slate-700">
                Related Articles
              </h4>
              <div className="space-y-4">
                {related.map((art) => (
                  <div key={art.id} className="flex gap-3 items-start">
                    <img src={art.featuredImage} alt={art.title} className="w-16 h-12 object-cover rounded-lg flex-shrink-0" />
                    <div>
                      <Link 
                        to={`/article/${art.slug}`} 
                        className="font-display font-bold text-xs sm:text-sm text-gray-805 dark:text-slate-200 hover:text-green-500 transition-colors line-clamp-2 leading-tight"
                      >
                        {art.title}
                      </Link>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">{art.publishedDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter card widget */}
            <div className="p-6 rounded-[18px] bg-slate-900 text-white text-center shadow-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-2xl" />
              <h4 className="font-display font-bold text-base mb-2">Subscribe to Demo AdSense</h4>
              <p className="text-xs text-slate-350 mb-6 font-sans">
                Get our weekly articles on programming tips, Windows optimization, and laptop reviews direct to your email.
              </p>
              <button 
                onClick={() => {
                  const el = document.getElementById('footer-newsletter');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full inline-block px-4 py-2.5 text-xs font-bold bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors cursor-pointer"
              >
                Join Now
              </button>
            </div>

          </aside>

        </div>

        {/* Bottom Ad unit */}
        <BottomAd />

      </div>
    </>
  );
}
