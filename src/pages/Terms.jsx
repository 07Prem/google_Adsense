import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function Terms() {
  const breadcrumbsPaths = [{ name: 'Terms & Conditions', url: '/terms' }];

  return (
    <>
      <SEOHead 
        title="Terms & Conditions"
        description="Review the Terms & Conditions governing the use of Demo AdSense website and services."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <Breadcrumbs paths={breadcrumbsPaths} />
        
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-8 font-sans">Last Updated: July 19, 2026</p>

          <div className="prose dark:prose-invert text-slate-700 dark:text-slate-350 space-y-6 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              Welcome to Demo AdSense! These terms and conditions outline the rules and regulations for the use of Demo AdSense's Website, located at https://demoadsense.com.
            </p>
            <p>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Demo AdSense if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">Cookies</h2>
            <p>
              We employ the use of cookies. By accessing Demo AdSense, you agreed to use cookies in agreement with the Demo AdSense's Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">License</h2>
            <p>
              Unless otherwise stated, Demo AdSense and/or its licensors own the intellectual property rights for all material on Demo AdSense. All intellectual property rights are reserved. You may access this from Demo AdSense for your own personal use subjected to restrictions set in these terms and conditions.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">You must not:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republish material from Demo AdSense</li>
              <li>Sell, rent or sub-license material from Demo AdSense</li>
              <li>Reproduce, duplicate or copy material from Demo AdSense</li>
              <li>Redistribute content from Demo AdSense</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
