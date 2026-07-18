import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import FloatingDecor from "@/components/FloatingDecor";

const Home = () => {
  return (
    <div className="relative">
      <FloatingDecor />
      <HeroSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <ResumeSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ContactSection />
    </div>
  );
};

export default Home;
