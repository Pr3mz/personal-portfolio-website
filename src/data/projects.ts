import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "rescue-bot",
    title: "OpenCV Patrol Bot",
    short: "หุ่นยนต์สำรวจ — Computer Vision & Obstacle Avoidance",
    long: "Autonomous patrol robot developed for the WRO Future Engineers competition. Features real-time computer vision obstacle detection and path navigation algorithms using OpenCV and microcontrollers.",
    category: "Robotics",
    tags: ["Robotics", "OpenCV", "Python", "Autonomous", "Control"],
    image: "/assets/PATROL.png",
    repo: "https://github.com/Pr3mz/WRO_FUTURE_ENGINEER_Lesonance",
    year: "2024"
  },
  {
    id: "smart-cafe",
    title: "TechOasis Smart Cafe",
    short: "ร้านกาแฟอัจฉริยะ — IoT Automations and Live Monitoring",
    long: "End-to-end IoT automation system for smart cafe management. Integrates environment sensors, automated dispensing, and real-time telemetry dashboards for power and stock optimization.",
    category: "IoT",
    tags: ["IoT", "Dashboard", "Sensors", "Automation"],
    image: "/assets/PREM.png",
    report: "/assets/TECHOASIS.pdf",
    year: "2024"
  },
  {
    id: "smart-house",
    title: "Smart House Automation",
    short: "บ้านอัตโนมัติ — Sensors, Relays, and Scheduling System",
    long: "Comprehensive smart home framework enabling multi-room sensor readings, relay switching controls, scheduled routines, and cloud-connected remote supervision.",
    category: "IoT",
    tags: ["IoT", "Home Automation", "Relay Control"],
    image: "/assets/MAX.png",
    report: "https://www.canva.com/design/DAGWcI8C7t0/qClc-Ian3ohMFuP5M8SROA/edit?utm_content=DAGWcI8C7t0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    year: "2023"
  },
  {
    id: "train-alarm",
    title: "Train Crossing Alarm",
    short: "ระบบเตือนข้ามถนนรถไฟ — Sensor Trigger & Public Alert",
    long: "Safety warning mechanism deployed for railway road crossings. Uses proximity sensing to identify oncoming rail transit and trigger multi-stage warning sirens and flashing barriers.",
    category: "Embedded",
    tags: ["Embedded", "Safety", "Sensors", "Hardware"],
    image: "/assets/train.jpg",
    year: "2023"
  },
  {
    id: "auto-door",
    title: "Automatic Door System",
    short: "ระบบประตูอัตโนมัติด้วย Ultrasonic Sensor",
    long: "Automated door actuation system driven by ultrasonic distance sensing and motor driver controls, engineered for touchless hygiene and entry access.",
    category: "Embedded",
    tags: ["Embedded", "Ultrasonic", "Actuators"],
    image: "/assets/door.png",
    report: "/assets/door.pdf",
    year: "2023"
  },
  {
    id: "industrial-alarm",
    title: "Industrial Alarm System",
    short: "ระบบเตือนภัยในโรงงาน — PLC-like Logic & Fail-safe",
    long: "Industrial safety supervisor implementing fail-safe sequential logic, hazard trip thresholds, and audio-visual annunciators designed for manufacturing environments.",
    category: "Embedded",
    tags: ["Embedded", "PLC Logic", "Industrial", "Systems"],
    image: "/assets/industrial.png",
    report: "/assets/INDUSTRAIL_ROBOT.pdf",
    year: "2023"
  },
  {
    id: "smoke-car",
    title: "In-Vehicle Smoke Detector",
    short: "ตรวจจับควันในรถยนต์ — Real-time Alert & Incident Logging",
    long: "Automotive cabin safety device featuring electrochemical gas/smoke sensors, real-time auditory warnings, and event logging for vehicle fleet operators.",
    category: "Embedded",
    tags: ["Sensors", "Automotive", "Safety"],
    image: "/assets/que.png",
    year: "2023"
  },
  {
    id: "garbage-truck",
    title: "Smart Waste Collection Rover",
    short: "รถเก็บขยะอัตโนมัติ — Microcontroller & Mechanical Actuation",
    long: "Robotic waste management platform featuring mechanical arm pickup, trash bin capacity tracking, and obstacle navigation powered by dedicated microcontrollers.",
    category: "Robotics",
    tags: ["MECH", "Embedded", "Robotics", "Hardware"],
    image: "/assets/garbage.jpg",
    report: "/assets/Automatic Gar.pdf",
    year: "2024"
  }
];
