import React, { useEffect, useState } from 'react';

interface SpaceLoadingScreenProps {
  onLoadingComplete: () => void;
}

const SpaceLoadingScreen: React.FC<SpaceLoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          onLoadingComplete();
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-white text-2xl">Loading... {progress}%</div>
    </div>
  );
};

export default React.memo(SpaceLoadingScreen);
