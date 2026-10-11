import type { Project, SkillGroup, TimelineMilestone } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "opencv-patrol-bot",
    title: "OpenCV Patrol Bot",
    subtitle: "Autonomous Vision-Guided Exploration & Obstacle Avoidance",
    domain: "Robotics/Embedded",
    secondaryDomain: "AI/Computer Vision",
    summary: "Autonomous patrol robot developed for the WRO Future Engineers competition. Features real-time computer vision obstacle detection and path navigation algorithms using OpenCV and microcontrollers.",
    architectureDetails: "Engineered a hybrid vision-motor pipeline: An onboard camera feeds frames into an OpenCV color segmentation and edge-detection routine running on a companion processor. Coordinate vectors are transmitted over high-speed serial to the microcontroller to drive twin DC gear motors with PID steering adjustments for real-time obstacle avoidance.",
    tags: ["OpenCV", "Robotics", "Python", "Autonomous Navigation", "Obstacle Avoidance", "WRO Future Engineers", "PID Control"],
    hardwareSpecs: [
      "Controller: High-speed Microcontroller + Companion Vision Compute",
      "Actuation: Twin DC Gear Motors with Differential Drive",
      "Sensing: Color Camera + Ultrasonic Proximity Arrays",
      "Power: Multi-cell LiPo with Regulated 5V/12V Power Rails"
    ],
    softwareSpecs: [
      "Vision Pipeline: OpenCV HSV Masking & Contour Centroid Tracking",
      "Control: Closed-loop Steering PID Algorithm in C++/Python",
      "Telemetry: Real-time Debug HUD & Sensor Telemetry Feed"
    ],
    cadPreview: {
      type: "cad",
      title: "PATROL_CHASSIS_ASSEMBLY.PNG",
      details: "Custom lightweight chassis layout balancing camera center-of-mass, sensor coverage, and low-center-of-gravity battery bay."
    },
    metrics: [
      { label: "Vision Latency", value: "18 ms" },
      { label: "Obstacle Accuracy", value: "98.5%" },
      { label: "Loop Rate", value: "50 Hz" }
    ],
    image: "/assets/PATROL.png",
    repoUrl: "https://github.com/Pr3mz/WRO_FUTURE_ENGINEER_Lesonance"
  },
  {
    id: "techoasis-smart-cafe",
    title: "TechOasis Smart Cafe",
    subtitle: "IoT Automation, Telemetry & Environment Controller",
    domain: "Robotics/Embedded",
    secondaryDomain: "AI/Computer Vision",
    summary: "End-to-end commercial IoT automation system for smart cafe management. Integrates environment sensors, automated dispensing valves, and a real-time web telemetry dashboard.",
    architectureDetails: "ESP32 nodes monitor ambient temperature, humidity, liquid levels, and power consumption across beverage prep stations. Automated solenoid valves meter dispensing with milliliter precision, streaming operational telemetry via MQTT to a live web dashboard.",
    tags: ["IoT", "ESP32", "MQTT", "Automation", "Sensors", "Dashboard", "C++"],
    hardwareSpecs: [
      "Controller: ESP32 Wi-Fi / Bluetooth Microcontroller",
      "Sensors: DHT22 Temperature/Humidity, Ultrasonic Reservoir Level",
      "Actuators: 12V Solenoid Dispenser Valves + Relay Array",
      "Display: 0.96\" I2C OLED Local Status Monitor"
    ],
    softwareSpecs: [
      "Protocol: MQTT Publish/Subscribe with JSON Payloads",
      "Firmware: Arduino C++ with Non-blocking Timers",
      "Dashboard: Responsive Cloud Management Panel"
    ],
    metrics: [
      { label: "Telemetry Latency", value: "< 100 ms" },
      { label: "Dispense Precision", value: "± 2 ml" },
      { label: "Node Uptime", value: "99.9%" }
    ],
    image: "/assets/PREM.png",
    reportUrl: "/assets/TECHOASIS.pdf"
  },
  {
    id: "smart-house-automation",
    title: "Smart House Automation",
    subtitle: "Environmental Monitoring, Multi-Zone Relays & Scheduling",
    domain: "Robotics/Embedded",
    summary: "Comprehensive architectural smart home scale prototype enabling multi-room sensor readings, automated relay switching, environmental control, and cloud-connected remote supervision.",
    architectureDetails: "Built inside a scale physical house model with custom wiring looms. Microcontrollers interface with light sensors, gas/temperature sensors, and multi-channel relays to automate interior climate, exterior security lighting, and hazard alerting.",
    tags: ["IoT", "Home Automation", "Relay Control", "Sensors", "Embedded", "Arduino"],
    hardwareSpecs: [
      "Microcontroller: Arduino Mega / ESP32 Central Hub",
      "Relay Bank: 8-Channel Optocoupler Isolated Relays",
      "Sensing: LDR Light, MQ Gas Detection, DHT Temperature",
      "Model: Handcrafted 3D Architectural Scale Residence"
    ],
    softwareSpecs: [
      "Control Logic: State Machine with Hysteresis Thresholds",
      "Remote Control: Cloud Dashboard & Mobile Switchboard",
      "Safety: Automatic Gas Emergency Cutoff Routine"
    ],
    metrics: [
      { label: "Sensor Channels", value: "8 Zones" },
      { label: "Relay Response", value: "< 50 ms" },
      { label: "Power Efficiency", value: "Optimal" }
    ],
    image: "/assets/MAX.png"
  },
  {
    id: "unihack-scam-call-detection",
    title: "UniHack 2026 Scam Call Detection",
    subtitle: "Client-Side Android Audio Screening System Architecture",
    domain: "AI/Computer Vision",
    secondaryDomain: "Web/Cybersecurity",
    summary: "Privacy-first Android system service implementing on-device conversational screening, intent classification, and real-time audio transcript parsing to neutralize financial fraud calls before reaching the user.",
    architectureDetails: "Architected around zero cloud audio leakage. Implemented Android CallScreeningService API hooks to intercept inbound unknown calls, routing speech streams into an on-device quantized acoustic neural net. The system cross-references conversation urgency triggers against known phishing heuristics while preserving end-to-end device isolation.",
    tags: ["Android Architecture", "Edge AI", "System Design", "Call Screening", "Kotlin", "Privacy", "Security"],
    hardwareSpecs: [
      "Platform: Android 14+ (API 34) Runtime Environment",
      "Compute: On-device NPU / Hexagon DSP acceleration",
      "Memory Footprint: <65MB RAM under continuous inference"
    ],
    softwareSpecs: [
      "Interception: Android Telecom CallScreeningService",
      "Model: Quantized 4-bit On-device NLP Classifier",
      "Latency: <200ms heuristic flag on malicious prompt pattern",
      "Privacy: Zero external telemetry, encrypted local audit log"
    ],
    metrics: [
      { label: "Intercept Latency", value: "< 250 ms" },
      { label: "Memory Footprint", value: "48 MB" },
      { label: "Cloud Leakage", value: "0 Bytes" }
    ],
    repoUrl: "https://github.com/Pr3mz"
  },
  {
    id: "automatic-door-system",
    title: "Automatic Door Ultrasonic Controller",
    subtitle: "Hardware Distance Sensing & Stepper Actuation",
    domain: "Robotics/Embedded",
    summary: "Touchless entry access actuator driven by ultrasonic proximity detection, safety latch timers, and motor driver controllers, engineered for touchless hygiene and automated entry access.",
    architectureDetails: "Hardware interrupt driven proximity verification with fail-safe anti-pinch threshold calibration. Ultrasonic pulses detect approaching visitors within 50cm, smoothly activating stepper motor drivers with dynamic speed deceleration.",
    tags: ["Embedded", "Ultrasonic", "Actuators", "C++", "Sensors", "Hardware Design"],
    hardwareSpecs: [
      "Sensor: HC-SR04 Ultrasonic Distance Sensor",
      "Motor: High-Torque Stepper / Servo Mechanism",
      "Driver: Stepper Driver with Current Limiting",
      "Structure: Custom Enclosure with Status LEDs"
    ],
    softwareSpecs: [
      "Algorithm: Moving Average Distance Filter",
      "Safety: Anti-Pinch Timeout & Obstacle Hold Routine",
      "Firmware: Arduino C++ Microcontroller Code"
    ],
    metrics: [
      { label: "Detection Range", value: "2 - 100 cm" },
      { label: "Response Time", value: "< 80 ms" },
      { label: "Open Cycle", value: "Smooth Decel" }
    ],
    image: "/assets/door.png",
    reportUrl: "/assets/door.pdf"
  },
  {
    id: "smart-waste-collection-rover",
    title: "Smart Waste Collection Rover",
    subtitle: "Autonomous Trash Bin Tracking & Mechanical Arm Actuation",
    domain: "Robotics/Embedded",
    summary: "Robotic waste management platform featuring mechanical arm pickup, trash bin capacity tracking, and obstacle navigation powered by dedicated microcontrollers.",
    architectureDetails: "Designed mechanical gripper and lifting linkage driven by geared servo motors. Onboard ultrasonic range sensors detect receptacle fullness, signaling the navigation system to execute autonomous route collection.",
    tags: ["Robotics", "Embedded", "Mechanical Actuation", "Hardware", "Arduino", "Sensors"],
    hardwareSpecs: [
      "Actuation: Multi-axis Gripper Arm with Metal Gear Servos",
      "Controller: Dual Arduino Uno R3 / Mega",
      "Chassis: Reinforced Acrylic & Aluminum Railings",
      "Sensing: Ultrasonic Fill Sensor & Infrared Line Trackers"
    ],
    softwareSpecs: [
      "Arm Kinematics: Coordinate Mapping for Bin Capture",
      "Navigation: Reflexive Obstacle Avoidance Routine"
    ],
    metrics: [
      { label: "Payload Capacity", value: "500 g" },
      { label: "Arm Cycles", value: "100+ Tested" }
    ],
    image: "/assets/garbage.jpg",
    reportUrl: "/assets/Automatic Gar.pdf"
  },
  {
    id: "train-crossing-alarm",
    title: "Train Crossing Safety System",
    subtitle: "Proximity Sensor Trigger & Public Alert Mechanism",
    domain: "Robotics/Embedded",
    summary: "Safety warning mechanism deployed for railway road crossings. Uses proximity sensing to identify oncoming rail transit and trigger multi-stage warning sirens and flashing barriers.",
    architectureDetails: "Dual-sensor beam break topology calculates train approach velocity to dynamically trigger crossing barriers, dual-tone sirens, and high-visibility flashing LED warning arrays.",
    tags: ["Embedded", "Safety", "Sensors", "Hardware", "Arduino"],
    hardwareSpecs: [
      "Sensing: Dual Infrared Beam Break Sensors",
      "Alerts: High-Decibel Piezo Siren + Alternating Red LEDs",
      "Actuation: Mini Servo Barrier Arm"
    ],
    softwareSpecs: [
      "Logic: Dual-State Interlock to Prevent False Triggers",
      "Firmware: Low-Latency Interrupt Routine"
    ],
    metrics: [
      { label: "Trigger Time", value: "< 25 ms" },
      { label: "Fail-Safe", value: "Active High" }
    ],
    image: "/assets/train.jpg"
  },
  {
    id: "thailand-cyber-top-talent-auto888",
    title: "Thailand Cyber Top Talent (Auto888)",
    subtitle: "Competitive Cybersecurity & Binary Exploitation Leadership",
    domain: "Web/Cybersecurity",
    summary: "Led team 'Auto888' in Thailand's premier national offensive security competition. Executed reverse engineering, binary exploitation, memory corruption triage, and web cryptography attacks.",
    architectureDetails: "Directed team strategy across Jeopardy and Attack-Defense CTF categories. Deconstructed x86_64 stripped binaries with Ghidra/GDB, bypassed stack canaries and ASLR via ROP chain generation, audited web services for authentication bypass flaws, and patched live vulnerable services under adversary traffic.",
    tags: ["Cybersecurity", "Binary Exploitation", "Reverse Engineering", "Web Penetration", "Ghidra", "GDB"],
    metrics: [
      { label: "National Standing", value: "Top Tier" },
      { label: "Role", value: "Team Lead" },
      { label: "Focus", value: "Pwn & Web" }
    ],
    repoUrl: "https://github.com/Pr3mz"
  },
  {
    id: "roblox-survival-horror-director-ai",
    title: "Roblox Survival Horror Architecture",
    subtitle: "Adaptive Threat DirectorAI & Client Sanity State Machine",
    domain: "Game Engine/AI",
    summary: "High-performance procedural game framework written in modern Luau. Features an asynchronous DirectorAI calculating dynamic stress levels, pacing entity spawns, and driving psychological sanity mechanics.",
    architectureDetails: "Built on modular actor-concurrency in Luau. The DirectorAI operates as a centralized Finite State Machine (FSM) sampling player audio, flashlight battery exhaustion, and spatial proximity to hostile nodes.",
    tags: ["Luau", "Finite State Machines", "Game AI", "DirectorAI", "Actor Concurrency"],
    metrics: [
      { label: "Frame Rate", value: "60 FPS Locked" },
      { label: "Network Tick", value: "30 Hz" },
      { label: "Luau Strict", value: "100%" }
    ],
    repoUrl: "https://github.com/Pr3mz"
  }
];

export const skillsGroupsData: SkillGroup[] = [
  {
    groupName: "Languages",
    icon: "code",
    accent: "cyan",
    skills: [
      { name: "C / C++", level: "Advanced", tag: "Firmware, Control Loops & Algorithms" },
      { name: "Python", level: "Advanced", tag: "OpenCV, Computer Vision & Data" },
      { name: "TypeScript / JS", level: "Proficient", tag: "Next.js, Web & IoT Dashboards" },
      { name: "Java", level: "Competent", tag: "OOP, Robotics & System Logic" }
    ]
  },
  {
    groupName: "Robotics & Hardware",
    icon: "microchip",
    accent: "amber",
    skills: [
      { name: "Arduino / UNO R4", level: "Advanced", tag: "Microcontrollers & Actuators" },
      { name: "ESP32 / ESP32-S3", level: "Advanced", tag: "FreeRTOS, Wi-Fi & MQTT" },
      { name: "Sensors & Actuators", level: "Advanced", tag: "Ultrasonic, IR, IMU, Servos, Motors" },
      { name: "Circuit Prototyping", level: "Proficient", tag: "Breadboards, Relays, L298N, Power Rails" }
    ]
  },
  {
    groupName: "Computer Vision & AI",
    icon: "cpu",
    accent: "emerald",
    skills: [
      { name: "OpenCV", level: "Advanced", tag: "Color Segmentation & Obstacle Detection" },
      { name: "Autonomous Driving", level: "Advanced", tag: "WRO Navigation & Steering PID" },
      { name: "Roboflow & YOLO", level: "Proficient", tag: "Object Detection Models" },
      { name: "PyTorch & Data", level: "Intermediate", tag: "NumPy, pandas, Matplotlib" }
    ]
  },
  {
    groupName: "Tools & Systems",
    icon: "terminal",
    accent: "indigo",
    skills: [
      { name: "VS Code & Git", level: "Daily Driver", tag: "Version Control & Extensions" },
      { name: "Linux & Terminal", level: "Proficient", tag: "POSIX Shell, GDB, Compilers" },
      { name: "Docker", level: "Proficient", tag: "Containerized Environments" },
      { name: "Target: NVIDIA", level: "Aspiration", tag: "Physical AI, Edge AI & Accelerated Compute" }
    ]
  }
];

export const timelineData: TimelineMilestone[] = [
  {
    period: "2026",
    title: "UniHack 2026 Hackathon",
    organization: "University Hackathon",
    role: "System Architect & Security Engineer",
    description: "Designed client-side Android call screening architecture for fraud detection under strict privacy constraints, eliminating cloud audio transit.",
    badge: "Innovation Finalist",
    tags: ["Android", "Call Screening", "Edge AI", "Privacy Architecture"]
  },
  {
    period: "2024",
    title: "WRO (World Robot Olympiad) Future Engineers",
    organization: "WRO Association",
    role: "Autonomous Navigation & Hardware Lead",
    description: "Engineered autonomous obstacle-avoidance racing robot with OpenCV vision tracking, steering PID controllers, and ultrasonic sensors.",
    badge: "National Finalist",
    tags: ["Robotics", "OpenCV", "Python", "Autonomous Driving", "WRO"]
  },
  {
    period: "2024",
    title: "BangMod Hackathon",
    organization: "KMUTT (King Mongkut's University of Technology Thonburi)",
    role: "Participant & Prototype Developer",
    description: "Participated in intensive hardware-software engineering hackathon at KMUTT, developing rapid hardware prototypes solving real-world challenges.",
    badge: "KMUTT Hackathon",
    tags: ["IoT", "Rapid Prototyping", "Full-Stack", "Hardware"]
  },
  {
    period: "2023",
    title: "MakeX Robotics Competition",
    organization: "MakeX International",
    role: "Robot Programmer & Mechanical Integrator",
    description: "Programmed competitive arena robot for multi-stage payload delivery and precise mechanical actuation under tight match timers.",
    badge: "Tournament Winner",
    tags: ["Robotics", "Sensors", "Mechanical Actuation", "Arena Match"]
  },
  {
    period: "2023",
    title: "Kibo Robot Programming Challenge (Kibo-RPC)",
    organization: "JAXA / NASA / NSTDA",
    role: "Autonomous Space Flight Programmer",
    description: "Programmed autonomous Astrobee robot in the International Space Station (ISS) Japanese Experiment Module (Kibo) using Java/ROS simulation.",
    badge: "Space Robotics",
    tags: ["NASA/JAXA", "Astrobee", "Space AI", "ROS"]
  },
  {
    period: "2023",
    title: "CS50x Puzzle Day",
    organization: "Harvard University / CS50",
    role: "Competitive Problem Solver",
    description: "Collaborated on solving complex algorithmic, cryptographic, and logical puzzle suites under international competition rules.",
    badge: "Global Event",
    tags: ["Algorithms", "Logic", "Cryptography"]
  }
];
