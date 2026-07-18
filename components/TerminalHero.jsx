"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import TerminalWindow from "@/components/TerminalWindow";

const lines = [
  { prompt: "whoami", output: "Abu Huzaifa Ahmad — Software Engineer" },
  { prompt: "current_role --active", output: "Navtech · Full-time · Hyderabad, India" },
  { prompt: "stack --top", output: "Python · FastAPI · LangChain · CrewAI · RAG" },
  { prompt: "status", output: "Building intelligent systems that ship to production." },
];

const title = (
  <>
    <div className="w-5 h-5 rounded-full overflow-hidden relative border border-white/20 shrink-0">
      <Image src="/assets2/photo3.png" fill alt="" className="object-cover" />
    </div>
    <span>ahmad@navtech: ~</span>
  </>
);

const TerminalHero = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const current = lines[visibleLines].output;
    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 16);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharCount(0);
    }, 450);
    return () => clearTimeout(t);
  }, [charCount, visibleLines]);

  const isDone = visibleLines >= lines.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="w-full max-w-[560px] mx-auto"
    >
      <TerminalWindow title={title} bodyClassName="font-mono text-sm min-h-[240px]">
        <div className="space-y-4">
          {lines.slice(0, Math.min(visibleLines + 1, lines.length)).map((line, i) => {
            const isCurrent = i === visibleLines && !isDone;
            return (
              <div key={i}>
                <div className="flex gap-2 text-accent">
                  <span>$</span>
                  <span>{line.prompt}</span>
                </div>
                <div className="text-white/70 pl-4 min-h-[1.25em]">
                  {isCurrent ? line.output.slice(0, charCount) : line.output}
                  {isCurrent && (
                    <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle" />
                  )}
                </div>
              </div>
            );
          })}
          {isDone && (
            <div className="flex gap-2 text-accent">
              <span>$</span>
              <span className="inline-block w-2 h-4 bg-accent animate-pulse align-middle" />
            </div>
          )}
        </div>
      </TerminalWindow>
    </motion.div>
  );
};

export default TerminalHero;
