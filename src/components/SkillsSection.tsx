'use client';
import { motion } from 'framer-motion';
import { Cpu, Code, Database, Server, Cloud, BarChart, LayoutTemplate, Terminal, Layers, Globe, Box, HardDrive, Palette, Triangle, Type, Zap, Container, GitBranch, Github, Activity, Smartphone, Monitor } from 'lucide-react';

const categories = [
  {
    title: "Frontend & UI",
    cmd: "ls skills/frontend",
    icon: LayoutTemplate,
    skills: [
      { name: "React", icon: Globe },
      { name: "JavaScript", icon: Code },
      { name: "Redux", icon: Box },
      { name: "React Query", icon: Activity },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Next.js", icon: Triangle },
      { name: "TypeScript", icon: Type },
    ]
  },
  {
    title: "Backend & Core",
    cmd: "ls skills/backend",
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
    cmd: "ls skills/database",
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
    title: "Mobile & Desktop",
    cmd: "ls skills/native",
    icon: Smartphone,
    skills: [
      { name: "Android SDK", icon: Smartphone },
      { name: "Kotlin", icon: Code },
      { name: "Java", icon: Server },
      { name: "Flutter", icon: Globe },
      { name: "Electron", icon: Monitor },
      { name: "SQLite", icon: Database },
    ]
  },
  {
    title: "Cloud & DevOps",
    cmd: "ls skills/devops",
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
    title: "AI & Gen Systems",
    cmd: "ls skills/ai",
    icon: Cpu,
    skills: [
      { name: "Generative AI", icon: Zap },
      { name: "LLM Integration", icon: Terminal },
      { name: "RAG Architectures", icon: Database },
      { name: "AI Agents", icon: Cpu },
      { name: "Prompt Engineering", icon: Code },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section className="w-full py-20 relative">
        {/* Horizontal fade-like blue separator */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>

        <div className="mb-16 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg border border-primary/20 shrink-0">
              <Cpu className="text-primary" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-black dark:text-white tracking-tight uppercase glitch-text shrink-0">Stack</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, catIndex) => (
                <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.05 }}
                    className="bg-[#080808]/5 dark:bg-slate-950/40 border border-slate-200 dark:border-green-900/20 rounded-lg p-5 hover:border-primary/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.01)] dark:shadow-[0_0_20px_rgba(0,255,0,0.01)] hover:shadow-[0_0_25px_rgba(13,223,242,0.08)] group relative overflow-hidden"
                >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-green-900/10">
                        <div className="flex items-center gap-2">
                            <category.icon className="text-primary" size={16} />
                            <h3 className="font-mono text-xs font-semibold text-black/50 dark:text-green-500/40 group-hover:text-primary transition-colors">{category.cmd}</h3>
                        </div>
                        <span className="text-[9px] font-mono text-slate-400 dark:text-slate-600 uppercase">{category.title}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center gap-1.5 bg-slate-50 dark:bg-[#0a0a0a]/50 px-2.5 py-1.5 rounded border border-slate-200/60 dark:border-green-900/10 hover:border-primary/30 dark:hover:border-primary/40 transition-colors cursor-default"
                            >
                                <skill.icon size={12} className="text-slate-400 dark:text-slate-600 group-hover:text-primary transition-colors" />
                                <span className="text-xs font-mono text-black/80 dark:text-white/90">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  );
}
