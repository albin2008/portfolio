import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { personalData } from '../data';

export default function Footer({ lenisRef }) {
  const scrollToTop = () => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 py-16 bg-[#FAF8F5] dark:bg-[#0B0B0E] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-200/60 dark:border-neutral-800/60">
          <div>
            <span className="font-serif text-2xl tracking-[0.2em] font-medium text-neutral-900 dark:text-neutral-100 block mb-2">
              {personalData.displayHeroName}
            </span>
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              {personalData.role}
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-[#C5A880] text-xs font-mono uppercase tracking-widest text-neutral-700 dark:text-neutral-300 hover:text-[#C5A880] transition-all"
            aria-label="Back to top"
            data-cursor-text="TOP"
          >
            <span>Back to Top</span>
            <div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center group-hover:bg-[#C5A880] group-hover:text-black transition-colors">
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-500">
          <p>© {new Date().getFullYear()} {personalData.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with algorithmic elegance & editorial discipline</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

