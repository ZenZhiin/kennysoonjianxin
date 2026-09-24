import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";

interface SocialLinkItem {
  href: string;
  label: string;
  sublabel: string;
  icon: typeof Github;
}

const socialLinks: SocialLinkItem[] = [
  {
    href: "https://github.com/ZenZhiin",
    label: "Personal GitHub",
    sublabel: "@ZenZhiin",
    icon: Github,
  },
  {
    href: "https://github.com/ZenZhiinVenture",
    label: "Open Source Org",
    sublabel: "@ZenZhiinVenture",
    icon: Code2,
  },
  {
    href: "https://www.linkedin.com/in/kenny-soon-81a930146/",
    label: "LinkedIn",
    sublabel: "Kenny Soon",
    icon: Linkedin,
  },
  {
    href: "mailto:kenny.soon@zenzhiin.com",
    label: "Email",
    sublabel: "kenny.soon@zenzhiin.com",
    icon: Mail,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {socialLinks.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all text-xs font-medium shadow-xs group"
          >
            <IconComponent className="h-4 w-4 text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shrink-0" />
            <div className="flex flex-col text-left">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                {item.label}
              </span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                {item.sublabel}
              </span>
            </div>
            <ExternalLink className="h-3 w-3 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
