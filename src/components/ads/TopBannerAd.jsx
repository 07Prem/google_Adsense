import React from 'react';

/**
 * TopBannerAd Component
 * Redesigned clean white AdSense placeholder card.
 */
export default function TopBannerAd() {
  return (
    <div className="w-full my-6 flex flex-col items-center">
      <span className="text-[12px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-1.5 font-bold font-sans">
        Advertisement
      </span>
      <div 
        className="w-full max-w-[970px] min-h-[90px] md:min-h-[110px] bg-white border border-dashed border-[#E5E7EB] rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center p-6"
        aria-hidden="true"
      >
        <div className="text-center font-sans">
          <p className="text-sm font-bold text-[#111827]">TechAxioz Top Banner Ad</p>
          <p className="text-[11px] text-[#6B7280] font-medium mt-0.5">Responsive Horizontal Unit (970×90 or 728×90)</p>
        </div>
      </div>
    </div>
  );
}
