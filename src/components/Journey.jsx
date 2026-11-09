import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, CheckCircle2, Sparkles, Code, Cpu } from 'lucide-react';
import { personalData } from '../data';
import AsteroidCluster from './AsteroidCluster';
import TrajectoryGraph from './TrajectoryGraph';

export default function Journey() {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default first milestone (GHSS Maranchery) expanded!
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="journey" className="py-24 sm:py-32 relative border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#C5A880] mb-3">
              <span>03 / EVOLUTION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-50">
              Learning Journey
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            C → PYTHON → ARTIFICIAL INTELLIGENCE
          </p>
        </div>

        {/* Upward Ascending Progress Graph (Scroll-Driven) */}
        <TrajectoryGraph />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central rule */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -ml-[1px] w-[2px] bg-gradient-to-b from-neutral-200 via-[#C5A880]/50 to-neutral-200 dark:from-neutral-800 dark:via-[#C5A880]/50 dark:to-neutral-800" />

          <div className="space-y-12 sm:space-y-16">
            {personalData.journey.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                >
                  {/* Central Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAF8F5] dark:bg-[#0D0D11] border-2 border-[#C5A880] flex items-center justify-center z-10 shadow-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C5A880]" />
                  </div>

                  {/* Spacer for symmetrical layout on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div
                      onClick={() => toggleExpand(index)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`relative p-6 rounded-2xl bg-[#090910]/85 backdrop-blur-md border border-neutral-800/90 shadow-md transition-all duration-300 cursor-pointer hover:border-amber-400/70 hover:shadow-[0_0_25px_rgba(245,158,11,0.22)] ${isExpanded ? 'ring-1 ring-amber-400 border-amber-400' : ''
                        }`}
                    >
                      {/* Gravitational Asteroids flying in when selected or hovered */}
                      <AsteroidCluster isActive={isExpanded || hoveredIndex === index} cardId={index} />

                      {/* Milestone Header */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono tracking-widest text-[#C5A880] uppercase font-semibold">
                          {item.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-neutral-900 dark:text-neutral-100 mb-2 leading-snug">
                        {item.milestone}
                      </h3>

                      <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {/* Expandable Key Takeaways */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 overflow-hidden"
                          >
                            <h4 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                              Key Outcomes & Mastery
                            </h4>
                            <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300 font-light">
                              {item.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2">
                                  <span className="text-[#C5A880] mt-0.5">✓</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400 hover:text-[#C5A880]">
                        <span>{isExpanded ? 'Collapse notes' : 'Click to expand insights'}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                            }`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

