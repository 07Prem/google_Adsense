import React, { useState, useEffect } from 'react';
import AdsterraAd from './AdsterraAd';

/**
 * BottomAd Component
 * Redesigned clean white AdSense placeholder card.
 */
export default function BottomAd() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full flex justify-center py-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700/50">
      {isMobile ? (
        <AdsterraAd
          adKey="4e609dd97c6f22d599360d402714c367"
          format="iframe"
          height={50}
          width={320}
        />
      ) : (
        <AdsterraAd
          adKey="fcf46ae8c10dd8ce2742b8bc04ddb83b"
          format="iframe"
          height={90}
          width={728}
        />
      )}
    </div>
  );
}
