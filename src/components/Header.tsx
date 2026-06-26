'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu, User, Mail, FolderOpen, MessageSquare, BookOpen, Sun, Moon, Layers } from 'lucide-react';
import { useTheme } from '@/components/ThemeContext';

const NavLink = ({ href, label, icon: Icon, onClick }: { href: string; label: string; icon: React.ElementType; onClick?: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        if (window.location.pathname === '/') {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.location.href = '/' + href;
        }
      }
      if (onClick) onClick();
    } else {
      if (onClick) onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative group flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold tracking-wider text-black/60 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors uppercase"
    >
      <span className="absolute inset-0 border border-transparent group-hover:border-primary/50 skew-x-[-10deg] transition-all duration-300"></span>
      <span className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 skew-x-[-10deg] transition-all duration-300"></span>
      <Icon size={14} className="relative z-10 text-primary" />
      <span className="relative z-10">{label}</span>
    </a>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#0d0f0d]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 h-16 flex items-center px-6 md:px-10 transition-colors duration-300">
      
      {/* Centered navigation alignment wrapper */}
      <div className="w-full flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 flex items-center justify-center border border-primary clip-shard-1">
            <Terminal size={20} className="text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-black dark:text-primary font-bold text-sm tracking-[0.05em] leading-none uppercase">Faisal Ahmad Bhat</span>
            <span className="text-[9px] text-black/50 dark:text-white/50 font-mono tracking-widest mt-1">FULL STACK & AI ENG</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            <NavLink href="#hero" label="Home" icon={Terminal} />
            <NavLink href="#projects" label="Work" icon={FolderOpen} />
            <NavLink href="#services" label="Services" icon={Layers} />
            <NavLink href="#reviews" label="Reviews" icon={MessageSquare} />
            <NavLink href="#skills" label="Stack" icon={Cpu} />
            <NavLink href="/blog" label="Blog" icon={BookOpen} />
            <NavLink href="#about" label="About" icon={User} />
            <NavLink href="#contact" label="Contact" icon={Mail} />
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-black/60 dark:text-white/70 transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted ? (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />) : <div className="w-5 h-5 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse"></div>}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 border border-slate-300 dark:border-slate-700 hover:border-primary text-black/60 dark:text-white/70 hover:text-primary flex items-center justify-center transition-colors bg-transparent"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-b border-primary/20 p-6 flex flex-col gap-4 md:hidden shadow-lg dark:shadow-neon-sm"
          >
            <NavLink href="#hero" label="Home" icon={Terminal} onClick={() => setIsOpen(false)} />
            <NavLink href="#projects" label="Work" icon={FolderOpen} onClick={() => setIsOpen(false)} />
            <NavLink href="#services" label="Services" icon={Layers} onClick={() => setIsOpen(false)} />
            <NavLink href="#reviews" label="Reviews" icon={MessageSquare} onClick={() => setIsOpen(false)} />
            <NavLink href="#skills" label="Stack" icon={Cpu} onClick={() => setIsOpen(false)} />
            <NavLink href="/blog" label="Blog" icon={BookOpen} onClick={() => setIsOpen(false)} />
            <NavLink href="#about" label="About" icon={User} onClick={() => setIsOpen(false)} />
            <NavLink href="#contact" label="Contact" icon={Mail} onClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
