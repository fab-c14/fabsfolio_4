'use client';
import { Star, MessageSquare, Quote, BadgeCheck } from 'lucide-react';

interface Review {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  projectTitle: string;
  cost: string;
  date: string;
  feedback: string;
  skills: string[];
}

const reviews: Review[] = [
  {
    id: "review-1",
    clientName: "Elizabeth M.",
    location: "United States",
    rating: 5.0,
    projectTitle: "AI Content Editing & Full-Stack Application",
    cost: "Verified Contract",
    date: "Recent",
    feedback: "Faisal is not just a full-stack web developer — he’s a god sent angel. His creativity truly stands out in his work. As someone who is very detail-oriented and particular about how things should be done, I genuinely appreciate his patience and flexibility. He never once complained about revisions and was always willing to go the extra mile to get everything just right. Two worded summary for him: extraordinary and excellent!",
    skills: ["JavaScript", "Website Design", "HTML", "AI Content Editing"]
  },
  {
    id: "review-2",
    clientName: "Saurabh D.",
    location: "India",
    rating: 5.0,
    projectTitle: "Dynamic Legal Site & Content Creation",
    cost: "₹2,000 INR",
    date: "3 months ago",
    feedback: "He did a really good job on my website. Everything was done exactly the way I asked, and he followed all the instructions carefully. The site looks clean, works smoothly, and was finished on time. He was easy to talk to and kept me updated throughout the process. I’m very happy with the result and would definitely recommend him to anyone who needs a reliable freelancer.",
    skills: ["PHP", "Website Design", "Graphic Design", "SEO", "HTML"]
  },
  {
    id: "review-3",
    clientName: "Saurabh S.",
    location: "India",
    rating: 5.0,
    projectTitle: "Dynamic Legal Firm Website & Performance Optimization",
    cost: "₹2,000 INR",
    date: "3 months ago",
    feedback: "Working with this developer was an excellent experience. The attention to detail, problem-solving skills, and ability to understand business requirements truly set them apart. The final product was not just functional but optimized for performance and user experience. Highly recommended for anyone looking for a reliable and skilled developer.",
    skills: ["PHP", "JavaScript", "Website Design", "SEO", "WordPress"]
  },
  {
    id: "review-4",
    clientName: "Pravin J.",
    location: "India",
    rating: 5.0,
    projectTitle: "AI Integration & Desktop Portfolio Application",
    cost: "₹1,500 INR",
    date: "3 months ago",
    feedback: "I had a great experience working with Faisal Ahmad. He completed the project on time and demonstrated a strong understanding of AI throughout the process. His technical knowledge, problem-solving ability, and attention to detail were clearly visible in the quality of his work. Overall, I highly recommend Faisal Ahmad to anyone looking for a reliable freelancer with solid expertise in AI. I would definitely be happy to work with him again on future projects.",
    skills: ["AI Engineering", "Desktop Apps", "Software Architecture", "AI Integration"]
  }
];

export default function ReviewsSection() {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="py-12 relative overflow-hidden w-full">
      {/* Horizontal fade-like blue separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      {/* Header Container aligned to site content width */}
      <div className="max-w-5xl mx-auto px-4 md:px-0 mb-12 flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg border border-primary/20 shrink-0">
          <MessageSquare className="text-primary" size={24} />
        </div>
        <h2 className="text-3xl font-bold text-black dark:text-white tracking-tight uppercase glitch-text shrink-0">Reviews</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
      </div>

      {/* Infinite Horizontal Ticker Container - Takes Full Width of Site */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right gradient masks to blend edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Row */}
        <div className="flex gap-8 w-fit animate-marquee hover:[animation-play-state:paused] px-4">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[280px] md:w-[350px] shrink-0 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-neon-sm flex flex-col justify-between relative group cursor-default"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-5 dark:opacity-10 group-hover:opacity-20 group-hover:text-primary transition-all">
                <Quote size={48} />
              </div>

              <div>
                {/* Stars & Project Info */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
                    ))}
                    <span className="text-[10px] font-bold font-mono ml-1.5 text-slate-500 dark:text-slate-400">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <BadgeCheck size={10} />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-bold text-xs text-primary uppercase tracking-wider mb-2.5 font-mono truncate">
                  {review.projectTitle}
                </h3>

                {/* Review Text - Stable line-clamp-5 prevents card size shifts */}
                <p className="text-xs md:text-sm text-black/80 dark:text-white/85 leading-relaxed mb-6 italic relative z-10 line-clamp-5">
                  &ldquo;{review.feedback}&rdquo;
                </p>
              </div>

              {/* Author info & Skills */}
              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-auto">
                <div className="flex items-center justify-between text-[10px] font-mono mb-3 text-black/60 dark:text-white/60">
                  <div>
                    <span className="font-bold text-black dark:text-white">{review.clientName}</span>
                    <span className="mx-1">•</span>
                    <span>{review.location}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-primary">{review.cost}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {review.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-mono font-bold bg-slate-50 dark:bg-slate-800/50 text-black/60 dark:text-white/75 px-2 py-0.5 rounded border border-slate-200/50 dark:border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
