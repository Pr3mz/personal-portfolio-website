"use client";

import { motion } from "framer-motion";
import type { TimelineMilestone } from "@/types/portfolio";
import { Trophy, Calendar } from "lucide-react";

interface TimelineProps {
  milestones: TimelineMilestone[];
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <section id="timeline" className="py-24 border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Apple Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Competitive Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Hackathons, Robotics & Challenges.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
            Track record in national and international robotics tournaments, hackathons, and space programming challenges.
          </p>
        </div>

        {/* Vertical Apple Timeline Tree */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10">
          {milestones.map((item) => (
            <motion.div
              key={item.title}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-black border-2 border-white/40 group-hover:border-white transition-colors shadow-lg flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
              </div>

              {/* Milestone Card */}
              <div className="p-6 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all shadow-xl backdrop-blur-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/10 flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.badge}</span>
                    </span>
                    <span className="text-xs text-neutral-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-500" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-emerald-400">
                    {item.role}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-neutral-200 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {item.organization}
                  </div>
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/50 text-neutral-400 border border-white/5"
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
