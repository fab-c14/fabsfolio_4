'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code, ExternalLink, FolderOpen } from 'lucide-react';

const projects = [
    {
        id: "everfeatured",
        title: "EVER_FEATURED",
        subtitle: "Digital Asset Showcase",
        description: "Discover the best products from around the world and find your next favorite thing. Built with Next.js for high performance and SEO optimization.",
        image: "/everfeatured_1.png",
        link: "https://everfeatured.com",
        linkText: "VIEW PROJECT",
        icon: ExternalLink
    },
    {
        id: "flame",
        title: "FLAME_EXTENDED",
        subtitle: "Learning Platform",
        description: "Comprehensive educational platform designed to streamline learning processes. Build projects, practice algorithms, and prepare for technical interviews -designed for college coursework and lab assignments with instant feedback and powerful analytics.",
        image: "/flame.png",
        link: "https://github.com/fab-c14/FLAME",
        linkText: "SOURCE CODE",
        icon: Code
    },
    {
        id: "pintoinbox",
        title: "PIN_TO_INBOX",
        subtitle: "Inbox Management",
        description: "Efficient inbox management tool for organizing and tracking communications.",
        image: "/pintoinbox.png",
        link: "https://pintoinbox.vercel.app/",
        linkText: "VIEW PROJECT",
        icon: ExternalLink
    },
    {
        id: "skillfolio",
        title: "SKILL_FOLIO",
        subtitle: "First Freelancer Project. Built with Next.js and Tailwind CSS.",
        description: "Build professional, ATS-friendly resumes with AI. Get job-fit customization, interview prep, and AI-powered tools - all in one place.",
        image: "/skillfolio.png",
        link: "https://skillfolio.co.in",
        linkText: "VIEW PROJECT",
        icon: ExternalLink
    }
];

export default function ProjectsSection() {
    return (
        <section className="px-6 space-y-20 relative">
            <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 flex items-center justify-center border border-primary clip-shard-1">
                    <FolderOpen size={24} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white glitch-text">PROJECTS</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
            </div>

            <div className="space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-3/5 relative group">
                            <div className={`absolute -inset-2 bg-primary/5 dark:bg-primary/10 ${index % 2 === 0 ? '-skew-x-2' : 'skew-x-2'} scale-100 transition-transform group-hover:scale-105`}></div>
                            <div className="relative aspect-video bg-slate-200 dark:bg-slate-900 overflow-hidden border-2 border-slate-300 dark:border-slate-700 group-hover:border-primary/50 transition-colors clip-shard-card">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale dark:grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-primary font-mono text-xs tracking-widest bg-black/80 px-2 py-1">{'// VIEW_DETAILS'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-2/5 flex flex-col items-start space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-primary font-bold text-lg">0{index + 1}.</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                            </div>
                            <span className="text-xs font-mono text-primary/70 uppercase tracking-widest">{project.subtitle}</span>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                {project.description}
                            </p>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center gap-2 text-slate-800 dark:text-white font-bold text-sm hover:text-primary transition-colors border-b border-primary/30 hover:border-primary pb-1 group/link"
                            >
                                <span>{project.linkText}</span>
                                <project.icon size={16} className="group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
