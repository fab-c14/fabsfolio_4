'use client';

import { motion } from 'framer-motion';
import { Layers, Check, Terminal, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: "basic",
    title: "BASIC_PORTFOLIO",
    price: "$1,000 USD",
    tagline: "Single Page / Landing Page",
    description: "Ideal for startups, personal portfolios, and clean landing pages targeting regional indexation.",
    icon: Terminal,
    features: [
      "1 Custom Landing Page",
      "Next.js / React Architecture",
      "Core Web Vitals Optimized",
      "Fully Responsive Design",
      "Local SEO Schema Configuration",
      "Contact Form Integration",
      "Free Vercel/Netlify Deployment"
    ],
    cta: "CHOOSE BASIC",
    glow: "rgba(13, 223, 242, 0.4)"
  },
  {
    id: "advanced",
    title: "ADVANCED_SAAS",
    price: "$2,500 USD",
    tagline: "Full-Stack Custom App",
    description: "For dynamic web tools, complex platforms, and interactive multi-page SaaS applications.",
    icon: Layers,
    features: [
      "Up to 5 Custom Pages",
      "Secure User Authentication",
      "Database Integration (Mongo/Postgres)",
      "Interactive Dashboard / Admin Panel",
      "Advanced Dynamic Metadata (SEO)",
      "Secure API Integration & Webhooks",
      "Deployment on Custom Cloud VPS"
    ],
    cta: "CHOOSE ADVANCED",
    popular: true,
    glow: "rgba(34, 197, 94, 0.4)"
  },
  {
    id: "enterprise",
    title: "ENTERPRISE_AI",
    price: "$5,000 USD",
    tagline: "AI integration & Growth Suite",
    description: "Premium enterprise package featuring custom LLM workflows, RAG systems, and data-driven marketing setup.",
    icon: Zap,
    features: [
      "Custom Generative AI / LLM Integrations",
      "RAG (Retrieval-Augmented Gen) Pipelines",
      "Full Conversion-Rate Optimization Copy",
      "Google Analytics & Hotjar Setup",
      "Automated Custom Event Tracking",
      "Cloudflare Firewall & DDoS Shielding",
      "1 Month Dedicated Maintenance"
    ],
    cta: "CHOOSE ENTERPRISE",
    glow: "rgba(249, 115, 22, 0.4)"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 w-full relative overflow-hidden">
      {/* Horizontal fade separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

      {/* Header aligned to site content width */}
      <div className="max-w-5xl mx-auto px-4 md:px-0 mb-12 flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg border border-primary/20 shrink-0 animate-pulse">
          <Layers className="text-primary" size={24} />
        </div>
        <h2 className="text-3xl font-bold text-black dark:text-white tracking-tight uppercase glitch-text shrink-0">Services</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`relative bg-white dark:bg-slate-900/50 border ${
                  service.popular ? 'border-primary dark:border-green-500' : 'border-slate-200 dark:border-slate-800'
                } rounded-xl p-6 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-neon-sm group`}
                style={{
                  boxShadow: service.popular ? `0 0 20px ${service.glow}` : undefined
                }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-500 text-black text-[9px] font-bold font-mono px-3 py-1 rounded-full border border-green-400 uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <ShieldCheck size={10} />
                    <span>Most Popular</span>
                  </span>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] font-bold bg-slate-50 dark:bg-slate-800/80 text-primary px-2.5 py-1 rounded border border-slate-200/50 dark:border-slate-850 uppercase tracking-widest">
                      {service.tagline}
                    </span>
                    <Icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={20} />
                  </div>

                  <h3 className="text-xl font-extrabold text-black dark:text-white tracking-wide uppercase font-mono mb-1">
                    {service.title}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-black text-primary font-mono drop-shadow-[0_0_8px_rgba(13,223,242,0.3)]">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-black/70 dark:text-white/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="h-[1px] bg-gradient-to-r from-slate-200/60 dark:from-slate-800/80 to-transparent mb-6"></div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-black/85 dark:text-white/90">
                        <Check className="text-primary shrink-0 mt-0.5" size={14} />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Button */}
                <a
                  href="#contact"
                  className={`w-full text-center block font-mono text-xs font-bold py-3 rounded border transition-all duration-300 ${
                    service.popular
                      ? 'bg-green-500 text-black border-green-400 hover:bg-green-600 hover:border-green-500'
                      : 'bg-slate-50 dark:bg-black/45 text-primary border-primary/20 hover:bg-primary hover:text-white dark:hover:text-black hover:border-primary'
                  }`}
                >
                  {service.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
