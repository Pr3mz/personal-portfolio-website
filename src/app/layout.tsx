import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Prem Supthaksina | Computer Engineering @ KMUTT",
  description:
    "Prem Supthaksina — Computer Engineering at KMUTT, Assumption College Samutprakan alumnus. Engineering autonomous robotics, computer vision, and embedded control loops with a focus on physical AI at NVIDIA.",
  keywords: [
    "Prem Supthaksina",
    "KMUTT",
    "Computer Engineering",
    "Robotics",
    "OpenCV",
    "ESP32",
    "Arduino",
    "NVIDIA",
    "Physical AI"
  ],
  authors: [{ name: "Prem Supthaksina" }]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] antialiased min-h-screen selection:bg-[#76b900] selection:text-white transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
