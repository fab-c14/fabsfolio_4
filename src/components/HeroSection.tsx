'use client';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const RESUME_PATH = '/resume.pdf';
const DOWNLOAD_RESUME_CLASS_NAME =
  'w-fit inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white dark:hover:text-black transition-colors mt-2 group clip-shard-button border border-primary px-6 py-3 bg-slate-100 dark:bg-black/50';

export default function HeroSection() {
  return (
    <section className="px-6 pt-8 pb-12 relative overflow-hidden">
        {/* Decorative line */}
        <div className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

        <div className="grid gap-8 md:grid-cols-[1fr_220px] items-start">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-slate-900 dark:text-white text-[42px] md:text-[64px] leading-[0.9] font-bold tracking-tighter mix-blend-hard-light mb-4 glitch-text"
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
                    <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-[500px]">
                        <span className="text-primary font-bold mr-2">&gt;</span>
                        Building high-performance, secure, and scalable web applications. Transforming complex problems into elegant digital solutions.
                    </p>

                    <a
                        href={RESUME_PATH}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={DOWNLOAD_RESUME_CLASS_NAME}
                    >
                        <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                        <span>DOWNLOAD RESUME</span>
                    </a>
                </motion.div>
            </div>

            <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                aria-label="Live capability signals"
                className="relative border border-primary/40 bg-primary/5 px-4 py-3 clip-shard-2 md:mt-10"
            >
                <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 mb-3">Live Signals</p>
                <ul className="space-y-2 text-xs uppercase tracking-[0.16em] text-primary">
                    <li>SEO Ready Interfaces</li>
                    <li>Accessible Components</li>
                    <li>API Driven Systems</li>
                    <li>Retro Inspired UX</li>
                </ul>
                <motion.div
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="mt-4 h-[2px] w-full bg-primary/70"
                />
            </motion.aside>
        </div>
    </section>
  );
}

