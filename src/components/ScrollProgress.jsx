import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#C5A880] z-[100] origin-left shadow-[0_0_10px_rgba(197,168,128,0.5)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

