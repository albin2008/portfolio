import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TrendingUp, Sparkles, Orbit, Compass, Zap } from 'lucide-react';

export default function TrajectoryGraph() {
  const containerRef = useRef(null);

  // Bind scroll progress directly to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth spring physics for fluid upward drawing motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Transform coordinates for the ascending trajectory comet
  // SVG viewBox is 0 0 1000 360
  // Path curve: M 60,310 C 250,290 380,240 500,180 C 620,120 780,60 940,30
  const cometX = useTransform(smoothProgress, [0.1, 0.9], [60, 940]);
  const cometY = useTransform(smoothProgress, [0.1, 0.9], [310, 30]);
  const elevationPercent = useTransform(smoothProgress, [0.1, 0.9], [12, 100]);

  const milestones = [
    {
      x: 80,
      y: 305,
      label: 'GHSS Maranchery',
      sub: '+2 Higher Secondary',
      year: '2022-24',
      badge: 'Genesis',
      threshold: 0.15,
    },
    {
      x: 270,
      y: 255,
      label: 'G-Tech Certification',
      sub: 'C & Memory Logic',
      year: 'Early 2024',
      badge: 'Low-Level',
      threshold: 0.32,
    },
    {
      x: 480,
      y: 190,
      label: 'Thejus Eng. College',
      sub: 'B.Tech CSE (AI)',
      year: 'Mid 2024',
      badge: 'University',
      threshold: 0.52,
    },
    {
      x: 700,
      y: 120,
      label: 'Python Engineering',
      sub: 'OOP & Automation',
      year: 'Late 2024',
      badge: 'Systems',
      threshold: 0.72,
    },
    {
      x: 920,
      y: 40,
      label: 'AI & Neural Frontiers',
      sub: 'Perceptrons & Math',
      year: '2025+',
      badge: 'Singularity',
      threshold: 0.88,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-3xl bg-[#080810]/90 backdrop-blur-xl border border-amber-500/25 p-6 sm:p-8 lg:p-10 mb-16 shadow-[0_0_50px_rgba(245,158,11,0.12)] overflow-hidden"
    >
      {/* Background Spacetime Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 pointer-events-none opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border-r border-amber-400/40 h-full" />
        ))}
      </div>

      {/* Header Telemetry Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-neutral-800">
        <div>
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-amber-400 flex items-center gap-2 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>ALGORITHMIC GROWTH TRAJECTORY // SCROLL ACCELERATOR</span>
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
            Ascending Capability Curve
          </h3>
        </div>

        {/* Live Elevation Counter */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>SLOPE: EXPONENTIAL</span>
          </div>
          <div className="hidden sm:block text-neutral-400">
            <span>Scroll down to accelerate curve ↑</span>
          </div>
        </div>
      </div>

      {/* SVG Canvas for the Upward Curve */}
      <div className="relative w-full overflow-x-auto pb-4">
        <div className="min-w-[700px] sm:min-w-full">
          <svg
            viewBox="0 0 1000 360"
            className="w-full h-[260px] sm:h-[320px] overflow-visible"
          >
            <defs>
              {/* Gradient for the glowing upward line */}
              <linearGradient id="curveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#78716C" />
                <stop offset="30%" stopColor="#D97706" />
                <stop offset="70%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FDE68A" />
              </linearGradient>

              {/* Area gradient under the upward curve */}
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(245, 158, 11, 0.35)" />
                <stop offset="100%" stopColor="rgba(245, 158, 11, 0.0)" />
              </linearGradient>

              {/* Filter for celestial glow */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Horizontal Guide Grid Lines */}
            <line x1="40" y1="310" x2="960" y2="310" stroke="#262626" strokeDasharray="4 4" />
            <line x1="40" y1="240" x2="960" y2="240" stroke="#262626" strokeDasharray="4 4" />
            <line x1="40" y1="160" x2="960" y2="160" stroke="#262626" strokeDasharray="4 4" />
            <line x1="40" y1="80" x2="960" y2="80" stroke="#262626" strokeDasharray="4 4" />

            {/* Ghost Background Path (Full line preview) */}
            <path
              d="M 60,310 C 220,295 360,245 490,185 C 620,125 780,65 940,30"
              fill="none"
              stroke="#2A2A38"
              strokeWidth="3"
            />

            {/* Animated Filled Area Under Upward Curve */}
            <motion.path
              d="M 60,310 C 220,295 360,245 490,185 C 620,125 780,65 940,30 L 940,330 L 60,330 Z"
              fill="url(#areaGradient)"
              style={{
                opacity: useTransform(smoothProgress, [0.05, 0.5], [0.2, 0.85]),
              }}
            />

            {/* Main Glowing Ascending Line (Driven by scroll position) */}
            <motion.path
              d="M 60,310 C 220,295 360,245 490,185 C 620,125 780,65 940,30"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#glow)"
              style={{
                pathLength: smoothProgress,
              }}
            />

            {/* Milestone Checkpoint Nodes along the curve */}
            {milestones.map((m, idx) => (
              <g key={idx} className="cursor-pointer group">
                {/* Node Outer Pulsing Ring */}
                <motion.circle
                  cx={m.x}
                  cy={m.y}
                  r="14"
                  fill="rgba(245, 158, 11, 0.15)"
                  stroke="#F59E0B"
                  strokeWidth="1.5"
                  style={{
                    scale: useTransform(
                      smoothProgress,
                      [m.threshold - 0.08, m.threshold, m.threshold + 0.08],
                      [0.5, 1.4, 1]
                    ),
                    opacity: useTransform(
                      smoothProgress,
                      [m.threshold - 0.08, m.threshold],
                      [0.3, 1]
                    ),
                  }}
                />

                {/* Node Central Starlight Point */}
                <circle
                  cx={m.x}
                  cy={m.y}
                  r="6"
                  fill="#FFF7ED"
                  className="shadow-lg"
                />

                {/* Milestone Text Labels */}
                <text
                  x={m.x}
                  y={m.y + (m.y > 150 ? 32 : 36)}
                  textAnchor="middle"
                  className="fill-white font-serif text-sm font-medium tracking-wide select-none"
                >
                  {m.label}
                </text>
                <text
                  x={m.x}
                  y={m.y + (m.y > 150 ? 46 : 50)}
                  textAnchor="middle"
                  className="fill-amber-400 font-mono text-[10px] tracking-widest uppercase select-none"
                >
                  {m.sub} · {m.year}
                </text>
              </g>
            ))}

            {/* Ascending Comet / Asteroid Riding The Upward Slope */}
            <motion.g
              style={{
                x: cometX,
                y: cometY,
              }}
            >
              {/* Outer Comet Starlight Aura */}
              <circle r="18" fill="rgba(251, 191, 36, 0.3)" filter="url(#glow)" />
              <circle r="9" fill="#F59E0B" />
              <circle r="5" fill="#FFFFFF" />

              {/* Trailing Comet Spark */}
              <motion.line
                x1="-15"
                y1="12"
                x2="0"
                y2="0"
                stroke="#FDE68A"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </motion.g>
          </svg>
        </div>
      </div>

      {/* Bottom Telemetry Legend */}
      <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-amber-300">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>GHSS Maranchery (+2)</span>
          </span>
          <span>→</span>
          <span className="text-neutral-300">G-Tech (C)</span>
          <span>→</span>
          <span className="text-neutral-300">Thejus (B.Tech AI)</span>
          <span>→</span>
          <span className="text-amber-300 font-bold">Deep Learning Frontiers</span>
        </div>

        <div className="text-[11px] text-amber-400/90 font-mono">
          Y-Axis: Technical Mastery // X-Axis: Temporal Progression
        </div>
      </div>
    </div>
  );
}

