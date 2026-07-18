import React from 'react';

/**
 * BottomAd Component
 * Redesigned clean white AdSense placeholder card.
 */
export default function BottomAd() {
  return (
    <div className="w-full my-8 flex flex-col items-center">
      <span className="text-[12px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-1.5 font-bold font-sans">
        Advertisement
      </span>
      <div 
        className="w-full max-w-[728px] min-h-[90px] bg-white border border-dashed border-[#E5E7EB] rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center p-6"
        aria-hidden="true"
      >
        <div className="text-center font-sans">
          <p className="text-sm font-bold text-[#111827]">TechAxioz Bottom Ad</p>
          <p className="text-[11px] text-[#6B7280] font-medium mt-0.5">Horizontal/Fluid Unit (Above Footer)</p>
        </div>
      </div>
    </div>
  );
}
