"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const aproject = [
  {
    num: "01",
    category: "frontend",
    title: "Spotify Clone",
    description:
      "This clone is an exciting and engaging project built using HTML and CSS that replicates the user interface and design of the popular music streaming platform, Spotify. With a keen focus on user experience and aesthetics, This Clone aims to provide a seamless and visually appealing music streaming experience for both music enthusiasts and web developers looking to hone their front-end development skills.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets2/work/Spotify.png",
    live: "https://lowkeyhuzaifa.github.io/Spotify-Clone",
    github: "https://github.com/lowkeyhuzaifa/Spotify-Clone",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Stubnb",
    description:
      "Stubnb is a full-stack web application designed specifically for students seeking affordable and convenient accommodations. Built using the MERN stack (MongoDB, Express, React, and Node.js), Stubnb provides a dedicated platform where students can easily search for, book, and manage rental accommodations near their educational institutions.Stubnb offers a user-friendly experience with secure user authentication, property listings, booking systems, and peer reviews. With a focus on student needs, Stubnb includes features such as budget-friendly filters, proximity search to campuses, and flexible lease options. The platform is fully responsive and optimized for both mobile and desktop, providing a seamless experience across devices.",
    stack: [{ name: "Html 5" },
       { name: "Css 3" },
       {name:"JavaScript"},
       {name:"MongoDb"},
        {name:"Express.js"},
         {name:"React.js"},
         {name:"Node.js"},
         {name:"Tailwind CSS"},
          {name:"Vite"}],
    image: "/assets2/work/stubnb.png",
    live: "https://stubnb.netlify.app/",
    github: "https://github.com/lowkeyhuzaifa/Stubnb",
  },
  
  
];

const Projects = () => {
  const [project, setProject] = useState(aproject[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(aproject[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition:{delay:2.4, duration:0.4,ease:"easeIn"}, }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl-h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col h-[50%] gap-4"> {/* Reduced gap value */}
              {/* Outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mt-0 mb-0">
                {project.category} project
              </h2>
              {/* Project description */}
              <p className="text-white/60 mt-0 mb-0">
                {project.description}
              </p>
            </div>
            {/* Project details and links */}
            <div className="mt-4"> {/* Adjusted margin-top for additional spacing */}
              {/* Stack */}
              <ul className="flex flex-wrap space-x-1">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent inline">
                    {item.name}
                    {index !== project.stack.length - 1 && <span>,&nbsp;</span>}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20 mb-4"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4 mt-4">
                {/* Live link */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[55px] h-[55px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        <TooltipContent>
                          <p>project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub link */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[55px] h-[55px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {aproject.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/*image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill="Project Image"
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    </div>
                    
                  </SwiperSlide>
                );
              })}
              {/*slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-30px)] md:bottom-[calc(50%-10px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"

                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
