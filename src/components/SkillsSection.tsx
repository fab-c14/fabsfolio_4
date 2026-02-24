'use client';
import { motion } from 'framer-motion';
import { Cpu, Code, Database, Server, Cloud, BarChart, LayoutTemplate, Terminal, Layers, Globe, Box, HardDrive, Palette, Triangle, Type, Zap, Container, GitBranch, Github, Activity } from 'lucide-react';

const categories = [
  {
    title: "Frontend & UI",
    icon: LayoutTemplate,
    skills: [
      { name: "React", icon: Globe },
      { name: "JavaScript", icon: Code },
      { name: "Redux", icon: Box },
      { name: "React Query", icon: Activity },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Next.js", icon: Triangle },
      // { name: "HTML", icon: Code },
      // { name: "CSS", icon: LayoutTemplate },
      { name: "TypeScript", icon: Type },
    ]
  },
  {
    title: "Backend & Core",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Layers },
      { name: "Python", icon: Terminal },
      { name: "FastAPI", icon: Zap },
      { name: "Nuxt.js", icon: Triangle },
    ]
  },
  {
    title: "Data & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Redis", icon: HardDrive },
      { name: "SQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud },
      { name: "Heroku", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
    ]
  },
  {
    title: "Data Science & AI",
    icon: BarChart,
    skills: [
      { name: "Machine Learning", icon: Cpu },
      { name: "Deep Learning", icon: Cpu },
      { name: "AI Agents", icon: Terminal },
      { name: "Data Analysis", icon: BarChart },
      { name: "Web Scraping", icon: Globe },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section className="px-6 py-20 relative">
        <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>

        <div className="mb-16 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg border border-primary/20">
              <Cpu className="text-primary" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Technical <span className="text-primary">Arsenal</span></h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">{'// CORE_COMPETENCIES'}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, catIndex) => (
                <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 }}
                    className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md dark:hover:shadow-neon-sm group"
                >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <category.icon className="text-primary" size={20} />
                        <h3 className="font-bold text-slate-800 dark:text-white">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors cursor-default"
                            >
                                <skill.icon size={14} className="text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors" />
                                <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  );
}
