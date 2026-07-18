"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight} from "react-icons/bs"
import { FaRobot, FaCode, FaPaintBrush, FaNetworkWired, FaDatabase } from "react-icons/fa";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/components/motion/variants";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/SectionHeading";

const services = [
    {
        num: "01",
        icon: <FaRobot />,
        title: "Advanced AI Agent Development",
        description: "Go beyond traditional applications with intelligent, autonomous AI agents. I architect and build full-stack AI systems that can reason, remember, and collaborate to solve complex problems—transforming your vision into a truly intelligent solution.",
        href: "/projects"
    },
    {
        num:'02',
        icon: <FaCode />,
        title:'Web Development',
        description:'Transform your ideas into powerful, full-stack web solutions. I craft secure, responsive websites that captivate users and drive results—bringing your digital vision to life from front to back.',
        href:"/projects"
    },
    {
        num:'03',
        icon: <FaPaintBrush />,
        title:'UI/UX Design',
        description:'Elevate your digital experience with intuitive, user-centered design. I create visually stunning, functional interfaces that engage users and enhance usability—transforming your vision into a seamless, captivating journey from concept to completion.',
        href:"https://www.figma.com/proto/fQy10p4EsrHEoYykhlVjcr/UX%2FUI-Design?page-id=0%3A1&node-id=1-1080&node-type=CANVAS&viewport=631%2C-98%2C0.13&t=1T4CyNd71PJcnuHX-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1080&show-proto-sidebar=1"
    },
    {
        num: "04",
        icon: <FaNetworkWired />,
        title: "Agentic Workflow Automation",
        description: "Design multi-agent systems that reason, delegate, and act. Using LangChain and CrewAI, I build autonomous pipelines where specialized agents collaborate to handle real business processes end-to-end, not just answer questions.",
        href: "/projects"
    },
    {
        num: "05",
        icon: <FaDatabase />,
        title: "RAG & LLM Integration",
        description: "Ground large language models in your own data. I build retrieval-augmented generation pipelines with vector search and integrate models like Gemini and Groq into production systems with proper context, memory, and guardrails.",
        href: "/projects"
    },
]

const ServicesSection = () =>
    {
        return(
            <section id="services" className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-24 scroll-mt-28">
                  <div className="container mx-auto">
                  <SectionHeading
                    index="02"
                    label="SERVICES"
                    title="What I"
                    accent="Do"
                    description="From autonomous agents to production-grade backends — here's how I can help build your next system."
                  />
                  <motion.div
                    variants={staggerContainer(0.15, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                    >
                    {services.map((service, index)=> {
                        return(
                            <motion.div key={index}
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            className={`group ${index === 0 ? "md:col-span-2" : ""}`}>
                            <SpotlightCard className="glass-card glass-card-hover flex-1 flex flex-col justify-center gap-6 p-8 h-full">
                            {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                      <span className="text-2xl text-accent/80 group-hover:text-accent group-hover:shadow-glow-cyan transition-all duration-500 w-10 h-10 rounded-lg border border-accent/20 bg-white/5 flex items-center justify-center">
                                        {service.icon}
                                      </span>
                                      <div className="text-4xl font-extrabold gradient-text opacity-80
                                      group-hover:opacity-100 transition-all duration-500">
                                      {service.num}</div>
                                    </div>
                                    <Link
                                    href={service.href}
                                    className="w-[60px] h-[60px] rounded-full bg-white/10 backdrop-blur border border-white/10 group-hover:bg-accent group-hover:shadow-glow-cyan
                                    transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-white group-hover:text-primary text-2xl transition-colors duration-500"/>
                                    </Link>
                                </div>
                                {/*title */}
                                <h2 className="text-[32px] font-bold leading-tight text-white
                                group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/* service decription*/}
                                <p className="text-white/60">{service.description}</p>
                                {/*border */}
                                <div className="border-b border-white/10 w-full"></div>
                            </SpotlightCard>
                            </motion.div>
                        )
                    })}

                  </motion.div>
                </div>
            </section>

        );
    };

export default ServicesSection;
