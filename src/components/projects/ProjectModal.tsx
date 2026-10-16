"use client";

import { useEffect } from "react";
import type { Project } from "@/types/portfolio";
import { X, ExternalLink, FileText, Cpu, Code2, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-neutral-900 border border-black/[0.1] dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden text-[#1d1d1f] dark:text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#f5f5f7] dark:bg-black/60 p-6 border-b border-black/[0.08] dark:border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#76b900]/15 text-[#4d7c00] dark:text-[#76b900] border border-[#76b900]/30">
                {project.domain}
              </span>
              {project.secondaryDomain && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-white/5 text-[#515154] dark:text-neutral-300 border border-black/[0.08] dark:border-white/10">
                  {project.secondaryDomain}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-[#6e6e73] dark:text-neutral-400 mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/15 text-[#515154] dark:text-neutral-400 hover:text-[#1d1d1f] dark:hover:text-white transition-colors border border-black/[0.08] dark:border-white/10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Real Photo Banner if available */}
          {project.image && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-950 border border-black/[0.08] dark:border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/15 text-xs text-[#1d1d1f] dark:text-white font-semibold">
                Hardware Implementation
              </div>
            </div>
          )}

          {/* Summary */}
          <div>
            <h4 className="text-xs font-semibold text-[#6e6e73] dark:text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#0066cc] dark:text-sky-400" />
              <span>System Overview</span>
            </h4>
            <p className="text-[#515154] dark:text-neutral-300 text-sm sm:text-base leading-relaxed">{project.summary}</p>
          </div>

          {/* Deep Architectural Details */}
          <div className="p-5 rounded-2xl bg-[#f5f5f7] dark:bg-black/50 border border-black/[0.06] dark:border-white/10 space-y-2">
            <h4 className="text-xs font-semibold text-[#6e6e73] dark:text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#5a8f00] dark:text-[#76b900]" />
              <span>Technical Architecture</span>
            </h4>
            <p className="text-[#1d1d1f] dark:text-neutral-300 text-xs sm:text-sm leading-relaxed font-mono">
              {project.architectureDetails}
            </p>
          </div>

          {/* Hardware & Software Specs */}
          {(project.hardwareSpecs || project.softwareSpecs) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.hardwareSpecs && (
                <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-black/40 border border-black/[0.06] dark:border-white/10 space-y-2.5">
                  <h5 className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" />
                    <span>Hardware Specifications</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#515154] dark:text-neutral-300 font-mono">
                    {project.hardwareSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-600 dark:text-amber-400">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.softwareSpecs && (
                <div className="p-4 rounded-2xl bg-[#f5f5f7] dark:bg-black/40 border border-black/[0.06] dark:border-white/10 space-y-2.5">
                  <h5 className="text-xs font-semibold text-[#0066cc] dark:text-sky-400 uppercase tracking-wide flex items-center gap-1.5">
                    <Code2 className="w-4 h-4" />
                    <span>Software & Algorithms</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#515154] dark:text-neutral-300 font-mono">
                    {project.softwareSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#0066cc] dark:text-sky-400">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-black/[0.06] dark:border-white/10">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-3 rounded-xl bg-[#f5f5f7] dark:bg-black/50 border border-black/[0.06] dark:border-white/10 text-center">
                  <span className="text-[10px] text-[#6e6e73] dark:text-neutral-400 block uppercase font-medium">{m.label}</span>
                  <span className="text-sm font-bold text-[#1d1d1f] dark:text-white font-mono mt-0.5 block">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 bg-[#f5f5f7] dark:bg-black/70 border-t border-black/[0.08] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white hover:bg-neutral-100 dark:bg-white/10 dark:hover:bg-white/20 text-[#1d1d1f] dark:text-white text-xs font-medium border border-black/[0.1] dark:border-white/15 flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.reportUrl && (
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-[#76b900]/15 hover:bg-[#76b900]/25 text-[#4d7c00] dark:text-[#76b900] text-xs font-semibold border border-[#76b900]/30 flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Technical Document (PDF)</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-sky-500/12 hover:bg-sky-500/20 text-[#0066cc] dark:text-sky-300 text-xs font-semibold border border-sky-500/30 flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1d1d1f] text-white dark:bg-white dark:text-black hover:opacity-90 text-xs font-semibold transition-opacity cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
