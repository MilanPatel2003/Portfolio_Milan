import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveScrollProps {
  children: React.ReactNode;
  className?: string;
}

const LocomotiveScrollWrapper: React.FC<LocomotiveScrollProps> = ({ children, className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8, // Slightly reduced multiplier for smoother feel
      lerp: 0.04, // Lower lerp value for smoother interpolation
      scrollFromAnywhere: true, // Enable scrolling from anywhere
      reloadOnContextChange: true, // Reload on context change for better performance
      class: 'is-revealed', // Class added to elements when they're in view
    });

    // Cleanup
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className={className} data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveScrollWrapper; 