import React from 'react';
import AdsterraAd from './AdsterraAd';

/**
 * SidebarAd Component
 * Redesigned clean white AdSense placeholder card.
 */
export default function SidebarAd() {
  return (
    <div className="w-full flex flex-col items-center py-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700/50">
      <span className="text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500 mb-2 tracking-wider">Advertisement</span>
      <AdsterraAd
        adKey="a2b96aef3ebe773be6e0190c2b5da665"
        format="iframe"
        height={600}
        width={160}
      />
    </div>
  );
}
