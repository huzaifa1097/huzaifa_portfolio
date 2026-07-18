"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaJava,
  FaPython,
  FaRobot,

} from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { SiExpress,SiPostgresql ,SiMongodb,SiTailwindcss, SiNextdotjs, SiSpringboot, SiSpringsecurity,SiPostman,SiNetlify,SiVercel, SiFastapi,SiTypescript,SiLangchain,SiFirebase,SiGooglecloud,SiDocker} from "react-icons/si";
 const about = {
  title:"About me",
  description:"Software Engineer with a strong foundation in AI engineering, backend development, and enterprise applications. My AI work includes an agentic platform (OmniLeap) with RAG-based long-term memory, multi-agent orchestration using LangChain and CrewAI, and LLM integrations deployed on Google Cloud Run with Docker. Currently developing enterprise applications at Navtech using Python and Frappe/ERPNext for international clients across multiple industries, alongside a strong foundation in traditional backend systems like Java and Spring Boot.",
  info:[
    {
      fieldName:"Name:",
      fieldValue:"Abu Huzaifa Ahmad",
    },
    {
      fieldName:"Phone:",
      fieldValue:"(+91) 9415098983",
    },
    {
      fieldName:"Experience:",
      fieldValue:"Software Engineer",
    },
    {
      fieldName:"Mail:",
      fieldValue:"ahmadhuzaifa1097@gmail.com",
    },
    {
      fieldName:"Discord:",
      fieldValue:"lowkeyhuzaifa",
    },
    {
      fieldName:"Nationality:",
      fieldValue:"Indian",
    },
    {
      fieldName:"Languages:",
      fieldValue:"English,Hindi"
    },
  ]
};

 const education = {
  icon: '/assets2/resume/cap.svg',
  title:'My Education',
  description:"Throughout my journey, I’ve earned diverse educational qualifications. Here are some highlights of my academic achievements",
  items:[
    {
      institution:"Galgotia's University",
      degree:"Computer Science and Engineering",
      duration:"2021-2025",
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
        icon:<FaPython/>,
        name: 'Python 3.9',
      },

      {
        icon:<FaJava/>,
        name: 'Java 21',
      },
         {
        icon:<SiSpringboot/>,
        name: 'SpringBoot',
      },
      {
        icon:<SiFastapi/>,
        name: 'FastAPI',
      },
      {
        icon:<SiLangchain/>,
        name: 'LangChain',
      },
      {
        icon:<FaRobot/>,
        name: 'CrewAI',
      },
      {
        icon:<BsGear/>,
        name: 'Frappe/ERPNext',
      },

      {
        icon:<SiPostgresql/>,
        name: 'PostgreSql',
      },
      {
        icon:<SiFirebase/>,
        name: 'Firebase',
      },
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
        icon:<SiTypescript/>,
        name: 'Typescript',
      },
      {
        icon:<FaReact/>,
        name: 'react.js',
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
      {
        icon:<SiPostman/>,
        name: 'Postman',
      },
      {
        icon:<SiVercel/>,
        name: 'Vercel',
      },
      {
        icon:<SiDocker/>,
        name: 'Docker',
      },
      {
        icon:<SiGooglecloud/>,
        name: 'Google Cloud',
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
import SpotlightCard from "@/components/SpotlightCard";
import TerminalWindow from "@/components/TerminalWindow";
import SectionHeading from "@/components/SectionHeading";

const ResumeSection = () => {
  return (
  <section id="resume" className="min-h-[88vh] py-12 xl:py-24 scroll-mt-28">
  <div className="container mx-auto">
    <SectionHeading
      index="00"
      label="RESUME"
      title="My"
      accent="Resume"
      description="Education, skills, and everything else that doesn't fit in a timeline."
    />
    <Tabs defaultValue="education"
    className="flex flex-col gap-[40px]"
    >
      <TabsList className="flex flex-row w-fit mx-auto xl:mx-0 gap-2 p-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
        <TabsTrigger value="education" className="rounded-full px-6 py-2 font-mono text-sm data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-glow-cyan text-white/60 transition-all duration-300">Education</TabsTrigger>
        <TabsTrigger value="skills" className="rounded-full px-6 py-2 font-mono text-sm data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-glow-cyan text-white/60 transition-all duration-300">Skills</TabsTrigger>
        <TabsTrigger value="about" className="rounded-full px-6 py-2 font-mono text-sm data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:shadow-glow-cyan text-white/60 transition-all duration-300">About me</TabsTrigger>
      </TabsList>
      {/* Content */}
      <div className="min-h-[70vh] w-full">
        <TabsContent value="education" className="w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold gradient-text">{education.title}</h3>
          <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
            {education.description}
          </p>
          <ScrollArea className="h-[200px] overflow-y-auto">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {education.items.map((item,index)=> {
                return(
                  <li key={index}>
                  <SpotlightCard
                  className="glass-card glass-card-hover h-[184px] py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    <div className="flex items-center gap-3">
                      {/*dot */}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.institution}</p>
                    </div>
                  </SpotlightCard>
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
            <h3 className="text-4xl font-bold gradient-text">{skills.title}</h3>
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
                  <TooltipTrigger className="glass-card glass-card-hover w-full h-[125px] flex justify-center items-center group">
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
        <TerminalWindow title="whoami.sh">
          <div className="flex flex-col gap-[30px]">
            <p className="max-w-[600px] text-white/70 font-mono text-sm mx-auto xl:mx-0">
              {about.description}
            </p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item,index) => {
                return (
                  <li key={index} className="flex items-center justify-between xl:justify-start gap-4 font-mono text-sm">
                    <span className="text-accent">{item.fieldName}</span>
                    <span className="text-lg text-white">{item.fieldValue}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </TerminalWindow>
        </TabsContent>
      </div>
    </Tabs>

  </div>
  </section>
  );
};

export default ResumeSection;
