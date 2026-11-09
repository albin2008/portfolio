import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Award, Compass, Eye } from 'lucide-react';
import { personalData } from '../data';
import BlackHoleVisual from './BlackHoleVisual';

export default function Hero({ lenisRef, onOpenTerminal, onOpenResume }) {
  const { scrollY } = useScroll();

  // Gentle parallax transformation for the architectural background image
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const imageY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0.4]);

  const scrollToAbout = (e) => {
    e.preventDefault();
    if (lenisRef?.current) {
      lenisRef.current.scrollTo('#about', { duration: 1.2 });
    } else {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Letter by letter animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { y: '110%', opacity: 0, rotateZ: 2 },
    visible: {
      y: 0,
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const nameLetters = personalData.displayHeroName.split('');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden"
    >
      {/* Top Meta Header info */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pt-4 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span>{personalData.hero.academicTag}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <span>{personalData.status}</span>
          </motion.div>
        </div>
      </div>

      {/* Main Cosmic Singularity / Black Hole Frame with Overlapping Hero Name */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        {/* Edge-to-edge frame with rounded corners and Black Hole Accretion Disk */}
        <div className="relative w-full h-[440px] sm:h-[500px] md:h-[560px] lg:h-[600px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.18)] bg-black border border-amber-500/25">
          {/* Gravitational Singularity Black Hole Simulation */}
          <BlackHoleVisual />

          {/* Floating badge inside top-right corner of hero frame */}
          <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-mono tracking-widest uppercase z-30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>SINGULARITY · AI & C/PYTHON</span>
          </div>

          {/* THE VERY LARGE WHITE SERIF NAME OVERLAPPING BOTTOM OF THE IMAGE */}
          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-16 pb-4 sm:pb-6 z-10">
            <div className="overflow-hidden">
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="font-serif text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[13vw] leading-[0.85] font-normal tracking-[-0.03em] text-white select-none flex flex-wrap"
              >
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block transform origin-bottom hover:text-[#C5A880] transition-colors duration-300"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Subtitle, Highlights & Scroll Indicator below the image */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 mt-8 sm:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between border-t border-neutral-200 dark:border-neutral-800/80 pt-6">
          {/* Subtitle & Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-neutral-900 dark:text-neutral-100 tracking-tight leading-snug">
              {personalData.hero.subtitle}
            </p>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-light leading-relaxed">
              {personalData.hero.leadQuote}
            </p>
          </motion.div>

          {/* Quick CTA & Scroll down indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center justify-start lg:justify-end gap-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  lenisRef?.current?.scrollTo('#projects');
                }}
                className="px-5 py-2.5 rounded-full bg-amber-400 text-black font-semibold text-xs font-mono tracking-widest uppercase hover:bg-amber-300 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                data-cursor-text="VIEW"
              >
                Explore Projects
              </a>
              <button
                onClick={onOpenTerminal}
                className="px-4 py-2.5 rounded-full border border-neutral-700 hover:border-amber-400 text-xs font-mono tracking-widest uppercase text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                data-cursor-text="CLI"
              >
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>Run CLI Demo</span>
              </button>
            </div>

            {/* Scroll indicator with animated vertical line */}
            <a
              href="#about"
              onClick={scrollToAbout}
              className="group inline-flex items-center gap-3 text-xs font-mono tracking-widest text-neutral-500 hover:text-[#C5A880] dark:text-neutral-400 dark:hover:text-[#C5A880] uppercase transition-colors"
              aria-label="Scroll down to About section"
              data-cursor-text="DOWN"
            >
              <span>SCROLL</span>
              <div className="w-5 h-8 rounded-full border border-neutral-400 dark:border-neutral-600 flex items-start justify-center p-1 group-hover:border-[#C5A880]">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  className="w-1 h-2 rounded-full bg-[#C5A880]"
                />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

