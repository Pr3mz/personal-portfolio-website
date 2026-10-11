"use client";

import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";

interface Snippet {
  filename: string;
  lang: string;
  target: string;
  telemetry: string;
  code: string;
}

const snippets: Record<"cpp" | "py", Snippet> = {
  cpp: {
    filename: "esp32_control_loop.cpp",
    lang: "cpp",
    target: "ESP32-S3 Dual-Core FreeRTOS",
    telemetry: "1000Hz PID Task Pinned to Core 1",
    code: `// FreeRTOS High-Frequency Motor Control Task
#include <Arduino.h>
#include <freertos/task.h>

void TaskMotorPID(void *pvParameters) {
  TickType_t xLastWakeTime = xTaskGetTickCount();
  const TickType_t xFrequency = pdMS_TO_TICKS(1); // 1000Hz

  for(;;) {
    float yaw = readIMUYaw(); // MPU6050 6-DoF
    float error = targetHeading - yaw;
    float output = Kp * error + Ki * integral + Kd * (error - prev);

    applyPWM(MOTOR_LEFT,  baseSpeed + output);
    applyPWM(MOTOR_RIGHT, baseSpeed - output);

    vTaskDelayUntil(&xLastWakeTime, xFrequency);
  }
}`
  },
  py: {
    filename: "arena_tracker.py",
    lang: "py",
    target: "OpenCV 4.10 + Roboflow YOLOv8",
    telemetry: "ArUco Pose Estimation Matrix (60 FPS)",
    code: `import cv2
import cv2.aruco as aruco
import numpy as np

# Top-View Arena Tracking with ArUco Fiducial Marker
def extract_arena_pose(frame, camera_matrix, dist_coeffs):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    dict_aruco = aruco.getPredefinedDictionary(aruco.DICT_4X4_50)
    corners, ids, _ = aruco.detectMarkers(gray, dict_aruco)

    if ids is not None and 42 in ids:
        idx = np.where(ids == 42)[0][0]
        rvec, tvec, _ = aruco.estimatePoseSingleMarkers(
            corners[idx], 0.05, camera_matrix, dist_coeffs
        )
        # Vector output (X, Y, Theta)
        return float(tvec[0][0][0]), float(tvec[0][0][1])
    return None, None`
  }
};

export default function CodeTerminal() {
  const [activeTab, setActiveTab] = useState<"cpp" | "py">("cpp");
  const [displayedCode, setDisplayedCode] = useState("");
  const [copied, setCopied] = useState(false);

  const fullCode = snippets[activeTab].code;

  useEffect(() => {
    let index = 0;
    setDisplayedCode("");
    const timer = setInterval(() => {
      index += 3;
      if (index >= fullCode.length) {
        setDisplayedCode(fullCode);
        clearInterval(timer);
      } else {
        setDisplayedCode(fullCode.slice(0, index));
      }
    }, 15);

    return () => clearInterval(timer);
  }, [activeTab, fullCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs backdrop-blur-xl">
      {/* Window Titlebar */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-slate-400 font-medium text-[11px]">
            prem@kmutt-cpe: ~/firmware
          </span>
        </div>

        {/* Snippet Tabs */}
        <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab("cpp")}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              activeTab === "cpp"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-800/60"
                : "text-slate-400 hover:text-white"
            }`}
          >
            esp32_loop.cpp
          </button>
          <button
            onClick={() => setActiveTab("py")}
            className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
              activeTab === "py"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-800/60"
                : "text-slate-400 hover:text-white"
            }`}
          >
            aruco_mask.py
          </button>
        </div>
      </div>

      {/* Target Info Bar */}
      <div className="px-4 py-2 bg-slate-900/40 border-b border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="text-slate-500">TARGET:</span>
          <span className="text-slate-200">{snippets[activeTab].target}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          title="Copy snippet"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 bg-black/60 overflow-x-auto min-h-[280px] max-h-[360px] relative text-slate-200 leading-relaxed font-mono">
        <pre className="text-[12px]">{displayedCode}</pre>
        <span className="inline-block w-2 h-4 bg-cyan-400 align-middle ml-1 animate-pulse"></span>
      </div>

      {/* Telemetry Status Footer */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono">
        <span className="text-emerald-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          {snippets[activeTab].telemetry}
        </span>
        <span className="text-slate-500">FreeRTOS Tick: 1ms</span>
      </div>
    </div>
  );
}
