import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TrendingUp, Sparkles, ChevronUp, Radio } from 'lucide-react';

export default function FloatingProgressHUD({ lenisRef }) {
  const [collapsed, setCollapsed] = useState(false);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate percentage and current orbital stage
  const percentTransform = useTransform(smoothProgress, [0, 1], [0, 100]);
  const [percentVal, setPercentVal] = useState(0);

  // Mini ascending SVG curve coordinates
  const dotX = useTransform(smoothProgress, [0, 1], [8, 88]);
  const dotY = useTransform(smoothProgress, [0, 1], [32, 6]);

  // Current stage detection based on scroll position
  const getStageName = (p) => {
    if (p < 0.22) return 'GHSS Maranchery (+2)';
    if (p < 0.45) return 'G-Tech C Mastery';
    if (p < 0.68) return 'Thejus B.Tech CSE (AI)';
    if (p < 0.88) return 'Python Systems';
    return 'AI & Neural Horizon';
  };

  const handleStageClick = () => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo('#journey', { duration: 1.2 });
    } else {
      const el = document.getElementById('journey');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-6 left-6 z-40 hidden md:block select-none"
    >
      <div
        onClick={handleStageClick}
        className="group relative cursor-pointer p-3.5 rounded-2xl bg-[#090910]/90 backdrop-blur-xl border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.18)] hover:border-amber-400 transition-all hover:scale-105"
        title="Click to view full capability trajectory in Journey"
      >
        {/* Glow corner accent */}
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />

        <div className="flex items-center gap-3">
          {/* Mini Upward Line Graph Box */}
          <div className="relative w-24 h-10 bg-black/60 rounded-lg p-1 border border-neutral-800 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 96 38" className="w-full h-full overflow-visible">
              {/* Background Ghost Slope */}
              <path
                d="M 6,32 C 30,30 50,22 68,14 C 78,10 88,6 90,6"
                fill="none"
                stroke="#27272A"
                strokeWidth="2"
              />

              {/* Upward Line Filled as you scroll down */}
              <motion.path
                d="M 6,32 C 30,30 50,22 68,14 C 78,10 88,6 90,6"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{
                  pathLength: smoothProgress,
                }}
              />

              {/* Ascending Dot */}
              <motion.circle
                cx={dotX}
                cy={dotY}
                r="3.5"
                fill="#FFF"
                stroke="#F59E0B"
                strokeWidth="1.5"
                className="shadow-sm"
              />
            </svg>
          </div>

          {/* Telemetry Text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-amber-400 uppercase tracking-widest">
              <TrendingUp className="w-2.5 h-2.5" />
              <span>ASCENT TRAJECTORY</span>
            </div>
            <motion.span className="text-xs font-serif font-medium text-white group-hover:text-amber-300 transition-colors">
              {useTransform(smoothProgress, (p) => getStageName(p))}
            </motion.span>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-neutral-400">
              <span>ELEVATION:</span>
              <motion.span className="text-amber-400 font-bold">
                {useTransform(smoothProgress, (p) => `${Math.round(p * 100)}%`)}
              </motion.span>
              <span>↑</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

