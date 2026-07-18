import React from 'react';

/**
 * TopBannerAd Component
 * Premium dark background horizontal ad slot with white text.
 */
export default function TopBannerAd() {
  return (
    <div className="w-full my-6 flex flex-col items-center">
      <span className="text-[9px] uppercase tracking-widest text-gray-400 mb-1.5 font-bold">
        Advertisement
      </span>
      <div 
        className="w-full max-w-[970px] min-h-[90px] md:min-h-[110px] bg-slate-950 dark:bg-slate-900 border border-dashed border-slate-800 dark:border-slate-700 rounded-[18px] shadow-soft flex items-center justify-center p-4"
        aria-hidden="true"
      >
        {/* Google AdSense Slot */}
        {/*
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="XXXXXXXXXX"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>
               (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        <div className="text-center font-sans">
          <p className="text-sm font-bold text-white">Demo AdSense Top Banner Ad</p>
          <p className="text-[11px] text-slate-400 font-medium mt-0.5">Responsive Horizontal Unit (970x90 or 728x90)</p>
        </div>
      </div>
    </div>
  );
}
