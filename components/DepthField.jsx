"use client";

import { useEffect } from "react";

const DepthField = () => {
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return undefined;

    let frame;
    const move = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 42;
        const y = (event.clientY / window.innerHeight - 0.5) * 42;
        const root = document.documentElement.style;
        root.setProperty("--depth-x", `${x}px`);
        root.setProperty("--depth-y", `${y}px`);
        root.setProperty("--depth-x-reverse", `${-x}px`);
        root.setProperty("--depth-y-reverse", `${-y}px`);
      });
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div className="depth-field" aria-hidden="true">
      <div className="depth-orb depth-orb-cyan" />
      <div className="depth-orb depth-orb-purple" />
      <div className="depth-ring depth-ring-one" />
      <div className="depth-ring depth-ring-two" />
      <div className="depth-cube">
        <span /><span /><span /><span /><span /><span />
      </div>
      <div className="depth-star depth-star-one" />
      <div className="depth-star depth-star-two" />
      <div className="depth-star depth-star-three" />
    </div>
  );
};

export default DepthField;
