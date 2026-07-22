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
      className="absolute inset-x-0 top-0 z-30 text-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/" className="group relative flex items-center">
          <motion.div
            className="brand-3d"
            initial={{ opacity: 0, y: -18, rotateX: -25 }}
            animate={{ opacity: 1, y: [0, -4, 0], rotateX: [0, 4, 0], rotateY: [0, -3, 0] }}
            whileHover={{ rotateY: -9, rotateX: 7, scale: 1.04 }}
            transition={{
              opacity: { duration: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span className="brand-command">&gt;_</span>
            <h1 className="brand-wordmark">
              huzaifa<span>.dev</span>
            </h1>
          </motion.div>
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
