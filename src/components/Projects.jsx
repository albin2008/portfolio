import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code2, X, Terminal, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data';
import AsteroidCluster from './AsteroidCluster';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const handleCopyCode = (snippet) => {
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#C5A880] mb-3">
              <span>02 / SELECTED WORK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-50">
              Featured Projects
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            C · PYTHON · AI PROTOTYPES
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {personalData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              className="project-card group relative flex flex-col justify-between rounded-2xl bg-[#090910]/85 backdrop-blur-md border border-neutral-800 hover:border-amber-400/60 overflow-visible shadow-lg hover:shadow-[0_0_35px_rgba(245,158,11,0.22)] transition-all duration-300"
              data-cursor-text="VIEW"
            >
              {/* Asteroids gravitating toward selected project card */}
              <AsteroidCluster isActive={hoveredProjectId === project.id} cardId={project.id} />

              {/* Card Image with Zoom effect */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Top Badge: Category & Year */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#C5A880] border border-white/10">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wider bg-black/60 backdrop-blur-md text-white/90 border border-white/10">
                    {project.year}
                  </span>
                </div>

                {/* Hover trigger: Quick Inspect overlay button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md text-neutral-900 dark:text-neutral-100 text-xs font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 shadow-md hover:bg-[#C5A880] hover:text-black"
                  aria-label={`Inspect ${project.title}`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Inspect Code</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono tracking-wide px-2.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title & Animated Arrow */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[#C5A880] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <div className="p-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 group-hover:border-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-black transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer links */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-mono">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-neutral-600 dark:text-neutral-300 hover:text-[#C5A880] flex items-center gap-1.5 uppercase tracking-wider underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-[#C5A880]"
                  >
                    <span>View Architecture</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-[#C5A880] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      aria-label="View on GitHub"
                      data-cursor-text="GIT"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Project Architecture & Code Inspection Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl rounded-2xl bg-[#FAF8F5] dark:bg-[#121216] border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-[#C5A880] text-neutral-600 dark:text-neutral-300 hover:text-[#C5A880] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <span className="text-xs font-mono tracking-widest uppercase text-[#C5A880] block mb-2">
                  {selectedProject.category} · {selectedProject.year}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-neutral-900 dark:text-neutral-100">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Architectural Highlights */}
              <div className="mb-6 p-4 rounded-xl bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Engineering Highlights</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-light">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C5A880] font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Snippet Box */}
              {selectedProject.codeSnippet && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      Core Implementation Snippet
                    </span>
                    <button
                      onClick={() => handleCopyCode(selectedProject.codeSnippet)}
                      className="text-xs font-mono text-[#C5A880] hover:underline flex items-center gap-1"
                    >
                      {copiedCode ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <span>Copy Code</span>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#0F0F13] text-[#E0DFD8] text-xs font-mono overflow-x-auto border border-neutral-800 leading-relaxed">
                    <code>{selectedProject.codeSnippet}</code>
                  </pre>
                </div>
              )}

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-[#C5A880] text-xs font-mono tracking-widest uppercase text-neutral-800 dark:text-neutral-200 flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-mono tracking-widest uppercase hover:bg-[#C5A880] dark:hover:bg-[#C5A880] transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

