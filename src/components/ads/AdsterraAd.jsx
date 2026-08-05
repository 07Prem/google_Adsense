import React from 'react';

/**
 * Reusable component to safely render Adsterra / HighPerformanceFormat ad units.
 * Uses an isolated same-origin iframe (srcDoc) to avoid global namespace conflicts
 * and handle automatic cleanup when components unmount.
 */
export default function AdsterraAd({ adKey, format, height, width }) {
  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
          }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          var atOptions = {
            'key' : '${adKey}',
            'format' : '${format}',
            'height' : ${height},
            'width' : ${width},
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div className="flex justify-center items-center my-4 overflow-hidden w-full">
      <iframe
        title={`ad-${adKey}`}
        srcDoc={srcDoc}
        width={width}
        height={height}
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
      />
    </div>
  );
}
