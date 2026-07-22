"use client";

import dynamic from "next/dynamic";
import TerminalHero from "@/components/TerminalHero";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import TypewriterSkills from "@/components/TypewriterSkills";
import { Button } from "@/components/ui/button";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/motion/variants";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

const topSkills = [
  "Python", "FastAPI", "LLMs", "RAG Pipelines", "LangChain", "CrewAI",
  "Frappe/ERPNext", "PostgreSQL", "REST APIs", "GCP", "Docker", "React", "TypeScript",
];

const HeroSection = () => {
  return (
    <section id="home" className="hero-grid relative isolate min-h-[calc(100svh-90px)] overflow-hidden scroll-mt-28">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="container relative z-10 mx-auto h-full">
        <div className="flex min-h-[calc(100svh-90px)] flex-col items-center justify-center py-16 xl:flex-row xl:justify-between xl:py-20">
          {/**text */}
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            animate="show"
            className="order-2 text-center xl:order-none xl:text-left"
          >
            <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-primary/50 px-3 py-1.5 text-xs text-accent shadow-glow-cyan backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Currently @Navtech</span>
            </motion.div>
            <motion.p variants={fadeUp} className="mb-3 text-[11px] font-medium uppercase tracking-[0.32em] text-white/45">
              Engineer / AI systems builder
            </motion.p>
            <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl xl:text-8xl">
              Engineering <br /> <span className="gradient-text">intelligence.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mb-8 max-w-[540px] text-sm leading-7 text-white/65 xl:text-base">
              I’m Abu Huzaifa Ahmad — building autonomous AI agents and dependable backends for teams that want systems which actually ship.
            </motion.p>
            {/* typing skills */}
            <motion.div variants={fadeUp} className="flex items-center justify-center xl:justify-start gap-2 mb-9 text-white/60 font-mono text-sm">
              <span>Skilled in</span>
              <TypewriterSkills words={topSkills} />
            </motion.div>
            {/*button and socials */}
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-6 sm:flex-row xl:items-center">
              <a href="/assets2/resume/resume_portfolio.pdf" download target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="group glow-border flex items-center gap-2 rounded-full px-5 py-5 text-xs uppercase tracking-wider">
                  <span>Download CV</span>
                  <FiDownload className="text-sm transition-transform duration-300 group-hover:translate-y-0.5" />
                </Button>
              </a>
              <a href="#projects" className="group flex items-center gap-2 text-xs uppercase tracking-wider text-white/60 transition-colors hover:text-accent">
                Explore work <FiArrowDownRight className="text-base transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
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
          <div className="relative mb-12 flex min-h-[420px] w-full items-center justify-center xl:order-none xl:mb-0 xl:min-h-[560px] xl:justify-end">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.12),transparent_52%)] blur-2xl" />
            <Scene3D className="absolute inset-0 scale-110 xl:scale-125" />
            <div className="relative w-full max-w-[560px] xl:translate-y-16">
              <TerminalHero />
              <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-primary/80 px-3 py-2 font-mono text-[10px] text-white/50 shadow-glass backdrop-blur-xl sm:block">
                <span className="mr-2 text-accent">●</span> SYSTEMS ONLINE
              </div>
              <div className="absolute -right-4 top-12 hidden rounded-full border border-accent-purple/30 bg-primary/75 px-3 py-1.5 font-mono text-[10px] text-accent-purple shadow-glow-purple backdrop-blur-xl sm:block">
                3D / LIVE
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default HeroSection;
