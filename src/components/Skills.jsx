import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Brain, Wrench, CheckCircle } from 'lucide-react';
import { personalData } from '../data';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Terminal, Brain, Wrench];

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#C5A880] mb-3">
              <span>04 / CAPABILITIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-50">
              Technical Skillset
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            SYSTEMS · LANGUAGES · AI
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-3 mb-12">
          {personalData.skills.categories.map((cat, idx) => {
            const IconComponent = icons[idx] || Terminal;
            const isActive = activeTab === idx;

            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border-transparent shadow-md'
                    : 'bg-white/60 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-300 border-neutral-300/80 dark:border-neutral-800 hover:border-[#C5A880]'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-[#C5A880]' : ''}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Info */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#090910]/85 backdrop-blur-md border border-neutral-800/90 shadow-md">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] block mb-2">
              Focus Domain
            </span>
            <h3 className="font-serif text-2xl font-medium text-neutral-900 dark:text-neutral-100 mb-3">
              {personalData.skills.categories[activeTab].title}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-6">
              {personalData.skills.categories[activeTab].description}
            </p>
            <div className="pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400">
              Proficiency calibrated through rigorous project deliverables and verified coursework.
            </div>
          </div>

          {/* Progress Lines and Detail Cards */}
          <div className="lg:col-span-8 space-y-5">
            {personalData.skills.categories[activeTab].items.map((skill, sIdx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: sIdx * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#090910]/85 backdrop-blur-md border border-neutral-800/90 shadow-sm hover:border-amber-400/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg font-medium text-neutral-900 dark:text-neutral-100">
                      {skill.name}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#C5A880]/15 text-[#C5A880] border border-[#C5A880]/30">
                      {skill.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {skill.level}% Competence
                  </span>
                </div>

                {/* Animated Progress Track */}
                <div className="w-full h-1.5 rounded-full bg-neutral-900 overflow-hidden mb-3 border border-neutral-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-200 shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                  />
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  {skill.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

