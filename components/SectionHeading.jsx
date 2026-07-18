"use client";

import { motion } from "framer-motion";

const SectionHeading = ({ index, label, title, accent, description }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-4 text-center xl:text-left mb-12"
  >
    <span className="font-mono text-sm text-accent/80 tracking-widest">
      {`// ${index}_${label}`}
    </span>
    <h2 className="text-4xl xl:text-5xl font-bold">
      {title} <span className="gradient-text">{accent}</span>
    </h2>
    {description && (
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
