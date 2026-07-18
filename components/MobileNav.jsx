"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
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

const MobileNav = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(sectionIds, isHome);

  return (
    <Sheet>
      <SheetTrigger className="w-10 h-10 rounded-lg border border-accent/30 bg-white/5 flex justify-center items-center hover:shadow-glow-cyan transition-all duration-300">
        <CiMenuFries className="text-[24px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary border-white/10">
        {/* Nav name lgo */}
        <div className="mt-10 mb-16 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              huzaifa<span className="text-accent">.dev</span>
            </h1>
          </Link>
        </div>
        {/*navigation */}
        <nav className="flex flex-col justify-center items-stretch gap-3 px-4">
          {links.map((link, index) => {
            const isActive = isHome
              ? activeSection === link.hash
              : pathname === `/${link.hash === "home" ? "" : link.hash}`;
            return (
              <Link
                href={link.hash === "home" ? "/" : `/#${link.hash}`}
                key={index}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl text-lg capitalize transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-primary shadow-glow-cyan"
                    : "text-white/70 bg-white/5 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-base">{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
