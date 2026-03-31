'use client';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

// --- Static Terminal with interactive input ---
function RetroTerminal() {
  const [extraLines, setExtraLines] = useState<{ text: string; type: 'input' | 'output' | 'error' | 'ascii' }[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Record<string, { lines: string[]; type: 'output' | 'ascii' }> = {
    help: {
      type: 'output',
      lines: [
        'Available commands:',
        '  about      — who is faisal?',
        '  stack      — tech I work with',
        '  projects   — things I\'ve built',
        '  contact    — get in touch',
        '  hire       — why hire me?',
        '  clear      — clear terminal',
      ],
    },
    about: {
      type: 'output',
      lines: [
        'Faisal Ahmad',
        'Self-taught Full Stack Developer from India.',
        'I build web apps from database to deploy.',
        'Currently open to freelance & full-time roles.',
      ],
    },
    stack: {
      type: 'output',
      lines: [
        'Frontend : React, Next.js, TypeScript, Tailwind',
        'Backend  : Node.js, Express, Python, FastAPI',
        'Database : MongoDB, PostgreSQL, MySQL, Redis',
        'DevOps   : AWS, Docker, Linux, Git',
      ],
    },
    projects: {
      type: 'output',
      lines: [
        '01. EverFeatured — Product discovery platform',
        '02. FLAME        — Educational learning tool',
        '03. PinToInbox   — Inbox management app',
        '04. SkillFolio   — AI resume builder',
        '',
        'Type "contact" to discuss a project.',
      ],
    },
    contact: {
      type: 'output',
      lines: [
        'Email    : faisalahmadbhat00@gmail.com',
        'GitHub   : github.com/fab-c14',
        'LinkedIn : linkedin.com/in/faisal-ahmad-bhat-aaba29229',
        '',
        'I usually respond within 24 hours.',
      ],
    },
    hire: {
      type: 'ascii',
      lines: [
        '┌─────────────────────────────────────┐',
        '│         WHY YOU SHOULD HIRE ME      │',
        '├─────────────────────────────────────┤',
        '│ ✓ I ship fast and ship clean        │',
        '│ ✓ Full stack — no handoffs needed   │',
        '│ ✓ I care about the end user, not    │',
        '│   just the code                     │',
        '│ ✓ Available now for new projects    │',
        '└─────────────────────────────────────┘',
      ],
    },
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: { text: string; type: 'input' | 'output' | 'error' | 'ascii' }[] = [
      { text: `$ ${cmd}`, type: 'input' },
    ];

    if (trimmed === 'clear') {
      setExtraLines([]);
      setCurrentInput('');
      return;
    }

    if (commands[trimmed]) {
      const { lines, type } = commands[trimmed];
      lines.forEach(l => newLines.push({ text: l, type }));
    } else if (trimmed !== '') {
      newLines.push({ text: `command not found: ${trimmed}. Try "help".`, type: 'error' });
    }

    setExtraLines(prev => [...prev, ...newLines]);
    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  return (
    <div
      className="bg-[#0a0a0a] border border-green-900/50 rounded-md overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.05)] font-mono text-xs"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#111] border-b border-green-900/30">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
          </div>
          <span className="text-green-600/60 text-[10px] ml-2 tracking-wider">terminal@fabc14~</span>
        </div>
        <span className="text-green-700/40 text-[9px] tracking-widest">TERMINAL</span>
      </div>

      {/* Scanline overlay */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] z-10"></div>

        {/* Terminal Body */}
        <div className="h-[260px] overflow-y-auto p-3 space-y-0.5 relative" style={{ scrollbarWidth: 'none' }}>

          {/* === STATIC CONTENT === you will never understand why i put it here*/}
          <div className="text-green-400/80 leading-relaxed">{`> System ready.`}</div>
          <div className="text-yellow-400/90 leading-relaxed">$ hire</div>
          <div className="text-primary/90 leading-relaxed whitespace-pre">┌─────────────────────────────────────┐</div>
          <div className="text-primary/90 leading-relaxed whitespace-pre">│         WHY YOU SHOULD HIRE ME      │</div>
          <div className="text-primary/90 leading-relaxed whitespace-pre">├─────────────────────────────────────┤</div>
          <div className="text-primary/90 leading-relaxed whitespace-pre">│ ✓ I ship fast and ship clean        │</div>
          <div className="text-primary/90 leading-relaxed whitespace-pre">│ ✓ Full stack — no handoffs needed   │</div>
          <div className="text-primary/90 leading-relaxed whitespace-pre">│ ✓ I care about the end user, not    │</div>
          <div className="text-primary/90 leading-relaxed whitespace-pre">│   just the code                     │</div>
          <div className="text-primary/90 leading-relaxed whitespace-pre">│ ✓ Available now for new projects    │</div>
          <div className="text-primary/90 leading-relaxed whitespace-pre">└─────────────────────────────────────┘</div>
          <div className="text-green-400/80 leading-relaxed">&nbsp;</div>
          <div className="text-green-400/80 leading-relaxed">{`Type "help" for available commands.`}</div>

          {/* === DYNAMIC — user-typed commands === */}
          {extraLines.map((line, i) => (
            <div key={i} className={`leading-relaxed whitespace-pre ${
              line.type === 'input'
                ? 'text-yellow-400/90'
                : line.type === 'error'
                ? 'text-red-400/90'
                : line.type === 'ascii'
                ? 'text-primary/90'
                : 'text-green-400/80'
            }`}>
              {line.text || '\u00A0'}
            </div>
          ))}

          {/* Input line */}
          <div className="flex items-center gap-1 text-yellow-400/90">
            <span>$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-green-300/90 flex-1 caret-green-400 font-mono text-xs"
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal command input"
            />
            <span className="w-2 h-3.5 bg-green-400/70 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Hero Section ---
export default function HeroSection() {
  return (
    <section className="px-6 pt-8 pb-12 relative overflow-hidden">
        {/* Decorative line */}
        <div className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            {/* Left Side — Headline + CTA */}
            <div className="flex-1">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-black dark:text-white text-[42px] md:text-[64px] leading-[0.9] font-bold tracking-tighter mix-blend-hard-light mb-4 glitch-text"
                >
                    <span className="block hover:translate-x-1 transition-transform duration-75">FULL_STACK</span>
                    <span className="block text-primary drop-shadow-[0_0_8px_rgba(13,223,242,0.6)] pl-8">DEVELOPER_</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-6 mt-8 pl-2 border-l-2 border-primary/40"
                >
                    <p className="text-black/80 dark:text-white/90 text-base md:text-lg leading-relaxed max-w-[500px]">
                        <span className="text-primary font-bold mr-2">&gt;</span>
                        I build fast, reliable web applications. Taking an idea from a rough concept to a fully functional product is what I do best.
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="#projects" className="w-fit inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white dark:hover:text-black transition-colors group clip-shard-button border border-primary px-6 py-3 bg-slate-100 dark:bg-black/50">
                            <span >VIEW WORK</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                      
                    </div>
                </motion.div>
            </div>

            {/* Right Side — Static Retro Terminal */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-full md:w-[380px] shrink-0"
                aria-label="Interactive developer terminal"
            >
                <RetroTerminal />
            </motion.div>
        </div>
    </section>
  );
}
