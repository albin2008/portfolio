import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, MapPin, GraduationCap, Award, Terminal } from 'lucide-react';
import { personalData } from '../data';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl rounded-2xl bg-[#0C0C14] border border-amber-500/30 shadow-2xl p-6 sm:p-10 z-10 max-h-[92vh] overflow-y-auto text-neutral-100 print:bg-white print:text-black print:max-h-none print:overflow-visible print:p-0 print:border-none print:shadow-none"
        >
          {/* Action Buttons Top Bar (Print, Close) */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-200 dark:border-neutral-800 print:hidden">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C5A880]">
              Curriculum Vitae · Academic & Engineering Profile
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs font-mono tracking-wider uppercase hover:bg-[#C5A880] dark:hover:bg-[#C5A880] transition-colors flex items-center gap-2"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-[#C5A880] text-neutral-600 dark:text-neutral-400 hover:text-current transition-colors"
                aria-label="Close CV"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Body */}
          <div className="space-y-8 font-sans">
            {/* Resume Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-neutral-900 dark:text-neutral-50 mb-1">
                  {personalData.fullName}
                </h1>
                <p className="font-mono text-xs uppercase tracking-widest text-[#C5A880] mb-2">
                  First Year B.Tech Student · Computer Science & Engineering (AI)
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                  {personalData.contact.college} · {personalData.contact.address}
                </p>
              </div>

              <div className="text-xs font-mono space-y-1 text-neutral-600 dark:text-neutral-400 text-left sm:text-right">
                <p>Email: {personalData.contact.email}</p>
                <p>GitHub: github.com/albin</p>
                <p>Status: Seeking Summer 2025 Internships</p>
              </div>
            </div>

            {/* Profile Statement */}
            <div>
              <h2 className="font-serif text-lg font-medium text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-3">
                Professional Profile
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                Motivated first-year B.Tech Computer Science and Engineering (Artificial Intelligence) student at Thejus Engineering College. Formally certified in C programming at G-Tech with strong foundations in dynamic memory allocation, pointers, and procedural algorithms. Self-driven in Python, mathematics for machine learning, and data structures. Dedicated to building efficient, well-architected software systems and exploring practical AI engineering.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="font-serif text-lg font-medium text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
                Education & Certifications
              </h2>
              <div className="space-y-4">
                {personalData.about.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-start gap-1">
                    <div>
                      <h3 className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                        {edu.institution}
                      </h3>
                      <p className="text-xs text-[#C5A880] font-mono">{edu.degree}</p>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 font-light">
                        {edu.description}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="font-serif text-lg font-medium text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-3 rounded-lg bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-semibold text-[#C5A880] block mb-1">Languages:</span>
                  <p className="text-neutral-700 dark:text-neutral-300">C (G-Tech Certified), Python 3, SQL Fundamentals</p>
                </div>
                <div className="p-3 rounded-lg bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-semibold text-[#C5A880] block mb-1">Mathematics & AI:</span>
                  <p className="text-neutral-700 dark:text-neutral-300">Linear Algebra, Calculus, NumPy, Matplotlib, Perceptron Basics</p>
                </div>
                <div className="p-3 rounded-lg bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="font-semibold text-[#C5A880] block mb-1">Tools & Platforms:</span>
                  <p className="text-neutral-700 dark:text-neutral-300">Git, GitHub, Linux Shell, GCC, Make, VS Code</p>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="font-serif text-lg font-medium text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
                Featured Projects
              </h2>
              <div className="space-y-4">
                {personalData.projects.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                        {proj.title} <span className="font-mono text-[#C5A880] text-xs">({proj.category})</span>
                      </span>
                      <span className="font-mono text-neutral-500">{proj.year}</span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-1 font-light leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1.5 font-mono text-[10px] text-neutral-500">
                      {proj.techStack.map(t => (
                        <span key={t} className="px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

