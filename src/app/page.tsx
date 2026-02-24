import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-14 pb-20 relative overflow-hidden transition-colors duration-300">
        {/* CRT Effect Wrapper */}
        <div className="crt-screen bg-white dark:bg-background-dark border-x-8 border-y-4 border-slate-200 dark:border-[#1a1f1a] min-h-[calc(100vh-4rem)] relative transition-colors duration-300">
             {/* Scanline Overlay */}
             <div className="absolute inset-0 z-50 pointer-events-none bg-scanlines scanlines opacity-[0.05] mix-blend-overlay"></div>

             <div className="relative z-10">
                {/* Hazard Stripes */}
                <div className="fixed top-0 left-0 w-32 h-32 z-0 pointer-events-none opacity-20 hidden md:block">
                    <div className="w-full h-full bg-hazard-stripes mask-linear-fade" style={{maskImage: "linear-gradient(135deg, black 40%, transparent 80%)"}}></div>
                </div>
                <div className="fixed bottom-0 right-0 w-48 h-48 z-0 pointer-events-none opacity-20 hidden md:block">
                    <div className="w-full h-full bg-hazard-stripes" style={{maskImage: "linear-gradient(-45deg, black 40%, transparent 80%)"}}></div>
                </div>

                <div className="max-w-5xl mx-auto space-y-24 py-10 relative z-10 scroll-smooth px-4 md:px-0">

                    <section id="hero" className="scroll-mt-24">
                        <HeroSection />
                    </section>
                    <section id="about" className="scroll-mt-20">
                        <AboutSection />
                    </section>

                    <section id="projects" className="scroll-mt-24">
                        <ProjectsSection />
                    </section>

                    <section id="skills" className="scroll-mt-24">
                        <SkillsSection />
                    </section>

                    <section id="contact" className="scroll-mt-24">
                        <ContactSection />
                    </section>
                </div>
             </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
