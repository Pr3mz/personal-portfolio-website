"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, Copy, Check, Sparkles, Terminal as TerminalIcon, User } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import CodeTerminal from "./CodeTerminal";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"portrait" | "terminal">("portrait");

  const copyEmail = () => {
    navigator.clipboard.writeText("premsupthaksina@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Subtle NVIDIA & Apple Ambient Accents */}
      <div className="absolute top-12 left-1/3 w-[520px] h-[520px] bg-[#76b900]/10 dark:bg-[#76b900]/12 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-sky-500/8 dark:bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Editorial Persona + Apple.com/th Typography */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f5f5f7] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/10 text-xs font-medium text-[#1d1d1f] dark:text-neutral-300 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#76b900] animate-pulse" />
              <span className="font-semibold">Prem Supthaksina</span>
              <span className="text-neutral-400">•</span>
              <span className="text-[#515154] dark:text-neutral-300">Computer Engineering @ KMUTT</span>
            </div>

            {/* Main Apple-Clean Display Headline */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1d1d1f] dark:text-white leading-[1.06]">
                Where physical hardware meets{" "}
                <span className="text-[#76b900]">
                  intelligent code.
                </span>
              </h1>
              
              <p className="text-[#515154] dark:text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Alumnus of <strong className="text-[#1d1d1f] dark:text-white font-semibold">Assumption College Samutprakan</strong>, now engineering at <strong className="text-[#1d1d1f] dark:text-white font-semibold">KMUTT</strong>. I build autonomous robotics, computer vision pipelines, and embedded control loops — with a focused aspiration to engineer cutting-edge physical AI at <strong className="text-[#76b900] font-semibold">NVIDIA</strong>.
              </p>
            </div>

            {/* Apple Minimalist Metrics Bar */}
            <div className="grid grid-cols-3 gap-3.5 pt-1 max-w-lg">
              <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/10">
                <span className="text-[10px] text-[#6e6e73] dark:text-neutral-500 font-semibold uppercase tracking-wider block">Background</span>
                <span className="text-xs sm:text-sm font-bold text-[#1d1d1f] dark:text-white mt-1 block">ACSP → KMUTT</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/10">
                <span className="text-[10px] text-[#6e6e73] dark:text-neutral-500 font-semibold uppercase tracking-wider block">Specialization</span>
                <span className="text-xs sm:text-sm font-bold text-[#0066cc] dark:text-sky-400 mt-1 block">Robotics & Vision</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#76b900]/10 dark:bg-[#76b900]/10 border border-[#76b900]/30">
                <span className="text-[10px] text-[#5a8f00] dark:text-[#76b900] font-semibold uppercase tracking-wider block">Aspiration</span>
                <span className="text-xs sm:text-sm font-bold text-[#5a8f00] dark:text-[#76b900] mt-1 block">Target: NVIDIA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-[#1d1d1f] hover:bg-[#76b900] dark:bg-white dark:hover:bg-[#76b900] text-white dark:text-black font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="https://www.linkedin.com/in/prem-supthaksina-064763335/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-full bg-[#f5f5f7] hover:bg-neutral-200/80 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] text-[#1d1d1f] dark:text-neutral-200 font-medium text-xs sm:text-sm border border-black/[0.08] dark:border-white/10 transition-all flex items-center gap-2"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0066cc] dark:text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Pr3mz"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-full bg-[#f5f5f7] hover:bg-neutral-200/80 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] text-[#1d1d1f] dark:text-neutral-200 font-medium text-xs sm:text-sm border border-black/[0.08] dark:border-white/10 transition-all flex items-center gap-2"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-full bg-white hover:bg-[#f5f5f7] dark:bg-white/[0.03] dark:hover:bg-white/[0.08] text-[#515154] dark:text-neutral-400 hover:text-[#1d1d1f] dark:hover:text-white font-mono text-xs border border-black/[0.1] dark:border-white/10 transition-all flex items-center gap-2 cursor-pointer"
                title="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#76b900]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Right: Persona & Apple Showcase Card (Portrait & Terminal) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#f5f5f7] dark:bg-neutral-900/70 border border-black/[0.08] dark:border-white/10 shadow-xl p-4 sm:p-5 space-y-4 transition-colors duration-300">
              
              {/* Card Header Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#76b900]" />
                  <span className="text-xs font-semibold text-[#1d1d1f] dark:text-white tracking-tight">Engineer Spotlight</span>
                </div>

                <div className="flex items-center gap-1 bg-white dark:bg-black/60 p-1 rounded-full border border-black/[0.08] dark:border-white/10 text-xs font-medium">
                  <button
                    onClick={() => setActiveTab("portrait")}
                    className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === "portrait"
                        ? "bg-[#1d1d1f] text-white dark:bg-white dark:text-black font-semibold shadow-2xs"
                        : "text-[#6e6e73] dark:text-neutral-400 hover:text-[#1d1d1f] dark:hover:text-white"
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Portrait</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === "terminal"
                        ? "bg-[#1d1d1f] text-white dark:bg-white dark:text-black font-semibold shadow-2xs"
                        : "text-[#6e6e73] dark:text-neutral-400 hover:text-[#1d1d1f] dark:hover:text-white"
                    }`}
                  >
                    <TerminalIcon className="w-3.5 h-3.5" />
                    <span>Terminal</span>
                  </button>
                </div>
              </div>

              {/* View 1: Studio Portrait */}
              {activeTab === "portrait" && (
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/10 shadow-sm group bg-neutral-200 dark:bg-neutral-950">
                    <Image
                      src="/assets/prem_portrait.jpg"
                      alt="Prem Supthaksina"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    
                    {/* Subtle Bottom Gradient for Badge Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom Floating Glass Badge */}
                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-white/90 dark:bg-black/70 backdrop-blur-xl border border-black/10 dark:border-white/15 text-[#1d1d1f] dark:text-white flex items-center justify-between shadow-lg">
                      <div>
                        <div className="text-xs font-bold flex items-center gap-1.5">
                          <span>Prem Supthaksina</span>
                          <Sparkles className="w-3.5 h-3.5 text-[#76b900]" />
                        </div>
                        <div className="text-[11px] text-[#515154] dark:text-neutral-300">
                          KMUTT Computer Engineering
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#76b900]/15 text-[#4d7c00] dark:text-[#76b900] border border-[#76b900]/30 text-[10px] font-bold">
                        Available
                      </span>
                    </div>
                  </div>

                  {/* Micro Summary Banner */}
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/10 text-xs flex items-center justify-between">
                    <span className="text-[#6e6e73] dark:text-neutral-400 font-medium">Target Career:</span>
                    <strong className="text-[#5a8f00] dark:text-[#76b900] font-bold">NVIDIA Edge AI & Robotics</strong>
                  </div>
                </div>
              )}

              {/* View 2: Code Terminal */}
              {activeTab === "terminal" && (
                <div className="pt-1">
                  <CodeTerminal />
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
