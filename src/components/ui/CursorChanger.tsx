import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DragHandleDots2Icon } from '@radix-ui/react-icons';

// Import your cursor images here
import defaultCursor from '@/assets/img/cursor.png';
import pointerCursor from '@/assets/img/arrow.png';
import crosshairCursor from '@/assets/img/cursor2.png';
import TachyonBeam from '@/assets/img/cursor3.png';
import GravitonPulse from '@/assets/img/cursor4.png';

// ... import other cursor images as needed

const cursorOptions = [
  { name: 'Quantum Pointer', value: defaultCursor },
  { name: 'Plasma Arrow', value: pointerCursor },
  { name: 'Neutrino Crosshair', value: crosshairCursor },
  { name: 'Tachyon Beam', value: TachyonBeam },
  { name: 'Graviton Pulse', value: GravitonPulse },
];

const CursorChanger: React.FC = React.memo(() => {
  const [currentCursor, setCurrentCursor] = useState(defaultCursor);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      body, * {
        cursor: url(${currentCursor}) 16 16, auto !important;
      }
    `;
    document.head.appendChild(style);

    // Check if the device has touch capability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsVisible(!isTouchDevice);

    return () => {
      document.head.removeChild(style);
    };
  }, [currentCursor]);

  const handleCursorChange = useCallback((newCursor: string) => {
    setCurrentCursor(newCursor);
    setIsOpen(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.05, x: 10, transition: { type: "spring", stiffness: 400, damping: 10 } }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.1,
      boxShadow: '0 0 20px rgb(6 182 212 / 80%)',
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.9 }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-40">
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black/80 border-2 border-cyan-500 rounded-full p-3 shadow-lg shadow-cyan-500/50 transition-all duration-300"
      >
        <DragHandleDots2Icon className="w-6 h-6 text-cyan-400" />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-16 right-0 bg-black/90 backdrop-blur-md border-2 border-cyan-500 rounded-lg p-4 shadow-xl shadow-cyan-500/50 w-64"
          >
            <div className="flex flex-col space-y-3">
              {cursorOptions.map((option) => (
                <motion.button
                  key={option.name}
                  variants={itemVariants}
                  whileHover="hover"
                  onClick={() => handleCursorChange(option.value)}
                  className={`flex items-center space-x-3 w-full rounded-lg ${
                    currentCursor === option.value
                      ? 'bg-cyan-500/30 border-cyan-400'
                      : 'bg-black/50 border-gray-700'
                  } border-2 p-3 transition-all duration-300 ease-in-out group`}
                >
                  <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-cyan-400/50 group-hover:border-cyan-400">
                    <img
                      src={option.value}
                      alt={option.name}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-cyan-300 group-hover:text-cyan-200">
                    {option.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default CursorChanger;