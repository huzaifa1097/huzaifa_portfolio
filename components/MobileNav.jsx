"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci';

const links=[
    {
        name:"home",
        path:'/',
    },
    {
        name:"services",
        path:'/services',
    },
    {
        name:"resume",
        path:'/resume',
    },
    {
        name:"Projects",
        path:'/projects',
    },
    {
        name:"contact",
        path:'/contact',
    },
];
const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className ="flex flex-col">
        {/* Nav name lgo */}
            <div className="mt-35 mb-40 text-center text-2xl">
                <Link href="/">
                   <h1 className="text-4xl font-semibold mt-20 mb+4">
                    Huzaifa<span className="text-accent">.</span>
                   </h1>
                </Link>
            </div>
            {/*navigation */}
            <nav className="flex flex-col justify-center items-center gap-6 mt+4">
                {links.map((link, index)=> {
                    return(
                        <Link
                        href={link.path}
                        key={index}
                        className={`${
                        link.path === pathname &&
                        "text-accent border-b-2 border-accent"
                        }text-2xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  );
};

export default MobileNav
