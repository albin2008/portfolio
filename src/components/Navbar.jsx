import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight, Terminal as TerminalIcon, FileText } from 'lucide-react';
import { personalData } from '../data';

export default function Navbar({ darkMode, setDarkMode, lenisRef, onOpenResume, onOpenTerminal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section
      const sections = ['about', 'projects', 'journey', 'skills', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = href === '#' ? 0 : href;
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(target, { offset: -30, duration: 1.2 });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#FAF8F5]/85 dark:bg-[#0D0D11]/85 backdrop-blur-md border-b border-[#E7DFD1]/60 dark:border-white/10 shadow-sm'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo on the left */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="group flex items-baseline gap-2 text-current no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded p-1"
            aria-label="Albin Portfolio Home"
            data-cursor-text="HOME"
          >
            <span className="font-serif text-2xl tracking-[0.2em] font-medium transition-colors group-hover:text-[#C5A880]">
              {personalData.displayHeroName}
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A880] transition-transform group-hover:scale-125" />
          </a>

          {/* Right side links + dark mode toggle (Desktop) */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav className="flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
              {personalData.navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative py-1 font-serif text-xs lg:text-sm tracking-[0.18em] uppercase transition-colors hover:text-[#C5A880] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A880]"
                    data-cursor-text="GO"
                  >
                    <span className={isActive ? 'text-[#C5A880] font-semibold' : 'text-neutral-700 dark:text-neutral-300'}>
                      {link.label}
                    </span>
                    {/* Animated underline on hover / active */}
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A880] origin-left"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Quick Actions: Terminal & CV Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => onOpenTerminal && onOpenTerminal()}
                className="px-3 py-1.5 rounded-full border border-neutral-300/80 dark:border-neutral-700 hover:border-[#C5A880] dark:hover:border-[#C5A880] text-[11px] font-mono tracking-wider uppercase text-neutral-700 dark:text-neutral-300 hover:text-[#C5A880] transition-all flex items-center gap-1.5"
                data-cursor-text="CLI"
                aria-label="Open Interactive CLI Terminal"
              >
                <TerminalIcon className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>CLI Terminal</span>
              </button>

              <button
                onClick={() => onOpenResume && onOpenResume()}
                className="px-3 py-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-[11px] font-mono tracking-wider uppercase hover:bg-[#C5A880] dark:hover:bg-[#C5A880] dark:hover:text-black transition-all flex items-center gap-1.5 shadow-sm"
                data-cursor-text="CV"
                aria-label="View Curriculum Vitae"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>CV</span>
              </button>
            </div>

            {/* Subtle Divider */}
            <div className="h-4 w-[1px] bg-neutral-300 dark:bg-neutral-700" />

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-neutral-300/80 dark:border-neutral-700 hover:border-[#C5A880] dark:hover:border-[#C5A880] transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              data-cursor-text="THEME"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-[#C5A880] transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Dark Mode + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-[#C5A880] text-current"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-[#C5A880]" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-current focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 top-[68px] z-40 bg-[#FAF8F5]/98 dark:bg-[#0D0D11]/98 backdrop-blur-xl flex flex-col justify-between p-8 md:hidden border-t border-neutral-200 dark:border-neutral-800"
          >
            <nav className="flex flex-col gap-6 mt-4">
              {personalData.navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.3 }}
                  className="font-serif text-2xl tracking-[0.15em] uppercase text-neutral-800 dark:text-neutral-100 hover:text-[#C5A880] flex items-center justify-between py-2 border-b border-neutral-200/50 dark:border-neutral-800"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#C5A880]" />
                </motion.a>
              ))}

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal && onOpenTerminal();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs font-mono tracking-wider uppercase text-center flex items-center justify-center gap-2"
                >
                  <TerminalIcon className="w-4 h-4 text-[#C5A880]" />
                  <span>CLI Terminal</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume && onOpenResume();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs font-mono tracking-wider uppercase text-center flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume (CV)</span>
                </button>
              </div>
            </nav>

            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-xs uppercase font-mono tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                Education & Focus
              </p>
              <p className="text-sm font-serif text-neutral-800 dark:text-neutral-200">
                Thejus Engineering College · B.Tech CSE (AI)
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs font-mono text-[#C5A880]">
                <span>PYTHON</span>
                <span>•</span>
                <span>C PROGRAMMING</span>
                <span>•</span>
                <span>AI/ML</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

