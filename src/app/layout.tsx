import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-neutral-100 antialiased min-h-screen selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
