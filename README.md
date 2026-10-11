# Prem Supthaksina — High-Performance Engineering Portfolio

A modern developer portfolio for **Prem Supthaksina**, Computer Engineering student at **King Mongkut's University of Technology Thonburi (KMUTT)**.

Bridging Hardware & Code: **AIoT, Robotics, and Competitive Algorithms**.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Engineering glyphs
- **Verification**: Playwright automated multi-viewport testing suite

---

## 🏗️ Core Sections & Features

1. **Hero Section (`HeroSection.tsx`, `CodeTerminal.tsx`)**:
   - KMUTT status pill and high-impact title typography.
   - Interactive terminal emulator with real-time syntax typing for dual targets:
     - `esp32_loop.cpp` (FreeRTOS 1000Hz PID motor control loop with MPU6050 IMU)
     - `aruco_mask.py` (OpenCV 4.x top-view fiducial marker & dynamic HSV mask pipeline)

2. **Engineering Projects Matrix (`ProjectsGrid.tsx`, `ProjectCard.tsx`, `ProjectModal.tsx`)**:
   - Domain filtering pills (`Robotics/Embedded`, `AI/Computer Vision`, `Web/Cybersecurity`, `Game Engine/AI`) and instant search.
   - **Eng-Expo Autonomous Robot**: Dual-core ESP32 rover, IR sensors, OpenCV ArUco tracking, Roboflow YOLOv8 obstacle detection, and live CAD schematic viewer.
   - **UniHack 2026 Scam Call Detection**: Client-side Android call screening architecture & DSP inference pipeline.
   - **Thailand Cyber Top Talent (Auto888)**: Binary exploitation leadership, reverse engineering, and web pentesting.
   - **Roblox Survival Horror Architecture**: Modern Luau scripting, DirectorAI finite state machines, and dynamic sanity mechanics.
   - **Interactive Modal**: Comprehensive hardware specs, algorithm pipelines, and metrics telemetry inspector.

3. **Tech Stack & Skills Matrix (`SkillsMatrix.tsx`)**:
   - Categorized across 4 technical domains:
     - **Languages**: C/C++, Python, TypeScript, Luau
     - **AI & Data**: PyTorch, OpenCV, NumPy, pandas, Matplotlib
     - **Hardware & Embedded**: ESP32 / ESP32-S3, Arduino / UNO R4, MPU6050 6-DoF IMU, KNOB-SVP, L298N & MOSFET Motor Drivers
     - **Tools & Environments**: VS Code, Docker, Git/GitHub, Linux/FreeRTOS

4. **Competitions & Experience Timeline (`Timeline.tsx`)**:
   - Vertical milestone tree with node badges:
     - SuperAI Engineer Season 5 (AI Fellow Candidate)
     - UniHack 2026 Hackathon (System Architect & Security Engineer)
     - WRO (World Robot Olympiad) Future Engineers (Autonomous Navigation Lead)
     - BangMod Hackathon (KMUTT Prototype Developer)
     - MakeX Robotics Competition (Tournament Winner)
     - Kibo Robot Programming Challenge (JAXA / NASA / NSTDA Astrobee)
     - CS50x Puzzle Day (Harvard CS50)

5. **Direct Dispatch Contact (`ContactSection.tsx`)**:
   - Quick one-click email clipboard copy button (`premsupthaksina@gmail.com`).
   - Static mailto dispatch composer and direct profile links (GitHub, LinkedIn).

---

## 🛠️ Getting Started

### Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Launch
```bash
npm run build
npm run start
```

### Viewport Verification Tests
```bash
node scripts/verify_screenshots.mjs
```
Captures high-resolution responsive desktop and mobile viewport screenshots directly to `public/screenshots/`.

---

## 👤 Author

**Prem Supthaksina**
- **Institution**: Computer Engineering, KMUTT
- **GitHub**: [@Pr3mz](https://github.com/Pr3mz)
- **Email**: [premsupthaksina@gmail.com](mailto:premsupthaksina@gmail.com)
