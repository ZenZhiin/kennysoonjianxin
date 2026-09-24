import { ArrowRight, Code2, Terminal, CheckCircle2 } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 border-b border-zinc-200/80 dark:border-zinc-800/80">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl opacity-70"></div>
      </div>

      <div className="container max-w-5xl mx-auto px-6 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-8 shadow-xs">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Lead Software Architect &bull; Open-Source Contributor</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
          Kenny Soon{" "}
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-300 dark:to-indigo-300">
            Jian Xin
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          Architecting resilient distributed microservices, open-source enterprise systems, and modern web/mobile applications. 8+ years turning complex business requirements into high-throughput software.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 font-semibold text-sm shadow-md transition-all"
          >
            <Code2 className="h-4 w-4" />
            <span>View Open Source & Projects</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            <Terminal className="h-4 w-4" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Credibility highlights */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
            <span>8+ Years Engineering</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
            <span>Open Source Builder</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
            <span>High-Concurrency Systems</span>
          </div>
        </div>

        {/* Social Links Embedded */}
        <div className="mt-10 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
