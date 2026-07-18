"use client";

import { useEffect, useState } from "react";

const TypewriterSkills = ({ words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 1200 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="neon-chip inline-flex items-center gap-1 font-mono min-w-[180px]">
      {words[index].slice(0, subIndex)}
      <span className="inline-block w-[2px] h-4 bg-accent animate-pulse" />
    </span>
  );
};

export default TypewriterSkills;
