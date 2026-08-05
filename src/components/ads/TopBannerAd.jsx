import React from 'react';
import AdsterraAd from './AdsterraAd';

/**
 * TopBannerAd Component
 * Redesigned clean white AdSense placeholder card.
 */
export default function TopBannerAd() {
  return (
    <div className="w-full flex justify-center py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700/50">
      <AdsterraAd
        adKey="f3ac0983ddcb89e725d517f9e2dca7bf"
        format="iframe"
        height={60}
        width={468}
      />
    </div>
  );
}
