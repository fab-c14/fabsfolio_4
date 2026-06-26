import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Faisal Ahmad Bhat",
    };
  }

  return {
    title: `${post.title} | Faisal Ahmad Bhat | Full Stack Developer`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://fabsfolio.me/blog/${post.id}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Faisal Ahmad Bhat"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-14 pb-20 relative overflow-hidden transition-colors duration-300">
        {/* CRT Effect Wrapper */}
        <div className="crt-screen bg-white dark:bg-background-dark border-x-8 border-y-4 border-slate-200 dark:border-[#1a1f1a] min-h-[calc(100vh-4rem)] relative transition-colors duration-300">
          {/* Scanline Overlay */}
          <div className="absolute inset-0 z-50 pointer-events-none bg-scanlines scanlines opacity-[0.05] mix-blend-overlay"></div>

          <div className="relative z-10">
            {/* Hazard Stripes Decorative */}
            <div className="fixed top-0 left-0 w-32 h-32 z-0 pointer-events-none opacity-20 hidden md:block">
              <div
                className="w-full h-full bg-hazard-stripes mask-linear-fade"
                style={{ maskImage: "linear-gradient(135deg, black 40%, transparent 80%)" }}
              ></div>
            </div>
            <div className="fixed bottom-0 right-0 w-48 h-48 z-0 pointer-events-none opacity-20 hidden md:block">
              <div
                className="w-full h-full bg-hazard-stripes"
                style={{ maskImage: "linear-gradient(-45deg, black 40%, transparent 80%)" }}
              ></div>
            </div>

            {/* Main Page Layout Structure */}
            <div className="py-6 md:py-12 relative z-10">
              <div className="max-w-4xl mx-auto px-4 md:px-0">
                
                {/* Detailed Console Reading Pane */}
                <div className="bg-[#0a0a0a] border border-green-900/40 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(13,223,242,0.08)] text-left font-mono">
                  {/* Terminal Title Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-green-900/20">
                    <div className="flex items-center gap-2">
                      <Link
                        href="/blog"
                        className="flex items-center gap-1 text-primary hover:text-white transition-colors cursor-pointer"
                      >
                        <ArrowLeft size={14} />
                        <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Back</span>
                      </Link>
                      <span className="text-green-600/50 text-[10px] ml-2 tracking-wider hidden sm:inline">
                        | blog_reader_system.bin
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                    </div>
                  </div>

                  {/* Document Body (No max-height, fully expanded for readability) */}
                  <div className="p-6 md:p-10 space-y-6 text-green-400/80 text-sm">
                    {/* Meta details */}
                    <div className="flex flex-wrap gap-4 items-center text-[10px] text-yellow-500/80 border-b border-green-900/20 pb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>PUBLISHED: {post.date}</span>
                      </div>
                      <span className="text-green-800/40 hidden sm:inline">|</span>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>READTIME: {post.readTime}</span>
                      </div>
                      <span className="text-green-800/40 hidden sm:inline">|</span>
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle size={12} />
                        <span>VERIFIED_AUTHOR: Faisal Ahmad Bhat</span>
                      </div>
                    </div>

                    {/* Article Header */}
                    <h1 className="text-xl md:text-3xl font-bold text-primary tracking-tight leading-tight uppercase font-mono">
                      {post.title}
                    </h1>

                    {/* Article content block */}
                    <div className="space-y-6 text-xs md:text-sm text-green-300/80 leading-relaxed font-mono font-normal">
                      {post.content.map((paragraph, index) => (
                        <p key={index} className="indent-8 text-justify">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Footer divider */}
                    <div className="border-t border-green-900/20 pt-6 flex justify-between items-center text-[10px] text-green-600/50 mt-8">
                      <span>[EOF_PROCESS_COMPLETED]</span>
                      <Link
                        href="/blog"
                        className="text-primary hover:text-white transition-colors uppercase font-bold tracking-wider flex items-center gap-1"
                      >
                        <ArrowLeft size={10} />
                        <span>RETURN_TO_GRID</span>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
