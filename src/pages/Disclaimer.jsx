import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function Disclaimer() {
  const breadcrumbsPaths = [{ name: 'Disclaimer', url: '/disclaimer' }];

  return (
    <>
      <SEOHead 
        title="Disclaimer"
        description="Review the Demo AdSense Editorial Disclaimer. Details regarding informational accuracy, professional advice, and affiliate links."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <Breadcrumbs paths={breadcrumbsPaths} />
        
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mb-6">
            Disclaimer
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-8 font-sans">Last Updated: July 19, 2026</p>

          <div className="prose dark:prose-invert text-slate-700 dark:text-slate-350 space-y-6 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at support@demoadsense.com.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">Disclaimers for Demo AdSense</h2>
            <p>
              All the information on this website - https://demoadsense.com - is published in good faith and for general information purpose only. Demo AdSense does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Demo AdSense), is strictly at your own risk. Demo AdSense will not be liable for any losses and/or damages in connection with the use of our website.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">Consent & Updates</h2>
            <p>
              By using our website, you hereby consent to our disclaimer and agree to its terms. Should we update, amend or make any changes to this document, those changes will be prominently posted here.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">External Links</h2>
            <p>
              From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
