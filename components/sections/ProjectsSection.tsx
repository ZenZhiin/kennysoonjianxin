import { Github, ExternalLink, Code2, Sparkles, BookOpen, Layers } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  isOpenSource: boolean;
  description: string;
  architectureDetails: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: ProjectItem[] = [
  {
    id: "quickzhiin",
    title: "QuickZhiin — Open Source ERP & Accounting Core",
    tag: "Open-Source Financial Engine",
    isOpenSource: true,
    description:
      "A high-integrity double-entry cloud accounting engine designed for statutory compliance. Features native real-time integration with Malaysia's LHDN MyInvois e-invoicing API, automated general ledger journalizing, and multi-tenant ledger isolation.",
    architectureDetails: [
      "Strict double-entry bookkeeping validation engine",
      "Native Malaysia LHDN MyInvois JSON/XML validation and signing",
      "Multi-currency conversion with historical rate audit trails",
      "Multi-tenant database schema with strict tenant-level isolation",
    ],
    techStack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    githubUrl: "https://github.com/ZenZhiinVenture",
  },
  {
    id: "mzhiin",
    title: "MZhiin — Conversational AI & WhatsApp Workflow Engine",
    tag: "Conversational AI Architecture",
    isOpenSource: false,
    description:
      "A conversational automation architecture that converts unstructured WhatsApp voice notes into structured business data. Employs Whisper STT for audio transcription, LLM agents with domain guardrails, and BullMQ task queues for rate-limiting and retry resilience.",
    architectureDetails: [
      "Whisper STT audio processing pipeline for informal multi-lingual voice notes",
      "Structured output extraction with Zod schema verification",
      "BullMQ asynchronous job queue with Redis for backpressure control",
      "Human-in-the-loop fallback escalation mechanism",
    ],
    techStack: ["TypeScript", "NestJS", "FastAPI", "Python", "Redis", "BullMQ", "PostgreSQL"],
    githubUrl: "https://github.com/ZenZhiinVenture",
  },
  {
    id: "oceanzhiin",
    title: "OceanZhiin — Dive Resort & Operations ERP",
    tag: "Vertical Operations Platform",
    isOpenSource: false,
    description:
      "A specialized ERP and reservation system for coastal resorts and dive operations. Manages complex resource allocations—including boat scheduling, equipment inventory tracking, instructor assignments, and diver safety certifications.",
    architectureDetails: [
      "Multi-resource calendar engine with concurrency conflict detection",
      "Equipment lifecycle and scheduled maintenance tracking",
      "Offline-first client record sync for remote island connectivity",
      "Automated waiver and certification verification pipelines",
    ],
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/ZenZhiinVenture",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-xs font-semibold text-zinc-600 dark:text-zinc-300 mb-3">
            <Code2 className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Featured Code & Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Open Source & Engineering Systems
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Real production architectures designed from the ground up for high throughput, data integrity, and long-term maintainability.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-8 sm:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                      {project.tag}
                    </span>
                    {project.isOpenSource && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                        <Sparkles className="h-3 w-3" />
                        <span>Open Source Core</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture highlights */}
                  <div className="mt-6 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-zinc-800/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2.5">
                      Key Architecture Highlights
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                      {project.architectureDetails.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span className="text-indigo-500 font-bold">&bull;</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action column */}
                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 text-xs font-bold transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>View on GitHub</span>
                      <ExternalLink className="h-3 w-3 text-zinc-400" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Organization Banner Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-900/90 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Github className="h-5 w-5 text-indigo-400" />
              <span>Explore More Code on GitHub</span>
            </h4>
            <p className="text-sm text-zinc-400 max-w-xl">
              Check out my personal repositories, open-source architectural patterns, and developer starter kits.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <a
              href="https://github.com/ZenZhiin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-100 transition-colors"
            >
              github.com/ZenZhiin
            </a>
            <a
              href="https://github.com/ZenZhiinVenture"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-zinc-700 text-white font-bold text-xs hover:bg-zinc-800 transition-colors"
            >
              github.com/ZenZhiinVenture
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
