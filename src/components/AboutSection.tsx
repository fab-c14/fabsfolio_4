'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Instagram, Mail, Download, User, MapPin, Calendar, Coffee, Code } from 'lucide-react';

const quickFacts = [
    { icon: MapPin, label: "Based in", value: "India" },
    { icon: Calendar, label: "Experience", value: "2+ Years" },
    { icon: Coffee, label: "Projects", value: "10+" },
    { icon: Code, label: "Stack", value: "Full" },
];

export default function AboutSection() {
  return (
    <section className="px-6 py-4 md:py-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -z-10"></div>

        {/* Section Header */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
        >
            <User className="text-primary" size={24} />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white glitch-text">ABOUT ME</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
        </motion.div>

        {/* 3-Column Layout: Image | Bio | Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_260px] gap-8 md:gap-10 items-start">

            {/* Column 1 — Glitch Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center md:justify-start"
            >
                <div className="relative w-48 h-56 glitch-container cursor-pointer overflow-hidden">
                    {/* 5 horizontal slice tear layers — each shows a strip that shifts sideways */}
                    {[1, 2, 3, 4, 5].map((n) => (
                        <div key={n} className={`absolute inset-0 z-20 pointer-events-none glitch-s${n}`}>
                            <Image src="/profile.png" alt="" fill aria-hidden="true" className="object-cover grayscale" />
                        </div>
                    ))}

                    {/* Color bleed — cyan tint that flashes during tear */}
                    <div className="absolute inset-0 z-25 pointer-events-none glitch-color-bleed">
                        <Image src="/profile.png" alt="" fill aria-hidden="true" className="object-cover" style={{ filter: 'hue-rotate(90deg) saturate(3) brightness(1.5)', mixBlendMode: 'screen' }} />
                    </div>

                    {/* Sweep bar */}
                    <div className="absolute left-0 w-full h-1 bg-primary/60 z-30 pointer-events-none glitch-sweep-bar"></div>

                    {/* Offset decorative border */}
                    <div className="absolute inset-0 border-2 border-primary translate-x-2 translate-y-2 opacity-40"></div>

                    {/* Main image */}
                    <div className="relative w-full h-full overflow-hidden clip-shard-2 bg-slate-800 border border-slate-700">
                        <Image
                            src="/profile.png"
                            alt="Faisal Ahmad — Full Stack Developer"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Column 2 — Bio + Socials + Resume */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-5"
            >
                <div className="flex flex-col gap-1">
                    <p className="text-xl font-bold text-black dark:text-white">Faisal Ahmad</p>
                    <p className="text-primary/80 uppercase tracking-widest text-xs font-mono">Full Stack Developer</p>
                </div>

                <p className="max-w-lg border-l-2 border-primary/50 pl-4 py-2 leading-relaxed text-sm text-black/80 dark:text-white/85">
                    I like building things from scratch. Got hooked on programming by breaking stuff and figuring out how to fix it. Now I do that for a living — databases, APIs, frontends, the whole deal.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-1">
                    <a href="https://github.com/fab-c14" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-black/60 dark:text-white/60 hover:text-white hover:bg-slate-800 dark:hover:bg-white dark:hover:text-black transition-all" aria-label="GitHub Profile">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/faisal-ahmad-bhat-aaba29229" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-black/60 dark:text-white/60 hover:text-white hover:bg-[#0077b5] transition-all" aria-label="LinkedIn Profile">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://instagram.com/_fabc14?igshid=ZDc4ODBmNjlmNQ==" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-black/60 dark:text-white/60 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all" aria-label="Instagram Profile">
                        <Instagram size={18} />
                    </a>
                    <a href="mailto:faisalahmadbhat00@gmail.com" className="p-2.5 rounded-lg text-black/60 dark:text-white/60 hover:text-white hover:bg-primary transition-all" aria-label="Email Me">
                        <Mail size={18} />
                    </a>
                </div>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white dark:hover:text-black transition-colors group clip-shard-button border border-primary px-6 py-3 bg-slate-100 dark:bg-black/50"
                >
                    <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                    <span>DOWNLOAD RESUME</span>
                </a>
            </motion.div>

            {/* Column 3 — Retro Status Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="w-full"
            >
                <div className="bg-[#0a0a0a] border border-green-900/40 rounded-md overflow-hidden font-mono text-xs">
                    {/* Card header */}
                    <div className="flex items-center justify-between px-3 py-2 bg-[#111] border-b border-green-900/30">
                        <div className="flex gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500/70"></span>
                            <span className="w-2 h-2 rounded-full bg-yellow-500/60"></span>
                            <span className="w-2 h-2 rounded-full bg-green-500/60"></span>
                        </div>
                        <span className="text-green-700/50 text-[9px] tracking-widest">STATUS</span>
                    </div>

                    {/* Stats */}
                    <div className="p-3 space-y-3">
                        {quickFacts.map((fact) => (
                            <div key={fact.label} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <fact.icon size={12} className="text-primary/70" />
                                    <span className="text-green-600/70">{fact.label}</span>
                                </div>
                                <span className="text-green-300/90 font-bold">{fact.value}</span>
                            </div>
                        ))}

                        <div className="border-t border-green-900/30 pt-3 mt-1">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                <span className="text-green-400/80 font-bold text-[11px]">Open to opportunities</span>
                            </div>
                        </div>

                        <div className="text-[10px] text-green-800/50 pt-1">
                            Last updated: March 2026
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
