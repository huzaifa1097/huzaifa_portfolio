"use client";

import { useRef, useState } from "react";

const SpotlightCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50, opacity: 0, rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
      rotateX: ((e.clientY - rect.top) / rect.height - 0.5) * -4,
      rotateY: ((e.clientX - rect.left) / rect.width - 0.5) * 4,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos((p) => ({ ...p, opacity: 0 }))}
      className={`relative overflow-hidden transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: pos.opacity ? `perspective(1000px) rotateX(${pos.rotateX}deg) rotateY(${pos.rotateY}deg) translateZ(8px)` : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: pos.opacity,
          background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, rgba(0,240,255,0.12), transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
