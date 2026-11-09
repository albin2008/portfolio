import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Asteroid rock geometries for realistic irregular celestial bodies
const asteroidShapes = [
  'polygon(35% 0%, 75% 15%, 100% 45%, 85% 85%, 55% 100%, 15% 80%, 0% 40%, 15% 10%)',
  'polygon(50% 0%, 90% 25%, 100% 70%, 70% 100%, 25% 95%, 0% 60%, 10% 20%)',
  'polygon(25% 5%, 80% 0%, 100% 50%, 75% 90%, 30% 100%, 0% 70%, 5% 30%)',
  'polygon(40% 0%, 85% 20%, 95% 65%, 65% 100%, 15% 85%, 0% 50%, 20% 15%)',
  'polygon(30% 0%, 70% 10%, 100% 40%, 90% 85%, 45% 100%, 10% 80%, 0% 35%)',
];

export default function AsteroidCluster({ isActive, cardId }) {
  if (!isActive) return null;

  // 5 Orbiting asteroids that gravitate inward toward the selected card
  const asteroids = [
    {
      id: 1,
      size: 26,
      initial: { x: -90, y: -70, scale: 0.1, opacity: 0 },
      target: { x: -14, y: -14, scale: 1, opacity: 1 },
      shape: asteroidShapes[0],
      glow: '#F59E0B',
      duration: 0.6,
      delay: 0.02,
    },
    {
      id: 2,
      size: 32,
      initial: { x: 100, y: -80, scale: 0.1, opacity: 0 },
      target: { x: 16, y: -16, scale: 1, opacity: 1 },
      shape: asteroidShapes[1],
      glow: '#FBBF24',
      duration: 0.7,
      delay: 0.08,
    },
    {
      id: 3,
      size: 24,
      initial: { x: 90, y: 80, scale: 0.1, opacity: 0 },
      target: { x: 14, y: 14, scale: 1, opacity: 1 },
      shape: asteroidShapes[2],
      glow: '#D97706',
      duration: 0.65,
      delay: 0.12,
    },
    {
      id: 4,
      size: 28,
      initial: { x: -80, y: 90, scale: 0.1, opacity: 0 },
      target: { x: -14, y: 14, scale: 1, opacity: 1 },
      shape: asteroidShapes[3],
      glow: '#F59E0B',
      duration: 0.75,
      delay: 0.15,
    },
    {
      id: 5,
      size: 18,
      initial: { x: 0, y: -100, scale: 0.1, opacity: 0 },
      target: { x: 0, y: -16, scale: 1, opacity: 1 },
      shape: asteroidShapes[4],
      glow: '#FCD34D',
      duration: 0.55,
      delay: 0.05,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
      <AnimatePresence>
        {asteroids.map((ast) => (
          <motion.div
            key={`${cardId || 'ast'}-${ast.id}`}
            initial={ast.initial}
            animate={{
              ...ast.target,
              // Floating breathing orbit once docked near the card
              rotate: [0, 15, -10, 0],
              y: [ast.target.y, ast.target.y - 5, ast.target.y],
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 0.3 },
            }}
            transition={{
              duration: ast.duration,
              delay: ast.delay,
              ease: [0.16, 1, 0.3, 1],
              rotate: { repeat: Infinity, duration: 8 + ast.id * 2, ease: 'linear' },
              y: { repeat: Infinity, duration: 3 + ast.id, ease: 'easeInOut' },
            }}
            style={{
              position: 'absolute',
              top: ast.id === 1 || ast.id === 2 || ast.id === 5 ? '0%' : '100%',
              left: ast.id === 1 || ast.id === 4 ? '0%' : ast.id === 5 ? '50%' : '100%',
              width: ast.size,
              height: ast.size,
              marginLeft: -ast.size / 2,
              marginTop: -ast.size / 2,
            }}
            className="flex items-center justify-center"
          >
            {/* Asteroid Celestial Body */}
            <div
              style={{
                clipPath: ast.shape,
                boxShadow: `0 0 15px ${ast.glow}, inset -3px -3px 8px rgba(0,0,0,0.8), inset 2px 2px 5px rgba(255,255,255,0.4)`,
              }}
              className="w-full h-full bg-gradient-to-br from-[#78716C] via-[#44403C] to-[#1C1917] relative flex items-center justify-center border border-amber-400/40"
            >
              {/* Surface Craters */}
              <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-black/60 shadow-inner" />
              <div className="absolute bottom-1 right-2 w-2 h-1.5 rounded-full bg-black/50 shadow-inner" />
              <div className="absolute top-2 right-1.5 w-1 h-1 rounded-full bg-black/70" />
            </div>

            {/* Glowing comet / asteroid stardust trail */}
            <motion.div
              animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.9, 1.3, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{
                background: `radial-gradient(circle, ${ast.glow} 0%, transparent 70%)`,
              }}
              className="absolute -inset-2.5 rounded-full blur-[4px] pointer-events-none -z-10"
            />

            {/* Stardust particles spark */}
            <span className="absolute -top-1 -right-1 text-[8px] opacity-75">✨</span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Gravitational Wave Halo around the perimeter of the card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: [0.5, 0.9, 0.5], scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
          duration: 0.4,
        }}
        className="absolute -inset-[3px] rounded-2xl border border-amber-400/60 shadow-[0_0_30px_rgba(245,158,11,0.25)] pointer-events-none -z-10"
      />
    </div>
  );
}

