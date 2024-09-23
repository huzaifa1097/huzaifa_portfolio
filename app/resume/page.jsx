"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { SiExpress,SiMysql ,SiMongodb,SiTailwindcss, SiNextdotjs,  } from "react-icons/si";
 const about = {
  title:"About me",
  description:"I’m a full-stack developer who brings innovation and functionality together to create standout web experiences. With a knack for problem-solving and a passion for technology, I turn your vision into a seamless, dynamic reality.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Abu Huzaifa Ahmad",
    },
    {
      fieldName:"Phone",
      fieldValue:"(+91) 9415098983",
    },
    {
      fieldName:"Experience",
      fieldValue:"Fresher",
    },
    {
      fieldName:"Mail",
      fieldValue:"thenameishuzaifa10@gmail.com",
    },
    {
      fieldName:"Discord",
      fieldValue:"lowkeyhuzaifa",
    },
    {
      fieldName:"Nationality",
      fieldValue:"Indian",
    },
    {
      fieldName:"Languages",
      fieldValue:"English,Hindi"
    },
  ] 
};

 //experince data
 const experince = {
  icon: '/assets2/resume/badge.svg',
  title:'My Experince',
  description:"",
  items:[
    {
      company:"TechSolutions Inc.",
      position:"Full Stack Developer",
      duration:"2024-present",
    },
    {
      company:"TechSolutions Inc.",
      position:"Full Stack Developer",
      duration:"2024-present",
    },
    {
      company:"TechSolutions Inc.",
      position:"Full Stack Developer",
      duration:"2024-present",
    },
    {
      company:"TechSolutions Inc.",
      position:"Full Stack Developer",
      duration:"2024-present",
    },
  ],

};

 const education = {
  icon: '/assets2/resume/cap.svg',
  title:'My Education',
  description:"Throughout my journey, I’ve earned diverse educational qualifications. Here are some highlights of my academic achievements:",
  items:[
    {
      institution:"Galgotia's University",
      degree:"Computer Science and Engineering",
      duration:"2021-present",
    },
    {
      institution:"Central Academy,Lucknow",
      degree:"Interimmidiate, CBSE",
      duration:"2019-2021",
    },
    {
      institution:"City Montessori School, Lucknow",
      degree:"High School, ICSE",
      duration:"2017-2019",
    },
  ],

};
  const skills = {
    title:"My Skills",
    description:"Along my journey, I’ve honed a versatile skill set. Here are some key abilities that drive my expertise:",
    skillList:[
      {
        icon:<FaHtml5/>,
        name: 'Hypertext Markup Language 5',
      },
      {
        icon:<FaCss3/>,
        name: 'Cascading Style Sheets 3',
      },
      {
        icon:<FaJs/>,
        name: 'javascript',
      },
      {
        icon:<SiMongodb/>,
        name: 'MongoDb',
      },
      {
        icon:<SiExpress/>,
        name: 'Express.js',
      },
      {
        icon:<FaReact/>,
        name: 'react.js',
      },
      {
        icon:<FaNodeJs/>,
        name: 'Node.js',
      },
      {
        icon:<SiNextdotjs/>,
        name: 'next.js',
      },
      {
        icon:<SiTailwindcss/>,
        name: 'Tailwind',
      },

      {
        icon:<FaGit/>,
        name: 'git',
      },
      {
        icon:<FaGithub/>,
        name: 'github',
      },
    ],
};
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
  <motion.div
  initial={{opacity:0}}
  animate={{
    opacity:1,
    transition:{delay:2.4, duration:0.4, ease:"easeIn"},
  }}
  className="min-h-[88vh] flex items-center justify-centre py-12 xl:py-0"
  >
  <div className="container max-auto">
    <Tabs defaultValue="education"// for adding experience just change education with experience and remove comments
    className="flex flex-col xl:flex-row gap-[60px]"
    >
      <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
        {/*<TabsTrigger value="Experince">Experince</TabsTrigger> */}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="about">About me</TabsTrigger>
      </TabsList>
      {/* Content */}
      <div className="min-h-[70vh] w-full">
        {/* <TabsContent value="experience" className="w-full">
        experince
        </TabsContent>*/}
        <TabsContent value="education" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{education.title}</h3>
          <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
            {education.description}
          </p>
          <ScrollArea className="h-[200px] overflow-y-auto">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {education.items.map((item,index)=> {
                return(
                  <li key={index}
                  className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    <div className="flex items-center gap-3">
                      {/*dot */}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.institution}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
        </div>
        </TabsContent>
        <TabsContent value="skills" className="w-full h-full">
        <div className=" flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{skills.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {skills.description}
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 xl:gap-[15px]">
          {skills.skillList.map((skill, index)=>{
            return(
              <li key={index}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[125px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-5xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                  </TooltipTrigger>
                  <TooltipContent>
                  <p className="capitalize">{skill.name}</p>
                </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </li>
            )
          })}
        </ul>
        </TabsContent>
        <TabsContent value="about" 
        className="w-full xl:text-left">
        <div className="flex flex-col gap-[30px]">
          <h3 className="text-4xl font-bold">{about.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {about.description}
          </p>
          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
            {about.info.map((item,index) => {
              return (
                <li key={index} className="flex items-center justify-between xl:justify-start gap-4">
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-xl">{item.fieldValue}</span>
                </li>
              )
            })}
          </ul>
          
        </div>
        </TabsContent>
      </div>
    </Tabs>
    
  </div>
  </motion.div>
  ); 
};

export default Resume
