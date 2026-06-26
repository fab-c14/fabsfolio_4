'use client';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// --- Interactive Command Terminal ---
function RetroTerminal() {
  const [extraLines, setExtraLines] = useState<{ text: string; type: 'input' | 'output' | 'error' | 'ascii' }[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [extraLines]);

  const commands: Record<string, { lines: string[]; type: 'output' | 'ascii' }> = {
    help: {
      type: 'output',
      lines: [
        'Available commands:',
        '  about      — who is Faisal?',
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
        'Faisal Ahmad Bhat',
        'Full Stack Developer & AI Engineer based in Srinagar, J&K.',
        'Specializing in SaaS architectures and Gen AI integration.',
        'Currently open to freelance contracts and remote roles.',
      ],
    },
    stack: {
      type: 'output',
      lines: [
        'Frontend : React, Next.js, TypeScript, Tailwind',
        'Backend  : Node.js, Express, Python, FastAPI',
        'Gen AI   : LLM Integration, RAG, OpenAI API, Prompts',
        'Database : MongoDB, PostgreSQL, MySQL, Redis',
        'DevOps   : AWS, Docker, Linux, Git',
      ],
    },
    projects: {
      type: 'output',
      lines: [
        '01. EverFeatured — Product discovery platform',
        '02. ExpertMatter  — Consulting & B2B platform',
        '03. AryanLakhani — Marketer portfolio website',
        '04. FLAME        — Educational learning tool',
        '05. PinToInbox   — Inbox management app',
        '06. SkillFolio   — AI resume builder',
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
        '│ ✓ Full stack & Gen AI Integration   │',
        '│ ✓ Based in Jammu and Kashmir        │',
        '│ ✓ Available for remote contracts    │',
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
      className="bg-[#0a0a0a] border border-green-900/50 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.06)] dark:shadow-[0_0_30px_rgba(13,223,242,0.08)] font-mono text-xs w-full text-left cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-green-900/20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 animate-pulse"></span>
          </div>
          <span className="text-green-600/50 text-[10px] ml-2 tracking-wider">terminal@fabc14~</span>
        </div>
        <span className="text-green-700/40 text-[9px] tracking-widest uppercase">Console</span>
      </div>

      {/* Screen container with CRT flicker/fuzz effect */}
      <div className="relative crt-flicker">
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] z-10"></div>

        {/* Terminal Body */}
        <div 
          ref={scrollRef}
          className="h-[250px] overflow-y-auto p-4 space-y-1 relative" 
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="text-green-400/80 leading-relaxed font-mono">{`> System ready.`}</div>
          <div className="text-yellow-400/90 leading-relaxed font-mono">$ hire</div>
          <div className="text-primary/95 leading-relaxed whitespace-pre font-mono">┌─────────────────────────────────────┐</div>
          <div className="text-primary/95 leading-relaxed whitespace-pre font-mono">│         WHY YOU SHOULD HIRE ME      │</div>
          <div className="text-primary/95 leading-relaxed whitespace-pre font-mono">├─────────────────────────────────────┤</div>
          <div className="text-primary/95 leading-relaxed whitespace-pre font-mono">│ ✓ I ship fast and ship clean        │</div>
          <div className="text-primary/95 leading-relaxed whitespace-pre font-mono">│ ✓ Full stack & Gen AI Integration   │</div>
          <div className="text-primary/95 leading-relaxed whitespace-pre font-mono">│ ✓ Based in Jammu and Kashmir        │</div>
          <div className="text-primary/95 leading-relaxed whitespace-pre font-mono">│ ✓ Available for remote contracts    │</div>
          <div className="text-primary/95 leading-relaxed whitespace-pre font-mono">└─────────────────────────────────────┘</div>
          <div className="text-green-400/80 leading-relaxed font-mono">&nbsp;</div>
          <div className="text-green-400/80 leading-relaxed font-mono">{`Type "help" for available commands.`}</div>

          {/* User inputs list */}
          {extraLines.map((line, i) => (
            <div key={i} className={`leading-relaxed whitespace-pre-wrap font-mono ${
              line.type === 'input'
                ? 'text-yellow-400/95 font-bold'
                : line.type === 'error'
                ? 'text-red-400/95 font-semibold'
                : line.type === 'ascii'
                ? 'text-primary/95'
                : 'text-green-400/80'
            }`}>
              {line.text || '\u00A0'}
            </div>
          ))}

          {/* Input block */}
          <div className="flex items-center gap-1.5 text-yellow-400/95 mt-1 font-mono">
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

export default function HeroSection() {
  return (
    <section className="w-full pt-6 pb-12 mt-0 relative overflow-hidden">
        {/* Decorative line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 max-w-5xl mx-auto">
            {/* Left Side — Headline + CTA */}
            <div className="flex-1 text-left">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-black dark:text-white text-[42px] md:text-[64px] leading-[0.9] font-bold tracking-tighter mix-blend-hard-light mb-4 glitch-text uppercase"
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
                        From desktop to android, I've worked in every field. I am Faisal Ahmad Bhat (known online as Fab, Fabsfolio, or Fabfolio), a Full Stack Developer & AI Engineer based in Jammu & Kashmir (Srinagar & Anantnag). I design and construct highly performant SaaS architectures, Generative AI / LLM workflows, and e-commerce websites.
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="#projects" className="w-fit inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white dark:hover:text-black transition-colors group clip-shard-button border border-primary px-6 py-3 bg-slate-100 dark:bg-black/50">
                            <span>VIEW WORK</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Right Side — Glitch Console Terminal */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -6, 0],
                  scale: 1 
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "mirror" as const,
                    duration: 5,
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
                className="w-full md:w-[380px] shrink-0"
                aria-label="Console Terminal command board"
            >
                <RetroTerminal />
            </motion.div>
        </div>
    </section>
  );
}
