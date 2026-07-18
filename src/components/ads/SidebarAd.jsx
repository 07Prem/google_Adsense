import React from 'react';

/**
 * SidebarAd Component
 * Premium dark background vertical sidebar ad slot with white text.
 */
export default function SidebarAd() {
  return (
    <div className="w-full my-6 flex flex-col items-center font-sans">
      <span className="text-[9px] uppercase tracking-widest text-gray-400 mb-1.5 font-bold">
        Advertisement
      </span>
      <div 
        className="w-full max-w-[300px] min-h-[250px] md:min-h-[280px] bg-slate-950 dark:bg-slate-900 border border-dashed border-slate-800 dark:border-slate-700 rounded-[18px] shadow-soft flex items-center justify-center p-4"
        aria-hidden="true"
      >
        {/* Google AdSense Slot */}
        {/*
          <ins className="adsbygoogle"
               style={{ display: 'inline-block', width: '300px', height: '250px' }}
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="XXXXXXXXXX"></ins>
          <script>
               (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        <div className="text-center">
          <p className="text-sm font-bold text-white">Demo AdSense Sidebar Ad</p>
          <p className="text-[11px] text-slate-400 font-medium mt-1">Fixed/Responsive Vertical Unit (300x250 or 300x600)</p>
        </div>
      </div>
    </div>
  );
}
