import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Asteroid rock geometries for realistic irregular shapes
const asteroidShapes = [
  'polygon(35% 0%, 75% 15%, 100% 45%, 85% 85%, 55% 100%, 15% 80%, 0% 40%, 15% 10%)',
  'polygon(50% 0%, 90% 25%, 100% 70%, 70% 100%, 25% 95%, 0% 60%, 10% 20%)',
  'polygon(25% 5%, 80% 0%, 100% 50%, 75% 90%, 30% 100%, 0% 70%, 5% 30%)',
  'polygon(40% 0%, 85% 20%, 95% 65%, 65% 100%, 15% 85%, 0% 50%, 20% 15%)',
];

export default function BlackHoleVisual() {
  const [hovered, setHovered] = useState(false);

  // 12 Asteroids orbiting the black hole event horizon
  const orbitingAsteroids = [
    { id: 1, radius: 210, speed: 18, size: 14, delay: 0, shape: asteroidShapes[0] },
    { id: 2, radius: 240, speed: 22, size: 20, delay: 3, shape: asteroidShapes[1] },
    { id: 3, radius: 190, speed: 15, size: 12, delay: 6, shape: asteroidShapes[2] },
    { id: 4, radius: 270, speed: 26, size: 18, delay: 9, shape: asteroidShapes[3] },
    { id: 5, radius: 220, speed: 20, size: 16, delay: 12, shape: asteroidShapes[0] },
    { id: 6, radius: 260, speed: 24, size: 22, delay: 15, shape: asteroidShapes[1] },
    { id: 7, radius: 180, speed: 14, size: 11, delay: 18, shape: asteroidShapes[2] },
    { id: 8, radius: 290, speed: 28, size: 15, delay: 21, shape: asteroidShapes[3] },
  ];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black select-none"
    >
      {/* Distant space field inside the frame */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />

      {/* Spacetime Gravitational Ripples (Pulsing expanding waves) */}
      {[0, 1.8, 3.6].map((del, idx) => (
        <motion.div
          key={idx}
          animate={{
            scale: [0.8, 2.2],
            opacity: [0.45, 0],
          }}
          transition={{
            duration: 5.4,
            repeat: Infinity,
            delay: del,
            ease: 'easeOut',
          }}
          className="absolute w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full border border-amber-400/30 pointer-events-none"
        />
      ))}

      {/* Outer Gravitational Lensing Halo (Large soft aura) */}
      <motion.div
        animate={{
          scale: hovered ? [1.05, 1.12, 1.05] : [1, 1.05, 1],
          opacity: [0.75, 0.95, 0.75],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[480px] sm:w-[650px] md:w-[780px] h-[480px] sm:h-[650px] md:h-[780px] rounded-full bg-gradient-to-r from-amber-500/30 via-violet-600/20 to-orange-500/30 blur-[75px] pointer-events-none"
      />

      {/* Relativistic Warped Upper Arc (Gravitationally lensed back of accretion disk) */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-[350px] sm:w-[480px] md:w-[580px] h-[350px] sm:h-[480px] md:h-[580px] rounded-full border-[14px] sm:border-[20px] border-transparent border-t-[#FED7AA] border-r-[#F59E0B] blur-[2px] opacity-90 shadow-[0_0_60px_#f59e0b]"
      />

      {/* Photon Sphere / High-Energy relativistic Ring */}
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-[270px] sm:w-[370px] md:w-[440px] h-[270px] sm:h-[370px] md:h-[440px] rounded-full border-[3.5px] border-amber-300/90 blur-[1px] shadow-[0_0_40px_rgba(251,191,36,0.95)]"
      />

      {/* Orbiting Asteroid Belt Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-15">
        {orbitingAsteroids.map((ast) => (
          <motion.div
            key={ast.id}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: ast.speed,
              repeat: Infinity,
              ease: 'linear',
              delay: ast.delay,
            }}
            style={{
              width: ast.radius * 2,
              height: ast.radius * 0.55,
            }}
            className="absolute rounded-[100%] flex items-center justify-start rotate-[-13deg]"
          >
            {/* The Asteroid Body */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [0.85, 1.25, 0.85],
              }}
              transition={{
                rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
                scale: { duration: ast.speed / 2, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{
                width: ast.size,
                height: ast.size,
                clipPath: ast.shape,
                boxShadow: '0 0 10px rgba(245,158,11,0.7), inset -2px -2px 4px rgba(0,0,0,0.9)',
              }}
              className="bg-gradient-to-br from-[#A8A29E] via-[#57534E] to-[#1C1917] border border-amber-300/40 relative"
            >
              <div className="absolute top-0.5 left-0.5 w-1 h-1 rounded-full bg-black/70" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* The Equatorial Accretion Disk (Tilted glowing plasma stream) */}
      <motion.div
        animate={{
          scaleY: [0.24, 0.27, 0.24],
          rotate: [-14, -12, -14],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[520px] sm:w-[750px] md:w-[920px] h-[150px] sm:h-[190px] md:h-[230px] rounded-[100%] bg-gradient-to-r from-transparent via-[#FFEDD5] to-transparent blur-[1.5px] opacity-95 flex items-center justify-center z-10 pointer-events-none shadow-[0_0_80px_rgba(245,158,11,0.85)]"
      >
        <div className="w-[85%] h-[42%] rounded-[100%] bg-gradient-to-r from-transparent via-amber-400 to-transparent blur-[1px] opacity-90" />
      </motion.div>

      {/* The Central Event Horizon (Pure Black Void Sphere) */}
      <div className="relative w-[180px] sm:w-[240px] md:w-[290px] h-[180px] sm:h-[240px] md:h-[290px] rounded-full bg-black z-20 shadow-[0_0_90px_rgba(0,0,0,1)] flex items-center justify-center">
        {/* Event Horizon Inner Edge Shadow */}
        <div className="absolute inset-0 rounded-full border border-amber-500/25 shadow-inner" />

        {/* Singularity core pulse */}
        <div className="w-3 h-3 rounded-full bg-white/30 animate-ping pointer-events-none" />
      </div>

      {/* Relativistic Lower Disk Arc (Crosses in front of the black hole lower hemisphere) */}
      <motion.div
        animate={{
          scaleY: [0.24, 0.27, 0.24],
          rotate: [-14, -12, -14],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[480px] sm:w-[680px] md:w-[820px] h-[75px] sm:h-[95px] md:h-[115px] rounded-[100%] bg-gradient-to-r from-transparent via-[#FFF7ED] to-transparent blur-[2px] opacity-85 z-30 pointer-events-none"
      />

      {/* Gravitational Spacetime Coordinate Grid Overlay */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-20">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border-r border-amber-400/30 h-full" />
        ))}
      </div>

      {/* Cosmic Telemetry and Singularity Status */}
      <div className="absolute top-4 left-6 z-40 hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest text-amber-400/90 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        <span>GRAVITATIONAL SINGULARITY // ASTEROID BELT ACTIVE</span>
      </div>

      <div className="absolute top-4 right-6 z-40 hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
        <span>GHSS MARANCHERY → THEJUS AI</span>
      </div>

      {/* Bottom gradient so white serif title has maximum celestial contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-30" />
    </div>
  );
}
