"use client";

import Image from "next/image";
import { GraduationCap, Cpu, Eye, Zap, ArrowUpRight } from "lucide-react";

export default function AboutBento() {
  return (
    <section id="about" className="py-24 relative border-t border-white/10 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>About Prem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineered with curiosity. Built for the real world.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl font-normal">
            A clear view of my academic journey, hardware philosophy, and career vision.
          </p>
        </div>

        {/* Apple-style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento 1: Education (7 cols) */}
          <div className="md:col-span-7 rounded-3xl bg-neutral-900/50 border border-white/10 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  Academic Roots
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                  Assumption College Samutprakan → KMUTT
                </h3>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Graduated high school from <strong className="text-white">Assumption College Samutprakan</strong> with deep commitment to computer science, robotics, and physical prototyping. Currently sharpening my technical rigor in <strong className="text-white">Computer Engineering at King Mongkut&apos;s University of Technology Thonburi (KMUTT)</strong>.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white font-medium">KMUTT Computer Engineering</span>
              </div>
              <span className="font-mono text-neutral-400">ACSP Alumnus</span>
            </div>
          </div>

          {/* Bento 2: Career Target - NVIDIA (5 cols) */}
          <div className="md:col-span-5 rounded-3xl bg-gradient-to-br from-emerald-950/30 to-neutral-900/60 border border-emerald-500/20 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                  Career Horizon
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                  Looking Forward: Target NVIDIA
                </h3>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Driven by a focused dream to engineer at <strong className="text-emerald-400">NVIDIA</strong>, working on physical AI, edge inference, and autonomous robotic machines that leverage accelerated computing architectures.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-500/10 flex items-center justify-between">
              <span className="text-xs text-emerald-300 font-medium">Physical AI & Accelerated Compute</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                Goal
              </span>
            </div>
          </div>

          {/* Bento 3: Hardware & Low-Level Silicon (6 cols) */}
          <div className="md:col-span-6 rounded-3xl bg-neutral-900/50 border border-white/10 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  Engineering Philosophy
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                  Hands-On Hardware & Firmware
                </h3>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                I don&apos;t just simulate on a screen. I design circuits, solder components, interface IMUs and ultrasonic sensors, and program high-frequency FreeRTOS control loops on Arduino and ESP32 platforms to control physical motors with precision.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-2">
              {["ESP32", "Arduino", "FreeRTOS", "PID Control", "Sensors & Relays"].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-neutral-300 border border-white/10 font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bento 4: Computer Vision & Systems (6 cols) */}
          <div className="md:col-span-6 rounded-3xl bg-neutral-900/50 border border-white/10 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  Perception & Algorithms
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                  Computer Vision & System Design
                </h3>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                From real-time OpenCV obstacle avoidance for WRO autonomous vehicles to client-side Android call screening architecture for UniHack 2026, I build software that processes data swiftly and securely.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-2">
              {["OpenCV", "Python", "ArUco Pose", "Robotics", "System Architecture"].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-neutral-300 border border-white/10 font-mono"
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
