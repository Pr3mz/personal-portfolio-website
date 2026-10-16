"use client";

import { useState } from "react";
import type { Project } from "@/types/portfolio";
import { ExternalLink, FileText, ArrowUpRight, Cpu, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [viewMode, setViewMode] = useState<"photo" | "cad">("photo");

  const getDomainBadgeColor = (domain: string) => {
    switch (domain) {
      case "Robotics/Embedded":
        return "bg-[#76b900]/15 text-[#4d7c00] dark:text-[#76b900] border-[#76b900]/30";
      case "AI/Computer Vision":
        return "bg-sky-500/12 text-[#0066cc] dark:text-sky-400 border-sky-500/25";
      case "Web/Cybersecurity":
        return "bg-rose-500/12 text-rose-700 dark:text-rose-400 border-rose-500/25";
      case "Game Engine/AI":
        return "bg-purple-500/12 text-purple-700 dark:text-purple-400 border-purple-500/25";
      default:
        return "bg-black/5 dark:bg-white/5 text-[#515154] dark:text-neutral-300 border-black/10 dark:border-white/10";
    }
  };

  return (
    <div className="group rounded-3xl bg-[#f5f5f7] hover:bg-white dark:bg-neutral-900/45 dark:hover:bg-neutral-900/75 border border-black/[0.07] hover:border-black/[0.15] dark:border-white/10 dark:hover:border-white/20 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-xl">
      
      <div className="space-y-4">
        {/* Top Badges & External Links */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${getDomainBadgeColor(
                project.domain
              )}`}
            >
              {project.domain}
            </span>
            {project.secondaryDomain && (
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${getDomainBadgeColor(
                  project.secondaryDomain
                )}`}
              >
                {project.secondaryDomain}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-white hover:bg-neutral-100 dark:bg-white/5 dark:hover:bg-white/15 text-[#515154] dark:text-neutral-300 hover:text-[#1d1d1f] dark:hover:text-white transition-all border border-black/[0.08] dark:border-white/10"
                title="GitHub Repo"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {project.reportUrl && (
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-[#76b900]/15 hover:bg-[#76b900]/25 text-[#4d7c00] dark:text-[#76b900] transition-all border border-[#76b900]/30"
                title="Technical PDF Document"
              >
                <FileText className="w-3.5 h-3.5" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-sky-500/12 hover:bg-sky-500/20 text-[#0066cc] dark:text-sky-400 transition-all border border-sky-500/25"
                title="Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Real Hardware Image / Interactive CAD Display */}
        {project.image && (
          <div className="space-y-2">
            {project.cadPreview && (
              <div className="flex items-center justify-between text-xs pb-1">
                <span className="text-[11px] text-[#6e6e73] dark:text-neutral-400 font-medium">Build Showcase</span>
                <div className="flex gap-1 bg-white dark:bg-black/40 p-0.5 rounded-full border border-black/[0.08] dark:border-white/10 text-[10px]">
                  <button
                    onClick={() => setViewMode("photo")}
                    className={`px-2 py-0.5 rounded-full flex items-center gap-1 transition-all cursor-pointer ${
                      viewMode === "photo"
                        ? "bg-[#1d1d1f] text-white dark:bg-white dark:text-black font-semibold"
                        : "text-[#6e6e73] dark:text-neutral-400 hover:text-[#1d1d1f] dark:hover:text-white"
                    }`}
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>Real Photo</span>
                  </button>
                  <button
                    onClick={() => setViewMode("cad")}
                    className={`px-2 py-0.5 rounded-full flex items-center gap-1 transition-all cursor-pointer ${
                      viewMode === "cad"
                        ? "bg-[#1d1d1f] text-white dark:bg-white dark:text-black font-semibold"
                        : "text-[#6e6e73] dark:text-neutral-400 hover:text-[#1d1d1f] dark:hover:text-white"
                    }`}
                  >
                    <Cpu className="w-3 h-3" />
                    <span>CAD / Logic</span>
                  </button>
                </div>
              </div>
            )}

            {viewMode === "photo" ? (
              <div
                onClick={() => onSelect(project)}
                className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-950 border border-black/[0.08] dark:border-white/10 cursor-pointer group/img"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-white/90 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/10 text-[10px] text-[#1d1d1f] dark:text-neutral-200 font-semibold shadow-2xs">
                  Physical Build
                </div>
              </div>
            ) : (
              <div className="h-44 rounded-2xl bg-white dark:bg-neutral-950 border border-black/[0.08] dark:border-white/10 p-3.5 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center text-[10px] text-[#0066cc] dark:text-sky-400 font-mono">
                  <span>{project.cadPreview?.title}</span>
                  <span className="px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">SCHEMATIC</span>
                </div>
                <div className="my-auto text-center p-2 rounded-xl bg-[#f5f5f7] dark:bg-white/[0.02] border border-dashed border-black/15 dark:border-white/15">
                  <span className="text-xs text-[#1d1d1f] dark:text-neutral-300 font-semibold block">{project.title}</span>
                  <span className="text-[10px] text-[#515154] dark:text-neutral-400 leading-tight block mt-1">
                    {project.cadPreview?.details}
                  </span>
                </div>
                <span className="text-[10px] text-[#6e6e73] dark:text-neutral-500 font-mono">Hardware Interlock Topology</span>
              </div>
            )}
          </div>
        )}

        {/* Title & Summary */}
        <div>
          <h3
            onClick={() => onSelect(project)}
            className="text-lg sm:text-xl font-bold text-[#1d1d1f] dark:text-white group-hover:text-[#5a8f00] dark:group-hover:text-[#76b900] transition-colors cursor-pointer flex items-center justify-between tracking-tight"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-[#6e6e73] dark:text-neutral-400 group-hover:text-[#5a8f00] dark:group-hover:text-[#76b900] transition-colors" />
          </h3>
          <p className="text-xs text-[#6e6e73] dark:text-neutral-400 mt-1">{project.subtitle}</p>
        </div>

        <p className="text-[#515154] dark:text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white dark:bg-white/5 text-[#515154] dark:text-neutral-300 border border-black/[0.08] dark:border-white/10"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-[#6e6e73] dark:text-neutral-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer / Inspect Action */}
      <div className="pt-4 mt-5 border-t border-black/[0.07] dark:border-white/10 flex items-center justify-between">
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-semibold text-[#1d1d1f] dark:text-white hover:text-[#5a8f00] dark:hover:text-[#76b900] transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <span>Inspect Architecture</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>

        {project.metrics && project.metrics.length > 0 && (
          <span className="text-[11px] text-[#6e6e73] dark:text-neutral-400 font-medium">
            {project.metrics[0].label}: <strong className="text-[#1d1d1f] dark:text-white font-bold">{project.metrics[0].value}</strong>
          </span>
        )}
      </div>

    </div>
  );
}
