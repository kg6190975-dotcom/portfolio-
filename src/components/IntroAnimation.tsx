import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroAnimationProps {
  monogram: string;
  name: string;
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ monogram, name, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      handleClose();
    }, 2200);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0F19] text-[#F8FAFC] select-none"
          role="dialog"
          aria-label="Monogram Intro"
        >
          {/* Subtle Ambient Red, Blue, Yellow lights */}
          <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -right-10 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-1/3 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none" />

          {/* Central Monogram */}
          <div className="relative flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              {/* Outer gradient glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-500 via-blue-500 to-yellow-400 opacity-60 blur-sm" />
              
              <div className="relative w-24 h-24 rounded-2xl bg-[#111827] border border-white/10 flex items-center justify-center shadow-2xl">
                <span className="font-serif text-4xl tracking-widest font-bold bg-gradient-to-r from-red-400 via-blue-400 to-yellow-300 bg-clip-text text-transparent">
                  {monogram}
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-2xl tracking-wider text-[#F8FAFC] font-medium uppercase"
            >
              {name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] mt-2 font-mono"
            >
              <span className="text-red-400">Innovate</span>
              <span className="text-blue-400">·</span>
              <span className="text-blue-400">Analyze</span>
              <span className="text-yellow-400">·</span>
              <span className="text-yellow-400">Lead</span>
            </motion.div>

            {/* Fine Red-Blue-Yellow Expanding Bar */}
            <div className="w-52 h-[2px] bg-slate-800 relative mt-6 overflow-hidden rounded-full">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-yellow-400 origin-left"
              />
            </div>
          </div>

          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleClose}
            className="absolute bottom-10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors rounded-full border border-slate-700 hover:border-yellow-400/50"
          >
            Skip [Esc]
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
