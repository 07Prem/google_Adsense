import React from 'react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function Privacy() {
  const breadcrumbsPaths = [{ name: 'Privacy Policy', url: '/privacy' }];

  return (
    <>
      <SEOHead 
        title="Privacy Policy"
        description="Read the TechAxioz Privacy Policy. Learn how we collect, store, and manage user details and cookies."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <Breadcrumbs paths={breadcrumbsPaths} />
        
        <div className="max-w-3xl mx-auto py-8">
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-8 font-sans">Last Updated: July 19, 2026</p>

          <div className="prose dark:prose-invert text-slate-700 dark:text-slate-350 space-y-6 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              At **TechAxioz** (accessible from https://techaxioz.com), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by TechAxioz and how we use it.
            </p>
            
            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">Log Files</h2>
            <p>
              TechAxioz follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">Cookies and Web Beacons</h2>
            <p>
              Like any other website, TechAxioz uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">Google DoubleClick DART Cookie</h2>
            <p>
              Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to techaxioz.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: https://policies.google.com/technologies/ads.
            </p>

            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-8 mb-3">Third Party Privacy Policies</h2>
            <p>
              TechAxioz's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
