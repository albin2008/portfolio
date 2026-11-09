import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroCurtain({ onComplete }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if session has already seen the intro animation to avoid annoying repeated reloads
    const timer = setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0D0D11] text-[#FAF8F5] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Subtle architectural vertical lines */}
          <div className="absolute inset-0 grid grid-cols-6 opacity-10 pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full" />
            ))}
          </div>

          <div className="relative text-center overflow-hidden px-6">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-xs uppercase font-mono tracking-[0.4em] text-[#C5A880] mb-3"
            >
              First Year · B.Tech CSE (AI)
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-white font-light"
              >
                ALBIN
              </motion.h1>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeInOut' }}
              className="h-[1px] w-24 bg-[#C5A880] mx-auto mt-4 origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

