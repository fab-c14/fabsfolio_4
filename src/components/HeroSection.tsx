'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="px-6 pt-8 pb-12 relative overflow-hidden">
        {/* Decorative line */}
        <div className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

        <div className="grid gap-8 md:grid-cols-[220px_1fr] items-start">
            <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                aria-label="Core capabilities"
                className="relative border border-primary/40 bg-primary/5 px-4 py-3 clip-shard-2"
            >
                <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 mb-3">System Focus</p>
                <ul className="space-y-2 text-xs uppercase tracking-[0.16em] text-primary">
                    <li>Web Performance</li>
                    <li>Secure Architecture</li>
                    <li>Scalable APIs</li>
                    <li>Modern UI Engineering</li>
                </ul>
                <motion.div
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="mt-4 h-[2px] w-full bg-primary/70"
                />
            </motion.aside>

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

                    <a href="#projects" className="w-fit bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-black font-bold uppercase text-xs px-8 py-3 tracking-[0.2em] transition-all active:translate-y-0.5 flex items-center gap-2 group clip-shard-button">
                        <span>VIEW WORK</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </motion.div>
            </div>
        </div>
    </section>
  );
}

