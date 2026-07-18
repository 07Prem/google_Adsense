import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Twitter, Github, Linkedin, ArrowRight } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { authors } from '../data/authors';

export default function Authors() {
  const breadcrumbsPaths = [{ name: 'Authors Directory', url: '/authors' }];

  return (
    <>
      <SEOHead 
        title="Authors Directory - TechAxioz Contributors"
        description="Meet the technical writers, software engineers, and hardware specialists who author articles on TechAxioz."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        <div className="my-8 md:my-12 text-center max-w-2xl mx-auto">
          <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white">
            TechAxioz Authors
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2 font-sans">
            Our content is written and audited by veteran developers, security professionals, and consumer hardware specialists.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {authors.map((author) => (
            <div 
              key={author.slug}
              className="bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50 rounded-3xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div className="flex gap-4 items-start mb-6">
                <img 
                  src={author.avatar} 
                  alt={author.name} 
                  className="w-16 h-16 rounded-full object-cover border border-slate-100 dark:border-slate-750 flex-shrink-0"
                />
                <div>
                  <Link to={`/author/${author.slug}`} className="font-display font-extrabold text-lg text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    {author.name}
                  </Link>
                  <span className="text-xs text-slate-400 dark:text-slate-500 block mt-0.5">{author.role}</span>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed mt-3">
                    {author.bio}
                  </p>
                </div>
              </div>

              {/* Author footer socials & links */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-2">
                  <a href={author.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-green-500 transition-colors" aria-label={`${author.name} Twitter`}>
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={author.socials.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label={`${author.name} GitHub`}>
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={author.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-green-700 transition-colors" aria-label={`${author.name} LinkedIn`}>
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <Link 
                  to={`/author/${author.slug}`} 
                  className="flex items-center gap-1 text-xs font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                >
                  View Profile <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}
