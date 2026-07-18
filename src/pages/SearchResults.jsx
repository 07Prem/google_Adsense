import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Search, AlertCircle, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ArticleCard from '../components/articles/ArticleCard';
import { searchArticlesQuery } from '../data/articles';

export default function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [localQuery, setLocalQuery] = useState(query);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setLocalQuery(query);
    const searchResults = searchArticlesQuery(query);
    setResults(searchResults);
  }, [query]);

  const handleLocalSearchSubmit = (e) => {
    e.preventDefault();
    if (localQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(localQuery.trim())}`);
    }
  };

  const breadcrumbsPaths = [
    { name: 'Search Results', url: `/search?q=${query}` }
  ];

  return (
    <>
      <SEOHead 
        title={query ? `Search Results for "${query}"` : 'Search Articles'}
        description="Search Demo AdSense for debugging tips, coding tutorials, Linux commands, or hardware buying guides."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        {/* Search header */}
        <div className="my-8 md:my-12 max-w-xl mx-auto text-center font-sans">
          <Search className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h1 className="font-display font-black text-2.5xl md:text-3.5xl text-gray-900 dark:text-white leading-tight">
            Search Demo AdSense
          </h1>
          <p className="text-sm text-gray-500 mt-2 mb-6">
            Looking for something specific? Enter a programming topic, tag, or hardware name.
          </p>

          <form onSubmit={handleLocalSearchSubmit} className="relative flex items-center w-full shadow-soft">
            <input
              type="text"
              placeholder="Search keyword..."
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 rounded-[14px] border border-slate-205 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full text-xs font-bold cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results grid */}
        <div className="space-y-6">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-display">
            {query 
              ? `Found ${results.length} results for "${query}"` 
              : 'Enter a search term above'
            }
          </span>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            query && (
              <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-[18px] border border-slate-205 dark:border-slate-700/50 max-w-lg mx-auto">
                <AlertCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white font-display">No matches found</h3>
                <p className="text-sm text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
                  We couldn't find any articles matching your search query. Try checking your spelling or typing general terms like "React" or "Laptop".
                </p>
                <Link
                  to="/articles"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                >
                  Browse Archive
                </Link>
              </div>
            )
          )}
        </div>

      </div>
    </>
  );
}
