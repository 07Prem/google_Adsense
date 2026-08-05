import React, { useEffect, useRef } from 'react';

/**
 * Reusable component to render Adsterra / HighPerformanceFormat ad units directly in the DOM.
 * This is used because script-based ads often check window.top and fail inside iframes.
 */
export default function AdsterraAd({ adKey, format, height, width }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any previous elements in the container
    containerRef.current.innerHTML = '';

    // Create the script for atOptions
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      atOptions = {
        'key' : '${adKey}',
        'format' : '${format}',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;
    containerRef.current.appendChild(configScript);

    // Create the invoke script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
    containerRef.current.appendChild(invokeScript);

    return () => {
      // Cleanup on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [adKey, format, height, width]);

  return (
    <div 
      ref={containerRef} 
      className="flex justify-center items-center my-4 overflow-hidden w-full"
      style={{ minHeight: height }}
    />
  );
}
