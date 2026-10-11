"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
          ? "bg-black/75 backdrop-blur-2xl border-b border-white/10 py-3 shadow-2xl shadow-black/60"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3 text-white font-medium tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-700 border border-white/15 flex items-center justify-center text-white font-bold text-xs shadow-md">
            PS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-none tracking-tight text-white">
              Prem Supthaksina
            </span>
            <span className="text-[11px] text-neutral-400 font-normal leading-tight mt-0.5">
              KMUTT Computer Engineering
            </span>
          </div>
        </a>

        {/* Desktop Nav - Apple Pill */}
        <nav className="hidden md:flex items-center gap-0.5 bg-neutral-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/prem-supthaksina-064763335/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-all"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Pr3mz"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-all"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-neutral-900/80 border border-white/10 text-neutral-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-3xl border-b border-white/10 px-5 py-5 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm text-neutral-300 hover:text-white hover:bg-white/10 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex gap-2">
            <a
              href="https://www.linkedin.com/in/prem-supthaksina-064763335/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 text-center rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium flex items-center justify-center gap-1.5 border border-white/10"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Pr3mz"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-2 text-center rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium flex items-center justify-center gap-1.5 border border-white/10"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center rounded-xl bg-white text-black text-xs font-bold flex items-center justify-center gap-1.5"
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
