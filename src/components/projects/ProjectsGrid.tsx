"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Search } from "lucide-react";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = [
    "All",
    "Robotics/Embedded",
    "AI/Computer Vision",
    "Web/Cybersecurity",
    "Game Engine/AI"
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter =
        activeFilter === "All" ||
        p.domain === activeFilter ||
        p.secondaryDomain === activeFilter;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      return matchesFilter && matchesSearch;
    });
  }, [projects, activeFilter, searchQuery]);

  return (
    <section id="projects" className="py-24 border-t border-black/[0.06] dark:border-white/10 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6e6e73] dark:text-neutral-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#76b900]" />
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
              Physical machines and intelligent code.
            </h2>
            <p className="text-[#515154] dark:text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
              Autonomous mobile robotics, IoT controllers, and software architectures.
            </p>
          </div>

          {/* Search Box - Apple Minimalist */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#6e6e73] dark:text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search builds, sensors, stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#f5f5f7] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/10 text-xs text-[#1d1d1f] dark:text-white placeholder:text-[#6e6e73] dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#76b900] transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#1d1d1f] text-white dark:bg-white dark:text-black font-semibold shadow-sm"
                  : "bg-[#f5f5f7] dark:bg-white/[0.04] text-[#515154] dark:text-neutral-400 hover:text-[#1d1d1f] dark:hover:text-white border border-black/[0.06] dark:border-white/10 hover:bg-neutral-200/70 dark:hover:bg-white/[0.08]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} onSelect={setSelectedProject} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#f5f5f7] dark:bg-neutral-900/30 rounded-3xl border border-black/[0.06] dark:border-white/10">
            <p className="text-sm text-[#515154] dark:text-neutral-400">
              No engineering projects match &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#1d1d1f] text-white dark:bg-white dark:text-black text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
