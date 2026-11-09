import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for fluid trailing effect
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on devices that support hover and fine pointer (mouse)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!mediaQuery.matches || prefersReducedMotion.matches) {
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hover over interactive elements
    const handleElementHover = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .cursor-pointer, .project-card');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Gravitational Singularity Accretion Ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-amber-400/70 shadow-[0_0_16px_rgba(245,158,11,0.4)] flex items-center justify-center backdrop-blur-[0.5px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 76 : 56) : 34,
          height: isHovered ? (cursorText ? 76 : 56) : 34,
          backgroundColor: isHovered ? 'rgba(245, 158, 11, 0.16)' : 'rgba(245, 158, 11, 0.03)',
          scale: isClicking ? 0.85 : 1,
          borderColor: isHovered ? 'rgba(251, 191, 36, 0.9)' : 'rgba(245, 158, 11, 0.6)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      >
        {cursorText && (
          <span className="text-[10px] tracking-widest uppercase font-mono text-amber-200 select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Central Singularity Point */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 6 : 4,
          height: isHovered ? 6 : 4,
          opacity: 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}

