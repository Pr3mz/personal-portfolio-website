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
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Subtle Apple Ambient Glow */}
      <div className="absolute top-1/6 left-1/3 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Apple Typography & Narrative */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Apple Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xl text-xs font-medium text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Prem Supthaksina</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-300">Computer Engineering @ KMUTT</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                Where physical hardware meets{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500">
                  intelligent code.
                </span>
              </h1>
              
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Alumnus of <strong className="text-white font-semibold">Assumption College Samutprakan</strong>, now engineering at <strong className="text-white font-semibold">KMUTT</strong>. I build autonomous robotics, computer vision pipelines, and embedded control loops — with a focused aspiration to engineer cutting-edge physical AI at <strong className="text-emerald-400 font-semibold">NVIDIA</strong>.
              </p>
            </div>

            {/* Apple Minimalist Metrics Bar */}
            <div className="grid grid-cols-3 gap-3.5 pt-1 max-w-lg">
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider block">Background</span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-0.5 block">ACSP → KMUTT</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider block">Specialization</span>
                <span className="text-xs sm:text-sm font-semibold text-sky-400 mt-0.5 block">Robotics & Vision</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider block">Aspiration</span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-400 mt-0.5 block">Target: NVIDIA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs sm:text-sm transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="https://www.linkedin.com/in/prem-supthaksina-064763335/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-neutral-200 hover:text-white font-medium text-xs sm:text-sm border border-white/10 transition-all flex items-center gap-2"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Pr3mz"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-neutral-200 hover:text-white font-medium text-xs sm:text-sm border border-white/10 transition-all flex items-center gap-2"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-neutral-400 hover:text-white font-mono text-xs border border-white/10 transition-all flex items-center gap-2"
                title="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>
            </div>
          </div>

          {/* Right: Apple Showcase Bento Card (Portrait & Terminal) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-neutral-900/60 border border-white/10 shadow-2xl p-4 sm:p-5 backdrop-blur-2xl space-y-4">
              
              {/* Card Header Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-white tracking-tight">Engineer Spotlight</span>
                </div>

                <div className="flex items-center gap-1 bg-black/50 p-1 rounded-full border border-white/10 text-xs font-medium">
                  <button
                    onClick={() => setActiveTab("portrait")}
                    className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
                      activeTab === "portrait"
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Portrait</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all ${
                      activeTab === "terminal"
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-neutral-400 hover:text-white"
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
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
                    <Image
                      src="/assets/prem_portrait.jpg"
                      alt="Prem Supthaksina"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    
                    {/* Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom Floating Glass Badge */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/15 text-white flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold flex items-center gap-1.5">
                          <span>Prem Supthaksina</span>
                          <Sparkles className="w-3 h-3 text-emerald-400" />
                        </div>
                        <div className="text-[11px] text-neutral-300">
                          KMUTT Computer Engineering
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold">
                        Available
                      </span>
                    </div>
                  </div>

                  {/* Micro Summary Banner */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-neutral-300 flex items-center justify-between">
                    <span className="text-neutral-400">Target Career:</span>
                    <strong className="text-emerald-400 font-semibold">NVIDIA Edge AI & Robotics</strong>
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
