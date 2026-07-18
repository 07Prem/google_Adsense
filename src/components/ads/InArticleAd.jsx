import React from 'react';

/**
 * InArticleAd Component
 * Premium dark background native inline fluid ad slot with white text.
 */
export default function InArticleAd() {
  return (
    <div className="w-full my-8 flex flex-col items-center font-sans">
      <span className="text-[9px] uppercase tracking-widest text-gray-400 mb-1.5 font-bold">
        Advertisement
      </span>
      <div 
        className="w-full bg-slate-950 dark:bg-slate-900 border border-dashed border-slate-800 dark:border-slate-700 rounded-[18px] shadow-soft flex items-center justify-center p-6 md:p-8"
        aria-hidden="true"
      >
        {/* Google AdSense Slot */}
        {/*
          <ins className="adsbygoogle"
               style={{ display: 'block', textAlignment: 'center' }}
               data-ad-layout="in-article"
               data-ad-format="fluid"
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="XXXXXXXXXX"></ins>
          <script>
               (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        <div className="text-center">
          <p className="text-sm font-bold text-white">TechAxioz In-Article Ad</p>
          <p className="text-[11px] text-slate-400 font-medium mt-1">Native Fluid Ad (Optimized for paragraph breaks)</p>
        </div>
      </div>
    </div>
  );
}
