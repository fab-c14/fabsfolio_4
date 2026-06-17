'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowLeft, Terminal, FileText, CheckCircle } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "autonomous-saas",
    title: "Building Autonomous SaaS: Architecting Custom LLM & RAG Workflows",
    excerpt: "An engineering-first guide to designing production-grade autonomous agent loops, vector search layers, and structured output systems for modern AI integrations.",
    date: "June 12, 2026",
    readTime: "8 min read",
    tags: ["Generative AI", "SaaS Architecture", "LLMs", "RAG"],
    content: [
      "In the landscape of modern web application development, simply connecting a frontend to a Chat Completion API is no longer enough to build competitive products. The next wave of SaaS products relies on autonomous AI workflows—systems that can think, trigger actions, execute database queries, and self-correct based on feedback. Developing these architectures requires shifting from simple prompt-and-response designs to structured state machines and robust Retrieval-Augmented Generation (RAG) models.",
      "The first pillar of autonomous SaaS is Structured Outputs. Large Language Models (LLMs) are notoriously non-deterministic, making them difficult to integrate with traditional backend databases that require strict data validation. To solve this, we define execution contexts using schema-enforcement libraries (like Zod in TypeScript or Pydantic in Python) and lock the LLM response formats. Whether utilizing OpenAI's JSON Mode, function calling, or tool declarations, ensuring the AI model yields clean API structures is critical for triggering automated downstream actions safely.",
      "The second pillar is RAG Architecture. Standard LLM models have context windows that are limited and static. By feeding your models custom databases through semantic search, you unlock dynamic knowledge lookups. The pipeline starts by chunking text resources (e.g., PDF uploads, database logs), compiling them into numerical representations using an embedding model (like text-embedding-3-small), and archiving them inside vector indexes (such as pgvector in PostgreSQL or Pinecone). When a user inputs a query, we calculate its vector similarity, retrieve the top matching context blocks, and inject them into the LLM's prompt window.",
      "The final and most complex pillar is the Agentic Feedback Loop. Instead of a single LLM call, an agentic loop executes recursively. The agent is provided with tools (database access, API fetching, calculator execution) and a loop condition. It outlines a plan, invokes tools, inspects outputs, and validates whether the goal has been achieved. If an error is returned by an API, the agent reads the traceback, updates its plan, and retries. Managing these state flows using tools like LangGraph or custom state engines is what sets a premium, reliable AI integration apart from basic chat wrappers."
    ]
  },
  {
    id: "seo-developers",
    title: "SEO Playbook for Developers: Dominating Local Search in Jammu & Kashmir",
    excerpt: "A deep technical breakdown of Schema markup, Next.js server-side rendering, sitemap architectures, and DOM keyword optimization to rank on Google's top pages.",
    date: "June 05, 2026",
    readTime: "6 min read",
    tags: ["SEO", "Next.js", "Web Development", "Local Search"],
    content: [
      "For freelance web developers and independent agency builders, standing out in regional search results is the highest-value marketing channel. When clients in Srinagar, Anantnag, or Jammu & Kashmir search for 'best developers in Jammu and Kashmir', appearing in the top organic results instantly establishes credibility. Achieving this requires a developer-led SEO strategy that goes beyond meta keywords to focus on structured schema markup, indexable DOM text, sitemap configurations, and core web vitals.",
      "Google's search bots crawl pages to connect concepts rather than simply matching isolated keywords. To help bots understand your services, you must inject Structured Data (JSON-LD schema). For local freelance engineering, we deploy a dual schema setup: a 'Person' schema defining your professional profile (jobTitle, url, sameAs links to GitHub/LinkedIn) nested with a 'ProfessionalService' schema. By specifying addressLocality (e.g., Srinagar or Anantnag), priceRange, and areaServed (Jammu and Kashmir), you explicitly declare your local availability to Google's indexing system, helping your profile populate for geographic query ranges.",
      "Another critical vector is DOM Crawlability. Modern Single Page Applications (SPAs) that render client-side using JavaScript can be difficult for Google to index, as crawling engines do not always wait for JS bundles to execute. Next.js solves this by pre-rendering pages. Whether using Static Site Generation (SSG) or Server-Side Rendering (SSR), rendering headers, titles, and section copy directly in the HTML server response ensures bots read target keyword strings immediately. In parallel, maintaining semantic HTML hierarchy (using a single H1, and cascading H2s and H3s) provides structure that bots reward.",
      "Lastly, performance indicators directly impact search rankings. Google utilizes 'Core Web Vitals' (like Largest Contentful Paint and Cumulative Layout Shift) as explicit ranking metrics. Ensuring your site loads in under 1.5 seconds, features optimized responsive images, eliminates unexpected layout shifts, and lists clean robot files (sitemaps and robots.txt) signals search spiders that your application offers a premium user experience, securing higher search placements."
    ]
  }
];

export default function BlogSection() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const activePost = blogPosts.find(p => p.id === selectedPostId);

  return (
    <section id="blog" className="py-20 w-full relative overflow-hidden">
      {/* Horizontal fade-like blue separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

      {/* Header Container aligned to site content width */}
      <div className="max-w-5xl mx-auto px-4 md:px-0 mb-12 flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg border border-primary/20 shrink-0">
          <BookOpen className="text-primary" size={24} />
        </div>
        <h2 className="text-3xl font-bold text-black dark:text-white tracking-tight uppercase glitch-text shrink-0">Blog</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <AnimatePresence mode="wait">
          {!selectedPostId ? (
            /* Blog Grid View */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-neon-sm flex flex-col justify-between group"
                >
                  <div>
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs font-mono text-black/50 dark:text-white/50 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-black/70 dark:text-white/80 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More button & Tags */}
                  <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex flex-col gap-4 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-mono font-bold bg-slate-50 dark:bg-slate-800/50 text-black/60 dark:text-white/70 px-2 py-0.5 rounded border border-slate-200/50 dark:border-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedPostId(post.id)}
                      className="w-full flex items-center justify-center gap-2 text-primary font-mono text-xs font-bold py-2.5 rounded bg-slate-50 dark:bg-black/45 border border-primary/20 hover:bg-primary hover:text-white dark:hover:text-black hover:border-primary transition-all duration-300"
                    >
                      <FileText size={14} />
                      <span>READ FULL ENTRY</span>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* Detailed Console Reading Pane */
            <motion.div
              key="post"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-[#0a0a0a] border border-green-900/40 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(13,223,242,0.08)] text-left font-mono"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-green-900/20">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPostId(null)}
                    className="flex items-center gap-1 text-primary hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Back</span>
                  </button>
                  <span className="text-green-600/50 text-[10px] ml-2 tracking-wider hidden sm:inline">| blog_reader_system.bin</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                </div>
              </div>

              {/* Scrollable Document Body */}
              <div className="p-6 md:p-8 space-y-6 text-green-400/80 text-sm max-h-[550px] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                {/* Meta details */}
                <div className="flex flex-wrap gap-4 items-center text-[10px] text-yellow-500/80 border-b border-green-900/20 pb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>PUBLISHED: {activePost?.date}</span>
                  </div>
                  <span className="text-green-800/40 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>READTIME: {activePost?.readTime}</span>
                  </div>
                  <span className="text-green-800/40 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle size={12} />
                    <span>VERIFIED_AUTHOR: Faisal Ahmad Bhat</span>
                  </div>
                </div>

                {/* Article Header */}
                <h1 className="text-xl md:text-2xl font-bold text-primary tracking-tight leading-tight uppercase font-mono">
                  {activePost?.title}
                </h1>

                {/* Article content block */}
                <div className="space-y-4 text-xs md:text-sm text-green-300/80 leading-relaxed font-mono font-normal">
                  {activePost?.content.map((paragraph, index) => (
                    <p key={index} className="indent-8 text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Footer divider */}
                <div className="border-t border-green-900/20 pt-6 flex justify-between items-center text-[10px] text-green-600/50 mt-8">
                  <span>[EOF_PROCESS_COMPLETED]</span>
                  <button
                    onClick={() => {
                      setSelectedPostId(null);
                      const blogSection = document.querySelector("#blog");
                      if (blogSection) {
                        blogSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-primary hover:text-white transition-colors uppercase font-bold tracking-wider flex items-center gap-1"
                  >
                    <ArrowLeft size={10} />
                    <span>RETURN_TO_GRID</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
