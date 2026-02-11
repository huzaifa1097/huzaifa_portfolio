"use client";

import { motion } from "framer-motion";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { FaBriefcase, FaCode, FaServer, FaDatabase } from "react-icons/fa";

// Enhanced data with skills and icons
const experienceData = [
  {
    company: "Seatech",
    position: "Software Engineer",
    duration: "Dec '25 – Present",
    type: "Full-time",
    icon: <FaServer />,
    description: [
      "Led backend architecture design for a B2B procurement platform, defining normalized schemas and API contracts for scalable catalogue and enterprise ordering workflows.",
      "Implemented RESTful services for inventory filtering, SKU categorization, and bulk quotation processing across multi-attribute product datasets.",
      "Designed extensible domain models and validation layers to support product specifications and OEM bidding workflows.",
      "Engineered order aggregation and request batching logic to optimize bulk buyer transactions."
    ],
    skills: ["Backend Architecture", "System Design", "API Development", "Scalability", "Database Normalization"]
  },
  {
    company: "Seatech",
    position: "Software Engineering Intern",
    duration: "Sep '25 – Nov '25",
    type: "Internship",
    icon: <FaCode />,
    description: [
      "Contributed to core backend service development and maintenance cycles.",
      "Collaborated on API design implementations and optimized database queries for improved performance."
    ],
    skills: ["Backend Development", "REST APIs", "Database Management", "Team Collaboration"]
  }
];

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] text-center xl:text-left mb-12">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-4xl font-bold mb-4">
              Professional <span className="text-accent">Journey</span>
            </h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              Architecting scalable solutions and driving technical innovation. Here is a timeline of my professional milestones.
            </p>
          </motion.div>
        </div>

        <ScrollArea className="h-[600px] pr-4">
          <div className="relative border-l-2 border-white/20 ml-4 md:ml-6 space-y-12 py-4">
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
                <div className="absolute -left-[9px] top-0 bg-primary border-4 border-accent w-[20px] h-[20px] rounded-full z-10 box-content" />

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
                    <div className="bg-[#232329] px-4 py-2 rounded-lg border border-white/5 text-accent font-mono text-sm shadow-md whitespace-nowrap">
                      {item.duration}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-[#232329] p-6 rounded-xl border border-white/5 group-hover:border-accent/50 transition-all duration-300 shadow-lg mt-4 relative overflow-hidden">
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </motion.section>
  );
};

export default Experience;
