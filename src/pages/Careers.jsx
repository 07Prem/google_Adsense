import React from 'react';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function Careers() {
  const breadcrumbsPaths = [{ name: 'Careers', url: '/careers' }];

  const openings = [
    { title: 'Technical Writer (React/JavaScript Focus)', type: 'Freelance / Remote', desc: 'Draft detailed developer guides, coordinate code examples, and write code tutorials.' },
    { title: 'Hardware Editor & Reviewer', type: 'Contract / Remote', desc: 'Perform hardware benchmarks, evaluate consumer laptops/peripherals, and compose buying guides.' },
    { title: 'Technical Copy Editor', type: 'Part-time / Remote', desc: 'Fact-check and edit technical code files, fix stylistic copy, and ensure grammar standards.' }
  ];

  return (
    <>
      <SEOHead 
        title="Careers at TechAxioz - Job Openings"
        description="Join our team at TechAxioz. Browse contract, freelance, and remote opportunities for technical authors and tech editors."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        <div className="max-w-3xl mx-auto py-8">
          
          <div className="text-center mb-12">
            <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h1 className="font-display font-extrabold text-3.5xl md:text-4.5xl text-slate-900 dark:text-white leading-tight">
              Careers at TechAxioz
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 mt-2 font-sans">
              Help us write simple solutions for smart technology questions.
            </p>
            <div className="h-1 w-16 bg-green-600 rounded-full mx-auto mt-4" />
          </div>

          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 font-sans">
            <p className="text-base leading-relaxed">
              At **TechAxioz**, we are building a world-class technology publication powered by a collaborative network of remote software engineers, DevOps experts, hardware benchmarks, and editors. We work without physical boundaries, valuing clarity, technical authenticity, and quality above all else.
            </p>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-8 mb-4">Open Opportunities</h2>
            
            <div className="space-y-4 pt-2">
              {openings.map((job, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-green-500/20 transition-all shadow-xs"
                >
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white leading-snug">{job.title}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-green-600 dark:text-green-400 font-bold mt-1 block">{job.type}</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-sans">{job.desc}</p>
                  </div>
                  
                  <a 
                    href="mailto:careers@techaxioz.com" 
                    className="flex items-center gap-1 text-xs font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex-shrink-0"
                  >
                    Apply <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-8 mb-4">Equal Opportunity</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              TechAxioz is an equal-opportunity publisher. We celebrate diversity of experiences and reject discrimination on gender, age, race, religion, sexual orientation, disability, or location.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}
