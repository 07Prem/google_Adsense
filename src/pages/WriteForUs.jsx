import React from 'react';
import { Edit3, CheckCircle, FileText, Send } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function WriteForUs() {
  const breadcrumbsPaths = [{ name: 'Write For Us', url: '/write-for-us' }];

  return (
    <>
      <SEOHead 
        title="Write For Us - TechAxioz Contributors"
        description="Read our submission guidelines and learn how to contribute technical tutorials, debugging tips, or reviews to TechAxioz."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        <div className="max-w-3xl mx-auto py-8">
          
          <div className="text-center mb-12">
            <Edit3 className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h1 className="font-display font-extrabold text-3.5xl md:text-4.5xl text-slate-900 dark:text-white leading-tight">
              Write For Us
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 mt-2 font-sans">
              Share your technical expertise with the TechAxioz reader community.
            </p>
            <div className="h-1 w-16 bg-green-600 rounded-full mx-auto mt-4" />
          </div>

          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 font-sans">
            <p className="text-base leading-relaxed">
              Are you a web developer, systems architect, Linux system administrator, or hardware enthusiast who loves writing? We are always looking for technical writers who can explain complex processes clearly.
            </p>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-8 mb-4">What We Publish</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Programming Tutorials:** Practical, code-heavy walkthroughs mapping out real solutions in React, JavaScript, Node.js, Python, or Go.</li>
              <li>**Debugging Tips:** Step-by-step checklists or walkthroughs diagnosing common compiler, rendering, or package errors.</li>
              <li>**Systems & CLI Guides:** Essential operations for Linux, WSL2, terminal customizations, and shell automation.</li>
              <li>**Unbiased Reviews:** Objective benchmarks and breakdowns of screens, mechanical keyboards, SSDs, and coding laptops.</li>
            </ul>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-8 mb-4">Submission Guidelines</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We maintain a high bar for our articles to ensure value for our readers and maintain compliance with search engine policies:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white mb-2">Original Content</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  We accept only completely original content. We run all submissions through plagiarism checkers and AI detection metrics.
                </p>
              </div>

              <div className="p-5 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                <FileText className="w-5 h-5 text-emerald-600 mb-2" />
                <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white mb-2">Length & Structure</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Articles should be between 1,500 and 2,500 words, utilizing clear heading hierarchies (H2, H3), bullet points, and code blocks.
                </p>
              </div>
            </div>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-8 mb-4">How to Apply</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Send an email to **write@techaxioz.com** with the subject line "Contributor Application: [Your Name]". Please include:
            </p>
            <ul className="list-decimal pl-6 space-y-2">
              <li>A short bio explaining your technical background and experience.</li>
              <li>Links to 2 or 3 technical articles you have published previously.</li>
              <li>A bulleted list of 3 specific article pitches you would like to write for TechAxioz.</li>
            </ul>
          </div>

        </div>

      </div>
    </>
  );
}
