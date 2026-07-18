import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function Dmca() {
  const breadcrumbsPaths = [{ name: 'DMCA Policy', url: '/dmca' }];

  return (
    <>
      <SEOHead 
        title="DMCA Copyright Policy"
        description="Read the Demo AdSense DMCA Policy. Learn how to report copyright infringements or submit counter-notices."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <Breadcrumbs paths={breadcrumbsPaths} />
        
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mb-6">
            DMCA Policy
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-8 font-sans">Last Updated: July 19, 2026</p>

          <div className="prose dark:prose-invert text-slate-700 dark:text-slate-350 space-y-6 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              Demo AdSense respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond quickly to claims of copyright infringement committed using our website that are reported to our designated copyright agent.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">Filing a DMCA Infringement Notice</h2>
            <p>
              If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with a written notice containing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Identification of the material that is claimed to be infringing (including the specific URL link on Demo AdSense).</li>
              <li>Your contact information including email address, mailing address, and telephone number.</li>
              <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner.</li>
            </ul>
            <p>
              Please send DMCA notices directly to support@demoadsense.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
