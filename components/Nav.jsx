"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaHome, FaCogs, FaFileAlt, FaBriefcase, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { useActiveSection } from "@/lib/useActiveSection";

const links = [
  { name: "home", hash: "home", icon: <FaHome /> },
  { name: "services", hash: "services", icon: <FaCogs /> },
  { name: "resume", hash: "resume", icon: <FaFileAlt /> },
  { name: "experience", hash: "experience", icon: <FaBriefcase /> },
  { name: "projects", hash: "projects", icon: <FaFolderOpen /> },
  { name: "contact", hash: "contact", icon: <FaEnvelope /> },
];

const sectionIds = links.map((l) => l.hash);

const Nav = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(sectionIds, isHome);

  return (
    <nav className="flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
      {links.map((link, index) => {
        const isActive = isHome ? activeSection === link.hash : pathname === `/${link.hash === "home" ? "" : link.hash}`;
        return (
          <Link
            href={link.hash === "home" ? "/" : `/#${link.hash}`}
            key={index}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors duration-300 ${
              isActive ? "text-primary" : "text-white/70 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-accent shadow-glow-cyan -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="text-xs">{link.icon}</span>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
