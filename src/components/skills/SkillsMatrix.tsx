"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/types/portfolio";
import { Code, Cpu, HardDrive, Terminal } from "lucide-react";

interface SkillsMatrixProps {
  groups: SkillGroup[];
}

export default function SkillsMatrix({ groups }: SkillsMatrixProps) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "code":
        return <Code className="w-4 h-4 text-sky-400" />;
      case "cpu":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case "microchip":
        return <HardDrive className="w-4 h-4 text-amber-400" />;
      case "terminal":
        return <Terminal className="w-4 h-4 text-purple-400" />;
      default:
        return <Code className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Apple Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Skills honed through hands-on execution.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
            Low-level microcontrollers, computer vision pipelines, programming languages, and engineering tools.
          </p>
        </div>

        {/* 4 Core Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <motion.div
              key={group.groupName}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                  <div className="w-9 h-9 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getIcon(group.icon)}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {group.groupName}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-2xl bg-black/40 border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-neutral-400 font-mono">
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.tag && (
                        <span className="text-[11px] text-neutral-400 block mt-1 leading-snug">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 text-[10px] font-mono text-neutral-400 flex justify-between">
                <span>VERIFIED</span>
                <span>PRODUCTION READY</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
