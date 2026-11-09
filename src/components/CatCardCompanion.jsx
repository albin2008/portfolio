import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Sparkles, Bug, Moon, Radio, Target, Zap } from 'lucide-react';
import { personalData } from '../data';

export default function CatCardCompanion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [patCounts, setPatCounts] = useState({ pixel: 42, byte: 29, kernel: 37 });
  const [isPatting, setIsPatting] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [pawPrints, setPawPrints] = useState([]);
  const [laserActive, setLaserActive] = useState(true);
  const [laserPos, setLaserPos] = useState({ x: 120, y: 70 });
  const [yarnRotated, setYarnRotated] = useState(0);

  const cats = personalData.about.catCards || [];
  const currentCat = cats[currentIndex] || cats[0];

  // Moving red laser dot for cats to track
  useEffect(() => {
    if (!laserActive) return;
    const interval = setInterval(() => {
      setLaserPos({
        x: Math.floor(Math.random() * 220) + 20,
        y: Math.floor(Math.random() * 120) + 20,
      });
    }, 2200);
    return () => clearInterval(interval);
  }, [laserActive]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cats.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cats.length) % cats.length);
  };

  const handlePat = () => {
    setIsPatting(true);
    setPatCounts((prev) => ({
      ...prev,
      [currentCat.id]: (prev[currentCat.id] || 0) + 1,
    }));

    // Trigger floating heart
    const heartId = Date.now();
    setFloatingHearts((prev) => [
      ...prev,
      { id: heartId, x: Math.random() * 80 - 40, y: Math.random() * 20 },
    ]);

    // Trigger walking paws across the frame
    const pawId = heartId + 1;
    setPawPrints((prev) => [
      ...prev,
      { id: pawId, x: Math.random() * 180 + 30, y: Math.random() * 100 + 20 },
    ]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== heartId));
      setPawPrints((prev) => prev.filter((p) => p.id !== pawId));
      setIsPatting(false);
    }, 1100);
  };

  const handleYarnClick = () => {
    setYarnRotated((prev) => prev + 360);
    handlePat();
  };

  if (!currentCat) return null;

  return (
    <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900/90 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#C5A880]/50">
      {/* Corner architectural accents with pulsing animation */}
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C5A880]"
      />
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C5A880]"
      />
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C5A880]"
      />
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C5A880]"
      />

      {/* Animated Walking Cat Along the Top Bar */}
      <div className="relative w-full h-7 mb-2 overflow-hidden border-b border-neutral-200/60 dark:border-neutral-800/60 select-none">
        <motion.div
          animate={{
            x: ['-10%', '110%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute flex items-center gap-1.5 text-xs text-[#C5A880] font-mono tracking-widest whitespace-nowrap"
        >
          {/* Animated SVG trotting cat */}
          <motion.span
            animate={{
              y: [0, -3, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 0.45,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-base inline-block"
          >
            🐈
          </motion.span>
          <span className="text-[10px] uppercase opacity-75 font-mono">
            {currentCat.name} is on code patrol...
          </span>
          <span className="text-[10px]">🐾 🐾 🐾</span>
        </motion.div>
      </div>

      {/* Header & Controls */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C5A880] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>CHIEF CODE DEBUGGER</span>
          </span>
          {/* Live pulsing status badge */}
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Active</span>
          </span>
        </div>

        {/* Carousel slide controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 mr-1">
            {cats.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-5 bg-[#C5A880]' : 'w-1.5 bg-neutral-300 dark:bg-neutral-700'
                }`}
                aria-label={`Go to cat slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="p-1 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-[#C5A880] text-neutral-600 dark:text-neutral-400 hover:text-current transition-transform active:scale-90"
            aria-label="Previous cat"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-[#C5A880] text-neutral-600 dark:text-neutral-400 hover:text-current transition-transform active:scale-90"
            aria-label="Next cat"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Cat Slide Content with smooth exit/entry */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCat.id}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="space-y-4"
        >
          {/* Animated Cat Photo Frame with Parallax Breathing Motion */}
          <div
            onClick={handlePat}
            className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900 shadow-inner group/photo cursor-pointer select-none"
          >
            {/* Breathing / Zooming Image Animation */}
            <motion.img
              src={currentCat.image}
              alt={currentCat.name}
              loading="lazy"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] group-hover/photo:grayscale-0 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 pointer-events-none" />

            {/* Moving Laser Dot Interactive Element */}
            {laserActive && (
              <motion.div
                animate={{
                  x: laserPos.x,
                  y: laserPos.y,
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.2,
                  ease: 'easeInOut',
                }}
                className="absolute top-0 left-0 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444] pointer-events-none z-20"
              />
            )}

            {/* Floating Top Badge */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-wider uppercase text-[#C5A880] shadow"
            >
              {currentCat.badge}
            </motion.div>

            {/* Laser Pointer Switch in Top Right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLaserActive(!laserActive);
              }}
              className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-mono tracking-wider uppercase text-neutral-300 hover:text-red-400 flex items-center gap-1 transition-colors"
              title="Toggle moving laser pointer"
            >
              <Target className={`w-3 h-3 ${laserActive ? 'text-red-400 animate-pulse' : 'text-neutral-500'}`} />
              <span>{laserActive ? 'Laser On' : 'Laser Off'}</span>
            </button>

            {/* Floating Zzz particles if it's Byte (Night shift) */}
            {currentCat.id === 'byte' && (
              <div className="absolute top-10 right-8 pointer-events-none">
                {['Z', 'z', 'z'].map((letter, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [0, -35],
                      x: [0, 15],
                      opacity: [0, 1, 0],
                      scale: [0.8, 1.3],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: 'easeInOut',
                    }}
                    className="absolute font-mono text-white/80 font-bold text-sm"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Animated Paw Print Stamps on click */}
            <div className="absolute inset-0 pointer-events-none">
              {pawPrints.map((paw) => (
                <motion.div
                  key={paw.id}
                  initial={{ opacity: 1, scale: 0.5, rotate: Math.random() * 40 - 20 }}
                  animate={{ opacity: 0, scale: 1.4, y: -20 }}
                  transition={{ duration: 1 }}
                  style={{ left: paw.x, top: paw.y }}
                  className="absolute text-xl"
                >
                  🐾
                </motion.div>
              ))}
            </div>

            {/* Overlaid Bottom Title */}
            <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between z-10">
              <div>
                <h4 className="font-serif text-2xl tracking-wide font-light flex items-center gap-2">
                  <span>{currentCat.name}</span>
                  <span className="text-xs font-mono text-neutral-300 tracking-normal font-sans">
                    ({currentCat.title})
                  </span>
                </h4>
                <p className="text-[11px] font-mono text-neutral-300 tracking-wider">
                  {currentCat.role}
                </p>
              </div>

              {/* Click to pat prompt */}
              <span className="text-[9px] font-mono text-neutral-300 uppercase tracking-widest hidden sm:inline-block bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                Click to Pet 🐾
              </span>
            </div>

            {/* Floating Hearts Animation when patted */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-20">
              {floatingHearts.map((heart) => (
                <motion.div
                  key={heart.id}
                  initial={{ opacity: 1, y: 20, x: heart.x, scale: 0.8 }}
                  animate={{ opacity: 0, y: -100, scale: 1.6 }}
                  transition={{ duration: 0.95, ease: 'easeOut' }}
                  className="absolute flex items-center gap-1"
                >
                  <Heart className="w-8 h-8 fill-red-500 text-red-500 drop-shadow-md" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cat Bio */}
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
            {currentCat.bio}
          </p>

          {/* Editorial Quote Box with Animated Sparkle */}
          <div className="relative p-3 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-800 text-xs italic font-serif text-neutral-700 dark:text-neutral-300 overflow-hidden">
            <span className="relative z-10">"{currentCat.quote}"</span>
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 2,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-12 pointer-events-none"
            />
          </div>

          {/* Debugging Stats Grid with Animated Audio Wave Bars */}
          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            {/* Bugs Caught */}
            <div className="p-2 rounded-lg bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 transition-all hover:border-[#C5A880]/50">
              <span className="block text-[9px] font-mono uppercase text-neutral-400 mb-0.5 flex items-center justify-center gap-1">
                <Bug className="w-2.5 h-2.5 text-[#C5A880]" /> BUGS
              </span>
              <span className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200">
                {currentCat.stats.bugsCaught}
              </span>
            </div>

            {/* Naps Logged */}
            <div className="p-2 rounded-lg bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 transition-all hover:border-[#C5A880]/50">
              <span className="block text-[9px] font-mono uppercase text-neutral-400 mb-0.5 flex items-center justify-center gap-1">
                <Moon className="w-2.5 h-2.5 text-[#C5A880]" /> NAPS
              </span>
              <span className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200">
                {currentCat.stats.napsLogged}
              </span>
            </div>

            {/* Purr Frequency with Animated Sound Wave Visualizer */}
            <div className="p-2 rounded-lg bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800 transition-all hover:border-[#C5A880]/50">
              <span className="block text-[9px] font-mono uppercase text-neutral-400 mb-0.5 flex items-center justify-center gap-1">
                <Radio className="w-2.5 h-2.5 text-[#C5A880]" /> PURR
              </span>
              <div className="flex items-center justify-center gap-1">
                <span className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200">
                  {currentCat.stats.purrFrequency}
                </span>
                {/* 4 moving animated audio wave bars */}
                <div className="flex items-end gap-0.5 h-3 ml-1">
                  {[0.4, 0.8, 0.5, 0.9].map((dur, idx) => (
                    <motion.div
                      key={idx}
                      animate={{ height: ['25%', '100%', '30%'] }}
                      transition={{
                        duration: dur,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                      }}
                      className="w-0.5 bg-[#C5A880] rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Pet The Cat & Yarn Ball Controls */}
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={handlePat}
              className="flex-1 py-2.5 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:border-[#C5A880] dark:hover:border-[#C5A880] bg-white dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 text-xs font-mono tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 hover:shadow-sm"
              data-cursor-text="PET"
            >
              <Heart
                className={`w-3.5 h-3.5 text-red-500 transition-transform ${
                  isPatting ? 'scale-125 fill-red-500' : ''
                }`}
              />
              <span>Pet {currentCat.name} ({patCounts[currentCat.id] || 0} pats given)</span>
            </button>

            {/* Animated Spinning Yarn Toy */}
            <motion.button
              onClick={handleYarnClick}
              animate={{ rotate: yarnRotated }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:border-[#C5A880] bg-white dark:bg-neutral-800/80 text-base flex items-center justify-center shadow-sm"
              title="Click to roll yarn ball for the cat!"
              aria-label="Roll yarn ball"
            >
              🧶
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
