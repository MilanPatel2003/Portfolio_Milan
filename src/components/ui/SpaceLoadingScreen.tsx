import React, { useEffect, useState } from 'react';

const SpaceLoadingScreen: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onLoadingComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const spaceLoadingMessages = [
    "Initializing quantum processors...",
    "Syncing with the galactic network...",
    "Calibrating space-time continuum...",
    "Engaging warp drive...",
    "Scanning for alien life forms...",
    "Activating holographic interfaces...",
    "Charging plasma cannons...",
    "Deploying nano-repair bots...",
  ];

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Animated starfield background */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Futuristic loading indicator */}
      <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${loadingProgress}%` }}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-1 h-full bg-white opacity-75 animate-pulse" />
        </div>
      </div>

      {/* Loading percentage with glowing effect */}
      <div className="mt-4 text-blue-500 text-4xl font-bold relative">
        <span className="absolute inset-0 animate-pulse opacity-50 blur-sm">{loadingProgress}%</span>
        <span className="relative">{loadingProgress}%</span>
      </div>

      {/* Rotating futuristic loading message */}
      <div className="mt-8 text-center text-blue-400 text-lg h-8 overflow-hidden">
        <div className="animate-slide">
          {spaceLoadingMessages.map((message, index) => (
            <div key={index} className="py-2">{message}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpaceLoadingScreen;
