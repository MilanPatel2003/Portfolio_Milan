import React, { useEffect, useState } from 'react';

const AmbientLightCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50,
        background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0) 80%)`,
        transition: 'background 0.1s',
      }}
      aria-hidden
    />
  );
};

export default AmbientLightCursor; 