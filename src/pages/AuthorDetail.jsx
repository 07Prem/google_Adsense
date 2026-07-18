import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Twitter, Github, Linkedin, AlertCircle, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ArticleCard from '../components/articles/ArticleCard';
import { authors } from '../data/authors';
import { articles } from '../data/articles';

export default function AuthorDetail() {
  const { authorSlug } = useParams();
  const author = authors.find(a => a.slug === authorSlug);

  if (!author) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">Author Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">The author profile you are looking for does not exist on TechAxioz.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  // Filter articles written by this author
  const authorArticles = articles.filter(art => art.authorSlug === author.slug);

  const breadcrumbsPaths = [
    { name: 'Authors Directory', url: '/authors' },
    { name: author.name, url: `/author/${author.slug}` }
  ];

  return (
    <>
      <SEOHead 
        title={`${author.name} - Technical Writer Profile`}
        description={author.bio}
        ogImage={author.avatar}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        {/* Profile Card */}
        <div className="my-8 md:my-12 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50 rounded-3xl p-6 md:p-10 shadow-xs flex flex-col md:flex-row items-center md:items-start gap-8">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-24 h-24 rounded-full object-cover border-2 border-slate-100 dark:border-slate-700 shadow-sm"
          />
          <div className="text-center md:text-left flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="font-display font-extrabold text-2.5xl md:text-3.5xl text-slate-900 dark:text-white leading-tight">
                  {author.name}
                </h1>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 block mt-0.5">{author.role}</span>
              </div>

              {/* Social Channels */}
              <div className="flex justify-center items-center space-x-2">
                <a href={author.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-green-500 transition-colors" aria-label="Twitter Profile">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={author.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub Profile">
                  <Github className="w-4 h-4" />
                </a>
                <a href={author.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-green-700 transition-colors" aria-label="LinkedIn Profile">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans mt-6 max-w-4xl border-t border-slate-100 dark:border-slate-700/60 pt-6">
              {author.fullBio}
            </p>
          </div>
        </div>

        {/* Written Articles */}
        <div className="space-y-6">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
            Articles Published by {author.name} ({authorArticles.length})
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authorArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
