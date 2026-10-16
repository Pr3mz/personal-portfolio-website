"use client";

import { GraduationCap, Cpu, Eye, Zap } from "lucide-react";

export default function AboutBento() {
  return (
    <section id="about" className="py-24 relative border-t border-black/[0.06] dark:border-white/10 bg-[#f5f5f7] dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#6e6e73] dark:text-neutral-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#76b900]" />
            <span>About Prem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white">
            Engineered with curiosity. Built for the real world.
          </h2>
          <p className="text-[#515154] dark:text-neutral-400 text-sm sm:text-base max-w-2xl font-normal">
            A clear view of my academic journey, hardware philosophy, and career vision.
          </p>
        </div>

        {/* Apple-style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento 1: Education (7 cols) */}
          <div className="md:col-span-7 rounded-3xl bg-white dark:bg-neutral-900/60 border border-black/[0.07] dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#f5f5f7] dark:bg-white/5 border border-black/[0.06] dark:border-white/10 flex items-center justify-center text-[#0066cc] dark:text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6e73] dark:text-neutral-500">
                  Academic Roots
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight mt-1">
                  Assumption College Samutprakan → KMUTT
                </h3>
              </div>
              <p className="text-[#515154] dark:text-neutral-300 text-sm leading-relaxed">
                Graduated high school from <strong className="text-[#1d1d1f] dark:text-white font-semibold">Assumption College Samutprakan</strong> with deep commitment to computer science, robotics, and physical prototyping. Currently sharpening my technical rigor in <strong className="text-[#1d1d1f] dark:text-white font-semibold">Computer Engineering at King Mongkut&apos;s University of Technology Thonburi (KMUTT)</strong>.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.06] dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#6e6e73] dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#76b900]" />
                <span className="text-[#1d1d1f] dark:text-white font-semibold">KMUTT Computer Engineering</span>
              </div>
              <span className="font-mono text-[#6e6e73] dark:text-neutral-400">ACSP Alumnus</span>
            </div>
          </div>

          {/* Bento 2: Career Target - NVIDIA (5 cols) */}
          <div className="md:col-span-5 rounded-3xl bg-white dark:bg-neutral-900/80 border-2 border-[#76b900]/40 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#76b900]/15 border border-[#76b900]/30 flex items-center justify-center text-[#5a8f00] dark:text-[#76b900]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5a8f00] dark:text-[#76b900]">
                  Career Horizon
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight mt-1">
                  Looking Forward: Target NVIDIA
                </h3>
              </div>
              <p className="text-[#515154] dark:text-neutral-300 text-sm leading-relaxed">
                Driven by a focused dream to engineer at <strong className="text-[#5a8f00] dark:text-[#76b900] font-bold">NVIDIA</strong>, working on physical AI, edge inference, and autonomous robotic machines that leverage accelerated computing architectures.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.06] dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#5a8f00] dark:text-[#76b900] font-semibold">Physical AI & Accelerated Compute</span>
              <span className="px-3 py-1 rounded-full bg-[#76b900] text-white dark:text-black text-[10px] font-bold uppercase tracking-wide">
                Goal
              </span>
            </div>
          </div>

          {/* Bento 3: Hardware & Low-Level Silicon (6 cols) */}
          <div className="md:col-span-6 rounded-3xl bg-white dark:bg-neutral-900/60 border border-black/[0.07] dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#f5f5f7] dark:bg-white/5 border border-black/[0.06] dark:border-white/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6e73] dark:text-neutral-500">
                  Engineering Philosophy
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight mt-1">
                  Hands-On Hardware & Firmware
                </h3>
              </div>
              <p className="text-[#515154] dark:text-neutral-300 text-sm leading-relaxed">
                I don&apos;t just simulate on a screen. I design circuits, solder components, interface IMUs and ultrasonic sensors, and program high-frequency FreeRTOS control loops on Arduino and ESP32 platforms to control physical motors with precision.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.06] dark:border-white/10 flex flex-wrap gap-2">
              {["ESP32", "Arduino", "FreeRTOS", "PID Control", "Sensors & Relays"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs bg-[#f5f5f7] dark:bg-white/5 text-[#1d1d1f] dark:text-neutral-300 border border-black/[0.06] dark:border-white/10 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bento 4: Computer Vision & Systems (6 cols) */}
          <div className="md:col-span-6 rounded-3xl bg-white dark:bg-neutral-900/60 border border-black/[0.07] dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#f5f5f7] dark:bg-white/5 border border-black/[0.06] dark:border-white/10 flex items-center justify-center text-[#0066cc] dark:text-sky-400">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6e73] dark:text-neutral-500">
                  Perception & Algorithms
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white tracking-tight mt-1">
                  Computer Vision & System Design
                </h3>
              </div>
              <p className="text-[#515154] dark:text-neutral-300 text-sm leading-relaxed">
                From real-time OpenCV obstacle avoidance for WRO autonomous vehicles to client-side Android call screening architecture for UniHack 2026, I build software that processes data swiftly and securely.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-black/[0.06] dark:border-white/10 flex flex-wrap gap-2">
              {["OpenCV", "Python", "ArUco Pose", "Robotics", "System Architecture"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs bg-[#f5f5f7] dark:bg-white/5 text-[#1d1d1f] dark:text-neutral-300 border border-black/[0.06] dark:border-white/10 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
