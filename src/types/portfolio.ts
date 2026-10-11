export type DomainTag = 
  | "Robotics/Embedded" 
  | "AI/Computer Vision" 
  | "Web/Cybersecurity" 
  | "Game Engine/AI";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  domain: DomainTag;
  secondaryDomain?: DomainTag;
  summary: string;
  architectureDetails: string;
  tags: string[];
  hardwareSpecs?: string[];
  softwareSpecs?: string[];
  cadPreview?: {
    type: "cad" | "video" | "tracking";
    title: string;
    details: string;
  };
  repoUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  image?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillGroup {
  groupName: string;
  icon: string;
  accent: "cyan" | "emerald" | "amber" | "indigo";
  skills: {
    name: string;
    level?: string;
    tag?: string;
  }[];
}

export interface TimelineMilestone {
  period: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  badge: string;
  tags: string[];
}
