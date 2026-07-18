import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookOpen, Search, ArrowRight, Grid, List } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ArticleCard from '../components/articles/ArticleCard';
import { articles } from '../data/articles';

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get('tag') || '';
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique tags from articles for filtering
  const allTags = Array.from(
    new Set(articles.flatMap(article => article.tags))
  ).slice(0, 15); // Show top 15 tags

  // Filter articles based on active tag and search query
  const filteredArticles = articles.filter(article => {
    const matchesTag = activeTag
      ? article.tags.some(t => t.toLowerCase() === activeTag.toLowerCase())
      : true;
    const matchesSearch = searchQuery
      ? article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesTag && matchesSearch;
  });

  const handleTagClick = (tag) => {
    if (activeTag === tag) {
      // Clear tag filter
      searchParams.delete('tag');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ tag });
    }
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };

  const breadcrumbsPaths = [{ name: 'Articles Archive', url: '/articles' }];

  return (
    <>
      <SEOHead 
        title={activeTag ? `Articles tagged with "${activeTag}"` : 'All Technical Articles'}
        description="Browse all technical guides, React render optimizations, debugging checklists, programming roadmaps, and hardware reviews."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        {/* Page Header */}
        <div className="my-8 md:my-12 text-center max-w-2xl mx-auto">
          <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white">
            {activeTag ? `Tagged: "${activeTag}"` : 'Demo AdSense Articles Archive'}
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2 font-sans">
            {activeTag 
              ? `Showing all articles categorised under the tag "${activeTag}".` 
              : 'Discover expert guides on coding paradigms, system security, and developer setups.'
            }
          </p>
        </div>

        {/* Filter controls / search bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Grid display */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Showing {filteredArticles.length} of {articles.length} Articles
              </span>
              {(activeTag || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-bold text-green-600 dark:text-green-400 hover:underline cursor-pointer"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-[20px] border border-slate-200/60 dark:border-slate-700/50">
                <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">No articles found</h3>
                <p className="text-sm text-slate-400 mt-1 max-w-xs mx-auto">
                  Try adjusting your search criteria or tags to find what you are looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-5 py-2.5 text-xs font-bold text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                >
                  Show All Articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar Filters */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Search Input Filter */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50 rounded-[18px] p-5 shadow-soft">
              <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-3 font-display">
                Search Sub-Archive
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Filter by keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-3 pr-9 py-2.5 text-sm rounded-[14px] border border-slate-200 dark:border-slate-750 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
                <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
              </div>
            </div>

            {/* Popular Tags List */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50 rounded-[18px] p-5 shadow-soft">
              <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-3 font-display">
                Browse by Tag
              </h4>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => {
                  const isActive = activeTag.toLowerCase() === tag.toLowerCase();
                  return (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                        isActive
                          ? 'bg-green-600 text-white'
                          : 'bg-slate-50 dark:bg-slate-900 text-slate-650 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-green-500/20 hover:bg-green-50/20'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
