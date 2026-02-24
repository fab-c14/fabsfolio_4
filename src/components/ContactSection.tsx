'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Send } from 'lucide-react';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/fab-c14",
    icon: Github,
    color: "hover:text-[#333] dark:hover:text-white"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/faisal-ahmad-bhat-aaba29229",
    icon: Linkedin,
    color: "hover:text-[#0077b5]"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/_fabc14?igshid=ZDc4ODBmNjlmNQ==",
    icon: Instagram,
    color: "hover:text-[#e4405f]"
  },
  {
    name: "Email",
    url: "mailto:faisalahmadbhat00@gmail.com",
    icon: Mail,
    color: "hover:text-primary"
  }
];

export default function ContactSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            OPEN FOR OPPORTUNITIES
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Ready to build something <span className="text-primary glitch-text">amazing</span>?
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently available for freelance work and full-time positions.
            If you have a project that needs some creative touch, or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:hover:shadow-neon-sm`}
            >
              <div className={`p-4 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-primary/10 transition-colors`}>
                <link.icon size={24} className={`text-slate-600 dark:text-slate-400 ${link.color} transition-colors duration-300`} />
              </div>
              <span className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-12"
        >
            <a
                href="mailto:faisalahmadbhat00@gmail.com"
                className="w-fit mx-auto inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest hover:bg-primary hover:text-white dark:hover:text-black transition-colors mt-2 group clip-shard-button border border-primary px-8 py-4 bg-slate-100 dark:bg-black/50"
            >
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                <span>SAY HELLO</span>
            </a>
        </motion.div>
      </div>
    </section>
  );
}
