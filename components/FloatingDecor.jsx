"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FaPython, FaDocker, FaGithub, FaBrain, FaCloud, FaDatabase, FaRobot, FaReact } from "react-icons/fa";

const items = [
  { Icon: FaPython, style: { top: "10%", left: "3%" }, speed: 90, size: "text-3xl", color: "text-accent" },
  { Icon: FaBrain, style: { top: "22%", right: "5%" }, speed: -70, size: "text-4xl", color: "text-accent-purple" },
  { Icon: FaReact, style: { top: "38%", left: "5%" }, speed: 110, size: "text-3xl", color: "text-accent-magenta" },
  { Icon: FaDocker, style: { top: "50%", right: "4%" }, speed: -100, size: "text-3xl", color: "text-accent" },
  { Icon: FaRobot, style: { top: "62%", left: "4%" }, speed: 80, size: "text-4xl", color: "text-accent-purple" },
  { Icon: FaGithub, style: { top: "74%", right: "6%" }, speed: -85, size: "text-3xl", color: "text-accent-magenta" },
  { Icon: FaCloud, style: { top: "86%", left: "6%" }, speed: 95, size: "text-4xl", color: "text-accent" },
  { Icon: FaDatabase, style: { top: "96%", right: "5%" }, speed: -75, size: "text-3xl", color: "text-accent-purple" },
];

const FloatingIcon = ({ Icon, style, speed, size, color }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, speed > 0 ? 180 : -180]);

  return (
    <motion.div
      style={{ ...style, y, rotate, position: "absolute" }}
      className={`pointer-events-none ${size} ${color} opacity-[0.15]`}
    >
      <Icon />
    </motion.div>
  );
};

const FloatingDecor = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {items.map((item, i) => (
        <FloatingIcon
          key={i}
          Icon={item.Icon}
          speed={item.speed}
          size={item.size}
          color={item.color}
          style={item.style}
        />
      ))}
    </div>
  );
};

export default FloatingDecor;
