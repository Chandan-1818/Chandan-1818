import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Small buffer before hiding
          return 100;
        }
        // Smoothly increase progress
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080d1a] text-white overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] animate-pulse delay-700" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
        {/* Logo or Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-display bg-gradient-to-r from-brand-blue via-brand-cyan to-white bg-clip-text text-transparent">
            CHANDAN S
          </h1>
          <p className="text-slate-400 font-sans tracking-widest text-xs uppercase mt-2">
            Portfolio &bull; 2026
          </p>
        </motion.div>

        {/* Custom Progress Bar */}
        <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan" 
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Progress Counter */}
        <motion.div 
          className="mt-3 text-slate-500 font-mono text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Loading components... {progress}%
        </motion.div>
      </div>
    </div>
  );
};
