"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  const { scrollY } = useScroll();
  const paddingY = useTransform(scrollY, [0, 120], [28, 12]);

  return (
    <motion.header
      style={{ paddingTop: paddingY, paddingBottom: paddingY }}
      className="text-white sticky top-0 z-30 bg-primary/60 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-lg border border-accent/30 bg-white/5 flex items-center justify-center text-accent font-bold font-mono group-hover:shadow-glow-cyan transition-all duration-300">
            {">"}_
          </span>
          <h1 className="text-2xl font-semibold">
            huzaifa<span className="text-accent">.dev</span>
          </h1>
        </Link>
        {/*desktop nav && hire me button */}

        <div className="hidden lg:flex items-center gap-6">
          <Nav />
          <Link href="/contact">
            <Button className="glow-border">Hire me</Button>
          </Link>
        </div>
        {/*mobile navigation*/}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
