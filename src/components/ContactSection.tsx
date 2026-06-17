'use client';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, Send, BadgeCheck } from 'lucide-react';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/fab-c14",
    icon: Github,
    color: "hover:text-[#333] dark:hover:text-white"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/faisal-ahmad-bhat-aaba29229",
    icon: Linkedin,
    color: "hover:text-[#0077b5]"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/_fabc14?igshid=ZDc4ODBmNjlmNQ==",
    icon: Instagram,
    color: "hover:text-[#e4405f]"
  },
  {
    name: "Email",
    url: "mailto:faisalahmadbhat00@gmail.com",
    icon: Mail,
    color: "hover:text-primary"
  }
];

interface TerminalLine {
  text: string;
  type: 'system' | 'prompt' | 'input' | 'success' | 'error';
}

function ContactTerminal() {
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [currentInput, setCurrentInput] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: 'FAB_C14 CONTACT TERMINAL v2.0 - SECURE CHANNEL', type: 'system' },
    { text: '===============================================', type: 'system' },
    { text: 'Type your message details in this console to contact Faisal.', type: 'system' },
    { text: 'Type "clear" to restart, "skip" to mail directly.', type: 'system' },
    { text: '', type: 'system' },
    { text: 'Enter your name:', type: 'prompt' }
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (value: string) => {
    const val = value.trim();
    if (val.toLowerCase() === 'clear') {
      setStep(0);
      setFormData({ name: '', email: '', message: '' });
      setLines([
        { text: 'FAB_C14 CONTACT TERMINAL v2.0 - SECURE CHANNEL', type: 'system' },
        { text: '===============================================', type: 'system' },
        { text: 'Enter your name:', type: 'prompt' }
      ]);
      setCurrentInput('');
      return;
    }

    if (val.toLowerCase() === 'skip') {
      window.location.href = 'mailto:faisalahmadbhat00@gmail.com?subject=Contact from Portfolio';
      setCurrentInput('');
      return;
    }

    const nextLines = [...lines, { text: `> ${val}`, type: 'input' as const }];

    if (step === 0) {
      if (val === '') {
        setLines([...nextLines, { text: 'Name cannot be empty. Enter your name:', type: 'error' }]);
        setCurrentInput('');
        return;
      }
      setFormData(prev => ({ ...prev, name: val }));
      setLines([
        ...nextLines,
        { text: `System: Hello, ${val}.`, type: 'system' },
        { text: 'Enter your email:', type: 'prompt' }
      ]);
      setStep(1);
    } else if (step === 1) {
      if (val === '' || !val.includes('@') || !val.includes('.')) {
        setLines([...nextLines, { text: 'Invalid email address. Please enter a valid email:', type: 'error' }]);
        setCurrentInput('');
        return;
      }
      setFormData(prev => ({ ...prev, email: val }));
      setLines([
        ...nextLines,
        { text: `System: Email set to: ${val}.`, type: 'system' },
        { text: 'Enter your message:', type: 'prompt' }
      ]);
      setStep(2);
    } else if (step === 2) {
      if (val === '') {
        setLines([...nextLines, { text: 'Message cannot be empty. Enter your message:', type: 'error' }]);
        setCurrentInput('');
        return;
      }
      const updatedFormData = { ...formData, message: val };
      setFormData(prev => ({ ...prev, message: val }));
      setLines([
        ...nextLines,
        { text: '', type: 'system' },
        { text: '---------------- REVIEW CONTENT ----------------', type: 'system' },
        { text: `Name    : ${updatedFormData.name}`, type: 'system' },
        { text: `Email   : ${updatedFormData.email}`, type: 'system' },
        { text: `Message : ${updatedFormData.message}`, type: 'system' },
        { text: '------------------------------------------------', type: 'system' },
        { text: 'Type "send" to submit, or "clear" to reset:', type: 'prompt' }
      ]);
      setStep(3);
    } else if (step === 3) {
      if (val.toLowerCase() === 'send' || val.toLowerCase() === 'submit') {
        setLines([
          ...nextLines,
          { text: 'Encrypting secure payload...', type: 'system' },
          { text: 'Opening email client routing protocol...', type: 'system' },
          { text: '✔ Protocol finished. Redirecting details.', type: 'success' }
        ]);
        setStep(4);
        
        setTimeout(() => {
          const mailtoUrl = `mailto:faisalahmadbhat00@gmail.com?subject=Message from ${encodeURIComponent(formData.name)} via Portfolio&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message)}`;
          window.location.href = mailtoUrl;
        }, 1200);
      } else {
        setLines([...nextLines, { text: 'Unknown command. Type "send" to submit, or "clear" to reset:', type: 'error' }]);
      }
    }

    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  return (
    <div
      className="bg-[#0a0a0a] border border-green-950/40 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.05)] font-mono text-xs max-w-xl mx-auto w-full text-left"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#111] border-b border-green-900/20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
          </div>
          <span className="text-green-600/50 text-[10px] ml-2 tracking-wider">contact@fabc14:~</span>
        </div>
        <span className="text-green-700/40 text-[9px] tracking-widest uppercase">CONSOLE</span>
      </div>

      <div className="relative">
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] z-10"></div>

        {/* Console Body */}
        <div 
          ref={scrollRef}
          className="h-[280px] overflow-y-auto p-4 space-y-1 relative" 
          style={{ scrollbarWidth: 'none' }}
        >
          {lines.map((line, i) => (
            <div 
              key={i} 
              className={`leading-relaxed whitespace-pre-wrap ${
                line.type === 'input'
                  ? 'text-yellow-400/90 font-bold'
                  : line.type === 'error'
                  ? 'text-red-400/90 font-semibold'
                  : line.type === 'prompt'
                  ? 'text-primary/95 font-semibold'
                  : line.type === 'success'
                  ? 'text-emerald-400 font-bold'
                  : 'text-green-400/80'
              }`}
            >
              {line.text || '\u00A0'}
            </div>
          ))}

          {step < 4 ? (
            <div className="flex items-center gap-1.5 text-yellow-400/90 mt-1">
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
                aria-label="Interactive Contact Terminal input"
              />
              <span className="w-2 h-3.5 bg-green-400/70 animate-pulse"></span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-emerald-400 mt-2 font-mono text-[10px]">
              <BadgeCheck size={14} />
              <span>TERMINAL STATUS: MESSAGE_ROUTED (SUCCESS)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="py-20 w-full relative overflow-hidden">
      {/* Horizontal fade-like blue separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            OPEN FOR OPPORTUNITIES
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
            Ready to build something <span className="text-primary glitch-text">amazing</span>?
          </h2>

          <p className="text-lg text-black/70 dark:text-white/80 max-w-2xl mx-auto leading-relaxed">
            Send a secure transmission through my interactive terminal console below, or reach out directly on social networks.
          </p>
        </motion.div>

        {/* Interactive Contact Console */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center"
        >
          <ContactTerminal />
        </motion.div>

        {/* Fallback Direct Contact / Social Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-4 pt-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md dark:hover:shadow-neon-sm`}
            >
              <link.icon size={18} className="text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors" />
              <span className="font-mono text-xs font-bold text-black/75 dark:text-white/80">
                {link.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
