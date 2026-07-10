import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

export const metadata: Metadata = {
  title: "Engineering Blog | Faisal Ahmad Bhat | Full Stack Developer",
  description: "Read technical articles by Faisal Ahmad Bhat on building autonomous SaaS, local SEO architectures, custom LLM integrations, and web performance optimization.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Engineering Blog | Faisal Ahmad Bhat",
    description: "Deep-dives into software architecture, Generative AI engineering, and full-stack development by Faisal Ahmad Bhat.",
    url: "https://www.fabsfolio.me/blog",
    type: "website",
    images: [
      {
        url: "https://www.fabsfolio.me/profile.png",
        width: 1200,
        height: 630,
        alt: "Engineering Blog | Faisal Ahmad Bhat",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog | Faisal Ahmad Bhat",
    description: "Deep-dives into software architecture, Generative AI engineering, and full-stack development by Faisal Ahmad Bhat.",
    images: ["https://www.fabsfolio.me/profile.png"],
  }
};

export default function BlogPage() {
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
                    <div className="w-full h-full bg-hazard-stripes mask-linear-fade" style={{maskImage: "linear-gradient(135deg, black 40%, transparent 80%)"}}></div>
                </div>
                <div className="fixed bottom-0 right-0 w-48 h-48 z-0 pointer-events-none opacity-20 hidden md:block">
                    <div className="w-full h-full bg-hazard-stripes" style={{maskImage: "linear-gradient(-45deg, black 40%, transparent 80%)"}}></div>
                </div>

                {/* Main Page Layout Structure */}
                <div className="py-6 md:py-12 relative z-10">
                    <div className="max-w-5xl mx-auto px-4 md:px-0">
                        <BlogSection />
                    </div>
                </div>
             </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
