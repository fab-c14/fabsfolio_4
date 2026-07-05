import React from "react";

import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-[#0d0f0d] border-t border-slate-200 dark:border-slate-800 py-8 px-6 transition-colors duration-300 relative z-40">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <p className="text-sm font-bold text-black/80 dark:text-white/80">
            2026 – Made with ❤️ by Faisal Ahmad Bhat | Srinagar, J&K
          </p>
          <div className="flex items-center gap-2 text-xs text-black/40 dark:text-white/40 font-mono">
             <span>{'// END_OF_LINE'}</span>
             <span className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-xs font-bold text-black/60 dark:text-white/60 uppercase tracking-widest">
            Come On Give Me A Star GitHub
          </p>
          <a
            href="https://github.com/fab-c14/fabsfolio_4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-bold text-xs hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors group"
          >
            <Github size={16} />
            <span>STAR REPO</span>
            <div className="w-px h-4 bg-white/20 dark:bg-black/20 mx-1"></div>
            <span className="font-mono group-hover:text-black dark:group-hover:text-white">git checkout</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
