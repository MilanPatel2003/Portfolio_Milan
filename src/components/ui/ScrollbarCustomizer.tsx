import React, { useEffect } from 'react';

interface ScrollbarCustomizerProps {
  width: string;
  trackColor: string;
  thumbGradient: string[];
}

const ScrollbarCustomizer: React.FC<ScrollbarCustomizerProps> = ({
  width,
  trackColor,
  thumbGradient,
}) => {
  useEffect(() => {
    const style = document.createElement('style');
    const gradientCSS = `linear-gradient(to bottom, ${thumbGradient.join(', ')})`;

    style.textContent = `
      ::-webkit-scrollbar {
        width: ${width};
      }
      ::-webkit-scrollbar-track {
        background: ${trackColor};
      }
      ::-webkit-scrollbar-thumb {
        background: ${gradientCSS};
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${gradientCSS};
        filter: brightness(1.2);
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [width, trackColor, thumbGradient]);

  return null;
};

export default ScrollbarCustomizer;
