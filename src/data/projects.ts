import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "rescue-bot",
    title: "OpenCV Patrol Bot",
    short: "หุ่นยนต์สำรวจ — obstacle avoidance",
    tags: ["Robotics", "Control"],
    image: "/assets/PATROL.png",
    repo: "https://github.com/Pr3mz/WRO_FUTURE_ENGINEER_Lesonance"
  },
  {
    id: "smart-cafe",
    title: "Smart Cafe",
    short: "ร้านกาแฟอัจฉริยะ — IoT automations and dashboard",
    tags: ["IoT", "Dashboard"],
    image: "/assets/PREM.png",
    report: "/assets/TECHOASIS.pdf"
  },
  {
    id: "smart-house",
    title: "Smart House",
    short: "บ้านอัตโนมัติ — sensors, relays, scheduling",
    tags: ["IoT"],
    image: "/assets/MAX.png",
    report:"https://www.canva.com/design/DAGWcI8C7t0/qClc-Ian3ohMFuP5M8SROA/edit?utm_content=DAGWcI8C7t0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: "train-alarm",
    title: "Train Alarm",
    short: "ระบบเตือนข้ามถนนรถไฟ — sensing + alert",
    tags: ["Embedded", "Safety"],
    image: "/assets/train.jpg"
  },
  {
    id: "auto-door",
    title: "Automatic Door System",
    short: "ระบบประตูอัตโนมัติด้วย Ultrasonic Sensor",
    tags: ["Embedded"],
    image: "/assets/door.png",
    report: "/assets/door.pdf"
  },
  {
    id: "industrial-alarm",
    title: "Industrial Alarm System",
    short: "ระบบเตือนภัยในโรงงาน — PLC-like logic",
    tags: ["Embedded", "Systems"],
    image: "/assets/industrial.png"
  },
  {
    id: "smoke-car",
    title: "Smoke Detector in Car",
    short: "ตรวจจับควันในรถ — alert + logging",
    tags: ["Sensors"],
    image: "/assets/que.png",
    report:""
  },
  {
    id: "garbage-truck",
    title: "Garbage Truck",
    short: "รถเก็บขยะอัตโนมัติ microcontroller control",
    tags: ["MECH", "Embedded"],
    image: "/assets/garbage.jpg",
    report:""
  }
];
