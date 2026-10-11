"use client";

import { useEffect } from "react";
import Image from "next/image";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-black/60 p-6 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/10">
                {project.domain}
              </span>
              {project.secondaryDomain && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-neutral-300 border border-white/10">
                  {project.secondaryDomain}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-neutral-400 mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Real Photo Banner if available */}
          {project.image && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-950 border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs text-white font-medium">
                Hardware Implementation
              </div>
            </div>
          )}

          {/* Summary */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>System Overview</span>
            </h4>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">{project.summary}</p>
          </div>

          {/* Deep Architectural Details */}
          <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-2">
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Technical Architecture</span>
            </h4>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-mono">
              {project.architectureDetails}
            </p>
          </div>

          {/* Hardware & Software Specs */}
          {(project.hardwareSpecs || project.softwareSpecs) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.hardwareSpecs && (
                <div className="p-4.5 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
                  <h5 className="text-xs font-semibold text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" />
                    <span>Hardware Specifications</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
                    {project.hardwareSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.softwareSpecs && (
                <div className="p-4.5 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
                  <h5 className="text-xs font-semibold text-sky-400 uppercase tracking-wide flex items-center gap-1.5">
                    <Code2 className="w-4 h-4" />
                    <span>Software & Algorithms</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
                    {project.softwareSpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-400">•</span>
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-white/10">
              {project.metrics.map((m) => (
                <div key={m.label} className="p-3 rounded-xl bg-black/50 border border-white/10 text-center">
                  <span className="text-[10px] text-neutral-400 block uppercase font-medium">{m.label}</span>
                  <span className="text-sm font-bold text-white font-mono mt-0.5 block">{m.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 bg-black/70 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/15 flex items-center gap-1.5 transition-colors"
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
                className="px-4 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30 flex items-center gap-1.5 transition-colors"
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
                className="px-4 py-2 rounded-full bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 text-xs font-medium border border-sky-500/30 flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
