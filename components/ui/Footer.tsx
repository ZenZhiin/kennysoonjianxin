import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-12 transition-colors">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Kenny Soon Jian Xin
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Lead Software Architect &bull; Kuala Lumpur, Malaysia
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ZenZhiin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kenny-soon-81a930146/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:kenny.soon@zenzhiin.com"
            aria-label="Direct Email"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right">
          &copy; {new Date().getFullYear()} Kenny Soon. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
