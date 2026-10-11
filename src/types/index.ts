export interface Project {
  id: string;
  title: string;
  short: string;
  long?: string;
  tags?: string[];
  image?: string; // relative to /public or URL
  repo?: string;
  report?: string;
  demo?: string;
  category?: "Robotics" | "IoT" | "Embedded" | "Software";
  year?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}
