"use client";

import dynamic from "next/dynamic";
import TerminalHero from "@/components/TerminalHero";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import TypewriterSkills from "@/components/TypewriterSkills";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/motion/variants";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

const topSkills = [
  "Python", "FastAPI", "LLMs", "RAG Pipelines", "LangChain", "CrewAI",
  "Frappe/ERPNext", "PostgreSQL", "REST APIs", "GCP", "Docker", "React", "TypeScript",
];

const HeroSection = () => {
  return (
    <section id="home" className="h-full scroll-mt-28">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/**text */}
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            animate="show"
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 neon-chip mb-4 !py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Currently @Navtech</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="h1 mb-6">
              Hello I'm <br /> <span className="gradient-text">Huzaifa</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-[500px] mb-9 text-white/80">
              I build intelligent systems that ship to production — from autonomous AI agents to enterprise backends.
            </motion.p>
            {/* typing skills */}
            <motion.div variants={fadeUp} className="flex items-center justify-center xl:justify-start gap-2 mb-9 text-white/60 font-mono text-sm">
              <span>Skilled in</span>
              <TypewriterSkills words={topSkills} />
            </motion.div>
            {/*button and socials */}
            <motion.div variants={fadeUp} className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets2/resume/resume_portfolio.pdf" download>
                <Button
                  variant="outline"
                  className="glow-border uppercase flex items-center gap-2 px-3 py-1 text-sm">
                  <span>Download CV</span>
                  <FiDownload className="text-sm" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-5"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base
          hover:bg-accent hover:text-primary hover:shadow-glow-cyan transition-all duration-500"
                />
              </div>
            </motion.div>
          </motion.div>
          {/*terminal */}
          <div className="relative w-full flex justify-center xl:justify-end xl:order-none mb-12 xl:mb-0 min-h-[420px]">
            <Scene3D className="absolute inset-0 -z-10 scale-110 xl:scale-125" />
            <TerminalHero />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default HeroSection;
