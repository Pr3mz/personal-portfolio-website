"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const email = "premsupthaksina@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject || "Inquiry: Robotics & Engineering Opportunity"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 border-t border-black/[0.06] dark:border-white/10 bg-[#f5f5f7] dark:bg-neutral-950 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6e6e73] dark:text-neutral-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#76b900]" />
            <span>Connect & Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
            Let&apos;s build something extraordinary.
          </h2>
          <p className="text-[#515154] dark:text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
            Open for robotics engineering, edge AI research, and high-performance microcontroller opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900/60 border border-black/[0.07] dark:border-white/10 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] dark:bg-white/5 border border-black/[0.06] dark:border-white/10 flex items-center justify-center text-[#1d1d1f] dark:text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-[#6e6e73] dark:text-neutral-500 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-sm font-semibold text-[#1d1d1f] dark:text-white break-all">
                    {email}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`mailto:${email}`}
                  className="flex-1 py-2.5 rounded-full bg-[#1d1d1f] hover:bg-[#76b900] dark:bg-white dark:hover:bg-[#76b900] text-white dark:text-black text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>

                <button
                  onClick={handleCopy}
                  className="px-4 py-2.5 rounded-full bg-[#f5f5f7] hover:bg-neutral-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-[#1d1d1f] dark:text-neutral-300 text-xs font-medium border border-black/[0.08] dark:border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#76b900]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* LinkedIn & GitHub Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/prem-supthaksina-064763335/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white hover:bg-neutral-50 dark:bg-neutral-900/50 dark:hover:bg-neutral-900/80 border border-black/[0.07] dark:border-white/10 hover:border-[#76b900]/40 transition-all shadow-2xs flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <LinkedinIcon className="w-5 h-5 text-[#0066cc] dark:text-sky-400" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6e6e73] dark:text-neutral-500 group-hover:text-[#1d1d1f] dark:group-hover:text-white transition-colors" />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-bold text-[#1d1d1f] dark:text-white block">LinkedIn</span>
                  <span className="text-[11px] text-[#6e6e73] dark:text-neutral-400 font-mono">/prem-supthaksina</span>
                </div>
              </a>

              <a
                href="https://github.com/Pr3mz"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white hover:bg-neutral-50 dark:bg-neutral-900/50 dark:hover:bg-neutral-900/80 border border-black/[0.07] dark:border-white/10 hover:border-[#76b900]/40 transition-all shadow-2xs flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <GithubIcon className="w-5 h-5 text-[#1d1d1f] dark:text-white" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6e6e73] dark:text-neutral-500 group-hover:text-[#1d1d1f] dark:group-hover:text-white transition-colors" />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-bold text-[#1d1d1f] dark:text-white block">GitHub</span>
                  <span className="text-[11px] text-[#6e6e73] dark:text-neutral-400 font-mono">@Pr3mz</span>
                </div>
              </a>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900/40 border border-black/[0.07] dark:border-white/10 text-xs text-[#515154] dark:text-neutral-400 flex items-center gap-2.5 shadow-2xs">
              <MapPin className="w-4 h-4 text-[#76b900] flex-shrink-0" />
              <span>Bangkok, Thailand • King Mongkut&apos;s University of Technology Thonburi (KMUTT)</span>
            </div>

          </div>

          {/* Right Form: Quick Dispatch */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900/50 border border-black/[0.07] dark:border-white/10 shadow-xs">
            <h3 className="text-base font-bold text-[#1d1d1f] dark:text-white tracking-tight mb-1">
              Direct Message Dispatch
            </h3>
            <p className="text-xs text-[#6e6e73] dark:text-neutral-400 mb-6">
              Compose a quick message that pre-fills in your preferred email client.
            </p>

            <form onSubmit={handleMailtoSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-semibold text-[#515154] dark:text-neutral-400 block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Robotics Collaboration / KMUTT Inquiry / Job Opportunity"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#f5f5f7] dark:bg-black/50 border border-black/[0.08] dark:border-white/10 text-xs text-[#1d1d1f] dark:text-white placeholder:text-[#6e6e73] dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#76b900] transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#515154] dark:text-neutral-400 block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide details about your project, robotics challenge, or prospective role..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#f5f5f7] dark:bg-black/50 border border-black/[0.08] dark:border-white/10 text-xs text-[#1d1d1f] dark:text-white placeholder:text-[#6e6e73] dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#76b900] transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#1d1d1f] hover:bg-[#76b900] dark:bg-white dark:hover:bg-[#76b900] text-white dark:text-black font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch Mail Client</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
