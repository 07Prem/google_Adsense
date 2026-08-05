import React from 'react';
import AdsterraAd from './AdsterraAd';

/**
 * InArticleAd Component
 * Redesigned clean white AdSense placeholder card.
 */
export default function InArticleAd() {
  return (
    <div className="w-full flex justify-center py-4 my-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700/50">
      <AdsterraAd
        adKey="30605023"
        format="iframe"
        height={250}
        width={300}
      />
    </div>
  );
}
