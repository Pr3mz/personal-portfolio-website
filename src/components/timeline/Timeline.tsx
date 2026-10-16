"use client";

import { motion } from "framer-motion";
import type { TimelineMilestone } from "@/types/portfolio";
import { Trophy, Calendar } from "lucide-react";

interface TimelineProps {
  milestones: TimelineMilestone[];
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <section id="timeline" className="py-24 border-t border-black/[0.06] dark:border-white/10 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Apple Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6e6e73] dark:text-neutral-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#76b900]" />
            <span>Competitive Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
            Hackathons, Robotics & Challenges.
          </h2>
          <p className="text-[#515154] dark:text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
            Track record in national and international robotics tournaments, hackathons, and space programming challenges.
          </p>
        </div>

        {/* Vertical Apple Timeline Tree */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-black/[0.1] dark:border-white/10 space-y-10">
          {milestones.map((item) => (
            <motion.div
              key={item.title}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-[#76b900] transition-colors shadow-xs flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#76b900] group-hover:scale-125 transition-transform" />
              </div>

              {/* Milestone Card */}
              <div className="p-6 rounded-3xl bg-[#f5f5f7] hover:bg-white dark:bg-neutral-900/45 dark:hover:bg-neutral-900/75 border border-black/[0.07] dark:border-white/10 hover:border-black/[0.15] dark:hover:border-white/20 transition-all shadow-xs hover:shadow-lg space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-white/10 text-[#1d1d1f] dark:text-white border border-black/[0.08] dark:border-white/10 flex items-center gap-1.5 shadow-2xs">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      <span>{item.badge}</span>
                    </span>
                    <span className="text-xs text-[#6e6e73] dark:text-neutral-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#6e6e73] dark:text-neutral-500" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#5a8f00] dark:text-[#76b900]">
                    {item.role}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#6e6e73] dark:text-neutral-400 mt-0.5 font-medium">
                    {item.organization}
                  </div>
                </div>

                <p className="text-[#515154] dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white dark:bg-black/50 text-[#515154] dark:text-neutral-400 border border-black/[0.06] dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
