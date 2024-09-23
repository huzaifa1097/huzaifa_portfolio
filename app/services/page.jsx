"use client";
import { motion } from "framer-motion";
import { BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";

const services = [
    {
        num:'01',
        title:'Web Development',
        description:'Transform your ideas into powerful, full-stack web solutions. I craft secure, responsive websites that captivate users and drive results—bringing your digital vision to life from front to back.',
        href:"/projects"
    },
    {
        num:'02',
        title:'UI/UX Design',
        description:'Elevate your digital experience with intuitive, user-centered design. I create visually stunning, functional interfaces that engage users and enhance usability—transforming your vision into a seamless, captivating journey from concept to completion.',
        href:"https://www.figma.com/proto/fQy10p4EsrHEoYykhlVjcr/UX%2FUI-Design?page-id=0%3A1&node-id=1-1080&node-type=CANVAS&viewport=631%2C-98%2C0.13&t=1T4CyNd71PJcnuHX-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1080&show-proto-sidebar=1"
    },
]

const Services = () =>
    {
        return(
            <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
                  <div className="container mx-auto">
                  <motion.div
                   initial={{opacity:0}}
                    animate={{
                        opacity:1,
                        transition:{delay:2, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    >
                    {services.map((service, index)=> {
                        return(
                            <div key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group">
                            {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent 
                                    group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}</div>
                                    <Link 
                                    href={service.href}
                                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent 
                                    transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-2xl"/>
                                    </Link>
                                </div>
                                {/*title */}
                                <h2 className="text-[42px] font-bold leading-none text-white
                                group hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/* service decription*/}
                                <p className="text-white/60">{service.description}</p>
                                {/*border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                   
                  </motion.div>
                </div>
            </section>
          
        );
    };

export default Services
