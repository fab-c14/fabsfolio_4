'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Instagram, Mail, Download, User } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="w-full py-4 md:py-8 relative overflow-hidden">
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

        {/* 2-Column Layout: Image | Bio */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-center">

            {/* Column 1 — Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex justify-center md:justify-start"
            >
                <div className="relative w-52 h-60 overflow-hidden select-none animate-wobble">
                    {/* Offset decorative border */}
                    <div className="absolute inset-0 border-2 border-primary translate-x-2 translate-y-2 opacity-45"></div>

                    {/* Main image */}
                    <div className="relative w-full h-full overflow-hidden clip-shard-2 bg-slate-800 border border-slate-700">
                        <Image
                            src="/profile.png"
                            alt="Faisal Ahmad Bhat — Full Stack Developer & AI Engineer"
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
                className="flex flex-col gap-6"
            >
                <div className="flex flex-col gap-1.5">
                    <p className="text-2xl font-bold text-black dark:text-white tracking-tight">Faisal Ahmad Bhat</p>
                    <p className="text-primary uppercase tracking-widest text-xs font-mono font-bold">Full Stack Developer & AI Engineer</p>
                </div>

                <p className="max-w-2xl border-l-2 border-primary/50 pl-5 py-3 leading-relaxed text-base text-black/80 dark:text-white/85">
                    Based in Jammu and Kashmir (Srinagar & Anantnag), I design and construct highly performant software systems from scratch. From desktop to android, I've worked in every field. I specialize in full-stack architecture (Next.js, Node.js, databases) combined with state-of-the-art AI technologies, building custom SaaS products, native mobile applications, e-commerce storefronts, and advanced LLM & generative AI integrations.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-1.5">
                    <a href="https://github.com/fab-c14" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-black/60 dark:text-white/60 hover:text-white hover:bg-slate-800 dark:hover:bg-white dark:hover:text-black transition-all" aria-label="GitHub Profile">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/faisal-ahmad-bhat-aaba29229" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-black/60 dark:text-white/60 hover:text-white hover:bg-[#0077b5] transition-all" aria-label="LinkedIn Profile">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://instagram.com/_fabc14?igshid=ZDc4ODBmNjlmNQ==" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-black/60 dark:text-white/60 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all" aria-label="Instagram Profile">
                        <Instagram size={20} />
                    </a>
                    <a href="mailto:faisalahmadbhat00@gmail.com" className="p-2.5 rounded-lg text-black/60 dark:text-white/60 hover:text-white hover:bg-primary transition-all" aria-label="Email Me">
                        <Mail size={20} />
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
        </div>
    </section>
  );
}
