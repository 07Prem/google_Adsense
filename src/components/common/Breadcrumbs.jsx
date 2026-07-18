import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumbs Component
 * Renders hierarchical links for standard pages and articles.
 * Helps navigation and structures breadcrumb metadata mapping.
 */
export default function Breadcrumbs({ paths = [] }) {
  return (
    <nav className="flex items-center space-x-2 py-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 overflow-x-auto scrollbar-none font-sans" aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-green-600 dark:hover:text-green-400 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Home</span>
      </Link>

      {paths.map((path, idx) => {
        const isLast = idx === paths.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700 flex-shrink-0" />
            {isLast ? (
              <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-xs">
                {path.name}
              </span>
            ) : (
              <Link 
                to={path.url} 
                className="hover:text-green-600 dark:hover:text-green-400 transition-colors truncate max-w-[150px]"
              >
                {path.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
