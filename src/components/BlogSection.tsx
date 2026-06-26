'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, FileText } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogSection() {
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
        {/* Blog Grid View */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-neon-sm flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Blog Image */}
                <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-[10px] font-mono text-black/50 dark:text-white/50 mb-3">
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
                <h3 className="text-lg font-bold text-black dark:text-white mb-2.5 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs md:text-sm text-black/70 dark:text-white/80 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More link & Tags */}
              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex flex-col gap-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono font-bold bg-slate-50 dark:bg-slate-800/50 text-black/60 dark:text-white/70 px-2 py-0.5 rounded border border-slate-200/50 dark:border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="w-full flex items-center justify-center gap-2 text-primary font-mono text-xs font-bold py-2.5 rounded bg-slate-50 dark:bg-black/45 border border-primary/20 hover:bg-primary hover:text-white dark:hover:text-black hover:border-primary transition-all duration-300"
                >
                  <FileText size={14} />
                  <span>READ FULL ENTRY</span>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
