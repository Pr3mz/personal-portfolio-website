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
    <div className="relative min-h-screen flex flex-col bg-black text-neutral-100">
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
