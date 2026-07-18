import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LayoutWrapper from './components/layout/LayoutWrapper';

// Lazy loading components for code splitting & optimization
const Home = lazy(() => import('./pages/Home'));
const Articles = lazy(() => import('./pages/Articles'));
const Category = lazy(() => import('./pages/Category'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const WriteForUs = lazy(() => import('./pages/WriteForUs'));
const Advertise = lazy(() => import('./pages/Advertise'));
const Careers = lazy(() => import('./pages/Careers'));
const Authors = lazy(() => import('./pages/Authors'));
const AuthorDetail = lazy(() => import('./pages/AuthorDetail'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookie = lazy(() => import('./pages/Cookie'));
const Dmca = lazy(() => import('./pages/Dmca'));
const Editorial = lazy(() => import('./pages/Editorial'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Fallback spinner component during code chunk resolution
function PageLoader() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-green-100 border-t-green-600 rounded-full animate-spin" />
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest animate-pulse">Loading Page...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <LayoutWrapper>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Primary Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/article/:slug" element={<ArticleDetail />} />
              <Route path="/search" element={<SearchResults />} />
              
              {/* Corporate Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/write-for-us" element={<WriteForUs />} />
              <Route path="/advertise" element={<Advertise />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/author/:authorSlug" element={<AuthorDetail />} />
              
              {/* Legal & Policy Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookie" element={<Cookie />} />
              <Route path="/dmca" element={<Dmca />} />
              <Route path="/editorial" element={<Editorial />} />

              {/* 404 Routing */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </LayoutWrapper>
      </Router>
    </HelmetProvider>
  );
}
