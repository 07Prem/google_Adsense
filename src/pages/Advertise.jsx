import React from 'react';
import { DollarSign, ShieldAlert, BarChart, Percent } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function Advertise() {
  const breadcrumbsPaths = [{ name: 'Advertise', url: '/advertise' }];

  return (
    <>
      <SEOHead 
        title="Advertise With Us - Demo AdSense Media Kit"
        description="Learn about advertising, sponsored content, newsletter placements, and programmatic ad integrations on Demo AdSense."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        <div className="max-w-3xl mx-auto py-8">
          
          <div className="text-center mb-12">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h1 className="font-display font-extrabold text-3.5xl md:text-4.5xl text-slate-900 dark:text-white leading-tight">
              Advertise on Demo AdSense
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 mt-2 font-sans">
              Connect your developer tools, services, and hardware with our global audience.
            </p>
            <div className="h-1 w-16 bg-green-600 rounded-full mx-auto mt-4" />
          </div>

          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 font-sans">
            <p className="text-base leading-relaxed">
              **Demo AdSense** is a high-growth technology publication read by software engineers, frontend developers, SysAdmins, hardware enthusiasts, and students. By aligning your brand with our premium content, you can reach active buyers searching for developer tools and gear.
            </p>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-8 mb-4">Our Traffic & Demographics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-center">
                <BarChart className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <span className="font-display font-black text-xl text-slate-900 dark:text-white block">150K+</span>
                <span className="text-xs text-slate-400">Monthly Pageviews</span>
              </div>

              <div className="p-5 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-center">
                <Percent className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <span className="font-display font-black text-xl text-slate-900 dark:text-white block">82%</span>
                <span className="text-xs text-slate-400">Developers & Tech Workers</span>
              </div>

              <div className="p-5 rounded-[18px] bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-center">
                <ShieldAlert className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <span className="font-display font-black text-xl text-slate-900 dark:text-white block">64%</span>
                <span className="text-xs text-slate-400">North American Visitors</span>
              </div>
            </div>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-8 mb-4">Ad Formats We Offer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>**Programmatic Display Ads:** Standard banner, sidebar, and in-article spots integrated via Google AdSense or Prebid exchanges.</li>
              <li>**Newsletter Placements:** Dedicated sponsor blocks or text recommendations inside our weekly newsletter.</li>
              <li>**Sponsored In-Depth Guides:** Custom technical guides demonstrating how to solve real engineering problems using your API, SDK, or tool.</li>
            </ul>

            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-8 mb-4">Get Our Media Kit</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              If you are interested in advertising options, rates, and audience graphs, please email **advertise@demoadsense.com**. Our media team will send you our latest PDF Media Kit and schedule a campaign call.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}
