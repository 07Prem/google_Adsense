import React from 'react';
import { Sparkles, Users, Award, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function About() {
  const breadcrumbsPaths = [{ name: 'About Us', url: '/about' }];

  return (
    <>
      <SEOHead 
        title="About Demo AdSense"
        description="Learn more about our mission, editorial standards, and our team of technical authors and hardware reviewers at Demo AdSense."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        <div className="max-w-3xl mx-auto py-8">
          
          <div className="text-center mb-12">
            <h1 className="font-display font-extrabold text-3.5xl md:text-4.5xl text-slate-900 dark:text-white leading-tight">
              About Demo AdSense
            </h1>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mt-2 font-sans">
              Quality Content. Better Earnings.
            </p>
            <div className="h-1 w-16 bg-green-600 rounded-full mx-auto mt-4" />
          </div>

          {/* Mission */}
          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 font-sans">
            <p className="text-base sm:text-lg leading-relaxed">
              Founded in 2026, **Demo AdSense** is a modern, independent technology publication dedicated to providing clear, authoritative, and actionable guides for software engineers, designers, system administrators, and technology buyers.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              In a digital landscape flooded with shallow summaries and automated templates, Demo AdSense stands apart. We believe in the power of deep-dive, human-authored content. Our primary goal is to help you debug code quicker, write scripts faster, configure secure servers, and purchase hardware that suits your demands.
            </p>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-10 mb-4">Our Core Pillars</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                <Users className="w-6 h-6 text-green-600 mb-3" />
                <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white mb-2">Human Expertise</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Our articles are researched and written exclusively by experienced developers, DevOps trainers, and hardware testers.
                </p>
              </div>

              <div className="p-5 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                <Award className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white mb-2">Unbiased Reviews</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  We accept no direct sponsorship to alter hardware benchmarks. Our laptop, monitor, and SSD buying advice is objective.
                </p>
              </div>

              <div className="p-5 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                <ShieldCheck className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white mb-2">Clean Security</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  We prioritize user safety. We write secure tutorials, configure standard setups, and protect user data integrity.
                </p>
              </div>
            </div>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-10 mb-4">AdSense & Advertiser Compliance</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We structure our advertising strictly according to Google AdSense guidelines. You will experience no intrusive popups, auto-playing audio feeds, or misleading overlay buttons on Demo AdSense. Spacing around our ad slots is carefully handled to prevent layouts shifting or accidental clicks.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}
