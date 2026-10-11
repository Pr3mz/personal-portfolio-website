"use client";

import { useState } from "react";
import Image from "next/image";
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
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "AI/Computer Vision":
        return "bg-sky-500/10 text-sky-400 border-sky-500/20";
      case "Web/Cybersecurity":
        return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      case "Game Engine/AI":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default:
        return "bg-white/5 text-neutral-300 border-white/10";
    }
  };

  return (
    <div className="group rounded-3xl bg-neutral-900/40 hover:bg-neutral-900/70 border border-white/10 hover:border-white/20 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-2xl backdrop-blur-xl">
      
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
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-all border border-white/10"
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
                className="p-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-all border border-emerald-500/20"
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
                className="p-1.5 rounded-full bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 transition-all border border-sky-500/20"
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
                <span className="text-[11px] text-neutral-400 font-medium">Build Showcase</span>
                <div className="flex gap-1 bg-black/40 p-0.5 rounded-full border border-white/10 text-[10px]">
                  <button
                    onClick={() => setViewMode("photo")}
                    className={`px-2 py-0.5 rounded-full flex items-center gap-1 transition-all ${
                      viewMode === "photo"
                        ? "bg-white text-black font-semibold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>Real Photo</span>
                  </button>
                  <button
                    onClick={() => setViewMode("cad")}
                    className={`px-2 py-0.5 rounded-full flex items-center gap-1 transition-all ${
                      viewMode === "cad"
                        ? "bg-white text-black font-semibold"
                        : "text-neutral-400 hover:text-white"
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
                className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 cursor-pointer group/img"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] text-neutral-300 font-medium">
                  Physical Build
                </div>
              </div>
            ) : (
              <div className="h-44 rounded-2xl bg-neutral-950 border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center text-[10px] text-sky-400 font-mono">
                  <span>{project.cadPreview?.title}</span>
                  <span className="px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">SCHEMATIC</span>
                </div>
                <div className="my-auto text-center p-2 rounded-xl bg-white/[0.02] border border-dashed border-white/15">
                  <span className="text-xs text-neutral-300 font-semibold block">{project.title}</span>
                  <span className="text-[10px] text-neutral-400 leading-tight block mt-1">
                    {project.cadPreview?.details}
                  </span>
                </div>
                <span className="text-[10px] text-neutral-500 font-mono">Hardware Interlock Topology</span>
              </div>
            )}
          </div>
        )}

        {/* Title & Summary */}
        <div>
          <h3
            onClick={() => onSelect(project)}
            className="text-lg sm:text-xl font-bold text-white group-hover:text-neutral-200 transition-colors cursor-pointer flex items-center justify-between tracking-tight"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
          </h3>
          <p className="text-xs text-neutral-400 mt-1">{project.subtitle}</p>
        </div>

        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-neutral-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-neutral-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer / Inspect Action */}
      <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-semibold text-white hover:text-sky-400 transition-colors flex items-center gap-1.5"
        >
          <span>Inspect Architecture</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>

        {project.metrics && project.metrics.length > 0 && (
          <span className="text-[11px] text-neutral-400 font-medium">
            {project.metrics[0].label}: <strong className="text-white font-semibold">{project.metrics[0].value}</strong>
          </span>
        )}
      </div>

    </div>
  );
}
