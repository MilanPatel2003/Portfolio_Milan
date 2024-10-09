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
          return 100;
        }
        return prevProgress + 1; // Slower increment
      });
    }, 40); // Adjust this value to control the speed of the progress

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Add a small delay before completing
    }
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-white text-2xl">Loading... {progress}%</div>
    </div>
  );
};

export default React.memo(SpaceLoadingScreen);
