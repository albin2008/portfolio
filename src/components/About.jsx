import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { personalData } from '../data';
import CatCardCompanion from './CatCardCompanion';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#C5A880] mb-3">
              <span>01 / PROFILE & BACKGROUND</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-50">
              About Albin
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            {personalData.badge}
          </p>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Quick Education Cards */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Interactive Code Companion Cat Cards */}
            <CatCardCompanion />

            {/* Quick Stat Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalData.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#090910]/85 backdrop-blur-md border border-neutral-800/90 hover:border-amber-500/40 transition-colors shadow-sm"
                >
                  <span className="block text-[10px] font-mono tracking-widest text-[#C5A880] uppercase mb-1">
                    {stat.label}
                  </span>
                  <span className="block font-serif text-lg font-medium text-neutral-900 dark:text-neutral-100">
                    {stat.value}
                  </span>
                  <span className="block text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Bio Prose, Education & Credentials */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Editorial Lead Paragraph */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-neutral-900 dark:text-neutral-100 leading-snug tracking-tight mb-6">
                "{personalData.about.heading}"
              </h3>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 font-light leading-relaxed text-base sm:text-lg">
                {personalData.about.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Education Spotlight */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-6">
              <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#C5A880]" />
                <span>Academic Education & Credentials</span>
              </h4>

              <div className="space-y-4">
                {personalData.about.education.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200/90 dark:border-neutral-800 transition-all hover:border-[#C5A880]/50"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h5 className="font-serif text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        {item.degree}
                      </h5>
                      <span className="text-xs font-mono text-[#C5A880] tracking-wider font-medium">
                        {item.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{item.institution}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Skills Chips */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <h4 className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#C5A880]" />
                <span>Core Competencies & Toolbox</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {personalData.skills.allChips.map((chip, idx) => (
                  <motion.span
                    key={chip}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                    whileHover={{ y: -2, borderColor: '#C5A880' }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 hover:text-[#C5A880] transition-colors cursor-default"
                  >
                    {chip}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

