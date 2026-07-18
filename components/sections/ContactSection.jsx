"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 9415098983',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'ahmadhuzaifa1097@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: '529-A/1517, Pant Nagar, Khurram Nagar, Lucknow, U.P. 226022.',
  },
];

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/components/motion/variants";
import TerminalWindow from "@/components/TerminalWindow";
import SectionHeading from "@/components/SectionHeading";

const glowClasses = ["hover:shadow-glow-cyan", "hover:shadow-glow-purple", "hover:shadow-glow-magenta"];

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 scroll-mt-28">
      <div className="container mx-auto">
        <SectionHeading
          index="05"
          label="CONTACT"
          title="Let's"
          accent="Talk"
          description="Have a project in mind or just want to connect? Send me a message and I'll get back to you."
        />
        <div className="flex flex-col xl:flex-row gap-[30px] justify-center">
          {/* Form */}
          <TerminalWindow
            title="contact.compose"
            className="xl:w-[54%] order-2 xl:order-none mb-16 xl:mb-0"
          >
            <form className="flex flex-col gap-6 w-full">
              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" className="bg-white/5 border-white/10 focus-visible:ring-accent focus-visible:border-accent" />
                <Input type="text" placeholder="Last Name" className="bg-white/5 border-white/10 focus-visible:ring-accent focus-visible:border-accent" />
                <Input type="email" placeholder="Email Address" className="bg-white/5 border-white/10 focus-visible:ring-accent focus-visible:border-accent" />
                <Input type="phone" placeholder="Phone Number" className="bg-white/5 border-white/10 focus-visible:ring-accent focus-visible:border-accent" />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full bg-white/5 border-white/10 focus:ring-accent">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="agentic-ai">Agentic Workflow Automation</SelectItem>
                    <SelectItem value="rag-llm">RAG &amp; LLM Integration</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea className="h-[200px] bg-white/5 border-white/10 focus-visible:ring-accent focus-visible:border-accent" placeholder="Type your message here" />
              {/* Button */}
              <Button size="lg" className="max-w-40 glow-border">
                Send Message
              </Button>
            </form>
          </TerminalWindow>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-1-none mb-8 xl:mb-0">
            <motion.ul
              variants={staggerContainer(0.15, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              {info.map((item, index) => {
                return (
                  <motion.li variants={fadeUp} key={index} className="flex items-center gap-6">
                    <div className={`w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] glass-card text-accent flex items-center justify-center transition-all duration-300 ${glowClasses[index % glowClasses.length]}`}>
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
