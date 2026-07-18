import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function Editorial() {
  const breadcrumbsPaths = [{ name: 'Editorial Policy', url: '/editorial' }];

  return (
    <>
      <SEOHead 
        title="Editorial Policy & Accuracy Standards"
        description="Read the Demo AdSense Editorial Policy. Learn about our content reviews, code checks, and standards for publication."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <Breadcrumbs paths={breadcrumbsPaths} />
        
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mb-6">
            Editorial Policy
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-8 font-sans">Last Updated: July 19, 2026</p>

          <div className="prose dark:prose-invert text-slate-700 dark:text-slate-350 space-y-6 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              **Demo AdSense** is committed to publishing highly accurate, helpful, and transparent content. Our editorial policy outlines our commitment to standard workflows and technical integrity.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">Core Editorial Principles</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Technical Accuracy:** Every code snippet, terminal command, and configuration instruction is tested locally before publishing.</li>
              <li>**No Plagiarism:** We enforce zero tolerance for copied or rehashed content. Every article represents original technical writing.</li>
              <li>**Unbiased Hardware Benchmarking:** We do not accept payment to improve benchmarks. All laptop, screen, and accessory reviews represent objective benchmarks.</li>
              <li>**Corrections Policy:** If we identify or receive reader feedback regarding a code bug, outdated syntax, or factual error, we commit to reviewing and updating the article within 48 hours.</li>
            </ul>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">AI Content Policy</h2>
            <p>
              We believe in human-led technical education. While we use AI translation tools for basic spelling and grammar checks, all of our articles are written, structured, and code-verified by human engineers and hardware reviewers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
