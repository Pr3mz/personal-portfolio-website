import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutBento from "@/components/about/AboutBento";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import SkillsMatrix from "@/components/skills/SkillsMatrix";
import Timeline from "@/components/timeline/Timeline";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";
import { projectsData, skillsGroupsData, timelineData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutBento />
        <ProjectsGrid projects={projectsData} />
        <SkillsMatrix groups={skillsGroupsData} />
        <Timeline milestones={timelineData} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
