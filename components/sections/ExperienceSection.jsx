"use client";

import { motion } from "framer-motion";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { FaBriefcase, FaDatabase } from "react-icons/fa";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/SectionHeading";

// Enhanced data with skills and icons
const experienceData = [
  {
    company: "Navtech",
    position: "Software Engineer",
    duration: "Jun 2026 – Present",
    type: "Full-time",
    icon: <FaDatabase />,
    description: [
      "Develop enterprise applications using Python and Frappe/ERPNext for international clients across multiple industries.",
      "Customize and extend ERPNext modules to fit client-specific business workflows and reporting needs.",
      "Collaborate with an experienced team on production deployments for enterprise clients on-site in Hyderabad."
    ],
    skills: ["Python", "Frappe/ERPNext", "Enterprise Applications", "REST APIs"]
  },
  {
    company: "Independent / Freelance",
    position: "B2B Procurement Platform — Sole Engineer",
    duration: "Prior",
    type: "Independent",
    icon: <FaBriefcase />,
    description: [
      "Built and maintained a live B2B procurement platform end to end as the sole engineer.",
      "Designed REST APIs, PostgreSQL schemas, and catalogue/inventory data models for enterprise ordering workflows.",
      "Handled authentication, security, and full cloud deployment lifecycle independently."
    ],
    skills: ["Backend Architecture", "REST APIs", "PostgreSQL", "Security", "Cloud Deployment"]
  }
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 scroll-mt-28"
    >
      <div className="container mx-auto">
        <SectionHeading
          index="03"
          label="EXPERIENCE"
          title="Professional"
          accent="Journey"
          description="Architecting scalable solutions and driving technical innovation. Here is a timeline of my professional milestones."
        />

        <ScrollArea className="h-[600px] pr-4">
          <div className="relative ml-4 md:ml-6 space-y-12 py-4">
            {/* gradient beam line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent-purple to-accent-magenta opacity-30" />
            {/* traveling pulse of light along the beam */}
            <motion.div
              className="absolute left-0 w-[2px] h-24"
              style={{
                background: "linear-gradient(to bottom, transparent, #00f0ff, transparent)",
                boxShadow: "0 0 10px 2px rgba(0,240,255,0.6)",
              }}
              animate={{ top: ["0%", "90%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 bg-primary border-4 border-accent w-[20px] h-[20px] rounded-full z-10 box-content animate-pulse-glow" />

                <div className="flex flex-col gap-2 group">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {item.position}
                      </h4>
                      <div className="flex items-center gap-2 text-white/80">
                        <span className="text-accent">{item.icon}</span>
                        <span className="text-lg font-semibold">{item.company}</span>
                        <span className="text-white/40">|</span>
                        <span className="text-white/60 text-sm bg-white/5 px-2 py-1 rounded">{item.type}</span>
                      </div>
                    </div>
                    <div className="glass-card px-4 py-2 text-accent font-mono text-sm whitespace-nowrap">
                      [ {item.duration} ]
                    </div>
                  </div>

                  {/* Content Card */}
                  <SpotlightCard className="glass-card glass-card-hover p-6 mt-4">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                    <ul className="flex flex-col gap-3 relative z-10 mb-6">
                      {item.description.map((point, idx) => (
                        <li key={idx} className="flex gap-3 text-white/70 leading-relaxed">
                          <span className="text-accent mt-[6px] text-xs">◆</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {item.skills.map((skill, sIdx) => (
                        <Badge
                          key={sIdx}
                          variant="outline"
                          className="bg-white/5 text-white/80 border-white/10 group-hover:border-accent/30 group-hover:text-accent transition-all"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default ExperienceSection;
