"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-black py-12 text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white font-bold text-xs">
              PS
            </div>
            <div>
              <span className="text-white font-semibold block">Prem Supthaksina</span>
              <span className="text-[11px] text-neutral-500">Computer Engineering • KMUTT</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/prem-supthaksina-064763335/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors border border-white/10"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Pr3mz"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors border border-white/10"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:premsupthaksina@gmail.com"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors border border-white/10"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Prem Supthaksina. Assumption College Samutprakan • KMUTT Computer Engineering.
          </div>
          <div>
            Engineered with Next.js 15 • Tailwind CSS v4 • Framer Motion
          </div>
        </div>

      </div>
    </footer>
  );
}
