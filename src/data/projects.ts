import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ai-face",
    title: "A.I. Face Recognition Entry",
    short: "ระบบเปิดประตูด้วยใบหน้า — AI + IoT integration",
    long:
      "Implemented face detection and recognition using OpenCV and a lightweight CNN. Hardware: ESP32-CAM, servo lock, Raspberry Pi for inference.",
    tags: ["AI", "Computer Vision", "IoT"],
    image: "/assets/ai-face.jpg",
    repo: "https://github.com/pr3mz/face-entry"
  },
  {
    id: "rescue-bot",
    title: "OpenCV Patrol Bot",
    short: "หุ่นยนต์สำรวจ — line following + obstacle avoidance",
    tags: ["Robotics", "Control"],
    image: "/assets/rescue-bot.jpg",
    repo: "https://github.com/Pr3mz/WRO_FUTURE_ENGINEER_Lesonance"
  },
  {
    id: "smart-cafe",
    title: "Smart Cafe",
    short: "ร้านกาแฟอัจฉริยะ — IoT automations and dashboard",
    tags: ["IoT", "Dashboard"],
    image: "/assets/smart-cafe.jpg",
    report: "https://www.canva.com/design/DAGWcI8C7t0/qClc-Ian3ohMFuP5M8SROA/edit?utm_content=DAGWcI8C7t0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: "smart-house",
    title: "Smart House",
    short: "บ้านอัตโนมัติ — sensors, relays, scheduling",
    tags: ["IoT"],
    image: "/assets/smart-house.jpg",
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
    image: "/assets/door.jpg",
    report: ""
  },
  {
    id: "industrial-alarm",
    title: "Industrial Alarm System",
    short: "ระบบเตือนภัยในโรงงาน — PLC-like logic",
    tags: ["Embedded", "Systems"],
    image: "/assets/industrial.jpg"
  },
  {
    id: "smoke-car",
    title: "Smoke Detector in Car",
    short: "ตรวจจับควันในรถ — alert + logging",
    tags: ["Sensors"],
    image: "/assets/smoke.jpg",
    report:""
  },
  {
    id: "garbage-truck",
    title: "Garbage Truck",
    short: "รถเก็บขยะอัตโนมัติ — microcontroller control",
    tags: ["MECH", "Embedded"],
    image: "/assets/garbage.jpg",
    report:""
  }
];
