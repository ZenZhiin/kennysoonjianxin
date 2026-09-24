"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon, Github, Menu, X } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition-opacity"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
          <span>Kenny Soon</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/#about"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            About
          </a>
          <a
            href="/#projects"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            Projects & Open Source
          </a>
          <a
            href="/#stack"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            Tech Stack
          </a>
          <a
            href="/#contact"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/ZenZhiin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-6 py-4 space-y-3">
          <a
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 py-1"
          >
            About
          </a>
          <a
            href="/#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 py-1"
          >
            Projects & Open Source
          </a>
          <a
            href="/#stack"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 py-1"
          >
            Tech Stack
          </a>
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 py-1"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-4">
            <a
              href="https://github.com/ZenZhiin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 py-1"
            >
              <Github className="h-4 w-4" />
              <span>github.com/ZenZhiin</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
