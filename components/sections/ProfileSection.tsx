import {
  User,
  Cpu,
  Database,
  Layers,
  Cloud,
  Terminal,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface TechGroup {
  category: string;
  items: string[];
}

const techGroups: TechGroup[] = [
  {
    category: "Languages & Runtimes",
    items: ["TypeScript", "JavaScript (ES6+)", "Node.js", "Python", "C#", "Dart", "SQL"],
  },
  {
    category: "Frameworks & Frontend",
    items: ["Next.js 15 (App Router)", "React 19", "NestJS", "FastAPI", "Flutter", "Tailwind CSS"],
  },
  {
    category: "Data & Caching",
    items: ["PostgreSQL", "Redis (Atomic Locks & Caching)", "MongoDB", "Prisma", "TypeORM"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Google Cloud (GCP)", "AWS", "Docker", "Kubernetes", "BullMQ Task Queue", "CI/CD"],
  },
];

const ProfileSection = () => {
  return (
    <section id="about" className="py-24 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Pill & Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-semibold text-zinc-600 dark:text-zinc-300 mb-3">
            <User className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>About & Engineering Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Architecting for Scalability & Maintainability
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I am a Lead Software Architect and Full-Stack Engineer with 8+ years of hands-on experience designing resilient distributed systems, modern web/mobile applications, and open-source developer tooling.
          </p>
        </div>

        {/* Narrative & Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-5">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              High-Concurrency Architecture
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Designing distributed backend systems that gracefully handle traffic surges using Redis distributed locking, asynchronous BullMQ job queues, and connection pooling.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              Clean, Typed Codebases
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Zero tolerance for messy code and unmaintainable technical debt. I emphasize strict TypeScript contracts, modular domain boundaries, and comprehensive test coverage.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              Pragmatic Business ROI
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I don&apos;t build for vanity metrics or chase short-lived hype. Every architectural decision is grounded in real business reliability, development velocity, and infrastructure cost-efficiency.
            </p>
          </div>
        </div>

        {/* Tech Stack Grid Section */}
        <div id="stack" className="pt-8">
          <div className="max-w-2xl mb-10">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Verified Technical Stack
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Tools, frameworks, and infrastructure technologies I deploy in production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techGroups.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
