import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Play, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalData } from '../data';

export default function TerminalSimulator({ isOpen, onClose, initialCommand }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'ALBIN-OS v1.0.4 [First Year B.Tech CSE (AI)]' },
    { type: 'system', text: 'Hardware: G-Tech C Core | Python 3.12 Engine | Math & AI Subsystem' },
    { type: 'system', text: 'Type "help" to view available programs, or click quick triggers below.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      if (initialCommand) {
        handleExecute(initialCommand);
      }
    }
  }, [isOpen, initialCommand]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleExecute = (cmd) => {
    const raw = cmd.trim();
    if (!raw) return;

    const newHistory = [...history, { type: 'input', text: `$ ${raw}` }];
    const lower = raw.toLowerCase();

    if (lower === 'clear' || lower === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (lower === 'help') {
      newHistory.push({
        type: 'output',
        text: `Available CLI Commands:
  • run calc       - Run C Matrix & Scientific Calculator simulation
  • run students   - Run Python Student Record Management System demo
  • run game       - Play the Heuristic Number Guessing game
  • run perceptron - Execute forward pass matrix computation demo
  • skills         - Print evaluated technical competencies
  • education      - Print academic credentials & G-Tech certification
  • contact        - Print email and direct links
  • clear          - Clear terminal buffer`
      });
    } else if (lower === 'run calc' || lower === 'calc') {
      newHistory.push({
        type: 'code',
        text: `[C99 Execution Engine] Allocating 3x3 Dynamic Memory Arrays...
valgrind --leak-check=full ./c_matrix_calc

>> Initializing Matrix A [3x3]:
   [ 4.00,  7.00,  2.00 ]
   [ 1.00,  8.00,  3.00 ]
   [ 5.00,  2.00,  6.00 ]

>> Computing Determinant via Recursive Laplace Expansion:
   det(A) = 4*(48 - 6) - 7*(6 - 15) + 2*(2 - 40)
   det(A) = 4*(42) - 7*(-9) + 2*(-38)
   det(A) = 168 + 63 - 76 = 155.000000

>> Valgrind Memory Report:
   All heap blocks were freed -- no leaks are possible (0 errors).`
      });
    } else if (lower === 'run students' || lower === 'students') {
      newHistory.push({
        type: 'code',
        text: `[Python 3.12 Engine] python3 student_records.py --mode=interactive
Connecting to internal academic record file: storage/students.db...

[OK] Loaded 140 student records.
Sample record query (Roll: "24AI042"):
  • Name: Albin Antony
  • Institution: Thejus Engineering College
  • Program: B.Tech CSE (AI) - First Year
  • Coursework: C Programming, Discrete Math, Computational Logic
  • CGPA: 9.42 / 10.00
  • Status: Active & Enrolled`
      });
    } else if (lower === 'run game' || lower === 'game') {
      const secret = 42;
      newHistory.push({
        type: 'output',
        text: `[Game Engine] Initialized Binary Search Range [1 .. 100].
Target generated. Let's test binary search distance:
  Guess: 50 -> Result: [Too High! Theoretical mid: 25]
  Guess: 25 -> Result: [Too Low! Distance: 17, Warm]
  Guess: 38 -> Result: [Too Low! Distance: 4, Boiling Hot!]
  Guess: 42 -> BINGO! Correct in 4 steps (Optimal O(log2 100) = ~6.64 steps). Player Efficiency: 100%`
      });
    } else if (lower === 'run perceptron' || lower === 'perceptron') {
      newHistory.push({
        type: 'code',
        text: `[AI Perceptron Sandbox] Running NumPy matrix feedforward:
import numpy as np
X = np.array([[0.5, 0.8, -0.2]]) # Shape: (1, 3)
W1 = np.random.randn(3, 4)       # Layer 1 Weights
Z1 = np.dot(X, W1) + 0.1         # Linear Transform
A1 = np.maximum(0, Z1)           # ReLU Activation

>> Computed Activation Vector (A1):
   [0.7241, 0.0000, 1.1492, 0.3804]
>> Forward pass completed in 0.0018ms with 0 NaN/Inf values.`
      });
    } else if (lower === 'skills') {
      newHistory.push({
        type: 'output',
        text: `Primary: Python 3.x, C Programming (G-Tech Certified), Linux Shell
Mathematics & AI: Linear Algebra, Matrix Calculus, NumPy, Supervised Learning Basics
Tools: Git, GitHub, VS Code, GCC Compiler, Valgrind`
      });
    } else if (lower === 'education') {
      newHistory.push({
        type: 'output',
        text: `• Thejus Engineering College (2024-2028): B.Tech Computer Science & Engineering (AI)
• G-Tech Computer Education (2024): Professional Certification in C Language & Memory Management
• GHSS Maranchery (Completed 2024): Higher Secondary (+2) in Science & Mathematics`
      });
    } else if (lower === 'contact') {
      newHistory.push({
        type: 'output',
        text: `Email: ${personalData.contact.email}
College: ${personalData.contact.college}
Location: ${personalData.contact.address}`
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: "${raw}". Type "help" to see available commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const quickButtons = [
    { label: 'run calc (C)', cmd: 'run calc' },
    { label: 'run students (Python)', cmd: 'run students' },
    { label: 'run game', cmd: 'run game' },
    { label: 'run perceptron', cmd: 'run perceptron' },
    { label: 'help', cmd: 'help' }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className={`relative w-full ${isExpanded ? 'max-w-5xl h-[88vh]' : 'max-w-3xl h-[650px]'
            } rounded-2xl bg-[#0C0C0F] text-[#E4E2DC] border border-neutral-800 shadow-2xl flex flex-col overflow-hidden z-10 transition-all duration-300 font-mono`}
        >
          {/* Terminal Window Header Bar */}
          <div className="px-4 py-3 bg-[#141418] border-b border-neutral-800/80 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 cursor-pointer" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
              <span className="ml-3 text-xs text-neutral-400 font-sans tracking-wide">
                albin@thejus-ai: ~/projects/cli-environment
              </span>
            </div>

            <div className="flex items-center gap-2 text-neutral-400">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:text-white transition-colors"
                aria-label="Toggle expand"
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={onClose}
                className="p-1 hover:text-white transition-colors"
                aria-label="Close terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Command Trigger Pills */}
          <div className="px-4 py-2.5 bg-[#0F0F14] border-b border-neutral-800/60 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[11px] text-neutral-400 uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C5A880]" /> Quick Run:
            </span>
            {quickButtons.map((btn) => (
              <button
                key={btn.cmd}
                onClick={() => handleExecute(btn.cmd)}
                className="px-2.5 py-1 rounded bg-[#1A1A22] hover:bg-[#C5A880] hover:text-black text-neutral-300 text-xs border border-neutral-800 transition-colors flex items-center gap-1"
              >
                <Play className="w-2.5 h-2.5" />
                <span>{btn.label}</span>
              </button>
            ))}
          </div>

          {/* Terminal Screen & History */}
          <div className="flex-1 p-5 overflow-y-auto space-y-3 text-xs leading-relaxed font-mono">
            {history.map((line, idx) => (
              <div key={idx} className="whitespace-pre-wrap">
                {line.type === 'system' && (
                  <p className="text-neutral-500">{line.text}</p>
                )}
                {line.type === 'input' && (
                  <p className="text-[#C5A880] font-semibold">{line.text}</p>
                )}
                {line.type === 'code' && (
                  <div className="p-3 my-1 rounded bg-[#13131A] border border-neutral-800/80 text-emerald-300 font-mono text-[11px]">
                    {line.text}
                  </div>
                )}
                {line.type === 'output' && (
                  <p className="text-neutral-300">{line.text}</p>
                )}
                {line.type === 'error' && (
                  <p className="text-red-400">{line.text}</p>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Input Prompt */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleExecute(inputVal);
            }}
            className="p-3.5 bg-[#121217] border-t border-neutral-800/80 flex items-center gap-2"
          >
            <span className="text-[#C5A880] font-bold select-none">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command ('help', 'run calc', 'run students')..."
              className="flex-1 bg-transparent text-white text-xs outline-none font-mono placeholder-neutral-600"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded bg-neutral-800 hover:bg-[#C5A880] hover:text-black text-neutral-300 text-xs transition-colors flex items-center gap-1"
            >
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

