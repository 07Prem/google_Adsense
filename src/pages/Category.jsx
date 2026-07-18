import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Terminal, Shield, Cpu, BookOpen, AlertCircle, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ArticleCard from '../components/articles/ArticleCard';
import { getArticlesByCategory } from '../data/articles';
import { categories } from '../data/categories';

export default function Category() {
  const { category: categorySlug } = useParams();
  
  const categoryData = categories.find(c => c.slug === categorySlug);
  const categoryArticles = getArticlesByCategory(categorySlug);

  if (!categoryData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">Category Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">The category you are looking for does not exist on Demo AdSense.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const breadcrumbsPaths = [
    { name: 'Articles Archive', url: '/articles' },
    { name: categoryData.name, url: `/category/${categorySlug}` }
  ];

  return (
    <>
      <SEOHead 
        title={`${categoryData.name} Guides & Tutorials`}
        description={categoryData.description}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        {/* Category Header */}
        <div className="my-8 md:my-12 p-6 md:p-10 rounded-[20px] bg-white dark:bg-slate-805 border border-slate-205 dark:border-slate-700/40 shadow-soft flex flex-col md:flex-row items-center gap-6 font-sans">
          <div className="w-14 h-14 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
            {categorySlug === 'programming' && <Terminal className="w-7 h-7" />}
            {categorySlug === 'react' && <Cpu className="w-7 h-7" />}
            {categorySlug === 'javascript' && <BookOpen className="w-7 h-7" />}
            {categorySlug === 'python' && <Terminal className="w-7 h-7" />}
            {categorySlug === 'ai' && <Cpu className="w-7 h-7" />}
            {categorySlug === 'cybersecurity' && <Shield className="w-7 h-7" />}
            {(!['programming', 'react', 'javascript', 'python', 'ai', 'cybersecurity'].includes(categorySlug)) && <BookOpen className="w-7 h-7" />}
          </div>
          <div>
            <h1 className="font-display font-black text-2.5xl md:text-3.5xl text-gray-900 dark:text-white leading-tight">
              {categoryData.name} Segment
            </h1>
            <p className="text-sm md:text-base text-gray-550 dark:text-slate-400 mt-2 max-w-3xl leading-relaxed">
              {categoryData.description}
            </p>
          </div>
        </div>

        {/* Article Grid listing */}
        <div className="space-y-6">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-display">
            Archived Guides in {categoryData.name} ({categoryArticles.length})
          </span>

          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-[18px] border border-slate-205 dark:border-slate-700/50">
              <BookOpen className="w-10 h-10 text-slate-350 mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white font-display">No articles published yet</h3>
              <p className="text-sm text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
                Check back shortly. Our editorial team is currently drafting high-quality articles for the {categoryData.name} category.
              </p>
            </div>
          )}
        </div>

      </div>
    </>
  );
}
