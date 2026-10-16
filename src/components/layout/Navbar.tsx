"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Milestones", href: "#timeline" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-black/80 backdrop-blur-2xl border-b border-black/[0.08] dark:border-white/10 py-3 shadow-sm"
          : "bg-white/70 dark:bg-transparent backdrop-blur-xl border-b border-black/[0.04] dark:border-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3 font-medium tracking-tight hover:opacity-85 transition-opacity"
        >
          <div className="w-9 h-9 rounded-full bg-[#1d1d1f] dark:bg-neutral-900 border-2 border-[#76b900] flex items-center justify-center text-white font-bold text-xs shadow-sm">
            PS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-none tracking-tight text-[#1d1d1f] dark:text-white">
              Prem Supthaksina
            </span>
            <span className="text-[11px] text-[#6e6e73] dark:text-neutral-400 font-normal leading-tight mt-0.5">
              KMUTT Computer Engineering
            </span>
          </div>
        </a>

        {/* Desktop Nav - Apple.com/th Clean Pill */}
        <nav className="hidden md:flex items-center gap-0.5 bg-[#f5f5f7] dark:bg-neutral-900/70 p-1 rounded-full border border-black/[0.06] dark:border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-[#515154] dark:text-neutral-300 hover:text-[#1d1d1f] dark:hover:text-white hover:bg-white dark:hover:bg-white/10 hover:shadow-2xs transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions + Bright/Dark Theme Switcher */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Bright or Dark Theme"
            data-testid="theme-toggle"
            className="px-3 py-2 rounded-full bg-[#f5f5f7] hover:bg-neutral-200/80 dark:bg-white/10 dark:hover:bg-white/15 text-[#1d1d1f] dark:text-white border border-black/[0.08] dark:border-white/10 transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Bright Mode"}
          >
            {theme === "light" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#76b900] fill-[#76b900]" />
                <span>Bright</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#76b900]" />
                <span>Dark</span>
              </>
            )}
          </button>

          <a
            href="https://www.linkedin.com/in/prem-supthaksina-064763335/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-[#f5f5f7] hover:bg-neutral-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-[#515154] dark:text-neutral-300 hover:text-[#1d1d1f] dark:hover:text-white border border-black/[0.06] dark:border-white/10 transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Pr3mz"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-[#f5f5f7] hover:bg-neutral-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-[#515154] dark:text-neutral-300 hover:text-[#1d1d1f] dark:hover:text-white border border-black/[0.06] dark:border-white/10 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-[#1d1d1f] hover:bg-[#76b900] dark:bg-[#76b900] dark:hover:bg-[#68a300] text-white dark:text-black font-semibold text-xs transition-all shadow-xs flex items-center gap-1.5"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Bright or Dark Theme Mobile"
            data-testid="theme-toggle-mobile"
            className="p-2 rounded-full bg-[#f5f5f7] dark:bg-neutral-900 border border-black/[0.08] dark:border-white/10 text-[#1d1d1f] dark:text-white"
          >
            {theme === "light" ? (
              <Sun className="w-4 h-4 text-[#76b900]" />
            ) : (
              <Moon className="w-4 h-4 text-[#76b900]" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#f5f5f7] dark:bg-neutral-900 border border-black/[0.08] dark:border-white/10 text-[#1d1d1f] dark:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-3xl border-b border-black/[0.08] dark:border-white/10 px-5 py-5 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm text-[#1d1d1f] dark:text-neutral-200 hover:bg-[#f5f5f7] dark:hover:bg-white/10 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-black/[0.08] dark:border-white/10 flex gap-2">
            <a
              href="https://www.linkedin.com/in/prem-supthaksina-064763335/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 text-center rounded-xl bg-[#f5f5f7] dark:bg-white/10 text-[#1d1d1f] dark:text-white text-xs font-medium flex items-center justify-center gap-1.5 border border-black/[0.08] dark:border-white/10"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Pr3mz"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 text-center rounded-xl bg-[#f5f5f7] dark:bg-white/10 text-[#1d1d1f] dark:text-white text-xs font-medium flex items-center justify-center gap-1.5 border border-black/[0.08] dark:border-white/10"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center rounded-xl bg-[#76b900] text-black text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
