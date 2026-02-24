'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, User } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="px-6 py-4 md:py-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -z-10"></div>

        <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image with Glitch Effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-48 h-48 shrink-0"
            >
                <div className="absolute inset-0 border-2 border-primary translate-x-2 translate-y-2 opacity-50"></div>
                <div className="absolute inset-0 bg-primary/20 animate-pulse clip-shard-2"></div>
                <div className="relative w-full h-full overflow-hidden clip-shard-2 bg-slate-800 border border-slate-700">
                    <Image
                        src="/profile.png"
                        alt="Faisal Ahmad"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 relative z-10"
            >
                <div className="flex items-center gap-3">
                    <User className="text-primary" size={24} />
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white glitch-text">
                        ABOUT ME
                    </h2>
                </div>

                <div className="font-mono text-sm space-y-4 text-slate-600 dark:text-slate-300">
                    <div className="flex flex-col gap-1">
                        <p className="text-lg font-bold text-slate-800 dark:text-white">Faisal Ahmad</p>
                        <p className="text-primary/80 uppercase tracking-widest text-xs">Full Stack Developer</p>
                    </div>

                    <p className="max-w-md border-l-2 border-primary/50 pl-4 py-2 bg-slate-200 dark:bg-slate-900/50 leading-relaxed text-slate-700 dark:text-slate-400">
                        &quot;Self-taught and always curious, I thrive on challenges and love learning new things. Passionate about creating innovative solutions and exploring cutting-edge technologies.&quot;
                    </p>
                </div>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white dark:hover:text-black transition-colors mt-2 group clip-shard-button border border-primary px-6 py-3 bg-slate-100 dark:bg-black/50"
                >
                    <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                    <span>DOWNLOAD RESUME</span>
                </a>
            </motion.div>
        </div>
    </section>
  );
}
