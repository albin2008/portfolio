import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import IntroCurtain from './components/IntroCurtain';
import CosmicBackground from './components/CosmicBackground';
import ResumeModal from './components/ResumeModal';
import TerminalSimulator from './components/TerminalSimulator';
import FloatingProgressHUD from './components/FloatingProgressHUD';

export default function App() {
  const lenisRef = useRef(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalCommand, setTerminalCommand] = useState('');

  // Dark mode state: default to dark / cosmic black hole theme!
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark class to <html>
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Initialize Lenis smooth inertial scrolling
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030307] text-[#FAF8F5] selection:bg-amber-500/30 selection:text-amber-200">
      {/* Living Cosmic Universe & Starfield Canvas */}
      <CosmicBackground />

      {/* Editorial Page Load Intro Animation */}
      <IntroCurtain />

      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Magnetic Smooth Cursor (desktop only) */}
      <CustomCursor />

      {/* Sticky Blurred Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lenisRef={lenisRef}
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={(cmd) => {
          setTerminalCommand(cmd || '');
          setTerminalOpen(true);
        }}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero
          lenisRef={lenisRef}
          onOpenTerminal={() => {
            setTerminalCommand('run calc');
            setTerminalOpen(true);
          }}
          onOpenResume={() => setResumeOpen(true)}
        />
        <About />
        <Projects
          onOpenTerminal={(cmd) => {
            setTerminalCommand(cmd || '');
            setTerminalOpen(true);
          }}
        />
        <Journey />
        <Skills />
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer lenisRef={lenisRef} />

      {/* Floating Ascending Progress HUD (Scroll-Driven) */}
      <FloatingProgressHUD lenisRef={lenisRef} />

      {/* Modals */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <TerminalSimulator
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        initialCommand={terminalCommand}
      />
    </div>
  );
}
