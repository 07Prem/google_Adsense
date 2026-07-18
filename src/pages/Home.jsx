import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, BookOpen, Terminal, Shield, Cpu, HelpCircle, 
  Star, Search, Award, TrendingUp, Compass, MessageSquare, Quote, Zap, Layers, Play, Mail,
  ShieldCheck, Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';

import SEOHead from '../components/seo/SEOHead';
import ArticleCard from '../components/articles/ArticleCard';
import SidebarAd from '../components/ads/SidebarAd';
import ResponsiveAd from '../components/ads/ResponsiveAd';

import { 
  getFeaturedArticles, 
  getLatestArticles, 
  getTrendingArticles, 
  articles 
} from '../data/articles';
import { categories } from '../data/categories';

export default function Home() {
  const navigate = useNavigate();
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const featured = getFeaturedArticles();
  const latest = getLatestArticles(6);
  const trending = getTrendingArticles(4);

  // Programmatic articles count per category
  const getCategoryCount = (slug) => {
    return articles.filter(a => a.category === slug).length;
  };

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (heroSearchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(heroSearchQuery.trim())}`);
    }
  };

  // Section 10: Testimonials Data
  const testimonials = [
    {
      quote: "TechAxioz has completely changed how our team benchmarks laptops. The SSD and CPU compile speed comparisons are incredibly precise.",
      author: "TechAxioz Reader",
      role: "Lead Software Architect",
      avatar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="%232563EB"/><path d="M14 15 L18 20 L14 25 M20 25 L26 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      quote: "The React optimization checklists are a goldmine. Our application's initial render times dropped by 40% after applying their tips.",
      author: "TechAxioz Subscriber",
      role: "Senior Frontend Engineer",
      avatar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="%2306B6D4"/><path d="M15 15 L11 20 L15 25 M25 15 L29 20 L25 25 M21 14 L19 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      quote: "Clean, human-written tutorials without the fluff. Finding practical, direct answers for Linux command configurations is effortless.",
      author: "TechAxioz Contributor",
      role: "DevOps Specialist",
      avatar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="20" fill="%230F172A"/><path d="M20 12 L14 14 V20 C14 24, 20 28, 20 28 C 20 28, 26 24, 26 20 V14 L20 12 Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    }
  ];

  // Section 11: FAQ Data
  const homeFaqs = [
    {
      question: "What is TechAxioz?",
      answer: "TechAxioz is an independent technology publishing platform specializing in tested programming guides, React render optimizations, system configurations, and developer hardware benchmarks."
    },
    {
      question: "Are the coding tutorials original?",
      answer: "Yes, absolutely. Every code block, setup instructions, and troubleshooting guide published on TechAxioz is built and verified locally by real web developers and system administrators."
    },
    {
      question: "Can I write for TechAxioz?",
      answer: "We support a contributor network. Visited our 'Write For Us' portal to submit your technical tutorials or product reviews."
    },
    {
      question: "How frequently is new content published?",
      answer: "We release detailed, verified technical guides weekly, covering Python automation, React component guidelines, security protocols, and new hardware releases."
    }
  ];

  const popularTags = [
    'React', 'JavaScript', 'Python', 'AI Tools', 'Next.js', 
    'Laptops', 'Cybersecurity', 'Web Performance', 'Linux CLI', 'VS Code'
  ];

  return (
    <>
      <SEOHead 
        title="Learn. Build. Grow. - Premium Tech Publication"
        description="TechAxioz is a professional tech blog presenting original web programming roadmaps, React optimizations, Python guides, and objective laptop evaluations."
      />

      <div className="bg-white dark:bg-slate-900 transition-colors duration-300 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">

          {/* =========================================================
              2. HERO SECTION
             ========================================================= */}
          <section className="mb-16 bg-white dark:bg-slate-850 rounded-[20px] border border-slate-205 dark:border-slate-700/40 p-8 md:p-12 lg:p-16 shadow-soft relative overflow-hidden">
            {/* Soft decorative background circles */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              {/* Hero details (Left Column) */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" /> High-Quality Technical Guides
                </span>
                
                <h1 className="font-display font-extrabold text-3.5xl sm:text-5xl leading-tight text-gray-900 dark:text-white tracking-tight">
                  Modern Development Guides.<br />
                  <span className="text-green-500">Learn. Build. Grow.</span>
                </h1>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-slate-350 leading-relaxed font-sans max-w-xl">
                  Discover actionable tutorials, system administration roadmaps, and hardware assessments crafted to help web engineers build high-performance products.
                </p>

                {/* Hero Search Box */}
                <form onSubmit={handleHeroSearch} className="relative max-w-md w-full flex items-center shadow-soft">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4" />
                  <input
                    type="text"
                    placeholder="Search React, Python, Laptop reviews..."
                    value={heroSearchQuery}
                    onChange={(e) => setHeroSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-32 py-3.5 text-sm rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder-slate-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-5 py-2 text-xs font-bold text-white bg-green-500 hover:bg-green-600 rounded-full cursor-pointer transition-colors"
                  >
                    Search
                  </button>
                </form>

                {/* Hero Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800 max-w-md">
                  <div>
                    <span className="block text-2xl font-black text-gray-900 dark:text-white leading-none">30+</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Tutorials</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-gray-900 dark:text-white leading-none">10k+</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Readers</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-gray-900 dark:text-white leading-none">100%</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Original</span>
                  </div>
                </div>
              </div>

              {/* Hero Image (Right Column: Custom graphic SVG layout & Info Panel) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <svg className="w-full max-w-[340px] md:max-w-[380px] h-auto drop-shadow-xl" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  {/* Browser Container */}
                  <rect x="10" y="20" width="380" height="280" rx="18" fill="white" stroke="#E2E8F0" strokeWidth="4" />
                  <rect x="10" y="20" width="380" height="40" rx="18" fill="#F8FAFC" />
                  <circle cx="35" cy="40" r="4.5" fill="#EF4444" />
                  <circle cx="48" cy="40" r="4.5" fill="#F59E0B" />
                  <circle cx="61" cy="40" r="4.5" fill="#10B981" />
                  <rect x="90" y="32" width="220" height="16" rx="8" fill="#E2E8F0" />
                  
                  {/* Code Block illustration */}
                  <rect x="35" y="85" width="180" height="60" rx="10" fill="#0F172A" />
                  <rect x="50" y="100" width="110" height="8" rx="4" fill="#38BDF8" />
                  <rect x="50" y="115" width="140" height="8" rx="4" fill="#4ADE80" />
                  <rect x="50" y="130" width="80" height="8" rx="4" fill="#F59E0B" />

                  {/* Growth chart block */}
                  <rect x="230" y="85" width="135" height="135" rx="12" fill="#ECFDF5" stroke="#D1FAE5" strokeWidth="2" />
                  <path d="M255 185 C 275 155, 295 165, 315 125 L 340 105" stroke="#10B981" strokeWidth="4.5" strokeLinecap="round" />
                  <circle cx="340" cy="105" r="5" fill="#84CC16" />

                  {/* UI mock controls */}
                  <rect x="35" y="160" width="180" height="60" rx="10" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                  <circle cx="60" cy="190" r="14" fill="#22C55E" />
                  <path d="M57 190 L63 190 M60 187 L60 193" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <rect x="85" y="180" width="100" height="8" rx="4" fill="#94A3B8" />
                  <rect x="85" y="195" width="60" height="6" rx="3" fill="#CBD5E1" />
                </svg>

                {/* Why Choose TechAxioz Trust Section */}
                <div className="w-full max-w-[420px] mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 font-sans">
                  <h3 className="font-display font-extrabold text-base text-gray-900 dark:text-white mb-2 text-center lg:text-left">
                    Why Choose TechAxioz?
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed mb-5 text-center lg:text-left">
                    TechAxioz is a trusted technology resource created to help developers, students, and technology enthusiasts learn faster, solve problems efficiently, and stay updated with the latest trends in software, hardware, AI, cybersecurity, and web development.
                  </p>
                  
                  {/* Feature Cards Grid */}
                  <div className="grid grid-cols-1 gap-3.5 mb-5">
                    {/* Card 1 */}
                    <div className="p-3.5 rounded-[18px] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex gap-3.5 group">
                      <div className="w-9 h-9 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-gray-900 dark:text-white mb-0.5">Trusted & Original Content</h4>
                        <p className="text-[11px] text-gray-500 dark:text-slate-400 leading-normal">Every article is researched, practical, and written to provide accurate and original technical information.</p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-3.5 rounded-[18px] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex gap-3.5 group">
                      <div className="w-9 h-9 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-gray-900 dark:text-white mb-0.5">Beginner Friendly Tutorials</h4>
                        <p className="text-[11px] text-gray-500 dark:text-slate-400 leading-normal">Step-by-step guides designed for beginners as well as experienced developers.</p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-3.5 rounded-[18px] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex gap-3.5 group">
                      <div className="w-9 h-9 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-gray-900 dark:text-white mb-0.5">Latest Technology Updates</h4>
                        <p className="text-[11px] text-gray-500 dark:text-slate-400 leading-normal">Stay informed about AI tools, programming languages, cybersecurity, laptops, smartphones, and emerging technologies.</p>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="p-3.5 rounded-[18px] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex gap-3.5 group">
                      <div className="w-9 h-9 rounded-full bg-green-50 dark:bg-green-950/20 text-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Rocket className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-gray-900 dark:text-white mb-0.5">Optimized Learning Resources</h4>
                        <p className="text-[11px] text-gray-500 dark:text-slate-400 leading-normal">Curated content that helps you build projects, improve coding skills, and solve real-world development challenges.</p>
                      </div>
                    </div>
                  </div>

                  {/* Clean stats row below cards */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-gray-600 dark:text-slate-400 font-semibold">
                    <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>100+ In-Depth Articles</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>20+ Tech Categories</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Updated Weekly</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>Free Learning Resources</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
              3. FEATURED CATEGORIES
             ========================================================= */}
          <section className="mb-16">
            <div className="flex flex-col mb-8 text-center sm:text-left">
              <h2 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white">
                Featured Categories
              </h2>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                Explore dedicated learning segments crafted to optimize your development skills.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.slice(0, 5).map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="flex flex-col p-6 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50 shadow-soft hover:shadow-lg transition-all group relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-green-500 to-green-400 text-white flex items-center justify-center mb-4 group-hover:scale-108 transition-transform shadow-sm">
                    {cat.slug === 'programming' && <Terminal className="w-6 h-6" />}
                    {cat.slug === 'react' && <Cpu className="w-6 h-6" />}
                    {cat.slug === 'javascript' && <BookOpen className="w-6 h-6" />}
                    {cat.slug === 'python' && <Terminal className="w-6 h-6" />}
                    {cat.slug === 'ai' && <Cpu className="w-6 h-6" />}
                    {(!['programming', 'react', 'javascript', 'python', 'ai'].includes(cat.slug)) && <Layers className="w-6 h-6" />}
                  </div>
                  
                  <span className="font-display font-bold text-base text-gray-900 dark:text-white mb-1">
                    {cat.name}
                  </span>
                  
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold font-sans">
                    {getCategoryCount(cat.slug)} Articles Published
                  </span>

                  <ArrowRight className="w-4 h-4 text-green-550 absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all" />
                </Link>
              ))}
            </div>
          </section>

          {/* =========================================================
              4. LATEST ARTICLES (3-Column Grid)
             ========================================================= */}
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white">
                  Latest Articles
                </h2>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                  Fresh technical guides, code snippets, and purchase checklists.
                </p>
              </div>
              <Link 
                to="/articles"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full border border-slate-205 dark:border-slate-700 hover:border-green-500 hover:bg-green-50 dark:hover:bg-slate-800 text-xs font-bold text-gray-700 dark:text-slate-200 transition-colors"
              >
                All Articles <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latest.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          {/* Responsive middle ad placeholder */}
          <ResponsiveAd />

          {/* =========================================================
              5. FEATURED GUIDES
             ========================================================= */}
          <section className="mb-16">
            <div className="flex flex-col mb-8 text-center sm:text-left">
              <h2 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white">
                Featured Engineering Guides
              </h2>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                In-depth technical papers covering critical optimization structures and CLI commands.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featured.slice(0, 2).map((article) => (
                <div 
                  key={article.id}
                  className="p-6 md:p-8 rounded-[18px] bg-white dark:bg-slate-850 border border-slate-205 dark:border-slate-700/40 shadow-soft hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-6"
                >
                  <img 
                    src={article.featuredImage} 
                    alt={article.title} 
                    className="w-full md:w-44 h-28 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest font-sans">
                        {article.category.toUpperCase()}
                      </span>
                      <Link 
                        to={`/article/${article.slug}`}
                        className="block font-display font-bold text-lg text-gray-900 dark:text-white hover:text-green-500 leading-snug mt-1 mb-2 transition-colors"
                      >
                        {article.title}
                      </Link>
                      <p className="text-xs text-gray-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                        {article.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100 dark:border-slate-800">
                      <span className="font-semibold text-slate-400">{article.publishedDate}</span>
                      <Link 
                        to={`/article/${article.slug}`}
                        className="font-bold text-green-600 dark:text-green-400 hover:text-green-700 flex items-center gap-1"
                      >
                        Read Guide <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================
              6. EDITOR'S PICKS
             ========================================================= */}
          <section className="mb-16 bg-white dark:bg-slate-850 rounded-[20px] p-6 md:p-10 border border-slate-200/60 dark:border-slate-700/45 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Highlight Details */}
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/20 border border-amber-205 dark:border-amber-900/50 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" /> Editor's Top Recommendation
                </span>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-tight leading-snug">
                  {featured[0]?.title || articles[0].title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-sans max-w-xl">
                  {featured[0]?.description || articles[0].description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-400 pt-3">
                  <span>Published by Elena Rodriguez</span>
                  <span>&bull;</span>
                  <span>{featured[0]?.publishedDate || articles[0].publishedDate}</span>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/article/${featured[0]?.slug || articles[0].slug}`}
                    className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold transition-colors text-xs uppercase tracking-wider inline-flex items-center gap-1"
                  >
                    Explore Spotlight <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Graphic container */}
              <div className="lg:col-span-5">
                <img 
                  src={featured[0]?.featuredImage || articles[0].featuredImage} 
                  alt="Spotlight graphic" 
                  className="w-full h-56 object-cover rounded-[14px]"
                />
              </div>

            </div>
          </section>

          {/* =========================================================
              7. TRENDING ARTICLES (Magazine Style Layout)
             ========================================================= */}
          <section className="mb-16">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-8">
              <h3 className="font-display font-extrabold text-xl text-gray-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-5.5 h-5.5 text-green-500" /> Trending Topics
              </h3>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest font-sans">
                Most Visited
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Large Featured Article */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-[18px] border border-slate-205 dark:border-slate-700/40 p-6 shadow-soft">
                <img 
                  src={trending[0].featuredImage} 
                  alt={trending[0].title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest font-sans">
                  TRENDING #1
                </span>
                <Link 
                  to={`/article/${trending[0].slug}`}
                  className="block font-display font-bold text-xl text-gray-900 dark:text-white hover:text-green-550 leading-snug mt-1 mb-3 transition-colors"
                >
                  {trending[0].title}
                </Link>
                <p className="text-sm text-gray-550 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6">
                  {trending[0].description}
                </p>
                <Link 
                  to={`/article/${trending[0].slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 hover:text-green-700"
                >
                  Read Trending Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Right Column: Smaller side items with modern numbering */}
              <div className="lg:col-span-5 space-y-4">
                {trending.slice(1, 4).map((art, idx) => (
                  <div 
                    key={art.id} 
                    className="flex gap-4 p-5 bg-white dark:bg-slate-800 border border-slate-205 dark:border-slate-700/40 rounded-[18px] shadow-soft"
                  >
                    <span className="font-display font-black text-2xl text-green-200 dark:text-slate-700 flex-shrink-0 w-8">
                      0{idx + 2}
                    </span>
                    <div>
                      <Link 
                        to={`/article/${art.slug}`}
                        className="font-display font-bold text-sm sm:text-base text-gray-905 dark:text-white hover:text-green-550 leading-snug transition-colors line-clamp-2"
                      >
                        {art.title}
                      </Link>
                      <span className="text-[11px] text-slate-400 block mt-1">
                        {art.publishedDate} &bull; {art.readTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* =========================================================
              8. POPULAR TOPICS (Tag Cloud)
             ========================================================= */}
          <section className="mb-16 max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <Compass className="w-7 h-7 text-green-500 mx-auto mb-2" />
              <h2 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white">
                Popular Topics
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Select tags to instantly filter our repository index.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {popularTags.map((tag) => (
                <Link
                  key={tag}
                  to={`/articles?tag=${encodeURIComponent(tag.toLowerCase())}`}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-205 dark:border-slate-700 text-gray-700 dark:text-slate-350 hover:border-green-550 hover:bg-green-50/20 transition-all shadow-xs"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </section>

          {/* Sidebar & Categories content side alignment */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Category archive sub-column */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                    Python & Automation Tutorials
                  </h3>
                  <div className="h-1 w-12 bg-green-500 rounded-full mt-2" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {articles.filter(a => a.category === 'python').slice(0, 2).map((art) => (
                    <ArticleCard key={art.id} article={art} />
                  ))}
                </div>
              </div>

              {/* Sidebar items */}
              <div className="lg:col-span-4 space-y-8">
                {/* Popular articles widget */}
                <div className="p-6 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-205 dark:border-slate-700/40 shadow-soft">
                  <h4 className="font-display font-bold text-gray-900 dark:text-white text-sm mb-4 pb-2 border-b border-slate-100 dark:border-slate-700">
                    Recommended Reads
                  </h4>
                  <div className="space-y-4">
                    {articles.slice(5, 8).map((art) => (
                      <div key={art.id} className="flex gap-3">
                        <img src={art.featuredImage} alt={art.title} className="w-14 h-11 object-cover rounded-lg flex-shrink-0" />
                        <div>
                          <Link 
                            to={`/article/${art.slug}`}
                            className="font-display font-bold text-xs text-gray-805 dark:text-slate-200 hover:text-green-500 leading-tight block line-clamp-2"
                          >
                            {art.title}
                          </Link>
                          <span className="text-[10px] text-slate-400 block mt-0.5">{art.publishedDate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar Ad Placement */}
                <SidebarAd />
              </div>

            </div>
          </section>

          {/* =========================================================
              9. NEWSLETTER
             ========================================================= */}
          <section id="newsletter-section" className="mb-16 bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-[20px] p-8 md:p-12 text-center shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
            <div className="max-w-xl mx-auto space-y-5">
              <Mail className="w-8 h-8 text-green-500 mx-auto" />
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight">
                Subscribe for Technical Insights
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 font-sans leading-relaxed">
                Join our dev list to receive vetted React guides, Python automation tools, and laptop benchmarks. Zero spam, unsubscribe anytime.
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById('footer-newsletter');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold transition-colors text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-green-500/10"
              >
                Sign Up Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* =========================================================
              10. TESTIMONIALS (New Section!)
             ========================================================= */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <MessageSquare className="w-7 h-7 text-green-500 mx-auto mb-2" />
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white">
                Developer Community Reviews
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Read what engineers and developers think about TechAxioz guides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-205 dark:border-slate-700/40 shadow-soft flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 text-amber-500 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-650 dark:text-slate-350 leading-relaxed font-sans italic mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                    <img 
                      src={t.avatar} 
                      alt={t.author} 
                      className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                    />
                    <div>
                      <span className="block text-xs font-bold text-gray-900 dark:text-white">{t.author}</span>
                      <span className="block text-[10px] text-slate-400 dark:text-slate-500">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================
              11. FAQ SECTION
             ========================================================= */}
          <section className="mb-12 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <HelpCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Quick answers regarding content authenticity and review frameworks.
              </p>
            </div>

            <div className="space-y-4">
              {homeFaqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-white dark:bg-slate-800 border border-slate-205 dark:border-slate-700/40 rounded-2xl overflow-hidden transition-all shadow-soft"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center font-display font-bold text-sm text-gray-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/35 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-green-500 font-bold text-lg">{activeFaq === idx ? '−' : '+'}</span>
                  </button>
                  
                  {activeFaq === idx && (
                    <div className="px-6 pb-5 text-sm text-gray-550 dark:text-slate-400 leading-relaxed font-sans border-t border-slate-100 dark:border-slate-850 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
