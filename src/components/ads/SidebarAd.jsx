import React from 'react';

/**
 * SidebarAd Component
 * Redesigned clean white AdSense placeholder card.
 */
export default function SidebarAd() {
  return (
    <div className="w-full my-6 flex flex-col items-center">
      <span className="text-[12px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-1.5 font-bold font-sans">
        Advertisement
      </span>
      <div 
        className="w-full max-w-[300px] min-h-[250px] md:min-h-[280px] bg-white border border-dashed border-[#E5E7EB] rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center p-6"
        aria-hidden="true"
      >
        <div className="text-center font-sans">
          <p className="text-sm font-bold text-[#111827]">TechAxioz Sidebar Ad</p>
          <p className="text-[11px] text-[#6B7280] font-medium mt-1">Fixed/Responsive Vertical Unit (300×250 or 300×600)</p>
        </div>
      </div>
    </div>
  );
}
