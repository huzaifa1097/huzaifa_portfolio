"use client";

import { useRef, useState } from "react";

const TerminalWindow = ({ title, children, className = "", bodyClassName = "" }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos((p) => ({ ...p, opacity: 0 }))}
      className={`glass-card relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: pos.opacity,
          background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, rgba(0,240,255,0.12), transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          {title && (
            <div className="ml-3 flex items-center gap-2 text-xs text-white/50 font-mono truncate">
              {title}
            </div>
          )}
        </div>
        <div className={`p-6 flex-1 ${bodyClassName}`}>{children}</div>
      </div>
    </div>
  );
};

export default TerminalWindow;
